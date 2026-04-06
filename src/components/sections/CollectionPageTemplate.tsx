import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Header } from '@/components/navigation/Header';
import { Footer } from '@/components/navigation/Footer';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';

export interface CollectionPageData {
  seoHero: {
    title: string;
    subtext: string;
    image: string;
    breadcrumbs: { label: string; href: string }[];
  };
  categoryStory: {
    text: string;
  };
  technicalDepth: {
    title: string;
    content: string;
  }[];
  occasionUses: {
    image: string;
    label: string;
  }[];
  process: {
    stepNum: string;
    title: string;
    desc: string;
  }[];
  gallery: string[];
  crossLinks: {
    title: string;
    href: string;
  }[];
}

export function CollectionPageTemplate({ data }: { data: CollectionPageData }) {
  return (
    <div className="min-h-screen bg-[#0a0a09] text-[#E8E0D0] selection:bg-accent/30 font-body">
      <Header />
      
      {/* 1. HERO (SEO-OPTIMIZED) */}
      <section className="relative h-[90vh] flex items-end justify-center overflow-hidden pb-32">
        <div className="absolute inset-0 w-full h-full">
          <Image 
            src={data.seoHero.image} 
            alt={data.seoHero.title} 
            fill 
            className="object-cover object-center scale-105 animate-subtle-zoom opacity-70"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a09] via-[#0a0a09]/40 to-transparent" />
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          {/* Breadcrumbs */}
          <nav className="mb-8 flex items-center justify-center space-x-2 text-xs tracking-widest uppercase font-medium">
            {data.seoHero.breadcrumbs.map((crumb, idx) => (
              <React.Fragment key={idx}>
                <Link href={crumb.href} className="text-[#E8E0D0]/70 hover:text-accent transition-colors">
                  {crumb.label}
                </Link>
                {idx < data.seoHero.breadcrumbs.length - 1 && (
                  <span className="text-[#E8E0D0]/30">/</span>
                )}
              </React.Fragment>
            ))}
          </nav>

          <h1 className="text-5xl md:text-7xl font-light mb-6 leading-tight drop-shadow-lg">
            {data.seoHero.title}
          </h1>
          <p className="text-lg md:text-xl text-[#E8E0D0]/80 font-light max-w-2xl mx-auto drop-shadow-md">
            {data.seoHero.subtext}
          </p>
        </div>
      </section>

      {/* 2. CATEGORY STORY */}
      <section className="py-24 px-6 bg-[#0a0a09]">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xl md:text-2xl text-[#E8E0D0]/80 font-light leading-relaxed category-story">
            <span className="float-left text-7xl font-serif gold-text leading-[0.8] mr-4 text-accent">
              {data.categoryStory.text.charAt(0)}
            </span>
            {data.categoryStory.text.slice(1)}
          </p>
        </div>
      </section>

      {/* 3. TECHNICAL DEPTH (SEO HEAVY) */}
      <section className="py-24 px-6 bg-[#111111] border-y border-white/5">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-light mb-12 text-center">The Anatomy of Construction</h2>
          
          <Accordion type="single" collapsible className="w-full">
            {data.technicalDepth.map((tech, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="border-white/10">
                <AccordionTrigger className="text-lg md:text-xl font-light hover:text-accent hover:no-underline px-4">
                  {tech.title}
                </AccordionTrigger>
                <AccordionContent className="text-[#E8E0D0]/70 font-light text-base leading-relaxed px-4 pb-6">
                  {tech.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* 4. OCCASION USE CASES */}
      <section className="py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-6">Designed For Every Occasion</h2>
          <div className="bg-accent/50 mx-auto" style={{ width: '40px', height: '1px' }} />
        </div>
        
        <div className="flex overflow-x-auto gap-6 px-6 md:px-12 pb-12 hide-scrollbar snap-x snap-mandatory">
          {data.occasionUses.map((use, idx) => (
            <div key={idx} className="min-w-[280px] md:min-w-[400px] h-[400px] md:h-[500px] relative group overflow-hidden snap-center flex-shrink-0">
              <Image 
                src={use.image} 
                alt={use.label} 
                fill 
                className="object-cover transition-transform duration-1000 group-hover:scale-110 opacity-80 group-hover:opacity-100" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a09]/90 to-transparent" />
              <div className="absolute bottom-8 left-8">
                <span className="text-xs tracking-[0.3em] font-bold uppercase gold-text block mb-2">Occasion</span>
                <h3 className="text-2xl font-light">{use.label}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. PROCESS (SHORT TIMELINE) */}
      <section className="py-24 px-6 bg-[#111111]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-light mb-16">The Tailoring Process</h2>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-[28px] left-[10%] right-[10%] h-[1px] bg-white/10 z-0" />
            
            {data.process.map((step, idx) => (
              <div key={idx} className="relative z-10 flex flex-col items-center mb-12 md:mb-0 group w-full md:w-1/4 px-4">
                <div className="w-14 h-14 rounded-full bg-[#0a0a09] border border-accent/50 flex items-center justify-center text-xl font-light text-accent mb-6 group-hover:scale-110 group-hover:bg-accent group-hover:text-[#0a0a09] transition-all duration-300">
                  {step.stepNum}
                </div>
                <h4 className="text-lg font-medium mb-2 tracking-wide">{step.title}</h4>
                <p className="text-sm font-light text-[#E8E0D0]/60">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. VISUAL GALLERY */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-light text-center mb-16">Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {data.gallery.map((img, idx) => (
            <div key={idx} className={`relative group overflow-hidden bg-white/5 cursor-pointer ${idx === 0 ? 'col-span-2 row-span-2 min-h-[400px] md:min-h-[600px]' : 'min-h-[200px] md:min-h-[300px]'}`}>
              <Image 
                src={img} 
                alt="Gallery detail" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" 
              />
            </div>
          ))}
        </div>
      </section>

      {/* CROSS-LINKING SYSTEM */}
      <section className="py-16 border-t border-white/10 items-center justify-center flex gap-8 flex-wrap">
        <span className="text-xs uppercase tracking-widest text-[#E8E0D0]/50 font-bold">Also Explore</span>
        {data.crossLinks.map((link, idx) => (
          <Link key={idx} href={link.href} className="text-sm font-medium tracking-wide hover:text-accent transition-colors hover:underline underline-offset-4 decoration-accent/50">
            {link.title}
          </Link>
        ))}
      </section>

      {/* 7. CTA */}
      <section className="relative py-48 flex items-center justify-center overflow-hidden group">
        <div className="absolute inset-0 w-full h-full">
          <Image src="/images/heritage-hero.jpg" alt="Heritage Tailoring" fill className="object-cover object-center transition-transform duration-[20s] group-hover:scale-110 opacity-30" />
          <div className="absolute inset-0 bg-[#0a0a09]/80 group-hover:bg-[#0a0a09]/70 transition-colors duration-1000" />
        </div>
        
        <div className="relative z-10 text-center max-w-3xl mx-auto px-6">
          <span className="block gold-text font-bold tracking-[0.3em] uppercase text-xs mb-6">Expert Consultation</span>
          <h2 className="text-4xl md:text-6xl font-light mb-8 leading-tight">Elevate Your Wardrobe</h2>
          <p className="text-lg md:text-xl text-[#E8E0D0]/80 font-light mb-12">
            Visit our store in Visakhapatnam to explore fabrics, discuss requirements, and start your tailoring process.
          </p>
          <button className="bg-transparent border border-accent text-accent px-10 py-4 uppercase tracking-[0.2em] text-sm hover:bg-accent hover:text-[#0a0a09] transition-all duration-300 shadow-[0_0_0_transparent] hover:shadow-[0_0_30px_rgba(212,175,55,0.3)]">
            Book Consultation
          </button>
        </div>
      </section>

      <Footer />

      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        @keyframes subtle-zoom {
          0% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }
        .animate-subtle-zoom {
          animation: subtle-zoom 20s ease-out forwards;
        }
      `}} />
    </div>
  );
}

