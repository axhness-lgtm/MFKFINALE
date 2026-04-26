import { Metadata } from 'next';
import { ContactMain } from '@/components/sections/ContactMain';

export const metadata: Metadata = {
  title: 'Contact Us | Book a Tailoring Consultation in Vizag',
  description: 'Reach out to MFKhan International in Visakhapatnam. Book your wedding consultation, inquire about custom tailoring, or visit our flagship store in Rednam Gardens.',
  keywords: ['contact mf khan vizag', 'tailoring appointment visakhapatnam', 'mf khan location', 'wedding suit consultation vizag'],
};

export default function ContactPage() {
  return <ContactMain />;
}
