
import { Header } from '@/components/navigation/Header';
import { Footer } from '@/components/navigation/Footer';
import { Hero } from '@/components/sections/Hero';
import { CollectionsPreview } from '@/components/sections/CollectionsPreview';
import { ProcessSteps } from '@/components/sections/ProcessSteps';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        
        <CollectionsPreview />

        {/* Brand Philosophy */}
        <section className="py-24 px-6 md:px-12 bg-background">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-5xl font-headline font-semibold gold-text italic">
              "A suit should be a piece of armor for the modern gentleman."
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              At MFK International, we believe tailoring is more than just clothing; it's a statement of identity. Our garments are engineered to instill confidence, reflect character, and provide an unparalleled standard of luxury.
            </p>
            <Button asChild variant="link" className="text-accent uppercase tracking-widest hover:text-white transition-colors">
              <Link href="/about">Read Our Story</Link>
            </Button>
          </div>
        </section>

        <ProcessSteps />

        {/* Advisor CTA */}
        <section className="py-24 px-6 md:px-12 violet-gradient">
           <div className="max-w-5xl mx-auto text-center space-y-8">
             <h2 className="text-4xl md:text-6xl font-headline font-bold text-white">Unsure of Your Style?</h2>
             <p className="text-xl text-white/80 max-w-2xl mx-auto">
               Try our Generative Style Advisor. Powered by AI, designed by master tailors to find your perfect look.
             </p>
             <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-white transition-all h-14 px-10 text-lg rounded-none">
               <Link href="/advisor">Launch Advisor</Link>
             </Button>
           </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
