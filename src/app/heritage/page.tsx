"use client";

import { Header } from '@/components/navigation/Header';
import { Footer } from '@/components/navigation/Footer';
import Image from 'next/image';
import { FadeIn } from '@/components/animations/FadeIn';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

/* ─── Horizontal Scroll Section ─── */
const technicalCards = [
  {
    title: 'Pattern Drafting',
    description: 'Creating individualized patterns based on body structure, posture, and movement — no two are alike.',
  },
  {
    title: 'Fabric Behaviour',
    description: 'Working with wool, cotton, silk, and blended textiles — each requiring different handling and structuring techniques.',
  },
  {
    title: 'Canvas Construction',
    description: 'Building internal structure for jackets and suits to ensure shape retention and longevity through genuine craftsmanship.',
  },
  {
    title: 'Balance & Proportion',
    description: 'Ensuring symmetry across shoulders, chest, waist, and fall — the invisible architecture of a great garment.',
  },
  {
    title: 'Hand Finishing',
    description: 'Precision stitching, edge finishing, and detailing that define the final garment and set it apart from the ordinary.',
  },
];

const timelineEvents = [
  { year: '1940', title: 'Foundation', text: 'MFKhan International is established with a singular focus — mastering the craft of tailoring at its deepest level.' },
  { year: '1960s', title: 'Refinement', text: 'Techniques are refined across garment types. Hand-drafted patterns become the cornerstone of the brand\'s identity.' },
  { year: '1980s', title: 'Expansion', text: 'Growing recognition in Visakhapatnam. The second generation begins learning the craft, preserving every method.' },
  { year: '2000s', title: 'Evolution', text: 'Modern silhouettes and contemporary fits are introduced while the foundational techniques remain unchanged.' },
  { year: 'Today', title: 'Continuity', text: 'Decades of mastery now serve a new generation of clients who seek precision, consistency, and the confidence of a great fit.' },
];

const testimonials = [
  { quote: 'The consistency of fit over the years is what keeps me coming back. No other tailor has come close.', name: 'Ramesh K.', occasion: 'Wedding Sherwani' },
  { quote: 'I\'ve recommended MFKhan to every colleague. The precision is unmistakable.', name: 'Anil V.', occasion: 'Corporate Suits' },
  { quote: 'Three generations of my family have trusted MFKhan. The quality never wavers.', name: 'Suresh M.', occasion: 'Formal Wear' },
  { quote: 'What sets them apart is the attention to how the garment actually moves with you.', name: 'Priya T.', occasion: 'Reception Outfit' },
  { quote: 'The patience they bring to every fitting session is extraordinary. Truly premium service.', name: 'Venkat R.', occasion: 'Wedding Suit' },
  { quote: 'Every stitch reflects decades of expertise. MFKhan is in a league of their own.', name: 'Kiran D.', occasion: 'Anniversary Occasion' },
];

function HorizontalScrollSection() {
  const [activeCard, setActiveCard] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleWheel = (e: WheelEvent) => {
      const container = containerRef.current;
      if (!container) return;
      const rect = section.getBoundingClientRect();
      if (rect.top <= 0 && rect.bottom >= window.innerHeight) {
        e.preventDefault();
        container.scrollLeft += e.deltaY;
        const cardWidth = container.scrollWidth / technicalCards.length;
        const idx = Math.round(container.scrollLeft / cardWidth);
        setActiveCard(Math.min(Math.max(idx, 0), technicalCards.length - 1));
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-[#4c0013] pt-8 pb-32 overflow-hidden">
      {/* Section Header */}
      <FadeIn className="text-center mb-16 px-6">
        <span className="gold-text uppercase tracking-[0.4em] text-[10px]" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>Technical Mastery</span>
        <h2 className="text-4xl md:text-6xl text-white font-light mt-4" style={{ fontFamily: '"Playfair Display", serif' }}>
          The Discipline Behind the Craft
        </h2>
        <p className="text-white/50 mt-6 max-w-xl mx-auto text-sm" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
          True tailoring is a discipline that goes far beyond measurements. Each step requires not just skill, but experience developed over years of practice.
        </p>
      </FadeIn>

      {/* Horizontal Scroll Cards */}
      <div
        ref={containerRef}
        className="flex gap-8 overflow-x-auto scrollbar-hide px-12 pb-4 snap-x snap-mandatory"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {technicalCards.map((card, idx) => (
          <div
            key={idx}
            onMouseEnter={() => setActiveCard(idx)}
            className="snap-center flex-shrink-0 w-[360px] border border-white/10 bg-white/2 p-10 transition-all duration-700 cursor-default"
            style={{
              opacity: activeCard === idx ? 1 : 0.4,
              transform: activeCard === idx ? 'scale(1.03)' : 'scale(1)',
              background: activeCard === idx ? 'rgba(255,255,255,0.04)' : 'transparent',
            }}
          >
            <span className="text-[10px] uppercase tracking-[0.5em] text-accent mb-6 block" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
              0{idx + 1}
            </span>
            <div className="w-10 h-[0.5px] bg-accent mb-8" />
            <h3 className="text-2xl text-white font-light mb-6" style={{ fontFamily: '"Playfair Display", serif' }}>
              {card.title}
            </h3>
            <p className="text-white/60 text-sm leading-relaxed" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
              {card.description}
            </p>
          </div>
        ))}
      </div>

      {/* Progress dots */}
      <div className="flex justify-center gap-3 mt-10">
        {technicalCards.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              setActiveCard(idx);
              if (containerRef.current) {
                containerRef.current.scrollLeft = idx * 376;
              }
            }}
            className="transition-all duration-300"
            style={{
              width: activeCard === idx ? '24px' : '6px',
              height: '2px',
              background: activeCard === idx ? 'hsl(var(--accent))' : 'rgba(255,255,255,0.2)',
            }}
          />
        ))}
      </div>
    </section>
  );
}

