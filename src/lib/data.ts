import type { Project, Message } from './types';

export const projects: Project[] = [];

export const messages: Message[] = [
  {
    id: '1',
    name: 'Jane Doe',
    email: 'jane.doe@example.com',
    message: 'Interested in collaborating on a new project. Your work looks impressive!',
    createdAt: new Date('2023-10-26T10:00:00Z').toISOString(),
    read: false,
  },
  {
    id: '2',
    name: 'John Smith',
    email: 'john.smith@example.com',
    message: 'Had a question about your project management tool. Could you provide more details?',
    createdAt: new Date('2023-10-25T14:30:00Z').toISOString(),
    read: true,
  },
  {
    id: '3',
    name: 'Emily White',
    email: 'emily.white@example.com',
    message: 'Just wanted to say I love your portfolio design! Very clean and professional.',
    createdAt: new Date('2023-10-24T09:15:00Z').toISOString(),
    read: true,
  },
];
