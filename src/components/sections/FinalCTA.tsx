import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function FinalCTA() {
  return (
    <section className="py-48 px-6 md:px-12 bg-[#3E2723] relative overflow-hidden text-[#FAF9F6]">
      <div className="max-w-4xl mx-auto text-center space-y-16 relative z-10">
        <div className="space-y-6">
          <span className="text-accent font-bold tracking-[0.6em] uppercase text-[10px]">Your Journey</span>
          <h2 className="text-4xl md:text-7xl font-headline font-light leading-tight">
            Dress Like <br />
            The <span className="font-citadel italic text-5xl md:text-8xl">Best Version</span> of You
          </h2>
        </div>
        
        <p className="text-base md:text-lg text-[#FAF9F6]/60 leading-relaxed max-w-xl mx-auto font-light tracking-wide">
          Experience the unparalleled confidence of a garment made exclusively for you. Book your private consultation today.
        </p>

        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
          <Button asChild size="lg" className="bg-[#FAF9F6] text-[#3E2723] h-16 px-16 text-[10px] uppercase tracking-[0.4em] rounded-none hover:bg-accent hover:text-[#FAF9F6] transition-all duration-500 font-bold w-full sm:w-auto">
            <Link href="/contact">Schedule Consultation</Link>
          </Button>
          <Button asChild variant="ghost" size="lg" className="h-16 px-16 text-[10px] uppercase tracking-[0.4em] rounded-none text-[#FAF9F6] border-b border-[#FAF9F6]/20 hover:border-accent hover:text-accent transition-all duration-500 font-bold w-full sm:w-auto">
            <Link href="/advisor">Style Advisor</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
