import { CollectionPageTemplate, CollectionPageData } from '@/components/sections/CollectionPageTemplate';

export const metadata = {
  title: "Women's Custom Tailoring in Visakhapatnam | MF Khan",
  description: "Tailored garments for women, designed with attention to fit, comfort, and occasion-specific styling. Bespoke women's wear in Visakhapatnam.",
};

const data: CollectionPageData = {
  seoHero: {
    title: "Women's Custom Tailoring",
    subtext: "Garments built around you — precise contour fitting, considered drape, and finishing that reflects the quality of every detail.",
    image: '/images/womens-main.png',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Collections', href: '/collections' },
      { label: "Women's Wear", href: '/collections/womens-wear' },
    ],
  },
  categoryStory: {
    text: "Women's tailoring demands a fundamentally different approach from menswear. The body is more complex in its curvature, its movement, and the way fabric behaves across it. At MF Khan, we bring the same rigour to women's custom wear that defines our menswear — precise measurement, structural understanding, and a garment that works for you in motion, not just in stillness. Every commission is a conversation about how you want to feel, not just how you want to look.",
  },
  technicalDepth: [
    {
      title: 'Body Contour Fitting',
      content: 'Women\'s garments require measurements that capture the full profile — bust, waist, hip, and the distances between them. We take 15–20 measurements for a complete women\'s commission, including posture adjustments for shoulder slope, forward head, and sway back. The pattern is drafted from these, not from a standard size.',
    },
    {
      title: 'Fabric Drape Understanding',
      content: 'Different fabrics fall differently across the female form. We select and test fabrics based on their drape behaviour — how they move when walking, how they hold at the shoulder, how they behave at the hip. Fabric is never chosen only for aesthetics; its structural behaviour is always considered.',
    },
    {
      title: 'Silhouette Structuring',
      content: 'Every silhouette is intentional. Whether we are building a tailored blazer, a formal trouser suit, or an occasion piece, we define the silhouette before cutting — deciding where the garment should hug, where it should skim, and where it should release. Internal structuring is used to support this shape without restricting movement.',
    },
    {
      title: 'Finishing Techniques',
      content: 'Finishing quality is what separates a tailored garment from a manufactured one. Seam allowances are finished by hand in high-stress areas. Buttons are sewn with a shank. Hems are pressed and hand-stitched at the final fitting. The inside of the garment is as considered as the outside.',
    },
  ],
  occasionUses: [
    { image: '/images/womens-main.png', label: 'Professional Settings' },
    { image: '/images/blue-blazer.jpeg', label: 'Formal Events' },
    { image: '/images/gray-casuals.jpeg', label: 'Everyday Luxury' },
    { image: '/images/heritage-hero.jpg', label: 'Wedding & Ceremonies' },
  ],
  process: [
    { stepNum: '01', title: 'Consultation', desc: 'Discuss garment type, occasion, and your aesthetic preference.' },
    { stepNum: '02', title: 'Measurement', desc: 'Full contour measurements for a truly unique pattern block.' },
    { stepNum: '03', title: 'Fitting', desc: 'Trial garment refined across silhouette, drape, and length.' },
    { stepNum: '04', title: 'Delivery', desc: 'Finished garment delivered with complete care instructions.' },
  ],
  gallery: [
    '/images/womens-main.png',
    '/images/blue-blazer.jpeg',
    '/images/gray-casuals.jpeg',
    '/images/heritage-hero.jpg',
    '/images/red-suit.jpeg',
  ],
  crossLinks: [
    { title: 'Complete Wedding Tailoring', href: '/collections/wedding-wear' },
    { title: 'Custom Tailored Suits', href: '/collections/suits' },
    { title: 'Tuxedos & Evening Wear', href: '/collections/tuxedos' },
  ],
};

export default function WomensWearPage() {
  return <CollectionPageTemplate data={data} />;
}

