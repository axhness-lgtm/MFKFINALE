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
    sections: [
      {
        title: 'Tuxedos',
        items: [
          { name: 'The Classic Noir Tuxedo', desc: 'Silk satin lapels & covered buttons', image: 'https://images.unsplash.com/photo-1593032465175-481ac7f401a0?auto=format&fit=crop&q=80&w=800' },
          { name: 'Midnight Blue Tuxedo', desc: 'Deep indigo under evening light', image: 'https://images.unsplash.com/photo-1594938291221-94f18cbb5660?auto=format&fit=crop&q=80&w=800' },
          { name: 'White Dinner Jacket', desc: 'Tropical elegance for receptions', image: 'https://images.unsplash.com/photo-1592878904946-b3cd8ae24097?auto=format&fit=crop&q=80&w=800' }
        ]
      },
      {
        title: '3-Piece Suits',
        items: [
          { name: 'Charcoal Layered Suit', desc: 'Structured waistcoat and peak lapels', image: 'https://images.unsplash.com/photo-1582236166419-4820dc71f844?auto=format&fit=crop&q=80&w=800' },
          { name: 'The Double-Breasted Waistcoat', desc: 'Vintage charm with modern cut', image: 'https://images.unsplash.com/photo-1594938291221-94f18cbb5660?auto=format&fit=crop&q=80&w=800' },
          { name: 'Contrast Styling', desc: 'Silk blend contrasting vests', image: 'https://images.unsplash.com/photo-1593032465175-481ac7f401a0?auto=format&fit=crop&q=80&w=800' }
        ]
      }
    ]
  },
  'wedding/indo-western': {
    h1: 'Indo-Western Wedding Wear',
    intro: 'A masterful fusion of cultural heritage and modern tailoring lines.',
    tech: 'Structured cuts blending traditional embroidery with the precision of a tailored suit.',
    sections: [
      {
        title: 'Asymmetric Cuts',
        items: [
          { name: 'The Staggered Hem', desc: 'Fluid movement in silk', image: 'https://images.unsplash.com/photo-1582236166419-4820dc71f844?auto=format&fit=crop&q=80&w=800' },
          { name: 'Diagonal Fastening', desc: 'Modern architectural buttons', image: 'https://images.unsplash.com/photo-1594938291221-94f18cbb5660?auto=format&fit=crop&q=80&w=800' },
          { name: ' draped Silhouette', desc: 'Flowing regal elegance', image: 'https://images.unsplash.com/photo-1592878904946-b3cd8ae24097?auto=format&fit=crop&q=80&w=800' }
        ]
      },
      {
        title: 'Jacquard & Florals',
        items: [
          { name: 'Midnight Jacquard', desc: 'Subtle woven depth', image: 'https://images.unsplash.com/photo-1594938291221-94f18cbb5660?auto=format&fit=crop&q=80&w=800' },
          { name: 'Intricate Pastel Florals', desc: 'Perfect for daytime ceremonies', image: 'https://images.unsplash.com/photo-1582236166419-4820dc71f844?auto=format&fit=crop&q=80&w=800' },
        ]
      }
    ]
  },
  'wedding/sherwani': {
    h1: 'Wedding Sherwanis',
    intro: 'The pinnacle of traditional elegance.',
    tech: 'Heavy silks, velvet accents, structured shoulder lines, and intricate hand-embroidery.',
    sections: [
      {
        title: 'Heavy Embroidery',
        items: [
          { name: 'Zardosi Masterpiece', desc: 'Months of hand-work', image: '/images/groom-dark.png' },
          { name: 'Gold-Threaded Silk', desc: 'Classic regal richness', image: 'https://images.unsplash.com/photo-1582236166419-4820dc71f844?auto=format&fit=crop&q=80&w=800' },
        ]
      },
      {
        title: 'Minimalist & Jodhpuri',
        items: [
          { name: 'The Minimalist Ivory', desc: 'Clean lines, pearl buttons', image: 'https://images.unsplash.com/photo-1594938291221-94f18cbb5660?auto=format&fit=crop&q=80&w=800' },
          { name: 'Structured Bandhgala', desc: 'The modern royal', image: 'https://images.unsplash.com/photo-1592878904946-b3cd8ae24097?auto=format&fit=crop&q=80&w=800' },
        ]
      }
    ]
  },
  'wedding/designer-shirts': {
    h1: 'Designer Wedding Shirts',
    intro: 'The fundamental layer of luxury.',
    tech: 'Egyptian cottons, concealed plackets, wing collar mastery.',
    sections: [
      {
        title: 'Tuxedo Shirts',
        items: [
          { name: 'Classic Pleated', desc: 'Standard for black-tie', image: 'https://images.unsplash.com/photo-1620012253295-c15bc3e65e4e?auto=format&fit=crop&q=80&w=800' },
          { name: 'Pique Bib Front', desc: 'Textured luxury', image: 'https://images.unsplash.com/photo-1521341057461-6eb5f40b07ab?auto=format&fit=crop&q=80&w=800' },
        ]
      },
      {
        title: 'Silk & Evening',
        items: [
          { name: 'Pure Silk Blend', desc: 'Unmatched drape', image: 'https://images.unsplash.com/photo-1620012253295-c15bc3e65e4e?auto=format&fit=crop&q=80&w=800' },
          { name: 'Hidden Placket', desc: 'Seamless visual line', image: 'https://images.unsplash.com/photo-1521341057461-6eb5f40b07ab?auto=format&fit=crop&q=80&w=800' },
        ]
      }
    ]
  },
  'formals/business-suits': {
    h1: 'Business Suits',
    intro: 'Designed for the boardroom. Engineered for confidence.',
    tech: 'Half-canvas and full-canvas construction options depending on the drape required.',
    sections: [
      {
        title: 'The Essentials',
        items: [
          { name: 'The Executive Navy', desc: 'Authoritative & versatile', image: 'https://images.unsplash.com/photo-1594938291221-94f18cbb5660?auto=format&fit=crop&q=80&w=800' },
          { name: 'Charcoal Basics', desc: 'Understated dominance', image: 'https://images.unsplash.com/photo-1593032465175-481ac7f401a0?auto=format&fit=crop&q=80&w=800' },
        ]
      },
      {
        title: 'Pinstripes & Patterns',
        items: [
          { name: 'Chalk-Stripe Power Suit', desc: 'Wall street classic', image: 'https://images.unsplash.com/photo-1592878904946-b3cd8ae24097?auto=format&fit=crop&q=80&w=800' },
          { name: 'Subtle Prince of Wales', desc: 'Refined patterning', image: 'https://images.unsplash.com/photo-1582236166419-4820dc71f844?auto=format&fit=crop&q=80&w=800' },
        ]
      }
    ]
  },
  'formals/blazers': {
    h1: 'Tailored Blazers',
    intro: 'Bridging the definitive line between smart and casual.',
    tech: 'Unstructured or lightly padded shoulders, patch pockets.',
    sections: [
      {
        title: 'Double-Breasted',
        items: [
          { name: 'The 6x2 Structure', desc: 'Strong architectural lapels', image: 'https://images.unsplash.com/photo-1593032465175-481ac7f401a0?auto=format&fit=crop&q=80&w=800' },
          { name: 'Wool-Silk Blazer', desc: 'Subtle sheen, confident cut', image: 'https://images.unsplash.com/photo-1594938291221-94f18cbb5660?auto=format&fit=crop&q=80&w=800' },
        ]
      },
      {
        title: 'Unstructured & Textures',
        items: [
          { name: 'Linen Blend', desc: 'Breathable summer ease', image: 'https://images.unsplash.com/photo-1592878904946-b3cd8ae24097?auto=format&fit=crop&q=80&w=800' },
          { name: 'Hopsack Weave', desc: 'Resilient travel companion', image: 'https://images.unsplash.com/photo-1582236166419-4820dc71f844?auto=format&fit=crop&q=80&w=800' },
        ]
      }
    ]
  },
  'formals/shirts': {
    h1: 'Signature formal shirts',
    intro: 'The invisible armor of the modern executive.',
    tech: 'Two-ply cotton, genuine mother-of-pearl buttons.',
    sections: [
      {
        title: 'The Solids',
        items: [
          { name: 'Crisp White Poplin', desc: 'The executive essential', image: 'https://images.unsplash.com/photo-1620012253295-c15bc3e65e4e?auto=format&fit=crop&q=80&w=800' },
          { name: 'Ice Blue Oxford', desc: 'Durable & structured', image: 'https://images.unsplash.com/photo-1521341057461-6eb5f40b07ab?auto=format&fit=crop&q=80&w=800' },
        ]
      },
      {
        title: 'Patterns',
        items: [
          { name: 'Bengal Stripe', desc: 'Visual elongation', image: 'https://images.unsplash.com/photo-1620012253295-c15bc3e65e4e?auto=format&fit=crop&q=80&w=800' },
          { name: 'Micro-Check', desc: 'Textured visual depth', image: 'https://images.unsplash.com/photo-1521341057461-6eb5f40b07ab?auto=format&fit=crop&q=80&w=800' },
        ]
      }
    ]
  },
  'custom-tailoring/international-fabrics': {
    h1: 'International Fabrics',
    intro: 'A deep dive into our extensive global mill archive.',
    tech: 'We import Super 120s – Super 180s wools from the finest mills across Italy and the UK.',
    sections: [
      {
        title: 'Linen',
        items: [
          { name: 'Irish Linen', desc: 'Crisp, legendary durability', image: 'https://images.unsplash.com/photo-1605221980313-2775f0f35368?auto=format&fit=crop&q=80&w=800' },
          { name: 'Italian Linen Blends', desc: 'Softer drape, less wrinkling', image: 'https://images.unsplash.com/photo-1594938291221-94f18cbb5660?auto=format&fit=crop&q=80&w=800' },
          { name: 'Silk-Linen Mix', desc: 'Coastal luxury sheen', image: 'https://images.unsplash.com/photo-1582236166419-4820dc71f844?auto=format&fit=crop&q=80&w=800' }
        ]
      },
      {
        title: 'Wools',
        items: [
          { name: 'Super 150s Merino', desc: 'Perfect all-season weight', image: 'https://images.unsplash.com/photo-1582236166419-4820dc71f844?auto=format&fit=crop&q=80&w=800' },
          { name: 'Cashmere Blends', desc: 'Unparalleled winter softness', image: 'https://images.unsplash.com/photo-1605221980313-2775f0f35368?auto=format&fit=crop&q=80&w=800' },
          { name: 'Tropical Wools', desc: 'High-twist breathable ease', image: 'https://images.unsplash.com/photo-1594938291221-94f18cbb5660?auto=format&fit=crop&q=80&w=800' }
        ]
      },
      {
        title: 'Silks & Velvets',
        items: [
          { name: 'Pure Silk Jacquard', desc: 'Event-ready sheen', image: 'https://images.unsplash.com/photo-1582236166419-4820dc71f844?auto=format&fit=crop&q=80&w=800' },
          { name: 'Cotton Velvet', desc: 'Deep color absorption', image: 'https://images.unsplash.com/photo-1594938291221-94f18cbb5660?auto=format&fit=crop&q=80&w=800' },
        ]
      }
    ]
  },
  'custom-tailoring/fittings': {
    h1: 'The Fitting Process',
    intro: 'Precision is iterative. Welcome to the art of the trial.',
    tech: 'Your first visit maps the framework. The basted fitting allows you to trial the skeleton.',
    sections: [
      {
        title: 'Measurements',
        items: [
          { name: 'The 40-Point Map', desc: 'Shoulder slope, drop & stance', image: 'https://images.unsplash.com/photo-1592878904946-b3cd8ae24097?auto=format&fit=crop&q=80&w=800' },
          { name: 'Style Consultation', desc: 'Lapel width and button stance', image: 'https://images.unsplash.com/photo-1594938291221-94f18cbb5660?auto=format&fit=crop&q=80&w=800' },
        ]
      },
      {
        title: 'The Basted Fitting',
        items: [
          { name: 'Raw Canvas Trial', desc: 'Testing the suit skeleton', image: 'https://images.unsplash.com/photo-1594938291221-94f18cbb5660?auto=format&fit=crop&q=80&w=800' },
          { name: 'Balance Corrections', desc: 'Pitching the sleeves correctly', image: 'https://images.unsplash.com/photo-1593032465175-481ac7f401a0?auto=format&fit=crop&q=80&w=800' },
        ]
      }
    ]
  },
  'custom-tailoring/hand-work': {
    h1: 'Master Hand Work',
    intro: 'Machines provide speed; hands provide soul.',
    tech: 'The rolling of the lapel, the attachment of the collar...',
    sections: [
      {
        title: 'Internal Architecture',
        items: [
          { name: 'Hand-Padded Canvas', desc: 'Allows the suit to breathe', image: 'https://images.unsplash.com/photo-1605221980313-2775f0f35368?auto=format&fit=crop&q=80&w=800' },
          { name: 'Shoulder Attachment', desc: 'Spalla Camicia (shirt-sleeve)', image: 'https://images.unsplash.com/photo-1594938291221-94f18cbb5660?auto=format&fit=crop&q=80&w=800' },
        ]
      },
      {
        title: 'Finishing Touches',
        items: [
          { name: 'Hand-Worked Buttonholes', desc: 'Silk thread precision', image: 'https://images.unsplash.com/photo-1594938291221-94f18cbb5660?auto=format&fit=crop&q=80&w=800' },
          { name: 'Pick Stitching', desc: 'Subtle lapel detailing', image: 'https://images.unsplash.com/photo-1592878904946-b3cd8ae24097?auto=format&fit=crop&q=80&w=800' },
        ]
      }
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
    "  const sections = " + JSON.stringify(data.sections, null, 2) + ";",
    "",
    "  return (",
    "    <div className=\"min-h-screen pt-40 pb-24 bg-[#0a0a09]\">",
    "      <div className=\"max-w-7xl mx-auto px-6 md:px-12\">",
    "        <FadeIn className=\"text-center space-y-6 max-w-4xl mx-auto mb-20\">",
    "          <h1 className=\"text-4xl md:text-6xl font-serif font-light text-[#E8E0D0]\">" + data.h1 + "</h1>",
    "          <p className=\"text-xl text-accent font-serif italic\">" + data.intro + "</p>",
    "        </FadeIn>",
    "",
    "        <FadeIn delay={200} className=\"border-l border-white/10 pl-8 md:pl-12 max-w-6xl mx-auto\">",
    "          <p className=\"text-base text-white/70 leading-relaxed font-light tracking-wide max-w-2xl\" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>",
    "            " + data.tech,
    "          </p>",
    "        </FadeIn>",
    "      </div>",
    "",
    "      <div className=\"mt-32 space-y-32 flex flex-col\">",
    "        {sections.map((section: any, idx: number) => (",
    "          <FadeIn key={section.title} delay={idx * 100} className=\"flex flex-col\">",
    "            <div className=\"px-6 md:px-12 max-w-[1400px] w-full mx-auto mb-8 flex justify-between items-end border-b border-white/5 pb-4\">",
    "              <h2 className=\"text-3xl lg:text-4xl font-serif text-[#E8E0D0] italic\">{section.title}</h2>",
    "              <Link href=\"/contact\" className=\"text-[10px] uppercase tracking-[0.2em] text-white/50 hover:text-accent transition-colors hidden md:block\">View All →</Link>",
    "            </div>",
    "",
    "            {/* Horizontal Scroll Zara Style */}",
    "            <div className=\"flex overflow-x-auto snap-x snap-mandatory gap-6 px-6 md:px-12 pb-12 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]\">",
    "              {section.items.map((item: any, i: number) => (",
    "                <div key={i} className=\"snap-start shrink-0 w-[85vw] sm:w-[500px] md:w-[420px] aspect-[3/4] relative group transition-all duration-700 bg-black/40 overflow-hidden cursor-pointer\">",
    "                  <Image src={item.image} alt={item.name} fill className=\"object-cover opacity-60 group-hover:opacity-90 transition-all duration-1000 group-hover:scale-105\" />",
    "                  <div className=\"absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-0 group-hover:from-black opacity-80 transition-opacity duration-700\" />",
    "                  <div className=\"absolute bottom-0 left-0 right-0 p-8 md:p-10 z-10 transition-transform duration-700 transform translate-y-4 group-hover:translate-y-0\">",
    "                    <h3 className=\"text-2xl md:text-3xl font-serif text-[#E8E0D0] mb-2 leading-tight\">{item.name}</h3>",
    "                    <p className=\"text-[11px] uppercase tracking-[0.3em] font-medium text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100\">{item.desc}</p>",
    "                  </div>",
    "                </div>",
    "              ))}",
    "            </div>",
    "          </FadeIn>",
    "        ))}",
    "      </div>",
    "",
    "      <FadeIn delay={400} className=\"mt-24 pt-16 border-t border-white/5 flex justify-center px-6 md:px-12 max-w-7xl mx-auto\">",
    "        <Link href=\"/contact\" className=\"hero-btn-secondary\">Book Consultation to Explore All Pieces</Link>",
    "      </FadeIn>",
    "    </div>",
    "  );",
    "}"
  ];

  writePage(route, contentLines.join('\n'));
});

console.log("Zara-style subpages horizontal scrolled generated successfully!");
