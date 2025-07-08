import { db } from '@/lib/firebase';
import type { Project } from '@/lib/types';
import { collection, getDocs, addDoc, doc, updateDoc, deleteDoc, query, orderBy } from 'firebase/firestore';

const projectsCollectionRef = collection(db, 'projects');

export async function getProjects(): Promise<Project[]> {
  try {
    const q = query(projectsCollectionRef, orderBy('order', 'asc'));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    } as Project));
  } catch (error) {
    console.error("Firebase connection error in getProjects. Have you configured src/lib/firebase.ts and enabled the Firestore API in your project?", error);
    return []; // Return empty array to prevent the page from crashing.
  }
}

export async function addProject(projectData: Omit<Project, 'id'>): Promise<string> {
  const docRef = await addDoc(projectsCollectionRef, projectData);
  return docRef.id;
}

export async function updateProject(id: string, projectData: Partial<Project>): Promise<void> {
  const projectDoc = doc(db, 'projects', id);
  await updateDoc(projectDoc, projectData);
}

export async function deleteProject(id: string): Promise<void> {
  const projectDoc = doc(db, 'projects', id);
  await deleteDoc(projectDoc);
}
