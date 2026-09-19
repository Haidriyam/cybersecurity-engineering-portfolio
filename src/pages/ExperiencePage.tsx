import React from 'react';
import { EXPERIENCE } from '../data/dossierData';
import { SectionHeader } from '../components/SectionHeader';
import { Timeline } from '../components/Timeline';
import { Breadcrumb } from '../components/Breadcrumb';
import { FileText, Download } from 'lucide-react';

interface ExperiencePageProps {
  onNavigate: (path: string) => void;
}

export const ExperiencePage: React.FC<ExperiencePageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-12">
      <Breadcrumb
        items={[{ label: 'Engineering Experience' }]}
        onNavigate={onNavigate}
      />

      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#D9D9D4] pb-6">
        <div>
          <div className="text-xs font-mono text-[#174A5B] font-semibold uppercase tracking-wider mb-1">
            RECORD OF PRACTICE &amp; TESTBED OPERATIONS
          </div>
          <h1 className="text-3xl sm:text-4xl font-sans font-bold text-[#111111] tracking-tight">
            Engineering Experience
          </h1>
          <p className="text-sm sm:text-base font-sans text-[#555555] mt-2 max-w-2xl">
            Chronological record of enterprise infrastructure architecture, SCADA telemetry pipeline engineering, and laboratory testbed operations.
          </p>
        </div>

        <button
          onClick={() => onNavigate('/cv')}
          className="shrink-0 px-4 py-2 bg-[#174A5B] text-white text-xs font-mono font-medium hover:bg-[#103440] transition-colors inline-flex items-center space-x-2"
        >
          <FileText className="w-3.5 h-3.5" />
          <span>Complete Academic CV</span>
        </button>
      </div>

      {/* CV-Style Experience Items */}
      <Timeline items={EXPERIENCE} />

      {/* Factual Integrity Memo */}
      <div className="border border-[#D9D9D4] bg-[#FAF9F7] p-5 text-xs font-mono text-[#555555] space-y-1">
        <span className="font-semibold text-[#111111] uppercase tracking-wider block">
          Technical Verification Standard:
        </span>
        <p className="font-sans leading-relaxed">
          Every item in this engineering record reflects documented production deployments, telemetry benchmarks, or reproducible infrastructure scripts. References and validation artifacts can be provided upon request during admissions or supervisor review.
        </p>
      </div>
    </div>
  );
};
