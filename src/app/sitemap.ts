import { MetadataRoute } from 'next';
import { db } from '@/lib/firebase';
import { collection, getDocs } from 'firebase/firestore';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.mfkhaninternational.com';

  // Base routes
  const routes = [
    '',
    '/heritage',
    '/wedding',
    '/wedding/designer-suits',
    '/wedding/indo-western',
    '/wedding/sherwani',
    '/wedding/pattu-dhoti',
    '/wedding/designer-shirts',
    '/formals',
    '/formals/business-suits',
    '/formals/blazers',
    '/formals/shirts',
    '/custom-tailoring',
    '/custom-tailoring/international-fabrics',
    '/custom-tailoring/fittings',
    '/custom-tailoring/hand-work',
    '/contact',
    '/wishlist'
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  let productRoutes: any[] = [];
  try {
    const productsSnapshot = await getDocs(collection(db, 'products'));
    productsSnapshot.forEach((doc) => {
      const product = doc.data();
      productRoutes.push({
        url: `${baseUrl}/collection/${product.id}`,
        lastModified: product.updatedAt ? new Date(product.updatedAt).toISOString() : new Date(product.createdAt || new Date()).toISOString(),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
      });
    });
  } catch (err) {
    console.error("Sitemap Generation Error:", err);
  }

  return [...routes, ...productRoutes];
}
