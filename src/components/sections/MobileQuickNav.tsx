"use client";

import Image from 'next/image';
import Link from 'next/link';

export function MobileQuickNav() {
  const items = [
    { name: "Wedding", icon: "/images/wedding-icon.jpg", href: "/wedding" },
    { name: "Formals", icon: "/images/formals-icon.jpg", href: "/formals" },
    { name: "Custom", icon: "/images/custom-icon.jpg", href: "/custom-tailoring" },
    { name: "Heritage", icon: "/images/heritage-icon.jpg", href: "/heritage" },
    { name: "Wishlist", icon: "/images/wishlist-icon.jpg", href: "/wishlist" },
    { name: "Contact", icon: "/images/contact-icon.jpg", href: "/contact" },
  ];

  return (
    <section className="md:hidden pt-8 pb-12 overflow-x-auto hide-scrollbar">
      <div className="flex gap-6 px-6 w-max">
        {items.map((item, i) => (
          <Link key={i} href={item.href} className="flex flex-col items-center gap-3 group">
            <div className="w-16 h-16 rounded-full border-2 border-accent/20 overflow-hidden group-hover:border-accent transition-colors shadow-lg">
              <div className="w-full h-full bg-white/5 flex items-center justify-center p-0.5">
                <div className="w-full h-full rounded-full overflow-hidden relative">
                  <Image 
                    src={item.icon} 
                    alt={item.name} 
                    fill 
                    className="object-cover grayscale hover:grayscale-0 transition-all opacity-80 group-hover:opacity-100"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      if (target.parentElement) {
                        target.parentElement.style.background = 'linear-gradient(45deg, #A8863D, #D4AF37)';
                      }
                    }}
                  />
                </div>
              </div>
            </div>
            <span className="text-[9px] uppercase tracking-widest text-white/60 font-medium group-hover:text-accent transition-colors">{item.name}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
