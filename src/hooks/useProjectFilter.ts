'use client';

import { useState } from 'react';
import { Project, ProjectCategory } from '@/types/project';

export const useProjectFilter = (projects: Project[]) => {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('all');

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return { activeFilter, setActiveFilter, filteredProjects };
};