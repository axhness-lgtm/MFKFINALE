
import Link from 'next/link';

export function FinalCTA() {
  return (
    <section className="pt-16 pb-48 px-6 md:px-12 bg-[#0a0a09] relative overflow-hidden text-[#FAF9F6]">
      <div className="max-w-4xl mx-auto text-center space-y-16 relative z-10">
        <div className="space-y-6">
          <span
            className="gold-text italic block"
            style={{ fontFamily: '"Gwendolyn", cursive', fontSize: 'clamp(36px, 4vw, 55px)', fontWeight: 400 }}
          >
            Your Journey
          </span>
          <h2 className="text-4xl md:text-7xl font-headline font-light leading-tight">
            Dress Like <br />
            The <span className="font-citadel italic text-5xl md:text-8xl">Best Version</span> of You
          </h2>
        </div>

        <p className="text-base md:text-lg text-[#FAF9F6]/60 leading-relaxed max-w-xl mx-auto tracking-wide" style={{ fontFamily: 'Helvetica, Arial, sans-serif', fontWeight: 400 }}>
          Experience the unparalleled confidence of a garment made exclusively for you. Book your private consultation today.
        </p>

        <div className="flex justify-center">
          <Link href="/contact" className="hero-btn-secondary">
            Schedule Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}
