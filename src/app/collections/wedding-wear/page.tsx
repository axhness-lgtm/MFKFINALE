import { CollectionPageTemplate, CollectionPageData } from '@/components/sections/CollectionPageTemplate';

export const metadata = {
  title: 'Complete Wedding Tailoring in Visakhapatnam | MF Khan',
  description: 'A complete tailoring solution for grooms and families — ensuring consistency in style, fit, and presentation across every wedding outfit.',
};

const data: CollectionPageData = {
  seoHero: {
    title: 'Complete Wedding Tailoring',
    subtext: 'A full tailoring solution for the groom and family — consistent style, coordinated fits, and impeccable presentation across every outfit.',
    image: '/images/wedding-main.png',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Collections', href: '/collections' },
      { label: 'Wedding Wear', href: '/collections/wedding-wear' },
    ],
  },
  categoryStory: {
    text: "A wedding is not a single moment — it is a series of moments, across multiple events, each demanding a different garment. At MF Khan, we offer a coordinated approach to wedding tailoring that goes beyond a single outfit. We work with grooms and their families to plan a complete wardrobe: consistent in palette, cohesive in style, and individually fitted for each person. The result is a wedding where every image, every glance, every memory reflects a unified vision.",
  },
  technicalDepth: [
    {
      title: 'Coordinated Outfit Planning',
      content: 'We begin with a full plan — mapping each event (baraat, ceremony, reception) to a specific garment and palette. Color coordination across family members is discussed and decided before a single fabric is cut, ensuring visual cohesion in every photograph.',
    },
    {
      title: 'Fabric & Color Alignment Across Garments',
      content: 'When multiple garments are being made for a family, fabric selection is done side by side to ensure dye lots, texture, and sheen are consistent. Complementary colors are chosen with intention — not matching, but harmonious.',
    },
    {
      title: 'Multi-Garment Fitting Process',
      content: 'Each person in the wedding party is measured individually. Fitting sessions are scheduled to accommodate the full group, and adjustments are made collectively to ensure no single garment stands out for the wrong reasons. Every fit is reviewed in context.',
    },
    {
      title: 'Occasion-Specific Styling',
      content: 'The baraat outfit must allow movement. The reception sherwani must photograph well under flash lighting. These demands shape how each garment is constructed — from the silhouette to the internal structure to the choice of embellishment. Occasion informs every decision.',
    },
  ],
  occasionUses: [
    { image: '/images/wedding-main.png', label: 'Wedding Ceremony' },
    { image: '/images/festive-sherwani.jpeg', label: 'Baraat Procession' },
    { image: '/images/sherwanis-main.png', label: 'Reception Evening' },
    { image: '/images/heritage-hero.jpg', label: 'Family Coordination' },
  ],
  process: [
    { stepNum: '01', title: 'Planning', desc: 'Map events, garments, and color palette as a full plan.' },
    { stepNum: '02', title: 'Measurements', desc: 'Individual measurements for each member of the wedding party.' },
    { stepNum: '03', title: 'Group Fittings', desc: 'Coordinated fittings to review the full ensemble together.' },
    { stepNum: '04', title: 'Full Delivery', desc: 'All garments delivered pressed, packaged, and event-ready.' },
  ],
  gallery: [
    '/images/wedding-main.png',
    '/images/festive-sherwani.jpeg',
    '/images/sherwanis-main.png',
    '/images/heritage-hero.jpg',
    '/images/red-suit.jpeg',
  ],
  crossLinks: [
    { title: 'Wedding Sherwanis', href: '/collections/sherwanis' },
    { title: 'Custom Tailored Suits', href: '/collections/suits' },
    { title: 'Women\'s Custom Tailoring', href: '/collections/womens-wear' },
  ],
};

export default function WeddingWearPage() {
  return <CollectionPageTemplate data={data} />;
}

