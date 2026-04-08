const fs = require('fs');
const path = require('path');

const createDir = (dir) => {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
};

const writePage = (route, content) => {
  const dir = path.join(__dirname, 'src/app', route);
  createDir(dir);
  fs.writeFileSync(path.join(dir, 'page.tsx'), content);
};

writePage('wedding', `
import { FadeIn } from '@/components/animations/FadeIn';
import Link from 'next/link';
import Image from 'next/image';

export default function WeddingPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 bg-[#0a0a09]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <FadeIn className="text-center space-y-6 mb-24">
          <h1 className="text-5xl md:text-7xl font-serif font-light text-[#E8E0D0]">Wedding Wear, Designed for the Moment</h1>
          <p className="text-xl text-white/70 tracking-wide font-light max-w-2xl mx-auto" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>Tailored garments for weddings, receptions, and ceremonies.</p>
        </FadeIn>

        <FadeIn delay={200} className="max-w-3xl mx-auto text-center space-y-8 mb-32">
          <p className="text-lg leading-relaxed text-white/80 font-light" style={{ fontFamily: '"Times New Roman", serif' }}>
            A wedding demands more than just a suit; it requires a statement of legacy. Whether orchestrating an opulent traditional ceremony or a modern reception, we begin with understanding your vision. Experience our dedicated showroom gallery to try on finished masterpieces, or opt for a complete bespoke creation refined by our master tailors.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
          {[
            { title: 'Designer Suits', href: '/wedding/designer-suits', desc: 'Modern wedding suits', image: 'https://images.unsplash.com/photo-1593032465175-481ac7f401a0?auto=format&fit=crop&q=80&w=600' },
            { title: 'Indo-Western', href: '/wedding/indo-western', desc: 'Fusion garments', image: 'https://images.unsplash.com/photo-1582236166419-4820dc71f844?auto=format&fit=crop&q=80&w=600' },
            { title: 'Sherwani', href: '/wedding/sherwani', desc: 'Traditional wedding wear', image: '/images/groom-dark.png' },
            { title: 'Designer Shirts', href: '/wedding/designer-shirts', desc: 'Supporting pieces', image: 'https://images.unsplash.com/photo-1620012253295-c15bc3e65e4e?auto=format&fit=crop&q=80&w=600' }
          ].map((c, i) => (
            <FadeIn key={c.title} delay={i * 100}>
              <Link href={c.href} className="group block aspect-square relative border border-white/10 hover:border-accent/50 p-8 flex flex-col justify-end transition-all duration-700 bg-black/40 overflow-hidden">
                 <Image src={c.image} alt={c.title} fill className="object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700 group-hover:scale-110" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent z-0" />
                 <div className="relative z-10">
                   <h3 className="text-2xl font-serif text-[#E8E0D0] group-hover:-translate-y-2 transition-transform duration-500">{c.title}</h3>
                   <p className="text-xs uppercase tracking-[0.2em] text-accent mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">{c.desc}</p>
                 </div>
              </Link>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="text-center">
          <Link href="/contact" className="hero-btn-secondary">Book Wedding Consultation</Link>
        </FadeIn>
      </div>
    </div>
  );
}
`);

const weddingSubpages = [
  { slug: 'designer-suits', h1: 'Wedding Designer Suits in Visakhapatnam', intro: 'Impeccable modern tailoring for the contemporary groom.', tech: 'Super 150s wool, reinforced canvas structure, and a sharp tailored silhouette designed to elongate and elevate.' },
  { slug: 'indo-western', h1: 'Indo-Western Wedding Wear', intro: 'A masterful fusion of cultural heritage and modern tailoring lines.', tech: 'Structured cuts blending traditional embroidery with the precision of a bespoke suit. Jacquard and silk blends.' },
  { slug: 'sherwani', h1: 'Wedding Sherwanis in Visakhapatnam', intro: 'The pinnacle of traditional elegance.', tech: 'Heavy silks, velvet accents, structured shoulder lines, and intricate hand-embroidery built on a tailored foundation.' },
  { slug: 'designer-shirts', h1: 'Designer Wedding Shirts', intro: 'The fundamental layer of luxury.', tech: 'Egyptian cottons, concealed plackets, wing collar mastery, and French cuffs designed for the perfect break.' }
];

