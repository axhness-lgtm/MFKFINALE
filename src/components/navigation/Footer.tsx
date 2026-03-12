
import Link from 'next/link';
import { Scissors, Instagram, Facebook, Mail, MapPin, Phone } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border pt-20 pb-10 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand Column */}
        <div className="space-y-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full violet-gradient flex items-center justify-center border border-accent/20">
               <Scissors className="w-4 h-4 text-accent" />
            </div>
            <span className="font-headline text-xl gold-text uppercase">MFK</span>
          </Link>
          <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
            Redefining bespoke luxury tailoring since 1995. Every stitch tells a story of craftsmanship, precision, and timeless elegance.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-accent transition-colors"><Instagram className="w-5 h-5" /></Link>
            <Link href="#" className="hover:text-accent transition-colors"><Facebook className="w-5 h-5" /></Link>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-headline text-lg mb-6 gold-text">Collections</h4>
          <ul className="space-y-4 text-sm text-muted-foreground">
            <li><Link href="/collections" className="hover:text-foreground transition-colors">Bespoke Suits</Link></li>
            <li><Link href="/collections" className="hover:text-foreground transition-colors">Wedding Sherwanis</Link></li>
            <li><Link href="/collections" className="hover:text-foreground transition-colors">Luxury Tuxedos</Link></li>
            <li><Link href="/collections" className="hover:text-foreground transition-colors">Designer Blazers</Link></li>
          </ul>
        </div>

        {/* Experience */}
        <div>
          <h4 className="font-headline text-lg mb-6 gold-text">Company</h4>
          <ul className="space-y-4 text-sm text-muted-foreground">
            <li><Link href="/about" className="hover:text-foreground transition-colors">About MFK</Link></li>
            <li><Link href="/bespoke" className="hover:text-foreground transition-colors">Bespoke Process</Link></li>
            <li><Link href="/blog" className="hover:text-foreground transition-colors">Style Blog</Link></li>
            <li><Link href="/contact" className="hover:text-foreground transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-headline text-lg mb-6 gold-text">Visit Us</h4>
          <ul className="space-y-4 text-sm text-muted-foreground">
            <li className="flex items-start gap-3">
              <MapPin className="w-4 h-4 mt-1 text-accent" />
              <span>123 Tailor Street, Mayfair,<br />London, W1S 2XL</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-accent" />
              <span>+44 20 7123 4567</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-accent" />
              <span>bespoke@mfk-intl.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-muted-foreground uppercase tracking-widest">
        <p>© {currentYear} MFK International. All rights reserved.</p>
        <div className="flex gap-8">
          <Link href="/privacy" className="hover:text-accent transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-accent transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
