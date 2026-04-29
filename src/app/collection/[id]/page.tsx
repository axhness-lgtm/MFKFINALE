import { Metadata } from 'next';
import { ProductDetailsMain } from '@/components/sections/ProductDetailsMain';
import { extractIdFromSlug, generateProductSlug } from '@/lib/utils';

interface Props {
  params: { id: string };
}

// Next.js dynamic metadata generation
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.id;
  const id = extractIdFromSlug(slug);
  
  try {
    // We fetch from the internal API during build/request
    // Note: In production build, fetching from relative URL might fail,
    // so it's safer to use the base URL if available.
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'https://www.mfkhaninternational.com'}/api/products`);
    const products = await res.json();
    const product = products.find((p: any) => String(p.id) === id);

    if (!product) return { title: 'Product Not Found | MF Khan International' };

    const category = product.categoryId?.split('/')[0] || 'Luxury Wear';
    const title = `${product.name} | ${category} — MF Khan International Vizag`;
    const description = `${product.desc} Experience the finest ${category} in Visakhapatnam at the MFKhan flagship store. Quality conscious since 1940.`;

    return {
      title,
      description,
      openGraph: {
        title,
        description,
        images: product.images?.[0] || product.image ? [product.images?.[0] || product.image] : [],
      },
      alternates: {
        canonical: `https://www.mfkhaninternational.com/collection/${generateProductSlug(product.name, id)}`,
      },
    };
  } catch (error) {
    return { title: 'Luxury Garment | MF Khan International' };
  }
}

export default function ProductPage({ params }: Props) {
  return <ProductDetailsMain id={params.id} />;
}
