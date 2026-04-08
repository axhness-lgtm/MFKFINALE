"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
        { name: 'Designer Shirts', href: '/wedding/designer-shirts' },
      ]
    },
  ];

  const rightLinks = [
    { 
      name: 'Formals', 
      href: '/formals',
      dropdown: [
        { name: 'Business Suits', href: '/formals/business-suits' },
        { name: 'Blazers', href: '/formals/blazers' },
        { name: 'Shirts', href: '/formals/shirts' },
      ]
    },
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
    <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none pt-2 px-6 md:px-12">
      <div
        className={cn(
          'mx-auto w-full transition-all duration-700 pointer-events-auto flex items-center justify-between',
          isScrolled
            ? 'max-w-6xl bg-black/90 backdrop-blur-3xl border border-white/10 py-2 px-8 shadow-2xl translate-y-[-0.25rem] rounded-full'
            : 'max-w-7xl bg-transparent border-transparent py-4 px-4'
        )}
      >
        {/* Left Links */}
        <nav className="hidden md:flex flex-1 justify-start gap-8 items-center">
          {leftLinks.map((link) => (
            <div key={link.name} className="relative group">
              <Link
                href={link.href}
                className="flex items-center gap-1 text-xs uppercase tracking-[0.2em] font-medium text-white/90 hover:text-accent transition-colors duration-300 py-4"
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

        {/* Center Logo Stack */}
        <Link href="/" className="flex flex-col items-center flex-shrink-0 group mx-6">
          <video
            src="/images/logoloop.mp4"
            autoPlay
            loop
            muted
            playsInline
            className={cn(
              "transition-all duration-700 group-hover:scale-105 object-contain",
              isScrolled ? "h-[50px] w-[50px]" : "h-[90px] w-[90px]"
            )}
          />
        </Link>

        {/* Right Links */}
        <nav className="hidden md:flex flex-1 justify-end gap-8 items-center">
          {rightLinks.map((link) => (
            <div key={link.name} className="relative group text-right">
              <Link
                href={link.href}
                className="flex items-center gap-1 text-xs uppercase tracking-[0.2em] font-medium text-white/90 hover:text-accent transition-colors duration-300 py-4"
                style={{ fontFamily: '"Times New Roman", serif' }}
              >
                {link.dropdown && link.dropdown.length > 0 && <ChevronDown className="w-3 h-3 group-hover:rotate-180 transition-transform duration-300" />}
                {link.name}
              </Link>
              
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
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden flex-shrink-0 p-2 text-white hover:text-accent transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-[-1] bg-black/95 backdrop-blur-3xl animate-fade-in pointer-events-auto p-8 overflow-y-auto pt-32 pb-24 border-t border-white/10">
          <button
            className="absolute top-8 right-8 p-2 text-white/60 hover:text-white"
            onClick={() => setMobileMenuOpen(false)}
          >
            <X className="w-8 h-8" />
          </button>

          <div className="flex flex-col gap-8 text-center mt-12">
            {[...leftLinks, ...rightLinks].map((link) => (
              <div key={link.name} className="flex flex-col gap-4">
                <Link
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-2xl font-light tracking-widest text-[#E8E0D0] hover:text-accent transition-colors pb-2 border-b border-white/5 inline-block mx-auto"
                  style={{ fontFamily: '"Times New Roman", serif' }}
                >
                  {link.name}
                </Link>
                {link.dropdown && link.dropdown.length > 0 && (
                  <div className="flex flex-col gap-3 mt-2">
                    {link.dropdown.map(sub => (
                      <Link
                        key={sub.name}
                        href={sub.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block text-sm uppercase tracking-[0.15em] text-white/50 hover:text-accent font-light"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <div className="pt-12 mt-8">
              <Button asChild variant="outline" className="w-full bg-transparent rounded-none h-16 uppercase tracking-[0.4em] text-xs font-bold border-accent text-accent hover:bg-accent hover:text-white" onClick={() => setMobileMenuOpen(false)}>
                <Link href="/contact">Book Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

