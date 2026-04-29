"use client";
import { FadeIn } from '@/components/animations/FadeIn';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { generateProductSlug } from '@/lib/utils';

export default function WeddingSherwaniPage() {
  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
     fetch(`/api/products?category=${encodeURIComponent('wedding/sherwani')}`)
        .then(res => res.json())
        .then(data => {
           setItems(data);
           setLoading(false);
        });
  }, []);

  return (
    <div className="min-h-screen pt-52 pb-24 bg-[#0a0a09] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <FadeIn className="text-center space-y-6 mb-16 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-serif font-light text-[#E8E0D0] uppercase tracking-widest">WEDDING SHERWANIS IN VISAKHAPATNAM</h1>
          <p className="text-lg text-accent font-serif italic">The pinnacle of traditional elegance.</p>
        </FadeIn>

        <FadeIn delay={100} className="border-t border-white/10 pt-8 mb-16 text-center max-w-3xl mx-auto">
          <p className="text-sm md:text-base text-white/50 leading-relaxed font-light tracking-wide" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
            MFKhan International presents an exclusive wedding sherwani collection for Visakhapatnam grooms seeking traditional elegance with modern tailoring. Since 1940, our master craftsmen have created sherwanis in heavy silk, rich velvet, and intricate hand-embroidery for three generations of wedding ceremonies across Vizag. Each piece is tailored with structured shoulder lines and customizable embellishments at our 9,000 sq ft flagship showroom on Old Jail Road.
          </p>
        </FadeIn>

        {loading ? (
           <div className="flex justify-center items-center h-64">
              <p className="text-accent text-sm tracking-widest uppercase animate-pulse">Loading Collection...</p>
           </div>
        ) : (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 md:gap-x-8 gap-y-12">
            {items.map((item, idx) => (
              <FadeIn key={item.id} delay={(idx % 4) * 100}>
                <Link 
                  href={`/collection/${generateProductSlug(item.name, item.id)}`} 
                  className="flex flex-col group cursor-pointer"
                >
                  <div className="relative w-full aspect-[3/4] overflow-hidden bg-[#111] mb-4">
                    <Image src={item.image} alt={item.name} fill className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-white border border-white/50 bg-black/40 backdrop-blur-sm px-6 py-2 text-xs uppercase tracking-[0.2em]">View Details</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-center text-center space-y-1.5 px-2">
                    <h3 className="text-sm md:text-base text-[#E8E0D0] font-light" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>{item.name}</h3>
                    <p className="text-[10px] uppercase tracking-widest text-white/40">Style Code: MFK-{item.id}</p>
                  </div>
                </Link>
              </FadeIn>
            ))}
            {items.length === 0 && (
               <p className="col-span-full text-center text-white/40 py-20 uppercase tracking-widest text-sm">No active pieces in this category.</p>
            )}
          </div>
        )}

        {/* Next Collection Link */}
        <div className="mt-24 border-t border-white/5 pt-16 flex flex-col items-center">
           <span className="text-white/40 uppercase tracking-[0.4em] text-[10px] mb-4">Continue Exploring</span>
           <Link href="/wedding/indo-western" className="hero-btn-secondary">
             View Indo-Western Collection
           </Link>
        </div>
      </div>
    </div>
  );
}