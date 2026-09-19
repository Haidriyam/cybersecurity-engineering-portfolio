import React from 'react';

interface TagProps {
  label: string;
  size?: 'sm' | 'md';
}

export const Tag: React.FC<TagProps> = ({ label, size = 'sm' }) => {
  const sizeClass = size === 'sm' ? 'text-[11px] px-2 py-0.5' : 'text-xs px-2.5 py-1';
  return (
    <span
      className={`inline-block font-mono text-[#444444] bg-[#EDEDEA] border border-[#D9D9D4] leading-tight ${sizeClass}`}
    >
      {label}
    </span>
  );
};
