
"use client";

import { useState } from 'react';
import { Sparkles, Loader2, Shirt, Palette, Quote, Layers } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { personalizedStyleAdvisor, type PersonalizedStyleAdvisorOutput } from '@/ai/flows/personalized-style-advisor';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function AdvisorTool() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<PersonalizedStyleAdvisorOutput | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    
    try {
      const data = await personalizedStyleAdvisor({
        eventType: formData.get('eventType') as string,
        aestheticPreferences: formData.get('aesthetic') as string,
        garmentChoice: formData.get('garment') as string,
      });
      setResult(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-5 space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl font-headline font-bold gold-text">AI Style Intelligence</h2>
            <p className="text-muted-foreground">Input your preferences and let our generative tailoring advisor craft a vision for your next bespoke piece.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 luxury-card p-8 bg-card/50">
            <div className="space-y-2">
              <Label htmlFor="eventType" className="text-sm uppercase tracking-widest text-muted-foreground">Event Type</Label>
              <Input 
                id="eventType" 
                name="eventType" 
                placeholder="e.g., Royal Ascot, Gala Night, Beach Wedding" 
                required 
                className="bg-background border-border"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="aesthetic" className="text-sm uppercase tracking-widest text-muted-foreground">Aesthetic Preference</Label>
              <Select name="aesthetic" defaultValue="classic">
                <SelectTrigger className="bg-background border-border">
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
              <Label htmlFor="garment" className="text-sm uppercase tracking-widest text-muted-foreground">Desired Garment</Label>
              <Select name="garment" defaultValue="suit">
                <SelectTrigger className="bg-background border-border">
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

            <Button type="submit" disabled={loading} className="w-full violet-gradient h-12 gap-2 text-lg font-headline">
              {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Sparkles className="w-5 h-5" />}
              Generate Inspiration
            </Button>
          </form>
        </div>

        <div className="lg:col-span-7 h-full">
          {result ? (
            <div className="space-y-6 animate-fade-in">
              <Card className="luxury-card border-accent/20">
                <CardHeader className="border-b border-border/50 bg-accent/5">
                  <CardTitle className="font-headline text-2xl flex items-center gap-3">
                    <Quote className="text-accent w-6 h-6" />
                    Our Recommendation
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8 space-y-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                       <div className="flex items-center gap-2 text-accent uppercase text-xs tracking-tighter font-bold">
                         <Shirt className="w-4 h-4" /> Recommended Style
                       </div>
                       <p className="text-lg leading-relaxed">{result.suitStyle}</p>
                    </div>
                    <div className="space-y-3">
                       <div className="flex items-center gap-2 text-accent uppercase text-xs tracking-tighter font-bold">
                         <Palette className="w-4 h-4" /> Color Palette
                       </div>
                       <p className="text-lg leading-relaxed">{result.colorPalette}</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                     <div className="flex items-center gap-2 text-accent uppercase text-xs tracking-tighter font-bold">
                       <Layers className="w-4 h-4" /> Fabric Combinations
                     </div>
                     <p className="text-lg leading-relaxed">{result.fabricCombinations}</p>
                  </div>

                  <div className="p-6 bg-primary/10 border-l-4 border-primary rounded-r-lg italic text-muted-foreground">
                    {result.inspirationMessage}
                  </div>
                </CardContent>
              </Card>
            </div>
          ) : (
            <div className="h-full min-h-[400px] border-2 border-dashed border-border rounded-lg flex flex-col items-center justify-center text-muted-foreground p-12 text-center">
              <Sparkles className="w-12 h-12 mb-4 opacity-20" />
              <p className="max-w-xs text-lg">Your personalized style vision will appear here once generated.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
