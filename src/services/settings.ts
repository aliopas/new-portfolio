import { db } from '@/lib/firebase';
import type { Settings } from '@/lib/types';
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';

const settingsDocRef = doc(db, 'settings', 'main');

const defaultSettings: Settings = {
  aboutParagraph1: "I’m a creative and performance-focused Full Stack Developer who believes great products aren't just built — they’re crafted with vibe. I combine solid technical skills with a strong sense of design and user experience. Whether I'm building dynamic web apps, integrating AI-powered features, or managing complex backends, I follow the Vibe Coding approach — development that feels as good as it functions.",
  aboutParagraph2: "From Node.js, Express, MySQL, and Firebase on the backend, to React, Next.js, Tailwind, and modern UI tools on the frontend, I deliver smart, scalable solutions with clean code and great energy. I also work with Firebase Studio and Cursor to streamline the dev process, build faster, and bring ideas to life with clarity and creativity.",
  skills: "Responsive & smart web apps, AI-enhanced features (chatbots, smart search, recommendations), Full-stack MVPs and dashboards, Clean, animated, and intuitive user interfaces, Fast, scalable, and vibe-driven code",
};

export async function getSettings(): Promise<Settings> {
  try {
    const docSnap = await getDoc(settingsDocRef);
    if (docSnap.exists()) {
      return docSnap.data() as Settings;
    } else {
      await setDoc(settingsDocRef, defaultSettings);
      return defaultSettings;
    }
  } catch (error) {
     console.error("Firebase connection error in getSettings. Have you configured src/lib/firebase.ts and enabled the Firestore API in your project?", error);
    return defaultSettings;
  }
}

export async function updateSettings(settingsData: Partial<Settings>): Promise<void> {
  await updateDoc(settingsDocRef, settingsData);
}
