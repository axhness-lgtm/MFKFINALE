"use client";

import { FadeIn } from '@/components/animations/FadeIn';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

export default function SherwaniMeasurementsPage() {
  return (
    <div className="min-h-screen pt-40 pb-24 bg-[#0a0a09]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <FadeIn className="text-center mb-20 space-y-4">
          <span className="text-accent text-[10px] uppercase tracking-[0.4em] font-bold">Bespoke Excellence</span>
          <h1 className="text-4xl md:text-6xl font-serif font-light text-[#E8E0D0]">Sherwani Measurement Form</h1>
          <p className="text-white/60 font-light max-w-2xl mx-auto">
            Please follow the guide below to provide accurate measurements for your custom Sherwani.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Left Side: Guide & Reference */}
          <div className="space-y-12">
            <FadeIn delay={100} className="relative aspect-[3/4] w-full bg-[#111] border border-white/5 rounded-sm overflow-hidden">
              <Image 
                src="/images/measurements/sherwani-guide.png" 
                alt="Sherwani Measurement Guide" 
                fill 
                className="object-contain p-8"
              />
            </FadeIn>

            <FadeIn delay={200} className="space-y-6">
              <h3 className="text-2xl font-serif text-[#E8E0D0]">Standard Size Reference</h3>
              <div className="border border-white/5 rounded-sm overflow-hidden bg-[#111]/50 backdrop-blur-sm">
                <Table>
                  <TableHeader className="bg-white/5">
                    <TableRow className="border-white/5 hover:bg-transparent">
                      <TableHead className="text-accent uppercase text-[10px] tracking-widest">Size</TableHead>
                      <TableHead className="text-accent uppercase text-[10px] tracking-widest">Chest</TableHead>
                      <TableHead className="text-accent uppercase text-[10px] tracking-widest">Length</TableHead>
                      <TableHead className="text-accent uppercase text-[10px] tracking-widest">Sleeve</TableHead>
                      <TableHead className="text-accent uppercase text-[10px] tracking-widest">Shoulder</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      { s: '36', c: '36', l: '38', sl: '23', sh: '17' },
                      { s: '38', c: '38', l: '39', sl: '24', sh: '18' },
                      { s: '40', c: '40', l: '40', sl: '25', sh: '19' },
                      { s: '42', c: '42', l: '41', sl: '26', sh: '20' },
                      { s: '44', c: '44', l: '42', sl: '27', sh: '21' },
                    ].map((row) => (
                      <TableRow key={row.s} className="border-white/5 hover:bg-white/[0.02] transition-colors">
                        <TableCell className="text-[#E8E0D0] font-medium">{row.s}</TableCell>
                        <TableCell className="text-white/60">{row.c}"</TableCell>
                        <TableCell className="text-white/60">{row.l}"</TableCell>
                        <TableCell className="text-white/60">{row.sl}"</TableCell>
                        <TableCell className="text-white/60">{row.sh}"</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
              <p className="text-[10px] text-white/40 italic uppercase tracking-wider">
                * All measurements are in inches. These are standard body measurements.
              </p>
            </FadeIn>
          </div>

          {/* Right Side: Form */}
          <FadeIn delay={300} className="bg-[#111]/30 backdrop-blur-md p-8 md:p-12 border border-white/5 rounded-sm space-y-12">
            {/* USER DETAILS */}
            <div className="space-y-8">
              <h3 className="text-xl font-serif text-accent border-b border-white/5 pb-4">User Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="full_name" className="text-[10px] uppercase tracking-widest text-white/60">Full Name *</Label>
                  <Input id="full_name" className="bg-transparent border-white/10 focus:border-accent transition-colors" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-[10px] uppercase tracking-widest text-white/60">Email Address *</Label>
                  <Input id="email" type="email" className="bg-transparent border-white/10 focus:border-accent transition-colors" placeholder="john@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="mobile" className="text-[10px] uppercase tracking-widest text-white/60">Mobile No *</Label>
                  <Input id="mobile" className="bg-transparent border-white/10 focus:border-accent transition-colors" placeholder="+91 00000 00000" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="order_id" className="text-[10px] uppercase tracking-widest text-white/60">Order ID (Optional)</Label>
                  <Input id="order_id" className="bg-transparent border-white/10 focus:border-accent transition-colors" placeholder="MFK-1234" />
                </div>
              </div>
            </div>

            {/* MEASUREMENTS */}
            <div className="space-y-8">
              <h3 className="text-xl font-serif text-accent border-b border-white/5 pb-4">Measurements (Inches)</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {[
                  { id: 'neck', label: 'Neck' },
                  { id: 'shoulder', label: 'Full Shoulder' },
                  { id: 'sleeves', label: 'Sleeves' },
                  { id: 'wrist', label: 'Wrist' },
                  { id: 'chest', label: 'Chest' },
                  { id: 'stomach', label: 'Stomach' },
                  { id: 'waist', label: 'Waist' },
                  { id: 'hips', label: 'Hips' },
                  { id: 'length', label: 'Sherwani Length' },
                  { id: 'inseam', label: 'Trouser Inseam' },
                  { id: 'height', label: 'Your Height' },
                ].map((field) => (
                  <div key={field.id} className="space-y-2">
                    <Label htmlFor={field.id} className="text-[10px] uppercase tracking-widest text-white/60">{field.label}</Label>
                    <Input id={field.id} className="bg-transparent border-white/10 focus:border-accent transition-colors" placeholder='0.0"' />
                  </div>
                ))}
              </div>
              <div className="space-y-2">
                <Label htmlFor="details" className="text-[10px] uppercase tracking-widest text-white/60">Additional Details / Fitting Preferences</Label>
                <Textarea id="details" className="bg-transparent border-white/10 focus:border-accent transition-colors h-32" placeholder="Tell us about any specific preferences or structural requirements..." />
              </div>
            </div>

            <Button className="w-full h-14 bg-accent text-black font-bold uppercase tracking-[0.2em] hover:bg-white transition-colors">
              Submit Measurements
            </Button>
            <p className="text-center text-[9px] text-white/30 uppercase tracking-widest">
              Our master tailor will review these details and contact you for verification.
            </p>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
