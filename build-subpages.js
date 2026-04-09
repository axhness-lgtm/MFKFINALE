const fs = require('fs');
const path = require('path');

const createDir = (dir) => {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
};

const writePage = (route, content) => {
  const dir = path.join(__dirname, 'src/app', route);
  createDir(dir);
  fs.writeFileSync(path.join(dir, 'page.tsx'), content);
};

const pagesData = {
  'wedding/designer-suits': {
    h1: 'Wedding Designer Suits',
    intro: 'Impeccable modern tailoring for the contemporary groom.',
    tech: 'Super 150s wool, reinforced canvas structure, and a sharp tailored silhouette designed to elongate and elevate.',
    cards: [
      { name: 'The Classic Tuxedo', desc: 'Satin lapels & sharp cuts', image: 'https://images.unsplash.com/photo-1593032465175-481ac7f401a0?auto=format&fit=crop&q=80&w=800' },
      { name: 'Velvet Evening Suits', desc: 'Rich textures & deep tones', image: 'https://images.unsplash.com/photo-1594938291221-94f18cbb5660?auto=format&fit=crop&q=80&w=800' },
      { name: 'Three-Piece Authority', desc: 'Layered perfection', image: 'https://images.unsplash.com/photo-1592878904946-b3cd8ae24097?auto=format&fit=crop&q=80&w=800' }
    ]
  },
  'wedding/indo-western': {
    h1: 'Indo-Western Wedding Wear',
    intro: 'A masterful fusion of cultural heritage and modern tailoring lines.',
    tech: 'Structured cuts blending traditional embroidery with the precision of a tailored suit. Jacquard and silk blends.',
    cards: [
      { name: 'Asymmetric Cuts', desc: 'Modern draped silhouettes', image: 'https://images.unsplash.com/photo-1582236166419-4820dc71f844?auto=format&fit=crop&q=80&w=800' },
      { name: 'Floral Jacquards', desc: 'Subtle woven patterns', image: 'https://images.unsplash.com/photo-1594938291221-94f18cbb5660?auto=format&fit=crop&q=80&w=800' },
      { name: 'Regal Velvet Layers', desc: 'Winter wedding mastery', image: 'https://images.unsplash.com/photo-1592878904946-b3cd8ae24097?auto=format&fit=crop&q=80&w=800' }
    ]
  },
  'wedding/sherwani': {
    h1: 'Wedding Sherwanis',
    intro: 'The pinnacle of traditional elegance.',
    tech: 'Heavy silks, velvet accents, structured shoulder lines, and intricate hand-embroidery built on a tailored foundation.',
    cards: [
      { name: 'Royal Silk Classics', desc: 'Timeless hand-embroidery', image: '/images/groom-dark.png' },
      { name: 'Minimalist Cuts', desc: 'Clean lines & subtle texture', image: 'https://images.unsplash.com/photo-1582236166419-4820dc71f844?auto=format&fit=crop&q=80&w=800' },
      { name: 'The Jodhpuri Suit', desc: 'Bandhgala structured grace', image: 'https://images.unsplash.com/photo-1594938291221-94f18cbb5660?auto=format&fit=crop&q=80&w=800' }
    ]
  },
  'wedding/designer-shirts': {
    h1: 'Designer Wedding Shirts',
    intro: 'The fundamental layer of luxury.',
    tech: 'Egyptian cottons, concealed plackets, wing collar mastery, and French cuffs designed for the perfect break.',
    cards: [
      { name: 'Pleated Tuxedo Shirts', desc: 'For the black tie event', image: 'https://images.unsplash.com/photo-1620012253295-c15bc3e65e4e?auto=format&fit=crop&q=80&w=800' },
      { name: 'Silk Blends', desc: 'Unmatched drape & sheen', image: 'https://images.unsplash.com/photo-1521341057461-6eb5f40b07ab?auto=format&fit=crop&q=80&w=800' },
      { name: 'Textured Weaves', desc: 'Subtle intricate details', image: 'https://images.unsplash.com/photo-1620012253295-c15bc3e65e4e?auto=format&fit=crop&q=80&w=800' }
    ]
  },
  'formals/business-suits': {
    h1: 'Business Suits',
    intro: 'Designed for the boardroom. Engineered for confidence.',
    tech: 'Half-canvas and full-canvas construction options depending on the drape required.',
    cards: [
      { name: 'The Executive Navy', desc: 'Authoritative & versatile', image: 'https://images.unsplash.com/photo-1594938291221-94f18cbb5660?auto=format&fit=crop&q=80&w=800' },
      { name: 'Charcoal Classics', desc: 'Understated dominance', image: 'https://images.unsplash.com/photo-1593032465175-481ac7f401a0?auto=format&fit=crop&q=80&w=800' },
      { name: 'Pinstripe Statement', desc: 'The traditional standard', image: 'https://images.unsplash.com/photo-1592878904946-b3cd8ae24097?auto=format&fit=crop&q=80&w=800' }
    ]
  },
  'formals/blazers': {
    h1: 'Tailored Blazers',
    intro: 'Bridging the definitive line between smart and casual.',
    tech: 'Unstructured or lightly padded shoulders, patch pockets, and textured fabrics such as hopsack and linen.',
    cards: [
      { name: 'The Unstructured Linen', desc: 'Breathable summer ease', image: 'https://images.unsplash.com/photo-1592878904946-b3cd8ae24097?auto=format&fit=crop&q=80&w=800' },
      { name: 'Textured Hopsack', desc: 'Resilient travel companion', image: 'https://images.unsplash.com/photo-1594938291221-94f18cbb5660?auto=format&fit=crop&q=80&w=800' },
      { name: 'Double-Breasted', desc: 'Powerful silhouette', image: 'https://images.unsplash.com/photo-1593032465175-481ac7f401a0?auto=format&fit=crop&q=80&w=800' }
    ]
  },
  'formals/shirts': {
    h1: 'Signature formal shirts',
    intro: 'The invisible armor of the modern executive.',
    tech: 'Two-ply cotton, genuine mother-of-pearl buttons, and structured fused or unfused collars.',
    cards: [
      { name: 'Crisp White Poplin', desc: 'The executive essential', image: 'https://images.unsplash.com/photo-1620012253295-c15bc3e65e4e?auto=format&fit=crop&q=80&w=800' },
      { name: 'Oxford Classics', desc: 'Durable & structured', image: 'https://images.unsplash.com/photo-1521341057461-6eb5f40b07ab?auto=format&fit=crop&q=80&w=800' },
      { name: 'Subtle Stripes', desc: 'Visual elongation', image: 'https://images.unsplash.com/photo-1620012253295-c15bc3e65e4e?auto=format&fit=crop&q=80&w=800' }
    ]
  },
  'custom-tailoring/international-fabrics': {
    h1: 'International Fabrics',
    intro: 'A deep dive into our extensive global mill archive.',
    tech: 'We import Super 120s – Super 180s wools from the finest mills across Italy and the UK.',
    cards: [
      { name: 'Italian Wools', desc: 'Impeccable all-season drape', image: 'https://images.unsplash.com/photo-1605221980313-2775f0f35368?auto=format&fit=crop&q=80&w=800' },
      { name: 'Breathable Linens', desc: 'Coastal lightness', image: 'https://images.unsplash.com/photo-1594938291221-94f18cbb5660?auto=format&fit=crop&q=80&w=800' },
      { name: 'Luxurious Silks', desc: 'Event-ready sheen', image: 'https://images.unsplash.com/photo-1582236166419-4820dc71f844?auto=format&fit=crop&q=80&w=800' }
    ]
  },
  'custom-tailoring/fittings': {
    h1: 'The Fitting Process',
    intro: 'Precision is iterative. Welcome to the art of the trial.',
    tech: 'Your first visit maps the framework. The basted fitting allows you to trial the skeleton of the suit.',
    cards: [
      { name: 'Initial Framework', desc: 'Taking 40+ measurements', image: 'https://images.unsplash.com/photo-1592878904946-b3cd8ae24097?auto=format&fit=crop&q=80&w=800' },
      { name: 'The Basted Trial', desc: 'Adjusting the raw canvas', image: 'https://images.unsplash.com/photo-1594938291221-94f18cbb5660?auto=format&fit=crop&q=80&w=800' },
      { name: 'Final Refinement', desc: 'Perfecting the finished break', image: 'https://images.unsplash.com/photo-1593032465175-481ac7f401a0?auto=format&fit=crop&q=80&w=800' }
    ]
  },
  'custom-tailoring/hand-work': {
    h1: 'Master Hand Work',
    intro: 'Machines provide speed; hands provide soul.',
    tech: 'The rolling of the lapel, the attachment of the collar, and the finishing of the buttonholes are executed by hand.',
    cards: [
      { name: 'Hand-Rolled Lapels', desc: 'A soft, natural curve', image: 'https://images.unsplash.com/photo-1592878904946-b3cd8ae24097?auto=format&fit=crop&q=80&w=800' },
      { name: 'Signature Buttonholes', desc: 'Meticulous silk thread finishing', image: 'https://images.unsplash.com/photo-1594938291221-94f18cbb5660?auto=format&fit=crop&q=80&w=800' },
      { name: 'Invisible Stitching', desc: 'Internal canvas memory', image: 'https://images.unsplash.com/photo-1605221980313-2775f0f35368?auto=format&fit=crop&q=80&w=800' }
    ]
  }
};

