import React from 'react';

interface TechnicalLabelProps {
  children: React.ReactNode;
  variant?: 'neutral' | 'accent' | 'secondary' | 'code';
  className?: string;
}

export const TechnicalLabel: React.FC<TechnicalLabelProps> = ({
  children,
  variant = 'neutral',
  className = ''
}) => {
  const variantStyles = {
    neutral: 'text-[#666666] border-[#D9D9D4] bg-[#F7F7F5]',
    accent: 'text-[#174A5B] border-[#174A5B]/30 bg-[#174A5B]/5',
    secondary: 'text-[#356859] border-[#356859]/30 bg-[#356859]/5',
    code: 'text-[#111111] border-[#D9D9D4] bg-[#EDEDEA]'
  };

  return (
    <span
      className={`inline-flex items-center px-1.5 py-0.5 text-[11px] font-mono tracking-wider uppercase border ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
};