weddingSubpages.forEach(p => {
  writePage('wedding/' + p.slug, `
import { FadeIn } from '@/components/animations/FadeIn';
import Link from 'next/link';

export default function Wedding${p.slug.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join('')}Page() {
  return (
    <div className="min-h-screen pt-40 pb-24 bg-[#0a0a09]">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <FadeIn className="text-center space-y-6 mb-24">
          <h1 className="text-4xl md:text-6xl font-serif font-light text-[#E8E0D0]">${p.h1}</h1>
          <p className="text-xl text-accent font-serif italic">${p.intro}</p>
        </FadeIn>

        <FadeIn delay={200} className="space-y-16 border-l border-white/10 pl-8 md:pl-12">
          <section className="space-y-4">
            <h2 className="text-xs uppercase tracking-[0.3em] text-accent font-bold">Technical Specifications</h2>
            <p className="text-base text-white/70 leading-relaxed font-light tracking-wide" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
              ${p.tech}
            </p>
          </section>
          
          <section className="space-y-4">
            <h2 className="text-xs uppercase tracking-[0.3em] text-accent font-bold">The Experience</h2>
            <p className="text-base text-white/70 leading-relaxed font-light tracking-wide" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
              Explore our showroom gallery to try on completed silhouettes, allowing you to gauge the exact drape and fit. Alternatively, start from an unstitched length of fabric and experience our comprehensive bespoke process from the ground up.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xs uppercase tracking-[0.3em] text-accent font-bold">Personalization</h2>
            <p className="text-base text-white/70 leading-relaxed font-light tracking-wide" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
              Every garment becomes inherently yours. Select your inner linings, dictate the lapel width, choose contrast threading, and embed a discrete monogram inside the jacket.
            </p>
          </section>
        </FadeIn>

        <FadeIn delay={400} className="mt-24 pt-16 border-t border-white/5 flex justify-center">
          <Link href="/contact" className="hero-btn-secondary">Book Consultation</Link>
        </FadeIn>
      </div>
    </div>
  );
}
  `);
});

// FORMALS
writePage('formals', `
import { FadeIn } from '@/components/animations/FadeIn';
import Link from 'next/link';
import Image from 'next/image';

export default function FormalsPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 bg-[#0a0a09]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <FadeIn className="text-center space-y-6 mb-24">
          <h1 className="text-5xl md:text-7xl font-serif font-light text-[#E8E0D0]">Formal Wear, Tailored for Precision</h1>
          <p className="text-xl text-white/70 tracking-wide font-light max-w-2xl mx-auto" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>Structured garments for professionals leading the room.</p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-32">
          {[
            { title: 'Business Suits', href: '/formals/business-suits', desc: 'The authoritative uniform', image: 'https://images.unsplash.com/photo-1594938291221-94f18cbb5660?auto=format&fit=crop&q=80&w=600' },
            { title: 'Blazers', href: '/formals/blazers', desc: 'Versatile structured elegance', image: 'https://images.unsplash.com/photo-1592878904946-b3cd8ae24097?auto=format&fit=crop&q=80&w=600' },
            { title: 'Shirts', href: '/formals/shirts', desc: 'The foundational standard', image: 'https://images.unsplash.com/photo-1521341057461-6eb5f40b07ab?auto=format&fit=crop&q=80&w=600' }
          ].map((c, i) => (
            <FadeIn key={c.title} delay={i * 100}>
              <Link href={c.href} className="group block aspect-[3/4] relative border border-white/10 hover:border-accent/50 p-8 flex flex-col justify-end transition-all duration-700 bg-black/40 overflow-hidden">
                 <Image src={c.image} alt={c.title} fill className="object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700 group-hover:scale-110" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent z-0" />
                 <div className="relative z-10">
                   <h3 className="text-3xl font-serif text-[#E8E0D0] group-hover:-translate-y-2 transition-transform duration-500">{c.title}</h3>
                   <p className="text-xs uppercase tracking-[0.2em] text-accent mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">{c.desc}</p>
                 </div>
              </Link>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center mb-32 border-y border-white/5 py-16">
          <div className="space-y-4">
            <span className="text-accent italic font-serif text-2xl">01. Measurement</span>
            <p className="text-white/60 text-sm tracking-wide">Over 30 precise metrics capturing your unique framework.</p>
          </div>
          <div className="space-y-4">
            <span className="text-accent italic font-serif text-2xl">02. Fitting</span>
            <p className="text-white/60 text-sm tracking-wide">Structured trials to ensure the drape communicates authority.</p>
          </div>
          <div className="space-y-4">
            <span className="text-accent italic font-serif text-2xl">03. Finishing</span>
            <p className="text-white/60 text-sm tracking-wide">Hand-stitched details resulting in immaculate presentation.</p>
          </div>
        </FadeIn>

        <FadeIn className="text-center">
          <Link href="/contact" className="hero-btn-secondary">Schedule Consultation</Link>
        </FadeIn>
      </div>
    </div>
  );
}
`);

