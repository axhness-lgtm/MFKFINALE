"use client";

import { useSearchParams, useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { useState, Suspense } from 'react';
import { FadeIn } from '@/components/animations/FadeIn';

function ProductDetails() {
  const searchParams = useSearchParams();
  const params = useParams();
  
  const id = params?.id || '001';
  const name = searchParams?.get('name') || 'Bespoke Garment Collection';
  const desc = searchParams?.get('desc') || 'Masterfully crafted tailoring tailored to perfection.';
  let mainImage = searchParams?.get('image') || '/images/groom-dark.png';

  // Make sure it handles empty string
  if (!mainImage) mainImage = '/images/groom-dark.png';

  const thumbnails = [
    mainImage,
    'https://images.unsplash.com/photo-1594938291221-94f18cbb5660?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1593032465175-481ac7f401a0?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1592878904946-b3cd8ae24097?auto=format&fit=crop&q=80&w=800'
  ];

  const [activeImage, setActiveImage] = useState(mainImage);

  return (
    <div className="min-h-screen pt-32 pb-24 bg-[#0a0a09] text-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* Breadcrumbs */}
        <div className="text-[10px] uppercase tracking-widest text-white/50 mb-8 border-b border-white/10 pb-4">
          <Link href="/" className="hover:text-white transition-colors">Home</Link> &nbsp;/&nbsp; 
          <Link href="/collections" className="hover:text-white transition-colors">Collections</Link> &nbsp;/&nbsp; 
          <span className="text-accent">{name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Thumbnails (Left - Desktop) */}
          <div className="hidden lg:flex lg:col-span-1 flex-col gap-4">
            {thumbnails.map((thumb, idx) => (
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
            <Image 
              src={activeImage} 
              alt={name} 
              fill 
              className="object-cover transition-transform duration-1000 group-hover:scale-110" 
            />
          </div>

          {/* Thumbnails (Mobile Below Main Image) */}
          <div className="flex lg:hidden overflow-x-auto gap-4 snap-x hide-scrollbar">
            {thumbnails.map((thumb, idx) => (
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
              <p className="text-xs uppercase tracking-widest text-white/50 mb-4">Style Code: MFK-{(id as string).padStart(4, '0')}</p>
              
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
              
              <Link 
                href={`/contact?inquire=${encodeURIComponent(name)}&id=${encodeURIComponent(id as string)}`}
                className="w-full block text-center bg-[#E8E0D0] text-black py-4 uppercase tracking-[0.2em] text-sm font-bold hover:bg-white transition-colors"
              >
                SEND A QUERY
              </Link>
            </div>

            {/* Quick Links */}
            <div className="pt-8 border-t border-white/10 text-xs text-white/40 uppercase tracking-widest flex flex-wrap gap-4">
              <span className="hover:text-accent cursor-pointer transition-colors">FAQs</span> | 
              <span className="hover:text-accent cursor-pointer transition-colors">Terms & Conditions</span> | 
              <span className="hover:text-accent cursor-pointer transition-colors">Shipping Policies</span> | 
              <span className="hover:text-accent cursor-pointer transition-colors">Fabric Care</span>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#0a0a09] flex items-center justify-center text-accent tracking-widest uppercase text-sm">Loading Garment...</div>}>
      <ProductDetails />
    </Suspense>
  )
}
