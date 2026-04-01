"use client";

import Link from 'next/link';
import { Instagram, Facebook, Mail, MapPin, Phone } from 'lucide-react';
import { BrandLogo } from '../brand/BrandLogo';
import { useState, useEffect } from 'react';

export function Footer() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-[#0A1128] border-t border-border/10 pt-32 pb-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-20">
        {/* Brand Column */}
        <div className="space-y-10">
          <Link href="/" className="flex flex-col items-start gap-4">
            <BrandLogo size={90} />
          </Link>
          <p className="text-muted-foreground text-xs leading-relaxed max-w-xs italic font-light">
            "Every stitch tells a story of craftsmanship, precision, and timeless elegance."
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-[10px] font-bold mb-10 gold-text uppercase tracking-[0.4em]">Navigation</h4>
          <ul className="space-y-4 text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground">
            <li><Link href="/" className="hover:text-foreground transition-colors">Home</Link></li>
            <li><Link href="/heritage" className="hover:text-foreground transition-colors">Heritage</Link></li>
            <li><Link href="/collections" className="hover:text-foreground transition-colors">Collections</Link></li>
            <li><Link href="/hand-crafted" className="hover:text-foreground transition-colors">Hand-Crafted Process</Link></li>
            <li><Link href="/contact" className="hover:text-foreground transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Experience */}
        <div>
          <h4 className="text-[10px] font-bold mb-10 gold-text uppercase tracking-[0.4em]">Experience</h4>
          <ul className="space-y-4 text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground">
            <li><Link href="/advisor" className="hover:text-foreground transition-colors">AI Style Advisor</Link></li>
            <li><Link href="/collections?cat=wedding" className="hover:text-foreground transition-colors">Wedding Suits</Link></li>
            <li><Link href="/collections?cat=tuxedo" className="hover:text-foreground transition-colors">Evening Wear</Link></li>
            <li><Link href="/collections?cat=sherwani" className="hover:text-foreground transition-colors">Royal Sherwanis</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-[10px] font-bold mb-10 gold-text uppercase tracking-[0.4em]">Visit Us</h4>
          <ul className="space-y-6 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
            <li className="leading-relaxed">123 Tailor Street, Mayfair,<br />London, W1S 2XL</li>
            <li>+44 20 7123 4567</li>
            <li>concierge@mfkhan.com</li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-32 pt-10 border-t border-border/10 flex flex-col md:flex-row justify-between items-center gap-8 text-[8px] text-muted-foreground uppercase tracking-[0.5em] font-bold">
        <p>© {year || 2024} MFKhan International.</p>
        <div className="flex gap-12">
          <Link href="/privacy" className="hover:text-accent transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-accent transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
