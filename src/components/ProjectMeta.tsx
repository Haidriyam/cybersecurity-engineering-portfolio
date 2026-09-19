import React from 'react';
import { ProjectItem } from '../types';
import { TechnicalLabel } from './TechnicalLabel';

interface ProjectMetaProps {
  project: ProjectItem;
  className?: string;
}

export const ProjectMeta: React.FC<ProjectMetaProps> = ({ project, className = '' }) => {
  return (
    <div
      className={`border border-[#D9D9D4] bg-[#FFFFFF] p-4 text-xs font-mono grid grid-cols-2 sm:grid-cols-4 gap-4 ${className}`}
    >
      <div>
        <span className="text-[#8A8A85] block text-[10px] uppercase tracking-wider mb-0.5">
          Project ID
        </span>
        <span className="text-[#111111] font-semibold">{project.id}</span>
      </div>
      <div>
        <span className="text-[#8A8A85] block text-[10px] uppercase tracking-wider mb-0.5">
          Domain
        </span>
        <span className="text-[#174A5B] font-medium">{project.domain}</span>
      </div>
      <div>
        <span className="text-[#8A8A85] block text-[10px] uppercase tracking-wider mb-0.5">
          Timeline / Date
        </span>
        <span className="text-[#111111]">{project.date}</span>
      </div>
      <div>
        <span className="text-[#8A8A85] block text-[10px] uppercase tracking-wider mb-0.5">
          Validation Status
        </span>
        <TechnicalLabel variant={project.status === 'Active Testbed' ? 'accent' : 'neutral'}>
          {project.status}
        </TechnicalLabel>
      </div>
    </div>
  );
};
