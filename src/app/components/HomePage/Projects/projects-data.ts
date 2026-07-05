import type { StaticImageData } from 'next/image';

import projecti from '@/assets/ProjectImg/project-i-news-paper.png';
import projectii from '@/assets/ProjectImg/villa-x-project-ii.png';
import projectiii from '@/assets/ProjectImg/book-hive.png';

export interface ProjectLinks {
  live?: string;
  clientRepo?: string;
  serverRepo?: string;
}

export interface Project {
  id: string;
  name: string;
  category: string;
  image: StaticImageData;
  description: string;
  features: string[];
  techStack: string[];
  links: ProjectLinks;
}

export const projects: Project[] = [
  {
    id: 'the-voice-daily',
    name: 'The Voice Daily',
    category: 'Newspaper Web App',
    image: projecti,
    description:
      'A full-stack newspaper platform with dynamic publishing and premium subscriptions.',
    features: [
      'Dynamic article publishing and management',
      'Premium subscription and content access',
      'Admin dashboard for user and article control',
    ],
    techStack: ['React', 'Tailwind CSS', 'React Router', 'Node.js', 'Express.js', 'MongoDB', 'Firebase'],
    links: { live: '#', clientRepo: '#', serverRepo: '#' },
  },
  {
    id: 'villax',
    name: 'VillaX',
    category: 'Room Booking Platform',
    image: projectii,
    description: 'An online room booking and rental platform with role-based dashboards.',
    features: [
      'Room booking with browsing, category filters, and search',
      'Secure booking and payment integration with Stripe',
      'Role-based authentication for Admin, Host, and Guest',
    ],
    techStack: ['Next.js', 'Redux', 'Zod', 'Mongoose', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'Firebase'],
    links: { live: '#', clientRepo: '#', serverRepo: '#' },
  },
  {
    id: 'bookhive',
    name: 'BookHive',
    category: 'Library Management',
    image: projectiii,
    description: 'An online library management platform for tracking books and borrowing.',
    features: [
      'Book addition, categorization, and detailed management',
      'Borrowing and returning system with quantity tracking',
      'Private routes secured with Firebase authentication',
    ],
    techStack: ['Next.js', 'Tailwind CSS', 'Shadcn', 'Node.js', 'Express.js', 'MongoDB', 'Firebase'],
    links: { live: '#', clientRepo: '#', serverRepo: '#' },
  },
];

export function getProjectById(id: string): Project | undefined {
  return projects.find((project) => project.id === id);
}