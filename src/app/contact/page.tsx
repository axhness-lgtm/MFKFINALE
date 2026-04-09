
"use client";

import { Header } from '@/components/navigation/Header';
import { Footer } from '@/components/navigation/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Scissors, Mail, Phone, MapPin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useState } from 'react';
import { FadeIn } from '@/components/animations/FadeIn';
import Image from 'next/image';

export default function ContactPage() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    
    const formData = new FormData(e.currentTarget);
    const data = {
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      email: formData.get('email'),
      interest: formData.get('interest'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch('/api/inquiries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error('Failed to submit inquiry');

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
    <div className="min-h-screen flex flex-col bg-[#0a0a09]">
      <Header />
      <main className="flex-grow relative overflow-hidden flex items-center min-h-[90vh]">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/contact-hero.jpg" 
            alt="MFKhan Showroom" 
            fill 
            priority
            className="object-cover opacity-30 brightness-[0.7] contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a09] via-transparent to-[#0a0a09]" />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 py-32 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <FadeIn className="space-y-12">
              <div className="space-y-6">
                <span className="gold-text font-medium tracking-[0.3em] uppercase text-sm">Join the Elite</span>
                <h1 className="text-5xl md:text-7xl font-serif font-light text-white drop-shadow-2xl">Book Your <br /><span className="italic gold-text">Consultation</span></h1>
                <p className="text-xl text-[#E8E0D0]/80 leading-relaxed font-light">
                  Ready to begin your custom-tailored journey? Fill out the inquiry form and our concierge team will curate a fitting experience for you.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex gap-6 items-start group">
                  <div className="w-12 h-12 rounded-full brown-gradient flex items-center justify-center shrink-0 border border-accent/20 group-hover:scale-110 transition-transform">
                    <MapPin className="text-white w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl font-bold mb-1 text-white">Visit Our Atelier</h4>
                    <p className="text-[#E8E0D0]/60 font-light">10-12-1, Jail Road, Rednam Gardens, Visakhapatnam, Andhra Pradesh, 530002</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start group">
                  <div className="w-12 h-12 rounded-full brown-gradient flex items-center justify-center shrink-0 border border-accent/20 group-hover:scale-110 transition-transform">
                    <Phone className="text-white w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl font-bold mb-1 text-white">Direct Line</h4>
                    <p className="text-[#E8E0D0]/60 font-light">+91 91821 67662</p>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={200}>
              <div className="luxury-card p-10 bg-black/40 backdrop-blur-md relative overflow-hidden border border-white/5">
                <div className="absolute top-0 right-0 p-8 opacity-[0.03]">
                  <Scissors className="w-48 h-48 rotate-45 text-white" />
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-white tracking-widest text-[10px] uppercase">First Name</Label>
                      <Input id="firstName" name="firstName" required className="bg-white/5 border-white/10 text-white h-12 rounded-none focus:border-accent" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-white tracking-widest text-[10px] uppercase">Last Name</Label>
                      <Input id="lastName" name="lastName" required className="bg-white/5 border-white/10 text-white h-12 rounded-none focus:border-accent" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-white tracking-widest text-[10px] uppercase">Email Address</Label>
                    <Input id="email" type="email" name="email" required className="bg-white/5 border-white/10 text-white h-12 rounded-none focus:border-accent" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="interest" className="text-white tracking-widest text-[10px] uppercase">Garment Interest</Label>
                    <Input id="interest" name="interest" placeholder="e.g., Wedding Suit, Tuxedo" className="bg-white/5 border-white/10 text-white h-12 rounded-none placeholder:text-white/20 focus:border-accent" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-white tracking-widest text-[10px] uppercase">Message / Details</Label>
                    <Textarea id="message" name="message" rows={5} placeholder="Tell us about the occasion or any specific requirements..." className="bg-white/5 border-white/10 text-white rounded-none placeholder:text-white/20 focus:border-accent" />
                  </div>

                  <Button type="submit" disabled={loading} className="w-full brown-gradient h-16 text-xs uppercase tracking-[0.4em] font-bold rounded-none text-white hover:brightness-110 transition-all border border-accent/20">
                      {loading ? "Transmitting..." : "Submit Inquiry"}
                  </Button>
                </form>
              </div>
            </FadeIn>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

