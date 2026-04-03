import { FadeIn } from '../animations/FadeIn';

const testimonials = [
  {
    quote: "The attention to detail in the hand-stitched silk lining is something I haven't seen in decades. A true sanctuary for the discerning gentleman.",
    author: "Lord Julian H.",
    role: "Savile Row Connoisseur"
  },
  {
    quote: "MFKhan International doesn't just make suits; they create a second skin. The balance of the silhouette is mathematically perfect.",
    author: "Alexander V.",
    role: "Creative Director"
  },
  {
    quote: "For my wedding, I wanted a garment that felt like heritage. The Imperial Sherwani they crafted was a masterpiece of artisanal precision.",
    author: "Rohan S.",
    role: "Groom"
  }
];

export function Testimonials() {
  return (
    <section className="pt-16 pb-32 px-6 md:px-12 bg-[#0a0a09] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <FadeIn className="text-center space-y-4 mb-24">
          <span
            className="gold-text italic"
            style={{ fontFamily: '"Gwendolyn", cursive', fontSize: 'clamp(36px, 4vw, 55px)', fontWeight: 400 }}
          >
            Voices of Excellence
          </span>
          <h2 className="text-3xl md:text-5xl font-light text-white" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>Testimonials</h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 lg:gap-16">
          {testimonials.map((t, idx) => (
            <FadeIn key={idx} delay={idx * 200} className="space-y-10 relative">
              <div className="absolute -top-4 -left-3 text-accent text-6xl font-normal select-none" style={{ fontFamily: '"Gwendolyn", cursive' }}>"</div>
              <p className="text-xl font-light leading-relaxed italic text-white/80 relative z-10" style={{ fontFamily: 'Helvetica, Arial, sans-serif', fontWeight: 400 }}>
                {t.quote}
              </p>
              <div className="space-y-1 pt-6 border-t border-white/20">
                <h4 className="text-xs uppercase tracking-[0.2em] text-white" style={{ fontFamily: '"Playfair Display", serif', fontWeight: 400 }}>{t.author}</h4>
                <p className="text-xl gold-text italic" style={{ fontFamily: '"Gwendolyn", cursive', fontWeight: 400 }}>{t.role}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
