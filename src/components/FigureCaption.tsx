import React from 'react';

interface FigureCaptionProps {
  figureNumber: string;
  caption: string;
  sourceNote?: string;
}

export const FigureCaption: React.FC<FigureCaptionProps> = ({
  figureNumber,
  caption,
  sourceNote
}) => {
  return (
    <figcaption className="mt-2.5 px-1 text-xs text-[#666666] border-t border-[#EBEBE6] pt-2">
      <span className="font-mono font-medium text-[#111111] mr-1.5 uppercase tracking-wide">
        {figureNumber}:
      </span>
      <span>{caption}</span>
      {sourceNote && (
        <span className="block mt-0.5 text-[11px] font-mono text-[#8A8A85]">
          [{sourceNote}]
        </span>
      )}
    </figcaption>
  );
};
