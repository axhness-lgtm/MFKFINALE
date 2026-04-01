import { Header } from '@/components/navigation/Header';
import { Footer } from '@/components/navigation/Footer';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { FadeIn } from '@/components/animations/FadeIn';

export default function HeritagePage() {
  const craftImg = PlaceHolderImages.find(i => i.id === 'about-craft');

  return (
    <div className="min-h-screen flex flex-col bg-[#0a0a09]">
      <Header />
      
      {/* Hero Header for Heritage */}
      <main className="flex-grow pt-32 pb-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto space-y-24">
          <FadeIn className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center pt-24">
             <div className="space-y-12">
                <div className="flex flex-col items-start">
                  <div className="bg-accent/50 mb-6" style={{ width: '55px', height: '1px' }} />
                  <span 
                    className="gold-text italic"
                    style={{
                      fontFamily: '"Ballet", cursive',
                      fontSize: 'clamp(36px, 3vw, 50px)',
                      letterSpacing: '0.02em',
                      fontWeight: 400,
                    }}
                  >
                    A Legacy of Tailoring Since 1940
                  </span>
                </div>
                
                <h1 className="leading-tight" style={{ fontFamily: '"Playfair Display", serif' }}>
                  <span className="block text-4xl md:text-5xl text-[#E8E0D0] mb-2 font-light">Heritage</span>
                  <span className="block text-5xl md:text-7xl" style={{ fontFamily: 'Helvetica, Arial, sans-serif', fontWeight: 'bold', color: '#E8E0D0' }}>
                    Of Craft.
                  </span>
                </h1>
                
                <p className="text-xl leading-relaxed text-[#E8E0D0]/70 font-light max-w-lg" style={{ fontFamily: '"Playfair Display", serif' }}>
                  Founded in 1940, MFKhan International began with a simple mission: to preserve the dignity of the artisanal suit. In an era of disposable fashion, we chose the path of meticulous patience.
                </p>
                <div className="space-y-6 max-w-lg">
                  <p className="text-md leading-relaxed text-[#E8E0D0]/50" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
                    Every garment that leaves our atelier is a testament to the collective mastery of our artisans. We don't just measure dimensions; we capture the essence of movement, character, and legacy within every stitch.
                  </p>
                  <p className="text-md leading-relaxed text-[#E8E0D0]/50" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
                    From exquisite royal sherwanis steeped in eastern opulence to razor-sharp western blazers, our tailoring houses tradition while constantly redefining global precision.
                  </p>
                </div>
             </div>
             
             {/* Large Stately Image */}
             <div className="relative aspect-[3/4] md:aspect-[4/5] overflow-hidden rounded-t-[140px] md:rounded-t-[250px] border border-white/5 shadow-2xl">
                <div className="absolute inset-0 bg-background/20 z-10 mix-blend-overlay" />
                <Image 
                  src={craftImg?.imageUrl || "https://picsum.photos/seed/mfk-heritage/1200/1600"} 
                  alt="Tailoring craft"
                  fill
                  className="object-cover transition-transform duration-1000 hover:scale-105"
                />
             </div>
          </FadeIn>

          <FadeIn delay={200} className="grid grid-cols-1 md:grid-cols-3 gap-12 py-24 border-y border-white/5">
             <div className="text-center space-y-4">
               <h3 className="text-5xl md:text-6xl gold-text font-light" style={{ fontFamily: '"Playfair Display", serif' }}>80+</h3>
               <p className="uppercase tracking-[0.4em] text-[10px] font-bold text-white/50" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>Years of Heritage</p>
             </div>
             <div className="text-center space-y-4">
               <h3 className="text-5xl md:text-6xl gold-text font-light" style={{ fontFamily: '"Playfair Display", serif' }}>15k</h3>
               <p className="uppercase tracking-[0.4em] text-[10px] font-bold text-white/50" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>Hand-Crafted Pieces</p>
             </div>
             <div className="text-center space-y-4">
               <h3 className="text-5xl md:text-6xl gold-text font-light" style={{ fontFamily: '"Playfair Display", serif' }}>48</h3>
               <p className="uppercase tracking-[0.4em] text-[10px] font-bold text-white/50" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>Master Artisans</p>
             </div>
          </FadeIn>
        </div>
      </main>
      <Footer />
    </div>
  );
}
