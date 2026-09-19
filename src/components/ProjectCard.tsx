import React from 'react';
import { ProjectItem } from '../types';
import { TechnicalLabel } from './TechnicalLabel';
import { ArrowRight, ExternalLink, ShieldCheck } from 'lucide-react';

interface ProjectCardProps {
  project: ProjectItem;
  onSelect: (slug: string) => void;
  className?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  onSelect,
  className = ''
}) => {
  const problemOrThreat = project.threatModel || project.problemStatement || project.claim;
  const validationStandards = project.securityValidation || [
    'PEP8 / Flake8 Compliance',
    'Automated CI Tests'
  ];

  return (
    <article
      onClick={() => onSelect(project.slug)}
      className={`group border border-[#D9D9D4] bg-[#FFFFFF] p-5 hover:border-[#174A5B] transition-all cursor-pointer flex flex-col justify-between ${className}`}
    >
      <div className="space-y-3">
        {/* Header bar */}
        <div className="flex items-center justify-between gap-2 border-b border-[#EBEBE6] pb-2.5">
          <div className="flex items-center space-x-2">
            <span className="font-mono text-xs font-semibold text-[#174A5B]">
              {project.id}
            </span>
            <span className="text-[#D9D9D4]">·</span>
            <span className="font-mono text-[11px] text-[#666666]">
              {project.date}
            </span>
          </div>
          <TechnicalLabel variant={project.status === 'Active Testbed' ? 'accent' : 'neutral'}>
            {project.status}
          </TechnicalLabel>
        </div>

        {/* Title and Domain */}
        <div>
          <div className="font-mono text-[10px] text-[#8A8A85] uppercase tracking-wider mb-1">
            DOMAIN: <span className="text-[#174A5B] font-semibold">{project.domain}</span>
          </div>
          <h3 className="text-base sm:text-lg font-sans font-bold text-[#111111] group-hover:text-[#174A5B] transition-colors leading-snug">
            {project.title}
          </h3>
          <p className="mt-1.5 text-xs text-[#555555] font-sans leading-relaxed line-clamp-2">
            {project.subtitle}
          </p>
        </div>

        {/* Problem Statement or Threat Model */}
        {problemOrThreat && (
          <div className="p-2.5 bg-[#FAF9F7] border-l-2 border-[#174A5B] text-xs font-mono text-[#333333] leading-relaxed">
            <span className="font-semibold text-[#174A5B] block text-[10px] uppercase tracking-wider mb-0.5">
              {project.threatModel ? 'THREAT MODEL // PROBLEM STATEMENT:' : 'PROBLEM STATEMENT // CORE CLAIM:'}
            </span>
            <span className="line-clamp-2">{problemOrThreat}</span>
          </div>
        )}

        {/* Key Technologies */}
        <div className="space-y-1">
          <div className="text-[10px] font-mono text-[#8A8A85] uppercase tracking-wider">
            Key Technologies:
          </div>
          <div className="flex flex-wrap gap-1">
            {(project.keyTechnologies || project.tags).slice(0, 4).map((tech, idx) => (
              <span
                key={idx}
                className="px-1.5 py-0.5 bg-[#FFFFFF] border border-[#D9D9D4] text-[10px] font-mono text-[#444444]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Security / Validation Standard */}
        <div className="p-2 bg-[#FAF9F7] border border-[#EBEBE6] flex items-start space-x-1.5 text-[10px] font-mono text-[#444444]">
          <ShieldCheck className="w-3.5 h-3.5 text-[#356859] shrink-0 mt-0.5" />
          <div className="truncate">
            <span className="font-semibold text-[#111111] uppercase mr-1">Validation:</span>
            <span className="text-[#555555]">{validationStandards[0]}</span>
          </div>
        </div>
      </div>

      {/* Footer Links & Actions */}
      <div className="mt-4 pt-3 border-t border-[#EBEBE6] flex items-center justify-between text-xs font-mono">
        {project.repositoryUrl ? (
          <a
            href={project.repositoryUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="text-[#666666] hover:text-[#174A5B] inline-flex items-center space-x-1"
          >
            <span className="text-[11px]">Repository</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        ) : (
          <span className="text-[#8A8A85] text-[11px]">Internal Dossier</span>
        )}

        <div className="inline-flex items-center space-x-1 text-[#174A5B] font-semibold group-hover:translate-x-0.5 transition-transform">
          <span>Technical Dossier</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </div>
      </div>
    </article>
  );
};
