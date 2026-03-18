
"use client";

import { useState, useEffect } from 'react';
import { Sparkles, Loader2, Shirt, Palette, Quote, Layers, Image as ImageIcon, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { personalizedStyleAdvisor, type PersonalizedStyleAdvisorOutput } from '@/ai/flows/personalized-style-advisor';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import Image from 'next/image';

export function AdvisorTool() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<PersonalizedStyleAdvisorOutput | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const formData = new FormData(e.currentTarget);
    
    try {
      const data = await personalizedStyleAdvisor({
        eventType: formData.get('eventType') as string,
        aestheticPreferences: formData.get('aesthetic') as string,
        garmentChoice: formData.get('garment') as string,
      });
      setResult(data);
    } catch (err: any) {
      console.error(err);
      setError("Our artisanal AI encountered a momentary pause. Please attempt your consultation again.");
    } finally {
      setLoading(false);
    }
  }

  if (!mounted) return null;

  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-4 space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl font-headline font-bold gold-text">AI Style Intelligence</h2>
            <p className="text-muted-foreground">Input your preferences and let our generative tailoring advisor craft a vision for your next custom-tailored piece.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 luxury-card p-8 bg-card/50">
            {error && (
              <Alert variant="destructive" className="rounded-none border-destructive/50 bg-destructive/5">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle className="text-[10px] uppercase tracking-widest font-bold">Consultation Error</AlertTitle>
                <AlertDescription className="text-xs">{error}</AlertDescription>
              </Alert>
            )}

            <div className="space-y-2">
              <Label htmlFor="eventType" className="text-[10px] uppercase tracking-[0.3em] font-bold text-muted-foreground">Event Type</Label>
              <Input 
                id="eventType" 
                name="eventType" 
                placeholder="e.g., Royal Ascot, Gala Night" 
                required 
                className="bg-background border-border rounded-none"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="aesthetic" className="text-[10px] uppercase tracking-[0.3em] font-bold text-muted-foreground">Aesthetic Preference</Label>
              <Select name="aesthetic" defaultValue="classic">
                <SelectTrigger className="bg-background border-border rounded-none">
                  <SelectValue placeholder="Select an aesthetic" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="classic">Classic Sartorial</SelectItem>
                  <SelectItem value="modern">Modern Minimalist</SelectItem>
                  <SelectItem value="avant-garde">Avant-Garde Designer</SelectItem>
                  <SelectItem value="bohemian">Luxe Bohemian</SelectItem>
                  <SelectItem value="minimalist">Stealth Wealth</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="garment" className="text-[10px] uppercase tracking-[0.3em] font-bold text-muted-foreground">Desired Garment</Label>
              <Select name="garment" defaultValue="suit">
                <SelectTrigger className="bg-background border-border rounded-none">
                  <SelectValue placeholder="Select garment" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="suit">Three-Piece Suit</SelectItem>
                  <SelectItem value="tuxedo">Black Tie Tuxedo</SelectItem>
                  <SelectItem value="sherwani">Royal Sherwani</SelectItem>
                  <SelectItem value="blazer">Double-Breasted Blazer</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button type="submit" disabled={loading} className="w-full brown-gradient h-14 gap-3 text-xs uppercase tracking-[0.2em] font-bold rounded-none">
              {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Sparkles className="w-4 h-4" />}
              {loading ? "Crafting Vision..." : "Generate Inspiration"}
            </Button>
          </form>
        </div>

        <div className="lg:col-span-8 h-full">
          {result ? (
            <div className="space-y-12 animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {result.images.map((img, i) => (
                  <div key={i} className="relative aspect-[4/5] overflow-hidden luxury-card group">
                    <Image 
                      src={img} 
                      alt={`Generated style inspiration ${i + 1}`} 
                      fill 
                      unoptimized
                      className="object-cover transition-transform duration-1000 group-hover:scale-105" 
                    />
                    <div className="absolute top-4 left-4 bg-black/40 backdrop-blur-md px-3 py-1 text-[8px] uppercase tracking-widest text-white font-bold">
                      Visual Vision 0{i+1}
                    </div>
                  </div>
                ))}
              </div>

              <Card className="luxury-card bg-transparent border-accent/20 rounded-none overflow-hidden">
                <CardHeader className="border-b border-border/50 bg-accent/5">
                  <CardTitle className="font-headline text-2xl flex items-center gap-4">
                    <Quote className="text-accent w-6 h-6" />
                    Sartorial Narrative
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8 md:p-12 space-y-12">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-4">
                       <div className="flex items-center gap-2 text-accent uppercase text-[9px] tracking-[0.3em] font-bold">
                         <Shirt className="w-4 h-4" /> Recommended Style
                       </div>
                       <p className="text-xl font-headline leading-relaxed italic">{result.suitStyle}</p>
                    </div>
                    <div className="space-y-4">
                       <div className="flex items-center gap-2 text-accent uppercase text-[9px] tracking-[0.3em] font-bold">
                         <Palette className="w-4 h-4" /> Color Palette
                       </div>
                       <p className="text-xl font-headline leading-relaxed italic">{result.colorPalette}</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                     <div className="flex items-center gap-2 text-accent uppercase text-[9px] tracking-[0.3em] font-bold">
                       <Layers className="w-4 h-4" /> Fabric Combinations
                     </div>
                     <p className="text-xl font-headline leading-relaxed italic">{result.fabricCombinations}</p>
                  </div>

                  <div className="pt-10 border-t border-border/50">
                    <p className="text-lg text-muted-foreground leading-relaxed font-light tracking-wide italic">
                      "{result.inspirationMessage}"
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          ) : (
            <div className="h-full min-h-[500px] border border-dashed border-border rounded-none flex flex-col items-center justify-center text-muted-foreground p-12 text-center bg-card/20">
              <div className="relative">
                {loading ? (
                  <div className="space-y-8 flex flex-col items-center">
                    <Loader2 className="w-16 h-16 animate-spin text-accent/40" />
                    <p className="max-w-xs text-[10px] uppercase tracking-[0.3em] font-bold animate-pulse">
                      Curating fabrics and drafting silhouettes...
                    </p>
                  </div>
                ) : (
                  <>
                    <Sparkles className="w-16 h-16 mb-6 opacity-20 text-accent" />
                    <div className="absolute -top-2 -right-2">
                      <ImageIcon className="w-6 h-6 opacity-10" />
                    </div>
                    <p className="max-w-xs text-sm uppercase tracking-[0.2em] font-bold">
                      Your personalized artisanal vision will appear here once generated.
                    </p>
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
