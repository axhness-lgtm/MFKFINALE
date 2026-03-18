import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const categories = [
  { id: 'collection-suit-1', name: 'Wedding Suits', desc: 'English & Italian wools.' },
  { id: 'collection-sherwani-1', name: 'Sherwanis', desc: 'Heritage embroidery.' },
  { id: 'collection-tuxedo-1', name: 'Tuxedos', desc: 'Evening brilliance.' },
  { id: 'collection-blazer-1', name: 'Designer Blazers', desc: 'Effortless luxury.' },
];

export function CollectionsPreview() {
  return (
    <section className="py-32 px-6 md:px-12 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-24 gap-6">
          <div className="space-y-4">
            <span className="gold-text font-bold tracking-[0.4em] uppercase text-[10px]">Selections</span>
            <h2 className="text-3xl md:text-5xl font-headline font-light">The Collections</h2>
          </div>
          <Link href="/collections" className="group flex items-center gap-3 text-foreground/40 font-bold hover:text-accent transition-colors uppercase tracking-[0.3em] text-[10px]">
            Explore All <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {categories.map((cat) => {
            const img = PlaceHolderImages.find(i => i.id === cat.id);
            return (
              <Link 
                key={cat.id} 
                href={`/collections?category=${cat.id}`}
                className="group block space-y-8"
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-muted/20">
                  <Image
                    src={img?.imageUrl || `https://picsum.photos/seed/${cat.id}/800/1000`}
                    alt={cat.name}
                    fill
                    className="object-cover transition-all duration-1000 grayscale group-hover:grayscale-0 group-hover:scale-105"
                    data-ai-hint={img?.imageHint || "luxury garment"}
                  />
                </div>
                <div className="space-y-2 text-center">
                   <h3 className="text-lg font-headline font-normal tracking-wide">{cat.name}</h3>
                   <p className="text-[10px] text-muted-foreground uppercase tracking-[0.2em] font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      View Piece
                   </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
