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
  'wedding/designer-suits': { h1: 'Wedding Designer Suits', intro: 'Impeccable modern tailoring for the contemporary groom.', tech: 'Super 150s wool, reinforced canvas structure, and a sharp tailored silhouette designed to elongate and elevate.' },
  'wedding/indo-western': { h1: 'Indo-Western Wear', intro: 'A masterful fusion of cultural heritage and modern tailoring lines.', tech: 'Structured cuts blending traditional embroidery with the precision of a tailored suit.' },
  'wedding/sherwani': { h1: 'Wedding Sherwanis', intro: 'The pinnacle of traditional elegance.', tech: 'Heavy silks, velvet accents, structured shoulder lines, and intricate hand-embroidery.' },
  'wedding/pattu-dhoti': { h1: 'Pattu-Dhoti Collection', intro: 'Traditional Elegance Redefined.', tech: 'Pure silk, authentic gold zari borders, and meticulous hand-weaving.' },
  'wedding/designer-shirts': { h1: 'Designer Shirts', intro: 'The fundamental layer of luxury.', tech: 'Egyptian cottons, concealed plackets, wing collar mastery.' },
  'formals/business-suits': { h1: 'Business Suits', intro: 'Designed for the boardroom. Engineered for confidence.', tech: 'Half-canvas and full-canvas construction options depending on the drape required.' },
  'formals/blazers': { h1: 'Tailored Blazers', intro: 'Bridging the definitive line between smart and casual.', tech: 'Unstructured or lightly padded shoulders, patch pockets.' },
  'formals/shirts': { h1: 'Signature formal shirts', intro: 'The invisible armor of the modern executive.', tech: 'Two-ply cotton, genuine mother-of-pearl buttons.' },
  'custom-tailoring/international-fabrics': { h1: 'International Fabrics', intro: 'A deep dive into our extensive global mill archive.', tech: 'We import Super 120s – Super 180s wools from the finest mills across Italy and the UK.' },
  'custom-tailoring/fittings': { h1: 'The Fitting Process', intro: 'Precision is iterative. Welcome to the art of the trial.', tech: 'Your first visit maps the framework. The basted fitting allows you to trial the skeleton.' },
  'custom-tailoring/hand-work': { h1: 'Master Hand Work', intro: 'Machines provide speed; hands provide soul.', tech: 'The rolling of the lapel, the attachment of the collar, executed entirely by hand.' }
};

Object.entries(pagesData).forEach(([route, data]) => {
  const componentName = route.split('/').map(part => part.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join('')).join('');
  
  const contentLines = [
    "\"use client\";",
    "import { FadeIn } from '@/components/animations/FadeIn';",
    "import Link from 'next/link';",
    "import Image from 'next/image';",
    "import { useState } from 'react';",
    "import { X } from 'lucide-react';",
    "",
    "const images = " + JSON.stringify(images) + ";",
    "",
    "export default function " + componentName + "Page() {",
    "  const [selectedItem, setSelectedItem] = useState<any>(null);",
    "",
    "  const items = Array.from({ length: 24 }).map((_, i) => ({",
    "    id: i,",
    "    name: `${'" + data.h1 + "'.replace(/s$/, '')} No. ${i + 1}`,",
    "    desc: `Signature Detail Collection ${new Date().getFullYear()}`,",
    "    image: images[i % images.length]",
    "  }));",
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
    "        {/* E-Commerce Style Grid */}",
    "        <div className=\"grid grid-cols-2 lg:grid-cols-4 gap-x-4 md:gap-x-8 gap-y-12\">",
    "          {items.map((item, idx) => (",
    "            <FadeIn key={item.id} delay={(idx % 4) * 100} className=\"flex flex-col group cursor-pointer\" onClick={() => setSelectedItem(item)}>",
    "              <div className=\"relative w-full aspect-[3/4] overflow-hidden bg-[#111] mb-4\">",
    "                <Image src={item.image} alt={item.name} fill className=\"object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700\" />",
    "                <div className=\"absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center\">",
    "                  <span className=\"text-white border border-white/50 bg-black/40 backdrop-blur-sm px-6 py-2 text-xs uppercase tracking-[0.2em]\">View & Inquire</span>",
    "                </div>",
    "              </div>",
    "              <div className=\"flex flex-col items-center text-center space-y-1.5 px-2\">",
    "                <h3 className=\"text-sm md:text-base text-[#E8E0D0] font-light\" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>{item.name}</h3>",
    "                <p className=\"text-[10px] uppercase tracking-widest text-white/40\">{item.desc}</p>",
    "              </div>",
    "            </FadeIn>",
    "          ))}",
    "        </div>",
    "      </div>",
    "",
    "      {/* Modal / Quick View Overlay */}",
    "      {selectedItem && (",
    "        <div className=\"fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/90 backdrop-blur-md animate-fade-in\" onClick={() => setSelectedItem(null)}>",
    "           <div className=\"bg-[#111] border border-white/10 p-6 md:p-10 max-w-4xl w-full flex flex-col md:flex-row gap-8 relative overflow-y-auto max-h-[90vh] hide-scrollbar\" onClick={(e) => e.stopPropagation()}>",
    "              <button onClick={() => setSelectedItem(null)} className=\"absolute top-4 right-4 text-white/50 hover:text-white p-2 z-10\">",
    "                 <X className=\"w-6 h-6\" />",
    "              </button>",
    "",
    "              <div className=\"w-full md:w-1/2 relative aspect-[3/4] bg-[#0a0a09]\">",
    "                 <Image src={selectedItem.image} alt={selectedItem.name} fill className=\"object-cover\" />",
    "              </div>",
    "              ",
    "              <div className=\"w-full md:w-1/2 flex flex-col justify-center space-y-6 py-4\">",
    "                 <div>",
    "                    <p className=\"text-xs uppercase tracking-[0.3em] font-medium text-accent mb-2\">Signature Garment</p>",
    "                    <h2 className=\"text-3xl md:text-4xl font-serif text-[#E8E0D0] mb-4\">{selectedItem.name}</h2>",
    "                    <p className=\"text-sm text-white/50 leading-relaxed tracking-wide\" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>",
    "                       Every piece from our gallery serves as a foundation for your tailored commission. " + data.tech + " Feel free to inquire about exact pricing based on customized fabrics and fit detailing.",
    "                    </p>",
    "                 </div>",
    "",
    "                 <div className=\"border-t border-b border-white/10 py-6 space-y-3\">",
    "                    <div className=\"flex justify-between text-sm\">",
    "                       <span className=\"text-white/40 uppercase tracking-widest text-[10px]\">Availability</span>",
    "                       <span className=\"text-white/80 font-light\">Made to Measure</span>",
    "                    </div>",
    "                    <div className=\"flex justify-between text-sm\">",
    "                       <span className=\"text-white/40 uppercase tracking-widest text-[10px]\">Timeline</span>",
    "                       <span className=\"text-white/80 font-light\">3 - 5 Weeks</span>",
    "                    </div>",
    "                 </div>",
    "",
    "                 <div className=\"pt-4\">",
    "                    <Link href={`/contact?inquire=${encodeURIComponent(selectedItem.name)}`} className=\"hero-btn-secondary w-full text-center block\">Inquire For Price</Link>",
    "                 </div>",
    "              </div>",
    "           </div>",
    "        </div>",
    "      )}",
    "",
    "    </div>",
    "  );",
    "}"
  ];

  writePage(route, contentLines.join('\n'));
});

console.log("Grid e-commerce style subpages generated successfully with inquiry modal!");
