import { NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { collection, getDocs, setDoc, doc } from 'firebase/firestore';

export async function GET() {
  try {
    const querySnapshot = await getDocs(collection(db, 'blogs'));
    const blogs: any[] = [];
    querySnapshot.forEach((doc) => {
      blogs.push({ ...doc.data(), id: doc.id });
    });
    
    // Sort descending by date
    blogs.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    
    return NextResponse.json(blogs);
  } catch (error: any) {
    console.error("GET Blogs Error: ", error);
    return NextResponse.json({ error: 'Failed to fetch blogs from database' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    const newDocRef = doc(collection(db, 'blogs')); 
    const newBlog = {
      ...body,
      id: newDocRef.id,
      createdAt: new Date().toISOString()
    };
    
    await setDoc(newDocRef, newBlog);
    
    return NextResponse.json(newBlog, { status: 201 });
  } catch (error: any) {
    console.error("POST Blogs Error: ", error);
    return NextResponse.json({ error: 'Failed to add blog to database' }, { status: 500 });
  }
}
