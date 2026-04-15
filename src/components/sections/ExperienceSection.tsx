"use client";

import { FadeIn } from '@/components/animations/FadeIn';
import Image from 'next/image';
import Link from 'next/link';

export function ExperienceSection() {
  return (
    <section className="bg-[#0a0a09] pt-12 md:pt-20 pb-16 md:pb-24 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 md:mb-20">
          <span className="gold-text uppercase tracking-[0.5em] text-[10px] block mb-4">The MFKhan Experience</span>
          <h2 className="text-3xl md:text-6xl text-[#E8E0D0] font-light leading-tight font-serif italic">
            Best of Both Worlds
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          {/* Card 1: Designer Collection */}
          <FadeIn className="group relative aspect-[4/5] overflow-hidden border border-white/5 hover:border-accent/30 transition-colors">
            <Image
              src="/images/vision-wardrobe.jpg"
              alt="Designer Collection"
              fill
              className="object-cover transition-transform duration-[3s] group-hover:scale-110 opacity-60 group-hover:opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
              <h3 className="text-2xl md:text-4xl font-serif text-[#E8E0D0] mb-4">Designer Collection</h3>
              <p className="text-white/60 text-sm md:text-base mb-8 max-w-sm font-light">
                Explore our curated gallery of ready-to-wear luxury ensembles, finished to perfection.
              </p>
              <Link href="/wedding" className="hero-btn-secondary w-fit">
                Explore Gallery
              </Link>
            </div>
          </FadeIn>

          {/* Card 2: Custom Tailored */}
          <FadeIn delay={200} className="group relative aspect-[4/5] overflow-hidden border border-white/5 hover:border-accent/30 transition-colors">
            <Image
              src="/images/collections-custom-tailoring.jpg"
              alt="Custom Tailored"
              fill
              className="object-cover transition-transform duration-[3s] group-hover:scale-110 opacity-60 group-hover:opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
              <h3 className="text-2xl md:text-4xl font-serif text-[#E8E0D0] mb-4">Custom Tailored</h3>
              <p className="text-white/60 text-sm md:text-base mb-8 max-w-sm font-light">
                Refined by our in-house masters. Tailored from the ground up to your precise metrics.
              </p>
              <a 
                href="https://wa.me/919988393389" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hero-btn-secondary w-fit flex items-center gap-2"
              >
                Book Custom Cut
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
