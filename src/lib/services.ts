import { db } from './firebase';
import { collection, query, onSnapshot, doc, updateDoc, deleteDoc, addDoc } from 'firebase/firestore';

export interface ServiceItem {
  id?: string;
  name: string;
  description: string;
  category: 'readymade' | 'stitched';
  image?: string;
  featured: boolean;
}

// Real-time listener for services
export function subscribeToServices(callback: (services: ServiceItem[]) => void) {
  const q = query(collection(db, 'services'));
  return onSnapshot(q, (snapshot) => {
    const services = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as ServiceItem));
    callback(services);
  });
}

// Admin CRUD functions
export async function addService(service: ServiceItem) {
  return await addDoc(collection(db, 'services'), service);
}

export async function updateService(id: string, updates: Partial<ServiceItem>) {
  const docRef = doc(db, 'services', id);
  return await updateDoc(docRef, updates);
}

export async function deleteService(id: string) {
  const docRef = doc(db, 'services', id);
  return await deleteDoc(docRef);
}
