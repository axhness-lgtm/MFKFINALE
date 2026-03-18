
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
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Collections', href: '/collections' },
    { name: 'Bespoke Process', href: '/bespoke' },
    { name: 'Style Advisor', href: '/advisor' },
    { name: 'Blog', href: '/blog' },
    { name: 'About', href: '/about' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4 md:px-12',
        isScrolled ? 'bg-background/90 backdrop-blur-xl shadow-2xl py-3 border-b border-white/5' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <BrandLogo size={48} className="transition-transform duration-500 group-hover:scale-110" />
          <div className="flex flex-col">
            <span className="font-headline text-2xl tracking-tighter gold-text uppercase leading-none">MFKhan</span>
            <span className="text-[10px] uppercase tracking-[0.4em] text-foreground/60 font-bold">International</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-xs uppercase tracking-widest font-bold hover:text-accent transition-colors duration-200"
            >
              {link.name}
            </Link>
          ))}
          <Button asChild variant="default" className="violet-gradient hover:opacity-90 rounded-none h-12 px-8 uppercase tracking-widest text-xs font-bold">
            <Link href="/contact">Inquiry</Link>
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-t border-border animate-fade-in p-10 space-y-6 shadow-2xl">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-2xl font-headline py-2 border-b border-border/50 text-center uppercase tracking-widest"
            >
              {link.name}
            </Link>
          ))}
          <Button asChild className="w-full violet-gradient rounded-none h-14 uppercase tracking-[0.3em] font-bold" onClick={() => setMobileMenuOpen(false)}>
            <Link href="/contact">Book Consultation</Link>
          </Button>
        </div>
      )}
    </header>
  );
}
