"use client";

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, Heart, Search, Plus, Minus, ArrowRight } from 'lucide-react';
import { useWishlist } from '@/context/WishlistContext';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [expandedLink, setExpandedLink] = useState<string | null>(null);
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
      // Nav bar comes in immediately after the minimal loader fades
      setTimeout(() => setIsVisible(true), 200);
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
    <>
      {/* Promotional Top Bar */}
      <div className="fixed top-0 left-0 right-0 z-[60] bg-white text-black h-8 flex items-center justify-center overflow-hidden whitespace-nowrap px-4 select-none">
         <div className="flex gap-12 animate-marquee text-[10px] uppercase tracking-[0.3em] font-bold">
            <span>Free Worldwide Shipping on Luxury Tailoring</span>
            <span>Crafting Excellence Since 1940</span>
            <span>Uncompromising Quality in Every Stitch</span>
            {/* Duplicate for seamless marquee if needed, or just static for now */}
            <span className="hidden md:inline">Visit our 9,000 sq. ft. Flagship Showroom in Vizag</span>
         </div>
      </div>

    <header className={cn(
      "fixed top-8 left-0 right-0 z-50 pointer-events-none pt-2 px-6 md:px-12 transition-all duration-1000 ease-in-out",
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
          <nav className="hidden md:flex gap-4 md:gap-8 items-center">
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
        <Link href="/" className="flex flex-col items-center flex-shrink-0 group mx-8 md:mx-12">
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
              preload="auto"
              className="w-full h-full object-cover scale-125 bg-black"
            />
          </div>
        </Link>

        {/* Right Links */}
        <div className="flex-1 flex justify-end items-center">
          <nav className="hidden md:flex gap-4 md:gap-8 items-center">
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

              <a href="https://wa.me/919988393389" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent transition-colors duration-300 pointer-events-auto" title="CONTACT US">
                {/* Icon removed as requested */}
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

      {/* Mobile Menu Sidebar */}
      <div 
        className={cn(
          "md:hidden fixed inset-0 z-[100] transition-all duration-500 pointer-events-none",
          mobileMenuOpen ? "opacity-100" : "opacity-0"
        )}
      >
        {/* Overlay */}
        <div 
          className="absolute inset-0 bg-black/60 backdrop-blur-sm pointer-events-auto"
          onClick={() => setMobileMenuOpen(false)}
        />
        
        {/* Sidebar */}
        <div 
          className={cn(
            "absolute top-0 left-0 bottom-0 w-[85%] max-w-sm bg-black border-r border-white/10 flex flex-col transition-transform duration-500 pointer-events-auto",
            mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          )}
        >
          {/* Sidebar Header */}
          <div className="p-6 border-b border-white/5 bg-white/5 flex items-center justify-between">
            <Link href="/contact" className="flex items-center gap-4 group">
              <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center bg-white/5 group-hover:bg-accent/20 transition-colors">
                 <ArrowRight className="w-4 h-4 text-accent" />
              </div>
              <div className="text-left">
                 <p className="text-[10px] uppercase tracking-widest text-white/40 font-bold mb-0.5">Welcome</p>
                 <p className="text-xs uppercase tracking-widest text-[#E8E0D0] font-bold">Book Consultation</p>
              </div>
            </Link>
            <button 
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-white/60 hover:text-white"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Links Section */}
          <div className="flex-grow overflow-y-auto px-6 py-8">
            <div className="flex flex-col">
              {allLinks.map((link) => {
                const isExpanded = expandedLink === link.name;
                const hasDropdown = link.dropdown && link.dropdown.length > 0;
                
                return (
                  <div key={link.name} className="border-b border-white/5">
                    <div className="flex items-center justify-between py-5">
                      <Link
                        href={link.href}
                        onClick={() => !hasDropdown && setMobileMenuOpen(false)}
                        className="text-sm tracking-[0.2em] text-[#E8E0D0] uppercase font-medium hover:text-accent transition-colors"
                        style={{ fontFamily: '"Times New Roman", serif' }}
                      >
                        {link.name}
                      </Link>
                      {hasDropdown && (
                        <button 
                          onClick={() => setExpandedLink(isExpanded ? null : link.name)}
                          className="p-2 text-white/40"
                        >
                          {isExpanded ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                        </button>
                      )}
                    </div>
                    
                    {/* Collapsible Sub-menu */}
                    {hasDropdown && (
                      <div 
                        className={cn(
                          "overflow-hidden transition-all duration-300",
                          isExpanded ? "max-h-[500px] pb-6 opacity-100" : "max-h-0 opacity-0"
                        )}
                      >
                        <div className="flex flex-col gap-5 pl-4 border-l border-accent/20">
                          {link.dropdown?.map(sub => (
                            <Link
                              key={sub.name}
                              href={sub.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className="text-[10px] uppercase tracking-[0.2em] text-white/60 hover:text-accent font-medium flex items-center gap-3"
                            >
                               <span className="w-1.5 h-1.5 rounded-full bg-accent/30" />
                               {sub.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
              
              <Link 
                href="/wishlist" 
                onClick={() => setMobileMenuOpen(false)}
                className="py-5 border-b border-white/5 flex items-center justify-between group"
              >
                <span className="text-sm tracking-[0.2em] text-[#E8E0D0] uppercase font-medium flex items-center gap-3">
                  <Heart className="w-4 h-4 text-accent" />
                  Wishlist
                </span>
                <span className="text-[10px] text-accent font-bold px-2 py-0.5 border border-accent/30 rounded-full">
                  {items.length}
                </span>
              </Link>
            </div>
          </div>

          {/* Sidebar Footer */}
          <div className="p-6 border-t border-white/5 space-y-6">
             {/* Inquiry Hotline */}
              <div className="flex items-center gap-4">
                <div>
                  <p className="text-[8px] uppercase tracking-widest text-white/40 mb-0.5">CONTACT US</p>
                  <p className="text-[10px] text-white font-bold">+91 99883 93389</p>
                </div>
              </div>
             
             {/* Region Select Mockup */}
             <div className="flex items-center justify-between p-4 bg-white/5 border border-white/10 text-white/60 text-[10px] uppercase font-bold tracking-widest">
                <span>Ship To: INDIA</span>
                <span>Currency: INR</span>
             </div>
          </div>
        </div>
      </div>
    </header>
    </>
  );
}
