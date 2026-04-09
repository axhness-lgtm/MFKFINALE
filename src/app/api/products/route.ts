import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const dataFile = path.join(process.cwd(), 'data', 'products.json');

const getProducts = () => {
  try {
    const data = fs.readFileSync(dataFile, 'utf8');
    return JSON.parse(data).products || [];
  } catch (error) {
    return [];
  }
};

const saveProducts = (products: any) => {
  fs.writeFileSync(dataFile, JSON.stringify({ products }, null, 2));
};

const categoryPrefixes: Record<string, string> = {
  'wedding/designer-suits': '10',
  'wedding/indo-western': '11',
  'wedding/sherwani': '12',
  'wedding/designer-shirts': '13',
  'formals/business-suits': '20',
  'formals/blazers': '21',
  'formals/shirts': '22',
  'custom-tailoring/international-fabrics': '30',
  'custom-tailoring/fittings': '31',
  'custom-tailoring/hand-work': '32'
};

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category');
  
  let products = getProducts();
  
  if (category) {
    products = products.filter((p: any) => p.categoryId === category);
  }
  
  return NextResponse.json(products);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const products = getProducts();
    
    let proposedId = body.id;

    // Generate consecutive ID if none is provided
    if (!proposedId || proposedId.trim() === '') {
      const prefix = categoryPrefixes[body.categoryId] || '99';
      // Find all existing products in this category that match the prefix
      const categoryProducts = products.filter((p: any) => p.categoryId === body.categoryId && p.id && p.id.startsWith(prefix));
      
      let maxNum = 0;
      categoryProducts.forEach((p: any) => {
        const numPart = parseInt(p.id.substring(prefix.length), 10);
        if (!isNaN(numPart) && numPart > maxNum) {
          maxNum = numPart;
        }
      });
      
      const nextNum = maxNum + 1;
      proposedId = `${prefix}${String(nextNum).padStart(2, '0')}`;
    }

    // Check for uniqueness
    if (products.some((p: any) => p.id === proposedId)) {
      return NextResponse.json({ error: 'A piece with this Unique Style Code already exists. Please choose a different code, or leave it blank to auto-generate.' }, { status: 400 });
    }
    
    // Ensure images array is present and fallback to image string if needed
    const imagesArray = body.images && body.images.length > 0 ? body.images : (body.image ? [body.image] : []);

    const newProduct = {
      ...body,
      id: proposedId,
      images: imagesArray,
      image: imagesArray[0] || '', // Fallback for backwards compatibility
      createdAt: new Date().toISOString()
    };
    
    products.push(newProduct);
    saveProducts(products);
    
    return NextResponse.json(newProduct, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to add product' }, { status: 500 });
  }
}
