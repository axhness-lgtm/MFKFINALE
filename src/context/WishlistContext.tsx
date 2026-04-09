"use client";
import React, { createContext, useContext, useState, useEffect } from 'react';

export interface WishlistItem {
  id: string;
  image: string;
  title: string;
  category: string;
}

interface WishlistContextType {
  items: WishlistItem[];
  toggleItem: (item: WishlistItem) => void;
  isInWishlist: (id: string) => boolean;
}

const WishlistContext = createContext<WishlistContextType>({ items: [], toggleItem: () => {}, isInWishlist: () => false });

export const WishlistProvider = ({ children }: { children: React.ReactNode }) => {
  const [items, setItems] = useState<WishlistItem[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem('mfk_wishlist');
    if (stored) {
      try {
        setItems(JSON.parse(stored));
      } catch (e) {}
    }
  }, []);

  const toggleItem = (item: WishlistItem) => {
    setItems((prev) => {
      const exists = prev.find(i => i.id === item.id);
      let newItems;
      if (exists) {
        newItems = prev.filter(i => i.id !== item.id);
      } else {
        newItems = [...prev, item];
      }
      localStorage.setItem('mfk_wishlist', JSON.stringify(newItems));
      return newItems;
    });
  };

  const isInWishlist = (id: string) => items.some(i => i.id === id);

  if (!mounted) return <WishlistContext.Provider value={{ items: [], toggleItem: () => {}, isInWishlist: () => false }}>{children}</WishlistContext.Provider>;

  return (
    <WishlistContext.Provider value={{ items, toggleItem, isInWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => useContext(WishlistContext);
