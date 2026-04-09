"use client";
import { FadeIn } from '@/components/animations/FadeIn';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function CustomTailoringHandWorkPage() {
  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
     fetch(`/api/products?category=${encodeURIComponent('custom-tailoring/hand-work')}`)
        .then(res => res.json())
        .then(data => {
           setItems(data);
           setLoading(false);
        });
  }, []);

  return (
    <div className="min-h-screen pt-48 pb-32 bg-[#050505] text-[#E8E0D0]">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        
        {/* Artistic Header */}
        <div className="flex flex-col items-center text-center mb-40">
           <FadeIn>
              <span className="text-xs uppercase tracking-[0.8em] font-bold text-accent mb-6 block">The Artisanal Soul</span>
              <h1 className="text-6xl md:text-8xl font-serif font-light mb-8">
                Master Hand <span className="font-gwendolyn text-accent italic lowercase text-7xl md:text-9xl">Work</span>
              </h1>
              <p className="max-w-2xl mx-auto text-lg text-white/50 font-serif italic leading-relaxed">
                Every stitch is a signature. Every fold is a poem. We celebrate the imperfection of the human hand over the cold precision of the machine.
              </p>
           </FadeIn>
        </div>

        {loading ? (
           <div className="flex justify-center items-center h-64">
              <p className="font-gwendolyn text-4xl text-accent animate-pulse">Crafting in progress...</p>
           </div>
        ) : (
          <div className="columns-1 md:columns-2 lg:columns-3 gap-12 space-y-12">
            {items.map((item, idx) => (
              <FadeIn key={item.id} delay={idx * 50} className="break-inside-avoid">
                <Link 
                  href={`/collection/${item.id}?name=${encodeURIComponent(item.name)}&image=${encodeURIComponent(item.image)}&desc=${encodeURIComponent(item.desc)}`} 
                  className="flex flex-col group relative bg-white/[0.02] border border-white/5 p-4 hover:border-accent/40 transition-all duration-700 hover:shadow-[0_0_50px_rgba(232,224,208,0.05)]"
                >
                  <div className="relative w-full aspect-auto min-h-[400px] overflow-hidden bg-black mb-8">
                    <Image 
                      src={item.image} 
                      alt={item.name} 
                      fill 
                      className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-transform duration-[3000ms]" 
                    />
                    
                    {/* Artistic Bloom Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                  </div>

                  <div className="px-4 pb-4">
                     <span className="text-[10px] uppercase tracking-[0.5em] text-accent/50 mb-3 block">Detail Sequence</span>
                     <h3 className="text-2xl font-serif mb-3 group-hover:text-accent transition-colors">{item.name}</h3>
                     <p className="text-sm text-white/40 leading-relaxed italic font-serif opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0">
                        {item.desc}
                     </p>
                  </div>

                  {/* Aesthetic Numbering */}
                  <div className="absolute -top-6 -right-6 font-gwendolyn text-8xl text-white/[0.03] group-hover:text-accent/[0.08] transition-colors -z-10">
                     {idx + 1}
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