import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';


export function CollectionsPreview() {
  return (
    <section id="home-collections" className="pt-8 pb-16 px-6 md:px-12 bg-[#0a0a09]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-6 gap-6">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-serif font-light text-[#E8E0D0]">The Collections</h2>
          </div>
          <Link href="/wedding" className="group flex items-center gap-3 text-white/40 font-bold hover:text-accent transition-colors uppercase tracking-[0.3em] text-[10px]">
            Explore All <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 max-w-7xl mx-auto">
          {/* DESIGNER SUITS */}
          <Link
            href="/wedding/designer-suits"
            className="group relative block aspect-[3/4.5] md:aspect-[4/5] transition-transform duration-700 ease-out bg-[#0a0a09]"
          >
            <div className="absolute inset-0 rounded-t-[100px] overflow-hidden border border-accent/40 shadow-[0_0_15px_rgba(196,172,94,0.1)] group-hover:border-accent transition-colors duration-500">
              <Image
                src="/images/collections-wedding.jpg"
                alt="Designer Suits"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 md:group-hover:bg-black/20 transition-colors duration-700" />
              <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-[#0a0a09] via-transparent to-transparent" />

              <div className="absolute inset-0 p-4 md:p-6 flex flex-col justify-end items-center text-center">
                <span className="text-accent text-[8px] md:text-[10px] uppercase tracking-[0.4em] mb-2 opacity-0 md:group-hover:opacity-100 transition-opacity duration-700 font-bold">Premium</span>
                <h3 className="text-lg md:text-2xl font-serif text-[#E8E0D0] mb-2 transition-transform duration-700 group-hover:-translate-y-2">
                  Designer Suits
                </h3>
              </div>
            </div>
          </Link>

          {/* SHERWANI */}
          <Link
            href="/wedding/sherwani"
            className="group relative block aspect-[3/4.5] md:aspect-[4/5] transition-transform duration-700 ease-out bg-[#0a0a09]"
          >
            <div className="absolute inset-0 rounded-t-[100px] overflow-hidden border border-accent/40 shadow-[0_0_15px_rgba(196,172,94,0.1)] group-hover:border-accent transition-colors duration-500">
              <Image
                src="/images/sherwani.jpg"
                alt="Sherwani"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 md:group-hover:bg-black/20 transition-colors duration-700" />
              <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-[#0a0a09] via-transparent to-transparent" />

              <div className="absolute inset-0 p-4 md:p-6 flex flex-col justify-end items-center text-center">
                <span className="text-accent text-[8px] md:text-[10px] uppercase tracking-[0.4em] mb-2 opacity-0 md:group-hover:opacity-100 transition-opacity duration-700 font-bold">Traditional</span>
                <h3 className="text-lg md:text-2xl font-serif text-[#E8E0D0] mb-2 transition-transform duration-700 group-hover:-translate-y-2">
                  Sherwani
                </h3>
              </div>
            </div>
          </Link>

          {/* INDO WESTERN */}
          <Link
            href="/wedding/indo-western"
            className="group relative block aspect-[3/4.5] md:aspect-[4/5] transition-transform duration-700 ease-out bg-[#0a0a09]"
          >
            <div className="absolute inset-0 rounded-t-[100px] overflow-hidden border border-accent/40 shadow-[0_0_15px_rgba(196,172,94,0.1)] group-hover:border-accent transition-colors duration-500">
              <Image
                src="/images/indo-western.jpg"
                alt="Indo Western"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 md:group-hover:bg-black/20 transition-colors duration-700" />
              <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-[#0a0a09] via-transparent to-transparent" />

              <div className="absolute inset-0 p-4 md:p-6 flex flex-col justify-end items-center text-center">
                <span className="text-accent text-[8px] md:text-[10px] uppercase tracking-[0.4em] mb-2 opacity-0 md:group-hover:opacity-100 transition-opacity duration-700 font-bold">Fusion</span>
                <h3 className="text-lg md:text-2xl font-serif text-[#E8E0D0] mb-2 transition-transform duration-700 group-hover:-translate-y-2">
                  Indo Western
                </h3>
              </div>
            </div>
          </Link>

          {/* CUSTOM TAILORING */}
          <Link
            href="/custom-tailoring"
            className="group relative block aspect-[3/4.5] md:aspect-[4/5] transition-transform duration-700 ease-out bg-[#0a0a09]"
          >
            <div className="absolute inset-0 rounded-t-[100px] overflow-hidden border border-accent/40 shadow-[0_0_15px_rgba(196,172,94,0.1)] group-hover:border-accent transition-colors duration-500">
              <Image
                src="/images/collections-custom-tailoring.jpg"
                alt="Custom Tailoring"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 md:group-hover:bg-black/20 transition-colors duration-700" />
              <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-[#0a0a09] via-transparent to-transparent" />

              <div className="absolute inset-0 p-4 md:p-6 flex flex-col justify-end items-center text-center">
                <span className="text-accent text-[8px] md:text-[10px] uppercase tracking-[0.4em] mb-2 opacity-0 md:group-hover:opacity-100 transition-opacity duration-700 font-bold">Precision Fit</span>
                <h3 className="text-lg md:text-2xl font-serif text-[#E8E0D0] mb-2 transition-transform duration-700 group-hover:-translate-y-2">
                  Custom Tailoring
                </h3>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
