
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Craftsmanship() {
  const craftImg = PlaceHolderImages.find(i => i.id === 'about-craft');

  return (
    <section className="py-32 px-6 md:px-12 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative aspect-[4/5] luxury-card overflow-hidden rounded-none group">
            <Image
              src={craftImg?.imageUrl || "https://picsum.photos/seed/mfk-craft/1200/800"}
              alt="Art of Tailoring"
              fill
              className="object-cover transition-transform duration-[3s] group-hover:scale-110"
              data-ai-hint="tailoring details"
            />
            <div className="absolute inset-0 border-[20px] border-background/20 m-6 pointer-events-none"></div>
          </div>

          <div className="space-y-10">
            <div className="space-y-4">
              <span className="gold-text font-bold tracking-[0.4em] uppercase text-sm">A Legacy of Detail</span>
              <h2 className="text-5xl md:text-7xl font-headline font-bold leading-tight">Mastery in <br /><span className="italic">Every Stitch</span></h2>
            </div>
            
            <p className="text-xl text-muted-foreground leading-relaxed font-body">
              At MFKhan International, craftsmanship is not a buzzword—it is our sacred duty. Each garment undergoes hundreds of hours of manual labor, utilizing traditional methods that have remained unchanged for centuries.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
              <div className="space-y-3">
                <h4 className="font-headline text-2xl gold-text">Hand-Cut Patterns</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">We never use block patterns. Your garment begins as a blank sheet of paper, drafted specifically for your posture and movement.</p>
              </div>
              <div className="space-y-3">
                <h4 className="font-headline text-2xl gold-text">Floating Canvas</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">A full horsehair canvas is hand-padded to the front of the coat, allowing it to mold to your body over time for a superior fit.</p>
              </div>
              <div className="space-y-3">
                <h4 className="font-headline text-2xl gold-text">Artisan Detailing</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">From hand-sewn buttonholes to silk-lined pockets, we obsess over the details that only a true connoisseur would appreciate.</p>
              </div>
              <div className="space-y-3">
                <h4 className="font-headline text-2xl gold-text">Sourcing Excellence</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">We partner exclusively with the world's most prestigious mills, ensuring our raw materials are as exceptional as our tailoring.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
