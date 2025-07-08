import { db } from '@/lib/firebase';
import type { Message } from '@/lib/types';
import { collection, getDocs, addDoc, doc, updateDoc, deleteDoc, query, orderBy, Timestamp } from 'firebase/firestore';

type MessageInput = Omit<Message, 'id' | 'createdAt' | 'read'>;

export async function getMessages(): Promise<Message[]> {
  if (!db.app) {
    console.log("Firebase not configured, returning empty messages array.");
    return [];
  }
  try {
    const messagesCollectionRef = collection(db, 'messages');
    const q = query(messagesCollectionRef, orderBy('createdAt', 'desc'));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => {
      const data = doc.data();
      const createdAt = data.createdAt as Timestamp;
      return {
        id: doc.id,
        name: data.name,
        email: data.email,
        message: data.message,
        // Firestore timestamps need to be converted to a serializable format
        // Also check if createdAt exists to prevent crash on bad data
        createdAt: createdAt ? createdAt.toDate().toISOString() : new Date().toISOString(),
        read: data.read,
      } as Message;
    });
  } catch (error) {
    console.error("Firebase connection error in getMessages. Have you configured src/lib/firebase.ts and enabled the Firestore API in your project?", error);
    return []; // Return empty array to prevent the page from crashing.
  }
}

export async function addMessage(messageData: MessageInput): Promise<string> {
  if (!db.app) return "";
  const messagesCollectionRef = collection(db, 'messages');
  const docRef = await addDoc(messagesCollectionRef, {
    ...messageData,
    read: false,
    createdAt: new Date(), // Firestore will convert this to a Timestamp
  });
  return docRef.id;
}

export async function updateMessage(id: string, messageData: Partial<Omit<Message, 'id'>>): Promise<void> {
  if (!db.app) return;
  const messageDoc = doc(db, 'messages', id);
  await updateDoc(messageDoc, messageData);
}

export async function deleteMessage(id: string): Promise<void> {
  if (!db.app) return;
  const messageDoc = doc(db, 'messages', id);
  await deleteDoc(messageDoc);
}
