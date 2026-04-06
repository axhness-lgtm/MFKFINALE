"use client";

import { Header } from '@/components/navigation/Header';
import { Footer } from '@/components/navigation/Footer';
import { FadeIn } from '@/components/animations/FadeIn';
import Image from 'next/image';
import Link from 'next/link';

export default function GroomPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0a0a09]">
      <Header />
      
      <main className="flex-grow pt-32">
        {/* Hero Section */}
        <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
          <Image 
            src="https://images.unsplash.com/photo-1594932224828-b4b059b6f6f9?auto=format&fit=crop&q=80&w=2000" 
            alt="Wedding Suits & Sherwanis" 
            fill 
            priority
            className="object-cover opacity-50 contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a09]/80 via-transparent to-[#0a0a09]" />
          
          <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
            <FadeIn>
              <span className="gold-text uppercase tracking-[0.5em] text-[10px] md:text-xs mb-8 block font-bold">The Wedding Collection</span>
              <h1 className="text-5xl md:text-8xl font-serif font-light text-[#E8E0D0] leading-tight mb-8">
                See Your Wedding Look <br /><span className="italic">Today. Not Weeks Later.</span>
              </h1>
              <p className="text-lg md:text-xl text-[#E8E0D0]/70 max-w-2xl mx-auto font-light leading-relaxed mb-12">
                Wedding Suits & Sherwanis in Visakhapatnam. Experience the complete look before making a decision.
              </p>
              <Link href="/contact" className="hero-btn-secondary">Book a Wedding Consultation</Link>
            </FadeIn>
          </div>
        </section>

        {/* Core Value Section */}
        <section className="py-12 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <FadeIn className="space-y-10">
                <h2 className="text-4xl md:text-5xl font-serif font-light leading-tight text-white">
                  Beyond the <br /><span className="italic text-accent">Fabric Swatch</span>
                </h2>
                <div className="space-y-6 text-[#E8E0D0]/70 text-lg leading-relaxed font-light">
                  <p>
                    Most grooms are asked to decide their wedding outfit from a fabric swatch. At MFKhan International, you experience the full look before making a decision.
                  </p>
                  <p>
                    Our showroom features a wide range of finished sherwanis, jodhpuris, and tuxedos — available for trial.
                  </p>
                  <p className="text-[#E8E0D0] font-medium pt-4">
                    Once selected, each garment is refined to your exact measurements by our in-house tailoring team.
                  </p>
                </div>
                
                {/* Micro Branding: Your Mark in Gold */}
                <div className="pt-10 border-t border-white/10 group">
                   <div className="flex items-center gap-4 mb-4">
                      <div className="w-10 h-px bg-accent" />
                       <span className="text-white italic text-2xl font-serif">Your Mark in Gold.</span>
                   </div>
                   <p className="text-[#E8E0D0]/50 text-sm leading-relaxed max-w-md italic">
                      Personalized initials, embroidered with precision — a subtle signature that makes the garment uniquely yours.
                   </p>
                </div>
              </FadeIn>

              <FadeIn delay={300} className="relative aspect-square md:aspect-video overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&q=80&w=1200" 
                  alt="Craftsmanship in Detail" 
                  fill 
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/20" />
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Selection Details */}
        <section className="py-12 bg-[#0a0a09] border-y border-white/5 text-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12 text-center mb-20">
            <FadeIn>
              <h2 className="text-4xl md:text-5xl font-serif font-light mb-6">Uncompromising Quality</h2>
              <p className="text-[#E8E0D0]/60 max-w-2xl mx-auto">Selected for impact. Refined for you.</p>
            </FadeIn>
          </div>

          <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {[
              { 
                title: 'Designer Selection', 
                desc: 'Explore finished ensembles that range from classic sherwanis to modern tuxedos.' 
              },
              { 
                title: 'Precision Trial', 
                desc: 'Understand the sit, the fall, and the presence of the garment before you begin.' 
              },
              { 
                title: 'Master Refinement', 
                desc: 'Our in-house master tailors adjust every detail to ensure a flawless wedding fit.' 
              }
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 200} className="space-y-4">
                <div className="text-white/40 text-xs tracking-widest uppercase font-bold">0{i+1}</div>
                <h3 className="text-2xl font-serif">{item.title}</h3>
                <p className="text-[#E8E0D0]/50 text-sm font-light leading-relaxed">{item.desc}</p>
              </FadeIn>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
