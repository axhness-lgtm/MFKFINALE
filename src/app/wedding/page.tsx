
import { FadeIn } from '@/components/animations/FadeIn';
import Link from 'next/link';
import Image from 'next/image';

export default function WeddingPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 bg-[#0a0a09]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <FadeIn className="text-center space-y-6 mb-24">
          <h1 className="text-5xl md:text-7xl font-serif font-light text-[#E8E0D0]">Wedding Wear, Designed for the Moment</h1>
          <p className="text-xl text-white/70 tracking-wide font-light max-w-2xl mx-auto" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>Tailored garments for weddings, receptions, and ceremonies.</p>
        </FadeIn>

        <FadeIn delay={200} className="max-w-3xl mx-auto text-center space-y-8 mb-32">
          <p className="text-lg leading-relaxed text-white/80 font-light" style={{ fontFamily: '"Times New Roman", serif' }}>
            A wedding demands more than just a suit; it requires a statement of legacy. Whether orchestrating an opulent traditional ceremony or a modern reception, we begin with understanding your vision. Experience our dedicated showroom gallery to try on finished masterpieces, or opt for a complete bespoke creation refined by our master tailors.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
          {[
            { title: 'Designer Suits', href: '/wedding/designer-suits', desc: 'Modern wedding suits', image: 'https://images.unsplash.com/photo-1593032465175-481ac7f401a0?auto=format&fit=crop&q=80&w=600' },
            { title: 'Indo-Western', href: '/wedding/indo-western', desc: 'Fusion garments', image: 'https://images.unsplash.com/photo-1582236166419-4820dc71f844?auto=format&fit=crop&q=80&w=600' },
            { title: 'Sherwani', href: '/wedding/sherwani', desc: 'Traditional wedding wear', image: '/images/groom-dark.png' },
            { title: 'Designer Shirts', href: '/wedding/designer-shirts', desc: 'Supporting pieces', image: 'https://images.unsplash.com/photo-1620012253295-c15bc3e65e4e?auto=format&fit=crop&q=80&w=600' }
          ].map((c, i) => (
            <FadeIn key={c.title} delay={i * 100}>
              <Link href={c.href} className="group block aspect-square relative border border-white/10 hover:border-accent/50 p-8 flex flex-col justify-end transition-all duration-700 bg-black/40 overflow-hidden">
                 <Image src={c.image} alt={c.title} fill className="object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700 group-hover:scale-110" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent z-0" />
                 <div className="relative z-10">
                   <h3 className="text-2xl font-serif text-[#E8E0D0] group-hover:-translate-y-2 transition-transform duration-500">{c.title}</h3>
                   <p className="text-xs uppercase tracking-[0.2em] text-accent mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">{c.desc}</p>
                 </div>
              </Link>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="text-center">
          <Link href="/contact" className="hero-btn-secondary">Book Wedding Consultation</Link>
        </FadeIn>
      </div>
    </div>
  );
}
