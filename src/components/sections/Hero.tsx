
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

      {/* ── Main Grid ── */}
      <div className="relative z-10 h-full grid grid-cols-12 items-center">

        {/* Left text block — occupies 55% */}
        <div
          className="col-span-12 md:col-span-7 flex flex-col justify-center px-10 md:px-20 animate-fade-in"
          style={{ paddingTop: '120px' }}
        >

          {/* Vertical gold editorial rule */}
          <div
            className="hidden md:block absolute left-[4.5rem] h-20 w-px bg-accent/40 mb-10"
            style={{ top: '38%' }}
          />

          {/* Garment label tag */}
          <span
            className="uppercase text-accent mb-10 block"
            style={{
              fontSize: '11px',
              letterSpacing: '0.35em',
              fontFamily: '"Cormorant Garamond", serif',
              fontWeight: 300,
            }}
          >
            Artisanal Specialization
          </span>

          {/* Display Headline — left-aligned, high contrast weight rhythm */}
          <h1 className="mb-0" style={{ lineHeight: 1.02 }}>
            {/* Line 1 */}
            <span className="block" style={{ fontFamily: '"Cormorant Garamond", serif' }}>
              <span
                style={{
                  fontSize: 'clamp(52px, 7vw, 110px)',
                  fontWeight: 600,
                  letterSpacing: '-0.03em',
                  color: '#E8E0D0',
                  display: 'inline',
                }}
              >
                Artisanal{' '}
              </span>
              <span
                style={{
                  fontSize: 'clamp(58px, 8vw, 120px)',
                  fontWeight: 300,
                  letterSpacing: '-0.03em',
                  color: '#E8E0D0',
                  display: 'inline',
                }}
              >
                Blazers.
              </span>
            </span>

            {/* Line 2 */}
            <span className="block" style={{ fontFamily: '"Cormorant Garamond", serif' }}>
              <span
                style={{
                  fontSize: 'clamp(52px, 7vw, 110px)',
                  fontWeight: 600,
                  letterSpacing: '-0.03em',
                  color: '#E8E0D0',
                  display: 'inline',
                }}
              >
                Custom–Tailored{' '}
              </span>
              <span
                style={{
                  fontSize: 'clamp(58px, 8vw, 120px)',
                  fontWeight: 300,
                  letterSpacing: '-0.03em',
                  color: '#E8E0D0',
                  display: 'inline',
                }}
              >
                Suits.
              </span>
            </span>
          </h1>

          {/* Script line — offset to right of its own block, like a tailor's signature */}
          <div
            className="mt-10 flex flex-col items-end"
            style={{ maxWidth: '600px' }}
          >
            <div
              className="bg-accent/50 mb-3"
              style={{ width: '35%', height: '0.5px' }}
            />
            <span
              className="font-citadel gold-text italic"
              style={{
                fontSize: 'clamp(36px, 4.5vw, 68px)',
                letterSpacing: '0.01em',
                lineHeight: 1.3,
              }}
            >
              Crafted to Perfection.
            </span>
          </div>

          {/* Body copy — left max 380px, warm off-white, breathed line-height */}
          <p
            className="mt-12 font-body"
            style={{
              maxWidth: '380px',
              color: '#E8E0D0',
              fontSize: '15px',
              lineHeight: 1.9,
              fontWeight: 300,
              letterSpacing: '0.01em',
            }}
          >
            MFKhan International specializes in the precision of the tailored silhouette.
            From master-crafted blazers to hand-stitched wedding suits, we define the
            standard of artisanal elegance.
          </p>

          {/* CTA stack — left-aligned, sequenced vertically */}
          <div className="mt-10 flex flex-col items-start gap-6">
            <Link href="/contact" className="hero-btn-primary">
              Book a Consultation
            </Link>
            <Link href="/collections" className="hero-btn-secondary">
              View Collections
            </Link>
          </div>
        </div>

        {/* Right side — pure visual negative space, fabric breathes */}
        <div className="hidden md:block md:col-span-5 h-full" />
      </div>

      {/* Scroll indicator — gold thread dropping */}
      <div className="absolute bottom-10 left-[4.5rem] md:left-20 flex flex-col items-center gap-2 opacity-40">
        <span
          style={{
            fontSize: '9px',
            letterSpacing: '0.4em',
            color: '#E8E0D0',
            fontFamily: '"Cormorant Garamond", serif',
            textTransform: 'uppercase',
            writingMode: 'vertical-rl',
          }}
        >
          Scroll
        </span>
        <div className="w-px h-16 bg-accent/60" />
      </div>
    </section>
  );
}
