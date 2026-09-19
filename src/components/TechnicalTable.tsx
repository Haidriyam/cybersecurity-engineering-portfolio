import React from 'react';

interface TechnicalTableProps {
  headers: string[];
  rows: (string | React.ReactNode)[][];
  caption?: string;
  className?: string;
}

export const TechnicalTable: React.FC<TechnicalTableProps> = ({
  headers,
  rows,
  caption,
  className = ''
}) => {
  return (
    <div className={`my-4 border border-[#D9D9D4] bg-[#FFFFFF] ${className}`}>
      {caption && (
        <div className="px-3 py-2 border-b border-[#EBEBE6] bg-[#FAF9F7] text-xs font-mono text-[#555555]">
          {caption}
        </div>
      )}
      <div className="overflow-x-auto w-full">
        <table className="w-full text-left text-xs border-collapse">
          <thead>
            <tr className="border-b border-[#D9D9D4] bg-[#F2F2EE]">
              {headers.map((header, idx) => (
                <th
                  key={idx}
                  className="px-3.5 py-2 font-mono font-medium text-[11px] text-[#111111] uppercase tracking-wider whitespace-nowrap"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-[#EBEBE6] font-mono text-[12px]">
            {rows.map((row, rowIdx) => (
              <tr key={rowIdx} className="hover:bg-[#FAF9F7] transition-colors">
                {row.map((cell, cellIdx) => (
                  <td
                    key={cellIdx}
                    className="px-3.5 py-2 text-[#333333] whitespace-nowrap"
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
