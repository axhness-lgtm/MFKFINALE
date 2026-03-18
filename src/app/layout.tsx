
import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { LoadingScreen } from "@/components/navigation/LoadingScreen";

export const metadata: Metadata = {
  title: 'MFK International | Custom Luxury Tailoring',
  description: 'Experience the pinnacle of sartorial excellence with MFK International. Custom suits, tuxedos, and sherwanis crafted for the discerning gentleman.',
};

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
        <link href="https://fonts.googleapis.com/css2?family=Pinyon+Script&family=PT+Sans:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-background text-foreground selection:bg-primary selection:text-white">
        <LoadingScreen />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
