import React from 'react';
import { FigureCaption } from './FigureCaption';

interface FigureProps {
  figureNumber: string;
  caption: string;
  sourceNote?: string;
  children: React.ReactNode;
  className?: string;
}

export const Figure: React.FC<FigureProps> = ({
  figureNumber,
  caption,
  sourceNote,
  children,
  className = ''
}) => {
  return (
    <figure
      className={`my-6 border border-[#D9D9D4] bg-[#FFFFFF] p-3 sm:p-4 overflow-hidden ${className}`}
    >
      <div className="w-full flex items-center justify-center overflow-x-auto py-2 bg-[#FAF9F7] border border-[#EBEBE6]">
        {children}
      </div>
      <FigureCaption
        figureNumber={figureNumber}
        caption={caption}
        sourceNote={sourceNote}
      />
    </figure>
  );
};
