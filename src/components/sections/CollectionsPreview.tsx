
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const categories = [
  { id: 'collection-suit-1', name: 'Bespoke Suits', desc: 'Precision cut from English & Italian wools.' },
  { id: 'collection-sherwani-1', name: 'Sherwanis', desc: 'Heritage embroidery for the modern groom.' },
  { id: 'collection-tuxedo-1', name: 'Tuxedos', desc: 'Evening wear that demands attention.' },
  { id: 'collection-blazer-1', name: 'Designer Blazers', desc: 'Versatile luxury for the effortless gentleman.' },
];

export function CollectionsPreview() {
  return (
    <section className="py-24 px-6 md:px-12 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="space-y-4">
            <span className="gold-text font-medium tracking-widest uppercase text-sm">Curated Selection</span>
            <h2 className="text-4xl md:text-5xl font-headline font-bold">The MFK Collections</h2>
          </div>
          <Link href="/collections" className="group flex items-center gap-2 text-accent font-medium hover:text-accent/80 transition-colors uppercase tracking-widest text-sm">
            Discover All <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat, idx) => {
            const img = PlaceHolderImages.find(i => i.id === cat.id);
            return (
              <Link 
                key={cat.id} 
                href={`/collections?category=${cat.id}`}
                className="group luxury-card overflow-hidden block"
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={img?.imageUrl || `https://picsum.photos/seed/${cat.id}/800/1000`}
                    alt={cat.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    data-ai-hint={img?.imageHint || "luxury garment"}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                  <div className="absolute bottom-0 left-0 p-6 w-full">
                     <h3 className="text-xl font-headline font-semibold mb-1">{cat.name}</h3>
                     <p className="text-xs text-muted-foreground uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 duration-300">
                        View Collection
                     </p>
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
