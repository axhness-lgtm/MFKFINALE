
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
          alt="Bespoke Tailoring Hero"
          fill
          priority
          className="object-cover transition-transform duration-[10s] hover:scale-105"
          data-ai-hint="luxury tailoring"
        />
        <div className="absolute inset-0 bg-background/70 backdrop-blur-[1px]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center space-y-10">
        <div className="space-y-6 animate-fade-in">
          <span className="uppercase tracking-[0.5em] text-accent font-bold text-xs md:text-sm">Exquisite Sartorial Excellence</span>
          <h1 className="text-5xl md:text-8xl font-headline font-bold leading-tight">
            Bespoke Tailoring. <br />
            Wedding Elegance. <br />
            <span className="gold-text font-citadel lowercase">Crafted to Perfection.</span>
          </h1>
          <p className="text-lg md:text-2xl text-muted-foreground font-body max-w-3xl mx-auto leading-relaxed">
            Welcome to MFKhan International, a premium bespoke tailoring house dedicated to the art of individual style and timeless elegance.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <Button asChild size="lg" className="violet-gradient h-16 px-12 text-xl rounded-none hover:opacity-90 transition-all duration-300 shadow-xl">
            <Link href="/contact">Book a Consultation</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="h-16 px-12 text-xl rounded-none border-accent/40 text-accent hover:bg-accent/10 transition-all duration-300 backdrop-blur-sm">
            <Link href="/collections">View Collections</Link>
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
        <div className="w-px h-16 bg-gradient-to-b from-accent to-transparent"></div>
      </div>
    </section>
  );
}
