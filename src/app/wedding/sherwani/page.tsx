"use client";
import { FadeIn } from '@/components/animations/FadeIn';
import Link from 'next/link';
import Image from 'next/image';

const images = ["https://images.unsplash.com/photo-1593032465175-481ac7f401a0?auto=format&fit=crop&q=80&w=800","https://images.unsplash.com/photo-1594938291221-94f18cbb5660?auto=format&fit=crop&q=80&w=800","https://images.unsplash.com/photo-1592878904946-b3cd8ae24097?auto=format&fit=crop&q=80&w=800","https://images.unsplash.com/photo-1582236166419-4820dc71f844?auto=format&fit=crop&q=80&w=800","https://images.unsplash.com/photo-1620012253295-c15bc3e65e4e?auto=format&fit=crop&q=80&w=800","https://images.unsplash.com/photo-1521341057461-6eb5f40b07ab?auto=format&fit=crop&q=80&w=800","https://images.unsplash.com/photo-1605221980313-2775f0f35368?auto=format&fit=crop&q=80&w=800","/images/groom-dark.png"];

export default function WeddingSherwaniPage() {
  const items = Array.from({ length: 24 }).map((_, i) => ({
    id: `12${String(i + 1).padStart(2, '0')}`,
    name: `${'Wedding Sherwanis'.replace(/s$/, '')} No. ${i + 1}`,
    desc: `Bespoke Detail Collection ${new Date().getFullYear()}`,
    image: images[i % images.length]
  }));

  return (
    <div className="min-h-screen pt-40 pb-24 bg-[#0a0a09] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <FadeIn className="text-center space-y-6 mb-16 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-serif font-light text-[#E8E0D0] uppercase tracking-widest">Wedding Sherwanis</h1>
          <p className="text-lg text-accent font-serif italic">The pinnacle of traditional elegance.</p>
        </FadeIn>

        <FadeIn delay={100} className="border-t border-white/10 pt-8 mb-16 text-center max-w-3xl mx-auto">
          <p className="text-sm text-white/50 leading-relaxed font-light tracking-wide" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
            Heavy silks, velvet accents, structured shoulder lines, and intricate hand-embroidery.
          </p>
        </FadeIn>

        {/* E-Commerce Style Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 md:gap-x-8 gap-y-12">
          {items.map((item, idx) => (
            <FadeIn key={item.id} delay={(idx % 4) * 100}>
              <Link 
                href={`/collection/${item.id}?name=${encodeURIComponent(item.name)}&image=${encodeURIComponent(item.image)}&desc=${encodeURIComponent(item.desc)}`} 
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
        </div>
      </div>
    </div>
  );
}