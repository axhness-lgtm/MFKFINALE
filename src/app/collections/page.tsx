import { Header } from '@/components/navigation/Header';
import { Footer } from '@/components/navigation/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { Scissors, Ruler, Layers, Medal, ChevronRight } from 'lucide-react';

const collections = [
  {
    id: 'suits',
    title: 'Custom Wedding Suits',
    subtext: 'Designed for professionals and formal occasions, our suits are constructed with attention to structure, balance, and long-term wearability.',
    technical: [
      'structured jacket construction',
      'canvas layering (if applicable)',
      'lapel shaping and shoulder alignment',
      'fabric selection (wool, blends, seasonal fabrics)',
    ],
    useCases: 'Business, formal events, daily professional wear',
    cta: 'Explore Suits',
    link: '/collections/suits',
    mainImage: '/images/suits-main.png',
    sliderImages: ['/images/blue-blazer.jpeg', '/images/red-suit.jpeg', '/images/gray-casuals.jpeg']
  },
  {
    id: 'sherwanis',
    title: 'Wedding Sherwanis',
    subtext: 'Crafted for weddings and traditional occasions, each sherwani is designed with attention to proportion, detailing, and overall presence.',
    technical: [
      'embroidery and fabric selection',
      'garment fall and structure',
      'collar shaping and fit balance',
      'layering with inner garments',
    ],
    useCases: 'Weddings, receptions, ceremonies',
    cta: 'Explore Sherwanis',
    link: '/collections/sherwanis',
    mainImage: '/images/sherwanis-main.png',
    sliderImages: ['/images/festive-sherwani.jpeg', '/images/red-suit.jpeg', '/images/heritage-hero.jpg']
  },
  {
    id: 'tuxedos',
    title: 'Tuxedos & Evening Wear',
    subtext: 'Refined tailoring for formal occasions, designed to deliver sharp silhouettes and understated elegance.',
    technical: [
      'satin lapel finishing',
      'precise jacket tapering',
      'structured fit and clean lines',
      'fabric contrast detailing',
    ],
    useCases: 'Receptions, black-tie events, formal evenings',
    cta: 'Explore Tuxedos',
    link: '/collections/tuxedos',
    mainImage: '/images/tuxedos-main.png',
    sliderImages: ['/images/blue-blazer.jpeg', '/images/gray-casuals.jpeg', '/images/heritage-hero.jpg']
  },
  {
    id: 'wedding-wear',
    title: 'Complete Wedding Tailoring',
    subtext: 'A complete tailoring solution for grooms and families, ensuring consistency in style, fit, and presentation across every outfit.',
    technical: [
      'coordinated outfit planning',
      'fabric and color alignment',
      'multi-garment fittings',
      'occasion-specific styling',
    ],
    useCases: 'Weddings, family coordination, multiple events',
    cta: 'Plan Your Wedding',
    link: '/collections/wedding-wear',
    mainImage: '/images/wedding-main.png',
    sliderImages: ['/images/festive-sherwani.jpeg', '/images/red-suit.jpeg', '/images/blue-blazer.jpeg']
  },
  {
    id: 'womens-wear',
    title: 'Women’s Custom Tailoring',
    subtext: 'Tailored garments designed with attention to fit, comfort, and occasion-specific styling.',
    technical: [
      'body contour fitting',
      'fabric drape understanding',
      'silhouette structuring',
      'finishing techniques',
    ],
    useCases: 'Formal wear, custom suits, bespoke dresses',
    cta: 'Explore Women’s Wear',
    link: '/collections/womens-wear',
    mainImage: '/images/womens-main.png',
    sliderImages: ['/images/blue-blazer.jpeg', '/images/red-suit.jpeg', '/images/gray-casuals.jpeg']
  }
];

