export interface SkillCategory {
  category: string;
  skills: string[];
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: 'Frontend',
    skills: ['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Material UI', 'Next.js'],
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Express', 'Python', 'REST APIs', 'GraphQL', 'MongoDB', 'PostgreSQL', 'Firebase'],
  },
  {
    category: 'Tools & Platforms',
    skills: ['Git', 'GitHub', 'Docker', 'AWS', 'Vercel', 'VS Code', 'Figma', 'Webpack'],
  },
  {
    category: 'Design & UX',
    skills: ['UI Design', 'Responsive Design', 'Typography', 'Color Theory', 'Prototyping', 'User Research', 'Accessibility', 'Animation'],
  },
];

export const CLOTHE_FRONTEND_STACK = [
  'Next.js 13',
  'React 18',
  'TypeScript',
  'Tailwind CSS',
  'Radix UI',
  'Zustand',
  'TanStack React Query',
  'React Hook Form',
  'Zod',
  'Axios',
];

export const CLOTHE_BACKEND_STACK = [
  'FastAPI',
  'Python',
  'SQLAlchemy',
  'PostgreSQL',
  'Redis',
  'JWT Auth',
  'Pydantic',
  'Alembic',
];
