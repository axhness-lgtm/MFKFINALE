
import Link from 'next/link';

export function FinalCTA() {
  return (
    <section className="py-16 md:py-24 px-6 md:px-12 bg-[#0a0a09] relative overflow-hidden text-[#FAF9F6] border-t border-white/5">
      <div className="max-w-4xl mx-auto text-center space-y-8 md:space-y-12 relative z-10">
        <div className="space-y-4">
          <span
            className="gold-text italic block tracking-widest text-xs uppercase"
            style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}
          >
            Experience the Legacy
          </span>
          <h2 className="text-4xl md:text-7xl font-serif font-light leading-tight italic text-[#E8E0D0]" style={{ fontFamily: '"Playfair Display", serif' }}>
            Visit our Flagship Showroom
          </h2>
        </div>

        <p className="text-sm md:text-base text-[#FAF9F6]/50 leading-relaxed max-w-xl mx-auto tracking-wide font-body" style={{ fontFamily: 'Helvetica, Arial, sans-serif', fontWeight: 300 }}>
          Step into our 9,000 sq. ft. destination in Visakhapatnam. Explore the city's largest collection of luxury fabrics and designer ensembles.
        </p>

        <div className="flex flex-row items-center justify-center gap-3 md:gap-4 pt-4 flex-wrap">
          <a 
            href="https://wa.me/919988393389" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hero-btn-secondary flex flex-row items-center justify-center gap-3 py-2.5 px-6 text-[9px] md:text-[10px] tracking-[0.2em] font-bold whitespace-nowrap"
            style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}
          >
            <span className="whitespace-nowrap">CONTACT US</span>
          </a>

          <a 
            href="https://maps.app.goo.gl/CvW6fPhqtD71xzRN8" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex flex-row items-center justify-center gap-3 py-2.5 px-6 text-[9px] md:text-[10px] tracking-[0.2em] font-bold text-white/50 hover:text-accent border border-white/10 hover:border-accent transition-all duration-300 uppercase whitespace-nowrap"
            style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span className="whitespace-nowrap">Find Location</span>
          </a>
        </div>
      </div>
    </section>
  );
}

