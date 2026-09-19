import React from 'react';
import { ProjectItem } from '../types';
import { ProjectMeta } from './ProjectMeta';

interface ProjectHeaderProps {
  project: ProjectItem;
  className?: string;
}

export const ProjectHeader: React.FC<ProjectHeaderProps> = ({ project, className = '' }) => {
  return (
    <header className={`mb-8 ${className}`}>
      <div className="mb-3">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-sans font-semibold tracking-tight text-[#111111] leading-tight">
          {project.title}
        </h1>
        <p className="mt-2 text-sm sm:text-base text-[#666666] leading-relaxed max-w-3xl">
          {project.subtitle}
        </p>
      </div>
      <ProjectMeta project={project} className="mt-4" />
    </header>
  );
};
