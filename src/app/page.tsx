import { Metadata } from 'next';
import { Hero } from '@/components/sections/Hero';
import { CollectionsPreview } from '@/components/sections/CollectionsPreview';
import { ProcessSteps } from '@/components/sections/ProcessSteps';
import { Testimonials } from '@/components/sections/Testimonials';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { FadeIn } from '@/components/animations/FadeIn';
import { MobileQuickNav } from '@/components/sections/MobileQuickNav';
import Link from 'next/link';
import Image from 'next/image';
import { ExperienceSection } from '@/components/sections/ExperienceSection';
import { BlogPreview } from '@/components/sections/BlogPreview';

export const metadata: Metadata = {
  title: 'Best Wedding Suits & Bespoke Tailoring in Visakhapatnam | MF Khan International',
  description: 'MF Khan International: The absolute destination for high-end wedding suits, designer sherwanis, and luxury custom tailoring in Vizag. Quality conscious since 1940.',
  keywords: ['best wedding suits in visakhapatnam', 'bespoke tailoring vizag', 'wedding sherwani visakhapatnam', 'suit shop in vizag', 'custom made suits visakhapatnam'],
  openGraph: {
    title: 'Best Wedding Suits & Bespoke Tailoring in Visakhapatnam | MF Khan International',
    description: 'Vizag’s premier destination for luxury menswear and wedding attire since 1940.',
    images: ['/og-home.jpg'],
  }
};

