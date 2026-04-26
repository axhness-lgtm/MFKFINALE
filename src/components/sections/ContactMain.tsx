"use client";

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { useState } from 'react';
import { FadeIn } from '@/components/animations/FadeIn';

export function ContactMain() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    
    const formData = new FormData(e.currentTarget);
    const data = {
      name: `${formData.get('firstName')} ${formData.get('lastName')}`,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string || "N/A",
      interest: formData.get('interest') as string,
      message: formData.get('message') as string,
    };

    try {
      const { submitInquiry } = await import('@/lib/inquiries');
      const result = await submitInquiry(data);

      if (!result.success) throw new Error('Failed to submit inquiry');

      toast({
        title: "Inquiry Received",
        description: "Your marked place in history begins now. We will be in touch shortly.",
      });
      
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      toast({
        title: "Submission Error",
        description: "There was a problem processing your inquiry. Please try again or call us directly.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0a0a09] pt-52">
      <main className="flex-grow flex items-center justify-center py-20 px-6">
        <div className="max-w-xl w-full">
          <FadeIn className="text-center mb-8">
            <span className="gold-text font-medium tracking-[0.3em] uppercase text-[10px] mb-2 block">Direct Access</span>
            <h1 className="text-3xl md:text-4xl font-serif font-light text-white mb-6">Concierge <span className="italic gold-text">Service</span></h1>
            
            <a 
              href="https://wa.me/919988393389" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20ba59] text-white px-10 py-4 rounded-full transition-all hover:scale-105 shadow-xl shadow-green-600/20 mb-12 whitespace-nowrap"
            >
              <span className="font-bold tracking-widest uppercase text-xs">CONTACT US</span>
            </a>

            <div className="h-px bg-white/10 w-24 mx-auto mb-10" />
            <p className="text-[#E8E0D0]/40 text-[10px] uppercase tracking-[0.2em] mb-8">Or leave an inquiry below</p>
          </FadeIn>

          <FadeIn delay={200}>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Input id="firstName" name="firstName" required placeholder="FIRST NAME" className="bg-transparent border-white/10 text-white h-10 rounded-none focus:border-accent text-[10px] tracking-widest" />
                <Input id="lastName" name="lastName" required placeholder="LAST NAME" className="bg-transparent border-white/10 text-white h-10 rounded-none focus:border-accent text-[10px] tracking-widest" />
              </div>
              <Input id="email" type="email" name="email" required placeholder="EMAIL ADDRESS" className="bg-transparent border-white/10 text-white h-10 rounded-none focus:border-accent text-[10px] tracking-widest" />
              <Input id="phone" type="tel" name="phone" required placeholder="PHONE NUMBER" className="bg-transparent border-white/10 text-white h-10 rounded-none focus:border-accent text-[10px] tracking-widest" />
              <Input id="interest" name="interest" placeholder="GARMENT INTEREST" className="bg-transparent border-white/10 text-white h-10 rounded-none focus:border-accent text-[10px] tracking-widest" />
              <Textarea id="message" name="message" rows={2} placeholder="MESSAGE" className="bg-transparent border-white/10 text-white rounded-none focus:border-accent text-[10px] tracking-widest" />
              
              <Button type="submit" disabled={loading} className="w-full border border-accent/30 bg-accent/10 hover:bg-accent/20 h-12 text-[10px] uppercase tracking-[0.4em] font-bold rounded-none text-white transition-all mt-4">
                  {loading ? "SENDING..." : "SUBMIT INQUIRY"}
              </Button>
            </form>
          </FadeIn>

          <FadeIn delay={400} className="mt-12 text-center pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between gap-6">
            <div>
              <p className="text-[9px] uppercase tracking-widest text-[#E8E0D0]/30 mb-1">Direct Line</p>
              <p className="text-white text-xs font-light">+91 99883 93389</p>
            </div>
            <div>
              <p className="text-[9px] uppercase tracking-widest text-[#E8E0D0]/30 mb-1">Our Atelier</p>
              <p className="text-white text-xs font-light">Rednam Gardens, Jail Road, Vizag</p>
            </div>
          </FadeIn>
        </div>
      </main>
    </div>
  );
}
