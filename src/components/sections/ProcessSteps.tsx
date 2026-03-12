
"use client";

import { Scissors, Ruler, PencilLine, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

const steps = [
  {
    icon: <PencilLine className="w-8 h-8" />,
    title: "Consultation",
    desc: "An initial private meeting to discuss your style, the occasion, and fabric selection from our curated bunch books.",
    detail: "We explore over 5,000 premium fabrics from mills like Loro Piana, Holland & Sherry, and Vitale Barberis Canonico."
  },
  {
    icon: <Ruler className="w-8 h-8" />,
    title: "Measurement",
    desc: "Over 40 precise anatomical measurements are taken to ensure your pattern is drafted from a blank canvas.",
    detail: "Our master cutter analyzes posture, shoulder slope, and nuances that off-the-rack garments ignore."
  },
  {
    icon: <Scissors className="w-8 h-8" />,
    title: "Drafting & Fitting",
    desc: "A paper pattern is cut by hand. Multiple fittings (Baste, Forward, Fin-bar) ensure every detail is perfected.",
    detail: "The 'baste fitting' is where the magic happens—a skeleton suit is built to sculpt the fit before final stitching."
  },
  {
    icon: <CheckCircle2 className="w-8 h-8" />,
    title: "Final Handover",
    desc: "Every buttonhole is hand-sewn. The garment is pressed by hand and ready for its first appearance.",
    detail: "A final inspection by the creative director ensures MFK standards are exceeded before delivery."
  }
];

export function ProcessSteps() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-24 px-6 md:px-12 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-20">
          <span className="gold-text font-medium tracking-[0.3em] uppercase text-sm">The MFK Journey</span>
          <h2 className="text-4xl md:text-5xl font-headline font-bold">The Bespoke Experience</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            {steps.map((step, idx) => (
              <div 
                key={idx}
                onMouseEnter={() => setActiveStep(idx)}
                className={cn(
                  "p-8 luxury-card cursor-default transition-all duration-500 border-l-4",
                  activeStep === idx ? "border-l-accent bg-card" : "border-l-transparent opacity-60 grayscale hover:opacity-100 hover:grayscale-0"
                )}
              >
                <div className="flex items-center gap-6">
                  <div className={cn(
                    "w-16 h-16 rounded-full flex items-center justify-center transition-colors duration-500",
                    activeStep === idx ? "violet-gradient text-white" : "bg-muted text-muted-foreground"
                  )}>
                    {step.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-headline font-semibold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="relative h-[600px] luxury-card p-12 flex flex-col justify-center violet-gradient shadow-2xl overflow-hidden group">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute top-0 right-0 w-64 h-64 bg-accent rounded-full blur-[120px]"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full blur-[120px]"></div>
            </div>
            
            <div key={activeStep} className="relative z-10 animate-fade-in space-y-8">
              <span className="text-accent text-7xl font-headline opacity-30 font-bold">0{activeStep + 1}</span>
              <h3 className="text-4xl md:text-5xl font-headline font-bold text-white">{steps[activeStep].title}</h3>
              <div className="w-20 h-1 bg-accent"></div>
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed italic font-light">
                "{steps[activeStep].detail}"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
