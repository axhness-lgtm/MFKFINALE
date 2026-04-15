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
          <Link href="#home-collections" className="group flex items-center gap-3 text-white/40 font-bold hover:text-accent transition-colors uppercase tracking-[0.3em] text-[10px]">
            Explore All <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-8 max-w-7xl mx-auto">
          {/* WEDDING */}
          <Link
            href="/wedding"
            className="group relative block aspect-[3/4.5] md:aspect-[4/5] transition-transform duration-700 ease-out bg-[#0a0a09]"
          >
            <div className="absolute inset-0 rounded-t-[100px] md:rounded-t-[200px] overflow-hidden border border-white/5">
              <Image
                src="/images/collections-wedding.jpg"
                alt="Wedding"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 md:group-hover:bg-black/20 transition-colors duration-700" />
              <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-[#0a0a09] via-transparent to-transparent" />

              <div className="absolute inset-0 p-4 md:p-8 flex flex-col justify-end items-center text-center">
                <span className="text-accent text-[8px] md:text-[10px] uppercase tracking-[0.4em] mb-2 md:mb-4 opacity-0 md:group-hover:opacity-100 transition-opacity duration-700 font-bold">Sherwanis</span>
                <h3 className="text-lg md:text-4xl font-serif text-[#E8E0D0] mb-2 md:mb-4 transition-transform duration-700 group-hover:-translate-y-2">
                  Wedding
                </h3>
                <p className="hidden md:block text-[10px] text-white/50 uppercase tracking-[0.3em] font-medium border-t border-accent/30 pt-4 px-6 scale-x-0 group-hover:scale-x-100 transition-transform duration-700">
                  See the Gallery
                </p>
              </div>
            </div>
          </Link>

          {/* CUSTOM TAILORING */}
          <Link
            href="/custom-tailoring"
            className="group relative block aspect-[3/4.5] md:aspect-[4/5] transition-transform duration-700 ease-out bg-[#0a0a09]"
          >
            <div className="absolute inset-0 rounded-t-[100px] md:rounded-t-[200px] overflow-hidden border border-white/5">
              <Image
                src="/images/collections-custom-tailoring.jpg"
                alt="Custom Tailoring"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 md:group-hover:bg-black/20 transition-colors duration-700" />
              <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-[#0a0a09] via-transparent to-transparent" />

              <div className="absolute inset-0 p-4 md:p-8 flex flex-col justify-end items-center text-center">
                <span className="text-accent text-[8px] md:text-[10px] uppercase tracking-[0.4em] mb-2 md:mb-4 opacity-0 md:group-hover:opacity-100 transition-opacity duration-700 font-bold">Precision fit</span>
                <h3 className="text-lg md:text-4xl font-serif text-[#E8E0D0] mb-2 md:mb-4 transition-transform duration-700 group-hover:-translate-y-2">
                  Tailoring
                </h3>
                <p className="hidden md:block text-[10px] text-white/50 uppercase tracking-[0.3em] font-medium border-t border-accent/30 pt-4 px-6 scale-x-0 group-hover:scale-x-100 transition-transform duration-700">
                  Explore Suits
                </p>
              </div>
            </div>
          </Link>

          {/* FORMALS */}
          <Link
            href="/formals"
            className="group relative block aspect-[3/4.5] md:aspect-[4/5] transition-transform duration-700 ease-out bg-[#0a0a09] col-span-2 md:col-span-1"
          >
            <div className="absolute inset-0 rounded-t-[100px] md:rounded-t-[200px] overflow-hidden border border-white/5">
              <Image
                src="/images/collections-formals.jpg"
                alt="Formals"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 md:group-hover:bg-black/20 transition-colors duration-700" />
              <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-[#0a0a09] via-transparent to-transparent" />

              <div className="absolute inset-0 p-4 md:p-8 flex flex-col justify-end items-center text-center">
                <span className="text-accent text-[8px] md:text-[10px] uppercase tracking-[0.4em] mb-2 md:mb-4 opacity-0 md:group-hover:opacity-100 transition-opacity duration-700 font-bold">Evening</span>
                <h3 className="text-lg md:text-4xl font-serif text-[#E8E0D0] mb-2 md:mb-4 transition-transform duration-700 group-hover:-translate-y-2">
                  Formals
                </h3>
                <p className="hidden md:block text-[10px] text-white/50 uppercase tracking-[0.3em] font-medium border-t border-accent/30 pt-4 px-6 scale-x-0 group-hover:scale-x-100 transition-transform duration-700">
                  View Collection
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
