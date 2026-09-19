import React from 'react';
import { RESEARCH_AREAS, CORE_RESEARCH_QUESTIONS } from '../data/dossierData';
import { SectionHeader } from '../components/SectionHeader';
import { ResearchCard } from '../components/ResearchCard';
import { Breadcrumb } from '../components/Breadcrumb';
import { ResearchTrajectoryVisualizer } from '../components/ResearchTrajectoryVisualizer';
import { EngineeringVerificationSection } from '../components/EngineeringVerificationSection';
import { ArrowRight, HelpCircle, Shield, Cpu, Activity, CheckCircle2 } from 'lucide-react';

interface ResearchPageProps {
  onNavigate: (path: string) => void;
}

export const ResearchPage: React.FC<ResearchPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-12">
      <Breadcrumb
        items={[{ label: 'Research Programs' }]}
        onNavigate={onNavigate}
      />

      <SectionHeader
        label="ACADEMIC RESEARCH DIRECTORY"
        title="Research Programs &amp; Theoretical Investigations"
        description="Formalizing mathematical frameworks, security architectures, and experimental methodologies across power engineering, cyber-physical systems, industrial SCADA security, and post-quantum cryptography."
      />

      {/* 10-Phase Trajectory Visualizer */}
      <ResearchTrajectoryVisualizer onNavigate={onNavigate} />

      {/* Core Research Questions Section */}
      <section className="border border-[#D9D9D4] bg-[#FFFFFF] p-6 sm:p-8 space-y-6">
        <div className="border-b border-[#D9D9D4] pb-4 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2">
          <div>
            <div className="flex items-center space-x-2 text-xs font-mono text-[#174A5B] font-semibold uppercase tracking-wider mb-1">
              <HelpCircle className="w-3.5 h-3.5 text-[#174A5B]" />
              <span>ACADEMIC INVESTIGATION AGENDA</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-sans font-bold text-[#111111] tracking-tight">
              CORE RESEARCH QUESTIONS
            </h2>
            <p className="text-xs sm:text-sm text-[#555555] font-sans mt-1 max-w-3xl">
              Foundational scientific and engineering inquiries motivating the applicant's research trajectory in resilient cyber-physical systems and industrial infrastructure security.
            </p>
          </div>
          <div className="text-[11px] font-mono text-[#8A8A85] uppercase">
            5 CORE INVESTIGATION VECTORS
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {CORE_RESEARCH_QUESTIONS.map((rq) => (
            <div
              key={rq.id}
              className="border border-[#EBEBE6] bg-[#FAF9F7] p-5 flex flex-col justify-between space-y-4 hover:border-[#174A5B] transition-colors"
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between text-xs font-mono border-b border-[#EBEBE6] pb-2">
                  <span className="font-bold text-[#174A5B]">{rq.code}</span>
                  <span className="text-[11px] text-[#666666]">{rq.title}</span>
                </div>

                <h3 className="text-sm sm:text-base font-sans font-bold text-[#111111] leading-snug">
                  "{rq.question}"
                </h3>

                <div className="space-y-1.5 pt-1">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#8A8A85] block font-semibold">
                    Theoretical Context:
                  </span>
                  <p className="text-xs text-[#555555] font-sans leading-relaxed">
                    {rq.theoreticalContext}
                  </p>
                </div>

                <div className="space-y-1.5 pt-1 border-t border-[#EBEBE6]">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#174A5B] block font-semibold">
                    Investigation Methodology:
                  </span>
                  <p className="text-xs text-[#444444] font-sans leading-relaxed">
                    {rq.methodology}
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-[#EBEBE6] flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
                <span className="text-[10px] text-[#8A8A85] uppercase">Connected Artifacts:</span>
                <div className="flex flex-wrap gap-1">
                  {rq.connectedProjects.map((p) => (
                    <button
                      key={p.slug}
                      onClick={() => onNavigate(`/projects/${p.slug}`)}
                      className="px-2 py-0.5 bg-[#FFFFFF] border border-[#D9D9D4] text-[10px] text-[#174A5B] hover:border-[#174A5B] hover:underline"
                    >
                      {p.title}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Program Summary Matrix */}
      <div className="border border-[#D9D9D4] bg-[#FFFFFF] p-5 lg:p-6">
        <div className="text-xs font-mono uppercase text-[#8A8A85] tracking-wider mb-4 font-semibold">
          Cross-Disciplinary Research Intersection
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs font-mono">
          <div className="border-l-2 border-[#174A5B] pl-3 space-y-1.5">
            <span className="font-bold text-[#174A5B]">VECT 01: POWER &amp; EM FIELDS</span>
            <p className="font-sans text-xs text-[#555555] leading-relaxed">
              Resonant inductive coupling, quality factor preservation, dynamic impedance matching, and high-frequency conversion.
            </p>
          </div>
          <div className="border-l-2 border-[#356859] pl-3 space-y-1.5">
            <span className="font-bold text-[#356859]">VECT 02: CPS &amp; BOUNDARY SECURITY</span>
            <p className="font-sans text-xs text-[#555555] leading-relaxed">
              Industrial network segmentation (IEC 62443), stateful Modbus/DNP3 inspection, zero-trust bastions, and air-gap verification.
            </p>
          </div>
          <div className="border-l-2 border-[#174A5B] pl-3 space-y-1.5">
            <span className="font-bold text-[#174A5B]">VECT 03: TELEMETRY &amp; CRYPTOGRAPHY</span>
            <p className="font-sans text-xs text-[#555555] leading-relaxed">
              Kernel ring buffer optimization, zero-drop event ingestion, NIST PQC lattice key encapsulation, and immutable orchestration.
            </p>
          </div>
        </div>
      </div>

      {/* Deep Dive on each Research Area */}
      <div className="space-y-8">
        {RESEARCH_AREAS.map((area) => (
          <ResearchCard
            key={area.id}
            area={area}
            onNavigateProject={(slug) => onNavigate(`/projects/${slug}`)}
          />
        ))}
      </div>

      {/* Global Engineering Verification Section */}
      <EngineeringVerificationSection onNavigate={onNavigate} />

      {/* Standards & Methodological Frameworks */}
      <section className="border border-[#D9D9D4] bg-[#FAF9F7] p-6">
        <h3 className="text-base font-sans font-semibold text-[#111111] mb-2">
          Applicable Standards &amp; Conformance Targets
        </h3>
        <p className="text-xs text-[#666666] mb-4 font-sans leading-relaxed">
          Experimental setups and boundary defense rules are engineered against established industrial and electrical standards:
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono">
          <div className="bg-[#FFFFFF] border border-[#D9D9D4] p-3">
            <span className="text-[#174A5B] font-bold block">IEC 62443-3-3</span>
            <span className="text-[#8A8A85] text-[10px]">Industrial Network Security Levels</span>
          </div>
          <div className="bg-[#FFFFFF] border border-[#D9D9D4] p-3">
            <span className="text-[#174A5B] font-bold block">NIST SP 800-82</span>
            <span className="text-[#8A8A85] text-[10px]">Industrial Control System (ICS) Security</span>
          </div>
          <div className="bg-[#FFFFFF] border border-[#D9D9D4] p-3">
            <span className="text-[#174A5B] font-bold block">IEEE 1547-2018</span>
            <span className="text-[#8A8A85] text-[10px]">Interconnection of Distributed Energy Resources</span>
          </div>
          <div className="bg-[#FFFFFF] border border-[#D9D9D4] p-3">
            <span className="text-[#174A5B] font-bold block">NIST FIPS 203</span>
            <span className="text-[#8A8A85] text-[10px]">Module-Lattice Key Encapsulation (ML-KEM)</span>
          </div>
        </div>
      </section>
    </div>
  );
};
