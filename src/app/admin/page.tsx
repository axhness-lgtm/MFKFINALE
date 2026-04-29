"use client";
import { useState, useEffect, useRef } from 'react';

export default function AdminDashboard() {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState<string | null>(null);
  
  // Search state
  const [searchTerm, setSearchTerm] = useState('');

  // Drag and drop state
  const [isDragging, setIsDragging] = useState(false);
  const [uploadProgress, setUploadProgress] = useState<{ done: number; total: number } | null>(null);
  
  // Inquiries state
  const [inquiries, setInquiries] = useState<any[]>([]);
  const [loadingInquiries, setLoadingInquiries] = useState(false);
  const [activeTab, setActiveTab] = useState<'inventory' | 'inquiries' | 'blogs'>('inventory');
  
  // Blogs state
  const [blogs, setBlogs] = useState<any[]>([]);
  const [loadingBlogs, setLoadingBlogs] = useState(false);
  const [editingBlogId, setEditingBlogId] = useState<string | null>(null);
  const [blogFormData, setBlogFormData] = useState({
    title: '',
    slug: '',
    excerpt: '',
    content: '',
    category: 'Journal',
    date: new Date().toISOString().split('T')[0],
    image: ''
  });
  
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

  const fetchBlogs = async () => {
    setLoadingBlogs(true);
    try {
      const res = await fetch('/api/blogs');
      if (res.ok) setBlogs(await res.json());
    } catch (e) {
      console.error(e);
    }
    setLoadingBlogs(false);
  };

  useEffect(() => {
    fetchProducts();
    fetchInquiries();
    fetchBlogs();
  }, []);


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

  // Move selected image to index 0 (makes it the thumbnail/cover)
  const setAsCover = (index: number) => {
    if (index === 0) return;
    const newImages = [...formData.images];
    const [selected] = newImages.splice(index, 1);
    newImages.unshift(selected);
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

  // Upload a single File to Cloudinary via the server-side API route
  const uploadToCloudinary = async (file: File, folder = 'mfk-products'): Promise<string> => {
    const form = new FormData();
    form.append('file', file);
    form.append('folder', folder);
    const res = await fetch('/api/upload', { method: 'POST', body: form });
    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new Error(err.error || 'Upload failed');
    }
    const data = await res.json();
    return data.url as string;
  };

  const handleMultipleImagesUpload = async (fileList: FileList) => {
    const validFiles = Array.from(fileList).filter(f => {
      const ok = ['image/jpeg', 'image/png', 'image/webp'].includes(f.type);
      if (!ok) alert(`"${f.name}" is not a valid format and was skipped.`);
      return ok;
    });
    if (validFiles.length === 0) return;

    setUploadProgress({ done: 0, total: validFiles.length });

    try {
      // Upload all images in parallel — Cloudinary handles compression
      const uploadOne = async (file: File): Promise<string> => {
        const url = await uploadToCloudinary(file, 'mfk-products');
        setUploadProgress(prev => prev ? { ...prev, done: prev.done + 1 } : prev);
        return url;
      };

      const newUrls = await Promise.all(validFiles.map(uploadOne));
      setFormData(prev => ({ ...prev, images: [...prev.images, ...newUrls] }));
    } catch (err) {
      console.error(err);
      alert('Failed to upload image(s). Please check your connection and try again.');
    } finally {
      setUploadProgress(null);
      if (fileInputRef.current) fileInputRef.current.value = '';
    }
  };

  const handleBlogSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!blogFormData.image) {
      alert("Please upload a cover image for the blog.");
      return;
    }

    const payload = {
       ...blogFormData,
       slug: blogFormData.slug.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '')
    };

    let res;
    if (editingBlogId) {
      res = await fetch(`/api/blogs/${editingBlogId}`, {
        method: 'PUT',
        body: JSON.stringify(payload),
      });
    } else {
      res = await fetch('/api/blogs', {
        method: 'POST',
        body: JSON.stringify(payload),
      });
    }

    if (!res.ok) {
      alert('Failed to save blog');
      return;
    }

    setBlogFormData({ title: '', slug: '', excerpt: '', content: '', category: 'Journal', date: new Date().toISOString().split('T')[0], image: '' });
    setEditingBlogId(null);
    fetchBlogs();
  };

  const handleBlogImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setUploadProgress({ done: 0, total: 1 });
      try {
        const url = await uploadToCloudinary(e.target.files[0], 'mfk-blogs');
        setBlogFormData(prev => ({ ...prev, image: url }));
      } catch (err) {
        alert('Upload failed. Please try again.');
      } finally {
        setUploadProgress(null);
      }
    }
  };

  const handleBlogDelete = async (id: string) => {
    if (confirm('Delete this blog post?')) {
      await fetch(`/api/blogs/${id}`, { method: 'DELETE' });
      fetchBlogs();
    }
  };

  const filteredProducts = products.filter(p => 
    (p.id && p.id.toLowerCase().includes(searchTerm.toLowerCase())) ||
    (p.name && p.name.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="pb-16">
      {/* Tab switcher */}
      <div className="flex flex-wrap gap-2 mb-8 border-b border-white/10 pb-6">
        <button
          onClick={() => setActiveTab('inventory')}
          className={`px-5 py-2 text-xs uppercase tracking-[0.2em] font-bold transition-colors ${
            activeTab === 'inventory' ? 'bg-accent text-black' : 'text-white/50 border border-white/20 hover:text-white hover:border-white/40'
          }`}
        >
          Inventory
        </button>
        <button
          onClick={() => setActiveTab('inquiries')}
          className={`px-5 py-2 text-xs uppercase tracking-[0.2em] font-bold transition-colors ${
            activeTab === 'inquiries' ? 'bg-accent text-black' : 'text-white/50 border border-white/20 hover:text-white hover:border-white/40'
          }`}
        >
          Inquiries
        </button>
        <button
          onClick={() => setActiveTab('blogs')}
          className={`px-5 py-2 text-xs uppercase tracking-[0.2em] font-bold transition-colors ${
            activeTab === 'blogs' ? 'bg-accent text-black' : 'text-white/50 border border-white/20 hover:text-white hover:border-white/40'
          }`}
        >
          Journal &amp; Blogs
        </button>
      </div>

      {activeTab === 'inventory' && (
        <>
            {/* Product Form */}
            <div className="bg-[#111] border border-white/10 p-8 mb-10">
              <h2 className="text-2xl font-serif text-white mb-6">
                {editingId ? 'Edit Piece' : 'Add New Piece'}
              </h2>
              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                                {uploadProgress ? (
                   <div className="space-y-3">
                     <p className="text-accent animate-pulse text-sm">Compressing & uploading...</p>
                     <div className="w-full max-w-xs mx-auto bg-white/10 rounded-full h-1.5">
                       <div
                         className="bg-accent h-1.5 rounded-full transition-all duration-300"
                         style={{ width: `${Math.round((uploadProgress.done / uploadProgress.total) * 100)}%` }}
                       />
                     </div>
                     <p className="text-xs text-white/40 uppercase tracking-widest">
                       {uploadProgress.done} / {uploadProgress.total} uploaded
                     </p>
                   </div>
                 ) : (
                   <div className="space-y-3">
                     <div className="text-4xl text-white/20">📷</div>
                     <p className="text-white/70">Drag & Drop multiple images here or <span className="text-accent underline">Browse</span></p>
                     <p className="text-xs text-white/40 uppercase tracking-widest">Supports JPG, PNG, WEBP · Auto-optimized before upload</p>
                   </div>
                 )}
              </div>
              
              {/* Thumbnail Picker Grid */}
              {formData.images.length > 0 && (
                <div className="mt-5">
                  <p className="text-[10px] uppercase tracking-widest text-white/40 mb-3">
                    Click any image to set it as the <span className="text-accent">thumbnail cover</span>
                  </p>
                  <div className="flex flex-wrap gap-4">
                    {formData.images.map((img, idx) => (
                      <div
                        key={idx}
                        className={`relative group cursor-pointer border-2 transition-all duration-200 ${
                          idx === 0
                            ? 'border-accent shadow-[0_0_12px_rgba(180,145,60,0.4)]'
                            : 'border-white/10 hover:border-white/40'
                        }`}
                        onClick={() => setAsCover(idx)}
                        title={idx === 0 ? 'Current thumbnail' : 'Click to set as thumbnail'}
                      >
                        <img
                          src={img}
                          alt={`Image ${idx + 1}`}
                          className="h-32 w-24 object-cover block"
                        />
                        {/* Remove button */}
                        <button
                          type="button"
                          className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-[10px] opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-600 z-10"
                          onClick={(e) => { e.stopPropagation(); removeImage(idx); }}
                          title="Remove"
                        >
                          ✕
                        </button>
                        {/* Badge */}
                        {idx === 0 ? (
                          <span className="absolute bottom-0 left-0 right-0 bg-accent text-black text-[8px] uppercase font-bold text-center py-1 tracking-wider">
                            ★ Cover
                          </span>
                        ) : (
                          <span className="absolute bottom-0 left-0 right-0 bg-black/80 text-white/60 text-[8px] uppercase font-bold text-center py-1 tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
                            Set as Cover
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
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
                disabled={!!uploadProgress || formData.images.length === 0} 
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

        {activeTab === 'blogs' && (
           <div className="space-y-16">
             {/* Add/Edit Blog Form */}
             <div className="bg-[#111] border border-white/10 p-8">
               <h2 className="text-2xl font-serif text-[#E8E0D0] mb-6">{editingBlogId ? 'Edit Journal Entry' : 'Post Journal Entry'}</h2>
               <form onSubmit={handleBlogSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 <div>
                   <label className="text-xs uppercase tracking-widest text-white/50 block mb-2">Title *</label>
                   <input required type="text" value={blogFormData.title} onChange={e => setBlogFormData({...blogFormData, title: e.target.value})} className="w-full bg-black border border-white/20 text-white p-3 outline-none focus:border-accent" />
                 </div>
                 <div>
                   <label className="text-xs uppercase tracking-widest text-white/50 block mb-2">URL Slug *</label>
                   <input required type="text" value={blogFormData.slug} onChange={e => setBlogFormData({...blogFormData, slug: e.target.value})} placeholder="e.g. art-of-bespoke" className="w-full bg-black border border-white/20 text-white p-3 outline-none focus:border-accent lowercase" />
                 </div>
                 <div>
                   <label className="text-xs uppercase tracking-widest text-white/50 block mb-2">Category *</label>
                   <input required type="text" value={blogFormData.category} onChange={e => setBlogFormData({...blogFormData, category: e.target.value})} className="w-full bg-black border border-white/20 text-white p-3 outline-none focus:border-accent" />
                 </div>
                 <div>
                   <label className="text-xs uppercase tracking-widest text-white/50 block mb-2">Publish Date *</label>
                   <input required type="date" value={blogFormData.date} onChange={e => setBlogFormData({...blogFormData, date: e.target.value})} className="w-full bg-black border border-white/20 text-white p-3 outline-none focus:border-accent [color-scheme:dark]" />
                 </div>
                 <div className="md:col-span-2">
                   <label className="text-xs uppercase tracking-widest text-white/50 block mb-2">Short Excerpt *</label>
                   <textarea required rows={2} value={blogFormData.excerpt} onChange={e => setBlogFormData({...blogFormData, excerpt: e.target.value})} className="w-full bg-black border border-white/20 text-white p-3 outline-none focus:border-accent resize-none" />
                 </div>
                 <div className="md:col-span-2">
                   <label className="text-xs uppercase tracking-widest text-white/50 block mb-2">Full Content (HTML allowed) *</label>
                   <textarea required rows={10} value={blogFormData.content} onChange={e => setBlogFormData({...blogFormData, content: e.target.value})} placeholder="<p>Write your article here...</p>" className="w-full bg-black border border-white/20 text-white p-3 outline-none focus:border-accent font-mono text-sm" />
                 </div>
                 <div className="md:col-span-2">
                   <label className="text-xs uppercase tracking-widest text-white/50 block mb-2">Cover Image *</label>
                   <input type="file" accept="image/*" onChange={handleBlogImageUpload} className="mb-4 block" />
                   {uploadProgress && <p className="text-accent animate-pulse mb-4">Uploading cover image...</p>}
                   {blogFormData.image && <img src={blogFormData.image} alt="Cover Preview" className="h-40 object-cover border border-white/10" />}
                 </div>
                 <div className="md:col-span-2 flex justify-end gap-4 mt-4">
                   {editingBlogId && (
                     <button type="button" onClick={() => { setEditingBlogId(null); setBlogFormData({ title: '', slug: '', excerpt: '', content: '', category: 'Journal', date: new Date().toISOString().split('T')[0], image: '' }); }} className="px-6 py-3 border border-white/20 text-white">Cancel</button>
                   )}
                   <button type="submit" disabled={!!uploadProgress || !blogFormData.image} className="hero-btn-secondary">{editingBlogId ? 'Update Post' : 'Publish Post'}</button>
                 </div>
               </form>
             </div>

             {/* Existing Blogs List */}
             <div>
               <h2 className="text-2xl font-serif text-[#E8E0D0] border-b border-white/10 pb-4 mb-6">Published Entries</h2>
               {loadingBlogs ? <p className="text-accent italic">Loading journals...</p> : (
                 <div className="grid grid-cols-1 gap-4">
                   {blogs.map(blog => (
                     <div key={blog.id} className="bg-[#111] border border-white/5 p-4 flex flex-col md:flex-row gap-6 justify-between items-center hover:border-white/20">
                       <div className="flex gap-6 items-center w-full">
                         {blog.image && <img src={blog.image} className="w-24 h-16 object-cover bg-black" alt={blog.title} />}
                         <div>
                           <h3 className="text-white font-medium">{blog.title}</h3>
                           <p className="text-xs text-white/50">{new Date(blog.date).toLocaleDateString()} • {blog.category}</p>
                           <p className="text-[10px] text-accent mt-1 tracking-widest uppercase">Slug: /{blog.slug}</p>
                         </div>
                       </div>
                       <div className="flex gap-4 w-full md:w-auto">
                         <button onClick={() => { setEditingBlogId(blog.id); setBlogFormData(blog); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="text-xs uppercase tracking-widest text-[#E8E0D0] hover:text-white px-4 py-2 bg-white/5">Edit</button>
                         <button onClick={() => handleBlogDelete(blog.id)} className="text-xs uppercase tracking-widest text-red-400 hover:text-red-300 px-4 py-2 bg-white/5">Delete</button>
                       </div>
                     </div>
                   ))}
                   {blogs.length === 0 && <p className="text-white/50 py-8 text-center bg-[#111] border border-white/5">No journal entries found.</p>}
                 </div>
               )}
             </div>
           </div>
        )}

    </div>
  );
}
