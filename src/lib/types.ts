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
  createdAt: Date;
  read: boolean;
}
