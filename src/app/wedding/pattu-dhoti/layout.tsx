import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pattu Dhoti & Pattu Pancha in Visakhapatnam | MFKhan International',
  description: 'MFKhan International presents an exclusive pattu-pancha and pattu-dhoti collection in Visakhapatnam, crafted from pure silk with authentic gold zari borders and meticulous hand-weaving. Since 1940, we have dressed three generations across Vizag in traditional South Indian ceremonial wear for weddings and festivals.',
  keywords: ['pattu dhoti vizag', 'pattu pancha visakhapatnam', 'silk dhoti shop vizag', 'traditional south indian wear vizag', 'gold zari dhoti vizag'],
};

export default function PattuDhotiLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Pattu Dhoti & Pattu Pancha in Visakhapatnam",
            "description": "MFKhan International presents an exclusive pattu-pancha and pattu-dhoti collection in Visakhapatnam, crafted from pure silk with authentic gold zari borders.",
            "url": "https://www.mfkhaninternational.com/wedding/pattu-dhoti",
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
