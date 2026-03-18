
import Link from 'next/link';
import { Instagram, Facebook, Mail, MapPin, Phone } from 'lucide-react';
import { BrandLogo } from '../brand/BrandLogo';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border pt-24 pb-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16">
        {/* Brand Column */}
        <div className="space-y-8">
          <Link href="/" className="flex flex-col items-start gap-4">
            <BrandLogo size={64} />
            <div className="flex flex-col">
              <span className="font-headline text-2xl gold-text uppercase leading-none">MFKhan</span>
              <span className="text-[10px] uppercase tracking-[0.4em] text-foreground/60 font-bold">International</span>
            </div>
          </Link>
          <p className="text-muted-foreground text-sm leading-relaxed max-w-xs italic">
            "Every stitch tells a story of craftsmanship, precision, and timeless elegance."
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-muted-foreground hover:text-accent transition-colors"><Instagram className="w-5 h-5" /></Link>
            <Link href="#" className="text-muted-foreground hover:text-accent transition-colors"><Facebook className="w-5 h-5" /></Link>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-headline text-lg mb-8 gold-text uppercase tracking-widest">Collections</h4>
          <ul className="space-y-4 text-xs uppercase tracking-widest font-bold text-muted-foreground">
            <li><Link href="/collections" className="hover:text-foreground transition-colors">Bespoke Suits</Link></li>
            <li><Link href="/collections" className="hover:text-foreground transition-colors">Wedding Sherwanis</Link></li>
            <li><Link href="/collections" className="hover:text-foreground transition-colors">Luxury Tuxedos</Link></li>
            <li><Link href="/collections" className="hover:text-foreground transition-colors">Designer Blazers</Link></li>
          </ul>
        </div>

        {/* Experience */}
        <div>
          <h4 className="font-headline text-lg mb-8 gold-text uppercase tracking-widest">Atelier</h4>
          <ul className="space-y-4 text-xs uppercase tracking-widest font-bold text-muted-foreground">
            <li><Link href="/about" className="hover:text-foreground transition-colors">About MFK</Link></li>
            <li><Link href="/bespoke" className="hover:text-foreground transition-colors">Bespoke Process</Link></li>
            <li><Link href="/advisor" className="hover:text-foreground transition-colors">Style Advisor</Link></li>
            <li><Link href="/contact" className="hover:text-foreground transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-headline text-lg mb-8 gold-text uppercase tracking-widest">Visit Us</h4>
          <ul className="space-y-5 text-sm text-muted-foreground">
            <li className="flex items-start gap-3">
              <MapPin className="w-4 h-4 mt-1 text-accent shrink-0" />
              <span className="leading-relaxed">123 Tailor Street, Mayfair,<br />London, W1S 2XL</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-accent shrink-0" />
              <span>+44 20 7123 4567</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-accent shrink-0" />
              <span>bespoke@mfkhan-intl.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-24 pt-10 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] text-muted-foreground uppercase tracking-[0.3em] font-bold">
        <p>© {currentYear} MFKhan International. Crafted for Excellence.</p>
        <div className="flex gap-10">
          <Link href="/privacy" className="hover:text-accent transition-colors">Privacy</Link>
          <Link href="/terms" className="hover:text-accent transition-colors">Terms</Link>
        </div>
      </div>
    </footer>
  );
}
