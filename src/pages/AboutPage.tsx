import React from 'react';
import { PERSONAL_INFO, EDUCATION, RESEARCH_AREAS } from '../data/dossierData';
import { SectionHeader } from '../components/SectionHeader';
import { TechnicalLabel } from '../components/TechnicalLabel';
import { Tag } from '../components/Tag';
import { Breadcrumb } from '../components/Breadcrumb';
import { FileText, ArrowDown, ArrowRight, ShieldCheck, Cpu, Terminal, Layers } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (path: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const trajectorySteps = [
    {
      step: '01',
      domain: 'Electrical Engineering',
      focus: 'Electromagnetics, circuit theory, instrumentation metrology, resonance fundamentals',
      era: 'Academic Foundation'
    },
    {
      step: '02',
      domain: 'Power Systems',
      focus: 'Generation, high-voltage transmission, distribution switchgear, transformer coupling',
      era: 'Degree Specialization'
    },
    {
      step: '03',
      domain: 'Enterprise Infrastructure',
      focus: 'Bare-metal provisioning, high-availability compute, data center systems architecture',
      era: '08+ Years Systems Practice'
    },
    {
      step: '04',
      domain: 'Network & Security',
      focus: 'Stateful firewalling, IDMZ segmentation, packet inspection, IEC 62443 compliance',
      era: 'Perimeter Defense'
    },
    {
      step: '05',
      domain: 'Distributed Systems',
      focus: 'Kernel ring buffers, zero-drop telemetry pipelines, eBPF probes, event brokers',
      era: 'Systems Performance'
    },
    {
      step: '06',
      domain: 'Cyber-Physical Systems',
      focus: 'Coupled dynamics between physical power converters and real-time field control busses',
      era: 'Research Integration'
    },
    {
      step: '07',
      domain: 'Smart Grid Security',
      focus: 'Resilient control, false data injection detection, wide-area monitoring protection',
      era: 'PhD Research Vector'
    }
  ];

  return (
    <div className="space-y-16">
      <Breadcrumb
        items={[{ label: 'About & Trajectory' }]}
        onNavigate={onNavigate}
      />

      <SectionHeader
        label="ENGINEERING NOTEBOOK // DOSSIER"
        title="About Muhammad Adeel Sajjad"
        description="Systems & Infrastructure Engineer with a foundational degree in Electrical Engineering (Power Systems), bridging electromagnetic hardware realities with distributed cyber-physical systems defense."
      />

      {/* 1. VISUAL TRAJECTORY: Engineering → Research Trajectory */}
      <section className="border border-[#D9D9D4] bg-[#FFFFFF] p-6 sm:p-8 lg:p-10 space-y-6">
        <div className="border-b border-[#D9D9D4] pb-4 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
          <div>
            <div className="text-xs font-mono text-[#174A5B] font-semibold uppercase tracking-wider mb-1">
              SYSTEMATIC INTELLECTUAL EVOLUTION
            </div>
            <h3 className="text-xl sm:text-2xl font-sans font-bold text-[#111111]">
              Engineering → Research Trajectory
            </h3>
          </div>
          <span className="text-xs font-mono text-[#8A8A85]">
            PATHWAY: 7 DISTINCT STAGES
          </span>
        </div>

        {/* Visual Connected Timeline */}
        <div className="relative pl-6 sm:pl-10 space-y-6 before:absolute before:left-3 sm:before:left-5 before:top-3 before:bottom-3 before:w-[2px] before:bg-[#D9D9D4]">
          {trajectorySteps.map((item, idx) => (
            <div key={item.step} className="relative group">
              {/* Dot / Indicator */}
              <div
                className={`absolute -left-6 sm:-left-10 top-1 w-6 sm:w-10 flex items-center justify-center`}
              >
                <span
                  className={`w-3 h-3 rounded-none border-2 ${
                    idx === trajectorySteps.length - 1
                      ? 'bg-[#174A5B] border-[#174A5B]'
                      : 'bg-[#FFFFFF] border-[#174A5B]'
                  }`}
                />
              </div>

              {/* Card content */}
              <div className="border border-[#D9D9D4] bg-[#FAF9F7] p-4 sm:p-5 hover:border-[#174A5B] transition-colors">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-mono font-bold text-[#174A5B] bg-[#FFFFFF] px-1.5 py-0.5 border border-[#D9D9D4]">
                      {item.step}
                    </span>
                    <h4 className="text-base sm:text-lg font-sans font-bold text-[#111111]">
                      {item.domain}
                    </h4>
                  </div>
                  <span className="text-[11px] font-mono text-[#8A8A85] uppercase">
                    {item.era}
                  </span>
                </div>
                <p className="text-xs sm:text-sm font-sans text-[#444444] mt-2">
                  {item.focus}
                </p>
              </div>

              {/* Subtle down indicator between steps */}
              {idx < trajectorySteps.length - 1 && (
                <div className="hidden sm:flex items-center justify-center my-1 text-[#8A8A85]">
                  <ArrowDown className="w-3 h-3 text-[#B0B0A8]" />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 2. Core Pillars: Engineering Background & Research Direction */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Background & Research Direction (8 cols) */}
        <div className="lg:col-span-8 space-y-10">
          {/* Engineering Background */}
          <section className="border border-[#D9D9D4] bg-[#FFFFFF] p-6 sm:p-8 space-y-4">
            <div className="border-b border-[#D9D9D4] pb-3">
              <span className="text-xs font-mono text-[#174A5B] font-semibold uppercase">01 // FOUNDATIONS</span>
              <h3 className="text-xl font-sans font-bold text-[#111111] mt-0.5">
                Engineering Background
              </h3>
            </div>
            <p className="text-sm sm:text-base text-[#333333] font-sans leading-relaxed">
              Trained in the physical laws of electric power transmission, high-frequency electromagnetic resonance, and high-voltage power electronics, I possess over 8 years of hands-on enterprise infrastructure experience. This dual background provides an uncommon vantage point: I understand both the circuit equations of the physical plant and the kernel network drivers of the computing systems that supervise it.
            </p>
            <p className="text-xs sm:text-sm text-[#555555] font-sans leading-relaxed">
              In operational engineering environments, systems do not fail in pure isolation. They fail at the vulnerable boundaries where legacy industrial protocols (Modbus-TCP, DNP3) interface with Linux network stacks, real-time operating systems, and physical power converters.
            </p>
          </section>

          {/* Research Direction */}
          <section className="border border-[#D9D9D4] bg-[#FFFFFF] p-6 sm:p-8 space-y-4">
            <div className="border-b border-[#D9D9D4] pb-3">
              <span className="text-xs font-mono text-[#174A5B] font-semibold uppercase">02 // RESEARCH PROGRAM</span>
              <h3 className="text-xl font-sans font-bold text-[#111111] mt-0.5">
                Research Direction &amp; Prospective PhD Vector
              </h3>
            </div>
            <p className="text-sm sm:text-base text-[#333333] font-sans leading-relaxed">
              My research direction focuses on resilient cyber-physical systems, smart grid security, and distributed testbed architectures. I investigate:
            </p>
            <ul className="space-y-3 font-sans text-xs sm:text-sm text-[#333333]">
              <li className="flex items-start space-x-2">
                <span className="text-[#174A5B] font-mono font-bold">•</span>
                <span>
                  <strong>SCADA &amp; Power Substation Boundary Defense:</strong> Developing protocol-aware anomaly detection and state-estimation filters resilient against false data injection (FDI) and physical replay attacks.
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-[#174A5B] font-mono font-bold">•</span>
                <span>
                  <strong>High-Q Resonant Inductive Coupling:</strong> Theoretical resonance modeling, dynamic impedance adaptation, and bifurcation stability in wireless power links.
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-[#174A5B] font-mono font-bold">•</span>
                <span>
                  <strong>Deterministic Distributed Testbeds:</strong> Architecting hardware-in-the-loop (HIL) verification rigs with zero-drop kernel telemetry pipelines and microsecond time synchronization.
                </span>
              </li>
            </ul>
          </section>
        </div>

        {/* Right Column: Technical Domains & Metadata (4 cols) */}
        <div className="lg:col-span-4 space-y-6">
          {/* Technical Domains */}
          <section className="border border-[#D9D9D4] bg-[#FFFFFF] p-6 space-y-4">
            <div className="border-b border-[#D9D9D4] pb-2">
              <span className="text-xs font-mono text-[#174A5B] font-semibold uppercase">03 // DOMAINS</span>
              <h3 className="text-lg font-sans font-bold text-[#111111]">
                Technical Domains
              </h3>
            </div>

            <div className="space-y-3 font-mono text-xs">
              <div className="p-2.5 border border-[#EBEBE6] bg-[#FAF9F7]">
                <span className="font-bold text-[#174A5B] block">Electrical &amp; Power</span>
                <span className="text-[#555555] text-[11px] block mt-0.5">
                  Power distribution, resonant inductive transfer, LCR metrology, ZVS inverters
                </span>
              </div>
              <div className="p-2.5 border border-[#EBEBE6] bg-[#FAF9F7]">
                <span className="font-bold text-[#174A5B] block">Cyber-Physical Security</span>
                <span className="text-[#555555] text-[11px] block mt-0.5">
                  IEC 62443, Purdue Model, Modbus/DNP3 boundary defense, IDMZ bastions
                </span>
              </div>
              <div className="p-2.5 border border-[#EBEBE6] bg-[#FAF9F7]">
                <span className="font-bold text-[#174A5B] block">Distributed Systems</span>
                <span className="text-[#555555] text-[11px] block mt-0.5">
                  Kernel ring buffers (AF_PACKET), zero-drop telemetry, Ansible automation
                </span>
              </div>
              <div className="p-2.5 border border-[#EBEBE6] bg-[#FAF9F7]">
                <span className="font-bold text-[#174A5B] block">Experimental Testbeds</span>
                <span className="text-[#555555] text-[11px] block mt-0.5">
                  Hardware-in-the-loop, reproducible test fixtures, automated log pipelines
                </span>
              </div>
            </div>
          </section>

          {/* Quick Dossier Verification */}
          <section className="border border-[#D9D9D4] bg-[#FAF9F7] p-5 font-mono text-xs space-y-3">
            <div className="text-[10px] uppercase text-[#8A8A85] tracking-wider font-semibold border-b border-[#EBEBE6] pb-1">
              ACADEMIC VERIFICATION
            </div>
            <div>
              <span className="text-[#8A8A85] block text-[10px]">CANDIDATE</span>
              <span className="font-bold text-[#111111]">{PERSONAL_INFO.name}</span>
            </div>
            <div>
              <span className="text-[#8A8A85] block text-[10px]">QUALIFICATION</span>
              <span className="text-[#111111]">{EDUCATION.degree}</span>
            </div>
            <div>
              <span className="text-[#8A8A85] block text-[10px]">INSTITUTIONAL CONTACT</span>
              <a href={`mailto:${PERSONAL_INFO.email}`} className="text-[#174A5B] hover:underline">
                {PERSONAL_INFO.email}
              </a>
            </div>
            <div className="pt-2">
              <button
                onClick={() => onNavigate('/cv')}
                className="w-full py-2 bg-[#174A5B] text-white hover:bg-[#103440] inline-flex items-center justify-center space-x-2"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Open Complete CV</span>
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
