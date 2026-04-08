import { Hero } from '@/components/sections/Hero';
import { CollectionsPreview } from '@/components/sections/CollectionsPreview';
import { ProcessSteps } from '@/components/sections/ProcessSteps';
import { Testimonials } from '@/components/sections/Testimonials';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { Button } from '@/components/ui/button';
import { FadeIn } from '@/components/animations/FadeIn';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col">
        <Hero />

        <FadeIn>
          <CollectionsPreview />
        </FadeIn>

        <section className="bg-[#0a0a09] pt-32 pb-24 px-6 md:px-12 relative overflow-hidden mt-20">
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-20">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="object-cover w-full h-full grayscale brightness-50"
            >
              <source src="/showroom-video.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-black/60" />
          </div>

          <FadeIn className="max-w-7xl mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              {/* Left: showroom / garment racks visual */}
              <div className="relative aspect-[4/5] md:aspect-square overflow-hidden group">
                <Image
                  src="https://images.unsplash.com/photo-1594932224828-b4b059b6f6f9?auto=format&fit=crop&q=80&w=1200"
                  alt="MFKhan Showroom"
                  fill
                  className="object-cover transition-transform duration-[3s] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-1000" />
                <div className="absolute bottom-8 left-8 border-l border-accent/60 pl-6">
                  <p className="text-[#E8E0D0] text-xs uppercase tracking-[0.4em] font-medium" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>The 9,000 SQ. FT. Experience</p>
                </div>
              </div>

              {/* Right: text */}
              <div className="space-y-6">
                <div>
                  <span className="gold-text uppercase tracking-[0.5em] text-[10px] block mb-2" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>The Best of Both Worlds</span>
                  <h2 className="text-4xl md:text-6xl text-[#E8E0D0] font-light leading-tight" style={{ fontFamily: '"Times New Roman", serif' }}>
                    From Vision to Wardrobe—<br /><span className="italic">Without the Wait</span>
                  </h2>
                </div>

                <div className="space-y-1 text-[#E8E0D0]/70 text-base leading-relaxed font-light" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
                  <p>
                    Most tailoring begins with imagination. <span className="text-[#E8E0D0]">At MFKhan International, it begins with experience.</span>
                  </p>
                  <p>
                    Step into our 9,000 sq. ft. showroom in Visakhapatnam and explore a curated Designer Gallery of finished suits, sherwanis, and Indo-Western ensembles.
                  </p>
                  <div className="flex flex-col gap-1 py-3 border-y border-white/10">
                    <div className="flex items-center gap-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                      <p>See complete looks. Understand the fit. Try them on.</p>
                    </div>
                  </div>
                  <p>
                    Or begin from fabric and have your garment tailored from the ground up — refined by our in-house master tailoring team.
                  </p>
                  <p className="gold-text italic text-lg" style={{ fontFamily: '"Times New Roman", serif' }}>
                    Two approaches. One uncompromising standard.
                  </p>
                </div>

                <div className="pt-0.1">
                  <Link href="/collections" className="hero-btn-secondary">Explore the Gallery</Link>
                </div>
              </div>
            </div>
          </FadeIn>
        </section>

        <section className="pt-24 pb-32 px-6 md:px-12 bg-[#0a0a09]">
          <FadeIn className="max-w-7xl mx-auto space-y-32">

            {/* Reputation Section Header */}
            <div className="text-center flex flex-col items-center mb-6">
              <h2
                className="gold-text italic"
                style={{
                  fontFamily: '"Times New Roman", serif',
                  fontSize: 'clamp(36px, 4vw, 65px)',
                  letterSpacing: '0.0005em',
                  fontWeight: 400,
                }}
              >
                A reputation built over generations.
              </h2>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-10 max-w-5xl mx-auto">

              {/* Item 1 */}
              <div className="space-y-6">
                <h3
                  className="text-3xl text-white font-light leading-snug"
                  style={{ fontFamily: '"Playfair Display", serif' }}
                >
                  Craftsmanship <span className="block italic text-accent" style={{ fontFamily: '"Times New Roman", serif', fontSize: '1.4em', lineHeight: '0.8', marginLeft: '10%' }}>That Endures</span>
                </h3>
                <p
                  className="text-[#E8E0D0]/70 leading-relaxed text-base tracking-wide"
                  style={{ fontFamily: 'Helvetica, Arial, sans-serif', fontWeight: 'regular' }}
                >
                  Every garment is individually cut and tailored with attention to detail refined over decades.
                </p>
              </div>

              {/* Item 2 */}
              <div className="space-y-6">
                <h3
                  className="text-3xl text-white font-light leading-snug"
                  style={{ fontFamily: '"Playfair Display", serif' }}
                >
                  A Name <span className="block italic text-accent" style={{ fontFamily: '"Times New Roman", serif', fontSize: '1.4em', lineHeight: '0.8', marginLeft: '10%' }}>the City Trusts</span>
                </h3>
                <p
                  className="text-[#E8E0D0]/70 leading-relaxed text-base tracking-wide"
                  style={{ fontFamily: 'Helvetica, Arial, sans-serif', fontWeight: 'regular' }}
                >
                  Known across Visakhapatnam for reliability, consistency, and long-standing client relationships.
                </p>
              </div>

              {/* Item 3 */}
              <div className="space-y-6">
                <h3
                  className="text-3xl text-white font-light leading-snug"
                  style={{ fontFamily: '"Playfair Display", serif' }}
                >
                  A Personalized <span className="block italic text-accent" style={{ fontFamily: '"Times New Roman", serif', fontSize: '1.4em', lineHeight: '0.8', marginLeft: '10%' }}>Experience</span>
                </h3>
                <p
                  className="text-[#E8E0D0]/70 leading-relaxed text-base tracking-wide"
                  style={{ fontFamily: 'Helvetica, Arial, sans-serif', fontWeight: 'regular' }}
                >
                  Each client is guided through a one-on-one consultation, ensuring the final garment reflects both fit and intent.
                </p>
              </div>

              {/* Item 4 */}
              <div className="space-y-6">
                <h3
                  className="text-3xl text-white font-light leading-snug"
                  style={{ fontFamily: '"Playfair Display", serif' }}
                >
                  Recommended <span className="block italic text-accent" style={{ fontFamily: '"Times New Roman", serif', fontSize: '1.4em', lineHeight: '0.8', marginLeft: '10%' }}>by Clients</span>
                </h3>
                <p
                  className="text-[#E8E0D0]/70 leading-relaxed text-base tracking-wide"
                  style={{ fontFamily: 'Helvetica, Arial, sans-serif', fontWeight: 'regular' }}
                >
                  Much of our work comes through returning clients and word-of-mouth — a reflection of trust, not marketing.
                </p>
              </div>

            </div>
          </FadeIn>
        </section>


        <FadeIn>
          <ProcessSteps />
        </FadeIn>

        <FadeIn>
          <Testimonials />
        </FadeIn>

        <FadeIn>
          <FinalCTA />
        </FadeIn>
    </div>
  );
}
