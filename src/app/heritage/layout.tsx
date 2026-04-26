import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'MF Khan | Mohammed Faizulla Khan — Luxury Menswear Heritage Since 1940, Visakhapatnam',
  description: "MF Khan — the name, the man, the house. Since 1940, Mohammed Faizulla Khan's legacy has defined luxury tailoring in Visakhapatnam. Discover the story behind the standard.",
};

export default function HeritageLayout({ children }: { children: React.ReactNode }) {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "MFKHAN International",
      "foundingDate": "1940",
      "foundingLocation": {
        "@type": "Place",
        "name": "MG Road, Visakhapatnam"
      },
      "founder": {
        "@type": "Person",
        "name": "Mohammed Faizulla Khan"
      },
      "location": [
         {
            "@type": "Place",
            "name": "Kurupam Market, Visakhapatnam (Original)"
         },
         {
            "@type": "Place",
            "name": "Rednam Gardens, Visakhapatnam (Current)"
         }
      ],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Rednam Gardens",
        "addressLocality": "Visakhapatnam",
        "addressRegion": "AP",
        "addressCountry": "IN"
      },
      "employee": [
        {
          "@type": "Person",
          "name": "Mohammed Ahmed Ali Khan",
          "jobTitle": "Second Generation Leader"
        },
        {
          "@type": "Person",
          "name": "Mohammed Akbar Ali Khan",
          "jobTitle": "Third Generation Leader / Current Leadership"
        }
      ],
      "knowsAbout": ["Wedding wear", "Ceremonial tailoring", "Luxury menswear", "Custom suits", "Sherwani"]
    },
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Mohammed Faizulla Khan",
      "jobTitle": "Founder",
      "worksFor": {
        "@type": "Organization",
        "name": "MFKHAN & Co. Men's Shop"
      },
      "birthPlace": {
        "@type": "Place",
        "name": "Panja, Visakhapatnam"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "MFKHAN International",
      "image": "https://www.mfkhaninternational.com/images/heritage-destination.jpg",
      "telephone": "+91 91821 67662",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Rednam Gardens",
        "addressLocality": "Visakhapatnam",
        "addressRegion": "AP",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 17.7208,
        "longitude": 83.3039
      },
      "foundingDate": "1940"
    }
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      {children}
    </>
  );
}
