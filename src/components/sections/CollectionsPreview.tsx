import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const categories = [
  { id: 'collection-blazer-1', name: 'Artisanal Blazers', desc: 'Our sartorial signature.', imgUrl: '/blue-blazer.jpeg' },
  { id: 'collection-suit-1', name: 'Custom-Tailored Suits', desc: 'Precision in silhouette.', imgUrl: '/red-suit.jpeg' },
  { id: 'collection-sherwani-1', name: 'Royal Sherwanis', desc: 'Heritage craftsmanship.', imgUrl: '/festive-sherwani.jpeg' },
  { id: 'collection-tuxedo-1', name: 'Evening Formal', desc: 'Timeless elegance.', imgUrl: '/gray-casuals.jpeg' },
];

export function CollectionsPreview() {
  return (
    <section className="pt-12 pb-32 px-6 md:px-12 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-6 gap-6">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-headline font-light">The Collections</h2>
          </div>
          <Link href="/collections" className="group flex items-center gap-3 text-foreground/40 font-bold hover:text-accent transition-colors uppercase tracking-[0.3em] text-[10px]">
            Explore All <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
          {categories.map((cat) => {
            return (
              <Link
                key={cat.id}
                href={`/collections`}
                className="group relative block aspect-[4/5] md:aspect-[1/2] transition-transform duration-700 ease-out hover:scale-105 hover:z-10 bg-background"
              >
                {/* The Arched 'Window' */}
                <div className="absolute inset-1 md:inset-2 rounded-t-[140px] overflow-hidden border border-white/5">
                  <Image
                    src={cat.imgUrl}
                    alt={cat.name}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />

                  {/* Subtle vignette and bottom gradient */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700" />
                  <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                  {/* Text Overlay pinned inside the card */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end items-center text-center">
                    <h3 className="text-xl md:text-2xl font-headline text-[#E8E0D0] mb-3 transition-transform duration-500 group-hover:-translate-y-2">
                      {cat.name}
                    </h3>
                    <div className="overflow-hidden">
                      <p className="text-[10px] text-accent uppercase tracking-[0.2em] font-bold opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                        View Pieces
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}