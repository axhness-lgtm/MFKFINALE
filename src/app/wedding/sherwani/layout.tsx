import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Wedding Sherwanis in Visakhapatnam | MFKhan International',
  description: 'MFKhan International presents an exclusive wedding sherwani collection for Visakhapatnam grooms seeking traditional elegance with modern tailoring. Since 1940, our master craftsmen have created sherwanis in heavy silk, rich velvet, and intricate hand-embroidery for three generations of wedding ceremonies across Vizag.',
  keywords: ['wedding sherwani vizag', 'groom sherwani visakhapatnam', 'best sherwani shop vizag', 'traditional wedding wear vizag', 'hand embroidered sherwani vizag'],
};

export default function SherwaniLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Wedding Sherwanis in Visakhapatnam",
            "description": "MFKhan International presents an exclusive wedding sherwani collection for Visakhapatnam grooms seeking traditional elegance with modern tailoring.",
            "url": "https://www.mfkhaninternational.com/wedding/sherwani",
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
