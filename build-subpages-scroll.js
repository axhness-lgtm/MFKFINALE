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
  'wedding/indo-western': { h1: 'Indo-Western Wear', intro: 'A masterful fusion of cultural heritage and modern tailoring lines.', tech: 'Structured cuts blending traditional embroidery with the precision of a bespoke suit.' },
  'wedding/sherwani': { h1: 'Wedding Sherwanis', intro: 'The pinnacle of traditional elegance.', tech: 'Heavy silks, velvet accents, structured shoulder lines, and intricate hand-embroidery.' },
  'wedding/designer-shirts': { h1: 'Designer Shirts', intro: 'The fundamental layer of luxury.', tech: 'Egyptian cottons, concealed plackets, wing collar mastery.' },
  'formals/business-suits': { h1: 'Business Suits', intro: 'Designed for the boardroom. Engineered for confidence.', tech: 'Half-canvas and full-canvas construction options depending on the drape required.' },
  'formals/blazers': { h1: 'Tailored Blazers', intro: 'Bridging the definitive line between smart and casual.', tech: 'Unstructured or lightly padded shoulders, patch pockets.' },
  'formals/shirts': { h1: 'Bespoke Formal Shirts', intro: 'The invisible armor of the modern executive.', tech: 'Two-ply cotton, genuine mother-of-pearl buttons.' },
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
    "import { useEffect } from 'react';",
    "",
    "const images = " + JSON.stringify(images) + ";",
    "",
    "export default function " + componentName + "Page() {",
    "  useEffect(() => {",
    "    document.documentElement.style.scrollSnapType = 'y mandatory';",
    "    document.documentElement.style.scrollBehavior = 'smooth';",
    "    return () => { ",
    "      document.documentElement.style.scrollSnapType = 'none';",
    "      document.documentElement.style.scrollBehavior = 'auto';",
    "    };",
    "  }, []);",
    "",
    "  const generateCards = (offset: number) => {",
    "    return Array.from({ length: 12 }).map((_, i) => ({",
    "      id: offset + i,",
    "      name: `Archive Piece No. ${offset + i + 1}`,",
    "      desc: `Bespoke Collection ${new Date().getFullYear()}`,",
    "      image: images[(offset + i) % images.length]",
    "    }));",
    "  };",
    "",
    "  const sets = [generateCards(0), generateCards(12), generateCards(24)];",
    "",
    "  return (",
    "    <div className=\"w-full bg-[#0a0a09] overflow-hidden\">",
    "      ",
    "      {/* SECTION 1: HERO */}",
    "      <section className=\"h-[100dvh] w-full snap-start snap-always flex flex-col justify-center items-center relative z-10 px-6 shrink-0 pt-20 mb-safe\">",
    "        <FadeIn className=\"text-center space-y-6 max-w-4xl mx-auto mb-16\">",
    "          <h1 className=\"text-5xl md:text-7xl font-serif font-light text-[#E8E0D0] leading-tight\">" + data.h1 + "</h1>",
    "          <p className=\"text-xl md:text-2xl text-accent font-serif italic\">" + data.intro + "</p>",
    "        </FadeIn>",
    "        <FadeIn delay={200} className=\"border-l border-white/10 pl-8 md:pl-12 max-w-3xl mx-auto\">",
    "          <p className=\"text-sm md:text-base text-white/70 leading-relaxed font-light tracking-wide\" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>",
    "            " + data.tech,
    "          </p>",
    "        </FadeIn>",
    "        <FadeIn delay={400} className=\"absolute bottom-10 animate-bounce\">",
    "           <p className=\"text-xs uppercase tracking-[0.3em] font-medium text-white/50\">Scroll Down</p>",
    "        </FadeIn>",
    "      </section>",
    "",
    "      {/* GALLERY SECTIONS */}",
    "      {sets.map((cardSet, sectionIndex) => (",
    "        <section key={sectionIndex} className=\"h-[100dvh] w-full snap-start snap-always flex flex-col justify-center items-center relative bg-[#0a0a09] shrink-0\">",
    "          <div className=\"absolute top-10 md:top-32 left-6 md:left-12\">",
    "             <h2 className=\"text-3xl lg:text-4xl font-serif text-[#E8E0D0] italic opacity-80 border-b border-white/10 pb-4 pr-12\">Gallery Set 0{sectionIndex + 1}</h2>",
    "          </div>",
    "",
    "          <div className=\"w-full pl-6 md:pl-12 flex overflow-x-auto snap-x snap-mandatory gap-6 hide-scrollbar [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] items-center pt-24 pb-8\">",
    "            {cardSet.map((item) => (",
    "              <div key={item.id} className=\"snap-center shrink-0 w-[80vw] sm:w-[450px] aspect-[3/4] relative group transition-all duration-700 bg-black/40 overflow-hidden cursor-pointer\">",
    "                <Image src={item.image} alt={item.name} fill className=\"object-cover opacity-70 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-105\" />",
    "                <div className=\"absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent z-0 opacity-90 group-hover:opacity-100 transition-opacity duration-700\" />",
    "                <div className=\"absolute bottom-0 left-0 right-0 p-8 md:p-10 z-10 transition-transform duration-700 transform translate-y-2 group-hover:translate-y-0\">",
    "                  <h3 className=\"text-2xl md:text-3xl font-serif text-[#E8E0D0] mb-2 leading-tight\">{item.name}</h3>",
    "                  <p className=\"text-[11px] uppercase tracking-[0.3em] font-medium text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-700\">{item.desc}</p>",
    "                </div>",
    "              </div>",
    "            ))}",
    "          </div>",
    "",
    "          {sectionIndex === 2 && (",
    "             <div className=\"absolute bottom-10 md:bottom-16 w-full flex justify-center\">",
    "                <Link href=\"/contact\" className=\"hero-btn-secondary px-12 py-5 bg-black/50 backdrop-blur-md border border-white/20 hover:bg-white/10 hover:border-accent\">Reserve & Consult</Link>",
    "             </div>",
    "          )}",
    "        </section>",
    "      ))}",
    "",
    "    </div>",
    "  );",
    "}"
  ];

  writePage(route, contentLines.join('\n'));
});

console.log("Section-by-section snap scroll subpages integrated perfectly!");
