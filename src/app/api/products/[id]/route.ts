import { NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { collection, query, where, getDocs, updateDoc, deleteDoc, doc } from 'firebase/firestore';

export async function PUT(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const id = (await params).id;
    const body = await request.json();
    
    // Find the product by its custom 'id' field
    const productsRef = collection(db, 'products');
    const q = query(productsRef, where('id', '==', id));
    const querySnapshot = await getDocs(q);
    
    if (querySnapshot.empty) {
      return NextResponse.json({ error: 'Product not found' }, { status: 404 });
    }
    
    // There should only be one match, we update the first one
    const docToUpdate = querySnapshot.docs[0];
    const docRef = doc(db, 'products', docToUpdate.id);
    
    await updateDoc(docRef, { ...body, updatedAt: new Date().toISOString() });
    
    return NextResponse.json({ ...body, id, fid: docToUpdate.id });
  } catch (error: any) {
    console.error("PUT Products Error: ", error);
    return NextResponse.json({ error: 'Failed to update product in database' }, { status: 500 });
  }
}

export async function DELETE(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const id = (await params).id;
    
    // Find the product by its custom 'id' field
    const productsRef = collection(db, 'products');
    const q = query(productsRef, where('id', '==', id));
    const querySnapshot = await getDocs(q);
    
    if (querySnapshot.empty) {
       return NextResponse.json({ error: 'Product not found' }, { status: 404 });
    }
    
    const docToDelete = querySnapshot.docs[0];
    const docRef = doc(db, 'products', docToDelete.id);
    
    await deleteDoc(docRef);
    
    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("DELETE Products Error: ", error);
    return NextResponse.json({ error: 'Failed to delete product from database' }, { status: 500 });
  }
}