export default function Home() {
  return (
    <div className="flex flex-col bg-[#0a0a09]">
      <Hero />

      <MobileQuickNav />

      {/* Section 2: Heritage Info */}
      <div className="px-4 md:px-8 py-8 bg-[#0a0a09]">
        <section className="pt-20 pb-16 px-6 md:px-12 bg-[#0d0606] border border-accent/40 rounded-sm relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent pointer-events-none" />
          <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
            <FadeIn>
              <h2 className="text-2xl md:text-4xl text-[#E8E0D0] font-light leading-relaxed font-serif">
                Since <span className="italic text-accent">1940</span>, the <Link href="/contact" className="hover:text-accent transition-colors">MF Khan International</Link> name has stood for one thing in Visakhapatnam — <span className="font-medium">uncompromising quality.</span>
              </h2>
            </FadeIn>
            
            <FadeIn delay={100}>
              <p className="text-white/60 text-sm md:text-base leading-loose max-w-3xl mx-auto font-light" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
                <span className="text-white/90">MFKhan International</span> is Vizag&apos;s largest men&apos;s wear destination — a 9,000 square foot showroom on Jail Road, Visakhapatnam, built to be the city&apos;s definitive destination for the discerning Indian man.
              </p>
            </FadeIn>

            <FadeIn delay={200}>
              <p className="text-white/60 text-sm md:text-base leading-loose max-w-3xl mx-auto font-light mb-8" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
                Under one roof, every groom finds what his wedding demands from <Link href="/wedding/designer-suits" className="text-accent hover:underline">designer suits</Link>, hand-embroidered reception wear, <Link href="/wedding/sherwani" className="text-accent hover:underline">sherwanis</Link> to Indo-Western fusion wear, and an extensive international fabric library sourced from the world's finest mills. 
                <br /><br />
                Walk in and select from our collections, or commission a garment built to your exact measurements through our fine custom tailoring atelier. Where the <Link href="/contact" className="text-accent hover:underline">MF Khan International</Link> legacy has been practiced without interruption for over eight decades.
              </p>
            </FadeIn>
            
            <FadeIn delay={300}>
              <Link href="/heritage" className="hero-btn-secondary inline-flex mt-4">
                Explore Our Legacy
              </Link>
            </FadeIn>
          </div>
        </section>
      </div>

      <FadeIn>
        <CollectionsPreview />
      </FadeIn>

      {/* INSTA Reel Link Section */}
      <section className="py-24 px-6 md:px-12 bg-[#0d0606] border-t border-white/5">
        <div className="max-w-[1400px] mx-auto space-y-12">
          <FadeIn className="text-center space-y-4">
             <span className="gold-text uppercase tracking-[0.4em] text-[10px]" style={{ fontFamily: '"Spectral", serif' }}>Behind The Scenes</span>
             <h2 className="text-3xl md:text-5xl text-white font-light font-serif">
               Inside the Atelier
             </h2>
          </FadeIn>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[1, 2, 3, 4].map((num) => (
              <FadeIn key={num} delay={num * 150} className="relative aspect-[9/16] overflow-hidden group cursor-pointer border border-white/5 rounded-sm hover:border-accent/40 transition-colors bg-black">
                {/* 
                  Native HTML5 Video for True Silent Autoplay
                  Instagram embeds physically cannot autoplay due to browser cross-origin policies.
                  These now expect local .mp4 files.
                */}
                <video 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 transform group-hover:scale-105 ease-out"
                >
                  <source src={`/videos/reel-${num}.mp4`} type="video/mp4" />
                </video>
                
                {/* Visual Overlay */}
                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex justify-between items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-xs font-bold uppercase tracking-widest">
                    Inside The Atelier
                  </span>
                  <div className="w-8 h-8 rounded-full bg-accent/20 flex flex-col items-center justify-center backdrop-blur-md">
                     <svg className="w-3 h-3 text-accent" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <ExperienceSection />

      <section className="pt-8 md:pt-12 pb-10 md:pb-16 px-6 md:px-12 bg-[#0a0a09]">
        <div className="max-w-7xl mx-auto space-y-8 md:space-y-16">

          {/* Reputation Section Header */}
          <FadeIn className="text-center flex flex-col items-center mb-0 md:mb-6">
            <h2
              className="gold-text italic"
              style={{
                fontFamily: '"Times New Roman", serif',
                fontSize: 'clamp(28px, 5vw, 65px)',
                letterSpacing: '0.0005em',
                fontWeight: 400,
              }}
            >
              A reputation built<br className="md:hidden" /> over generations.
            </h2>
          </FadeIn>

          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-10 max-w-5xl mx-auto">

            {/* Item 1 */}
            <FadeIn delay={100} className="space-y-4 md:space-y-6">
              <h3
                className="text-2xl md:text-3xl text-white font-light leading-snug"
                style={{ fontFamily: '"Playfair Display", serif' }}
              >
                Craftsmanship <span className="block italic text-accent" style={{ fontFamily: '"Times New Roman", serif', fontSize: '1.2em', lineHeight: '0.8', marginLeft: '5%' }}>That Endures</span>
              </h3>
              <p
                className="text-[#E8E0D0]/60 leading-relaxed text-sm md:text-base tracking-wide"
                style={{ fontFamily: 'Helvetica, Arial, sans-serif', fontWeight: 'regular' }}
              >
                Every garment at <Link href="/contact" className="hover:text-accent transition-colors">MFKhan International</Link> is individually cut, constructed, and finished with the attention that eighty-five years of sartorial practice produces. Not one piece leaves our workroom without it.
              </p>
            </FadeIn>

            {/* Item 2 */}
            <FadeIn delay={200} className="space-y-4 md:space-y-6">
              <h3
                className="text-2xl md:text-3xl text-white font-light leading-snug"
                style={{ fontFamily: '"Playfair Display", serif' }}
              >
                A Name <span className="block italic text-accent" style={{ fontFamily: '"Times New Roman", serif', fontSize: '1.2em', lineHeight: '0.8', marginLeft: '5%' }}>the City Trusts</span>
              </h3>
              <p
                className="text-[#E8E0D0]/60 leading-relaxed text-sm md:text-base tracking-wide"
                style={{ fontFamily: 'Helvetica, Arial, sans-serif', fontWeight: 'regular' }}
              >
                Three generations of Visakhapatnam's families have chosen <Link href="/contact" className="hover:text-accent transition-colors">MFKhan International</Link> for their most important occasions. When a father brings his son to us, it is because his own father brought him first.
              </p>
            </FadeIn>

            {/* Item 3 */}
            <FadeIn delay={300} className="space-y-4 md:space-y-6">
              <h3
                className="text-2xl md:text-3xl text-white font-light leading-snug"
                style={{ fontFamily: '"Playfair Display", serif' }}
              >
                A Personalized <span className="block italic text-accent" style={{ fontFamily: '"Times New Roman", serif', fontSize: '1.2em', lineHeight: '0.8', marginLeft: '5%' }}>Experience</span>
              </h3>
              <p
                className="text-[#E8E0D0]/60 leading-relaxed text-sm md:text-base tracking-wide"
                style={{ fontFamily: 'Helvetica, Arial, sans-serif', fontWeight: 'regular' }}
              >
                Every client at <Link href="/contact" className="hover:text-accent transition-colors">MFKhan International</Link> is guided through a one-on-one consultation — for fit, for occasion, for intent. M. Akbar Ali Khan personally oversees the experience our wedding clients receive.
              </p>
            </FadeIn>

            {/* Item 4 */}
            <FadeIn delay={400} className="space-y-4 md:space-y-6">
              <h3
                className="text-2xl md:text-3xl text-white font-light leading-snug"
                style={{ fontFamily: '"Playfair Display", serif' }}
              >
                Recommended <span className="block italic text-accent" style={{ fontFamily: '"Times New Roman", serif', fontSize: '1.2em', lineHeight: '0.8', marginLeft: '5%' }}>by Clients</span>
              </h3>
              <p
                className="text-[#E8E0D0]/60 leading-relaxed text-sm md:text-base tracking-wide"
                style={{ fontFamily: 'Helvetica, Arial, sans-serif', fontWeight: 'regular' }}
              >
                We do not measure success in footfall. We measure it in the groom who returns with his younger brother. Our work across Vizag speaks for itself — and our clients speak for us.
              </p>
            </FadeIn>

          </div>
        </div>
      </section>


      <FadeIn>
        <ProcessSteps />
      </FadeIn>

      <FadeIn>
        <Testimonials />
      </FadeIn>

      <FadeIn>
        <BlogPreview />
      </FadeIn>

      <FadeIn>
        <FinalCTA />
      </FadeIn>
    </div>
  );
}
