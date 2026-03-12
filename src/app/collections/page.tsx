
import { Header } from '@/components/navigation/Header';
import { Footer } from '@/components/navigation/Footer';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const collections = [
  { id: 'collection-suit-1', name: 'The Savile Row Selection', cat: 'Suits', desc: 'Crafted from Super 150s wool.' },
  { id: 'collection-blazer-1', name: 'The Amalfi Coast Blazer', cat: 'Blazers', desc: 'Linen-silk blend for casual elegance.' },
  { id: 'collection-sherwani-1', name: 'The Imperial Sherwani', cat: 'Wedding', desc: 'Zardosi embroidery with silk velvet.' },
  { id: 'collection-tuxedo-1', name: 'Midnight Opera Tuxedo', cat: 'Formal', desc: 'Barathea wool with grosgrain silk.' },
  { id: 'collection-suit-2', name: 'The Mayfair Check', cat: 'Suits', desc: 'Subtle windowpane check for business.' },
  { id: 'collection-blazer-2', name: 'Double-Breasted Admiral', cat: 'Blazers', desc: 'Classic navy with polished brass buttons.' },
];

export default function CollectionsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="space-y-6 mb-16 text-center">
            <h1 className="text-5xl md:text-7xl font-headline font-bold">The <span className="gold-text">Collections</span></h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">A visual showcase of our master craftsmanship and sartorial philosophy.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {collections.map((item, idx) => {
              const img = PlaceHolderImages.find(i => i.id === item.id) || PlaceHolderImages[idx % PlaceHolderImages.length];
              return (
                <div key={idx} className="group space-y-6">
                  <div className="relative aspect-[4/5] overflow-hidden luxury-card">
                    <Image
                      src={img.imageUrl}
                      alt={item.name}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-105"
                      data-ai-hint={img.imageHint}
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs uppercase tracking-[0.2em] text-accent font-bold">{item.cat}</span>
                    </div>
                    <h3 className="text-2xl font-headline font-semibold">{item.name}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
