const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, 'data');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}
const dataFile = path.join(dataDir, 'products.json');

const images = [
  'https://images.unsplash.com/photo-1593032465175-481ac7f401a0?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1594938291221-94f18cbb5660?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1592878904946-b3cd8ae24097?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1582236166419-4820dc71f844?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1620012253295-c15bc3e65e4e?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1521341057461-6eb5f40b07ab?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1605221980313-2775f0f35368?auto=format&fit=crop&q=80&w=800',
  '/images/groom-dark.png'
];

const pagesData = {
  'wedding/designer-suits': { h1: 'Wedding Designer Suits', intro: 'Impeccable modern tailoring for the contemporary groom.', tech: 'Super 150s wool, reinforced canvas structure, and a sharp tailored silhouette designed to elongate and elevate.', idPrefix: '10' },
  'wedding/indo-western': { h1: 'Indo-Western Wear', intro: 'A masterful fusion of cultural heritage and modern tailoring lines.', tech: 'Structured cuts blending traditional embroidery with the precision of a bespoke suit.', idPrefix: '11' },
  'wedding/sherwani': { h1: 'Wedding Sherwanis', intro: 'The pinnacle of traditional elegance.', tech: 'Heavy silks, velvet accents, structured shoulder lines, and intricate hand-embroidery.', idPrefix: '12' },
  'wedding/designer-shirts': { h1: 'Designer Shirts', intro: 'The fundamental layer of luxury.', tech: 'Egyptian cottons, concealed plackets, wing collar mastery.', idPrefix: '13' },
  'formals/business-suits': { h1: 'Business Suits', intro: 'Designed for the boardroom. Engineered for confidence.', tech: 'Half-canvas and full-canvas construction options depending on the drape required.', idPrefix: '20' },
  'formals/blazers': { h1: 'Tailored Blazers', intro: 'Bridging the definitive line between smart and casual.', tech: 'Unstructured or lightly padded shoulders, patch pockets.', idPrefix: '21' },
  'formals/shirts': { h1: 'Bespoke Formal Shirts', intro: 'The invisible armor of the modern executive.', tech: 'Two-ply cotton, genuine mother-of-pearl buttons.', idPrefix: '22' },
  'custom-tailoring/international-fabrics': { h1: 'International Fabrics', intro: 'A deep dive into our extensive global mill archive.', tech: 'We import Super 120s – Super 180s wools from the finest mills across Italy and the UK.', idPrefix: '30' },
  'custom-tailoring/fittings': { h1: 'The Fitting Process', intro: 'Precision is iterative. Welcome to the art of the trial.', tech: 'Your first visit maps the framework. The basted fitting allows you to trial the skeleton.', idPrefix: '31' },
  'custom-tailoring/hand-work': { h1: 'Master Hand Work', intro: 'Machines provide speed; hands provide soul.', tech: 'The rolling of the lapel, the attachment of the collar, executed entirely by hand.', idPrefix: '32' }
};

// 1. Seed the database
let allProducts = [];
Object.entries(pagesData).forEach(([categoryId, data]) => {
  for(let i = 0; i < 24; i++) {
    allProducts.push({
      id: `${data.idPrefix}${String(i + 1).padStart(2, '0')}`,
      categoryId: categoryId,
      name: `${data.h1.replace(/s$/, '')} No. ${i + 1}`,
      desc: `Bespoke Detail Collection ${new Date().getFullYear()}`,
      image: images[i % images.length],
      createdAt: new Date().toISOString()
    });
  }
});
fs.writeFileSync(dataFile, JSON.stringify({ products: allProducts }, null, 2));


