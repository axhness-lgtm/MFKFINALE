"use client";
import { FadeIn } from '@/components/animations/FadeIn';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function CustomTailoringInternationalFabricsPage() {
  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
     fetch(`/api/products?category=${encodeURIComponent('custom-tailoring/international-fabrics')}`)
        .then(res => res.json())
        .then(data => {
           setItems(data);
           setLoading(false);
        });
  }, []);

  return (
    <div className="min-h-screen pt-32 pb-24 bg-[#0a0a09] text-[#E8E0D0] selection:bg-accent selection:text-black">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        
        {/* Header - Asymmetrical */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end mb-32">
          <FadeIn>
            <h1 className="text-5xl md:text-7xl font-serif font-light uppercase tracking-tighter leading-none mb-8">
              Fabric <br/> <span className="text-accent italic ml-12 lg:ml-24">Archive</span>
            </h1>
            <p className="text-xs uppercase tracking-[0.4em] text-white/30 font-bold border-l border-accent pl-6 py-2">
              Curating the world's finest mills
            </p>
          </FadeIn>
          <FadeIn delay={200} className="lg:text-right max-w-xl lg:ml-auto">
            <p className="text-lg md:text-xl font-serif italic text-white/60 leading-relaxed mb-6">
              From the rolling hills of Huddersfield to the historic workshops of Biella, our selection represents the pinnacle of textile engineering.
            </p>
            <div className="flex lg:justify-end gap-12 text-[10px] uppercase tracking-[0.3em] font-bold text-accent/50">
               <span>England</span>
               <span>Italy</span>
               <span>Ireland</span>
            </div>
          </FadeIn>
        </div>

        {/* Gallery - Archive Style */}
        {loading ? (
           <div className="flex justify-center items-center h-64 border-t border-white/5">
              <p className="text-accent text-xs tracking-[0.5em] uppercase animate-pulse">Accessing Archive...</p>
           </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-12">
            {items.map((item, idx) => (
              <FadeIn key={item.id} delay={idx * 50} className={idx % 5 === 2 ? 'lg:translate-y-12' : ''}>
                <Link 
                  href={`/collection/${item.id}?name=${encodeURIComponent(item.name)}&image=${encodeURIComponent(item.image)}&desc=${encodeURIComponent(item.desc)}`} 
                  className="flex flex-col group relative"
                >
                  <div className="relative w-full aspect-[4/5] overflow-hidden bg-[#111] mb-6 shadow-2xl ring-1 ring-white/5">
                    <Image src={item.image} alt={item.name} fill className="object-cover opacity-70 group-hover:opacity-100 group-hover:transition-opacity duration-1000 saturate-[0.8] group-hover:saturate-100 group-hover:scale-110 transition-transform duration-[2000ms]" />
                    
                    {/* Swatch Label Overlay */}
                    <div className="absolute top-0 right-0 p-6 flex flex-col items-end opacity-40 group-hover:opacity-100 transition-opacity">
                       <span className="text-[9px] uppercase tracking-[0.3em] font-bold mb-1">Stock No.</span>
                       <span className="text-xs font-serif italic text-accent">MFK-{idx + 101}</span>
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                    <div className="absolute bottom-6 left-6 right-6">
                       <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-accent mb-2">{idx % 2 === 0 ? 'Italy' : 'England'}</p>
                       <h3 className="text-lg font-serif text-white/90 group-hover:text-white transition-colors leading-tight">{item.name}</h3>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}