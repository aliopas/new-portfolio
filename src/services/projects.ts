import { db } from '@/lib/firebase';
import type { Project } from '@/lib/types';
import { collection, getDocs, addDoc, doc, updateDoc, deleteDoc, query, orderBy } from 'firebase/firestore';

// Sample data to seed the database if it's empty
const sampleProjects: Omit<Project, 'id'>[] = [
  {
    title: "Modern E-commerce Platform",
    description: "A full-featured e-commerce site built with the latest web technologies, providing a seamless shopping experience.",
    image: "https://placehold.co/600x400.png",
    aiHint: "online store",
    tags: ["Next.js", "TypeScript", "Stripe"],
    liveUrl: "#",
    githubUrl: "#",
    order: 1,
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application to help teams stay organized and productive.",
    image: "https://placehold.co/600x400.png",
    aiHint: "to-do list",
    tags: ["React", "Firebase", "Zustand"],
    liveUrl: "#",
    githubUrl: "#",
    order: 2,
  },
  {
    title: "Data Visualization Dashboard",
    description: "An interactive dashboard for visualizing complex datasets with dynamic charts and graphs.",
    image: "https://placehold.co/600x400.png",
    aiHint: "analytics dashboard",
    tags: ["D3.js", "shadcn/ui", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
    order: 3,
  },
];

async function seedProjects() {
  if (!db.app) return;
  const projectsCollectionRef = collection(db, 'projects');
  for (const project of sampleProjects) {
    await addDoc(projectsCollectionRef, project);
  }
}

export async function getProjects(): Promise<Project[]> {
  // Gracefully handle the case where Firebase is not configured.
  if (!db.app) {
    console.log("Firebase not configured, returning sample projects.");
    return sampleProjects.map((p, i) => ({ id: `sample-project-${i + 1}`, ...p }));
  }
  try {
    const projectsCollectionRef = collection(db, 'projects');
    const q = query(projectsCollectionRef, orderBy('order', 'asc'));
    let querySnapshot = await getDocs(q);

    // If the collection is empty, seed it with sample data
    if (querySnapshot.empty) {
      console.log("Projects collection is empty. Seeding with sample data...");
      await seedProjects();
      // Fetch the data again after seeding
      querySnapshot = await getDocs(q);
      console.log("Seeding complete.");
    }

    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    } as Project));
  } catch (error) {
    console.error("Firebase connection error in getProjects. Have you configured src/lib/firebase.ts and enabled the Firestore API in your project?", error);
    // Return sample data on error for a better dev experience
    return sampleProjects.map((p, i) => ({ id: `sample-project-error-${i + 1}`, ...p }));
  }
}

export async function addProject(projectData: Omit<Project, 'id'>): Promise<string> {
  if (!db.app) return "";
  const projectsCollectionRef = collection(db, 'projects');
  const docRef = await addDoc(projectsCollectionRef, projectData);
  return docRef.id;
}

export async function updateProject(id: string, projectData: Partial<Project>): Promise<void> {
  if (!db.app) return;
  const projectDoc = doc(db, 'projects', id);
  await updateDoc(projectDoc, projectData);
}

export async function deleteProject(id: string): Promise<void> {
  if (!db.app) return;
  const projectDoc = doc(db, 'projects', id);
  await deleteDoc(projectDoc);
}
