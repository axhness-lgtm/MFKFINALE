"use client";

import { FadeIn } from '@/components/animations/FadeIn';
import Image from 'next/image';
import Link from 'next/link';

export function ExperienceSection() {
  return (
    <section className="bg-[#0a0a09] pt-8 md:pt-12 pb-8 md:pb-12 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-8 md:mb-12">
          <span className="gold-text uppercase tracking-[0.5em] text-[10px] block mb-4">The MFK International Experience</span>
          <h2 className="text-3xl md:text-5xl text-[#E8E0D0] font-light leading-tight font-serif italic mb-6">
            Best of Both Worlds
          </h2>
          <div className="space-y-4 max-w-2xl mx-auto">
            <h3 className="text-accent text-[10px] uppercase tracking-[0.4em] font-bold">Choose Your Path to the Perfect Garment</h3>
            <p className="text-white/60 text-sm md:text-base font-light leading-relaxed">
              Most tailoring begins with imagination. At MFKhan International, it begins with experience.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          {/* Card 1: Designer Collection */}
          <FadeIn className="group relative aspect-[4/5] overflow-hidden border border-white/5 hover:border-accent/30 transition-colors">
            <Image
              src="/images/WhatsApp Image 2026-04-26 at 11.12.49 PM.jpeg"
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
              src="/images/Arkive17june-1559 copy.jpg"
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
              <Link 
                href="/custom-tailoring" 
                className="hero-btn-secondary w-fit flex items-center gap-2"
              >
                Book Custom Cut
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
