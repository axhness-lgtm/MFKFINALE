"use client";

import { cn } from '@/lib/utils';
import { Star } from 'lucide-react';

interface Testimonial {
  quote: string;
  author: string;
  source: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    quote: "Absolutely outstanding experience! Got a bespoke suit stitched for a wedding, and the craftsmanship is top-class—perfect fit, premium fabric, and stunning design details. Worth every penny.",
    author: "Vamsi Sai",
    source: "Google Review",
    rating: 5
  },
  {
    quote: "Fantastic experience! I am absolutely in love with my wedding dress, it’s stunning. The fit of the suit we had stitched is incredibly precise and perfect. Highly recommend them for your big day!",
    author: "Kalyan Kona",
    source: "Google Review",
    rating: 5
  },
  {
    quote: "Got my red suit customized from MF Khan, and I'm obsessed with how perfect it turned out! The fit, the fabric and the overall finish - everything was top notch. Loved the experience ❤️",
    author: "Harshitha Nada",
    source: "Google Review",
    rating: 5
  },
  {
    quote: "Great for getting suits made just how you like them. Akbar did an awesome job on a double-breasted suit for me... they fixed everything to my liking without any fuss.",
    author: "Sampath Kumar",
    source: "Google Review",
    rating: 5
  }
];

export function Testimonials() {
  return (
    <section className="py-12 md:py-20 px-6 md:px-12 bg-[#0a0a09] border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 md:mb-16 text-center">
          <span className="gold-text uppercase tracking-[0.4em] text-[10px] block mb-2 font-body" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>Client Appreciations</span>
          <h2 className="text-3xl md:text-5xl font-serif font-light text-[#E8E0D0] italic" style={{ fontFamily: '"Playfair Display", serif' }}>Voices of Excellence</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-white/[0.02] border border-white/5 p-6 md:p-8 transition-all duration-500 hover:border-accent/20 group">
              <div className="flex justify-start gap-1 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-2.5 h-2.5 fill-accent text-accent" />
                ))}
              </div>

              <blockquote className="mb-6">
                <p className="text-[#E8E0D0]/90 text-sm md:text-base leading-relaxed font-light font-serif italic" style={{ fontFamily: '"Playfair Display", serif' }}>
                  "{t.quote}"
                </p>
              </blockquote>

              <div className="flex items-center justify-between pt-4 border-t border-white/5">
                <div>
                  <h4 className="text-[11px] font-bold tracking-[0.2em] uppercase text-white font-body" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
                    {t.author}
                  </h4>
                  <p className="text-[9px] tracking-[0.1em] uppercase text-white/30 font-medium font-body" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
                    {t.source}
                  </p>
                </div>
                {/* Google "G" Icon placeholder feel */}
                <div className="w-6 h-6 flex items-center justify-center rounded-full bg-white/5">
                  <svg viewBox="0 0 24 24" className="w-3 h-3 fill-white/20" xmlns="http://www.w3.org/2000/svg"><path d="M12.48 10.92v3.28h7.84c-.24 1.84-2.21 5.39-7.84 5.39-4.84 0-8.77-4.04-8.77-8.99s3.93-8.99 8.77-8.99c2.76 0 4.61 1.14 5.67 2.14l2.58-2.48c-1.66-1.55-4.25-2.66-8.25-2.66-6.63 0-12 5.37-12 12s5.37 12 12 12c6.91 0 11.52-4.86 11.52-11.72 0-.79-.08-1.4-.24-2.11H12.48z" /></svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://www.google.com/search?sca_esv=c9874bb074d0c29e&sxsrf=ANbL-n6zmbMmYSYqcfa4jCS2SnhETyZ2uA:1777023005117&si=AL3DRZHrmvnFAVQPOO2Bzhf8AX9KZZ6raUI_dT7DG_z0kV2_x_K4xYLX8sT1-mZSIdy57WkOTHsGgjcdDzhiTXbNHyAP5NVCu0K-WcS6TZd83VBaSw5eKGpKbnH3pk8z_8OaYaegEbaeXT5jlssM-TUOHyq1M6nA_w%3D%3D&q=MFKhan+International+Reviews&sa=X&ved=2ahUKEwi19ejHloaUAxUYqZUCHaqACB8Q0bkNegQIQxAH&biw=1280&bih=678&dpr=1.5"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] uppercase tracking-[0.3em] text-white/40 hover:text-accent transition-colors font-body border-b border-white/10 pb-1"
            style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}
          >
            Verify all reviews on Google
          </a>
        </div>
      </div>
    </section>
  );
}
