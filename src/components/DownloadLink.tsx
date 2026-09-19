import React from 'react';
import { Download } from 'lucide-react';

interface DownloadLinkProps {
  label: string;
  sublabel?: string;
  onClick?: () => void;
  href?: string;
  className?: string;
}

export const DownloadLink: React.FC<DownloadLinkProps> = ({
  label,
  sublabel,
  onClick,
  href,
  className = ''
}) => {
  const content = (
    <>
      <Download className="w-3.5 h-3.5 text-[#174A5B] mr-2 shrink-0" />
      <div className="text-left">
        <span className="font-mono font-medium text-xs text-[#111111] block">
          {label}
        </span>
        {sublabel && (
          <span className="text-[10px] font-mono text-[#666666] block">
            {sublabel}
          </span>
        )}
      </div>
    </>
  );

  const baseStyles = `inline-flex items-center border border-[#D9D9D4] bg-[#FFFFFF] px-3.5 py-2 hover:border-[#174A5B] hover:bg-[#FAF9F7] transition-all cursor-pointer ${className}`;

  if (href) {
    return (
      <a href={href} download className={baseStyles}>
        {content}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={baseStyles}>
      {content}
    </button>
  );
};
