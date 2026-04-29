"use client";

import Link from 'next/link';
import { Instagram, Facebook, Mail, MapPin, Phone, MessageCircle } from 'lucide-react';
import { BrandLogo } from '../brand/BrandLogo';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export function Footer() {
  const [year, setYear] = useState<number | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  // Hide footer on admin pages
  if (pathname.startsWith('/admin')) return null;

  return (
    <footer className="bg-[#000000] border-t border-white/5 pt-12 pb-10 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-16">
        {/* Brand Column */}
        <div className="space-y-10">
          <Link href="/" className="flex flex-col items-start gap-4">
            <img src="/footer-logo.png" alt="MFKhan International" className="w-[120px] h-auto object-contain opacity-90 hover:opacity-100 transition-opacity" />
          </Link>
          <p className="text-white/60 text-[10px] uppercase tracking-[0.2em] max-w-xs leading-relaxed font-serif">
            Quality conscious since <span className="text-accent">1940</span>
          </p>
        </div>

        {/* Map Location */}
        <div className="md:col-span-2">
          <h4 className="text-sm mb-6 gold-text uppercase tracking-[0.2em]" style={{ fontFamily: '"Playfair Display", serif', fontWeight: 400 }}>Experience Our Showroom</h4>
          <div className="relative w-full h-[280px] rounded-[2px] overflow-hidden border border-white/5 group shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            <Link
              href="https://maps.app.goo.gl/CvW6fPhqtD71xzRN8"
              target="_blank"
              className="absolute inset-0 z-30 cursor-pointer"
              aria-label="View on Google Maps"
            />
            {/* High-End Visual Finish Layer */}
            <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-accent/[0.03] to-white/[0.05] pointer-events-none z-10 transition-opacity duration-1000 group-hover:opacity-0"></div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.089849319808!2d83.30396007463568!3d17.72084478322645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3943aed9b1eaef%3A0x51b161c6a4d0adb6!2sMFKhan%20International!5e0!3m2!1sen!2sin!4v1713045208477!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{
                border: 0,
                filter: 'grayscale(1) invert(0.98) brightness(0.8) contrast(1.1) sepia(0.2) saturate(2)',
                pointerEvents: 'none'
              }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="transition-all duration-1000 group-hover:filter-none opacity-90 group-hover:opacity-100"
            ></iframe>
            {/* Custom Luxury Pin - Fixed to store geography */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-20 group-hover:opacity-0 transition-opacity duration-500">
              <div className="flex flex-col items-center">
                <div className="px-5 py-2.5 bg-black/95 border border-accent/30 rounded-full mb-3 shadow-2xl flex items-center justify-center backdrop-blur-md">
                  <span className="text-[8px] gold-text uppercase tracking-[0.4em] whitespace-nowrap font-mono leading-none">MF KHAN INTERNATIONAL</span>
                </div>
                <div className="relative">
                  <div className="w-8 h-8 rounded-full border border-accent bg-accent/10 flex items-center justify-center animate-ping absolute inset-0 opacity-20"></div>
                  <div className="w-8 h-8 rounded-full border border-accent bg-black/40 flex items-center justify-center relative">
                    <div className="w-2.5 h-2.5 rounded-full bg-accent shadow-[0_0_15px_#E8E0D0]"></div>
                  </div>
                </div>
              </div>
            </div>
            {/* Premium Gold Accents */}
            <div className="absolute inset-0 border-[0.5px] border-accent/10 pointer-events-none z-20"></div>
            <div className="absolute top-0 right-0 w-48 h-48 bg-white/[0.02] blur-3xl pointer-events-none"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none"></div>
            <div className="absolute bottom-6 right-6 bg-black/60 group-hover:bg-accent group-hover:text-black text-white text-[9px] uppercase tracking-[0.2em] px-6 py-3 border border-accent/30 transition-all duration-500 backdrop-blur-md flex items-center gap-3 z-40">
              <MapPin size={12} className="text-accent group-hover:text-black transition-colors" />
              Get Directions
            </div>
          </div>
        </div>

        {/* Contact & Socials */}
        <div className="space-y-10">
          <div>
            <h4 className="text-sm gold-text uppercase tracking-[0.2em] mb-6" style={{ fontFamily: '"Playfair Display", serif', fontWeight: 400 }}>Visit Us</h4>
            <div className="space-y-6">
              <div className="group cursor-default">
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/40 mb-3 font-mono">Location</p>
                <address className="not-italic text-[10px] uppercase tracking-widest text-white/70 leading-relaxed font-light font-mono mb-3">
                  10-12-1, Jail Road, Rednam Gardens,<br />
                  Visakhapatnam, Andhra Pradesh, 530002
                </address>
                <div className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-mono mt-1 mb-1">Timings</div>
                <p className="text-[10px] uppercase tracking-widest text-white/70 font-mono">
                  10AM - 9:30PM
                  <br />
                  <span className="text-accent italic text-[9px]">ALL YEAR LONG</span>
                </p>
              </div>

              <div className="space-y-4">
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/40 mb-3 font-mono">Connect</p>
                <div className="flex flex-col gap-4">
                  <a href="tel:+919182167662" className="flex items-center gap-3 text-[10px] uppercase tracking-widest text-white/70 hover:text-accent transition-colors transition-all duration-300 group font-mono">
                    <Phone size={12} className="text-accent opacity-50 group-hover:opacity-100" />
                    <span>+91 91821 67662</span>
                  </a>
                  <a href="https://wa.me/919182167662" target="_blank" className="flex items-center gap-3 text-[10px] uppercase tracking-widest text-white/70 hover:text-accent transition-colors transition-all duration-300 group font-mono">
                    <span>CONTACT US</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6 pt-4 border-t border-white/5">
            <p className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-mono">Digital Presence</p>
            <div className="flex flex-wrap gap-5">
              <a href="https://instagram.com/mfkhaninternational" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-accent transition-colors" title="Instagram">
                <Instagram size={16} />
              </a>
              <a href="https://facebook.com/mfkhaninternational" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-accent transition-colors" title="Facebook">
                <Facebook size={16} />
              </a>
              <a href="https://x.com/mfkhan_suits?s=11" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-accent transition-colors" title="X (Twitter)">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.008 4.15H5.078z"/>
                </svg>
              </a>
              <a href="https://www.youtube.com/@Mfkhaninternational" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-accent transition-colors" title="YouTube">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a href="https://www.threads.com/@mfkhaninternational" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-accent transition-colors" title="Threads">
                <svg width="16" height="16" viewBox="0 0 192 192" fill="currentColor">
                  <path d="M141.537 88.9883C140.71 88.5919 139.87 88.2104 139.019 87.8451C137.537 60.5382 122.616 44.905 97.5619 44.745C97.4484 44.7443 97.3355 44.7443 97.222 44.7443C82.2364 44.7443 69.7731 51.1409 62.102 62.7807L75.881 72.2328C81.6116 63.5383 90.6052 61.6848 97.2286 61.6848C97.3051 61.6848 97.3819 61.6848 97.4576 61.6855C105.707 61.7381 111.932 64.1366 115.961 68.814C118.893 72.2193 120.854 76.925 121.825 82.8638C114.511 81.6207 106.601 81.2385 98.145 81.7233C74.3247 83.0954 59.0111 96.9879 60.0396 116.292C60.5263 125.41 65.4399 133.891 75.3025 138.995C84.1112 143.553 95.2203 143.673 105.41 139.38C113.659 135.903 119.928 130.25 123.973 123.214C125.659 136.22 135.848 144.28 147.636 143.815C153.314 143.593 158.115 141.016 162.242 136.523L151.785 126.326C149.77 128.543 147.231 129.851 144.3 129.965C141.222 130.086 138.089 128.218 137.528 123.239V123.199V123.148C137.781 120.739 138.679 111.73 136.956 94.3942C138.459 92.5148 140.063 90.72 141.537 88.9883ZM98.4414 129.507C88.0005 130.095 77.1544 125.409 76.6196 115.372C76.2232 107.93 81.9158 99.626 99.0812 98.6368C101.047 98.5234 102.976 98.468 104.871 98.468C111.106 98.468 116.939 99.0737 122.242 100.233C120.264 124.935 108.662 128.946 98.4414 129.507Z"/>
                </svg>
              </a>
              <a href="https://www.justdial.com/Visakhapatnam/M-F-Khan-Tailors-Near-Police-Mess-Rednam-Gardens/0891P891STD12502" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-accent transition-colors text-[9px] font-bold tracking-widest flex items-center gap-1 border border-white/10 px-2 py-1" title="JustDial">
                JD
              </a>
              <a href="https://g.co/kgs/xyz123" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-accent transition-colors text-[9px] font-bold tracking-widest flex items-center gap-1 border border-white/10 px-2 py-1" title="Google Business">
                Google
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* SEO Footer */}
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/5">
        <p className="text-[#E8E0D0]/40 text-xs leading-relaxed max-w-4xl" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
          <Link href="/contact" className="hover:text-accent transition-colors">MFKhan International</Link> is Vizag&apos;s largest men&apos;s wear destination — a 9,000 square foot showroom on Jail Road, Visakhapatnam, built to be the city&apos;s definitive destination for the discerning Indian man. Established in 1940, the <Link href="/contact" className="hover:text-accent transition-colors">MF Khan International</Link> legacy has been practiced without interruption for over eight decades.
        </p>
      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8 text-[8px] text-white/50 uppercase tracking-[0.5em] font-mono" style={{ fontWeight: 400 }}>
        <p>© {year || 2024} MFKhan International.</p>
        <div className="flex gap-12">
          <Link href="/privacy" className="hover:text-accent transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-accent transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}