export default function CollectionsPage() {
  return (
    <div className="min-h-screen bg-[#0a0a09] text-[#E8E0D0] selection:bg-accent/30 font-body">
      <Header />
      
      {/* SECTION 1 & 2: HERO FOR COLLECTIONS PAGE */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden text-center px-6">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/suits-main.png" 
            alt="MF Khan Collections" 
            fill 
            priority
            className="object-cover object-center opacity-40 brightness-[0.7]" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a09]/90 via-[#0a0a09]/60 to-[#0a0a09]" />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center animate-fade-in pt-32">
          <span className="gold-text font-bold tracking-[0.4em] uppercase text-[10px] md:text-xs mb-6 block drop-shadow-lg">
            Our Creations
          </span>
          
          <h1 className="mb-0" style={{ lineHeight: 1.1 }}>
            <span className="block mb-1">
              <span style={{ 
                fontFamily: 'Helvetica, Arial, sans-serif', 
                fontSize: 'clamp(36px, 5vw, 70px)', 
                fontWeight: 'normal', 
                letterSpacing: '-0.02em', 
                color: '#E8E0D0' 
              }}>
                Masterpieces of{' '}
              </span>
            </span>
            <span className="block">
              <span style={{ 
                fontFamily: '"Playfair Display", serif', 
                fontSize: 'clamp(42px, 6vw, 80px)', 
                fontWeight: 300, 
                fontStyle: 'italic',
                letterSpacing: '-0.02em', 
                color: '#D4AF37' 
              }}>
                Tailoring.
              </span>
            </span>
          </h1>

          <div className="bg-accent/50 mx-auto my-8" style={{ width: '50px', height: '1px' }} />
          
          <p className="max-w-2xl mx-auto text-lg md:text-xl font-light text-[#E8E0D0]/80 leading-relaxed mb-8 drop-shadow-md">
            Explore our signature collections. Every garment is a statement of precision, structure, and timeless elegance.
          </p>

          <div className="animate-bounce-slow mt-4">
            <ChevronRight className="w-5 h-5 text-accent transform rotate-90" />
          </div>
        </div>
      </section>

      {/* SECTION 3: COLLECTION BLOCKS (CORE) */}
      <section className="pb-20">
        {collections.map((collection, index) => {
          const isEven = index % 2 === 0;
          return (
            <div key={collection.id} className="md:h-[650px] flex flex-col md:flex-row items-stretch w-full overflow-hidden group">
              {/* IMAGE SIDE (60%) */}
              <div className={`w-full md:w-[55%] relative h-[45vh] md:h-auto overflow-hidden ${isEven ? 'md:order-1' : 'md:order-2'}`}>
                <Image
                  src={collection.mainImage}
                  alt={collection.title}
                  fill
                  className="object-cover object-center transition-transform duration-1000 group-hover:scale-105 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a09] via-transparent to-transparent md:hidden" />
              </div>

              {/* TEXT SIDE (45%) */}
              <div className={`w-full md:w-[45%] flex flex-col justify-center px-8 md:px-16 py-12 md:py-16 bg-[#0a0a09] ${isEven ? 'md:order-2' : 'md:order-1'}`}>
                <div className="max-w-md mx-auto w-full group-hover:translate-y-[-5px] transition-transform duration-700 ease-out">
                  <h2 className="text-2xl md:text-4xl font-light mb-4">
                    {collection.title}
                  </h2>
                  <p className="text-[#E8E0D0]/70 text-base mb-6 font-light leading-relaxed">
                    {collection.subtext}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-[10px] font-bold tracking-widest uppercase gold-text mb-3">Technical Details</h4>
                    <ul className="grid grid-cols-1 gap-2 text-[#E8E0D0]/80 text-[13px] font-light">
                      {collection.technical.map((tech, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-accent mr-2 mt-[4px] leading-none text-[8px]">●</span>
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Horizontal mini-scroll slider */}
                  <div className="mb-8 overflow-x-auto pb-4 hide-scrollbar">
                    <div className="flex gap-3 min-w-max pr-4">
                      {collection.sliderImages.map((img, i) => (
                        <div key={i} className="w-20 h-28 md:w-24 md:h-32 relative flex-shrink-0 group/img overflow-hidden cursor-pointer">
                          <Image src={img} alt={`${collection.title} detail ${i+1}`} fill className="object-cover transition-transform duration-500 group-hover/img:scale-110 opacity-80 group-hover/img:opacity-100" />
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link href={collection.link} className="inline-flex items-center gap-2 group/btn">
                    <span className="text-xs tracking-[0.2em] uppercase font-medium relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-accent after:transition-all after:duration-300 group-hover/btn:after:w-full">
                      {collection.cta}
                    </span>
                    <ChevronRight className="w-3 h-3 text-accent transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
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

      <Footer />
      
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

