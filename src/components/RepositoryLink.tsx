import React, { useState } from 'react';
import { ExternalLink, Copy, Check } from 'lucide-react';

interface RepositoryLinkProps {
  url: string;
  label?: string;
  className?: string;
}

export const RepositoryLink: React.FC<RepositoryLinkProps> = ({
  url,
  label = 'SOURCE REPOSITORY ↗',
  className = ''
}) => {
  const [copied, setCopied] = useState(false);

  const isPlaceholder = url.includes('[') || url.includes('REPOSITORY URL');
  const displayUrl = isPlaceholder ? '[REPOSITORY URL]' : url;

  const handleCopy = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(displayUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className={`inline-flex items-center space-x-2 border border-[#D9D9D4] bg-[#FFFFFF] px-3 py-1.5 text-xs font-mono text-[#111111] hover:border-[#174A5B] transition-colors ${className}`}
    >
      {isPlaceholder ? (
        <span className="inline-flex items-center space-x-1.5 text-[#174A5B] font-semibold">
          <span>{label}</span>
          <span className="text-[10px] text-[#8A8A85] font-normal bg-[#FAF9F7] px-1 border border-[#EBEBE6]">
            [REPOSITORY URL]
          </span>
        </span>
      ) : (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-1.5 hover:text-[#174A5B]"
        >
          <span>{label}</span>
          <ExternalLink className="w-3 h-3 text-[#666666]" />
        </a>
      )}
      <span className="text-[#D9D9D4]">|</span>
      <button
        onClick={handleCopy}
        type="button"
        title="Copy repository URL"
        className="text-[#666666] hover:text-[#111111] focus:outline-none"
      >
        {copied ? (
          <Check className="w-3 h-3 text-[#356859]" />
        ) : (
          <Copy className="w-3 h-3" />
        )}
      </button>
    </div>
  );
};
