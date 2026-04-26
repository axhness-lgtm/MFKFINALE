import { NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { doc, deleteDoc, updateDoc } from 'firebase/firestore';

export async function DELETE(request: Request, context: any) {
  try {
    const { id } = await context.params;
    await deleteDoc(doc(db, 'blogs', id as string));
    return NextResponse.json({ message: 'Deleted successfully' });
  } catch (error: any) {
    return NextResponse.json({ error: 'Failed to delete blog' }, { status: 500 });
  }
}

export async function PUT(request: Request, context: any) {
  try {
    const { id } = await context.params;
    const body = await request.json();
    const docRef = doc(db, 'blogs', id as string);
    await updateDoc(docRef, body);
    return NextResponse.json({ message: 'Updated successfully' });
  } catch (error: any) {
    return NextResponse.json({ error: 'Failed to update blog' }, { status: 500 });
  }
}
