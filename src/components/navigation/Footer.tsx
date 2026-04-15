"use client";

import Link from 'next/link';
import { Instagram, Facebook, Mail, MapPin, Phone, MessageCircle } from 'lucide-react';
import { BrandLogo } from '../brand/BrandLogo';
import { useState, useEffect } from 'react';

export function Footer() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-[#000000] border-t border-white/5 pt-12 pb-10 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-16">
        {/* Brand Column */}
        <div className="space-y-10">
          <Link href="/" className="flex flex-col items-start gap-4">
            <img src="/footer-logo.png" alt="MFKhan International" className="w-[120px] h-auto object-contain opacity-90 hover:opacity-100 transition-opacity" />
          </Link>
          <p className="text-white/60 text-[10px] uppercase tracking-[0.2em] max-w-xs leading-relaxed font-serif">
            A <span className="text-accent italic">Legacy</span> of Tailoring, Since <span className="text-accent">1940</span>
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
                <address className="not-italic text-[10px] uppercase tracking-widest text-white/70 leading-relaxed font-light font-mono">
                  10-12-1, Jail Road, Rednam Gardens,<br />
                  Visakhapatnam, Andhra Pradesh, 530002
                </address>
              </div>

              <div className="space-y-4">
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/40 mb-3 font-mono">Connect</p>
                <div className="flex flex-col gap-4">
                  <a href="tel:+919988393389" className="flex items-center gap-3 text-[10px] uppercase tracking-widest text-white/70 hover:text-accent transition-colors transition-all duration-300 group font-mono">
                    <Phone size={12} className="text-accent opacity-50 group-hover:opacity-100" />
                    <span>+91 99883 93389</span>
                  </a>
                  <a href="https://wa.me/919988393389" target="_blank" className="flex items-center gap-3 text-[10px] uppercase tracking-widest text-white/70 hover:text-accent transition-colors transition-all duration-300 group font-mono">
                    <MessageCircle size={12} className="text-accent opacity-50 group-hover:opacity-100" />
                    <span>WhatsApp Inquiry</span>
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
              <a href="https://linkedin.com/company/mfkhaninternational" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-accent transition-colors" title="LinkedIn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="https://pinterest.com/mfkhaninternational" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-accent transition-colors" title="Pinterest">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.017 0c-6.627 0-12 5.373-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.261 7.929-7.261 4.162 0 7.398 2.967 7.398 6.93 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.627-5.373-12-12-12z"/>
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
          As Vizag's largest men's wear tailoring store, MFKhan International is recognized as the premier provider of the best wedding suits and designer suits in Visakhapatnam. Established in 1940, our legacy continues at our 9,000 sq. ft. flagship showroom in Rednam Gardens, offering an unmatched experience in bespoke tailoring and ready-to-wear excellence.
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

