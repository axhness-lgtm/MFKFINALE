"use client";
import { FadeIn } from '@/components/animations/FadeIn';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function CustomTailoringFittingsPage() {
  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
     fetch(`/api/products?category=${encodeURIComponent('custom-tailoring/fittings')}`)
        .then(res => res.json())
        .then(data => {
           setItems(data);
           setLoading(false);
        });
  }, []);

  return (
    <div className="min-h-screen pt-52 pb-24 bg-[#0a0a09] text-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative">
        
        {/* Technical Grid Overlay */}
        <div className="absolute top-0 right-12 w-px h-full bg-white/5 hidden lg:block" />
        <div className="absolute top-0 left-12 w-px h-full bg-white/5 hidden lg:block" />

        <div className="relative z-10">
          <FadeIn className="mb-24">
            <h1 className="text-6xl md:text-9xl font-serif text-[#E8E0D0] leading-none tracking-tighter mix-blend-difference">
              Scientific <br/> <span className="text-accent italic">Precision</span>
            </h1>
            <div className="mt-8 flex items-center gap-6">
               <div className="h-px w-24 bg-accent" />
               <p className="text-[10px] uppercase tracking-[0.6em] font-bold text-white/40">The Master Measurement Sequence</p>
            </div>
          </FadeIn>

          {loading ? (
             <div className="flex justify-center items-center h-64 border-y border-white/5">
                <p className="text-accent text-[10px] tracking-[1em] uppercase animate-pulse">Analyzing Proportions...</p>
             </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 border border-white/5">
              {items.map((item, idx) => (
                <FadeIn key={item.id} delay={idx * 100} className="bg-[#0a0a09] p-8 lg:p-16 flex flex-col group">
                  <Link 
                    href={`/collection/${item.id}?name=${encodeURIComponent(item.name)}&image=${encodeURIComponent(item.image)}&desc=${encodeURIComponent(item.desc)}`} 
                    className="flex flex-col h-full"
                  >
                    <div className="relative w-full aspect-[4/5] overflow-hidden bg-[#111] mb-12 shadow-2xl grayscale group-hover:grayscale-0 transition-all duration-700">
                      <Image src={item.image} alt={item.name} fill className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000" />
                      
                      {/* Vertical Measurement Line */}
                      <div className="absolute left-1/2 top-4 bottom-4 w-px bg-white/10 group-hover:bg-accent/30 transition-colors" />
                      <div className="absolute top-1/2 left-4 right-4 h-px bg-white/10 group-hover:bg-accent/30 transition-colors" />
                    </div>

                    <div className="flex justify-between items-end">
                       <div className="space-y-4">
                          <span className="text-[10px] tracking-[0.4em] text-accent font-bold uppercase">Phase {idx + 1}</span>
                          <h3 className="text-2xl md:text-3xl font-serif text-white/90 group-hover:text-accent font-light transition-colors">{item.name}</h3>
                          <p className="text-xs text-white/40 font-light leading-relaxed max-w-sm normal-case">{item.desc}</p>
                       </div>
                       <div className="text-4xl font-serif italic text-white/5 group-hover:text-white/10 transition-colors">
                          0{idx + 1}
                       </div>
                    </div>
                  </Link>
                </FadeIn>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}