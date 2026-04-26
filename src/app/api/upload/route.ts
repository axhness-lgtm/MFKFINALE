import { NextResponse } from 'next/server';
import { storage } from '@/lib/firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;
    
    if (!file) {
      return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
    }

    const buffer = await file.arrayBuffer();
    const filename = `${Date.now()}-${file.name.replace(/[^a-zA-Z0-9.-]/g, '_')}`;
    
    const storageRef = ref(storage, `uploads/${filename}`);
    const snapshot = await uploadBytes(storageRef, new Uint8Array(buffer), {
      contentType: file.type || 'image/jpeg',
    });
    
    const downloadUrl = await getDownloadURL(snapshot.ref);
    
    return NextResponse.json({ url: downloadUrl });
  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json({ error: 'Failed to upload image' }, { status: 500 });
  }
}
