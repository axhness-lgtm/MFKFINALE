
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Scissors } from 'lucide-react';

export function FinalCTA() {
  return (
    <section className="py-32 px-6 md:px-12 bg-[#1A1820] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <Scissors className="w-96 h-96 -rotate-45 absolute -top-20 -left-20" />
        <Scissors className="w-96 h-96 rotate-45 absolute -bottom-20 -right-20" />
      </div>

      <div className="max-w-4xl mx-auto text-center space-y-12 relative z-10">
        <div className="space-y-4">
          <span className="gold-text font-bold tracking-[0.5em] uppercase text-sm">Your Bespoke Journey Awaits</span>
          <h2 className="text-4xl md:text-7xl font-headline font-bold">Dress Like <br />The <span className="italic gold-text">Best Version</span> of You</h2>
        </div>
        
        <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto font-body">
          Experience the unparalleled confidence of a garment made exclusively for you. Book your private consultation at our Mayfair atelier today.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-4">
          <Button asChild size="lg" className="violet-gradient h-16 px-12 text-xl rounded-none hover:opacity-90 transition-all duration-300 w-full sm:w-auto">
            <Link href="/contact">Schedule My Consultation</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="h-16 px-12 text-xl rounded-none border-accent text-accent hover:bg-accent/10 transition-all duration-300 w-full sm:w-auto">
            <Link href="/advisor">AI Style Advisor</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
