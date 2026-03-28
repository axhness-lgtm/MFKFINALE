import { Header } from '@/components/navigation/Header';
import { Footer } from '@/components/navigation/Footer';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { FadeIn } from '@/components/animations/FadeIn';

export default function HeritagePage() {
  const craftImg = PlaceHolderImages.find(i => i.id === 'about-craft');

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-32 pb-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto space-y-24">
          <FadeIn className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             <div className="space-y-8">
                <span className="gold-text uppercase tracking-widest font-bold text-[10px]">The Heritage</span>
                <h1 className="text-5xl md:text-7xl font-headline font-light leading-tight">Tradition <span className="italic font-citadel text-6xl md:text-8xl lowercase">meets</span> Precision</h1>
                <p className="text-xl text-muted-foreground leading-relaxed font-light">
                  Founded in 1995, MFKhan International began with a simple mission: to preserve the dignity of the artisanal suit. In an era of disposable fashion, we chose the path of meticulous patience.
                </p>
                <div className="space-y-4">
                  <p className="text-lg leading-relaxed font-light">
                    Every garment that leaves our atelier is a testament to the collective mastery of our artisans. We don't just measure dimensions; we capture the essence of movement and character.
                  </p>
                  <p className="text-lg leading-relaxed font-light">
                    Today, MFKhan International stands as a global sanctuary for hand-crafted excellence, serving individuals who appreciate the silent power of a perfectly realized silhouette.
                  </p>
                </div>
             </div>
             <div className="relative aspect-[4/5] luxury-card overflow-hidden">
                <Image 
                  src={craftImg?.imageUrl || "https://picsum.photos/seed/mfk-craft/1200/800"} 
                  alt="Tailoring craft"
                  fill
                  className="object-cover grayscale"
                />
             </div>
          </FadeIn>

          <FadeIn delay={200} className="grid grid-cols-1 md:grid-cols-3 gap-12 py-24 border-y border-border/10">
             <div className="text-center space-y-4">
               <h3 className="text-5xl font-headline gold-text font-light">25+</h3>
               <p className="uppercase tracking-[0.4em] text-[10px] font-bold text-muted-foreground">Years of Heritage</p>
             </div>
             <div className="text-center space-y-4">
               <h3 className="text-5xl font-headline gold-text font-light">15k</h3>
               <p className="uppercase tracking-[0.4em] text-[10px] font-bold text-muted-foreground">Hand-Crafted Pieces</p>
             </div>
             <div className="text-center space-y-4">
               <h3 className="text-5xl font-headline gold-text font-light">48</h3>
               <p className="uppercase tracking-[0.4em] text-[10px] font-bold text-muted-foreground">Master Artisans</p>
             </div>
          </FadeIn>
        </div>
      </main>
      <Footer />
    </div>
  );
}
