import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const categoryPrefixes: Record<string, string> = {
  'wedding/designer-suits': '10',
  'wedding/indo-western': '11',
  'wedding/sherwani': '12',
  'wedding/pattu-dhoti': '14',
  'wedding/designer-shirts': '13',
  'formals/business-suits': '20',
  'formals/blazers': '21',
  'formals/shirts': '22',
  'custom-tailoring/international-fabrics': '30',
  'custom-tailoring/fittings': '31',
  'custom-tailoring/hand-work': '32'
};

const dataFilePath = path.join(process.cwd(), 'data', 'products.json');

function getLocalProducts() {
  try {
    const fileContent = fs.readFileSync(dataFilePath, 'utf-8');
    const data = JSON.parse(fileContent);
    return data.products || [];
  } catch (error) {
    console.error("Error reading local products:", error);
    return [];
  }
}

function saveLocalProducts(products: any[]) {
  try {
    fs.writeFileSync(dataFilePath, JSON.stringify({ products }, null, 2), 'utf-8');
    return true;
  } catch (error) {
    console.error("Error writing local products:", error);
    return false;
  }
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    
    let products = getLocalProducts();
    
    if (category) {
      products = products.filter((p: any) => p.categoryId === category);
    }
    
    return NextResponse.json(products);
  } catch (error: any) {
    console.error("GET Products Error: ", error);
    return NextResponse.json({ error: 'Failed to fetch products from local data' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    const products = getLocalProducts();
    
    let proposedId = body.id;

    // Generate consecutive ID if none is provided
    if (!proposedId || proposedId.trim() === '') {
      const prefix = categoryPrefixes[body.categoryId] || '99';
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
    
    const imagesArray = body.images && body.images.length > 0 ? body.images : (body.image ? [body.image] : []);

    const newProduct = {
      ...body,
      id: proposedId,
      images: imagesArray,
      image: imagesArray[0] || '', 
      createdAt: new Date().toISOString()
    };
    
    products.push(newProduct);
    const saved = saveLocalProducts(products);
    
    if (!saved) {
      throw new Error("Failed to save to local file");
    }
    
    return NextResponse.json({ ...newProduct, fid: newProduct.id }, { status: 201 });
  } catch (error: any) {
    console.error("POST Products Error: ", error);
    return NextResponse.json({ error: 'Failed to add product to local data' }, { status: 500 });
  }
}
