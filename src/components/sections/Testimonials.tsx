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
  const testimonial = testimonials[0];

  return (
    <section className="py-24 px-6 md:px-12 bg-black border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading consistent and centered */}
        <div className="mb-16 md:mb-24 text-center">
          <h2 className="text-3xl md:text-5xl font-serif font-light gold-text">Testimonials</h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative group text-center flex flex-col items-center">
            {/* Large Stylized Quote Mark */}
            <span 
              className="absolute -top-12 left-1/2 -translate-x-1/2 text-[120px] md:text-[180px] text-accent/5 pointer-events-none transition-all duration-700 group-hover:text-accent/10"
              style={{ fontFamily: '"Playfair Display", serif', fontWeight: 100 }}
            >
              &ldquo;
            </span>
            
            <div className="relative z-10 space-y-10 group mt-8">
              <p 
                className="text-2xl md:text-4xl font-light leading-relaxed text-[#E8E0D0] italic group-hover:text-white transition-colors duration-500 max-w-3xl mx-auto"
                style={{ fontFamily: '"Times New Roman", serif' }}
              >
                {testimonial.quote}
              </p>
              
              <div className="space-y-2">
                <div className="w-12 h-[1px] bg-accent/30 mx-auto mb-6 transition-all duration-500 group-hover:w-20" />
                <h4 className="text-sm font-bold tracking-[0.4em] uppercase text-accent font-sans">
                  {testimonial.author}
                </h4>
                <p className="text-[10px] tracking-[0.2em] uppercase text-white/30 font-medium">
                  {testimonial.role}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
