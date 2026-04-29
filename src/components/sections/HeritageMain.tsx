"use client";

import { Header } from '@/components/navigation/Header';
import Image from 'next/image';
import { FadeIn } from '@/components/animations/FadeIn';
import Link from 'next/link';
import { HeritageArchiveGallery } from '@/components/sections/HeritageArchiveGallery';

export function HeritageMain() {
  return (
    <div className="min-h-screen flex flex-col bg-[#1a0505]">
      <Header />

      <main className="flex-grow pt-24 md:pt-32">
        {/* ── HERO SECTION ── */}
        <section className="relative px-6 md:px-12 pt-8 md:pt-16 pb-20 overflow-hidden bg-[#1a0505]">
          <div className="max-w-5xl mx-auto text-center space-y-12">
            <FadeIn>
              <div className="flex flex-col items-center">
                <span className="text-accent/80 uppercase tracking-widest text-[10px] mb-10 font-semibold">Legacy Of</span>

                {/* Framed Founder Picture with Heritage Golden Border */}
                <div className="relative p-3 md:p-4 mb-16 md:mb-20 inline-block group">
                  {/* Ornamental Golden Border Layers */}
                  <div className="absolute inset-0 rounded-t-[110px] border-[1px] border-accent/30 scale-[1.02] opacity-50" />
                  <div className="absolute inset-0 rounded-t-[110px] border-[3px] border-accent/20 scale-[1.05] opacity-30" />
                  <div className="absolute -inset-2 rounded-t-[120px] border-t border-x border-accent/10 opacity-20" />

                  {/* Main Frame */}
                  <div className="relative p-2 md:p-3 border-[1px] border-accent/40 rounded-t-[100px] shadow-[0_0_50px_rgba(196,163,101,0.1)] bg-[#1a0505]/50 overflow-hidden">
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 border-t-[2px] border-accent/60 rounded-full" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(196,163,101,0.15),transparent)] pointer-events-none" />

                    <div className="relative w-48 h-64 md:w-64 md:h-[320px] overflow-hidden rounded-t-[100px] bg-black inner-shadow">
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
                      <Image
                        src="/images/archive/faizulla-khan.jpg"
                        alt="MF Khan, Founder of M.F. KHAN & CO. (1922 - 1980)"
                        fill
                        className="object-cover object-top grayscale contrast-125"
                      />
                      <div className="absolute bottom-5 left-0 right-0 text-center z-20">
                        <p className="text-accent text-[10px] md:text-xs uppercase tracking-widest font-light">MF Khan</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative w-full px-2">
                  <h2 className="text-white/40 tracking-[0.3em] text-[10px] md:text-sm uppercase font-medium mb-4 md:mb-6" style={{ fontFamily: '"Spectral", serif' }}>
                    The Man, The Name, The House
                  </h2>
                  <h1 className="text-3xl md:text-5xl lg:text-7xl text-white font-light leading-[1.4] md:leading-[1.2] mb-6 md:mb-8" style={{ fontFamily: '"Cormorant Garamond", serif' }}>
                    <Link href="/contact" className="text-white hover:text-accent transition duration-500">MF Khan</Link> <br className="hidden md:block" />
                    <span className="text-white/70 text-xl md:text-5xl lg:text-5xl block mt-2 md:mt-0">Quality Conscious Since 1940</span>
                  </h1>
                  <div className="w-px h-12 md:h-16 bg-gradient-to-b from-accent/0 via-accent/40 to-accent/0 mx-auto mb-8 md:mb-10" />
                  <p className="text-[#E8E0D0]/80 text-sm md:text-lg font-light max-w-2xl leading-relaxed mx-auto italic px-4" style={{ fontFamily: '"Cormorant Garamond", serif' }}>
                    From a 100-rupee beginning in Kakinada to a flagship at Rednam Gardens, MF Khan (<Link href="https://maps.app.goo.gl/CvW6fPhqtD71xzRN8" target="_blank" rel="noopener noreferrer" className="text-accent transition-colors hover:text-white underline decoration-accent/20 hover:decoration-accent underline-offset-4">International</Link>) remains a name that stands for consistency, precision, and trust. Today, clients visit MFKhan International not just for clothing, but for complete wedding styling.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ── GENERATION I: WHO IS MF KHAN ── */}
        <section className="bg-[#1a0505] py-20 md:py-28 px-6 md:px-12 border-t border-white/[0.05]">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl md:text-5xl text-accent font-light text-center mb-16" style={{ fontFamily: '"Cormorant Garamond", serif' }}>Who Is MF Khan?</h2>
            </FadeIn>

            <div className="text-[#E8E0D0]/80 font-light leading-relaxed text-base md:text-lg space-y-8" style={{ fontFamily: '"Spectral", serif' }}>
              <FadeIn delay={100}>
                <p>
                  <span className="float-left text-5xl md:text-6xl leading-[0.8] pr-2 pt-2 text-accent font-serif">M</span>
                  <Link href="/contact" className="text-white hover:text-accent transition-colors">F Khan</Link> is the name by which Visakhapatnam's most enduring menswear house is known — and the name is not a brand construct. It is a man's name, abbreviated and passed down through generations as a mark of trust. <Link href="/contact" className="text-accent hover:underline">MF Khan</Link> refers to Mohammed Faizulla Khan, the founder who established MFKHAN & Co. at kurupam market, Visakhapatnam in 1940 — making it one of the oldest continuously operating luxury menswear establishments in Andhra Pradesh.
                </p>
              </FadeIn>
              <FadeIn delay={200}>
                <p>
                  Mohammed Faizulla Khan was born into a family whose place in the Visakhapatnam region predates the city's modern identity. Generations prior, the family received an Eenaam — an imperial land grant of 2,400 acres in the Yendada region of Visakhapatnam — from the Emperor Aurangzeb. For centuries, the family was established in the Panja district, among the foundational communities of coastal Andhra.
                </p>
              </FadeIn>
            </div>

            {/* Pull Quote */}
            <FadeIn>
              <div className="mx-auto max-w-3xl text-center py-16 mt-8 relative">
                <div className="absolute left-1/2 top-4 w-12 h-px bg-accent/30 -translate-x-1/2" />
                <p className="text-2xl md:text-3xl text-white/90 leading-relaxed italic font-light px-4" style={{ fontFamily: '"Cormorant Garamond", serif' }}>
                  "What distinguished Mohammed Faizulla Khan from his contemporaries was a refusal to build his life on inherited ground alone."
                </p>
                <p className="mt-6 text-white/50 text-[10px] tracking-widest uppercase">He sought earned authority over ancestral land rents.</p>
                <div className="absolute left-1/2 bottom-4 w-12 h-px bg-accent/30 -translate-x-1/2" />
              </div>
            </FadeIn>

            {/* 1935 */}
            <div className="pt-16 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
              <FadeIn className="md:col-span-4">
                <div className="text-white/5 font-serif text-[5rem] md:text-[6rem] leading-none select-none mb-2 -ml-2">1935</div>
                <h3 className="text-2xl md:text-3xl text-white font-light" style={{ fontFamily: '"Cormorant Garamond", serif' }}>
                  One Hundred Rupees <span className="text-accent italic block">and a standard.</span>
                </h3>
              </FadeIn>
              <div className="md:col-span-8 space-y-6 text-[#E8E0D0]/80 font-light leading-relaxed text-base md:text-lg" style={{ fontFamily: '"Spectral", serif' }}>
                <FadeIn delay={100}>
                  <p>
                    In 1935, Mohammed Faizulla Khan left the ancestral comfort of Panja for Kakinada — carrying 100 rupees, which represented less a budget and more a commitment. It was here that he built the technical foundation that would define everything that followed.
                  </p>
                </FadeIn>
                <FadeIn delay={200}>
                  <p>
                    Managing high-volume textile operations, overseeing vendor networks, and developing an intimate understanding of fabric quality, he spent these years learning what no formal education could teach: that the difference between a garment that endures and one that doesn't begins not at the needle, but at the loom.
                  </p>
                </FadeIn>
              </div>
            </div>

            {/* 3 Pillars */}
            <FadeIn delay={300}>
              <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                {[
                  { num: "01", text: "Inventory must never be curated by price alone — only by standard." },
                  { num: "02", text: "Accounts must be kept with the same precision as a pattern." },
                  { num: "03", text: "The final approval belongs to the wearer, not the maker." }
                ].map((item, i) => (
                  <div key={i} className="p-8 border border-white/5 bg-[#1a0505] flex flex-col justify-between hover:border-accent/20 transition-colors">
                    <span className="text-accent/60 text-xl font-light mb-4">{item.num}.</span>
                    <p className="text-white/80 font-serif text-base leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </FadeIn>

            {/* 1940 */}
            <div className="pt-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <FadeIn className="lg:col-span-7 order-2 lg:order-1">
                <div className="relative w-full aspect-[4/3] mt-12 lg:mt-0 shadow-2xl bg-[#111] p-2 border border-white/10">
                  <div className="relative w-full h-full">
                    <Image src="/images/archive/kurupam-store.jpg" alt="Original M.F. KHAN & Co. storefront, Kurupam Market, 1940" fill className="object-contain grayscale opacity-90" />
                  </div>
                </div>
                <div className="mt-4 text-center pb-4 border-b border-white/10 max-w-sm mx-auto">
                  <p className="text-white/50 text-[10px] tracking-widest uppercase">The Original Storefront • 1940</p>
                </div>
              </FadeIn>

              <div className="lg:col-span-5 order-1 lg:order-2">
                <FadeIn>
                  <div className="text-white/5 font-serif text-[5rem] md:text-[6rem] leading-none select-none mb-2 -ml-2">1940</div>
                  <h3 className="text-3xl md:text-4xl text-white font-light mb-6" style={{ fontFamily: '"Cormorant Garamond", serif' }}>The Founding of MFKHAN & Co.</h3>
                </FadeIn>
                <div className="space-y-6 text-[#E8E0D0]/80 font-light leading-relaxed text-base md:text-lg" style={{ fontFamily: '"Spectral", serif' }}>
                  <FadeIn delay={100}>
                    <p>
                      In 1940, MF Khan opened MFKHAN & Co. — at a time when the city's appetite for quality menswear was met almost entirely by imported or mass-produced goods. He entered that gap with something neither could offer: personal accountability for every garment.
                    </p>
                  </FadeIn>
                  <FadeIn delay={200}>
                    <p className="pl-5 border-l border-accent/30 italic text-white/90">
                      Even today, grooms across Vizag rely on <Link href="/contact" className="text-accent underline decoration-accent/30 hover:decoration-accent underline-offset-4">MF Khan International</Link> for their wedding attire, from tailored <Link href="/wedding/designer-suits" className="text-white hover:text-accent transition-colors">suits</Link> to traditional <Link href="/wedding/sherwani" className="text-white hover:text-accent transition-colors">sherwanis</Link>.
                    </p>
                  </FadeIn>
                  <FadeIn delay={300}>
                    <p>
                      He operated not from behind a desk but from the floor of the shop itself — chief consultant, quality controller, and head of accounts simultaneously, he ran the establishment with a discipline that became its defining characteristic. His clients knew what his ledgers confirmed: nothing left the shop that he had not personally approved.
                    </p>
                  </FadeIn>
                </div>
              </div>
            </div>

            {/* A Standard */}
            <div className="pt-24 pb-8 text-center max-w-2xl mx-auto">
              <FadeIn>
                <div className="mb-10 flex justify-center">
                  <Image src="/images/archive/vintage-logo.png" alt="MF Khan 1940 Vintage Logo" width={280} height={100} className="object-contain" />
                </div>
                <h3 className="text-2xl md:text-3xl text-white font-light mb-6" style={{ fontFamily: '"Cormorant Garamond", serif' }}>The Name That Became a Standard</h3>
              </FadeIn>
              <FadeIn delay={100}>
                <p className="text-[#E8E0D0]/80 font-light leading-relaxed text-base md:text-lg" style={{ fontFamily: '"Spectral", serif' }}>
                  By the time MF Khan's son, Mohammed Ahmed Ali Khan, assumed the next chapter of the house, <Link href="/contact" className="text-accent">MF Khan</Link> had become something that transcends branding: a shorthand for a standard. Clients in Visakhapatnam did not say they were going to buy a suit. They said they were going to <Link href="/contact" className="text-accent">MF Khan International</Link>.
                </p>
                <p className="text-white/50 text-xs uppercase tracking-widest mt-8 font-sans">
                  That compression of a man's name into a city's reference point for quality is the truest measure of what he built.
                </p>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* ── GENERATION II ── */}
        <section className="bg-[#1a0505] py-20 md:py-28 px-6 md:px-12 border-t border-white/[0.05]">
          <div className="max-w-4xl mx-auto">
            <FadeIn className="text-center mb-12">
              <span className="text-accent tracking-widest text-[10px] uppercase mb-4 inline-block font-semibold">Generation II</span>
              <h2 className="text-3xl md:text-5xl text-white font-light" style={{ fontFamily: '"Cormorant Garamond", serif', lineHeight: 1.2 }}>
                Mohammed Ahmed Ali Khan <br /><span className="text-white/60 text-2xl md:text-3xl italic block mt-2">The Architect of Modern Luxury</span>
              </h2>
            </FadeIn>

            <FadeIn delay={100} className="mb-16">
              <div className="relative w-full aspect-[16/9] md:aspect-[21/9] border border-white/10 p-2 bg-[#1a0505] shadow-2xl">
                <div className="relative w-full h-full">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60 z-10" />
                  <Image
                    src="/images/archive/ahmed-ali-khan.jpg"
                    alt="Mohammed Ahmed Ali Khan"
                    fill
                    className="object-cover object-[center_80%] grayscale contrast-125 opacity-90"
                  />
                </div>
              </div>
            </FadeIn>

            <div className="space-y-16 text-[#E8E0D0]/80 font-light leading-relaxed text-base md:text-lg" style={{ fontFamily: '"Spectral", serif' }}>
              <FadeIn delay={100}>
                <p className="text-xl md:text-2xl font-serif text-center leading-relaxed text-white max-w-3xl mx-auto">
                  When Mohammed Ahmed Ali Khan assumed leadership of the house his father built, there was no formal ceremony. The transition was marked instead by what remained unchanged: <span className="text-accent italic">the standard.</span>
                </p>
                <p className="mt-8 text-center text-white/70 max-w-3xl mx-auto">
                  What did change — and what defines his contribution to the <Link href="/contact" className="text-white hover:text-accent transition">MF Khan International</Link> legacy — was scale, sourcing, and institutional presence. He applied his father's founding philosophy to a world where luxury had gone global.
                </p>
              </FadeIn>

              {/* Staggered Editorial Layout for Generation II Innovations */}
              <div className="mt-20 space-y-24">

                {/* 01. The Fabric Vault */}
                <FadeIn delay={100} className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
                  <div className="order-2 md:order-1">
                    <h4 className="text-2xl md:text-3xl text-white font-serif mb-6 flex items-center gap-4">
                      <span className="text-xs text-accent border border-accent/20 px-2 py-1 rounded-sm font-sans tracking-widest uppercase">01</span>
                      The Fabric Vault
                    </h4>
                    <p className="text-[#E8E0D0]/80 leading-relaxed text-base md:text-lg">
                      Establishing sourcing channels with the world's most prestigious textile houses — <span className="italic text-white">Loro Piana, Ermenegildo Zegna, Scabal</span>. This allowed clients to access custom <Link href="/wedding/designer-suits" className="text-accent hover:underline">suits</Link> crafted for weddings right in Visakhapatnam, matching the inventory of metropolitan luxury houses.
                    </p>
                  </div>
                  <div className="order-1 md:order-2 relative aspect-[4/5] md:aspect-square w-full shadow-2xl bg-[#111] p-2 border border-white/10">
                    <div className="relative w-full h-full">
                      <Image src="/images/archive/gen-2-fabrics.jpg" alt="The Fabric Vault" fill className="object-cover grayscale opacity-90" />
                    </div>
                  </div>
                </FadeIn>

                {/* 02. Systematic Precision */}
                <FadeIn delay={200} className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
                  <div className="relative aspect-[4/3] w-full shadow-2xl bg-[#111] p-2 border border-white/10">
                    <div className="relative w-full h-full">
                      <Image src="/images/archive/generation-2-counter.jpg" alt="Systematic Precision" fill className="object-cover grayscale opacity-90" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-2xl md:text-3xl text-white font-serif mb-6 flex items-center gap-4">
                      <span className="text-xs text-accent border border-accent/20 px-2 py-1 rounded-sm font-sans tracking-widest uppercase">02</span>
                      Systematic Precision
                    </h4>
                    <p className="text-[#E8E0D0]/80 leading-relaxed text-base md:text-lg">
                      He modernized operations, introducing structured inventory systems and expanding tailoring teams, while fiercely refusing to industrialize what his father had kept artisanal. Every garment still required meticulous approval before passing over the counter.
                    </p>
                  </div>
                </FadeIn>

                {/* 03. The Flagship */}
                <FadeIn delay={300} className="pt-12">
                  <div className="text-center max-w-2xl mx-auto mb-12">
                    <span className="text-xs text-accent tracking-widest uppercase border border-accent/20 px-3 py-1 rounded-sm mb-6 inline-block">03. The Flagship</span>
                    <h4 className="text-3xl md:text-5xl text-white font-serif mb-6">A House Worthy of the Name</h4>
                    <p className="text-[#E8E0D0]/80 text-base md:text-lg">
                      The physical manifestation of his vision was the MFKHAN International flagship store at <Link href="/contact" className="text-accent hover:underline">Rednam Gardens</Link> — a 9,000-square-foot architectural destination instantly synonymous with premier luxury menswear.
                    </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="relative aspect-[4/3] w-full shadow-2xl bg-[#111] p-1 border border-white/10">
                      <Image src="/images/heritage-interior-1.png" alt="MF Khan International Showroom Interior 1" fill className="object-cover" />
                    </div>
                    <div className="relative aspect-[4/3] w-full shadow-2xl bg-[#111] p-1 border border-white/10">
                      <Image src="/images/heritege-interior-2.png" alt="MF Khan International Showroom Interior 2" fill className="object-cover" />
                    </div>
                  </div>
                </FadeIn>

              </div>

              <FadeIn delay={400}>
                <div className="bg-[#1a0505] border border-white/5 p-8 md:p-12 text-center mt-8">
                  <h4 className="text-2xl md:text-3xl text-accent font-serif mb-4">Beyond Cloth</h4>
                  <p className="text-lg md:text-xl text-white/90 font-serif italic mb-8">
                    "A name carries weight in a city not because of what it sells, but because of what it builds."
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-left max-w-2xl mx-auto">
                    <div>
                      <p className="text-white font-serif text-lg mb-2">MIST College (1991)</p>
                      <p className="text-[#E8E0D0]/70 text-sm leading-relaxed">Founded the Mirza Institute of Science and Technology (MIST), affirming that education is an investment compounding across generations.</p>
                    </div>
                    <div>
                      <p className="text-white font-serif text-lg mb-2">MF Khan Cricket Club</p>
                      <p className="text-[#E8E0D0]/70 text-sm leading-relaxed">Serving as a launchpad for players representing Andhra Pradesh, establishing deep community roots.</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* ── GENERATION III: THE LIVING LEGACY ── */}
        <section className="bg-[#1a0505] py-20 md:py-28 px-6 md:px-12 border-t border-white/5">
          <div className="max-w-4xl mx-auto space-y-16">
            <FadeIn className="text-center">
              <span className="text-accent/80 font-semibold text-[10px] tracking-widest uppercase mb-4 inline-block">Generation III</span>
              <h2 className="text-3xl md:text-5xl text-white font-light" style={{ fontFamily: '"Cormorant Garamond", serif' }}>The Living Legacy</h2>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
              <FadeIn delay={100} className="space-y-6 text-[#E8E0D0]/80 font-light leading-relaxed text-base md:text-lg" style={{ fontFamily: '"Spectral", serif' }}>
                <p>
                  The third generation did not inherit <Link href="/contact" className="text-white hover:text-accent font-medium transition-colors">MF Khan International</Link> by succession plan. He entered it by choice. Mohammed Akbar Ali Khan stepped into the house his grandfather had founded — as a professional understanding that a legacy requires active stewardship.
                </p>
                <p>
                  Under his leadership, <Link href="/contact" className="text-white hover:text-accent transition-colors">MF Khan International</Link> at <Link href="/contact" className="text-accent hover:underline">Rednam Gardens</Link> is the definitive destination for men&apos;s wedding wear in Visakhapatnam.
                </p>
              </FadeIn>

              <FadeIn delay={200} className="relative aspect-[4/5] w-full shadow-2xl border border-white/10 overflow-hidden">
                <div className="relative w-full h-full">
                  <Image
                    src="/images/archive/gen-3-akbar.jpg"
                    alt="Mohammed Akbar Ali Khan"
                    fill
                    className="object-contain"
                  />
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 px-6 py-2 bg-accent shadow-2xl rounded-sm whitespace-nowrap">
                    <p className="text-black text-[10px] md:text-xs uppercase tracking-[0.3em] font-serif font-bold">Mohammed Akbar Ali Khan</p>
                  </div>
                </div>
              </FadeIn>
            </div>

            <FadeIn delay={300}>
              <div className="border-l border-accent/30 pl-8 py-4 max-w-2xl mx-auto text-center">
                <p className="text-lg md:text-xl text-white/90 font-serif leading-relaxed italic mb-6">
                  "The scale has changed. The fabrics now include the finest cashmere once beyond reach. The clientele spans continents."
                </p>
                <p className="text-2xl text-accent font-serif">The standard has not moved.</p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ── THE HISTORICAL ARCHIVES GALLERY ── */}
        <HeritageArchiveGallery />

        {/* ── CONCLUSION ── */}
        <section className="bg-[#1a0505] py-24 md:py-32 px-6 md:px-12 border-t flex flex-col items-center justify-center border-accent/20">
          <div className="max-w-3xl mx-auto text-center space-y-12">
            <FadeIn>
              <div className="mb-10 flex justify-center">
                <Image src="/images/archive/vintage-logo.png" alt="MF Khan 1940 Vintage Logo" width={220} height={80} className="object-contain opacity-90" />
              </div>
              <h2 className="text-3xl md:text-5xl text-white font-light mb-8" style={{ fontFamily: '"Cormorant Garamond", serif' }}>1940 to Present</h2>
            </FadeIn>
            <FadeIn delay={100}>
              <p className="text-[#E8E0D0]/80 md:text-lg leading-relaxed font-light" style={{ fontFamily: '"Spectral", serif' }}>
                From a 100-rupee beginning in Kakinada to a flagship at <Link href="/contact" className="text-white hover:text-accent underline decoration-white/20">Rednam Gardens</Link>, <Link href="/contact" className="text-accent">MF Khan</Link> remains a name that stands for consistency, precision, and trust. Today, clients visit MFKhan International not just for clothing, but for complete wedding styling.
              </p>
            </FadeIn>

            <FadeIn delay={200}>
              <div className="pt-16 mt-16 border-t border-white/10">
                <h3 className="text-3xl md:text-5xl text-[#E8E0D0] font-light leading-[1.2] font-serif mb-12">
                  You are not wearing a brand. <br /><span className="text-white/60 italic text-2xl md:text-4xl mt-2 block">You are wearing a standard.</span>
                </h3>
                <div className="flex flex-col items-center">
                  <Link href="/wedding/designer-suits" className="hero-btn-secondary px-8 py-3 text-sm">Explore The Wedding Collection</Link>
                  <p className="text-accent/60 text-[10px] uppercase mt-6 tracking-[0.2em] font-semibold">Luxury ceremonial tailoring since 1940</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

      </main>
    </div>
  );
}
