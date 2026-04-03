import { Header } from '@/components/navigation/Header';
import { Footer } from '@/components/navigation/Footer';
import { Hero } from '@/components/sections/Hero';
import { CollectionsPreview } from '@/components/sections/CollectionsPreview';
import { ProcessSteps } from '@/components/sections/ProcessSteps';
import { Testimonials } from '@/components/sections/Testimonials';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { Button } from '@/components/ui/button';
import { FadeIn } from '@/components/animations/FadeIn';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />

        <FadeIn>
          <CollectionsPreview />
        </FadeIn>

        <section className="pt-32 pb-16 px-6 md:px-12 bg-[#0a0a09]">
          <FadeIn className="max-w-7xl mx-auto space-y-32">

            {/* Header Area */}
            <div className="text-center flex flex-col items-center">
              <div className="w-16 h-px bg-accent/50 mb-8"></div>
              <h2
                className="gold-text italic"
                style={{
                  fontFamily: '"Gwendolyn", cursive',
                  fontSize: 'clamp(36px, 4vw, 65px)',
                  letterSpacing: '0.02em',
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
                  Craftsmanship <span className="block italic text-accent" style={{ fontFamily: '"Gwendolyn", cursive', fontSize: '1.4em', lineHeight: '0.8', marginLeft: '10%' }}>That Endures</span>
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
                  A Name <span className="block italic text-accent" style={{ fontFamily: '"Gwendolyn", cursive', fontSize: '1.4em', lineHeight: '0.8', marginLeft: '10%' }}>the City Trusts</span>
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
                  A Personalized <span className="block italic text-accent" style={{ fontFamily: '"Gwendolyn", cursive', fontSize: '1.4em', lineHeight: '0.8', marginLeft: '10%' }}>Experience</span>
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
                  Recommended <span className="block italic text-accent" style={{ fontFamily: '"Gwendolyn", cursive', fontSize: '1.4em', lineHeight: '0.8', marginLeft: '10%' }}>by Clients</span>
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
      </main>
      <Footer />
    </div>
  );
}
