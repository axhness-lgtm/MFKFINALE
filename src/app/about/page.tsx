
import { Header } from '@/components/navigation/Header';
import { Footer } from '@/components/navigation/Footer';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function AboutPage() {
  const craftImg = PlaceHolderImages.find(i => i.id === 'about-craft');

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-32 pb-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto space-y-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             <div className="space-y-8">
                <span className="gold-text uppercase tracking-widest font-bold">Our Heritage</span>
                <h1 className="text-5xl md:text-7xl font-headline font-bold leading-tight">Heritage <span className="italic">Meets</span> Innovation</h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Founded in 1995, MFK International began with a simple mission: to restore the dignity of the handmade suit. In an era of fast fashion, we chose the path of meticulous patience.
                </p>
                <div className="space-y-4">
                  <p className="text-lg leading-relaxed">
                    Every garment that leaves our atelier is a testament to the thousands of hours of collective experience possessed by our master tailors. We don't just measure bodies; we measure movements, postures, and personalities.
                  </p>
                  <p className="text-lg leading-relaxed">
                    Today, MFK International stands as a global beacon for bespoke excellence, serving heads of state, captains of industry, and individuals who appreciate the silent power of a perfectly fitted suit.
                  </p>
                </div>
             </div>
             <div className="relative aspect-[4/5] luxury-card overflow-hidden">
                <Image 
                  src={craftImg?.imageUrl || "https://picsum.photos/seed/mfk-craft/1200/800"} 
                  alt="Tailoring craft"
                  fill
                  className="object-cover"
                />
             </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 py-12 border-y border-border/50">
             <div className="text-center space-y-4">
               <h3 className="text-5xl font-headline gold-text font-bold">25+</h3>
               <p className="uppercase tracking-widest text-sm font-medium">Years of Excellence</p>
             </div>
             <div className="text-center space-y-4">
               <h3 className="text-5xl font-headline gold-text font-bold">15k</h3>
               <p className="uppercase tracking-widest text-sm font-medium">Bespoke Pieces Delivered</p>
             </div>
             <div className="text-center space-y-4">
               <h3 className="text-5xl font-headline gold-text font-bold">48</h3>
               <p className="uppercase tracking-widest text-sm font-medium">Master Artisans</p>
             </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
