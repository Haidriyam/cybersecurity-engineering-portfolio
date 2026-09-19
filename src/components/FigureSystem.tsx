import React, { useState } from 'react';
import { MathEquation } from './MathEquation';
import { Copy, Check, ExternalLink, HelpCircle, FileText } from 'lucide-react';

// 1. FigureNumber Component
export interface FigureNumberProps {
  number: string | number;
  prefix?: string;
  className?: string;
}

export const FigureNumber: React.FC<FigureNumberProps> = ({
  number,
  prefix = 'FIG.',
  className = ''
}) => {
  const formatted = typeof number === 'number' ? String(number).padStart(2, '0') : number;
  return (
    <span
      className={`font-mono font-bold tracking-wider text-[#111111] uppercase select-all ${className}`}
    >
      {prefix} {formatted}
    </span>
  );
};

// 2. FigureCaption Component
export interface FigureCaptionProps {
  figureNumber: string | number;
  title?: string;
  caption: string;
  source?: string;
  provenance?: string;
  className?: string;
}

export const FigureCaption: React.FC<FigureCaptionProps> = ({
  figureNumber,
  title,
  caption,
  source,
  provenance,
  className = ''
}) => {
  const sourceText = source || provenance;
  return (
    <figcaption
      className={`mt-2.5 px-3 py-2 text-xs border-t border-[#EBEBE6] bg-[#FAF9F7] text-[#444444] ${className}`}
    >
      <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
        <FigureNumber number={figureNumber} className="text-[#174A5B]" />
        {title && (
          <span className="font-sans font-semibold text-[#111111]">{title} —</span>
        )}
        <span className="font-sans leading-relaxed text-[#333333]">{caption}</span>
      </div>
      {sourceText && (
        <div className="mt-1 flex items-center space-x-1.5 font-mono text-[10px] text-[#8A8A85]">
          <span className="uppercase font-semibold">Provenance:</span>
          <span>{sourceText}</span>
        </div>
      )}
    </figcaption>
  );
};

// 3. Figure Component
export interface FigureProps {
  figureNumber: string | number;
  title?: string;
  caption: string;
  source?: string;
  provenance?: string;
  children: React.ReactNode;
  className?: string;
  isPlaceholder?: boolean;
  placeholderText?: string;
}

export const Figure: React.FC<FigureProps> = ({
  figureNumber,
  title,
  caption,
  source,
  provenance,
  children,
  className = '',
  isPlaceholder = false,
  placeholderText = 'Original laboratory measurement from thesis required.'
}) => {
  return (
    <figure
      className={`my-6 border border-[#D9D9D4] bg-[#FFFFFF] overflow-hidden shadow-2xs ${className}`}
    >
      {isPlaceholder && (
        <div className="bg-[#FAF0ED] border-b border-[#F0D5CC] px-3 py-1 flex items-center justify-between text-[11px] font-mono text-[#C15C3D]">
          <span className="font-bold uppercase tracking-wider">VERIFIED VALUE REQUIRED</span>
          <span>{placeholderText}</span>
        </div>
      )}
      <div className="w-full flex items-center justify-center overflow-x-auto p-3 sm:p-4 bg-[#FFFFFF] diagram-scroll">
        {children}
      </div>
      <FigureCaption
        figureNumber={figureNumber}
        title={title}
        caption={caption}
        source={source}
        provenance={provenance}
      />
    </figure>
  );
};

// 4. MeasurementTable Component
export interface MeasurementTableRow {
  parameter: string;
  symbol?: string;
  value: string;
  unit: string;
  toleranceOrError?: string;
  methodOrInstrument: string;
  isPlaceholder?: boolean;
}

export interface MeasurementTableProps {
  title: string;
  tableNumber?: string | number;
  caption?: string;
  provenance?: string;
  rows: MeasurementTableRow[];
  className?: string;
}

