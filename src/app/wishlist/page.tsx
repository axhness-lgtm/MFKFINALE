"use client";
import { useWishlist } from '@/context/WishlistContext';
import { WishlistButton } from '@/components/ui/WishlistButton';
import Image from 'next/image';
import Link from 'next/link';

export default function WishlistPage() {
  const { items } = useWishlist();

  return (
    <div className="min-h-screen bg-[#0a0a09] font-body flex flex-col pt-44 md:pt-60">
      <main className="flex-grow pb-24 px-6 md:px-12 max-w-7xl mx-auto w-full">
        <h1 className="text-4xl md:text-5xl font-serif font-light mb-4 text-center text-white uppercase tracking-widest">YOUR WISHLIST</h1>
        <p className="text-center text-[#E8E0D0]/60 mb-20 tracking-widest text-xs uppercase">Curated pieces for your luxury collection</p>

        {items.length === 0 ? (
          <div className="text-center py-32 border border-white/5 bg-white/[0.01]">
            <p className="text-[#E8E0D0]/50 mb-8 font-light">Your wishlist is currently empty.</p>
            <Link href="/#home-collections" className="text-accent hover:text-white uppercase tracking-widest text-xs border-b border-accent/30 pb-1 transition-colors">
              Explore Collections
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {items.map((item) => (
              <div key={item.id} className="group relative aspect-[3/4] overflow-hidden border border-white/10 bg-black/40 block">
                <Image src={item.image} alt={item.title} fill className="object-cover transition-transform duration-[1500ms] group-hover:scale-105 opacity-80 group-hover:opacity-100" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                <WishlistButton item={item} />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-accent mb-1 block opacity-0 group-hover:opacity-100 transition-opacity duration-700">{item.category}</span>
                  <h3 className="text-xl font-serif text-[#E8E0D0] truncate group-hover:-translate-y-1 transition-transform duration-700">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
