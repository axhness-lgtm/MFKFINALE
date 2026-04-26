import { Metadata } from 'next';
import { ContactMain } from '@/components/sections/ContactMain';

export const metadata: Metadata = {
  title: 'Contact MF Khan International — Tailoring Consultation in Visakhapatnam',
  description: 'Reach out to MF Khan International in Visakhapatnam. Book your luxury wedding consultation, inquire about custom tailoring, or visit our 9,000 sq. ft. flagship store.',
  keywords: ['contact mf khan vizag', 'tailoring appointment visakhapatnam', 'mf khan location', 'wedding suit consultation vizag'],
};

export default function ContactPage() {
  return <ContactMain />;
}
