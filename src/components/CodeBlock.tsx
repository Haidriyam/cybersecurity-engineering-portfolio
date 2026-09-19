import React, { useState } from 'react';
import { Copy, Check, Terminal } from 'lucide-react';

interface CodeBlockProps {
  code: string;
  language?: string;
  caption?: string;
  className?: string;
  isGenericExample?: boolean;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({
  code,
  language = 'text',
  caption,
  className = '',
  isGenericExample = false
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const lines = code.trim().split('\n');
  const showGenericBadge = isGenericExample || caption?.includes('GENERIC CODE EXAMPLE');

  return (
    <div
      className={`my-4 border border-[#D9D9D4] bg-[#171717] text-[#EDEDED] overflow-hidden text-xs font-mono max-w-full ${className}`}
    >
      {showGenericBadge && (
        <div className="bg-[#241F1A] border-b border-[#3D352E] px-3 py-1 text-[10px] text-[#D97706] flex items-center justify-between tracking-wider font-semibold">
          <span>GENERIC CODE EXAMPLE // ILLUSTRATIVE ONLY</span>
          <span className="text-[9px] text-[#A8A29E] font-normal hidden sm:inline">NON-PRODUCTION ACADEMIC SNIPPET</span>
        </div>
      )}
      <div className="flex items-center justify-between gap-2 px-3 py-1.5 bg-[#202020] border-b border-[#333333] text-[11px] text-[#A0A09C]">
        <div className="flex items-center space-x-2 min-w-0">
          <Terminal className="w-3 h-3 text-[#174A5B] shrink-0" />
          <span className="truncate font-mono">{caption || `source.${language}`}</span>
        </div>
        <div className="flex items-center space-x-2 shrink-0">
          <span className="text-[10px] text-[#777777] uppercase tracking-wider">{language}</span>
          <button
            onClick={handleCopy}
            type="button"
            className="flex items-center space-x-1 text-[#888888] hover:text-[#FFFFFF] transition-colors p-1 cursor-pointer focus:outline-none focus:ring-1 focus:ring-[#174A5B]"
            title="Copy code to clipboard"
            aria-label="Copy code to clipboard"
          >
            {copied ? (
              <>
                <Check className="w-3 h-3 text-[#356859]" />
                <span className="text-[10px] text-[#356859]">Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-3 h-3" />
                <span className="text-[10px]">Copy</span>
              </>
            )}
          </button>
        </div>
      </div>
      <div className="overflow-x-auto max-w-full p-2.5 sm:p-3 text-[11px] sm:text-[12px] leading-relaxed code-scroll">
        <table className="border-collapse w-max min-w-full">
          <tbody>
            {lines.map((line, idx) => (
              <tr key={idx} className="hover:bg-[#222222]/50">
                <td className="select-none text-[#555555] text-right pr-3 sm:pr-4 align-top w-7 sm:w-8 text-[10px] sm:text-[11px]">
                  {idx + 1}
                </td>
                <td className="whitespace-pre text-[#E6E6E6] font-mono">
                  {line || ' '}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
