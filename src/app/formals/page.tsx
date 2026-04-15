
import { FadeIn } from '@/components/animations/FadeIn';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from "@/lib/utils";

export default function FormalsPage() {
  return (
    <div className="min-h-screen pt-56 md:pt-64 pb-24 bg-[#0a0a09]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <FadeIn className="text-center space-y-6 mb-24">
          <h1 className="text-5xl md:text-7xl font-serif font-light text-[#E8E0D0]">Formal Wear, Tailored for Precision</h1>
          <p className="text-xl text-white/70 tracking-wide font-light max-w-2xl mx-auto" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>Structured garments for professionals leading the room.</p>
        </FadeIn>

        <FadeIn className="grid grid-cols-2 lg:flex lg:flex-row w-full gap-2 md:gap-4 mb-32 h-auto lg:h-[70vh]">
          {[
            { title: 'Business Suits', href: '/formals/business-suits', desc: 'The authoritative uniform', image: '/images/formals-suit.jpg' },
            { title: 'Blazers', href: '/formals/blazers', desc: 'Versatile structured elegance', image: '/images/formals-blazer.jpg' },
            { title: 'Shirts', href: '/formals/shirts', desc: 'The foundational standard', image: '/images/formals-shirt.jpg' }
          ].map((c, i) => (
              <Link key={c.title} href={c.href} className={cn(
                "group relative border border-white/5 hover:border-accent/50 p-4 md:p-8 flex flex-col justify-end transition-all duration-[3000ms] ease-in-out bg-black/40 overflow-hidden aspect-[3/4.5] lg:aspect-auto lg:flex-1 lg:hover:flex-[2]",
                i === 2 ? "col-span-2 lg:col-span-1 aspect-[2/1] lg:aspect-auto" : ""
              )}>
                 <Image src={c.image} alt={c.title} fill className="object-cover opacity-60 group-hover:opacity-80 transition-all duration-[3000ms] ease-in-out group-hover:scale-105" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent z-0" />
                 <div className="relative z-10 w-full overflow-hidden flex flex-col justify-end h-full">
                   <div className="mt-auto">
                     <h3 className="text-xl md:text-3xl font-serif text-[#E8E0D0] group-hover:-translate-y-2 transition-transform duration-[3000ms] ease-in-out whitespace-nowrap min-w-max uppercase tracking-wide">{c.title}</h3>
                     <p className="text-[8px] md:text-xs uppercase tracking-[0.2em] text-accent mt-2 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-[1500ms] delay-300 mb-2 lg:mb-4">{c.desc}</p>
                     <span className="hidden lg:inline-block text-[10px] uppercase tracking-[0.3em] text-black bg-accent px-4 py-2 opacity-0 group-hover:opacity-100 transition-all duration-[1500ms] delay-500 hover:bg-white">
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
          <Link href="/contact" className="hero-btn-secondary">Schedule Consultation</Link>
        </FadeIn>
      </div>
    </div>
  );
}
