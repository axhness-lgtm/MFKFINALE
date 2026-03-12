
"use client";

import { Scissors, Ruler, PencilLine, CheckCircle2, Layers } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

const steps = [
  {
    icon: <PencilLine className="w-8 h-8" />,
    title: "Consultation",
    desc: "A private dialogue to define your sartorial requirements and aesthetic vision.",
    detail: "We begin with understanding the man behind the suit—your lifestyle, posture, and the legacy you wish to convey."
  },
  {
    icon: <Layers className="w-8 h-8" />,
    title: "Fabric Selection",
    desc: "Curating the finest textiles from world-renowned mills across Europe and Asia.",
    detail: "Choose from our exclusive collection of Super 180s wool, rare cashmeres, and silks from Loro Piana and Zegna."
  },
  {
    icon: <Ruler className="w-8 h-8" />,
    title: "Measurements",
    desc: "Precise anatomical mapping to create your unique paper pattern from scratch.",
    detail: "Over 40 distinct measurements are taken to ensure the garment respects every contour of your silhouette."
  },
  {
    icon: <Scissors className="w-8 h-8" />,
    title: "Tailoring",
    desc: "The meticulous hand-stitching of your garment by our master artisans.",
    detail: "Thousands of hand-applied stitches form the internal canvas, giving the suit its structure and 'memory'."
  },
  {
    icon: <CheckCircle2 className="w-8 h-8" />,
    title: "Final Fitting",
    desc: "The final refinement where every detail is perfected before the final reveal.",
    detail: "A moment of absolute precision where we ensure the drape, break, and balance are nothing short of flawless."
  }
];

export function ProcessSteps() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-32 px-6 md:px-12 bg-card/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-6 mb-24">
          <span className="gold-text font-bold tracking-[0.4em] uppercase text-sm">The MFKhan Journey</span>
          <h2 className="text-4xl md:text-6xl font-headline font-bold">The Bespoke Process</h2>
          <div className="w-24 h-1 bg-accent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-4">
            {steps.map((step, idx) => (
              <div 
                key={idx}
                onMouseEnter={() => setActiveStep(idx)}
                className={cn(
                  "p-6 luxury-card cursor-default transition-all duration-500 border-l-2",
                  activeStep === idx ? "border-l-accent bg-card/80 scale-[1.02]" : "border-l-transparent opacity-50 grayscale hover:opacity-100 hover:grayscale-0"
                )}
              >
                <div className="flex items-center gap-6">
                  <div className={cn(
                    "w-14 h-14 rounded-full flex items-center justify-center transition-all duration-500",
                    activeStep === idx ? "violet-gradient text-white shadow-lg" : "bg-muted text-muted-foreground"
                  )}>
                    {step.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-headline font-semibold mb-1">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="relative h-[650px] luxury-card p-12 flex flex-col justify-center violet-gradient shadow-2xl overflow-hidden rounded-none">
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute top-0 right-0 w-80 h-80 bg-accent rounded-full blur-[150px]"></div>
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-white rounded-full blur-[150px]"></div>
            </div>
            
            <div key={activeStep} className="relative z-10 animate-fade-in space-y-10">
              <span className="text-accent text-8xl font-headline opacity-20 font-bold block">0{activeStep + 1}</span>
              <h3 className="text-4xl md:text-5xl font-headline font-bold text-white">{steps[activeStep].title}</h3>
              <p className="text-xl md:text-3xl text-white/90 leading-relaxed italic font-light font-headline">
                "{steps[activeStep].detail}"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
