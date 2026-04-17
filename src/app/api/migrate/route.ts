import { NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { doc, setDoc } from 'firebase/firestore';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    const dataFile = path.join(process.cwd(), 'data', 'products.json');
    if (!fs.existsSync(dataFile)) {
       return NextResponse.json({ message: 'No local products.json found.' });
    }

    const fileContent = fs.readFileSync(dataFile, 'utf8');
    const data = JSON.parse(fileContent);
    const products = data.products || [];

    let migrated = 0;
    for (const product of products) {
      if (!product.id) continue;
      
      const docRef = doc(db, 'products', product.id); // Or let Firebase auto-generate ID, but using product.id ensures no duplicates
      await setDoc(docRef, product);
      migrated++;
    }

    return NextResponse.json({ 
      success: true, 
      message: `Successfully migrated ${migrated} products to Firestore! You can delete this file now.` 
    });
  } catch (error: any) {
    console.error("Migration Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
