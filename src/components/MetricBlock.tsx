import React from 'react';
import { TechnicalMetric } from '../types';

interface MetricBlockProps {
  metric: TechnicalMetric;
  className?: string;
}

export const MetricBlock: React.FC<MetricBlockProps> = ({ metric, className = '' }) => {
  return (
    <div
      className={`border border-[#D9D9D4] bg-[#FFFFFF] p-3 transition-colors ${className}`}
    >
      <div className="text-[11px] font-mono uppercase text-[#666666] tracking-wider mb-1 flex items-center justify-between">
        <span>{metric.label}</span>
        {metric.tolerance && (
          <span className="text-[10px] text-[#8A8A85] lowercase">{metric.tolerance}</span>
        )}
      </div>
      <div className="flex items-baseline space-x-1.5">
        <span className="text-xl font-mono font-medium text-[#111111] tracking-tight">
          {metric.value}
        </span>
        {metric.unit && (
          <span className="text-xs font-mono text-[#174A5B]">
            {metric.unit}
          </span>
        )}
      </div>
      {metric.verificationMethod && (
        <div className="mt-2 pt-1.5 border-t border-[#EBEBE6] text-[10px] font-mono text-[#8A8A85] truncate" title={metric.verificationMethod}>
          Ref: {metric.verificationMethod}
        </div>
      )}
    </div>
  );
};
