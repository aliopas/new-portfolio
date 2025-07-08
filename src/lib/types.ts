export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  aiHint: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  order: number;
}

export interface Message {
  id: string;
  name: string;
  email: string;
  message: string;
  createdAt: string; // Changed to string to be serializable from Server to Client Component
  read: boolean;
}

export interface Settings {
  name: string;
  jobTitle: string;
  email: string;
  phone: string;
  location: string;
  aboutParagraph1: string;
  aboutParagraph2: string;
  skills: string;
}
