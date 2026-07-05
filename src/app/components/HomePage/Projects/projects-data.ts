






import type { StaticImageData } from 'next/image';

import projecti from '@/assets/ProjectImg/p-i-small-one.png';
import projectii from '@/assets/ProjectImg/p-ii-small-one.png';
import projectiii from '@/assets/ProjectImg/p-iii-small-one.png';

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
  description: string;            // short, for card
  features: string[];
  techStack: string[];
  links: ProjectLinks;

  // ---------- new fields for detail page ----------
  detailedDescription: string;     // longer description
  challenges: string[];           // list of challenges faced
  improvements: string[];         // what could be improved
  futurePlans: string[];          // future features / plans
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
    links: { live: 'https://the-voice-daily-newspaper-polished.netlify.app', clientRepo: 'https://github.com/khalidhossain5000/newspaper-web-app-polished-client-side', serverRepo: '#' },
    detailedDescription:
      'The Voice Daily is a full-featured newspaper web application that allows editors to publish articles, manage categories, and offer premium content to subscribers. The platform includes role-based authentication, a rich text editor for articles, and a payment gateway integration for subscriptions.',
    challenges: [
      'Implementing role-based access control with JWT and Firebase',
      'Real-time article approval workflow',
      'Stripe integration for subscription payments',
    ],
    improvements: [
      'Add a comment system for users',
      'Improve SEO with server-side rendering',
      'Optimize image loading with lazy loading',
    ],
    futurePlans: [
      'Introduce a mobile app version',
      'Add AI-powered content recommendations',
      'Enable multi-language support',
    ],
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
    links: { live: 'https://villa-x-nextjs-client-side.vercel.app', clientRepo: 'https://github.com/khalidhossain5000/villa-x-nextjs-client-side', serverRepo: '#' },
    detailedDescription:
      'VillaX is a comprehensive room booking platform where hosts can list properties, guests can search and book rooms, and admins oversee the entire ecosystem. The application features an interactive map, real-time availability calendar, and integrated Stripe payments.',
    challenges: [
      'Managing complex booking state with Redux',
      'Implementing a real-time chat between host and guest',
      'Designing a scalable schema for multi-role users',
    ],
    improvements: [
      'Add property review and rating system',
      'Improve search filtering with location autocomplete',
      'Optimise performance with image CDN',
    ],
    futurePlans: [
      'Expand to multi-city support',
      'Add a loyalty programme for frequent guests',
      'Develop a native mobile app',
    ],
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
    links: { live: 'https://book-hive-library-management-system.vercel.app', clientRepo: 'https://github.com/khalidhossain5000/book-hive-libray-client-side', serverRepo: '#' },
    detailedDescription:
      'BookHive streamlines library operations by allowing librarians to add and categorise books, track borrowing and returns, and manage user accounts. The system enforces borrowing limits and sends email reminders for overdue items.',
    challenges: [
      'Designing a user-friendly admin dashboard',
      'Handling concurrent borrowing and stock updates',
      'Setting up secure Firebase authentication with custom claims',
    ],
    improvements: [
      'Integrate barcode scanning for faster book checkouts',
      'Add a book reservation queue',
      'Improve UI with Shadcn components consistency',
    ],
    futurePlans: [
      'Develop a public-facing catalogue with search',
      'Add an analytics dashboard for library usage',
      'Enable integration with external library APIs',
    ],
  },
];

export function getProjectById(id: string): Project | undefined {
  return projects.find((project) => project.id === id);
}