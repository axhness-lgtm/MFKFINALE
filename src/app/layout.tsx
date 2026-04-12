
import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { LoadingScreen } from "@/components/navigation/LoadingScreen";

export const metadata: Metadata = {
  title: {
    default: 'MFKhan International - Wedding Suits for Men | MF Khan in Vizag Since 1940',
    template: '%s | MFKhan International'
  },
  description: 'Experience the pinnacle of sartorial excellence with MFKhan International. Custom suits, tuxedos, and sherwanis crafted for the discerning gentleman in Visakhapatnam since 1940.',
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

