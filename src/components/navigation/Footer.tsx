import Link from 'next/link';
import { Instagram, Facebook, Mail, MapPin, Phone } from 'lucide-react';
import { BrandLogo } from '../brand/BrandLogo';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border/10 pt-32 pb-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-20">
        {/* Brand Column */}
        <div className="space-y-10">
          <Link href="/" className="flex flex-col items-start gap-4">
            <BrandLogo size={52} />
            <div className="flex flex-col">
              <span className="font-headline text-xl text-foreground uppercase tracking-widest leading-none font-normal">MFKhan</span>
              <span className="text-[8px] uppercase tracking-[0.5em] text-muted-foreground font-bold">International</span>
            </div>
          </Link>
          <p className="text-muted-foreground text-xs leading-relaxed max-w-xs italic font-light">
            "Every stitch tells a story of craftsmanship, precision, and timeless elegance."
          </p>
        </div>

        {/* Collections */}
        <div>
          <h4 className="text-[10px] font-bold mb-10 gold-text uppercase tracking-[0.4em]">Collections</h4>
          <ul className="space-y-4 text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground">
            <li><Link href="/collections" className="hover:text-foreground transition-colors">Bespoke Suits</Link></li>
            <li><Link href="/collections" className="hover:text-foreground transition-colors">Sherwanis</Link></li>
            <li><Link href="/collections" className="hover:text-foreground transition-colors">Tuxedos</Link></li>
            <li><Link href="/collections" className="hover:text-foreground transition-colors">Blazers</Link></li>
          </ul>
        </div>

        {/* Experience */}
        <div>
          <h4 className="text-[10px] font-bold mb-10 gold-text uppercase tracking-[0.4em]">Atelier</h4>
          <ul className="space-y-4 text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground">
            <li><Link href="/about" className="hover:text-foreground transition-colors">The Brand</Link></li>
            <li><Link href="/bespoke" className="hover:text-foreground transition-colors">Process</Link></li>
            <li><Link href="/advisor" className="hover:text-foreground transition-colors">AI Advisor</Link></li>
            <li><Link href="/contact" className="hover:text-foreground transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-[10px] font-bold mb-10 gold-text uppercase tracking-[0.4em]">Visit</h4>
          <ul className="space-y-6 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
            <li className="leading-relaxed">123 Tailor Street, Mayfair,<br />London, W1S 2XL</li>
            <li>+44 20 7123 4567</li>
            <li>bespoke@mfkhan.com</li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-32 pt-10 border-t border-border/10 flex flex-col md:flex-row justify-between items-center gap-8 text-[8px] text-muted-foreground uppercase tracking-[0.5em] font-bold">
        <p>© {currentYear} MFKhan International.</p>
        <div className="flex gap-12">
          <Link href="/privacy" className="hover:text-accent transition-colors">Privacy</Link>
          <Link href="/terms" className="hover:text-accent transition-colors">Terms</Link>
        </div>
      </div>
    </footer>
  );
}
