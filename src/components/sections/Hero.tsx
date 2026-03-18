
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-bg');

  return (
    <section className="relative h-[100vh] w-full flex items-center justify-center overflow-hidden bg-[#FAF9F6]">
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImage?.imageUrl || "https://picsum.photos/seed/mfk-hero-min/1920/1080"}
          alt="Minimal Custom Atelier"
          fill
          priority
          className="object-cover opacity-20 grayscale transition-opacity duration-1000"
          data-ai-hint="minimal luxury interior"
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center space-y-12">
        <div className="space-y-8 animate-fade-in">
          <span className="uppercase tracking-[0.6em] text-accent font-bold text-[10px] md:text-xs">Sartorial Excellence</span>
          <h1 className="text-4xl md:text-7xl font-headline font-light leading-tight text-foreground">
            Custom Tailoring. <br />
            Wedding Elegance. <br />
            <span className="gold-text font-citadel italic">Crafted to Perfection.</span>
          </h1>
          <p className="text-sm md:text-base text-muted-foreground font-body max-w-2xl mx-auto leading-relaxed tracking-wide font-light">
            MFKhan International is a premium made-to-measure tailoring house dedicated to the art of individual style and timeless elegance.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center pt-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <Button asChild size="lg" className="bg-primary text-primary-foreground h-14 px-12 text-xs uppercase tracking-[0.3em] rounded-none hover:bg-primary/90 transition-all duration-500 shadow-sm font-bold">
            <Link href="/contact">Book a Consultation</Link>
          </Button>
          <Button asChild variant="ghost" size="lg" className="h-14 px-12 text-xs uppercase tracking-[0.3em] rounded-none text-foreground/60 hover:text-accent transition-all duration-500 font-bold">
            <Link href="/collections">View Collections</Link>
          </Button>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-20">
        <div className="w-px h-20 bg-foreground/30"></div>
      </div>
    </section>
  );
}
