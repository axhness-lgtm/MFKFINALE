import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Wedding Designer Suits in Visakhapatnam | MFKhan International',
  description: 'MFKhan International has been crafting wedding designer suits in Visakhapatnam since 1940, dressing three generations of grooms across Vizag\'s finest families. Our 9,000 sq ft flagship showroom on Jail Road houses an exclusive collection of designs and finer wool suiting, tailored to contemporary silhouettes with traditional craftsmanship.',
  keywords: ['wedding designer suits vizag', 'mens wedding suits visakhapatnam', 'groom suits shop vizag', 'best wedding suits for men vizag'],
};

export default function DesignerSuitsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Wedding Designer Suits in Visakhapatnam",
            "description": "MFKhan International has been crafting wedding designer suits in Visakhapatnam since 1940, dressing three generations of grooms across Vizag's finest families.",
            "url": "https://www.mfkhaninternational.com/wedding/designer-suits",
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
