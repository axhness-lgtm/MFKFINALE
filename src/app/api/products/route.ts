import { NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { collection, getDocs, setDoc, doc, query, where, Timestamp } from 'firebase/firestore';

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

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    
    let productsRef = collection(db, 'products');
    let q;
    
    if (category) {
      q = query(productsRef, where("categoryId", "==", category));
    } else {
      q = query(productsRef);
    }
    
    const querySnapshot = await getDocs(q);
    const products: any[] = [];
    
    querySnapshot.forEach((doc) => {
      products.push({ ...doc.data(), fid: doc.id });
    });
    
    return NextResponse.json(products);
  } catch (error: any) {
    console.error("GET Products Error: ", error);
    return NextResponse.json({ error: 'Failed to fetch products from database' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Get all existing products to check IDs and generate a new one
    const querySnapshot = await getDocs(collection(db, 'products'));
    const products: any[] = [];
    querySnapshot.forEach((doc) => {
      products.push(doc.data());
    });
    
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
    
    // Create new document in 'products' collection using the custom ID or a generated string 
    // We'll use the unique ID string as the document ID for simplicity, or just let Firebase generate one
    // Let's use auto-generated doc ID and store `id` inside it as property
    const newDocRef = doc(collection(db, 'products')); 
    await setDoc(newDocRef, newProduct);
    
    return NextResponse.json({ ...newProduct, fid: newDocRef.id }, { status: 201 });
  } catch (error: any) {
    console.error("POST Products Error: ", error);
    return NextResponse.json({ error: 'Failed to add product to database' }, { status: 500 });
  }
}
