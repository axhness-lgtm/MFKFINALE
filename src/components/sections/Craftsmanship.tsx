import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Craftsmanship() {
  const craftImg = PlaceHolderImages.find(i => i.id === 'about-craft');

  return (
    <section className="py-40 px-6 md:px-12 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="relative aspect-[4/5] overflow-hidden grayscale group">
            <Image
              src={craftImg?.imageUrl || "https://picsum.photos/seed/mfk-craft-min/1200/800"}
              alt="Art of Tailoring"
              fill
              className="object-cover transition-all duration-[2s] group-hover:scale-105"
              data-ai-hint="tailoring details"
            />
          </div>

          <div className="space-y-12">
            <div className="space-y-6">
              <span className="gold-text font-bold tracking-[0.5em] uppercase text-[10px]">The Atelier</span>
              <h2 className="text-4xl md:text-6xl font-headline font-light leading-tight">Mastery in <br /><span className="font-citadel italic text-5xl md:text-7xl">Every Stitch</span></h2>
            </div>
            
            <p className="text-base text-muted-foreground leading-relaxed font-light tracking-wide max-w-xl">
              At MFKhan International, craftsmanship is a sacred duty. Each garment undergoes hundreds of hours of manual labor, utilizing traditional methods that remain unchanged.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10 border-t border-border/20 pt-12">
              <div className="space-y-2">
                <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] gold-text">Hand-Cut</h4>
                <p className="text-xs text-muted-foreground leading-relaxed font-light">Drafted specifically for your posture and movement from a blank sheet.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] gold-text">Floating Canvas</h4>
                <p className="text-xs text-muted-foreground leading-relaxed font-light">Horsehair canvas hand-padded to allow the coat to mold to your body.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] gold-text">Artisan Details</h4>
                <p className="text-xs text-muted-foreground leading-relaxed font-light">Hand-sewn buttonholes and silk-lined pockets for the true connoisseur.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] gold-text">Exclusive Mills</h4>
                <p className="text-xs text-muted-foreground leading-relaxed font-light">Partnering with prestigious mills for exceptional raw materials.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
