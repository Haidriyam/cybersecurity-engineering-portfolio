import React from 'react';
import { RESEARCH_TRAJECTORY_MAP, TrajectoryStep } from '../data/dossierData';
import { ArrowRight, ArrowDown } from 'lucide-react';

interface ResearchTrajectoryVisualizerProps {
  onNavigate?: (path: string) => void;
  className?: string;
}

export const ResearchTrajectoryVisualizer: React.FC<ResearchTrajectoryVisualizerProps> = ({
  onNavigate,
  className = ''
}) => {
  return (
    <div className={`border border-[#D9D9D4] bg-[#FFFFFF] p-6 sm:p-8 space-y-6 ${className}`}>
      <div className="border-b border-[#D9D9D4] pb-4 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2">
        <div>
          <div className="text-xs font-mono text-[#174A5B] font-semibold uppercase tracking-wider mb-1">
            RESEARCH CONTINUUM // 10-PHASE EVOLUTION
          </div>
          <h2 className="text-xl sm:text-2xl font-sans font-bold text-[#111111] tracking-tight">
            ENGINEERING &amp; RESEARCH TRAJECTORY
          </h2>
          <p className="text-xs sm:text-sm text-[#555555] font-sans mt-1 max-w-3xl">
            A cohesive trajectory bridging foundational electrical power engineering and electromagnetic modeling to cyber-physical control, industrial SCADA security, zero-trust infrastructure, and post-quantum cryptography.
          </p>
        </div>
        <div className="font-mono text-[11px] text-[#8A8A85] uppercase">
          PHYSICAL SYSTEMS ──▶ DIGITAL INFRASTRUCTURE
        </div>
      </div>

      {/* Trajectory Steps Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3">
        {RESEARCH_TRAJECTORY_MAP.map((step: TrajectoryStep, idx: number) => {
          return (
            <div
              key={step.step}
              className="border border-[#EBEBE6] bg-[#FAF9F7] p-3.5 flex flex-col justify-between space-y-3 relative group hover:border-[#174A5B] transition-colors"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-mono border-b border-[#EBEBE6] pb-1.5">
                  <span className="font-bold text-[#174A5B]">PHASE {step.step}</span>
                  <span className="text-[10px] text-[#8A8A85] uppercase">{step.domain}</span>
                </div>

                <h3 className="font-mono text-xs font-bold text-[#111111] leading-tight">
                  {step.name}
                </h3>

                <p className="text-[11px] text-[#555555] font-sans leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="pt-2 border-t border-[#EBEBE6] space-y-1">
                <div className="text-[9px] font-mono text-[#8A8A85] uppercase tracking-wider">
                  Key Artifact:
                </div>
                {step.keyProjects.map((proj) => (
                  <button
                    key={proj.slug}
                    onClick={() => onNavigate && onNavigate(`/projects/${proj.slug}`)}
                    className="w-full text-left font-mono text-[10px] text-[#174A5B] hover:underline flex items-center justify-between group/link truncate"
                  >
                    <span className="truncate">{proj.title}</span>
                    <ArrowRight className="w-2.5 h-2.5 opacity-0 group-hover/link:opacity-100 transition-opacity ml-1 shrink-0" />
                  </button>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Narrative Continuum Footer */}
      <div className="p-3.5 bg-[#FAF9F7] border-l-2 border-[#174A5B] text-xs font-mono text-[#333333] flex flex-wrap items-center justify-between gap-2">
        <span className="text-[#174A5B] font-semibold">
          TRAJECTORY PATH:
        </span>
        <span className="text-[#555555] text-[11px]">
          Electrical Power → Resonant Power → Physical Modeling → Battery Estimation → Microgrid Control → SCADA Security → CPS Security → Distributed Systems → Zero Trust → Post-Quantum Security
        </span>
      </div>
    </div>
  );
};
