export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  github?: string;
  live?: string;
}

export interface ProjectFeature {
  title: string;
  description: string;
  icon: any;
}

export interface ProjectHighlight {
  title: string;
  description: string;
}
