
import { FadeIn } from '@/components/animations/FadeIn';
import Link from 'next/link';
import Image from 'next/image';

export default function WeddingPage() {
  return (
    <div className="min-h-screen pt-48 pb-24 bg-[#0a0a09]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <FadeIn className="text-center space-y-6 mb-24">
          <h1 className="text-5xl md:text-7xl font-serif font-italic text-[#E8E0D0]">Discover your <span className="text-accent">Dream Wedding</span> Collection</h1>
          <p className="text-xl text-white/70 tracking-wide font-light max-w-2xl mx-auto" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>Articles designed for Weddings, Receptions & Ceremonies.</p>
        </FadeIn>


        <FadeIn className="flex flex-col lg:flex-row w-full gap-3 mb-32 h-[120vh] lg:h-[75vh]">
          {[
            { title: 'Designer Suits', href: '/wedding/designer-suits', desc: 'Modern wedding suits', image: '/images/fabric-linen.jpg' },
            { title: 'Indo-Western', href: '/wedding/indo-western', desc: 'Fusion garments', image: '/images/fabric-silk.jpg' },
            { title: 'Sherwani', href: '/wedding/sherwani', desc: 'Traditional wedding wear', image: '/images/fabric-velvet.jpg' },
            { title: 'Designer Shirts', href: '/wedding/designer-shirts', desc: 'Supporting pieces', image: '/images/wedding-designer-shirt.jpg' }
          ].map((c, i) => (
            <Link key={c.title} href={c.href} className="group flex-1 relative border border-white/10 hover:border-accent/50 p-6 md:p-8 flex flex-col justify-end transition-all duration-[3000ms] ease-in-out bg-black/40 overflow-hidden hover:flex-[2.5]">
              <Image src={c.image} alt={c.title} fill className="object-cover opacity-60 group-hover:opacity-80 transition-all duration-[3000ms] ease-in-out group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent z-0" />
              <div className="relative z-10 w-full overflow-hidden flex flex-col justify-end h-full">
                <div className="mt-auto">
                  <h3 className="text-2xl md:text-3xl font-serif text-[#E8E0D0] group-hover:-translate-y-2 transition-transform duration-[3000ms] ease-in-out whitespace-nowrap min-w-max">{c.title}</h3>
                  <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-accent mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-[1500ms] delay-300 mb-4">{c.desc}</p>
                  <span className="inline-block text-[10px] uppercase tracking-[0.3em] text-black bg-accent px-4 py-2 opacity-0 group-hover:opacity-100 transition-all duration-[1500ms] delay-500 hover:bg-white">
                    View Collection
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </FadeIn>

        <FadeIn className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center mb-32 border-y border-white/5 py-16">
          <div className="space-y-4">
            <span className="text-accent italic font-serif text-2xl">01. Measurement</span>
            <p className="text-white/60 text-sm tracking-wide">Over 30 precise metrics capturing your unique framework.</p>
          </div>
          <div className="space-y-4">
            <span className="text-accent italic font-serif text-2xl">02. Fitting</span>
            <p className="text-white/60 text-sm tracking-wide">Structured trials to ensure the drape communicates authority.</p>
          </div>
          <div className="space-y-4">
            <span className="text-accent italic font-serif text-2xl">03. Finishing</span>
            <p className="text-white/60 text-sm tracking-wide">Hand-stitched details resulting in immaculate presentation.</p>
          </div>
        </FadeIn>

        <FadeIn className="text-center">
          <Link href="/contact" className="hero-btn-secondary">Book Wedding Consultation</Link>
        </FadeIn>
      </div>
    </div>
  );
}