export const MeasurementTable: React.FC<MeasurementTableProps> = ({
  title,
  tableNumber = '01',
  caption,
  provenance,
  rows,
  className = ''
}) => {
  return (
    <div className={`my-6 border border-[#D9D9D4] bg-[#FFFFFF] overflow-hidden ${className}`}>
      <div className="px-3.5 py-2.5 bg-[#FAF9F7] border-b border-[#D9D9D4] flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center space-x-2">
          <span className="font-mono text-xs font-bold text-[#174A5B] uppercase tracking-wider">
            TABLE {tableNumber}
          </span>
          <span className="text-[#8A8A85]">|</span>
          <span className="font-sans font-semibold text-xs text-[#111111]">{title}</span>
        </div>
        {provenance && (
          <span className="font-mono text-[10px] text-[#8A8A85]">
            PROVENANCE: {provenance}
          </span>
        )}
      </div>

      <div className="overflow-x-auto w-full table-scroll">
        <table className="w-full min-w-[580px] text-left text-xs border-collapse">
          <thead>
            <tr className="border-b border-[#D9D9D4] bg-[#F2F2EE] font-mono text-[11px] text-[#111111]">
              <th className="px-3 py-2 font-semibold">Parameter</th>
              <th className="px-3 py-2 font-semibold">Symbol</th>
              <th className="px-3 py-2 font-semibold">Value</th>
              <th className="px-3 py-2 font-semibold">Unit</th>
              <th className="px-3 py-2 font-semibold">Tolerance / Precision</th>
              <th className="px-3 py-2 font-semibold">Instrumentation / Method</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#EBEBE6] font-mono text-xs">
            {rows.map((row, idx) => {
              const isPlace = row.isPlaceholder || row.value.includes('INSERT') || row.value.includes('PLACEHOLDER') || row.value.includes('VERIFIED');
              return (
                <tr key={idx} className="hover:bg-[#FAF9F7] transition-colors">
                  <td className="px-3 py-2 font-sans font-medium text-[#111111]">{row.parameter}</td>
                  <td className="px-3 py-2 text-[#666666]">{row.symbol || '—'}</td>
                  <td className={`px-3 py-2 font-bold ${isPlace ? 'text-[#C15C3D]' : 'text-[#174A5B]'}`}>
                    {row.value}
                  </td>
                  <td className="px-3 py-2 text-[#555555]">{row.unit}</td>
                  <td className="px-3 py-2 text-[#777777]">{row.toleranceOrError || '±1.0% calibrated'}</td>
                  <td className="px-3 py-2 font-sans text-[#555555]">{row.methodOrInstrument}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {caption && (
        <div className="px-3 py-2 border-t border-[#EBEBE6] bg-[#FAF9F7] text-[11px] text-[#666666] font-sans">
          {caption}
        </div>
      )}
    </div>
  );
};

// 5. TechnicalDiagram Component (Wrapper with blueprint framing)
export interface TechnicalDiagramProps {
  diagramId: string;
  title: string;
  category: string;
  specification?: string;
  children: React.ReactNode;
  className?: string;
}

export const TechnicalDiagram: React.FC<TechnicalDiagramProps> = ({
  diagramId,
  title,
  category,
  specification,
  children,
  className = ''
}) => {
  return (
    <div className={`w-full border border-[#D9D9D4] bg-[#FFFFFF] ${className}`}>
      {/* Header bar */}
      <div className="px-3 py-1.5 bg-[#FAF9F7] border-b border-[#D9D9D4] flex items-center justify-between font-mono text-[10px] text-[#8A8A85]">
        <div className="flex items-center space-x-2">
          <span className="text-[#174A5B] font-bold">{diagramId}</span>
          <span>·</span>
          <span className="text-[#111111] font-semibold">{title}</span>
        </div>
        <div>
          <span>{specification || category}</span>
        </div>
      </div>
      <div className="p-2 sm:p-4 overflow-x-auto bg-[#FFFFFF]">
        {children}
      </div>
    </div>
  );
};

// 6. EquationBlock Component (With explicit verified equation vs placeholder handling)
export interface EquationBlockProps {
  equationNumber: string | number;
  title: string;
  latexMath?: string;
  explanation: string;
  isPlaceholder?: boolean;
  placeholderNotice?: string;
  provenance?: string;
  className?: string;
}

export const EquationBlock: React.FC<EquationBlockProps> = ({
  equationNumber,
  title,
  latexMath,
  explanation,
  isPlaceholder = false,
  placeholderNotice = 'Original thesis equation — insert verified source equation',
  provenance = 'Original Undergraduate Thesis (2016) / Department of Electrical Engineering',
  className = ''
}) => {
  const formattedNumber = typeof equationNumber === 'number'
    ? String(equationNumber).padStart(2, '0')
    : equationNumber;

  return (
    <div className={`my-4 border border-[#D9D9D4] bg-[#FFFFFF] p-4 sm:p-5 space-y-3 ${className}`}>
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#EBEBE6] pb-2 text-xs font-mono">
        <div className="flex items-center space-x-2">
          <span className="bg-[#174A5B] text-white px-1.5 py-0.5 font-bold text-[10px]">
            EQUATION {formattedNumber}
          </span>
          <span className="font-sans font-semibold text-[#111111]">{title}</span>
        </div>
        <span
          className={`text-[10px] px-2 py-0.5 border ${
            isPlaceholder
              ? 'border-[#F0D5CC] bg-[#FAF0ED] text-[#C15C3D]'
              : 'border-[#CCE5DB] bg-[#EDF7F2] text-[#226644]'
          }`}
        >
          {isPlaceholder ? 'VERIFIED SOURCE REQUIRED' : 'THEORETICAL DERIVATION'}
        </span>
      </div>

      {isPlaceholder ? (
        <div className="p-4 bg-[#FAF9F7] border border-dashed border-[#D9D9D4] text-center space-y-2">
          <div className="font-mono text-xs font-bold text-[#C15C3D] tracking-wider uppercase">
            [{placeholderNotice}]
          </div>
          <p className="text-xs text-[#666666] font-sans max-w-lg mx-auto">
            This structured equation slot preserves the exact academic derivation boundary from Muhammad Adeel Sajjad’s original 2016 capstone manuscript without unverified algorithmic substitution.
          </p>
          {latexMath && (
            <div className="pt-2 border-t border-[#EBEBE6] text-left">
              <span className="text-[10px] font-mono text-[#8A8A85] block mb-1">
                Standard Canonical Reference Equation:
              </span>
              <div className="bg-white p-2 border border-[#EBEBE6]">
                <MathEquation math={latexMath} displayMode={true} />
              </div>
            </div>
          )}
        </div>
      ) : (
        latexMath && (
          <div className="bg-[#FAF9F7] p-3 border border-[#EBEBE6]">
            <MathEquation math={latexMath} displayMode={true} />
          </div>
        )
      )}

      <p className="text-xs text-[#444444] font-sans leading-relaxed">
        {explanation}
      </p>

      {provenance && (
        <div className="text-[10px] font-mono text-[#8A8A85] pt-1 border-t border-[#EBEBE6]">
          Provenance: {provenance}
        </div>
      )}
    </div>
  );
};

// 7. ReferenceBlock Component
export interface ReferenceItem {
  key: string;
  authors: string;
  title: string;
  venue: string;
  year: string;
  url?: string;
  doi?: string;
}

export interface ReferenceBlockProps {
  references: ReferenceItem[];
  title?: string;
  className?: string;
}

export const ReferenceBlock: React.FC<ReferenceBlockProps> = ({
  references,
  title = 'References & Provenance Literature',
  className = ''
}) => {
  return (
    <div className={`my-6 border border-[#D9D9D4] bg-[#FFFFFF] p-4 sm:p-5 space-y-3 ${className}`}>
      <div className="text-[11px] font-mono font-bold text-[#174A5B] uppercase tracking-wider border-b border-[#EBEBE6] pb-2">
        {title}
      </div>
      <ol className="space-y-2 text-xs font-sans text-[#333333]">
        {references.map((ref, idx) => (
          <li key={idx} className="flex items-start space-x-2">
            <span className="font-mono text-xs text-[#174A5B] font-bold shrink-0 mt-0.5">
              [{ref.key || idx + 1}]
            </span>
            <div className="leading-relaxed">
              <span className="font-medium text-[#111111]">{ref.authors}. </span>
              <span className="italic">"{ref.title}." </span>
              <span className="text-[#555555]">{ref.venue}, {ref.year}. </span>
              {ref.doi && (
                <span className="font-mono text-[11px] text-[#174A5B]">DOI: {ref.doi} </span>
              )}
              {ref.url && (
                <a
                  href={ref.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-[#174A5B] hover:underline font-mono text-[11px] ml-1"
                >
                  [Link]
                </a>
              )}
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
};
