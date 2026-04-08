
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