Object.entries(pagesData).forEach(([route, data]) => {
  const componentName = route.split('/').map(part => part.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join('')).join('');
  
  const contentLines = [
    "import { FadeIn } from '@/components/animations/FadeIn';",
    "import Link from 'next/link';",
    "import Image from 'next/image';",
    "",
    "export default function " + componentName + "Page() {",
    "  const categories = " + JSON.stringify(data.cards, null, 2) + ";",
    "",
    "  return (",
    "    <div className=\"min-h-screen pt-40 pb-24 bg-[#0a0a09]\">",
    "      <div className=\"max-w-7xl mx-auto px-6 md:px-12\">",
    "        <FadeIn className=\"text-center space-y-6 mb-24 max-w-4xl mx-auto\">",
    "          <h1 className=\"text-4xl md:text-6xl font-serif font-light text-[#E8E0D0]\">" + data.h1 + "</h1>",
    "          <p className=\"text-xl text-accent font-serif italic\">" + data.intro + "</p>",
    "        </FadeIn>",
    "",
    "        <FadeIn delay={200} className=\"space-y-4 border-l border-white/10 pl-8 md:pl-12 max-w-3xl mx-auto\">",
    "          <h2 className=\"text-xs uppercase tracking-[0.3em] text-accent font-bold\">Technical Focus</h2>",
    "          <p className=\"text-base text-white/70 leading-relaxed font-light tracking-wide\" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>",
    "            " + data.tech,
    "          </p>",
    "        </FadeIn>",
    "",
    "        <div className=\"mt-32 mb-16 text-center\">",
    "            <h2 className=\"text-3xl font-serif text-[#E8E0D0]\">Explore the Range</h2>",
    "            <div className=\"w-12 h-px bg-accent/50 mx-auto mt-6\"></div>",
    "        </div>",
    "",
    "        <div className=\"grid grid-cols-1 md:grid-cols-3 gap-8\">",
    "          {categories.map((c: any, i: number) => (",
    "            <FadeIn key={c.name} delay={i * 100}>",
    "              <div className=\"group block aspect-[3/4] relative border border-white/10 hover:border-accent/50 p-8 flex flex-col justify-end transition-all duration-700 bg-black/40 overflow-hidden cursor-pointer\">",
    "                 <Image src={c.image} alt={c.name} fill className=\"object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700 group-hover:scale-110\" />",
    "                 <div className=\"absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-0\" />",
    "                 <div className=\"relative z-10 text-center\">",
    "                   <h3 className=\"text-3xl md:text-4xl font-serif text-[#E8E0D0] group-hover:-translate-y-2 transition-transform duration-500 leading-tight mb-2\">{c.name}</h3>",
    "                   <p className=\"text-[10px] uppercase tracking-[0.3em] text-accent mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 font-bold\">{c.desc}</p>",
    "                 </div>",
    "              </div>",
    "            </FadeIn>",
    "          ))}",
    "        </div>",
    "",
    "        <FadeIn delay={400} className=\"mt-32 pt-16 border-t border-white/5 flex justify-center\">",
    "          <Link href=\"/contact\" className=\"hero-btn-secondary\">Book Consultation</Link>",
    "        </FadeIn>",
    "      </div>",
    "    </div>",
    "  );",
    "}"
  ];

  writePage(route, contentLines.join('\n'));
});

console.log("Subpages generated successfully!");
