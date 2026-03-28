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
    { name: 'Heritage', href: '/about' },
    { name: 'Collections', href: '/collections' },
    { name: 'Artisanal Process', href: '/hand-crafted' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none pt-6 px-6 md:px-12">
      <div 
        className={cn(
          'mx-auto max-w-7xl w-full transition-all duration-700 pointer-events-auto flex items-center justify-between',
          isScrolled 
            ? 'bg-background/60 backdrop-blur-2xl border border-border/20 py-3 px-6 md:px-10 shadow-2xl translate-y-[-0.25rem] rounded-full' 
            : 'bg-transparent border-transparent py-6 px-8 md:px-12'
        )}
      >
        <Link href="/" className="flex items-center gap-4 group">
          <BrandLogo size={isScrolled ? 34 : 42} className="transition-all duration-700 group-hover:opacity-70" />
          <div className="flex flex-col transition-all duration-700">
            <span className={cn(
              "font-headline tracking-[0.2em] text-foreground uppercase leading-none font-light",
              isScrolled ? "text-base" : "text-lg"
            )}>MFKhan</span>
            {!isScrolled && (
              <span className="text-[7px] uppercase tracking-[0.5em] text-muted-foreground font-bold animate-fade-in">International</span>
            )}
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[9px] uppercase tracking-[0.3em] font-medium text-foreground/60 hover:text-accent transition-colors duration-300 nav-underline"
            >
              {link.name}
            </Link>
          ))}
          <Link 
            href="/advisor" 
            className="text-[9px] uppercase tracking-[0.3em] font-medium text-foreground/60 hover:text-accent transition-all duration-300 nav-underline"
          >
            Advisor
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-[-1] bg-background/95 backdrop-blur-3xl animate-fade-in pointer-events-auto p-12 flex flex-col justify-center gap-8">
          <button 
            className="absolute top-10 right-10 p-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            <X className="w-6 h-6" />
          </button>
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-4xl font-headline py-4 border-b border-border/5 text-center font-light tracking-widest text-foreground/80 hover:text-accent transition-colors"
          >
            Home
          </Link>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-4xl font-headline py-4 border-b border-border/5 text-center font-light tracking-widest text-foreground/80 hover:text-accent transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-8">
            <Button asChild variant="outline" className="w-full rounded-none h-16 uppercase tracking-[0.4em] text-[10px] font-bold border-accent text-accent" onClick={() => setMobileMenuOpen(false)}>
              <Link href="/contact">Book Consultation</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
