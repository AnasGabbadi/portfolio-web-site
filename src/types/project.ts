export type ProjectCategory = 'all' | 'school' | 'internship' | 'professional';

export interface Project {
  id: string;
  title: string;
  description: string;
  category: ProjectCategory;
  image?: string;
  gallery?: string[];
  demoUrl?: string;
  githubUrl?: string;
  detailsUrl?: string;
  technologies: string[];
}
