import React from 'react';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  onNavigate: (path: string) => void;
  rootLabel?: string;
  rootPath?: string;
  className?: string;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({
  items,
  onNavigate,
  rootLabel = 'DOSSIER',
  rootPath = '/',
  className = ''
}) => {
  return (
    <nav
      aria-label="Breadcrumb"
      className={`flex items-center space-x-2 text-xs font-mono text-[#666666] mb-4 overflow-x-auto whitespace-nowrap py-1 ${className}`}
    >
      <button
        onClick={() => onNavigate(rootPath)}
        className="hover:text-[#174A5B] transition-colors focus:outline-none uppercase font-semibold"
      >
        {rootLabel}
      </button>
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <React.Fragment key={index}>
            <span className="text-[#A0A09C] select-none" aria-hidden="true">/</span>
            {isLast || !item.path ? (
              <span className="text-[#111111] font-medium uppercase truncate max-w-xs sm:max-w-md">
                {item.label}
              </span>
            ) : (
              <button
                onClick={() => onNavigate(item.path!)}
                className="hover:text-[#174A5B] transition-colors uppercase focus:outline-none"
              >
                {item.label}
              </button>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};
