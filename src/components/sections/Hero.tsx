
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-bg');

  return (
    <section className="relative h-[100vh] w-full overflow-hidden bg-[#0a0a09]">

      {/* ── Background Video ── */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="object-cover w-full h-full opacity-75"
          poster={heroImage?.imageUrl || "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?q=80&w=2000"}
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        {/* Cinematic gradient — heavy on left to ensure text legibility, light on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a09] via-[#0a0a09]/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a09]/80 via-transparent to-[#0a0a09]/30" />
      </div>

      {/* ── Main Layout ── */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 animate-fade-in pt-20">

        {/* Garment label tag */}
        <span
          className="uppercase text-accent mb-6 block"
          style={{
            fontSize: '11px',
            letterSpacing: '0.35em',
            fontFamily: '"Cormorant Garamond", serif',
            fontWeight: 300,
          }}
        >
          Artisanal Specialization
        </span>

        {/* Display Headline — centered */}
        <h1 className="mb-0" style={{ lineHeight: 1.05 }}>
          <span className="block" style={{ fontFamily: '"Cormorant Garamond", serif' }}>
            <span
              style={{
                fontSize: 'clamp(42px, 6vw, 90px)',
                fontWeight: 600,
                letterSpacing: '-0.02em',
                color: '#E8E0D0',
              }}
            >
              Artisanal{' '}
            </span>
            <span
              style={{
                fontSize: 'clamp(48px, 7vw, 100px)',
                fontWeight: 300,
                letterSpacing: '-0.02em',
                color: '#E8E0D0',
              }}
            >
              Blazers.
            </span>
          </span>

          <span className="block" style={{ fontFamily: '"Cormorant Garamond", serif' }}>
            <span
              style={{
                fontSize: 'clamp(42px, 6vw, 90px)',
                fontWeight: 600,
                letterSpacing: '-0.02em',
                color: '#E8E0D0',
              }}
            >
              Custom–Tailored{' '}
            </span>
            <span
              style={{
                fontSize: 'clamp(48px, 7vw, 100px)',
                fontWeight: 300,
                letterSpacing: '-0.02em',
                color: '#E8E0D0',
              }}
            >
              Suits.
            </span>
          </span>
        </h1>

        {/* Script line — centered */}
        <div className="mt-8 flex flex-col items-center">
          <div
            className="bg-accent/50 mb-4"
            style={{ width: '40px', height: '1px' }}
          />
          <span
            className="gold-text italic"
            style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontSize: 'clamp(28px, 3vw, 50px)',
              letterSpacing: '0.02em',
              fontWeight: 400,
            }}
          >
            Crafted to Perfection.
          </span>
        </div>

        {/* Body copy — centered */}
        <p
          className="mt-8 font-body mx-auto"
          style={{
            maxWidth: '500px',
            color: '#E8E0D0',
            fontSize: '16px',
            lineHeight: 1.8,
            fontWeight: 300,
            letterSpacing: '0.01em',
          }}
        >
          MFKhan International specializes in the precision of the tailored silhouette.
          From master-crafted blazers to hand-stitched wedding suits, we define the
          standard of artisanal elegance.
        </p>

        {/* CTA stack — centered horizontally */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link href="/contact" className="hero-btn-primary">
            Book a Consultation
          </Link>
          <Link href="/collections" className="hero-btn-secondary">
            View Collections
          </Link>
        </div>
      </div>

      {/* Scroll indicator — centered at bottom */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <span
          style={{
            fontSize: '10px',
            letterSpacing: '0.3em',
            color: '#E8E0D0',
            fontFamily: '"Cormorant Garamond", serif',
            textTransform: 'uppercase',
            writingMode: 'vertical-rl',
          }}
        >
          Scroll
        </span>
        <div className="w-px h-12 bg-accent/60" />
      </div>
    </section>
  );
}