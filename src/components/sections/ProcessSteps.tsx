
"use client";

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
  return (
    <section className="py-24 px-6 md:px-12 bg-background border-y border-border/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-20">
          <span
            className="gold-text italic block mb-2 md:mb-4"
            style={{ fontFamily: '"Times New Roman", serif', fontSize: 'clamp(28px, 3vw, 45px)', fontWeight: 400 }}
          >
            The Journey
          </span>
          <h3 className="text-3xl md:text-5xl font-serif font-light tracking-tight max-w-2xl mx-auto leading-tight">The Art of Hand-Crafted Tailoring</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12 md:gap-y-16">
          {steps.map((step, idx) => (
            <div key={idx} className="group space-y-4">
              <div className="flex items-baseline gap-4">
                <span className="text-accent/40 font-serif text-3xl font-light">0{idx + 1}</span>
                <h3 className="text-2xl font-light tracking-wide text-foreground group-hover:text-accent transition-colors duration-500" style={{ fontFamily: '"Playfair Display", serif' }}>
                  {step.title}
                </h3>
              </div>
              <div className="pl-10 md:pl-12 space-y-2">
                <p className="text-[10px] md:text-sm uppercase tracking-[0.2em] text-muted-foreground/80 font-medium" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
                  {step.desc}
                </p>
                <p className="text-[#E8E0D0]/60 text-xs md:text-sm leading-relaxed font-light italic" style={{ fontFamily: '"Times New Roman", serif' }}>
                  {step.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
