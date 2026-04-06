import { CollectionPageTemplate, CollectionPageData } from '@/components/sections/CollectionPageTemplate';

export const metadata = {
  title: 'Tuxedos & Evening Wear in Visakhapatnam | MF Khan',
  description: 'Refined tailoring for formal occasions. Sharp silhouettes, satin lapels, and understated elegance — crafted for black-tie events in Visakhapatnam.',
};

const data: CollectionPageData = {
  seoHero: {
    title: 'Tuxedos & Evening Wear',
    subtext: 'Refined tailoring for formal occasions — sharp silhouettes and understated elegance, built for the moments that demand presence.',
    image: '/images/tuxedos-main.png',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Collections', href: '/collections' },
      { label: 'Tuxedos', href: '/collections/tuxedos' },
    ],
  },
  categoryStory: {
    text: "There is a reason the tuxedo has remained unchanged for over a century. It is the ultimate formal statement — stripped of all excess, left with nothing but precision. At MF Khan, we build our tuxedos on clean geometry: a jacket that holds its shape, trousers that break correctly, and a silhouette that commands any room it enters. This is evening wear that performs as long as the evening demands.",
  },
  technicalDepth: [
    {
      title: 'Satin Lapel Finishing',
      content: 'The tuxedo is defined by its lapel contrast. We use high-quality satin facing — carefully stitched at the roll line to ensure a clean, crisp edge. The choice between peak and shawl lapel is made based on the occasion and the wearer\'s build, with each option adding a distinct character to the garment.',
    },
    {
      title: 'Precise Jacket Tapering',
      content: 'A tuxedo jacket must be fitted, not constricting. We taper the side seams and back seam to create a defined waist without restricting movement. The chest and shoulder are structured firmly, and the jacket length is calibrated to flatter the trouser break.',
    },
    {
      title: 'Structured Fit & Clean Lines',
      content: 'Every surface of a tuxedo must appear seamless. We use internal structuring at the front chest, sleevehead, and collar stand to maintain crisp, clean lines throughout prolonged wear. The half-canvas or full-canvas chest piece ensures the jacket holds its shape and drapes naturally.',
    },
    {
      title: 'Fabric Contrast Detailing',
      content: 'The satin stripe down the trouser leg is not decoration — it is precision. We align it precisely to the outer seam, ensuring consistent width from hip to hem. Fabric contrast is also applied to buttons, pocket edges, and cuffs for a cohesive, elevated finish.',
    },
  ],
  occasionUses: [
    { image: '/images/tuxedos-main.png', label: 'Black-Tie Events' },
    { image: '/images/blue-blazer.jpeg', label: 'Formal Receptions' },
    { image: '/images/heritage-hero.jpg', label: 'Corporate Galas' },
    { image: '/images/gray-casuals.jpeg', label: 'Award Ceremonies' },
  ],
  process: [
    { stepNum: '01', title: 'Consultation', desc: 'Discuss event, lapel style, and fabric preference.' },
    { stepNum: '02', title: 'Measurement', desc: 'Full measurements taken including posture and stance.' },
    { stepNum: '03', title: 'Fitting', desc: 'Precision fit trial for silhouette and taper adjustments.' },
    { stepNum: '04', title: 'Delivery', desc: 'Finished tuxedo pressed and delivered event-ready.' },
  ],
  gallery: [
    '/images/tuxedos-main.png',
    '/images/blue-blazer.jpeg',
    '/images/gray-casuals.jpeg',
    '/images/heritage-hero.jpg',
    '/images/red-suit.jpeg',
  ],
  crossLinks: [
    { title: 'Custom Tailored Suits', href: '/collections/suits' },
    { title: 'Complete Wedding Tailoring', href: '/collections/wedding-wear' },
    { title: 'Wedding Sherwanis', href: '/collections/sherwanis' },
  ],
};

export default function TuxedosPage() {
  return <CollectionPageTemplate data={data} />;
}

