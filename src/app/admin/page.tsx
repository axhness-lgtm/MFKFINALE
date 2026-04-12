"use client";
import { useState, useEffect, useRef } from 'react';
import { FadeIn } from '@/components/animations/FadeIn';

export default function AdminDashboard() {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState<string | null>(null);
  
  // Search state
  const [searchTerm, setSearchTerm] = useState('');

  // Drag and drop state
  const [isDragging, setIsDragging] = useState(false);
  const [uploadingImage, setUploadingImage] = useState(false);
  
  // Auth state
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [passcode, setPasscode] = useState('');
  
  // Inquiries state
  const [inquiries, setInquiries] = useState<any[]>([]);
  const [loadingInquiries, setLoadingInquiries] = useState(false);
  const [activeTab, setActiveTab] = useState<'inventory' | 'inquiries'>('inventory');
  
  const [formData, setFormData] = useState({
    name: '',
    categoryId: 'wedding/designer-suits',
    desc: '',
    images: [] as string[],
    id: ''
  });

  const fileInputRef = useRef<HTMLInputElement>(null);

  const categories = [
    { id: 'wedding/designer-suits', label: 'Wedding > Designer Suits' },
    { id: 'wedding/indo-western', label: 'Wedding > Indo-Western' },
    { id: 'wedding/sherwani', label: 'Wedding > Sherwani' },
    { id: 'wedding/pattu-dhoti', label: 'Wedding > Pattu-Dhoti' },
    { id: 'wedding/designer-shirts', label: 'Wedding > Designer Shirts' },
    { id: 'formals/business-suits', label: 'Formals > Business Suits' },
    { id: 'formals/blazers', label: 'Formals > Blazers' },
    { id: 'formals/shirts', label: 'Formals > Shirts' },
    { id: 'custom-tailoring/international-fabrics', label: 'Custom > International Fabrics' },
    { id: 'custom-tailoring/fittings', label: 'Custom > Fittings' },
    { id: 'custom-tailoring/hand-work', label: 'Custom > Hand Work' },
  ];

  const fetchProducts = async () => {
    setLoading(true);
    const res = await fetch('/api/products');
    const data = await res.json();
    setProducts(data);
    setLoading(false);
  };

  const fetchInquiries = async () => {
    setLoadingInquiries(true);
    try {
      const res = await fetch('/api/inquiries');
      if (res.ok) {
        const data = await res.json();
        setInquiries(data);
      }
    } catch (e) {
      console.error(e);
    }
    setLoadingInquiries(false);
  };

  useEffect(() => {
    if (isAuthorized) {
      fetchProducts();
      fetchInquiries();
    }
  }, [isAuthorized]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passcode === 'mfkhan2026') {
      setIsAuthorized(true);
    } else {
      alert("Invalid Access Code");
    }
  };

  if (!isAuthorized) {
    return (
      <div className="min-h-screen pt-40 pb-24 bg-[#0a0a09] flex items-center justify-center">
        <form onSubmit={handleLogin} className="bg-[#111] border border-white/10 p-12 text-center space-y-6 max-w-md w-full">
          <h1 className="text-2xl font-serif text-[#E8E0D0]">Admin Access</h1>
          <input 
            type="password" 
            placeholder="Enter Access Code" 
            value={passcode}
            onChange={(e) => setPasscode(e.target.value)}
            className="w-full bg-black border border-white/20 text-white p-3 outline-none focus:border-accent text-center tracking-widest"
          />
          <button type="submit" className="hero-btn-secondary w-full">Enter Dashboard</button>
        </form>
      </div>
    );
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    let res;
    
    // Safety check
    if (formData.images.length === 0) {
      alert("Please upload at least 1 image for the piece.");
      return;
    }

    if (editingId) {
      res = await fetch(`/api/products/${editingId}`, {
        method: 'PUT',
        body: JSON.stringify(formData),
      });
    } else {
      res = await fetch('/api/products', {
        method: 'POST',
        body: JSON.stringify(formData),
      });
    }
    
    if (!res.ok) {
      const errorData = await res.json();
      alert(errorData.error || 'Failed to save piece');
      return;
    }

    setFormData({ name: '', categoryId: 'wedding/designer-suits', desc: '', images: [], id: '' });
    setEditingId(null);
    fetchProducts();
  };

  const handleEdit = (product: any) => {
    const defaultImages = product.images && product.images.length > 0 ? product.images : (product.image ? [product.image] : []);
    setFormData({ ...product, images: defaultImages });
    setEditingId(product.id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this piece?')) {
      await fetch(`/api/products/${id}`, { method: 'DELETE' });
      fetchProducts();
    }
  };

  const removeImage = (index: number) => {
    const newImages = [...formData.images];
    newImages.splice(index, 1);
    setFormData(prev => ({ ...prev, images: newImages }));
  };

  // Drag and Drop Handlers
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = async (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      await handleMultipleImagesUpload(e.dataTransfer.files);
    }
  };

  const handleFileInput = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      await handleMultipleImagesUpload(e.target.files);
    }
  };

  const handleMultipleImagesUpload = async (fileList: FileList) => {
    setUploadingImage(true);
    const newUrls: string[] = [];

    try {
      for (let i = 0; i < fileList.length; i++) {
        const file = fileList[i];
        if (file.type !== 'image/jpeg' && file.type !== 'image/png' && file.type !== 'image/webp') {
          alert(`File ${file.name} is not a valid format and was skipped.`);
          continue;
        }

        const formDataBody = new FormData();
        formDataBody.append('file', file);

        const res = await fetch('/api/upload', {
          method: 'POST',
          body: formDataBody,
        });
        
        if (!res.ok) throw new Error('Upload failed');
        const data = await res.json();
        newUrls.push(data.url);
      }
      
      setFormData(prev => ({ ...prev, images: [...prev.images, ...newUrls] }));
    } catch (err) {
      alert('Failed to upload image(s). Please try again.');
    } finally {
      setUploadingImage(false);
      // Reset input value so same files could be uploaded again if deleted then re-selected
      if (fileInputRef.current) fileInputRef.current.value = '';
    }
  };

  const filteredProducts = products.filter(p => 
    (p.id && p.id.toLowerCase().includes(searchTerm.toLowerCase())) ||
    (p.name && p.name.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="min-h-screen pt-40 pb-24 bg-[#0a0a09]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6 border-b border-white/10 pb-6">
          <h1 className="text-4xl font-serif text-[#E8E0D0]">Admin Dashboard</h1>
          <div className="flex gap-4">
            <button 
              onClick={() => setActiveTab('inventory')}
              className={`px-4 py-2 text-xs uppercase tracking-[0.2em] font-bold ${activeTab === 'inventory' ? 'bg-accent text-black' : 'text-white/50 border border-white/20 hover:text-white'}`}
            >
              Inventory Management
            </button>
            <button 
              onClick={() => setActiveTab('inquiries')}
              className={`px-4 py-2 text-xs uppercase tracking-[0.2em] font-bold ${activeTab === 'inquiries' ? 'bg-accent text-black' : 'text-white/50 border border-white/20 hover:text-white'}`}
            >
              Client Inquiries
            </button>
          </div>
        </div>

        {activeTab === 'inventory' && (
          <>
            {/* Product Form */}
            <div className="bg-[#111] border border-white/10 p-8 mb-16">
          <h2 className="text-2xl font-serif text-white mb-6">
            {editingId ? 'Edit Piece' : 'Add New Piece'}
          </h2>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label className="text-xs uppercase tracking-widest text-white/50 block mb-2">Unique Style Code</label>
              <input 
                type="text" 
                value={formData.id} 
                onChange={(e) => setFormData({...formData, id: e.target.value})}
                placeholder="Leave blank to auto-generate consecutively"
                className="w-full bg-black border border-white/20 text-white p-3 outline-none focus:border-accent"
              />
              <p className="text-[10px] text-accent mt-1 tracking-wider uppercase">Blank = System generates next consecutive ID for category</p>
            </div>
            
            <div>
              <label className="text-xs uppercase tracking-widest text-white/50 block mb-2">Piece Name *</label>
              <input 
                type="text" 
                required
                value={formData.name} 
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full bg-black border border-white/20 text-white p-3 outline-none focus:border-accent"
              />
            </div>

            <div className="md:col-span-2">
              <label className="text-xs uppercase tracking-widest text-white/50 block mb-2">Category Page *</label>
              <select 
                required
                value={formData.categoryId} 
                onChange={(e) => setFormData({...formData, categoryId: e.target.value})}
                className="w-full bg-black border border-white/20 text-white p-3 outline-none focus:border-accent"
              >
                {categories.map(c => <option key={`cat-${c.id}`} value={c.id}>{c.label}</option>)}
              </select>
            </div>

            {/* DRAG AND DROP MULTIPLE IMAGES UPLOAD */}
            <div className="md:col-span-2">
              <label className="text-xs uppercase tracking-widest text-white/50 block mb-2">Gallery Images (Up to 4 recommended) *</label>
              
              <div 
                className={`w-full border-2 border-dashed p-10 text-center cursor-pointer transition-colors ${isDragging ? 'border-accent bg-accent/5' : 'border-white/20 hover:border-white/50 bg-black'}`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current?.click()}
              >
                <input 
                   type="file" 
                   multiple
                   ref={fileInputRef} 
                   className="hidden" 
                   accept="image/jpeg, image/png, image/webp" 
                   onChange={handleFileInput}
                />
                
                {uploadingImage ? (
                   <p className="text-accent animate-pulse">Processing Uploads...</p>
                ) : (
                   <div className="space-y-3">
                     <div className="text-4xl text-white/20">📷</div>
                     <p className="text-white/70">Drag & Drop multiple images here or <span className="text-accent underline">Browse</span></p>
                     <p className="text-xs text-white/40 uppercase tracking-widest">Supports JPG, PNG, WEBP</p>
                   </div>
                )}
              </div>
              
              {/* Image Preview Grid */}
              {formData.images.length > 0 && (
                <div className="flex flex-wrap gap-4 mt-6">
                  {formData.images.map((img, idx) => (
                    <div key={idx} className="relative group border border-white/10 bg-black">
                      <img src={img} alt={`Preview ${idx}`} className="h-32 w-24 object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                      <button 
                        type="button"
                        className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-600"
                        onClick={() => removeImage(idx)}
                        title="Remove Image"
                      >
                        ✕
                      </button>
                      {idx === 0 && <span className="absolute bottom-0 left-0 right-0 bg-accent text-black text-[9px] uppercase font-bold text-center py-1">Main Cover</span>}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="md:col-span-2">
              <label className="text-xs uppercase tracking-widest text-white/50 block mb-2">Short Description</label>
              <textarea 
                rows={3}
                value={formData.desc} 
                onChange={(e) => setFormData({...formData, desc: e.target.value})}
                className="w-full bg-black border border-white/20 text-white p-3 outline-none focus:border-accent resize-none"
              />
            </div>

            <div className="md:col-span-2 flex justify-end gap-4 mt-4">
              {editingId && (
                <button 
                  type="button" 
                  onClick={() => { setEditingId(null); setFormData({ name: '', categoryId: 'wedding/designer-suits', desc: '', images: [], id: '' }); }}
                  className="px-6 py-3 border border-white/20 text-white hover:bg-white/5 transition flex-1 md:flex-none"
                >
                  Cancel Edit
                </button>
              )}
              <button 
                type="submit" 
                disabled={uploadingImage || formData.images.length === 0} 
                className="hero-btn-secondary flex-1 md:flex-none disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {editingId ? 'Update Piece' : 'Upload Piece'}
              </button>
            </div>
          </form>
        </div>

        {/* Product List Header with Search Bar */}
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row justify-between items-end border-b border-white/10 pb-4 gap-6">
            <h2 className="text-2xl font-serif text-[#E8E0D0] whitespace-nowrap">Manage Existing Inventory</h2>
            
            <div className="relative w-full md:w-96">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                 <span className="text-white/30">🔍</span>
              </div>
              <input 
                type="text" 
                placeholder="Search by Unique ID or Piece Name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-[#111] border border-white/20 text-white py-2 pl-10 pr-4 outline-none focus:border-accent"
              />
            </div>
          </div>
          
          {loading ? (
             <p className="text-accent italic">Loading database...</p>
          ) : (
            <div className="grid grid-cols-1 gap-4">
              {filteredProducts.map((product, idx) => {
                const previewImg = product.images && product.images.length > 0 ? product.images[0] : (product.image || '');
                return (
                <div key={product.id ? `prod-${product.id}-${idx}` : `prod-idx-${idx}`} className="bg-[#111] border border-white/5 p-4 flex flex-col md:flex-row items-center gap-6 justify-between hover:border-white/20 transition-colors">
                  <div className="flex items-center gap-6 w-full md:w-auto">
                    <img src={previewImg} className="w-16 h-20 object-cover bg-black" alt={product.name} />
                    <div>
                      <h3 className="text-white font-medium">{product.name}</h3>
                      <p className="text-xs text-white/50">{categories.find(c => c.id === product.categoryId)?.label}</p>
                      <p className="text-[10px] text-accent mt-1 tracking-widest uppercase">ID: {product.id} • {product.images?.length || 1} Image(s)</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 w-full md:w-auto mt-4 md:mt-0">
                    <button onClick={() => handleEdit(product)} className="text-xs uppercase tracking-widest text-[#E8E0D0] hover:text-white px-4 py-2 bg-white/5 flex-1 md:flex-none">Edit</button>
                    <button onClick={() => handleDelete(product.id)} className="text-xs uppercase tracking-widest text-red-400 hover:text-red-300 px-4 py-2 bg-white/5 flex-1 md:flex-none">Delete</button>
                  </div>
                </div>
              )})}
              
              {filteredProducts.length === 0 && (
                <p className="text-white/50 text-sm py-8 text-center bg-[#111] border border-white/5">
                  {searchTerm ? 'No pieces found matching your search.' : 'No pieces found in the database.'}
                </p>
              )}
            </div>
          )}
        </div>
        </>)}

        {activeTab === 'inquiries' && (
           <div className="space-y-6">
             <h2 className="text-2xl font-serif text-[#E8E0D0] border-b border-white/10 pb-4">Recent Inquiries & Consultations</h2>
             
             {loadingInquiries ? (
               <p className="text-accent italic">Loading inquiries...</p>
             ) : (
               <div className="grid grid-cols-1 gap-4">
                 {inquiries.slice().reverse().map((inquiry, idx) => (
                   <div key={`inq-${idx}`} className="bg-[#111] border border-white/5 p-6 space-y-4 hover:border-white/20 transition-colors">
                     <div className="flex justify-between items-start border-b border-white/5 pb-4">
                       <div>
                         <h3 className="text-xl text-accent font-serif">{inquiry.firstName} {inquiry.lastName}</h3>
                         <a href={`mailto:${inquiry.email}`} className="text-sm text-white/50 hover:text-white underline">{inquiry.email}</a>
                       </div>
                       <span className="text-[10px] uppercase tracking-widest text-white/30">
                         {new Date(inquiry.timestamp).toLocaleString()}
                       </span>
                     </div>
                     <div className="space-y-2">
                       <p className="text-xs uppercase tracking-widest text-white/40">Interest: <span className="text-white normal-case text-sm tracking-normal">{inquiry.interest || 'Not specified'}</span></p>
                       <div className="bg-black/50 p-4 border border-white/5">
                         <p className="text-sm text-white/80 whitespace-pre-wrap">{inquiry.message || 'No additional message provided.'}</p>
                       </div>
                     </div>
                   </div>
                 ))}

                 {inquiries.length === 0 && (
                   <p className="text-white/50 text-sm py-8 text-center bg-[#111] border border-white/5">
                     No inquiries found.
                   </p>
                 )}
               </div>
             )}
           </div>
        )}

      </div>
    </div>
  );
}
