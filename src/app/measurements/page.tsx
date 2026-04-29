"use client";

import { FadeIn } from '@/components/animations/FadeIn';
import Link from 'next/link';
import { ArrowRight, Ruler, Scissors } from 'lucide-react';

export default function MeasurementsLandingPage() {
  const options = [
    {
      title: "Sherwani",
      desc: "Traditional Indian wedding wear measurement guide.",
      link: "/measurements/sherwani",
      icon: Ruler,
      stats: "12 Points of Precision"
    },
    {
      title: "Mens Suit",
      desc: "Architectural measurement guide for bespoke business and wedding suits.",
      link: "/measurements/suit",
      icon: Scissors,
      stats: "14 Points of Precision"
    }
  ];

  return (
    <div className="min-h-screen pt-40 pb-24 bg-[#0a0a09]">
      <div className="max-w-4xl mx-auto px-6">
        <FadeIn className="text-center mb-20 space-y-4">
          <span className="text-accent text-[10px] uppercase tracking-[0.4em] font-bold">The Bespoke Journey</span>
          <h1 className="text-5xl md:text-7xl font-serif font-light text-[#E8E0D0]">Measurement Portal</h1>
          <p className="text-lg text-white/60 font-light max-w-xl mx-auto">
            Choose your garment type to access our specialized measurement guides and submission forms.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {options.map((opt, idx) => (
            <FadeIn key={opt.title} delay={idx * 100}>
              <Link href={opt.link} className="group block relative p-10 bg-[#111] border border-white/5 hover:border-accent/40 transition-all duration-500 rounded-sm">
                <div className="space-y-6">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <opt.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div className="space-y-2">
                    <span className="text-accent/50 text-[10px] uppercase tracking-widest font-bold">{opt.stats}</span>
                    <h2 className="text-3xl font-serif text-[#E8E0D0] group-hover:text-accent transition-colors">{opt.title}</h2>
                    <p className="text-white/40 text-sm font-light leading-relaxed">{opt.desc}</p>
                  </div>
                  <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-white group-hover:gap-5 transition-all">
                    Access Form <ArrowRight className="w-4 h-4 text-accent" />
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={300} className="mt-20 text-center space-y-6 pt-12 border-t border-white/5">
          <p className="text-white/30 text-xs italic uppercase tracking-widest">
            Need professional assistance? 
          </p>
          <Link href="/contact" className="inline-block text-accent border-b border-accent/20 hover:border-accent transition-all pb-1 uppercase text-[10px] tracking-[0.3em] font-bold">
            Book a Virtual Measurement Session
          </Link>
        </FadeIn>
      </div>
    </div>
  );
}