function TimelineSection() {
  return (
    <section className="bg-[#4c0013] py-32 px-6 md:px-12 overflow-hidden">
      <FadeIn className="text-center mb-24">
        <span className="gold-text uppercase tracking-[0.4em] text-[10px]" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>Generational Mastery</span>
        <h2 className="text-4xl md:text-6xl text-white font-light mt-4" style={{ fontFamily: '"Playfair Display", serif' }}>
          Knowledge Passed, Not Replaced
        </h2>
      </FadeIn>

      <div className="max-w-4xl mx-auto relative">
        {/* Center line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-white/10 -translate-x-1/2" />

        {timelineEvents.map((event, idx) => {
          const isLeft = idx % 2 === 0;
          return (
            <FadeIn key={idx} delay={idx * 150} className="flex items-start mb-20">
              {/* Left content */}
              <div className="flex-1 pr-12" style={{ textAlign: 'right' }}>
                {isLeft ? (
                  <>
                    <h3 className="text-xl text-white font-light mb-2" style={{ fontFamily: '"Playfair Display", serif' }}>{event.title}</h3>
                    <p className="text-white/50 text-sm leading-relaxed" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>{event.text}</p>
                  </>
                ) : <div />}
              </div>

              {/* Year marker */}
              <div className="flex-shrink-0 flex flex-col items-center">
                <div className="w-3 h-3 rounded-full border border-accent bg-[#4c0013] z-10" />
                <span className="gold-text text-xs mt-3 tracking-[0.2em]" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>{event.year}</span>
              </div>

              {/* Right content */}
              <div className="flex-1 pl-12" style={{ textAlign: 'left' }}>
                {!isLeft ? (
                  <>
                    <h3 className="text-xl text-white font-light mb-2" style={{ fontFamily: '"Playfair Display", serif' }}>{event.title}</h3>
                    <p className="text-white/50 text-sm leading-relaxed" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>{event.text}</p>
                  </>
                ) : <div />}
              </div>
            </FadeIn>
          );
        })}
      </div>
    </section>
  );
}