const formalSubpages = [
  { slug: 'business-suits', h1: 'Business Suits in Visakhapatnam', intro: 'Designed for the boardroom. Engineered for confidence.', tech: 'Half-canvas and full-canvas construction options depending on the drape required. We source breathable wools (Super 120s to Super 180s) to guarantee resilience.', fit: 'Available in modern Tailored Fit for a sharp outline, or Classic Fit for traditional corporate environments. We actively adjust for shoulder slopes and posture.' },
  { slug: 'blazers', h1: 'Tailored Blazers', intro: 'Bridging the definitive line between smart and casual.', tech: 'Unstructured or lightly padded shoulders, patch pockets, and textured fabrics such as hopsack, linen blends, and lightweight tweed.', fit: 'Engineered for a Slim or Tailored silhouette that pairs effortlessly with odd trousers or denim.' },
  { slug: 'shirts', h1: 'Bespoke Formal Shirts', intro: 'The invisible armor of the modern executive.', tech: 'Two-ply cotton, genuine mother-of-pearl buttons, and structured fused or unfused collars depending on your neckwear preference.', fit: 'Drafted specifically to your torso. We ensure the armhole sits high for mobility and the waist is darted to eliminate excess fabric.' }
];

formalSubpages.forEach(p => {
  writePage('formals/' + p.slug, `
import { FadeIn } from '@/components/animations/FadeIn';
import Link from 'next/link';

export default function Formals${p.slug.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join('')}Page() {
  return (
    <div className="min-h-screen pt-40 pb-24 bg-[#0a0a09]">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <FadeIn className="text-center space-y-6 mb-24">
          <h1 className="text-4xl md:text-6xl font-serif font-light text-[#E8E0D0]">${p.h1}</h1>
          <p className="text-xl text-accent font-serif italic">${p.intro}</p>
        </FadeIn>

        <FadeIn delay={200} className="space-y-16 border-l border-white/10 pl-8 md:pl-12">
          <section className="space-y-4">
            <h2 className="text-xs uppercase tracking-[0.3em] text-accent font-bold">Technical Depth</h2>
            <p className="text-base text-white/70 leading-relaxed font-light tracking-wide" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
              ${p.tech}
            </p>
          </section>
          
          <section className="space-y-4">
            <h2 className="text-xs uppercase tracking-[0.3em] text-accent font-bold">The Fit & Architecture</h2>
            <p className="text-base text-white/70 leading-relaxed font-light tracking-wide" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
              ${p.fit}
            </p>
          </section>
        </FadeIn>

        <FadeIn delay={400} className="mt-24 pt-16 border-t border-white/5 flex justify-center">
          <Link href="/contact" className="hero-btn-secondary">Book Consultation</Link>
        </FadeIn>
      </div>
    </div>
  );
}
  `);
});

