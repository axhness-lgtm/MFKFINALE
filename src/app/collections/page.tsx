import { Header } from '@/components/navigation/Header';
import { Footer } from '@/components/navigation/Footer';

export default function CollectionsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0a0a09]">
      <Header />
      <main className="flex-grow min-h-screen flex items-center justify-center pt-32 pb-24">
        <div className="max-w-3xl mx-auto px-6 text-center animate-fade-in">
          <span className="gold-text font-bold tracking-[0.4em] uppercase text-[10px] mb-8 block">The Showcase</span>
          <h1 className="text-4xl md:text-6xl font-headline font-light mb-8 text-[#E8E0D0] leading-tight">
            Our custom tailored collections are <br className="hidden md:block" />
            <span className="gold-text italic font-normal">coming soon...</span>
          </h1>
          <div className="bg-accent/50 mx-auto mb-8" style={{ width: '55px', height: '1px' }} />
          <p className="text-lg md:text-xl text-[#E8E0D0]/70 font-light max-w-2xl mx-auto leading-relaxed">
            We are currently curating an exclusive selection of artisanal blazers and precision-tailored suits. 
            Please check back shortly to explore our sartorial legacy.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
