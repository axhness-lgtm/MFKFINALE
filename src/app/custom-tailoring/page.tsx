"use client";

import { FadeIn } from '@/components/animations/FadeIn';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const sections = [
  {
    title: "International Fabrics",
    link: "/custom-tailoring/international-fabrics",
    caption: "The foundation of every masterpiece",
    desc: "Our library holds exclusive imported suiting fabrics directly from world-renowned mills. The fabric is chosen first; the design is built after.",
    items: [
      { name: "Italian Wool", image: "/images/wedding-jodhpuri.jpg", desc: "Year-round drape" },
      { name: "Crisp Linens", image: "/images/wedding-embroidery.jpg", desc: "Breathable elegance" },
      { name: "Rich Velvets", image: "/images/wedding-sherwani.jpg", desc: "Luxurious depth" },
      { name: "Pure Silks", image: "/images/wedding-navy-blazer.jpg", desc: "Refined luster" }
    ]
  },
  {
    title: "Precision Fittings",
    link: "/custom-tailoring/fittings",
    caption: "Architecture for the individual",
    desc: "We do not believe in a one-size template. Whether you demand a razor-sharp slim fit, a balanced tailored fit, or a traditional classic fit, the garment is engineered around your frame.",
    items: [
      { name: "Slim Fit", image: "/images/fitting-slim.jpg", desc: "Modern silhouette" },
      { name: "Tailored Fit", image: "/images/fitting-tailored.jpg", desc: "Balanced structure" },
      { name: "Classic Fit", image: "/images/fitting-classic.jpg", desc: "Maximum comfort" }
    ]
  },
  {
    title: "Hand Work & Details",
    link: "/custom-tailoring/hand-work",
    caption: "True luxury whispers",
    desc: "From the shape of the lapel to the final stitch of embroidery. Personalize every element to make your absolute mark in gold.",
    items: [
      { name: "Lapel Styles", image: "/images/handwork-lapel1.jpg", desc: "Notch, Peak, or Shawl" },
      { name: "Embroidery", image: "/images/handwork-lapel2.jpg", desc: "Intricate thread work" },
      { name: "Monograms", image: "/images/handwork-button.jpg", desc: "Your initials woven" },
      { name: "Finishing", image: "/images/handwork-notch.jpg", desc: "Horn & pearl accents" }
    ]
  }
];

export default function CustomTailoringPage() {
  return (
    <div className="min-h-screen pt-48 pb-24 bg-[#0a0a09]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <FadeIn className="text-center space-y-6 mb-32">
          <h1 className="text-5xl md:text-7xl font-serif font-light text-[#E8E0D0]">Custom Tailoring, Defined by Precision</h1>
          <p className="text-xl text-white/70 tracking-wide font-light max-w-2xl mx-auto" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
            A journey from raw material to a completely personalized silhouette.
          </p>
        </FadeIn>

        <div className="space-y-40">
          {sections.map((section, idx) => (
            <FadeIn key={idx} className="flex flex-col lg:flex-row gap-16 items-stretch">
              
              {/* Left Side: Info & CTA */}
              <div className="lg:w-1/3 flex flex-col justify-center space-y-8">
                <div className="space-y-4">
                  <span className="text-accent text-[10px] uppercase tracking-[0.4em] font-bold">0{idx + 1}. {section.caption}</span>
                  <h2 className="text-4xl md:text-5xl font-serif text-[#E8E0D0]">{section.title}</h2>
                </div>
                <p className="text-white/60 font-light leading-relaxed text-sm md:text-base border-l border-white/10 pl-6">
                  {section.desc}
                </p>
                <div>
                  <Link href={section.link} className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.3em] font-bold text-white hover:text-accent transition-colors group pb-2 border-b border-white/10 hover:border-accent">
                    Explore {section.title} <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-500" />
                  </Link>
                </div>
              </div>

              {/* Right Side: Interactive Flex Gallery */}
              <div className="lg:w-2/3 h-[500px] md:h-[600px] flex gap-2 w-full">
                {section.items.map((item, itemIdx) => (
                  <div 
                    key={itemIdx} 
                    className="group relative flex-1 hover:flex-[2.5] transition-all duration-[1500ms] ease-[cubic-bezier(0.25,1,0.5,1)] overflow-hidden bg-white/5 border border-white/10 cursor-pointer"
                  >
                    <Image 
                      src={item.image} 
                      alt={item.name} 
                      fill 
                      className="object-cover opacity-50 group-hover:opacity-90 transition-all duration-[1500ms] ease-out group-hover:scale-105" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />
                    
                    <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end pointer-events-none">
                       {/* Vertical Text for collapsed state */}
                       <div className="absolute left-6 bottom-6 origin-bottom-left -rotate-90 translate-y-[-100%] opacity-100 group-hover:opacity-0 transition-opacity duration-500 whitespace-nowrap">
                         <span className="text-white/60 text-[10px] uppercase tracking-[0.3em]">{item.name}</span>
                       </div>
                       
                       {/* Rich content for expanded state */}
                       <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-[1000ms] delay-300 translate-y-4 group-hover:translate-y-0 relative z-10 w-full min-w-max">
                         <h3 className="text-2xl font-serif text-[#E8E0D0] whitespace-nowrap">{item.name}</h3>
                         <p className="text-[10px] uppercase tracking-[0.2em] text-accent mt-2">{item.desc}</p>
                       </div>
                    </div>
                  </div>
                ))}
              </div>

            </FadeIn>
          ))}
        </div>
        
        <FadeIn className="text-center mt-32 border-t border-white/5 pt-16">
          <Link href="/contact" className="hero-btn-secondary">Begin Your Custom Process</Link>
        </FadeIn>
      </div>
    </div>
  );
}