function TestimonialStrip() {
  const [paused, setPaused] = useState(false);
  const doubled = [...testimonials, ...testimonials];

  return (
    <section className="bg-[#4c0013] py-24 overflow-hidden border-y border-white/5">
      <FadeIn className="text-center mb-16 px-6">
        <span className="gold-text uppercase tracking-[0.4em] text-[10px]" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>Local Authority</span>
        <h2 className="text-4xl md:text-5xl text-white font-light mt-4" style={{ fontFamily: '"Playfair Display", serif' }}>
          A Trusted Name in Visakhapatnam
        </h2>
      </FadeIn>

      <div
        className="relative"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div
          className="flex gap-8 w-max"
          style={{
            animation: `scrollLeft 40s linear infinite`,
            animationPlayState: paused ? 'paused' : 'running',
          }}
        >
          {doubled.map((t, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-80 border border-white/10 p-8 bg-white/2 transition-all duration-500 hover:border-accent/30 hover:scale-[1.02]"
            >
              <p className="text-white/70 text-sm italic leading-relaxed mb-8" style={{ fontFamily: '"Playfair Display", serif' }}>
                "{t.quote}"
              </p>
              <div className="border-t border-white/10 pt-4 space-y-1">
                <p className="text-white text-[10px] uppercase tracking-[0.3em]" style={{ fontFamily: '"Playfair Display", serif' }}>{t.name}</p>
                <p className="gold-text text-xs italic" style={{ fontFamily: '"Gwendolyn", cursive' }}>{t.occasion}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function HeritagePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#4c0013]">
      <Header />

      <main className="flex-grow">

        {/* ── SECTION 1: HERO ── */}
        <section className="h-screen flex items-center justify-center relative overflow-hidden">
                    <Image src="/images/heritage-rolls-bg.jpg" alt="Heritage background" fill quality={100} className="object-cover" priority />
          {/* Grain texture */}
          <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")', backgroundSize: '200px' }} />
          {/* Vignette */}
          <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.85) 100%)' }} />
          {/* Base overlay */}
          <div className="absolute inset-0 bg-black/55" />

          <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
            <FadeIn>
                            <h1 className="text-white italic" style={{ fontFamily: '"Times New Roman", serif', fontSize: 'clamp(28px, 3.5vw, 52px)', letterSpacing: '0.06em', fontWeight: 400 }}>
                Heritage Of Mfkhan
              </h1>
            </FadeIn>
            <FadeIn delay={300}>
              <div className="w-16 h-[0.5px] bg-accent mx-auto my-8" />
            </FadeIn>
            <FadeIn delay={600}>
              <p className="text-white/70 text-base md:text-lg leading-relaxed max-w-xl mx-auto" style={{ fontFamily: '"Playfair Display", serif', fontWeight: 300 }}>
                A Legacy of Custom Tailoring Since 1940
              </p>
            </FadeIn>
            <FadeIn delay={900}>
              <p className="text-white/45 text-sm leading-relaxed max-w-lg mx-auto mt-6" style={{ fontFamily: 'Helvetica, Arial, sans-serif', fontWeight: 300 }}>
                MFKhan International stands as one of the most established names in custom tailoring in Visakhapatnam, built on decades of precision cutting, garment construction expertise, and an uncompromising commitment to fit and finish.
              </p>
            </FadeIn>
            <FadeIn delay={1200}>
              <div className="mt-12">
                <Link href="/contact" className="hero-btn-secondary">Book a Consultation</Link>
              </div>
            </FadeIn>
          </div>

          {/* Scroll prompt */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3 animate-pulse-slow">

            <div className="w-[1px] h-12 bg-gradient-to-b from-white/30 to-transparent" />
          </div>
        </section>

        {/* ── SECTION 2: ORIGIN ── */}
        <section className="bg-[#4c0013] py-32 px-6 md:px-12 overflow-hidden">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            {/* Left: image */}
            <FadeIn direction="up" className="relative">
              {/* "Since 1940" watermark */}
              <div className="absolute -top-8 -left-4 text-white/[0.04] font-bold leading-none select-none pointer-events-none z-0" style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(80px, 12vw, 160px)' }}>
                1940
              </div>
              <div className="relative aspect-[4/5] overflow-hidden z-10">
                <Image src="https://picsum.photos/seed/mfk-origin/900/1200" alt="Origin craft" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a09] via-transparent to-transparent" />
              </div>
            </FadeIn>

            {/* Right: text */}
            <div className="space-y-10">
              <FadeIn>
                <span className="gold-text uppercase tracking-[0.4em] text-[10px]" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>Origin</span>
                <h2 className="text-4xl md:text-5xl text-white font-light mt-4 leading-tight" style={{ fontFamily: '"Playfair Display", serif' }}>
                  Built on Skill,<br />Not Scale
                </h2>
              </FadeIn>
              <FadeIn delay={200}>
                <p className="text-white/70 leading-relaxed" style={{ fontFamily: '"Playfair Display", serif' }}>
                  Founded in 1940, MFKhan International began with a singular focus — mastering the craft of tailoring at its deepest level. In an era where garments were constructed by hand and standards were uncompromising, the foundation of the brand was built on:
                </p>
              </FadeIn>
              <FadeIn delay={300}>
                <ul className="space-y-4">
                  {['Hand-drafted patterns', 'Precise fabric cutting techniques', 'Structured garment construction', 'Meticulous finishing'].map((item, i) => (
                    <li key={i} className="flex items-center gap-4 text-white/60 text-sm" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
                      <div className="w-4 h-[0.5px] bg-accent flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </FadeIn>
              <FadeIn delay={400}>
                <p className="text-white/40 text-sm leading-relaxed italic border-l border-accent/40 pl-6" style={{ fontFamily: '"Playfair Display", serif' }}>
                  "Every garment must meet a standard, not a timeline."
                </p>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* ── SECTION 3: TECHNICAL DEPTH (Horizontal Scroll) ── */}
        <HorizontalScrollSection />

        {/* ── SECTION 4: TIMELINE ── */}
        <TimelineSection />

        {/* ── SECTION 5: HUMAN ELEMENT ── */}
        <section className="relative bg-[#4c0013] py-48 px-6 md:px-12 overflow-hidden">
          <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")', backgroundSize: '200px' }} />
          <div className="max-w-3xl mx-auto text-center space-y-16 relative z-10">
            <FadeIn>
              <span className="gold-text uppercase tracking-[0.4em] text-[10px]" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>The Human Element</span>
            </FadeIn>
            <FadeIn delay={200}>
              <h2 className="text-4xl md:text-6xl text-white font-light leading-tight" style={{ fontFamily: '"Playfair Display", serif' }}>
                The Craft Demands More Than Skill
              </h2>
            </FadeIn>
            <FadeIn delay={400}>
              <p className="text-white/60 text-lg leading-relaxed" style={{ fontFamily: '"Playfair Display", serif' }}>
                Tailoring at this level is not mechanical. It is deeply personal.
              </p>
            </FadeIn>
            <FadeIn delay={500}>
              <div className="space-y-6">
                {[
                  { word: 'patience', desc: 'to refine every detail' },
                  { word: 'discipline', desc: 'to maintain consistency' },
                  { word: 'precision', desc: 'to notice what others miss' },
                ].map((item, i) => (
                  <FadeIn key={i} delay={600 + i * 150}>
                    <div className="flex items-center justify-center gap-4">
                      <span className="gold-text italic text-xl" style={{ fontFamily: '"Gwendolyn", cursive' }}>{item.word}</span>
                      <span className="text-white/30 text-sm" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>— {item.desc}</span>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </FadeIn>
            <FadeIn delay={1000}>
              <div className="space-y-2 text-white/40 text-sm" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
                <p>Garments are not rushed.</p>
                <p>They are worked on until they meet the expected standard.</p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ── SECTION 6: TESTIMONIALS (Infinite scroll strip) ── */}
        <TestimonialStrip />

        {/* ── SECTION 7: MODERN CONTINUITY ── */}
        <section className="bg-[#4c0013] py-32 px-6 md:px-12">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-10">
              <FadeIn>
                <span className="gold-text uppercase tracking-[0.4em] text-[10px]" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>Modern Continuity</span>
                <h2 className="text-4xl md:text-5xl text-white font-light mt-4 leading-tight" style={{ fontFamily: '"Playfair Display", serif' }}>
                  Adapting Without<br />Compromising
                </h2>
              </FadeIn>
              <FadeIn delay={200}>
                <p className="text-white/70 leading-relaxed" style={{ fontFamily: '"Playfair Display", serif' }}>
                  While styles, fabrics, and client preferences have evolved, the core principles of tailoring at MFKhan International remain unchanged.
                </p>
              </FadeIn>
              <FadeIn delay={300}>
                <ul className="space-y-4">
                  {['Accurate pattern making', 'Structured construction', 'Detailed finishing'].map((item, i) => (
                    <li key={i} className="flex items-center gap-4 text-white/60 text-sm" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
                      <div className="w-4 h-[0.5px] bg-accent flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </FadeIn>
              <FadeIn delay={400}>
                <div className="grid grid-cols-2 gap-8 pt-6 border-t border-white/10">
                  {[{ num: '80+', label: 'Years of Heritage' }, { num: '15k+', label: 'Garments Crafted' }].map((stat, i) => (
                    <div key={i}>
                      <p className="gold-text text-4xl font-light" style={{ fontFamily: '"Playfair Display", serif' }}>{stat.num}</p>
                      <p className="text-white/40 text-[10px] uppercase tracking-[0.3em] mt-2" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>{stat.label}</p>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>

            <FadeIn delay={200} className="relative aspect-[4/5] overflow-hidden">
              <Image src="https://picsum.photos/seed/mfk-modern/900/1200" alt="Modern tailoring" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a09] via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 border-t border-white/10 pt-6">
                <p className="text-white/50 text-xs uppercase tracking-[0.3em] italic" style={{ fontFamily: '"Playfair Display", serif' }}>
                  The process evolves. The standard does not.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ── SECTION 8: A DESTINATION FOR TAILORING (NEW) ── */}
        <section className="bg-[#4c0013] py-32 px-6 md:px-12 border-t border-white/5">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-20">
             <div className="flex-1 space-y-8">
                <FadeIn>
                  <span className="gold-text uppercase tracking-[0.4em] text-[10px]" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>Scale & Authority</span>
                  <h2 className="text-4xl md:text-5xl text-white font-light mt-4" style={{ fontFamily: '"Playfair Display", serif' }}>
                    A Destination for Tailoring
                  </h2>
                </FadeIn>
                <FadeIn delay={200}>
                  <p className="text-white/70 text-lg leading-relaxed max-w-2xl" style={{ fontFamily: '"Playfair Display", serif' }}>
                    Built on a legacy that began in 1940, MFKhan International today operates from a 9,000 sq. ft. space in Visakhapatnam — bringing together design, selection, and in-house tailoring under one roof.
                  </p>
                </FadeIn>
                <FadeIn delay={400}>
                  <div className="pt-6">
                    <Link href="/contact" className="hero-btn-secondary">Visit the Showroom</Link>
                  </div>
                </FadeIn>
             </div>
             <div className="flex-1 relative aspect-video overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80&w=1200" 
                  alt="MFKhan Experience" 
                  fill 
                  className="object-cover"
                />
             </div>
          </div>
        </section>

        {/* ── SECTION 9: CLOSING STATEMENT ── */}
        <section className="bg-[#4c0013] py-40 px-6 md:px-12 border-t border-white/5">
          <div className="max-w-4xl mx-auto text-center space-y-16">
            <FadeIn>
              <span className="text-white/20 uppercase tracking-[0.6em] text-[9px]" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>A Standard Built Over Time</span>
            </FadeIn>
            <FadeIn delay={200}>
              <h2 className="text-4xl md:text-7xl text-white font-light leading-tight" style={{ fontFamily: '"Playfair Display", serif' }}>
                MFKhan International<br />is the result of decades<br />of focused craftsmanship.
              </h2>
            </FadeIn>
            <FadeIn delay={400}>
              <div className="space-y-3 text-white/30 text-sm" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
                <p>Not built through scale.</p>
                <p>Not defined by trends.</p>
              </div>
            </FadeIn>
            <FadeIn delay={600}>
              <div className="flex justify-center gap-16 text-white/50 text-xs uppercase tracking-[0.4em]" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
                {['Technical Precision', 'Consistent Practice', 'Proper Craftsmanship'].map((item, i) => (
                  <span key={i}>{item}</span>
                ))}
              </div>
            </FadeIn>
            <FadeIn delay={800}>
              <p className="text-white/20 text-sm italic" style={{ fontFamily: '"Playfair Display", serif' }}>
                Every garment carries that legacy forward.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* ── SECTION 9: CTA ── */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <Image src="/heritage-hero.jpg" alt="CTA background" fill quality={100} className="object-cover scale-110" />
          <div className="absolute inset-0 bg-black/65" />
          <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.7) 100%)' }} />

          <div className="relative z-10 text-center px-6 space-y-10">
            <FadeIn>
              <span className="gold-text uppercase tracking-[0.5em] text-[10px]" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>Experience the Craft</span>
            </FadeIn>
            <FadeIn delay={200}>
              <h2 className="text-4xl md:text-6xl text-white font-light" style={{ fontFamily: '"Playfair Display", serif' }}>
                Experience the Craft<br />Firsthand
              </h2>
            </FadeIn>
            <FadeIn delay={400}>
              <p className="text-white/60 max-w-lg mx-auto text-sm leading-relaxed" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
                Visit our store in Visakhapatnam to understand the level of detail, precision, and care that goes into every garment.
              </p>
            </FadeIn>
            <FadeIn delay={600}>
              <Link href="/contact" className="hero-btn-secondary">
                Book a Private Consultation
              </Link>
            </FadeIn>
          </div>
        </section>

      </main>

      <style jsx global>{`
        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
      `}</style>

      <Footer />
    </div>
  );
}

