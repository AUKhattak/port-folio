import { clotheConfig } from './clothe/clotheConfig';
import { idisConfig } from './idis/idisConfig';
import { entruckConfig } from './entruck/entruckConfig';

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  type: 'basic' | 'detailed'; // 'basic' for simple projects, 'detailed' for complex ones like CLOTHE
  image?: string;
  github?: string;
  live?: string;
}

export const projectsConfig: Project[] = [clotheConfig, idisConfig, entruckConfig];
