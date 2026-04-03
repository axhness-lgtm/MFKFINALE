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
    <footer className="bg-[#000000] border-t border-border/10 pt-32 pb-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-20">
        {/* Brand Column */}
        <div className="space-y-10">
          <Link href="/" className="flex flex-col items-start gap-4">
            <BrandLogo size={90} />
          </Link>
          <p className="text-white/70 text-xs leading-relaxed max-w-xs italic" style={{ fontFamily: 'Helvetica, Arial, sans-serif', fontWeight: 400 }}>
            "Every stitch tells a story of craftsmanship, precision, and timeless elegance."
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-sm mb-10 gold-text uppercase tracking-[0.2em]" style={{ fontFamily: '"Playfair Display", serif', fontWeight: 400 }}>Navigation</h4>
          <ul className="space-y-4 text-[10px] uppercase tracking-[0.2em] text-white/70" style={{ fontFamily: 'Helvetica, Arial, sans-serif', fontWeight: 400 }}>
            <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
            <li><Link href="/heritage" className="hover:text-white transition-colors">Heritage</Link></li>
            <li><Link href="/collections" className="hover:text-white transition-colors">Collections</Link></li>
            <li><Link href="/hand-crafted" className="hover:text-white transition-colors">Hand-Crafted Process</Link></li>
            <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Experience */}
        <div>
          <h4 className="text-sm mb-10 gold-text uppercase tracking-[0.2em]" style={{ fontFamily: '"Playfair Display", serif', fontWeight: 400 }}>Experience</h4>
          <ul className="space-y-4 text-[10px] uppercase tracking-[0.2em] text-white/70" style={{ fontFamily: 'Helvetica, Arial, sans-serif', fontWeight: 400 }}>
            <li><Link href="/advisor" className="hover:text-white transition-colors">AI Style Advisor</Link></li>
            <li><Link href="/collections?cat=wedding" className="hover:text-white transition-colors">Wedding Suits</Link></li>
            <li><Link href="/collections?cat=tuxedo" className="hover:text-white transition-colors">Evening Wear</Link></li>
            <li><Link href="/collections?cat=sherwani" className="hover:text-white transition-colors">Royal Sherwanis</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-sm mb-10 gold-text uppercase tracking-[0.2em]" style={{ fontFamily: '"Playfair Display", serif', fontWeight: 400 }}>Visit Us</h4>
          <ul className="space-y-6 text-[10px] uppercase tracking-widest text-white/70" style={{ fontFamily: 'Helvetica, Arial, sans-serif', fontWeight: 400 }}>
            <li className="leading-relaxed">10-12-1, Jail Road, Rednam Gardens,<br />Visakhapatnam, Andhra Pradesh,<br />530002</li>
            <li>+91 9182167662</li>
            <li>mfkhanvizag.com</li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-32 pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8 text-[8px] text-white/50 uppercase tracking-[0.5em]" style={{ fontFamily: 'Helvetica, Arial, sans-serif', fontWeight: 400 }}>
        <p>© {year || 2024} MFKhan International.</p>
        <div className="flex gap-12">
          <Link href="/privacy" className="hover:text-accent transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-accent transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
