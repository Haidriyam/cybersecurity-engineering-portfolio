import React from 'react';
import { TechnicalNote } from '../types';
import { TechnicalLabel } from './TechnicalLabel';
import { ArrowRight, FileText } from 'lucide-react';

interface TechnicalNoteItemProps {
  note: TechnicalNote;
  onSelect: (slug: string) => void;
  className?: string;
}

export const TechnicalNoteItem: React.FC<TechnicalNoteItemProps> = ({
  note,
  onSelect,
  className = ''
}) => {
  return (
    <article
      onClick={() => onSelect(note.slug)}
      className={`group border-b border-[#D9D9D4] py-4 sm:py-5 hover:bg-[#FFFFFF] px-3 sm:px-4 -mx-3 sm:-mx-4 transition-colors cursor-pointer ${className}`}
    >
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1.5 mb-2">
        <div className="flex items-center space-x-2">
          <span className="font-mono text-xs font-semibold text-[#174A5B]">
            {note.id}
          </span>
          <span className="text-[#D9D9D4]">/</span>
          <TechnicalLabel variant="neutral">
            {note.category}
          </TechnicalLabel>
        </div>
        <div className="flex items-center space-x-3 text-xs font-mono text-[#8A8A85]">
          <span>{note.readingTime}</span>
          <span>·</span>
          <span>{note.date}</span>
        </div>
      </div>

      <h3 className="text-base sm:text-lg font-sans font-semibold text-[#111111] group-hover:text-[#174A5B] transition-colors leading-snug">
        {note.title}
      </h3>

      <p className="mt-2 text-xs sm:text-sm text-[#555555] leading-relaxed line-clamp-2">
        {note.abstract}
      </p>

      {note.equations && note.equations.length > 0 && (
        <div className="mt-2.5 inline-flex items-center space-x-2 text-xs font-mono text-[#666666] bg-[#FAF9F7] px-2.5 py-1 border border-[#EBEBE6]">
          <span className="text-[#174A5B] font-medium">Core Derivation:</span>
          <span className="truncate max-w-xs sm:max-w-md">{note.equations[0]}</span>
        </div>
      )}

      <div className="mt-3 flex items-center justify-between text-xs font-mono text-[#174A5B] font-medium">
        <span className="inline-flex items-center space-x-1.5">
          <FileText className="w-3.5 h-3.5" />
          <span>Read Technical Note</span>
        </span>
        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
      </div>
    </article>
  );
};
