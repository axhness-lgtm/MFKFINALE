"use client";

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, Heart, Search } from 'lucide-react';
import { useWishlist } from '@/context/WishlistContext';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [products, setProducts] = useState<any[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const autoCloseTimer = useRef<NodeJS.Timeout | null>(null);

  const pathname = usePathname();
  const { items } = useWishlist();

  // Reset auto-close timer
  const resetAutoClose = () => {
    if (autoCloseTimer.current) clearTimeout(autoCloseTimer.current);
    if (isSearchOpen && searchQuery === "") {
      autoCloseTimer.current = setTimeout(() => {
        setIsSearchOpen(false);
      }, 1500);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);

    const handleLoadingComplete = () => {
      // Nav bar comes in after the tagline
      setTimeout(() => setIsVisible(true), 1500);
    };

    window.addEventListener('loadingComplete', handleLoadingComplete);

    // Initial check if already loaded
    if (sessionStorage.getItem("mfk_loaded_v4")) {
      setIsVisible(true);
    }

    // Fetch products for ID searching
    fetch('/api/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(() => {});

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('loadingComplete', handleLoadingComplete);
      if (autoCloseTimer.current) clearTimeout(autoCloseTimer.current);
    };
  }, []);

  useEffect(() => {
    resetAutoClose();
  }, [isSearchOpen, searchQuery]);

  const leftLinks = [
    { name: 'Home', href: '/' },
    { name: 'Heritage', href: '/heritage' },
    {
      name: 'Wedding',
      href: '/wedding',
      dropdown: [
        { name: 'Designer Suits', href: '/wedding/designer-suits' },
        { name: 'Indo-Western', href: '/wedding/indo-western' },
        { name: 'Sherwani', href: '/wedding/sherwani' },
        { name: 'Pattu-Dhoti', href: '/wedding/pattu-dhoti' },
        { name: 'Designer Shirts', href: '/wedding/designer-shirts' },
      ]
    },
    {
      name: 'Formals',
      href: '/formals',
      dropdown: [
        { name: 'Business Suits', href: '/formals/business-suits' },
        { name: 'Blazers', href: '/formals/blazers' },
        { name: 'Shirts', href: '/formals/shirts' },
      ]
    },
  ];

  const rightLinks = [
    {
      name: 'Custom Tailoring',
      href: '/custom-tailoring',
      dropdown: [
        { name: 'International Fabrics', href: '/custom-tailoring/international-fabrics' },
        { name: 'Fittings', href: '/custom-tailoring/fittings' },
        { name: 'Hand Work', href: '/custom-tailoring/hand-work' },
      ]
    },
    { name: 'Contact', href: '/contact' },
  ];

  const allLinks = [...leftLinks, ...rightLinks];

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 pointer-events-none pt-2 px-6 md:px-12 transition-all duration-1000 ease-in-out",
      isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
    )}>
      <div
        className={cn(
          'mx-auto w-full transition-all duration-700 pointer-events-auto flex items-center justify-between',
          isScrolled
            ? 'max-w-6xl bg-black/90 backdrop-blur-3xl border border-white/10 py-2 px-8 shadow-2xl translate-y-[-0.25rem] rounded-full'
            : 'max-w-7xl bg-transparent border-transparent py-4 px-4'
        )}
      >
        {/* Left Links */}
        <div className="flex-1 flex justify-start items-center">
          <nav className="hidden md:flex gap-8 items-center">
            {leftLinks.map((link) => (
              <div key={link.name} className="relative group">
                <Link
                  href={link.href}
                  className="flex items-center gap-1 text-xs uppercase tracking-[0.2em] font-medium text-white/90 hover:text-accent transition-colors duration-300 py-4 whitespace-nowrap"
                  style={{ fontFamily: '"Times New Roman", serif' }}
                >
                  {link.name}
                  {link.dropdown && link.dropdown.length > 0 && <ChevronDown className="w-3 h-3 group-hover:rotate-180 transition-transform duration-300" />}
                </Link>

                {/* Dropdown purely CSS driven */}
                {link.dropdown && link.dropdown.length > 0 && (
                  <div className="absolute top-full left-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-2 group-hover:translate-y-0 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto z-50">
                    <div className="w-56 bg-black/95 backdrop-blur-xl border border-white/10 rounded-none p-2 shadow-2xl">
                      {link.dropdown.map(subItem => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-3 text-xs uppercase tracking-[0.1em] text-white/70 hover:text-accent hover:bg-white/5 transition-all w-full"
                          style={{ fontFamily: '"Times New Roman", serif' }}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>

        {/* Center Logo Stack */}
        <Link href="/" className="flex flex-col items-center flex-shrink-0 group mx-6">
          <div
            className={cn(
              "relative transition-all duration-700 group-hover:scale-105 rounded-full overflow-hidden border border-white/10 shadow-2xl flex items-center justify-center bg-black",
              isScrolled ? "h-[80px] w-[80px]" : "h-[120px] w-[120px]"
            )}
          >
            <video
              src="/images/logoloop.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover scale-125"
            />
          </div>
        </Link>

        {/* Right Links */}
        <div className="flex-1 flex justify-end items-center">
          <nav className="hidden md:flex gap-8 items-center">
            {rightLinks.map((link) => (
              <div key={link.name} className="relative group text-right">
                <div className="flex items-center justify-end group">
                  <Link
                    href={link.href}
                    className="flex items-center gap-1 text-xs uppercase tracking-[0.2em] font-medium text-white/90 hover:text-accent transition-colors duration-300 py-4 whitespace-nowrap"
                    style={{ fontFamily: '"Times New Roman", serif' }}
                  >
                    {link.dropdown && link.dropdown.length > 0 && <ChevronDown className="w-3 h-3 group-hover:rotate-180 transition-transform duration-300" />}
                    {link.name}
                  </Link>
                </div>

                {/* Dropdown purely CSS driven */}
                {link.dropdown && link.dropdown.length > 0 && (
                  <div className="absolute top-full right-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-2 group-hover:translate-y-0 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto z-50">
                    <div className="w-56 bg-black/95 backdrop-blur-xl border border-white/10 rounded-none p-2 shadow-2xl text-left">
                      {link.dropdown.map(subItem => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-3 text-xs uppercase tracking-[0.1em] text-white/70 hover:text-accent hover:bg-white/5 transition-all w-full"
                          style={{ fontFamily: '"Times New Roman", serif' }}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}

            <div className="flex items-center gap-6 ml-4 mt-[1px]">
              {/* Expandable Search Option - now pushes other items */}
              <div
                className="flex items-center bg-transparent relative group/search"
                onMouseMove={resetAutoClose}
              >
                <div
                  className={cn(
                    "flex flex-col transition-all duration-500 ease-in-out border-b overflow-visible",
                    isSearchOpen ? "w-[160px] border-accent opacity-100 mr-2" : "w-0 border-transparent opacity-0 pointer-events-none"
                  )}
                >
                  <input
                    type="text"
                    placeholder="STYLE / UNIQUE ID..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="bg-transparent border-none outline-none text-[10px] tracking-[0.2em] text-white w-full py-1 placeholder:text-white/30 font-medium whitespace-nowrap"
                    style={{ fontFamily: '"Times New Roman", serif' }}
                    onFocus={() => {
                      setIsSearchOpen(true);
                      resetAutoClose();
                    }}
                    autoFocus={isSearchOpen}
                  />

                  {/* Search Results Dropdown */}
                  {isSearchOpen && searchQuery.length > 1 && (
                    <div className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border border-white/10 mt-2 p-2 shadow-2xl z-[60] max-h-64 overflow-y-auto min-w-[200px]">
                      {/* Nav Links Results */}
                      {allLinks
                        .flatMap(l => [l, ...(l.dropdown || [])])
                        .filter(l => l.name.toLowerCase().includes(searchQuery.toLowerCase()))
                        .map((result, idx) => (
                          <Link
                            key={`link-${idx}`}
                            href={result.href}
                            onClick={() => {
                              setIsSearchOpen(false);
                              setSearchQuery("");
                            }}
                            className="block px-3 py-2 text-[10px] uppercase tracking-[0.1em] text-white hover:text-accent hover:bg-white/5 transition-all border-b border-white/5"
                            style={{ fontFamily: '"Times New Roman", serif' }}
                          >
                            {result.name}
                            <span className="block text-[8px] opacity-40">Navigate to Page</span>
                          </Link>
                        ))}

                      {/* Product ID Results */}
                      {products
                        .filter(p =>
                          p.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          `mfk-${p.id}`.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          p.name.toLowerCase().includes(searchQuery.toLowerCase())
                        )
                        .map((product, idx) => (
                          <Link
                            key={`prod-${idx}`}
                            href={`/collection/${product.id}`}
                            onClick={() => {
                              setIsSearchOpen(false);
                              setSearchQuery("");
                            }}
                            className="block px-3 py-2 text-[10px] uppercase tracking-[0.1em] text-white hover:text-accent hover:bg-white/5 transition-all border-b border-white/5"
                            style={{ fontFamily: '"Times New Roman", serif' }}
                          >
                            <span className="gold-text">MFK-{product.id}</span>
                            <span className="block text-[9px] opacity-80">{product.name}</span>
                          </Link>
                        ))}
                    </div>
                  )}
                </div>
                <button
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                  onMouseEnter={() => setIsSearchOpen(true)}
                  className="text-white hover:text-accent transition-colors duration-300 p-2"
                  title="Search"
                >
                  <Search className="w-4 h-4" />
                </button>
              </div>

              <a href="https://wa.me/919182167662" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#25D366] transition-colors duration-300 pointer-events-auto" title="Chat on WhatsApp">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                </svg>
              </a>

              <Link href="/wishlist" className="relative group text-white hover:text-accent transition-colors" title="Wishlist">
                <Heart className="w-4 h-4" />
                {items.length > 0 && (
                  <span className="absolute -top-2 -right-3 bg-accent text-black text-[9px] font-bold px-1.5 py-0.5 rounded-full min-w-[16px] text-center">
                    {items.length}
                  </span>
                )}
              </Link>
            </div>
          </nav>

          {/* Mobile Toggle */}
          <div className="flex items-center gap-4 md:hidden">
            <Link href="/wishlist" className="relative text-white hover:text-accent transition-colors">
              <Heart className="w-5 h-5" />
              {items.length > 0 && (
                <span className="absolute -top-1 -right-2 bg-accent text-black text-[9px] font-bold px-1.5 py-0.5 rounded-full min-w-[16px] text-center">
                  {items.length}
                </span>
              )}
            </Link>
            <button
              className="flex-shrink-0 p-2 text-white hover:text-accent transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-[-1] bg-black/98 backdrop-blur-3xl animate-fade-in pointer-events-auto p-8 overflow-y-auto pt-32 pb-24">
          <button
            className="absolute top-8 right-8 p-3 text-white/60 hover:text-white"
            onClick={() => setMobileMenuOpen(false)}
          >
            <X className="w-8 h-8" />
          </button>

          <div className="flex flex-col gap-6 text-center mt-6">
            {[...leftLinks, ...rightLinks].map((link) => (
              <div key={link.name} className="flex flex-col gap-2">
                <Link
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-xl tracking-[0.25em] text-[#E8E0D0] hover:text-accent transition-colors py-2 uppercase font-light"
                  style={{ fontFamily: '"Times New Roman", serif' }}
                >
                  {link.name}
                </Link>
                {link.dropdown && link.dropdown.length > 0 && (
                  <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 px-4 mb-4">
                    {link.dropdown.map(sub => (
                      <Link
                        key={sub.name}
                        href={sub.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-[10px] uppercase tracking-[0.2em] text-white/40 hover:text-accent font-medium"
                      >
                        • {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
                <div className="w-12 h-[1px] bg-white/5 mx-auto mt-2" />
              </div>
            ))}

            <div className="pt-8 flex flex-col items-center gap-8">
              <Button asChild variant="outline" className="w-full max-w-xs bg-transparent rounded-none h-14 uppercase tracking-[0.4em] text-[10px] font-bold border-accent/50 text-accent hover:bg-accent hover:text-white" onClick={() => setMobileMenuOpen(false)}>
                <Link href="/contact">Book Consultation</Link>
              </Button>
              
              <div className="flex gap-8 opacity-40">
                 <a href="https://wa.me/919182167662" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent transition-colors">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                    </svg>
                 </a>
                 <Link href="/wishlist" className="text-white hover:text-accent transition-colors">
                    <Heart className="w-4.5 h-4.5" />
                 </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

