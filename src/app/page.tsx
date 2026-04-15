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

export default function Home() {
  return (
    <div className="flex flex-col bg-[#0a0a09]">
      <Hero />

      <MobileQuickNav />

      <FadeIn>
        <CollectionsPreview />
      </FadeIn>

      <ExperienceSection />

      <section className="pt-10 md:pt-20 pb-16 md:pb-32 px-6 md:px-12 bg-[#0a0a09]">
        <div className="max-w-7xl mx-auto space-y-12 md:space-y-32">

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
                Every garment is individually cut and tailored with attention to detail refined over decades.
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
                Known across Visakhapatnam for reliability, consistency, and long-standing client relationships.
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
                Each client is guided through a one-on-one consultation, ensuring the final garment reflects both fit and intent.
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
                Much of our work comes through returning clients and word-of-mouth — a reflection of trust, not marketing.
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
