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
    <section className="py-40 px-6 md:px-12 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <FadeIn className="text-center space-y-4 mb-24">
          <span className="gold-text font-bold tracking-[0.4em] uppercase text-[10px]">Voices of Excellence</span>
          <h2 className="text-3xl md:text-5xl font-headline font-light">Client Narratives</h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 lg:gap-16">
          {testimonials.map((t, idx) => (
            <FadeIn key={idx} delay={idx * 200} className="space-y-10 relative">
              <div className="absolute -top-6 -left-4 text-accent/10 text-8xl font-headline select-none">"</div>
              <p className="text-xl font-headline font-light leading-relaxed italic text-foreground/80 relative z-10">
                {t.quote}
              </p>
              <div className="space-y-1 pt-6 border-t border-border/10">
                <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-foreground">{t.author}</h4>
                <p className="text-[9px] uppercase tracking-[0.2em] text-muted-foreground font-medium">{t.role}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
