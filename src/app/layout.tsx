
import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { LoadingScreen } from "@/components/navigation/LoadingScreen";

export const metadata: Metadata = {
  metadataBase: new URL('https://www.mfkhaninternational.com'),
  title: {
    default: 'Best Wedding Suits & Designer Suits in Visakhapatnam | MFKhan International - Vizag\'s Largest Tailoring Store',
    template: '%s | MFKhan International'
  },
  description: 'Vizag’s largest men’s wear tailoring destination. MFKhan since 1940, providing the best wedding suits and designer suits in Visakhapatnam. Experience 9,000 sq. ft. of sartorial excellence at Rednam Gardens.',
  keywords: ['mf khan', 'mf khan vizag', 'mf khan visakhapatnam', 'Suits in Vizag', 'Best wedding suits Visakhapatnam', 'Designer suits Vizag', 'Largest tailoring store Visakhapatnam', 'MFKhan International', 'Men\'s wedding wear Vizag', 'Custom tailoring Visakhapatnam'],
  openGraph: {
    title: 'MFKhan International | Best Wedding Suits in Vizag',
    description: 'Vizag’s largest men’s wear tailoring destination. MFKhan since 1940, providing the best wedding suits in Visakhapatnam.',
    url: 'https://www.mfkhaninternational.com',
    siteName: 'MFKhan International',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MFKhan International',
    description: 'Vizag’s largest men’s wear tailoring destination since 1940.',
  },
  verification: {
    google: 'ADD_YOUR_GOOGLE_VERIFICATION_CODE_HERE',
    other: {
      'msvalidate.01': ['ADD_YOUR_BING_VERIFICATION_CODE_HERE'],
    },
  },
};

import { Header } from '@/components/navigation/Header';
import { Footer } from '@/components/navigation/Footer';
import { WishlistProvider } from '@/context/WishlistContext';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,300;0,400;1,300&family=Ballet&family=Gwendolyn:wght@400;700&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ClothingStore",
              "name": "MFKhan International",
              "image": "https://www.mfkhaninternational.com/icon.png",
              "url": "https://www.mfkhaninternational.com",
              "telephone": "+91 99883 93389",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "10-12-1, Jail Road, Rednam Gardens",
                "addressLocality": "Visakhapatnam",
                "addressRegion": "AP",
                "postalCode": "530002",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 17.7208,
                "longitude": 83.3039
              },
              "description": "Vizag's largest men's wear tailoring store and proud descendant of the MFKhan Lineage. Best providers for Wedding Suits and Designer Suits in Visakhapatnam since 1940.",
              "brand": {
                "@type": "Brand",
                "name": "MFKhan International"
              }
            })
          }}
        />
      </head>
      <body className="font-body antialiased bg-background text-foreground selection:bg-primary selection:text-white">
        <LoadingScreen />
        <div className="flex flex-col min-h-screen">
          <WishlistProvider>
            <Header />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </WishlistProvider>
        </div>
        <Toaster />
      </body>
    </html>
  );
}

