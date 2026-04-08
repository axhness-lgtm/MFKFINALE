
"use client";

import { useState } from 'react';
import { cn } from '@/lib/utils';

const steps = [
  {
    title: "Consultation",
    desc: "A private dialogue defining your sartorial vision.",
    detail: "We begin with understanding the man—your lifestyle and posture."
  },
  {
    title: "Fabric Selection",
    desc: "Curating textiles from world-renowned mills.",
    detail: "Choose from exclusive Super 180s wool and rare cashmeres."
  },
  {
    title: "Measurements",
    desc: "Precise mapping to create your unique paper pattern.",
    detail: "Over 40 distinct measurements taken for a flawless silhouette."
  },
  {
    title: "Tailoring",
    desc: "The meticulous hand-stitching by master artisans.",
    detail: "Thousands of hand-applied stitches form the internal memory."
  },
  {
    title: "Trial Fitting",
    desc: "An initial refinement of the garment's structure.",
    detail: "Assessing the preliminary canvas to ensure perfect alignment and drape."
  },
  {
    title: "Final Fitting",
    desc: "Perfecting every detail before the reveal.",
    detail: "Ensuring drape, break, and balance are absolute perfection."
  }
];

export function ProcessSteps() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="pt-24 pb-16 px-6 md:px-12 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-6 mb-24">
          <span
            className="gold-text italic"
            style={{ fontFamily: '"Times New Roman", serif', fontSize: 'clamp(36px, 4vw, 55px)', fontWeight: 400 }}
          >
            The Journey
          </span>
          <h2 className="text-4xl md:text-6xl font-serif font-light">Hand-Crafted Process</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
          <div className="lg:col-span-5 space-y-6">
            {steps.map((step, idx) => (
              <button
                key={idx}
                onMouseEnter={() => setActiveStep(idx)}
                className={cn(
                  "w-full text-left p-6 transition-all duration-700 border-b",
                  activeStep === idx ? "border-accent opacity-100 translate-x-4" : "border-border/10 opacity-30 hover:opacity-50"
                )}
              >
                <span className="text-xs uppercase tracking-[0.2em] mb-2 block text-accent" style={{ fontFamily: 'Helvetica, Arial, sans-serif', fontWeight: 400 }}>Step 0{idx + 1}</span>
                <h3 className="text-3xl font-light tracking-wide" style={{ fontFamily: '"Playfair Display", serif' }}>{step.title}</h3>
              </button>
            ))}
          </div>

          <div className="lg:col-span-7 relative h-[500px] flex flex-col justify-center items-center text-center px-12 bg-card/50">
            <div key={activeStep} className="animate-fade-in space-y-10">
              <span className="text-accent text-9xl font-serif opacity-5 font-bold block">0{activeStep + 1}</span>
              <p className="text-4xl md:text-6xl font-serif font-light leading-relaxed italic text-foreground max-w-lg">
                {steps[activeStep].detail}
              </p>
              <p className="text-base uppercase tracking-[0.3em] text-muted-foreground font-bold">
                {steps[activeStep].desc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

