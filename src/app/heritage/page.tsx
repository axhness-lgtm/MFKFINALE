import { Metadata } from 'next';
import { HeritageMain } from '@/components/sections/HeritageMain';

export const metadata: Metadata = {
  title: 'Our Heritage | Luxury Menswear Since 1940',
  description: 'The narrative of Mohammed Faizulla Khan and the 80-year legacy of MFKhan in Visakhapatnam. From Kurupam Market to Rednam Gardens, discover our journey of quality-conscious tailoring.',
  keywords: [
    'history of mf khan', 'mohammed faizulla khan', 'mf khan legacy', 
    'oldest tailoring store vizag', 'heritage menswear visakhapatnam',
    'kurupam market history', 'rednam gardens flagship store'
  ],
  alternates: {
    canonical: 'https://www.mfkhaninternational.com/heritage',
  },
  openGraph: {
    title: 'The MFKhan Heritage | A Legacy of Quality Since 1940',
    description: 'Explore the 80-year history of Vizag’s premier luxury menswear house.',
    images: ['/images/archive/faizulla-khan.jpg'],
  }
};

export default function HeritagePage() {
  return <HeritageMain />;
}
