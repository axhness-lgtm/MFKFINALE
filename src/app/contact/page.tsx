
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

export default function ContactPage() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Inquiry Submitted",
        description: "A member of our bespoke team will contact you shortly to schedule your fitting.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-32 pb-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <div className="space-y-12">
              <div className="space-y-6">
                <span className="gold-text font-medium tracking-[0.3em] uppercase text-sm">Join the Elite</span>
                <h1 className="text-5xl md:text-7xl font-headline font-bold">Book Your <br /><span className="italic gold-text">Consultation</span></h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Ready to begin your bespoke journey? Fill out the inquiry form and our concierge team will curate a fitting experience for you.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-full violet-gradient flex items-center justify-center shrink-0">
                    <MapPin className="text-white w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-headline text-xl font-bold mb-1">Visit Our Atelier</h4>
                    <p className="text-muted-foreground">123 Tailor Street, Mayfair, London, W1S 2XL</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-full violet-gradient flex items-center justify-center shrink-0">
                    <Phone className="text-white w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-headline text-xl font-bold mb-1">Direct Line</h4>
                    <p className="text-muted-foreground">+44 20 7123 4567</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="luxury-card p-10 bg-card/40 relative overflow-hidden">
               <div className="absolute top-0 right-0 p-8 opacity-5">
                 <Scissors className="w-48 h-48 rotate-45" />
               </div>
               
               <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                   <div className="space-y-2">
                     <Label htmlFor="firstName">First Name</Label>
                     <Input id="firstName" name="firstName" required className="bg-background border-border" />
                   </div>
                   <div className="space-y-2">
                     <Label htmlFor="lastName">Last Name</Label>
                     <Input id="lastName" name="lastName" required className="bg-background border-border" />
                   </div>
                 </div>

                 <div className="space-y-2">
                   <Label htmlFor="email">Email Address</Label>
                   <Input id="email" type="email" name="email" required className="bg-background border-border" />
                 </div>

                 <div className="space-y-2">
                   <Label htmlFor="interest">Garment Interest</Label>
                   <Input id="interest" name="interest" placeholder="e.g., Wedding Suit, Tuxedo" className="bg-background border-border" />
                 </div>

                 <div className="space-y-2">
                   <Label htmlFor="message">Message / Details</Label>
                   <Textarea id="message" name="message" rows={5} placeholder="Tell us about the occasion or any specific requirements..." className="bg-background border-border" />
                 </div>

                 <Button type="submit" disabled={loading} className="w-full violet-gradient h-14 text-xl font-headline font-bold rounded-none">
                    {loading ? "Sending..." : "Submit Inquiry"}
                 </Button>
               </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
