import { db } from '@/lib/firebase';
import type { Message } from '@/lib/types';
import { collection, getDocs, addDoc, doc, updateDoc, deleteDoc, query, orderBy, Timestamp } from 'firebase/firestore';

const messagesCollectionRef = collection(db, 'messages');

type MessageInput = Omit<Message, 'id' | 'createdAt' | 'read'>;

export async function getMessages(): Promise<Message[]> {
  const q = query(messagesCollectionRef, orderBy('createdAt', 'desc'));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(doc => {
    const data = doc.data();
    return {
      id: doc.id,
      name: data.name,
      email: data.email,
      message: data.message,
      // Firestore timestamps need to be converted to a serializable format
      createdAt: (data.createdAt as Timestamp).toDate().toISOString(),
      read: data.read,
    } as Message;
  });
}

export async function addMessage(messageData: MessageInput): Promise<string> {
  const docRef = await addDoc(messagesCollectionRef, {
    ...messageData,
    read: false,
    createdAt: new Date(), // Firestore will convert this to a Timestamp
  });
  return docRef.id;
}

export async function updateMessage(id: string, messageData: Partial<Omit<Message, 'id'>>): Promise<void> {
  const messageDoc = doc(db, 'messages', id);
  await updateDoc(messageDoc, messageData);
}

export async function deleteMessage(id: string): Promise<void> {
  const messageDoc = doc(db, 'messages', id);
  await deleteDoc(messageDoc);
}
