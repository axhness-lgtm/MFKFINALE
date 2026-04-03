"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { BrandLogo } from '../brand/BrandLogo';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const leftLinks = [
    { name: 'Home', href: '/' },
    { name: 'Our Heritage', href: '/heritage' },
  ];

  const rightLinks = [
    { name: 'Collections', href: '/collections' },
    { name: 'Contact', href: '/contact' },
  ];

  const allLinks = [...leftLinks, ...rightLinks];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none pt-2 px-6 md:px-12">
      <div
        className={cn(
          'mx-auto w-full transition-all duration-700 pointer-events-auto flex items-center justify-between',
          isScrolled
            ? 'max-w-[660px] bg-black/80 backdrop-blur-2xl border border-white/10 py-1.5 px-6 shadow-2xl translate-y-[-0.25rem] rounded-full'
            : 'max-w-6xl bg-transparent border-transparent py-2 px-4'
        )}
      >
        {/* Left Links */}
        <nav className="hidden md:flex flex-1 justify-start gap-6 items-center">
          {leftLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm uppercase tracking-[0.1em] font-medium text-white/90 hover:text-accent transition-colors duration-300 nav-underline"
              style={{ fontFamily: '"Playfair Display", serif' }}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Center Logo Stack */}
        <Link href="/" className="flex flex-col items-center flex-shrink-0 group mx-4">
          <BrandLogo size={isScrolled ? 56 : 100} className="transition-all duration-700 group-hover:scale-105" />
        </Link>

        {/* Right Links */}
        <nav className="hidden md:flex flex-1 justify-end gap-6 items-center">
          {rightLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm uppercase tracking-[0.1em] font-medium text-white/90 hover:text-accent transition-colors duration-300 nav-underline"
              style={{ fontFamily: '"Playfair Display", serif' }}
            >
              {link.name}
            </Link>
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
        <div className="md:hidden fixed inset-0 z-[-1] bg-black/95 backdrop-blur-3xl animate-fade-in pointer-events-auto p-12 flex flex-col justify-center gap-8 border-t border-white/10">
          <button
            className="absolute top-10 right-10 p-2 text-white/60 hover:text-white"
            onClick={() => setMobileMenuOpen(false)}
          >
            <X className="w-8 h-8" />
          </button>

          {allLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-3xl py-4 border-b border-white/10 text-center font-light tracking-widest text-white/90 hover:text-accent transition-colors"
              style={{ fontFamily: '"Playfair Display", serif' }}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-8">
            <Button asChild variant="outline" className="w-full bg-transparent rounded-none h-16 uppercase tracking-[0.4em] text-xs font-bold border-accent text-accent hover:bg-accent hover:text-white" onClick={() => setMobileMenuOpen(false)}>
              <Link href="/contact">Book Consultation</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
