import { CollectionPageTemplate, CollectionPageData } from '@/components/sections/CollectionPageTemplate';

export const metadata = {
  title: 'Wedding Sherwanis in Visakhapatnam',
  description: 'Crafted for weddings and traditional occasions, each sherwani is designed with attention to proportion, detailing, and overall presence.',
};

const data: CollectionPageData = {
  seoHero: {
    title: 'Wedding Sherwanis in Visakhapatnam',
    subtext: 'Each sherwani is a study in proportion, presence, and traditional detailing — crafted for the moments that define you.',
    image: '/images/sherwanis-main.png',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Collections', href: '/collections' },
      { label: 'Sherwanis', href: '/collections/sherwanis' },
    ],
  },
  categoryStory: {
    text: "A sherwani is more than a wedding garment — it is an expression of heritage, family, and personal identity. At MF Khan, we approach each sherwani commission with deep respect for tradition and a precise eye for detail. The embroidery, the fall of the fabric, the alignment of the collar — every element is considered. This is tailoring that honours the occasion as much as the garment itself.",
  },
  technicalDepth: [
    {
      title: 'Embroidery Placement & Fabric Selection',
      content: 'Embroidery on a sherwani must be strategically placed — never overwhelming, always enhancing. We work with rich silks, brocades, and jacquard fabrics, selecting motifs and thread weights that complement the fabric without adding unnecessary bulk. The result is balanced visual richness.',
    },
    {
      title: 'Garment Fall & Structural Integrity',
      content: 'The way a sherwani hangs determines its elegance. We account for the fall at the shoulders, the line at the chest, and how the garment moves when the wearer walks. Internal structure is added at key points to ensure the form is maintained throughout the day.',
    },
    {
      title: 'Collar Shaping & Fit Balance',
      content: 'The collar of a sherwani frames the face. We shape each collar individually — adjusting height, spread, and stand based on the wearer\'s neck proportions. The front placket and button spacing are balanced to create visual symmetry from neckline to hem.',
    },
    {
      title: 'Layering & Inner Garment Coordination',
      content: 'A sherwani is often worn with a churidar, nehru pants, or a dhoti beneath. We account for layering in the length, fit, and movement of the outer garment — ensuring comfort and visual coherence across the full ensemble.',
    },
  ],
  occasionUses: [
    { image: '/images/sherwanis-main.png', label: 'Wedding Ceremonies' },
    { image: '/images/festive-sherwani.jpeg', label: 'Receptions' },
    { image: '/images/heritage-hero.jpg', label: 'Traditional Ceremonies' },
    { image: '/images/red-suit.jpeg', label: 'Festive Celebrations' },
  ],
  process: [
    { stepNum: '01', title: 'Consultation', desc: 'Discuss occasion, fabric, embroidery, and color palette.' },
    { stepNum: '02', title: 'Measurement', desc: 'Precision measurements for a garment that drapes perfectly.' },
    { stepNum: '03', title: 'Fitting', desc: 'Trial garment refined for fall, structure, and collar alignment.' },
    { stepNum: '04', title: 'Delivery', desc: 'Completed sherwani inspected and delivered with full care.' },
  ],
  gallery: [
    '/images/sherwanis-main.png',
    '/images/festive-sherwani.jpeg',
    '/images/heritage-hero.jpg',
    '/images/red-suit.jpeg',
    '/images/blue-blazer.jpeg',
  ],
  crossLinks: [
    { title: 'Complete Wedding Tailoring', href: '/collections/wedding-wear' },
    { title: 'Custom Suits', href: '/collections/suits' },
    { title: 'Tuxedos & Evening Wear', href: '/collections/tuxedos' },
  ],
};

export default function SherwanisPage() {
  return <CollectionPageTemplate data={data} />;
}

