"use client";

import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FadeIn } from '@/components/animations/FadeIn';
import { useWishlist } from '@/context/WishlistContext';
import { Heart } from 'lucide-react';
import { WishlistButton } from '@/components/ui/WishlistButton';
import { cn } from "@/lib/utils";

export default function ProductDetails() {
  const params = useParams();
  const id = params?.id as string;
  
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [activeImage, setActiveImage] = useState<string>('');
  const [selectedFitting, setSelectedFitting] = useState<string>('');
  const { toggleItem, isInWishlist } = useWishlist();

  useEffect(() => {
    // Fetch product details entirely from the new API
    if (!id) return;
    
    fetch('/api/products')
      .then(res => res.json())
      .then(data => {
        const found = data.find((p: any) => p.id === id);
        if (found) {
          setProduct(found);
          const firstImage = (found.images && found.images.length > 0) ? found.images[0] : found.image;
          setActiveImage(firstImage);
        }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0a0a09] flex items-center justify-center">
        <p className="text-accent tracking-widest uppercase text-sm animate-pulse">Loading Garment Details...</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-[#0a0a09] flex flex-col items-center justify-center space-y-6">
        <p className="text-white text-2xl font-serif">Piece Not Found</p>
        <Link href="/collections" className="text-accent uppercase tracking-widest text-xs border-b border-accent pb-1">Return to Collections</Link>
      </div>
    );
  }

  const name = product.name;
  const derivedThumbnails = product.images && product.images.length > 0 
      ? product.images 
      : [product.image];

  return (
    <div className="min-h-screen pt-24 pb-12 bg-[#0a0a09] text-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* Breadcrumbs */}
        <div className="text-[10px] uppercase tracking-widest text-white/50 mb-6 border-b border-white/10 pb-3">
          <Link href="/" className="hover:text-white transition-colors">Home</Link> &nbsp;/&nbsp; 
          <span className="capitalize">{product.categoryId?.split('/')[0]}</span> &nbsp;/&nbsp; 
          <span className="text-accent">{name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Thumbnails (Left - Desktop) */}
          <div className="hidden lg:flex lg:col-span-1 flex-col gap-3">
            {derivedThumbnails.map((thumb: string, idx: number) => (
              <button 
                key={idx} 
                onClick={() => setActiveImage(thumb)}
                className={`relative w-full aspect-[3/4] border ${activeImage === thumb ? 'border-accent' : 'border-white/10 shrink-0 opacity-60 hover:opacity-100'} transition-all`}
              >
                <Image src={thumb} alt={`Thumbnail ${idx}`} fill className="object-cover" />
              </button>
            ))}
          </div>

          {/* Main Image */}
          <div className="lg:col-span-11 xl:col-span-5 relative aspect-[3/4] bg-[#111] overflow-hidden group shadow-2xl">
            {activeImage && (
              <>
                <Image 
                  src={activeImage} 
                  alt={name} 
                  fill 
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-1000 group-hover:scale-110 opacity-90 group-hover:opacity-100" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                <WishlistButton 
                  item={{ 
                    id: String(id), 
                    image: activeImage, 
                    title: name, 
                    category: product.categoryId?.split('/')[0] || 'Garment' 
                  }} 
                  className="opacity-100 md:opacity-100 bg-black/50 scale-125 top-6 right-6 hover:scale-[1.4] transition-transform" 
                />
              </>
            )}
          </div>

          {/* Thumbnails (Mobile Below Main Image) */}
          <div className="flex lg:hidden overflow-x-auto gap-4 snap-x hide-scrollbar mb-6">
            {derivedThumbnails.map((thumb: string, idx: number) => (
              <button 
                key={idx} 
                onClick={() => setActiveImage(thumb)}
                className={`relative w-24 aspect-[3/4] shrink-0 border ${activeImage === thumb ? 'border-accent' : 'border-white/10 opacity-60'}`}
              >
                <Image src={thumb} alt={`Thumbnail ${idx}`} fill className="object-cover" />
              </button>
            ))}
          </div>

          {/* Product Details (Right) */}
          <div className="lg:col-span-11 xl:col-span-6 flex flex-col space-y-4 lg:pl-12">
            
            <div className="border-b border-white/10 pb-4">
              <h1 className="text-2xl md:text-4xl font-serif text-[#E8E0D0] mb-2 leading-tight uppercase tracking-wide">{name}</h1>
              <p className="text-[10px] uppercase tracking-[0.2em] text-white/30 mb-3 font-medium">Style Code: MFK-{id}</p>
              <p className="text-sm text-white/60 leading-relaxed font-light normal-case max-w-xl">{product.desc}</p>
              
              <div className={cn(
                "flex items-center gap-4 text-sm mt-4 transition-all duration-500 overflow-hidden",
                selectedFitting === 'Custom Measurements' ? "max-h-20 opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-4"
              )}>
                 <span className="bg-accent/10 py-1.5 px-4 border border-accent/20 text-accent font-medium uppercase tracking-widest text-[9px]">Made to Measure</span>
                 <span className="text-white/60 text-[10px] uppercase tracking-widest font-bold">15-25 Working Days</span>
              </div>
            </div>

            {/* Form Variations */}
            <div className="space-y-4">
              <div>
                <label className="text-[9px] uppercase tracking-[0.2em] text-white/20 block mb-2 font-bold">Service Required *</label>
                <div className="flex gap-3">
                  <button className="flex-1 py-3 border border-white/10 text-[10px] tracking-widest uppercase hover:border-white/30 transition-all bg-white/5 opacity-60 hover:opacity-100">Unstitched</button>
                  <button className="flex-1 py-3 border border-accent text-accent text-[10px] tracking-widest uppercase bg-accent/5 hover:bg-accent hover:text-black transition-all font-bold">Stitched</button>
                </div>
              </div>

              <div>
                <label className="text-[9px] uppercase tracking-[0.2em] text-white/20 block mb-2 font-bold">Size / Fitting *</label>
                <select 
                  className="w-full bg-[#0d0d0c] border border-white/10 text-white text-xs py-3 px-4 outline-none focus:border-accent transition-colors cursor-pointer"
                  value={selectedFitting}
                  onChange={(e) => setSelectedFitting(e.target.value)}
                >
                  <option value="">-- Select Fitting Option --</option>
                  <option value="Standard Sizing">Standard Sizing (S/M/L/XL)</option>
                  <option value="Custom Measurements">Custom Measurements</option>
                  <option value="Consultation Required">Consultation Required</option>
                </select>
              </div>
            </div>

            {/* CTAs (Moved above comments) */}
            <div className="pt-4 flex flex-wrap gap-3">
              <Link 
                href={`/contact?inquire=${encodeURIComponent(name)}&id=${encodeURIComponent(id as string)}`}
                className="flex-[2] min-w-[200px] text-center bg-[#E8E0D0] text-black py-3.5 uppercase tracking-[0.2em] text-[10px] font-bold hover:bg-white transition-all transform hover:scale-[1.01] shadow-lg"
              >
                SEND A QUERY / BOOK CONSULTATION
              </Link>
              
              <button 
                onClick={() => toggleItem({ id: String(id), image: activeImage, title: name, category: product.categoryId?.split('/')[0] || 'Garment' })}
                className={`flex-1 min-w-[160px] flex items-center justify-center gap-3 py-3.5 uppercase tracking-[0.2em] text-[10px] font-bold transition-all border ${
                  isInWishlist(String(id)) 
                    ? 'border-accent text-accent bg-accent/10' 
                    : 'border-white/10 text-white hover:border-white/30 hover:bg-white/5'
                }`}
              >
                <Heart className={`w-3.5 h-3.5 transition-transform duration-500 ${isInWishlist(String(id)) ? 'fill-accent scale-110' : ''}`} />
                {isInWishlist(String(id)) ? 'SAVED' : 'WISHLIST'}
              </button>
            </div>

            <div className="pt-4 pb-4">
               <label className="text-xs uppercase tracking-[0.2em] text-white/30 block mb-4 font-bold">Add Custom Requirements / Comments</label>
               <textarea 
                 rows={4} 
                 className="w-full bg-[#0d0d0c] border border-white/10 text-white text-sm py-4 px-5 outline-none focus:border-accent resize-none placeholder:text-white/10"
                 placeholder="Describe your measurement preferences, fabric choices, or specific deadline requests..."
               />
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
