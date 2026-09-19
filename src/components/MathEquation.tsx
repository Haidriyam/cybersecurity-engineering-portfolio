import React, { useMemo } from 'react';
import katex from 'katex';

interface MathEquationProps {
  math: string;
  equationNumber?: string | number;
  caption?: string;
  displayMode?: boolean;
  inline?: boolean;
  className?: string;
}

export const MathEquation: React.FC<MathEquationProps> = ({
  math,
  equationNumber,
  caption,
  displayMode = true,
  inline = false,
  className = ''
}) => {
  const isDisplay = inline ? false : displayMode;

  const renderedHtml = useMemo(() => {
    try {
      return katex.renderToString(math, {
        displayMode: isDisplay,
        throwOnError: false,
        output: 'html'
      });
    } catch {
      return null;
    }
  }, [math, isDisplay]);

  if (!isDisplay) {
    if (renderedHtml) {
      return (
        <span
          className={`inline-math font-mono text-[#111111] ${className}`}
          dangerouslySetInnerHTML={{ __html: renderedHtml }}
        />
      );
    }
    return <code className="font-mono text-[#174A5B] px-1 bg-[#FAF9F7] text-xs">{math}</code>;
  }

  return (
    <div className={`my-4 border border-[#D9D9D4] bg-[#FFFFFF] p-4 sm:p-5 ${className}`}>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="overflow-x-auto py-2 px-1 w-full flex justify-center sm:justify-start">
          {renderedHtml ? (
            <div
              className="text-[#111111] text-sm sm:text-base select-all"
              dangerouslySetInnerHTML={{ __html: renderedHtml }}
            />
          ) : (
            <code className="font-mono text-sm text-[#174A5B]">{math}</code>
          )}
        </div>
        {equationNumber !== undefined && (
          <div className="shrink-0 self-end sm:self-center font-mono text-xs text-[#8A8A85] px-2 py-0.5 border border-[#EBEBE6] bg-[#FAF9F7]">
            {typeof equationNumber === 'number' ? `(EQ. 0${equationNumber})` : `(${equationNumber})`}
          </div>
        )}
      </div>
      {caption && (
        <div className="mt-2 pt-2 border-t border-[#EBEBE6] text-xs font-sans text-[#666666]">
          <span className="font-mono font-medium text-[#111111] mr-1.5 uppercase tracking-wide">
            Description:
          </span>
          {caption}
        </div>
      )}
    </div>
  );
};
