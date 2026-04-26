
import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { LoadingScreen } from "@/components/navigation/LoadingScreen";

export const metadata: Metadata = {
  metadataBase: new URL('https://www.mfkhaninternational.com'),
  applicationName: 'MF Khan International',
  title: {
    default: 'Best Wedding Suits & Bespoke Tailoring in Visakhapatnam | MF Khan International',
    template: '%s | MF Khan International'
  },
  description: 'MF Khan International: Vizag\'s premier destination for luxury wedding suits, designer sherwanis, and bespoke tailoring. Experience 85 years of quality conscious heritage since 1940.',
  keywords: [
    'mf khan', 'mf khan vizag', 'mf khan visakhapatnam', 'wedding suits in vizag', 
    'best wedding suits visakhapatnam', 'designer suits vizag', 'bespoke tailoring vizag',
    'largest tailoring store visakhapatnam', 'MFKhan International', 'men\'s wedding wear vizag', 
    'ceremonial wear visakhapatnam', 'custom sherwani vizag', 'tuxedo rental vizag',
    'raymond tailoring vizag', 'siyaram tailoring vizag', 'luxury fabrics vizag'
  ],
  alternates: {
    canonical: '/',
    languages: {
      'en-IN': '/',
    },
  },
  icons: {
    icon: '/footer-logo.png',
    apple: '/footer-logo.png',
  },
  openGraph: {
    title: 'MF Khan International | Luxury Menswear Heritage Since 1940',
    description: 'Vizag’s largest men’s wear tailoring destination. MFKhan since 1940, providing the best wedding suits and designer garments in Visakhapatnam.',
    url: 'https://www.mfkhaninternational.com',
    siteName: 'MF Khan International',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'MF Khan International Flagship Showroom Vizag',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MF Khan International | Quality Conscious Since 1940',
    description: 'The definitive luxury menswear destination in Visakhapatnam with over 80 years of sartorial legacy.',
    images: ['/og-image.jpg'],
  },
  appleWebApp: {
    title: 'MF Khan International',
    statusBarStyle: 'black-translucent',
  },
  verification: {
    google: 'GF6Xc8Ie3fswK7EiIewhQ5yu-l_WZBlmk--ve0wRBHo',
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
        <meta name="google-site-verification" content="GF6Xc8Ie3fswK7EiIewhQ5yu-l_WZBlmk--ve0wRBHo" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400&family=Spectral:ital,wght@0,300;0,400;0,500&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                "name": "MF Khan International",
                "alternateName": ["MFKhan International", "M.F. Khan", "MF Khan"],
                "url": "https://www.mfkhaninternational.com/"
              },
              {
                "@context": "https://schema.org",
                "@type": "ClothingStore",
                "name": "MFKhan International",
                "image": "https://www.mfkhaninternational.com/icon.png",
              "url": "https://www.mfkhaninternational.com",
              "telephone": "+91 91821 67662",
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
              "description": "Vizag's largest men's wear tailoring destination and proud descendant of the MFKhan Lineage. Best providers for Wedding Suits and Designer Suits in Visakhapatnam since 1940.",
              "brand": {
                "@type": "Brand",
                "name": "MF Khan International"
              },
              "foundingDate": "1940",
              "founder": {
                "@type": "Person",
                "name": "Mohammed Faizulla Khan"
              },
              "parentOrganization": {
                "@type": "Organization",
                "name": "MF Khan"
              },
              "knowsAbout": ["Wedding wear", "Ceremonial tailoring", "Luxury menswear", "Bespoke tailoring"]
            }])
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