// CUSTOM TAILORING
writePage('custom-tailoring', `
import { FadeIn } from '@/components/animations/FadeIn';
import Link from 'next/link';

export default function CustomTailoringPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 bg-[#0a0a09]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <FadeIn className="text-center space-y-6 mb-32">
          <h1 className="text-5xl md:text-7xl font-serif font-light text-[#E8E0D0]">Custom Tailoring, Defined by Precision</h1>
        </FadeIn>

        <div className="space-y-40">
          {/* Section 1 */}
          <FadeIn className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
             <div className="md:col-span-5 relative aspect-[4/5] bg-white/5 p-8 flex items-center justify-center">
                <span className="text-9xl text-white/5 font-serif absolute -left-10">01</span>
                <h2 className="text-3xl font-serif text-[#E8E0D0] relative z-10">Fabric Selection</h2>
             </div>
             <div className="md:col-span-7 space-y-6">
                <p className="text-xl text-accent font-serif italic">The foundation of every masterpiece.</p>
                <div className="space-y-4 text-white/70 font-light leading-relaxed">
                  <p>Our library holds exclusive imported suiting fabrics directly from world-renowned mills. From Italian wool blends, crisp linens, and terry rayons to rich velvets, intricate jacquards, and pure silks.</p>
                  <p className="text-white border-l-2 border-accent pl-4 italic">→ The fabric is chosen first; the design is built after.</p>
                </div>
             </div>
          </FadeIn>

          {/* Section 2 */}
          <FadeIn className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
             <div className="md:col-span-7 space-y-6 order-2 md:order-1">
                <p className="text-xl text-accent font-serif italic">Architecture for the individual.</p>
                <div className="space-y-4 text-white/70 font-light leading-relaxed">
                  <p>We do not believe in a one-size template. Whether you demand a razor-sharp slim fit, a balanced tailored fit, or a traditional classic fit, the garment is engineered around your frame.</p>
                  <ul className="list-disc pl-5 space-y-2 text-sm">
                    <li>Intelligent posture adjustments (compensating for dropped shoulders, chest prominence, waist suppression).</li>
                    <li>Trial-based structural corrections before final assembly.</li>
                    <li>The delicate balance between a structured silhouette and absolute mobility comfort.</li>
                  </ul>
                </div>
             </div>
             <div className="md:col-span-5 relative aspect-[4/5] bg-white/5 p-8 flex items-center justify-center order-1 md:order-2">
                <span className="text-9xl text-white/5 font-serif absolute -right-10">02</span>
                <h2 className="text-3xl font-serif text-[#E8E0D0] relative z-10 text-right">Fit Customization</h2>
             </div>
          </FadeIn>

          {/* Section 3 */}
          <FadeIn className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
             <div className="md:col-span-5 relative aspect-[4/5] bg-white/5 p-8 flex items-center justify-center">
                <span className="text-9xl text-white/5 font-serif absolute -left-10">03</span>
                <h2 className="text-3xl font-serif text-[#E8E0D0] relative z-10">Design Customization</h2>
             </div>
             <div className="md:col-span-7 space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                  <div className="space-y-2">
                    <h4 className="text-accent uppercase tracking-[0.2em] text-xs font-bold">For Suits</h4>
                    <ul className="text-sm text-white/60 space-y-1">
                      <li>Lapels (Notch, Peak, Shawl)</li>
                      <li>Button Stance Adjustments</li>
                      <li>Vent Styles</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-accent uppercase tracking-[0.2em] text-xs font-bold">For Shirts</h4>
                    <ul className="text-sm text-white/60 space-y-1">
                      <li>Collar Styles</li>
                      <li>Cuff Designs</li>
                      <li>Placket Types</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-accent uppercase tracking-[0.2em] text-xs font-bold">For Ethnic</h4>
                    <ul className="text-sm text-white/60 space-y-1">
                      <li>Neckline Drapes</li>
                      <li>Sleeve Architecture</li>
                      <li>Overall Silhouette</li>
                    </ul>
                  </div>
                </div>
             </div>
          </FadeIn>

          {/* Section 4 */}
          <FadeIn className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
             <div className="md:col-span-7 space-y-6 order-2 md:order-1">
                <div className="space-y-4 text-white/70 font-light leading-relaxed">
                  <p>True luxury whispers. We offer custom monograms, subtle contrast stitching, exclusive horn or pearl buttons, sophisticated pocket styles, and dramatic inner jacket linings.</p>
                  <p className="text-accent text-2xl font-serif italic pt-4">→ "Your Mark in Gold."</p>
                </div>
             </div>
             <div className="md:col-span-5 relative aspect-[4/5] bg-white/5 p-8 flex items-center justify-center order-1 md:order-2">
                <span className="text-9xl text-white/5 font-serif absolute -right-10">04</span>
                <h2 className="text-3xl font-serif text-[#E8E0D0] relative z-10 text-right">Detailing & Personalization</h2>
             </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
`);

const customSubpages = [
  { slug: 'international-fabrics', h1: 'International Suiting Fabrics', tech: 'A deep dive into our archive. We import Super 120s – Super 180s wools from the finest mills across Italy and the UK. Feel the breathability of pure linen and the unmatched drape of our silk and velvet blends.' },
  { slug: 'fittings', h1: 'The Fitting Process', tech: 'Precision is iterative. Your first visit maps the framework. The basted fitting allows you to trial the skeleton of the suit, giving us the opportunity to correct balance, pitch the sleeves, and refine waist suppression before final assembly.' },
  { slug: 'hand-work', h1: 'Master Hand Work', tech: 'Machines provide speed; hands provide soul. The rolling of the lapel, the attachment of the collar, and the finishing of the buttonholes are all executed by hand, giving your garment life, flexibility, and memory.' }
];

customSubpages.forEach(p => {
  writePage('custom-tailoring/' + p.slug, `
import { FadeIn } from '@/components/animations/FadeIn';
import Link from 'next/link';

export default function Custom${p.slug.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join('')}Page() {
  return (
    <div className="min-h-screen pt-40 pb-24 bg-[#0a0a09]">
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center space-y-16">
        <FadeIn className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-serif font-light text-[#E8E0D0]">${p.h1}</h1>
        </FadeIn>

        <FadeIn delay={200} className="w-16 h-px bg-accent/50 mx-auto" />

        <FadeIn delay={300} className="space-y-8">
          <p className="text-xl text-white/80 leading-relaxed font-light tracking-wide max-w-2xl mx-auto" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
            ${p.tech}
          </p>
        </FadeIn>

        <FadeIn delay={400} className="pt-24 border-t border-white/5">
          <Link href="/contact" className="hero-btn-secondary">Explore the Craft</Link>
        </FadeIn>
      </div>
    </div>
  );
}
  `);
});

console.log("Pages generated successfully!");
