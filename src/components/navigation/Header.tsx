
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

  const navLinks = [
    { name: 'Collections', href: '/collections' },
    { name: 'Artisanal', href: '/hand-crafted' },
    { name: 'Style Advisor', href: '/advisor' },
    { name: 'About', href: '/about' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-700 px-6 py-6 md:px-12',
        isScrolled ? 'bg-background/80 backdrop-blur-md py-4 border-b border-border/20' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-4 group">
          <BrandLogo size={42} className="transition-all duration-700 group-hover:opacity-70" />
          <div className="flex flex-col">
            <span className="font-headline text-xl tracking-[0.2em] text-foreground uppercase leading-none font-normal">MFKhan</span>
            <span className="text-[8px] uppercase tracking-[0.5em] text-muted-foreground font-bold">International</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[10px] uppercase tracking-[0.3em] font-bold text-foreground/60 hover:text-accent transition-colors duration-300"
            >
              {link.name}
            </Link>
          ))}
          <Link 
            href="/contact" 
            className="text-[10px] uppercase tracking-[0.3em] font-bold border-b border-foreground/20 pb-1 hover:border-accent hover:text-accent transition-all duration-300"
          >
            Inquiry
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-t border-border/10 animate-fade-in p-12 space-y-8 shadow-2xl h-screen">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-3xl font-headline py-4 border-b border-border/5 text-center font-light tracking-widest"
            >
              {link.name}
            </Link>
          ))}
          <Button asChild variant="outline" className="w-full rounded-none h-14 uppercase tracking-[0.4em] text-[10px] font-bold border-accent text-accent" onClick={() => setMobileMenuOpen(false)}>
            <Link href="/contact">Book Consultation</Link>
          </Button>
        </div>
      )}
    </header>
  );
}
