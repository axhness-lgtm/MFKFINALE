
import { Header } from '@/components/navigation/Header';
import { Footer } from '@/components/navigation/Footer';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const collections = [
  { id: 'collection-blazer-1', name: 'The Signature Double-Breasted', cat: 'Artisanal Blazers', desc: 'Our specialty blazer in Super 130s wool with hand-polished brass buttons.' },
  { id: 'collection-suit-1', name: 'The Mayfair Executive', cat: 'Custom-Tailored Suits', desc: 'A masterclass in silhouette, crafted from charcoal English wool.' },
  { id: 'collection-suit-2', name: 'The Sartorial Check', cat: 'Custom-Tailored Suits', desc: 'Elegant windowpane patterns for the modern gentleman.' },
  { id: 'collection-blazer-2', name: 'The Amalfi Linen', cat: 'Artisanal Blazers', desc: 'Hand-crafted linen-silk blend for effortless seasonal elegance.' },
  { id: 'collection-sherwani-1', name: 'The Imperial Sherwani', cat: 'Ceremonial', desc: 'Intricate tonal embroidery on ivory silk, defining royal presence.' },
  { id: 'collection-tuxedo-1', name: 'Midnight Gala Tuxedo', cat: 'Formal Wear', desc: 'Barathea wool with grosgrain silk lapels for the ultimate evening statement.' },
];

export default function CollectionsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="space-y-6 mb-16 text-center">
            <span className="gold-text font-bold tracking-[0.4em] uppercase text-[10px]">The Showcase</span>
            <h1 className="text-5xl md:text-7xl font-headline font-light">The <span className="gold-text italic">Collections</span></h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">Focusing on our specialty: hand-crafted blazers and custom-tailored suits that define the MFKhan silhouette.</p>
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
                    <h3 className="text-2xl font-headline font-normal tracking-wide">{item.name}</h3>
                    <p className="text-muted-foreground font-light leading-relaxed">{item.desc}</p>
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
