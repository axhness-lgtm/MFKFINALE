import Link from 'next/link';
import Image from 'next/image';
import { Scissors, Ruler, Layers, Medal, ChevronRight } from 'lucide-react';

export default function CollectionsPage() {
  return (
    <div className="min-h-screen pt-60 pb-24 bg-[#0a0a09] text-[#E8E0D0] selection:bg-accent/30 font-body">
      
      {/* THE MFK MASSIVE TYPOGRAPHY HERO */}
      <section className="h-[120vh] min-h-[900px] w-full flex flex-row bg-black pt-[180px]">
        {[
          { 
            letter: 'M', 
            title: 'WEDDING', 
            sub: 'Sherwanis & Traditional',
            image: '/images/wedding-main.png', 
            link: '/collections/wedding-wear' 
          },
          { 
            letter: 'F', 
            title: 'CUSTOM TAILORING', 
            sub: 'Hand-crafted Suits',
            image: '/images/suits-main.png', 
            link: '/collections/suits' 
          },
          { 
            letter: 'K', 
            title: 'FORMALS', 
            sub: 'Tuxedos & Evening Wear',
            image: '/images/tuxedos-main.png', 
            link: '/collections/tuxedos' 
          }
        ].map((col, idx) => (
          <Link 
            href={col.link} 
            key={idx} 
            className="flex-1 relative group border-r-2 md:border-r-4 border-[#0a0a09] last:border-0 hover:flex-[2] transition-all duration-[2000ms] ease-in-out overflow-hidden bg-[#0a0a09]"
          >
            {/* Background Image (Reveals on Hover) */}
            <Image 
               src={col.image} 
               alt={col.title}
               fill 
               priority
               className="object-cover opacity-60 group-hover:opacity-80 transition-all duration-[2000ms] ease-in-out" 
            />
            
            {/* The Solid Stretched SVG Letter */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10 bg-[#0a0a09] group-hover:bg-transparent transition-colors duration-1000 ease-out">
               <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 100 100" className="w-full h-full p-1 md:p-2">
                  <text 
                     x="50" 
                     y="96" 
                     textAnchor="middle" 
                     fontSize="120" 
                     fontWeight="900" 
                     fontFamily='"Impact", "Arial Black", sans-serif' 
                     lengthAdjust="spacingAndGlyphs" 
                     textLength="100" 
                     fill="#ffffff"
                     className="transition-all duration-[2000ms] ease-in-out opacity-100 group-hover:opacity-0 origin-center"
                  >
                     {col.letter}
                  </text>
               </svg>
            </div>
            
            {/* Hover Text Data Overlays */}
            <div className="absolute inset-0 z-20 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-[2000ms] pointer-events-none drop-shadow-2xl bg-black/40">
               <span className="gold-text tracking-[0.3em] md:tracking-[0.4em] uppercase text-[7px] md:text-xs font-bold mb-2 md:mb-4 transition-transform duration-[2000ms] ease-in-out group-hover:-translate-y-2">
                 {col.sub}
               </span>
               <h2 className="text-white text-2xl md:text-5xl lg:text-7xl font-serif italic text-center px-1 md:px-4 transition-transform duration-[2000ms] delay-75 ease-in-out group-hover:-translate-y-2">
                 {col.title}
               </h2>
               <div className="mt-4 md:mt-8 flex items-center gap-2 text-white/80 transition-transform duration-[2000ms] delay-150 ease-in-out">
                 <span className="text-[8px] md:text-xs uppercase tracking-[0.2em] font-medium hidden md:inline">Explore Details</span>
                 <span className="text-[8px] md:text-xs uppercase tracking-[0.2em] font-medium md:hidden">Explore</span>
                 <ChevronRight className="w-3 h-3 md:w-4 md:h-4 text-accent" />
               </div>
            </div>
          </Link>
        ))}
      </section>

      {/* SECTION 4: THE DESIGNER GALLERY (NEW) */}
      <section className="py-32 px-6 md:px-12 bg-[#0a0a09]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1 space-y-10">
              <div>
                <span className="gold-text uppercase tracking-[0.5em] text-[10px] block mb-6">The In-Store Experience</span>
                <h2 className="text-4xl md:text-5xl font-light leading-tight" style={{ fontFamily: '"Playfair Display", serif' }}>
                  The Designer Gallery
                </h2>
              </div>
              
              <div className="space-y-6 text-[#E8E0D0]/70 text-base leading-relaxed font-light">
                <p>
                  Our showroom houses one of the most extensive collections of ready-to-try garments in Visakhapatnam.
                </p>
                <ul className="space-y-4 pt-4">
                  {[
                    'Try complete silhouettes instantly',
                    'Compare styles and proportions',
                    'Experience fabric, structure, and detailing in person'
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-4 text-white/60">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="pt-6">
                  Each piece is then refined by our in-house tailoring team to ensure precision fit.
                </p>
              </div>
              
              <div className="pt-6">
                <Link href="/contact" className="hero-btn-secondary">Visit Showroom</Link>
              </div>
            </div>

            <div className="order-1 lg:order-2 relative aspect-[4/5] overflow-hidden">
               <Image 
                 src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&q=80&w=1200" 
                 alt="Designer Gallery" 
                 fill 
                 className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a09] via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: CRAFTSMANSHIP REINFORCEMENT */}
      <section className="py-20 px-6 bg-[#111111] border-y border-white/5">
        <div className="max-w-7xl mx-auto text-center mb-12 animate-on-scroll">
          <h2 className="text-2xl md:text-4xl font-light mb-4">Built Through Precision</h2>
          <p className="text-[#E8E0D0]/70 font-light max-w-2xl mx-auto text-base md:text-lg">
            This is not ready-made fashion.
            <span className="gold-text italic ml-2">Tailoring built step by step.</span>
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {[
            { icon: Ruler, title: 'Detailed Measurements', text: 'Exact dimensions for an impeccable drape.' },
            { icon: Layers, title: 'Structured Construction', text: 'Internal canvas layered for durability.' },
            { icon: Scissors, title: 'Multiple Fittings', text: 'Refining the silhouette at every stage.' },
            { icon: Medal, title: 'Careful Finishing', text: 'Exquisite hand detailing and final checks.' }
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center group">
              <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center mb-4 group-hover:bg-white/5 transition-colors duration-500">
                <item.icon className="w-6 h-6 text-accent group-hover:scale-110 transition-transform duration-500" strokeWidth={1} />
              </div>
              <h3 className="text-base font-medium mb-2 tracking-wide">{item.title}</h3>
              <p className="text-[13px] text-[#E8E0D0]/60 font-light leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 5: CTA */}
      <section className="relative py-32 flex items-center justify-center overflow-hidden group">
        <div className="absolute inset-0 w-full h-full">
          <Image src="/images/heritage-hero.jpg" alt="Heritage Tailoring" fill className="object-cover object-center transition-transform duration-[20s] group-hover:scale-110 opacity-30" />
          <div className="absolute inset-0 bg-[#0a0a09]/80 group-hover:bg-[#0a0a09]/70 transition-colors duration-1000" />
        </div>
        
        <div className="relative z-10 text-center max-w-3xl mx-auto px-6">
          <span className="block gold-text font-bold tracking-[0.3em] uppercase text-[10px] mb-4">Take The Next Step</span>
          <h2 className="text-3xl md:text-5xl font-light mb-6 leading-tight">Begin Your Consultation</h2>
          <p className="text-base md:text-lg text-[#E8E0D0]/80 font-light mb-8">
            Visit our store in Visakhapatnam to explore fabrics and start your tailoring process.
          </p>
          <button className="bg-transparent border border-accent text-accent px-8 py-3 uppercase tracking-[0.2em] text-xs hover:bg-accent hover:text-[#0a0a09] transition-all duration-300 relative overflow-hidden group/button">
            Book Consultation
          </button>
        </div>
      </section>
      
      {/* Utility style for hiding scrollbar on webkit */}
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </div>
  );
}

