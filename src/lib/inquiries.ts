import { db } from './firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export interface InquiryData {
  name: string;
  phone: string;
  email: string;
  message: string;
  interest?: string;
  category?: string;
}

export async function submitInquiry(data: InquiryData) {
  try {
    const docRef = await addDoc(collection(db, 'inquiries'), {
      ...data,
      timestamp: serverTimestamp(),
      status: 'new'
    });
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error("Error adding inquiry: ", error);
    return { success: false, error };
  }
}
