"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FadeIn } from '@/components/animations/FadeIn';
import { useWishlist } from '@/context/WishlistContext';
import { Heart } from 'lucide-react';
import { WishlistButton } from '@/components/ui/WishlistButton';

interface ProductDetailsMainProps {
  id: string;
}

export function ProductDetailsMain({ id }: ProductDetailsMainProps) {
  const [product, setProduct] = useState<any>(null);
  const [relatedProducts, setRelatedProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeImage, setActiveImage] = useState<string>('');
  const { toggleItem, isInWishlist } = useWishlist();

  useEffect(() => {
    if (!id) return;

    fetch('/api/products')
      .then(res => res.json())
      .then(data => {
        const found = data.find((p: any) => p.id === id);
        if (found) {
          setProduct(found);
          const firstImage = (found.images && found.images.length > 0) ? found.images[0] : found.image;
          setActiveImage(firstImage);
          
          let related = data.filter((p: any) => p.id !== id && p.categoryId === found.categoryId);
          if (related.length < 4) {
             const others = data.filter((p: any) => p.id !== id && !related.includes(p));
             related = [...related, ...others].slice(0, 4);
          } else {
             related = related.slice(0, 4);
          }
          setRelatedProducts(related);
        }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0a0a09] flex items-center justify-center">
        <p className="text-accent tracking-widest uppercase text-sm animate-pulse">Loading Garment Details...</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-[#0a0a09] flex flex-col items-center justify-center space-y-6">
        <p className="text-white text-2xl font-serif">Piece Not Found</p>
        <Link href="/" className="text-accent uppercase tracking-widest text-xs border-b border-accent pb-1">Return to MFKhan Home</Link>
      </div>
    );
  }

  const name = product.name;
  const derivedThumbnails = product.images && product.images.length > 0
    ? product.images
    : [product.image];

  return (
    <div className="min-h-screen pt-52 pb-12 bg-[#0a0a09] text-white">
      {/* Product Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "Product",
            "name": name,
            "image": activeImage,
            "description": product.desc,
            "sku": `MFK-${id}`,
            "brand": {
              "@type": "Brand",
              "name": "MF Khan International"
            },
            "offers": {
              "@type": "Offer",
              "url": `https://www.mfkhaninternational.com/collection/${id}`,
              "priceCurrency": "INR",
              "availability": "https://schema.org/InStock",
              "seller": {
                "@type": "Organization",
                "name": "MF Khan International"
              }
            }
          })
        }}
      />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12">

        {/* Breadcrumbs */}
        <nav className="text-[10px] uppercase tracking-widest text-white/50 mb-6 border-b border-white/10 pb-3" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-white transition-colors">Home</Link> &nbsp;/&nbsp;
          <span className="capitalize">{product.categoryId?.split('/')[0]}</span> &nbsp;/&nbsp;
          <span className="text-accent">{name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">

          {/* Thumbnails (Left - Desktop) */}
          <div className="hidden lg:flex lg:col-span-1 flex-col gap-3">
            {derivedThumbnails.map((thumb: string, idx: number) => (
              <button
                key={idx}
                onClick={() => setActiveImage(thumb)}
                className={`relative w-full aspect-[3/4] border ${activeImage === thumb ? 'border-accent' : 'border-white/10 shrink-0 opacity-60 hover:opacity-100'} transition-all`}
                aria-label={`View image ${idx + 1}`}
              >
                <Image src={thumb} alt={`MF Khan ${name} detail ${idx + 1}`} fill className="object-cover" />
              </button>
            ))}
          </div>

          {/* Main Image */}
          <div className="lg:col-span-6 relative aspect-[3/4] bg-[#111] overflow-hidden group shadow-2xl">
            {activeImage && (
              <>
                <Image
                  src={activeImage}
                  alt={`MF Khan International ${name} - Luxury Wedding Wear Visakhapatnam`}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-1000 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                <WishlistButton
                  item={{
                    id: String(id),
                    image: activeImage,
                    title: name,
                    category: product.categoryId?.split('/')[0] || 'Garment'
                  }}
                  className="opacity-100 md:opacity-100 bg-black/50 scale-125 top-6 right-6 hover:scale-[1.4] transition-transform"
                />
              </>
            )}
          </div>

          {/* Thumbnails (Mobile Below Main Image) */}
          <div className="flex lg:hidden overflow-x-auto gap-4 snap-x hide-scrollbar mb-6">
            {derivedThumbnails.map((thumb: string, idx: number) => (
              <button
                key={idx}
                onClick={() => setActiveImage(thumb)}
                className={`relative w-24 aspect-[3/4] shrink-0 border ${activeImage === thumb ? 'border-accent' : 'border-white/10 opacity-60'}`}
                aria-label={`View image ${idx + 1}`}
              >
                <Image src={thumb} alt={`MF Khan ${name} mobile thumbnail ${idx + 1}`} fill className="object-cover" />
              </button>
            ))}
          </div>

          {/* Product Details (Right) */}
          <div className="lg:col-span-5 flex flex-col space-y-4 lg:pl-12">

            <div className="border-b border-white/10 pb-8">
              <h1 className="text-2xl md:text-4xl font-serif text-[#E8E0D0] mb-2 leading-tight uppercase tracking-wide">{name}</h1>
              <p className="text-[10px] uppercase tracking-[0.2em] text-white/30 mb-3 font-medium">Style Code: MFK-{id}</p>
              <div className="text-sm text-white/60 leading-relaxed font-light normal-case max-w-xl">
                 <p>{product.desc}</p>
                 <p className="mt-4 text-xs italic">Crafting luxury for the discerning man of Visakhapatnam since 1940.</p>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-6 flex flex-wrap gap-3">
              <a
                href={`https://wa.me/919988393389?text=${encodeURIComponent(`Hello MFKhan International, I am interested in inquiring about the following piece: ${name} (Style Code: MFK-${id}). Please let me know how I can proceed.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-[2] min-w-[200px] flex items-center justify-center text-center bg-[#E8E0D0] text-black py-3.5 uppercase tracking-[0.2em] text-[10px] font-bold hover:bg-white transition-all transform hover:scale-[1.01] shadow-lg"
              >
                INQUIRE ON WHATSAPP
              </a>

              <button
                onClick={() => toggleItem({ id: String(id), image: activeImage, title: name, category: product.categoryId?.split('/')[0] || 'Garment' })}
                className={`flex-1 min-w-[160px] flex items-center justify-center gap-3 py-3.5 uppercase tracking-[0.2em] text-[10px] font-bold transition-all border ${isInWishlist(String(id))
                    ? 'border-accent text-accent bg-accent/10'
                    : 'border-white/10 text-white hover:border-white/30 hover:bg-white/5'
                  }`}
              >
                <Heart className={`w-3.5 h-3.5 transition-transform duration-500 ${isInWishlist(String(id)) ? 'fill-accent scale-110' : ''}`} />
                {isInWishlist(String(id)) ? 'SAVED' : 'WISHLIST'}
              </button>
            </div>

            <div className="pt-4 pb-4">
              <label htmlFor="comments" className="text-xs uppercase tracking-[0.2em] text-white/30 block mb-4 font-bold">Custom Requirements / Comments</label>
              <textarea
                id="comments"
                rows={4}
                className="w-full bg-[#0d0d0c] border border-white/10 text-white text-sm py-4 px-5 outline-none focus:border-accent resize-none placeholder:text-white/10"
                placeholder="Describe your measurement preferences, fabric choices, or specific requests to discuss on WhatsApp..."
              />
            </div>
          </div>
        </div>

        {/* Related Products Section */}
        {relatedProducts.length > 0 && (
          <div className="mt-32 pt-16 border-t border-white/10">
            <FadeIn>
              <h2 className="text-2xl md:text-3xl font-serif text-[#E8E0D0] mb-8 uppercase tracking-widest text-center">More from the Collection</h2>
            </FadeIn>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-6xl mx-auto">
              {relatedProducts.map((rp, idx) => (
                <FadeIn key={rp.id} delay={idx * 100}>
                  <Link href={`/collection/${rp.id}`} className="group block focus:outline-none">
                    <div className="relative aspect-[3/4] bg-[#1a1a1a] overflow-hidden rounded-sm border border-white/5 mb-4">
                      {rp.image && (
                        <Image
                          src={rp.image!}
                          alt={`MF Khan ${rp.name}`}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-[1.5s] ease-out opacity-80 group-hover:opacity-100"
                          sizes="(max-width: 768px) 50vw, 20vw"
                        />
                      )}
                    </div>
                    <div className="text-center px-2">
                       <h3 className="text-white/90 font-serif text-sm md:text-base leading-snug group-hover:text-accent transition-colors truncate">
                         {rp.name}
                       </h3>
                       <p className="text-white/40 text-[9px] uppercase tracking-widest mt-2">
                         {rp.categoryId?.split('/')[0] || 'Apparel'}
                       </p>
                    </div>
                  </Link>
                </FadeIn>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
