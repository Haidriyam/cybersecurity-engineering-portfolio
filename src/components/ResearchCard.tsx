import React from 'react';
import { ResearchArea } from '../types';
import { TechnicalLabel } from './TechnicalLabel';
import { Tag } from './Tag';
import { ArrowRight } from 'lucide-react';

interface ResearchCardProps {
  area: ResearchArea;
  onNavigateProject?: (slug: string) => void;
  className?: string;
}

export const ResearchCard: React.FC<ResearchCardProps> = ({
  area,
  onNavigateProject,
  className = ''
}) => {
  return (
    <div
      className={`border border-[#D9D9D4] bg-[#FFFFFF] p-5 lg:p-6 transition-all ${className}`}
    >
      <div className="flex items-center justify-between gap-2 mb-3">
        <span className="font-mono text-xs font-semibold text-[#174A5B]">
          {area.code}
        </span>
        <TechnicalLabel variant="neutral">INVESTIGATION AREA</TechnicalLabel>
      </div>

      <h3 className="text-lg sm:text-xl font-sans font-semibold text-[#111111] leading-snug">
        {area.title}
      </h3>

      <div className="mt-4 space-y-3 text-xs sm:text-sm">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-wider text-[#8A8A85] block mb-1">
            Research Objective
          </span>
          <p className="text-[#333333] leading-relaxed font-sans">{area.objective}</p>
        </div>

        <div>
          <span className="text-[10px] font-mono uppercase tracking-wider text-[#8A8A85] block mb-1">
            Theoretical Framework
          </span>
          <p className="text-[#555555] leading-relaxed font-mono text-xs bg-[#FAF9F7] p-2.5 border border-[#EBEBE6]">
            {area.theoreticalFramework}
          </p>
        </div>

        <div>
          <span className="text-[10px] font-mono uppercase tracking-wider text-[#8A8A85] block mb-1">
            Current Experimental Focus
          </span>
          <p className="text-[#333333] leading-relaxed font-sans">{area.currentInvestigation}</p>
        </div>
      </div>

      <div className="mt-5 pt-4 border-t border-[#EBEBE6] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex flex-wrap gap-1.5 items-center">
          <span className="text-[10px] font-mono text-[#8A8A85] mr-1 uppercase">Standards:</span>
          {area.relevantStandards.map((std, idx) => (
            <Tag key={idx} label={std} size="sm" />
          ))}
        </div>

        {area.associatedProjects.length > 0 && onNavigateProject && (
          <div className="flex items-center space-x-2">
            <span className="text-[10px] font-mono text-[#8A8A85] uppercase">Testbeds:</span>
            {area.associatedProjects.map((slug) => (
              <button
                key={slug}
                onClick={() => onNavigateProject(slug)}
                className="font-mono text-xs text-[#174A5B] hover:underline inline-flex items-center space-x-0.5"
              >
                <span>{slug}</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
