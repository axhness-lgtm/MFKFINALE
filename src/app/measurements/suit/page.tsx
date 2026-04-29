"use client";

import { FadeIn } from '@/components/animations/FadeIn';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

export default function SuitMeasurementsPage() {
  return (
    <div className="min-h-screen pt-40 pb-24 bg-[#0a0a09]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <FadeIn className="text-center mb-20 space-y-4">
          <span className="text-accent text-[10px] uppercase tracking-[0.4em] font-bold">Architectural Precision</span>
          <h1 className="text-4xl md:text-6xl font-serif font-light text-[#E8E0D0]">Mens Suit Measurements</h1>
          <p className="text-white/60 font-light max-w-2xl mx-auto">
            Engineering the perfect silhouette requires precise data. Use this guide for your bespoke suit.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Left Side: Guide & Reference */}
          <div className="space-y-12">
            <FadeIn delay={100} className="relative aspect-[3/4] w-full bg-[#111] border border-white/5 rounded-sm overflow-hidden">
              <Image 
                src="/images/measurements/suit-guide.png" 
                alt="Suit Measurement Guide" 
                fill 
                className="object-contain p-8"
              />
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <FadeIn delay={200} className="space-y-4">
                <h3 className="text-lg font-serif text-[#E8E0D0]">Jacket Size Chart</h3>
                <div className="border border-white/5 rounded-sm overflow-hidden bg-[#111]/50">
                  <Table>
                    <TableHeader className="bg-white/5">
                      <TableRow className="border-white/5 hover:bg-transparent">
                        <TableHead className="text-accent text-[9px] uppercase">Size</TableHead>
                        <TableHead className="text-accent text-[9px] uppercase">Chest</TableHead>
                        <TableHead className="text-accent text-[9px] uppercase">Shoulder</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {['36', '38', '40', '42', '44'].map((s) => (
                        <TableRow key={s} className="border-white/5 hover:bg-white/[0.02]">
                          <TableCell className="text-[#E8E0D0] text-xs">{s}</TableCell>
                          <TableCell className="text-white/60 text-xs">{s}"</TableCell>
                          <TableCell className="text-white/60 text-xs">{parseInt(s)/2 - 1}"</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </FadeIn>

              <FadeIn delay={250} className="space-y-4">
                <h3 className="text-lg font-serif text-[#E8E0D0]">Trousers Size Chart</h3>
                <div className="border border-white/5 rounded-sm overflow-hidden bg-[#111]/50">
                  <Table>
                    <TableHeader className="bg-white/5">
                      <TableRow className="border-white/5 hover:bg-transparent">
                        <TableHead className="text-accent text-[9px] uppercase">Size</TableHead>
                        <TableHead className="text-accent text-[9px] uppercase">Waist</TableHead>
                        <TableHead className="text-accent text-[9px] uppercase">Hip</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {['30', '32', '34', '36', '38'].map((s) => (
                        <TableRow key={s} className="border-white/5 hover:bg-white/[0.02]">
                          <TableCell className="text-[#E8E0D0] text-xs">{s}</TableCell>
                          <TableCell className="text-white/60 text-xs">{s}"</TableCell>
                          <TableCell className="text-white/60 text-xs">{parseInt(s)+6}"</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </FadeIn>
            </div>
          </div>

          {/* Right Side: Form */}
          <FadeIn delay={300} className="bg-[#111]/30 backdrop-blur-md p-8 md:p-12 border border-white/5 rounded-sm space-y-12">
            {/* USER DETAILS */}
            <div className="space-y-8">
              <h3 className="text-xl font-serif text-accent border-b border-white/5 pb-4">User Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="full_name" className="text-[10px] uppercase tracking-widest text-white/60">Full Name *</Label>
                  <Input id="full_name" className="bg-transparent border-white/10 focus:border-accent transition-colors" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-[10px] uppercase tracking-widest text-white/60">Email Address *</Label>
                  <Input id="email" type="email" className="bg-transparent border-white/10 focus:border-accent transition-colors" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="mobile" className="text-[10px] uppercase tracking-widest text-white/60">Mobile No *</Label>
                  <Input id="mobile" className="bg-transparent border-white/10 focus:border-accent transition-colors" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="order_id" className="text-[10px] uppercase tracking-widest text-white/60">Order ID</Label>
                  <Input id="order_id" className="bg-transparent border-white/10 focus:border-accent transition-colors" />
                </div>
              </div>
            </div>

            {/* JACKET MEASUREMENTS */}
            <div className="space-y-8">
              <h3 className="text-xl font-serif text-accent border-b border-white/5 pb-4">Jacket Measurements (CM)</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {['Length', 'Shoulder', 'Chest', 'Sleeves', 'Stomach', 'Hip', 'Waist'].map((field) => (
                  <div key={field} className="space-y-2">
                    <Label className="text-[10px] uppercase tracking-widest text-white/60">{field}</Label>
                    <Input className="bg-transparent border-white/10 focus:border-accent transition-colors" placeholder="0.0 cm" />
                  </div>
                ))}
              </div>
            </div>

            {/* PANTS MEASUREMENTS */}
            <div className="space-y-8">
              <h3 className="text-xl font-serif text-accent border-b border-white/5 pb-4">Pants Measurements (CM)</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {['Waist', 'Hips', 'Knee', 'Thigh', 'Bottom', 'Rise', 'Length'].map((field) => (
                  <div key={field} className="space-y-2">
                    <Label className="text-[10px] uppercase tracking-widest text-white/60">{field}</Label>
                    <Input className="bg-transparent border-white/10 focus:border-accent transition-colors" placeholder="0.0 cm" />
                  </div>
                ))}
              </div>
            </div>

            <Button className="w-full h-14 bg-accent text-black font-bold uppercase tracking-[0.2em] hover:bg-white transition-colors">
              Submit Suit Profile
            </Button>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
