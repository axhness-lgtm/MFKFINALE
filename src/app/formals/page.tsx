
import { FadeIn } from '@/components/animations/FadeIn';
import Link from 'next/link';
import Image from 'next/image';

export default function FormalsPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 bg-[#0a0a09]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <FadeIn className="text-center space-y-6 mb-24">
          <h1 className="text-5xl md:text-7xl font-serif font-light text-[#E8E0D0]">Formal Wear, Tailored for Precision</h1>
          <p className="text-xl text-white/70 tracking-wide font-light max-w-2xl mx-auto" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>Structured garments for professionals leading the room.</p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-32">
          {[
            { title: 'Business Suits', href: '/formals/business-suits', desc: 'The authoritative uniform', image: 'https://images.unsplash.com/photo-1594938291221-94f18cbb5660?auto=format&fit=crop&q=80&w=600' },
            { title: 'Blazers', href: '/formals/blazers', desc: 'Versatile structured elegance', image: 'https://images.unsplash.com/photo-1592878904946-b3cd8ae24097?auto=format&fit=crop&q=80&w=600' },
            { title: 'Shirts', href: '/formals/shirts', desc: 'The foundational standard', image: 'https://images.unsplash.com/photo-1521341057461-6eb5f40b07ab?auto=format&fit=crop&q=80&w=600' }
          ].map((c, i) => (
            <FadeIn key={c.title} delay={i * 100}>
              <Link href={c.href} className="group block aspect-[3/4] relative border border-white/10 hover:border-accent/50 p-8 flex flex-col justify-end transition-all duration-700 bg-black/40 overflow-hidden">
                 <Image src={c.image} alt={c.title} fill className="object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700 group-hover:scale-110" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent z-0" />
                 <div className="relative z-10">
                   <h3 className="text-3xl font-serif text-[#E8E0D0] group-hover:-translate-y-2 transition-transform duration-500">{c.title}</h3>
                   <p className="text-xs uppercase tracking-[0.2em] text-accent mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">{c.desc}</p>
                 </div>
              </Link>
            </FadeIn>
          ))}
        </div>

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
          <Link href="/contact" className="hero-btn-secondary">Schedule Consultation</Link>
        </FadeIn>
      </div>
    </div>
  );
}
