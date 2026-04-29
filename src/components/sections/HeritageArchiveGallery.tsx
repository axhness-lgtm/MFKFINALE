"use client";

import { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FadeIn } from '@/components/animations/FadeIn';

type ArchiveCategory = 'all' | 'architect' | 'global' | 'patrons';

interface ArchiveImage {
  src: string;
  category: ArchiveCategory;
  title: string;
  description: string;
  colSpan?: string;
}

export function HeritageArchiveGallery() {
  const [activeTab, setActiveTab] = useState<ArchiveCategory>('all');

  // We map the 54 uploaded images into 3 distinct categories with specific identifying titles
  const images = useMemo<ArchiveImage[]>(() => [
    // ── THE ARCHITECT (Ahmed Ali Khan & Foundation) ──
    ...Array.from({ length: 18 }).map((_, i) => {
      let title = "Ahmed Ali Khan";
      let desc = "The building of a legacy";
      
      if (i === 0) { title = "A Classy Encounter in Vizag"; desc = "Throwback to a candid afternoon with our Chairman and Mohammad Azharuddin."; }
      if (i === 3) { title = "The Four Sons"; desc = "Akbar, Asghar, Anwar, and Amjad Ali Khan"; }
      if (i === 6) { title = "World Cup Memories"; desc = "Chairman Ahmed Ali Khan alongside the legendary Kapil Dev."; }
      if (i === 7) { title = "Legacy of Excellence"; desc = "Hosting icons who define Indian excellence — Mohammad Azharuddin at MFKhan."; }
      if (i === 12) { title = "The Workshop"; desc = "Legacy of technical precision"; }
      if (i === 17) { title = "A Classic Frame"; desc = "Chairman Ahmed Ali Khan with the legendary Jackie Shroff."; }
      
      let src = `/images/archive/IMG_${8588 + i}.JPG.jpeg`;
      // Handle renamed files to prevent 404s
      if (i === 2) src = "/images/archive/generation-2-store.jpg";
      if (i === 4) src = "/images/archive/gen-2-fabrics.jpg";
      
      return {
        src,
        category: 'architect' as ArchiveCategory,
        title,
        description: desc
      };
    }),
    // ── GLOBAL TRIPS & SOURCING ──
    ...Array.from({ length: 18 }).map((_, i) => {
      let title = "International Sourcing";
      let desc = "Procuring the world's finest fabrics";
      
      if (i === 2) { title = "A Moment with a Legend"; desc = "Chairman Ahmed Ali Khan with former CM Kotla Vijaya Bhaskara Reddy."; }
      if (i === 5) { title = "Flashback to '98"; desc = "Bringing the prestigious Digjam name to the heart of the city—elegant, bright, and always welcoming."; }
      if (i === 7) { title = "Defining Luxury Since 1940"; desc = "Representing our legacy at the Reid & Taylor Conference 2007."; }
      if (i === 11) { title = "The Art of the Personal Touch"; desc = "Chairman Ahmed Ali Khan personally assisting customers at the store."; }
      
      return {
        src: `/images/archive/IMG_${8606 + i}.JPG.jpeg`,
        category: 'global' as ArchiveCategory,
        title,
        description: desc
      };
    }),
    // ── NOTABLE PATRONS & CELEBRITIES ──
    ...Array.from({ length: 18 }).map((_, i) => {
      let title = "Notable Patron";
      let desc = "Dignitary of the House";
      
      if (i === 2) { title = "Ahmed Ali Khan with Kapil Dev"; desc = "Cricketing legend visiting the flagship"; }
      if (i === 6) { title = "A Historic Trio in Vizag"; desc = "Sunil Dutt, N. Janardhana Reddy, and Ahmed Ali Khan leading a march for cancer awareness."; }
      if (i === 10) { title = "Where it all began"; desc = "M.F. Khan & Co. in the heart of Vizag’s busiest commercial hub, Kotharoad."; }
      if (i === 11) { title = "The Heart of Kotharoad"; desc = "Our iconic storefront that shaped the history of luxury menswear in the city."; }
      if (i === 15) { title = "Distinguished Guests"; desc = "Generations of trust and reputation"; }
      
      let src = `/images/archive/IMG_${8624 + i}.JPG.jpeg`;
      if (i === 5 && 8624 + i === 8629) src = "/images/archive/generation-2-counter.jpg";
      
      return {
        src,
        category: 'patrons' as ArchiveCategory,
        title,
        description: desc
      };
    })
  ], []);

  // Filter out redundant images that are already showcased in the main story sections
  const filteredImages = useMemo(() => {
    const skipList = [
      '/images/archive/IMG_8588.JPG.jpeg', // Ahmed Ali Khan (Hero)
      '/images/archive/generation-2-store.jpg', // Flagship Interior
      '/images/archive/gen-2-fabrics.jpg', // Fabric Vault
      '/images/archive/generation-2-counter.jpg', // Systematic Precision
      '/images/archive/IMG_8591.JPG.jpeg', // The Four Sons / Group image already shown
      '/images/archive/IMG_8596.JPG.jpeg', // Requested Removal
      '/images/archive/IMG_8597.JPG.jpeg', // Requested Removal
      '/images/archive/IMG_8602.JPG.jpeg', // Requested Removal
      '/images/archive/IMG_8603.JPG.jpeg', // Requested Removal
      '/images/archive/generation-2-fabrics.jpg', // Legacy asset removed
    ];
    
    const base = activeTab === 'all' 
      ? images 
      : images.filter(img => img.category === activeTab);
      
    return base.filter(img => !skipList.includes(img.src));
  }, [images, activeTab]);

  return (
    <section className="py-24 md:py-32 px-4 md:px-12 bg-[#050505] border-t border-white/5 relative">
      <div className="max-w-[1400px] mx-auto">
        <FadeIn className="text-center mb-16 space-y-6">
          <span className="text-accent/80 font-semibold text-[10px] tracking-[0.3em] uppercase inline-block">The Vault</span>
          <h2 className="text-3xl md:text-5xl text-white font-light" style={{ fontFamily: '"Cormorant Garamond", serif' }}>
            The Historical Archives
          </h2>
          <p className="text-[#E8E0D0]/60 max-w-2xl mx-auto font-light md:text-lg" style={{ fontFamily: '"Spectral", serif' }}>
            A curated visual history encompassing global sourcing expeditions, distinguished celebrity patrons, 
            and the indelible legacy of the <Link href="/contact" className="text-accent hover:underline">MF Khan International</Link> family across generations.
          </p>
        </FadeIn>

        {/* Gallery Navigation */}
        <FadeIn delay={100} className="flex flex-wrap justify-center gap-4 md:gap-8 mb-16">
          {[
            { id: 'all', label: 'Complete Archive' },
            { id: 'architect', label: 'The Architect' },
            { id: 'global', label: 'Foreign Expeditions' },
            { id: 'patrons', label: 'Dignitaries & Patrons' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as ArchiveCategory)}
              className={`text-[10px] md:text-xs tracking-widest uppercase transition-all duration-300 pb-2 border-b ${
                activeTab === tab.id 
                  ? 'text-accent border-accent' 
                  : 'text-white/40 border-transparent hover:text-white/80'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </FadeIn>

        {/* Dynamic Masonry-like Grid Layout */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {filteredImages.map((img, idx) => (
            <FadeIn key={`${img.src}-${idx}-${activeTab}`} delay={(idx % 6) * 100} className="break-inside-avoid">
              <div className="relative group overflow-hidden border border-white/5 bg-[#111] transition-colors hover:border-accent/30 cursor-pointer">
                <Image 
                  src={img.src} 
                  alt={img.title}
                  width={600} 
                  height={800} 
                  className="w-full h-auto object-cover grayscale-0 opacity-100 md:grayscale md:opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-[800ms] ease-out group-hover:scale-110" 
                  loading="lazy"
                />
                
                {/* Information Overlay */}
                <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/100 via-black/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                   <p className="text-accent text-[9px] uppercase tracking-widest mb-1">
                      {img.category === 'architect' && 'Legacy of the Architect'}
                      {img.category === 'global' && 'Global Sourcing'}
                      {img.category === 'patrons' && 'Notable Patrons'}
                   </p>
                   <h4 className="text-white text-sm font-serif mb-1">{img.title}</h4>
                   <p className="text-white/60 text-[10px] italic">{img.description}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
