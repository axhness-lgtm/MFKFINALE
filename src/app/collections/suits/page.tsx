import { CollectionPageTemplate, CollectionPageData } from '@/components/sections/CollectionPageTemplate';

export const metadata = {
  title: 'Custom Tailored Suits in Visakhapatnam | MF Khan',
  description: 'Designed for precision, structure, and long-term wear — tailored for professionals and formal occasions in Visakhapatnam.',
};

const data: CollectionPageData = {
  seoHero: {
    title: 'Custom Tailored Suits in Visakhapatnam',
    subtext: 'Designed for precision, structure, and long-term wear — tailored for professionals and formal occasions.',
    image: '/images/suits-main.png',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Collections', href: '/collections' },
      { label: 'Suits', href: '/collections/suits' },
    ],
  },
  categoryStory: {
    text: "Crafting a suit is an act of discipline. Every seam, every lapel, every shoulder point is a deliberate decision. At MF Khan, we approach each commission as an individual study — understanding your posture, your proportions, and your purpose. The result is not simply a garment. It is a structure that carries you through boardrooms, ceremonies, and every significant moment in between.",
  },
  technicalDepth: [
    {
      title: 'Pattern Drafting & Block Construction',
      content: 'Each pattern is drafted from your measurements — no standard blocks. This ensures the jacket wraps your form, not the other way around. We account for posture, shoulder width, and chest depth to create a foundation that fits precisely before a single cut is made.',
    },
    {
      title: 'Canvas Layering & Internal Structure',
      content: 'A quality jacket has an internal skeleton. We construct chest pieces using hair canvas where applicable — offering superior drape over fused interlinings. This affects how the lapel rolls, how the chest moves, and the longevity of the garment.',
    },
    {
      title: 'Lapel Shaping & Shoulder Alignment',
      content: 'The lapel defines the character of a suit. We shape the roll line by hand, choosing a notch or peak based on your face structure and build. Shoulders are padded and pitched according to natural posture — avoiding the misaligned, sloped look of off-the-rack alternatives.',
    },
    {
      title: 'Fabric Selection — Wool, Blends & Seasonal Choices',
      content: 'We guide you through wool weights, fabric weaves, and seasonal appropriateness. From lightweight tropical wools for hot climates to structured flannel for cooler months. Super 100s to Super 150s are available depending on the use case and occasion.',
    },
  ],
  occasionUses: [
    { image: '/images/suits-main.png', label: 'Business Meetings' },
    { image: '/images/blue-blazer.jpeg', label: 'Formal Events' },
    { image: '/images/red-suit.jpeg', label: 'Daily Professional Wear' },
    { image: '/images/gray-casuals.jpeg', label: 'Weddings & Receptions' },
  ],
  process: [
    { stepNum: '01', title: 'Consultation', desc: 'Discuss style, occasion, and fabric preferences.' },
    { stepNum: '02', title: 'Measurement', desc: 'Full-body measurements taken by expert tailors.' },
    { stepNum: '03', title: 'First Fitting', desc: 'Trial garment adjusted for perfect structure.' },
    { stepNum: '04', title: 'Final Delivery', desc: 'Finished suit delivered with care and precision.' },
  ],
  gallery: [
    '/images/suits-main.png',
    '/images/blue-blazer.jpeg',
    '/images/red-suit.jpeg',
    '/images/gray-casuals.jpeg',
    '/images/heritage-hero.jpg',
  ],
  crossLinks: [
    { title: 'Tuxedos & Evening Wear', href: '/collections/tuxedos' },
    { title: 'Wedding Sherwanis', href: '/collections/sherwanis' },
    { title: 'Complete Wedding Tailoring', href: '/collections/wedding-wear' },
  ],
};

export default function SuitsPage() {
  return <CollectionPageTemplate data={data} />;
}

