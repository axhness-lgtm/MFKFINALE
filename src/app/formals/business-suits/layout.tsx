import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Formal Men\'s Suits in Visakhapatnam | MFKhan International',
  description: 'MFKhan International has been tailoring formal men\'s suits in Visakhapatnam since 1940. Our suiting collection offers half-canvas and full-canvas construction options for the precise drape and structure you need. Browse our collection online and build your wardrobe with three generations of Vizag tailoring expertise.',
  keywords: ['formal suits vizag', 'mens suits visakhapatnam', 'bespoke suits vizag', 'business suits shop vizag', 'best tailoring shop vizag'],
};

export default function FormalSuitsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Formal Men's Suits in Visakhapatnam",
            "description": "MFKhan International has been tailoring formal men's suits in Visakhapatnam since 1940. Our suiting collection offers half-canvas and full-canvas construction.",
            "url": "https://www.mfkhaninternational.com/formals/business-suits",
            "provider": {
              "@type": "Organization",
              "name": "MFKhan International",
              "location": {
                "@type": "Place",
                "name": "Visakhapatnam"
              }
            }
          })
        }}
      />
      {children}
    </>
  );
}
