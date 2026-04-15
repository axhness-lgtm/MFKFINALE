import { AdvisorTool } from '@/components/advisor/AdvisorTool';

export default function AdvisorPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow pt-32 pb-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
             <h1 className="text-4xl md:text-6xl font-serif font-bold">Generative Style Advisor</h1>
             <p className="text-lg text-muted-foreground">Discover the perfect synergy of fabric, color, and cut tailored for your upcoming event through our advanced tailoring AI.</p>
          </div>
          
          <AdvisorTool />
        </div>
      </main>
    </div>
  );
}

