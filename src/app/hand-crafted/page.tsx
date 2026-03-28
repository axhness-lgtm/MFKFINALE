import { Header } from '@/components/navigation/Header';
import { Footer } from '@/components/navigation/Footer';
import { ProcessSteps } from '@/components/sections/ProcessSteps';
import { FadeIn } from '@/components/animations/FadeIn';

export default function ProcessPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-20">
          <FadeIn className="text-center space-y-6 max-w-3xl mx-auto">
            <span className="gold-text uppercase tracking-[0.4em] text-[10px] font-bold">The Artisanal Journey</span>
            <h1 className="text-5xl md:text-7xl font-headline font-light">The Hand-Crafted <br /><span className="italic">Process</span></h1>
            <p className="text-xl text-muted-foreground leading-relaxed font-light">
              From the initial dialogue to the final hand-stitching, experience the meticulous journey of creating a garment that is uniquely yours.
            </p>
          </FadeIn>
        </div>

        <ProcessSteps />

        <div className="max-w-5xl mx-auto px-6 md:px-12 mt-40 space-y-24">
           <FadeIn className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
             <div className="space-y-6">
               <h3 className="text-3xl font-headline gold-text">A Symphony of Detail</h3>
               <p className="text-muted-foreground leading-relaxed">
                 Our process is rooted in the Savile Row tradition, where every curve and line is drafted by hand onto heavy brown paper. We don't use stock patterns; we create a new blueprint for every individual.
               </p>
             </div>
             <div className="border border-border/20 p-12 bg-card/10">
                <blockquote className="text-2xl font-headline italic font-light leading-snug">
                  "The difference between a suit and a statement lies in the thousands of silent stitches hidden within the canvas."
                </blockquote>
             </div>
           </FadeIn>
        </div>
      </main>
      <Footer />
    </div>
  );
}
