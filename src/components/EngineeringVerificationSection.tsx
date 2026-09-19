import React from 'react';
import { VERIFICATION_STANDARDS } from '../data/dossierData';
import { ShieldCheck, GitBranch, Terminal, CheckCircle2, Box, ArrowRight } from 'lucide-react';

interface EngineeringVerificationSectionProps {
  onNavigate?: (path: string) => void;
  className?: string;
}

export const EngineeringVerificationSection: React.FC<EngineeringVerificationSectionProps> = ({
  onNavigate,
  className = ''
}) => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'CONTINUOUS INTEGRATION':
        return <GitBranch className="w-4 h-4 text-[#174A5B]" />;
      case 'STATIC ANALYSIS':
        return <ShieldCheck className="w-4 h-4 text-[#356859]" />;
      case 'CODE HYGIENE':
        return <Terminal className="w-4 h-4 text-[#8A8A85]" />;
      case 'AUTOMATED TESTING':
        return <CheckCircle2 className="w-4 h-4 text-[#174A5B]" />;
      case 'HARDENED PACKAGING':
        return <Box className="w-4 h-4 text-[#356859]" />;
      default:
        return <ShieldCheck className="w-4 h-4 text-[#174A5B]" />;
    }
  };

  return (
    <section className={`border border-[#D9D9D4] bg-[#FFFFFF] p-6 sm:p-8 space-y-6 ${className}`}>
      <div className="border-b border-[#D9D9D4] pb-4 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
        <div>
          <div className="flex items-center space-x-2 text-xs font-mono text-[#174A5B] font-semibold uppercase tracking-wider mb-1">
            <span className="w-2 h-2 bg-[#174A5B]" />
            <span>GLOBAL ENGINEERING VERIFICATION STANDARD</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-sans font-bold text-[#111111] tracking-tight">
            REPOSITORY VERIFICATION PRACTICES
          </h2>
          <p className="text-xs sm:text-sm text-[#555555] font-sans mt-1 max-w-3xl">
            Showcased open-source engineering repositories implement systematic verification practices where applicable to guarantee reproducible execution, static security guarantees, and hardened runtime isolation.
          </p>
        </div>
        <div className="font-mono text-[11px] text-[#666666] bg-[#FAF9F7] border border-[#EBEBE6] px-3 py-1.5 shrink-0">
          STATUS: <span className="text-[#356859] font-bold">AUTOMATED VIA CI/CD</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {VERIFICATION_STANDARDS.map((practice, idx) => (
          <div
            key={idx}
            className="border border-[#EBEBE6] bg-[#FAF9F7] p-4 flex flex-col justify-between space-y-3 hover:border-[#174A5B] transition-colors"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between gap-2 border-b border-[#EBEBE6] pb-2 text-xs font-mono">
                <div className="flex items-center space-x-1.5 font-bold text-[#111111]">
                  {getCategoryIcon(practice.category)}
                  <span className="text-[11px] tracking-wide">{practice.category}</span>
                </div>
                <span className="text-[10px] text-[#8A8A85] uppercase">
                  STD-0{idx + 1}
                </span>
              </div>

              <div className="text-xs font-mono font-semibold text-[#174A5B]">
                {practice.tooling}
              </div>

              <p className="text-xs text-[#444444] font-sans leading-relaxed">
                {practice.specification}
              </p>
            </div>

            <div className="pt-3 border-t border-[#EBEBE6] space-y-1.5">
              <div className="text-[10px] font-mono text-[#8A8A85] uppercase tracking-wider">
                Associated Repositories:
              </div>
              <div className="flex flex-wrap gap-1">
                {practice.associatedProjects.map((p) => (
                  <button
                    key={p.slug}
                    onClick={() => onNavigate && onNavigate(`/projects/${p.slug}`)}
                    className="px-1.5 py-0.5 bg-[#FFFFFF] border border-[#D9D9D4] text-[10px] font-mono text-[#333333] hover:border-[#174A5B] hover:text-[#174A5B] transition-colors"
                  >
                    {p.slug}
                  </button>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-[#FAF9F7] border-l-2 border-[#174A5B] p-3 text-[11px] font-mono text-[#555555] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <span>
          ALL REPOSITORIES CONFORM TO PEP8 / FLAKE8 / BANDIT / ACTIONS SPECIFICATIONS
        </span>
        <a
          href="https://github.com/Haidriyam"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#174A5B] hover:underline inline-flex items-center space-x-1 font-semibold"
        >
          <span>github.com/Haidriyam</span>
          <ArrowRight className="w-3 h-3" />
        </a>
      </div>
    </section>
  );
};
