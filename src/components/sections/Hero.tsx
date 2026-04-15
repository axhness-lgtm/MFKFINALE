"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { FadeIn } from '@/components/animations/FadeIn';

export function Hero() {
  const [isReady, setIsReady] = useState(false);
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-bg');

  useEffect(() => {
    // Check if loading screen is already done
    const hasLoaded = sessionStorage.getItem("mfk_loaded_v4");
    if (hasLoaded) {
      // Small delay to ensure smooth transition even if skipping preloader
      const timer = setTimeout(() => setIsReady(true), 100);
      return () => clearTimeout(timer);
    }

    const handleLoadingComplete = () => {
      // Reveal tagline immediately after loader
      setTimeout(() => setIsReady(true), 200);
    };

    window.addEventListener('loadingComplete', handleLoadingComplete);
    return () => window.removeEventListener('loadingComplete', handleLoadingComplete);
  }, []);

  return (
    <section className="relative h-[100vh] w-full overflow-hidden bg-[#0a0a09]">

      {/* ── Background Video ── */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="object-cover w-full h-full opacity-75 scale-110"
          poster={heroImage?.imageUrl || "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?q=80&w=2000"}
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        {/* Cinematic gradient — heavy on left to ensure text legibility, light on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a09] via-[#0a0a09]/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a09]/80 via-transparent to-[#0a0a09]/30" />
      </div>

      {/* ── Main Layout ── */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 pt-32 md:pt-48">
        {isReady && (
          <>
            <h1 className="mb-0" style={{ lineHeight: 1.05 }}>
              <FadeIn delay={0}>
                <span className="block">
                  <span
                    style={{
                      fontFamily: 'Helvetica, Arial, sans-serif',
                      fontSize: 'clamp(42px, 6vw, 90px)',
                      fontWeight: 'regular',
                      letterSpacing: '-0.02em',
                      color: '#E8E0D0',
                    }}
                  >
                    {' '}
                  </span>
                  <span
                    style={{
                      fontFamily: '"Playfair Display", serif',
                      fontSize: 'clamp(48px, 7vw, 85px)',
                      fontWeight: 100,
                      letterSpacing: '-0.02em',
                      color: '#E8E0D0',
                    }}
                  >
                    Our Signature Craft
                  </span>
                </span>
              </FadeIn>

              <span className="block mt-2">
                <FadeIn delay={500} className="inline-block">
                  <span
                    style={{
                      fontFamily: '"Times New Roman", serif',
                      fontSize: 'clamp(42px, 6vw, 90px)',
                      fontWeight: 'normal',
                      letterSpacing: '-0.02em',
                      color: '#E8E0D0',
                    }}
                  >
                    Designed {' '}
                  </span>
                </FadeIn>

                <FadeIn delay={1500} className="inline-block mx-4" direction="none">
                  <span
                    style={{
                      fontFamily: '"Times New Roman", serif',
                      fontSize: 'clamp(48px, 7vw, 85px)',
                      fontWeight: 'regular',
                      fontStyle: 'italic',
                      letterSpacing: '-0.02em',
                      color: 'hsl(var(--accent))',
                    }}
                  >
                    just
                  </span>
                </FadeIn>

                <FadeIn delay={500} className="inline-block">
                  <span
                    style={{
                      fontFamily: '"Times New Roman", serif',
                      fontSize: 'clamp(48px, 7vw, 85px)',
                      fontWeight: 'normal',
                      letterSpacing: '-0.02em',
                      color: '#E8E0D0',
                    }}
                  >
                    for you
                  </span>
                </FadeIn>
              </span>
            </h1>

            <FadeIn delay={800}>
              <div className="mt-4 flex flex-col items-center">
                <div
                  className="bg-accent/30 mb-6 md:mb-8"
                  style={{ width: '40px', height: '1px' }}
                />
                <span
                  style={{
                    fontFamily: 'monospace',
                    fontSize: 'clamp(14px, 1.5vw, 24px)',
                    letterSpacing: '0.1em',
                    fontWeight: 300,
                    textTransform: 'uppercase',
                    color: 'hsl(var(--accent))',
                  }}
                >
                  A Legacy of Tailoring, Since 1940
                </span>
                <span
                  className="mt-2 text-[#E8E0D0]/50 tracking-[0.1em] text-[9px] md:text-xs uppercase font-light"
                  style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}
                >
                  Experience finished garments in-store or have them tailored to you.
                </span>
              </div>
            </FadeIn>

            <FadeIn delay={1200}>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
                <a 
                  href="https://wa.me/919988393389" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hero-btn-primary flex items-center gap-3"
                >
                  CONTACT US
                </a>
                <Link href="#home-collections" className="hero-btn-secondary">
                  View Collections
                </Link>
              </div>
            </FadeIn>
          </>
        )}
      </div>

      {/* Scroll indicator removed */}
    </section>
  );
}