// 2. Update all page components to dynamically fetch from the API!
Object.entries(pagesData).forEach(([route, data]) => {
  const componentName = route.split('/').map(part => part.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join('')).join('');
  const dir = path.join(__dirname, 'src/app', route);
  
  const contentLines = [
    "\"use client\";",
    "import { FadeIn } from '@/components/animations/FadeIn';",
    "import Link from 'next/link';",
    "import Image from 'next/image';",
    "import { useEffect, useState } from 'react';",
    "",
    "export default function " + componentName + "Page() {",
    "  const [items, setItems] = useState<any[]>([]);",
    "  const [loading, setLoading] = useState(true);",
    "",
    "  useEffect(() => {",
    "     fetch(`/api/products?category=${encodeURIComponent('" + route + "')}`)",
    "        .then(res => res.json())",
    "        .then(data => {",
    "           setItems(data);",
    "           setLoading(false);",
    "        });",
    "  }, []);",
    "",
    "  return (",
    "    <div className=\"min-h-screen pt-40 pb-24 bg-[#0a0a09] relative\">",
    "      <div className=\"max-w-7xl mx-auto px-6 md:px-12\">",
    "        <FadeIn className=\"text-center space-y-6 mb-16 max-w-4xl mx-auto\">",
    "          <h1 className=\"text-4xl md:text-5xl font-serif font-light text-[#E8E0D0] uppercase tracking-widest\">" + data.h1 + "</h1>",
    "          <p className=\"text-lg text-accent font-serif italic\">" + data.intro + "</p>",
    "        </FadeIn>",
    "",
    "        <FadeIn delay={100} className=\"border-t border-white/10 pt-8 mb-16 text-center max-w-3xl mx-auto\">",
    "          <p className=\"text-sm text-white/50 leading-relaxed font-light tracking-wide\" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>",
    "            " + data.tech,
    "          </p>",
    "        </FadeIn>",
    "",
    "        {loading ? (",
    "           <div className=\"flex justify-center items-center h-64\">",
    "              <p className=\"text-accent text-sm tracking-widest uppercase animate-pulse\">Loading Collection...</p>",
    "           </div>",
    "        ) : (",
    "          <div className=\"grid grid-cols-2 lg:grid-cols-4 gap-x-4 md:gap-x-8 gap-y-12\">",
    "            {items.map((item, idx) => (",
    "              <FadeIn key={item.id} delay={(idx % 4) * 100}>",
    "                <Link ",
    "                  href={`/collection/${item.id}?name=${encodeURIComponent(item.name)}&image=${encodeURIComponent(item.image)}&desc=${encodeURIComponent(item.desc)}`} ",
    "                  className=\"flex flex-col group cursor-pointer\"",
    "                >",
    "                  <div className=\"relative w-full aspect-[3/4] overflow-hidden bg-[#111] mb-4\">",
    "                    <Image src={item.image} alt={item.name} fill className=\"object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700\" />",
    "                    <div className=\"absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center\">",
    "                      <span className=\"text-white border border-white/50 bg-black/40 backdrop-blur-sm px-6 py-2 text-xs uppercase tracking-[0.2em]\">View Details</span>",
    "                    </div>",
    "                  </div>",
    "                  <div className=\"flex flex-col items-center text-center space-y-1.5 px-2\">",
    "                    <h3 className=\"text-sm md:text-base text-[#E8E0D0] font-light\" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>{item.name}</h3>",
    "                    <p className=\"text-[10px] uppercase tracking-widest text-white/40\">Style Code: MFK-{item.id}</p>",
    "                  </div>",
    "                </Link>",
    "              </FadeIn>",
    "            ))}",
    "            {items.length === 0 && (",
    "               <p className=\"col-span-full text-center text-white/40 py-20 uppercase tracking-widest text-sm\">No active pieces in this category.</p>",
    "            )}",
    "          </div>",
    "        )}",
    "      </div>",
    "    </div>",
    "  );",
    "}"
  ];

  fs.writeFileSync(path.join(dir, 'page.tsx'), contentLines.join('\n'));
});

console.log("Seeded database and successfully connected all subpages to the dynamic API / JSON database! Administrative control active.");
