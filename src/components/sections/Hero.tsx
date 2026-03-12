
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-bg');

  return (
    <section className="relative h-[100vh] w-full flex items-center justify-center overflow-hidden">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImage?.imageUrl || "https://picsum.photos/seed/mfk-hero/1920/1080"}
          alt="Hero Luxury Background"
          fill
          priority
          className="object-cover transition-transform duration-[10s] hover:scale-105"
          data-ai-hint="luxury tailoring"
        />
        <div className="absolute inset-0 bg-background/60 backdrop-blur-[2px]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center space-y-8">
        <div className="space-y-4 animate-fade-in">
          <span className="uppercase tracking-[0.4em] text-accent font-medium text-xs md:text-sm">Exquisite Craftsmanship</span>
          <h1 className="text-5xl md:text-8xl font-headline font-bold leading-tight">
            The Art of <br />
            <span className="gold-text italic">Bespoke</span> Elegance
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground font-body max-w-2xl mx-auto leading-relaxed">
            Crafting the world's finest suits, sherwanis, and tuxedos, tailored specifically to your unique silhouette and style.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <Button asChild size="lg" className="violet-gradient h-14 px-10 text-lg rounded-none hover:opacity-90 transition-all duration-300">
            <Link href="/collections">View Collections</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="h-14 px-10 text-lg rounded-none border-accent/40 text-accent hover:bg-accent/10 transition-all duration-300">
            <Link href="/contact">Book a Fitting</Link>
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
        <div className="w-px h-12 bg-gradient-to-b from-accent to-transparent"></div>
      </div>
    </section>
  );
}
