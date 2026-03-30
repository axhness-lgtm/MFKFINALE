import { Header } from '@/components/navigation/Header';
import { Footer } from '@/components/navigation/Footer';
import { Hero } from '@/components/sections/Hero';
import { CollectionsPreview } from '@/components/sections/CollectionsPreview';
import { ProcessSteps } from '@/components/sections/ProcessSteps';
import { Craftsmanship } from '@/components/sections/Craftsmanship';
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

        <section className="py-32 px-6 md:px-12 bg-[#0F0E13]">
          <FadeIn className="max-w-5xl mx-auto text-center space-y-10">
            <div className="w-20 h-px bg-accent/50 mx-auto mb-12"></div>
            <h2 className="text-4xl md:text-7xl font-headline font-bold gold-text leading-tight">
              "<span className="font-citadel lowercase text-5xl md:text-8xl">A MFKhan suit</span> is not just attire; it is a declaration of presence and a testament to heritage."
            </h2>
            <div className="space-y-6 max-w-3xl mx-auto">
              <p className="text-2xl text-muted-foreground leading-relaxed font-body">
                We believe that true luxury lies in the unseen details—the internal canvas, the hand-stitched silk, and the perfect mathematical balance of the silhouette.
              </p>
              <Button asChild variant="link" className="text-accent uppercase tracking-[0.3em] font-bold hover:text-white transition-colors text-base">
                <Link href="/about">Discover Our Heritage</Link>
              </Button>
            </div>
            <div className="w-20 h-px bg-accent/50 mx-auto mt-12"></div>
          </FadeIn>
        </section>

        <FadeIn>
          <Craftsmanship />
        </FadeIn>

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
