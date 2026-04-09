"use client";

import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FadeIn } from '@/components/animations/FadeIn';
import { useWishlist } from '@/context/WishlistContext';
import { Heart } from 'lucide-react';
import { WishlistButton } from '@/components/ui/WishlistButton';

export default function ProductDetails() {
  const params = useParams();
  const id = params?.id as string;
  
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [activeImage, setActiveImage] = useState<string>('');
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
    <div className="min-h-screen pt-32 pb-24 bg-[#0a0a09] text-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* Breadcrumbs */}
        <div className="text-[10px] uppercase tracking-widest text-white/50 mb-8 border-b border-white/10 pb-4">
          <Link href="/" className="hover:text-white transition-colors">Home</Link> &nbsp;/&nbsp; 
          <span className="capitalize">{product.categoryId?.split('/')[0]}</span> &nbsp;/&nbsp; 
          <span className="text-accent">{name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Thumbnails (Left - Desktop) */}
          <div className="hidden lg:flex lg:col-span-1 flex-col gap-4">
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
          <div className="lg:col-span-5 relative aspect-[3/4] bg-[#111] overflow-hidden group">
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
                  className="opacity-100 md:opacity-100 bg-black/50 scale-110 top-6 right-6 hover:scale-[1.2]" 
                />
              </>
            )}
          </div>

          {/* Thumbnails (Mobile Below Main Image) */}
          <div className="flex lg:hidden overflow-x-auto gap-4 snap-x hide-scrollbar">
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
          <div className="lg:col-span-6 flex flex-col space-y-8 lg:pl-8">
            
            <div className="border-b border-white/10 pb-6">
              <h1 className="text-3xl md:text-4xl font-serif text-[#E8E0D0] mb-3 leading-tight">{name}</h1>
              <p className="text-xs uppercase tracking-widest text-white/50 mb-4">Style Code: MFK-{id}</p>
              <p className="text-sm text-white/70 leading-relaxed font-light">{product.desc}</p>
              
              <div className="flex items-center gap-4 text-sm mt-6">
                 <span className="bg-white/5 px-4 py-2 border border-white/10 text-white/70">Made to Measure</span>
                 <span className="text-accent text-xs uppercase tracking-widest">40 to 45 Working Days</span>
              </div>
            </div>

            {/* Form Variations */}
            <div className="space-y-6">
              <div>
                <label className="text-xs uppercase tracking-widest text-white/50 block mb-3">Service Required *</label>
                <div className="flex gap-4">
                  <button className="flex-1 py-3 border border-white/20 text-sm hover:border-white transition-colors bg-white/5">Unstitched (Fabric)</button>
                  <button className="flex-1 py-3 border border-accent text-accent text-sm hover:bg-accent hover:text-black transition-colors">Stitched / Commission</button>
                </div>
              </div>

              <div>
                <label className="text-xs uppercase tracking-widest text-white/50 block mb-3">Size / Fitting *</label>
                <select className="w-full bg-[#0a0a09] border border-white/20 text-white text-sm py-3 px-4 outline-none focus:border-accent">
                  <option>-- Select Option --</option>
                  <option>Standard Sizing (S/M/L/XL)</option>
                  <option>Bespoke / Custom Measurements</option>
                  <option>Consultation Required</option>
                </select>
              </div>

              <div>
                 <label className="text-xs uppercase tracking-widest text-white/50 block mb-3">Add Custom Requirements / Comments</label>
                 <textarea 
                   rows={3} 
                   className="w-full bg-[#0a0a09] border border-white/20 text-white text-sm py-3 px-4 outline-none focus:border-accent resize-none"
                   placeholder="Add your comments here (e.g. fabric preference, timeline)..."
                 />
              </div>
            </div>

            {/* SEND QUERY CTA */}
            <div className="pt-2">
              <div className="bg-white/5 border border-white/10 p-4 flex items-start gap-4 mb-6">
                 <span className="text-xl">✈️</span>
                 <p className="text-[11px] text-white/60 uppercase tracking-wider leading-relaxed">
                   We provide consultation & shipping worldwide. Our tailoring experts will reach out to you within 24 hours of your inquiry to discuss fabric, measurements, and exact pricing.
                 </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href={`/contact?inquire=${encodeURIComponent(name)}&id=${encodeURIComponent(id as string)}`}
                  className="flex-1 block text-center bg-[#E8E0D0] text-black py-4 uppercase tracking-[0.2em] text-sm font-bold hover:bg-white transition-colors"
                >
                  SEND A QUERY
                </Link>
                
                <button 
                  onClick={() => toggleItem({ id: String(id), image: activeImage, title: name, category: product.categoryId?.split('/')[0] || 'Garment' })}
                  className={`flex items-center justify-center gap-3 px-8 border transition-all duration-300 py-4 uppercase tracking-[0.2em] text-sm font-bold ${
                    isInWishlist(String(id)) 
                      ? 'border-accent text-accent bg-accent/10 hover:bg-accent/20' 
                      : 'border-white/20 text-white hover:border-white hover:bg-white/5'
                  }`}
                >
                  <Heart className={`w-4 h-4 ${isInWishlist(String(id)) ? 'fill-accent' : ''}`} />
                  {isInWishlist(String(id)) ? 'SAVED' : 'WISHLIST'}
                </button>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
