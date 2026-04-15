
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
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="shrink-0">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
            </svg>
            <span className="whitespace-nowrap">Chat on WhatsApp</span>
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

