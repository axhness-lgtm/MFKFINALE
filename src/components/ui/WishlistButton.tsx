"use client";
import { Heart } from 'lucide-react';
import { useWishlist, WishlistItem } from '@/context/WishlistContext';

export function WishlistButton({ item, className = "" }: { item: WishlistItem, className?: string }) {
  const { toggleItem, isInWishlist } = useWishlist();
  const active = isInWishlist(item.id);

  return (
    <button 
      onClick={(e) => { e.preventDefault(); e.stopPropagation(); toggleItem(item); }}
      className={`absolute top-4 right-4 z-30 p-2.5 rounded-full bg-black/40 backdrop-blur-md border transition-all duration-300 hover:scale-110 hover:bg-black/60 group-hover:opacity-100 md:opacity-0 ${active ? 'opacity-100 md:opacity-100 border-accent/40 bg-black/60' : 'border-white/20'} ${className}`}
      aria-label="Add to Wishlist"
    >
      <Heart className={`w-5 h-5 transition-colors ${active ? 'fill-accent text-accent' : 'text-white'}`} />
    </button>
  );
}
