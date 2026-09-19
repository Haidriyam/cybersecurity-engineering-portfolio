import React from 'react';
import { ExperienceItem } from '../types';
import { Tag } from './Tag';

interface TimelineProps {
  items: ExperienceItem[];
  className?: string;
}

export const Timeline: React.FC<TimelineProps> = ({ items, className = '' }) => {
  return (
    <div className={`space-y-12 relative ${className}`}>
      {items.map((item) => (
        <article
          key={item.id}
          className="border border-[#D9D9D4] bg-[#FFFFFF] p-6 sm:p-8 space-y-6 hover:border-[#174A5B] transition-colors"
        >
          {/* Header Metadata Ribbon */}
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between border-b border-[#D9D9D4] pb-4 gap-2">
            <div>
              <div className="flex items-center space-x-2 text-xs font-mono text-[#174A5B] font-semibold mb-1">
                <span>{item.id}</span>
                <span>·</span>
                <span>{item.period}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-sans font-bold text-[#111111]">
                {item.role}
              </h3>
              <div className="text-sm font-mono text-[#555555] mt-0.5">
                <span className="font-semibold text-[#111111]">{item.organization}</span>
                {item.division && <span> · {item.division}</span>}
              </div>
            </div>

            <div className="text-xs font-mono text-[#8A8A85] sm:text-right">
              <span>LOCATION: {item.location}</span>
            </div>
          </div>

          {/* Scope / Summary */}
          <p className="text-sm sm:text-base text-[#333333] font-sans leading-relaxed">
            {item.scope}
          </p>

          {/* Technical Responsibilities */}
          {item.technicalResponsibilities && item.technicalResponsibilities.length > 0 && (
            <div className="space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#8A8A85] font-semibold block">
                Technical Responsibilities:
              </span>
              <ul className="space-y-2 text-xs sm:text-sm text-[#333333] font-sans">
                {item.technicalResponsibilities.map((resp, rIdx) => (
                  <li key={rIdx} className="flex items-start space-x-2.5">
                    <span className="text-[#174A5B] font-mono font-bold select-none text-[12px] leading-tight">
                      •
                    </span>
                    <span className="leading-relaxed">{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Systems Worked With */}
          {item.systemsWorkedWith && item.systemsWorkedWith.length > 0 && (
            <div className="bg-[#FAF9F7] border border-[#EBEBE6] p-4 space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#8A8A85] font-semibold block">
                Systems Worked With:
              </span>
              <div className="flex flex-wrap gap-2">
                {item.systemsWorkedWith.map((sys, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-2.5 py-1 bg-[#FFFFFF] border border-[#D9D9D4] text-xs font-mono text-[#111111]"
                  >
                    {sys}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Selected Technical Contributions */}
          {item.selectedContributions && item.selectedContributions.length > 0 && (
            <div className="space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#174A5B] font-semibold block">
                Selected Technical Contributions:
              </span>
              <ul className="space-y-2 text-xs sm:text-sm text-[#333333] font-sans">
                {item.selectedContributions.map((contrib, cIdx) => (
                  <li key={cIdx} className="flex items-start space-x-2.5">
                    <span className="text-[#356859] font-mono font-bold select-none text-[12px] leading-tight">
                      ✓
                    </span>
                    <span className="leading-relaxed">{contrib}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Core Technologies */}
          <div className="pt-2 border-t border-[#EBEBE6]">
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#8A8A85] font-semibold block mb-2">
              Applied Tooling &amp; Protocols:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {item.technologies.map((tech, techIdx) => (
                <Tag key={techIdx} label={tech} size="sm" />
              ))}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
};
