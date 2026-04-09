"use client";

import { cn } from '@/lib/utils';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "The attention to detail and craftsmanship at MFK International is absolutely unparalleled. I have never worn a suit that fit so perfectly directly after the first fitting.",
    author: "Zain Khan",
    role: "International Executive"
  },
  {
    quote: "A truly bespoke experience. From the initial consultation to the final fitting, every step felt like a journey into the heart of master tailoring.",
    author: "Rahim Ahmed",
    role: "Architect"
  }
];

export function Testimonials() {
  return (
    <section className="py-24 px-6 md:px-12 bg-black border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="relative group">
              {/* Large Stylized Quote Mark */}
              <span 
                className="absolute -top-12 -left-8 text-[120px] text-accent/10 pointer-events-none transition-all duration-700 group-hover:text-accent/20"
                style={{ fontFamily: '"Playfair Display", serif', fontWeight: 100 }}
              >
                &ldquo;
              </span>
              
              <div className="relative z-10 space-y-8">
                <p 
                  className="text-2xl md:text-3xl font-light leading-relaxed text-[#E8E0D0] italic group-hover:text-white transition-colors duration-500"
                  style={{ fontFamily: '"Times New Roman", serif' }}
                >
                  {testimonial.quote}
                </p>
                
                <div className="space-y-1">
                  <h4 className="text-sm font-bold tracking-[0.3em] uppercase text-accent font-sans">
                    {testimonial.author}
                  </h4>
                  <p className="text-[10px] tracking-[0.2em] uppercase text-white/40 font-medium">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
