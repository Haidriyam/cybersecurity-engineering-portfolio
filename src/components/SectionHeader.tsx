import React from 'react';
import { TechnicalLabel } from './TechnicalLabel';

interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  id?: string;
  action?: React.ReactNode;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  label,
  title,
  description,
  id,
  action,
  className = ''
}) => {
  return (
    <div id={id} className={`mb-6 pb-3 border-b border-[#D9D9D4] ${className}`}>
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
        <div>
          {label && (
            <div className="mb-1.5">
              <TechnicalLabel variant="neutral">{label}</TechnicalLabel>
            </div>
          )}
          <h2 className="text-xl sm:text-2xl font-sans font-semibold tracking-tight text-[#111111]">
            {title}
          </h2>
        </div>
        {action && <div className="shrink-0">{action}</div>}
      </div>
      {description && (
        <p className="mt-2 text-sm text-[#666666] leading-relaxed max-w-3xl font-sans">
          {description}
        </p>
      )}
    </div>
  );
};
