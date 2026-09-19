import React, { useState } from 'react';
import {
  PERSONAL_INFO,
  ENGINEERING_TRAJECTORY,
  TECHNICAL_DOMAINS,
  PROJECTS,
  TECHNICAL_NOTES,
  CREDENTIALS,
  EDUCATION,
  SYSTEMS_DOSSIERS
} from '../data/dossierData';
import {
  SystemInterconnectionDiagram,
  ResonantCircuitDiagram,
  TelemetryArchitectureDiagram,
  ReverseProxyPipelineDiagram,
  InfrastructureBootDiagram
} from '../components/TechnicalDiagrams';
import { EngineeringTrajectoryNarrative } from '../components/EngineeringTrajectoryNarrative';
import { ProjectCard } from '../components/ProjectCard';
import { ResearchTrajectoryVisualizer } from '../components/ResearchTrajectoryVisualizer';
import { EngineeringVerificationSection } from '../components/EngineeringVerificationSection';
import {
  ArrowRight,
  ExternalLink,
  FileText,
  Github,
  Download,
  CheckCircle2,
  BookOpen,
  Server,
  Shield,
  ShieldCheck,
  Terminal,
  Cpu,
  HelpCircle,
  Award
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (path: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);

  const capstoneProject =
    PROJECTS.find((p) => p.slug === 'resonant-wireless-power') || PROJECTS[0];

  const researchQuestions = [
    {
      code: 'Q1 // DETERMINISTIC CONTROL',
      title: 'Real-Time Observability & Control',
      question:
        'How can cyber-physical systems maintain deterministic control and observability under adversarial network conditions?',
      framework: 'Coupled physical dynamics, state estimation resilience, and timing-predictable distributed execution across networked actuators and sensors.'
    },
    {
      code: 'Q2 // HIGH-RATE TELEMETRY',
      title: 'Zero-Drop Ingestion Pipelines',
      question:
        'What telemetry architectures minimize event-ingestion latency without dropping packets during industrial fault conditions?',
      framework: 'Deterministic socket ring buffers, eBPF telemetry hooks, and decoupled memory-mapped buffers under extreme burst conditions.'
    },
    {
      code: 'Q3 // PROTOCOL INSPECTION',
      title: 'Stateful Fieldbus Inspection',
      question:
        'How can boundary firewalls and stateful protocol inspection protect legacy fieldbus networks (Modbus, DNP3) from command injection?',
      framework: 'Stateful protocol boundary inspection, algebraic observability metrics, and cryptographic network isolation in operational technology (OT).'
    },
    {
      code: 'Q4 // POWER & RESILIENCE',
      title: 'Power System Physical Foundations',
      question:
        'How can power system principles (impedance matching, resonance, state estimation) inform the defense of smart grid infrastructure?',
      framework: 'Synthesizing electromagnetic circuit modeling with defensive cyber telemetry and boundary enforcement across electrical substations.'
    }
  ];

  return (
    <div className="space-y-16 sm:space-y-20">
      {/* 1. HERO HEADER & PROFILE (ABOVE THE FOLD AUDIT) */}
      <section className="border border-[#D9D9D4] bg-[#FFFFFF] p-6 sm:p-8 lg:p-10">
        <div className="space-y-6">
          {/* Small Technical Label Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#D9D9D4] pb-4">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-none bg-[#174A5B]" />
              <span className="text-[11px] font-mono tracking-widest uppercase font-semibold text-[#174A5B]">
                SYSTEMS &amp; POWER // ACADEMIC DOSSIER
              </span>
            </div>
            <div className="text-[11px] font-mono text-[#666666]">
              STATUS:{' '}
              <span className="text-[#356859] font-medium">
                AVAILABLE FOR RESEARCH COLLABORATION
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: WHO, WHAT, BACKGROUND, FOCUS, CREDENTIALS */}
            <div className="lg:col-span-7 space-y-5">
              <div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-bold tracking-tight text-[#111111] leading-tight">
                  {PERSONAL_INFO.name}
                </h1>
                <div className="mt-2 space-y-1">
                  <div className="text-base sm:text-lg font-mono font-semibold text-[#174A5B]">
                    {PERSONAL_INFO.title}
                  </div>
                  <div className="text-sm font-mono text-[#555555]">
                    {PERSONAL_INFO.credential} — {PERSONAL_INFO.institution} ({PERSONAL_INFO.graduationYear})
                  </div>
                </div>
              </div>

              {/* Explicit Profile Table for Immediate Evaluation */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 border border-[#EBEBE6] bg-[#FAF9F7] p-3.5 text-xs font-mono">
                <div>
                  <span className="text-[#8A8A85] block text-[10px] uppercase">WHO</span>
                  <span className="font-semibold text-[#111111]">{PERSONAL_INFO.name}</span>
                </div>
                <div>
                  <span className="text-[#8A8A85] block text-[10px] uppercase">WHAT</span>
                  <span className="font-semibold text-[#111111]">{PERSONAL_INFO.title}</span>
                </div>
                <div>
                  <span className="text-[#8A8A85] block text-[10px] uppercase">BACKGROUND</span>
                  <span className="font-semibold text-[#111111]">{PERSONAL_INFO.background}</span>
                </div>
                <div>
                  <span className="text-[#8A8A85] block text-[10px] uppercase">EXPERIENCE</span>
                  <span className="font-semibold text-[#111111]">8+ years enterprise Linux &amp; systems</span>
                </div>
                <div className="sm:col-span-2 pt-1 border-t border-[#EBEBE6]">
                  <span className="text-[#8A8A85] block text-[10px] uppercase">RESEARCH FOCUS</span>
                  <span className="font-semibold text-[#174A5B]">{PERSONAL_INFO.focus}</span>
                </div>
              </div>

              {/* Bio Summary */}
              <p className="text-sm sm:text-base text-[#222222] font-sans leading-relaxed">
                {PERSONAL_INFO.positioning}
              </p>

              {/* Primary Actions */}
              <div className="pt-2 flex flex-wrap items-center gap-3 text-xs font-mono">
                <button
                  onClick={() => onNavigate('/research')}
                  className="inline-flex items-center space-x-2 px-4 py-2.5 bg-[#174A5B] text-white border border-[#174A5B] hover:bg-[#103440] transition-colors focus:outline-none font-medium"
                >
                  <span>Explore Research</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => onNavigate('/systems')}
                  className="inline-flex items-center space-x-2 px-4 py-2.5 bg-[#FFFFFF] text-[#111111] border border-[#D9D9D4] hover:border-[#174A5B] transition-colors"
                >
                  <Server className="w-3.5 h-3.5 text-[#555555]" />
                  <span>Inspect Systems Laboratory</span>
                </button>

                <button
                  onClick={() => onNavigate('/projects/resonant-wireless-power')}
                  className="inline-flex items-center space-x-2 px-4 py-2.5 bg-[#FFFFFF] text-[#111111] border border-[#D9D9D4] hover:border-[#174A5B] transition-colors"
                >
                  <Cpu className="w-3.5 h-3.5 text-[#555555]" />
                  <span>Flagship Capstone</span>
                </button>

                <button
                  onClick={() => onNavigate('/notes')}
                  className="inline-flex items-center space-x-2 px-4 py-2.5 bg-[#FFFFFF] text-[#111111] border border-[#D9D9D4] hover:border-[#174A5B] transition-colors"
                >
                  <BookOpen className="w-3.5 h-3.5 text-[#555555]" />
                  <span>Technical Notes</span>
                </button>

                <button
                  onClick={() => onNavigate('/evidence')}
                  className="inline-flex items-center space-x-2 px-4 py-2.5 bg-[#FFFFFF] text-[#174A5B] border border-[#174A5B] hover:bg-[#FAF9F7] transition-colors font-medium"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-[#174A5B]" />
                  <span>Evidence Index</span>
                </button>

                <button
                  onClick={() => onNavigate('/cv')}
                  className="inline-flex items-center space-x-2 px-4 py-2.5 bg-[#FFFFFF] text-[#111111] border border-[#D9D9D4] hover:border-[#174A5B] transition-colors"
                >
                  <FileText className="w-3.5 h-3.5 text-[#555555]" />
                  <span>Academic CV</span>
                </button>
              </div>
            </div>

            {/* Right Column: Interaction Graph / System Topology Diagram */}
            <div className="lg:col-span-5 border border-[#D9D9D4] bg-[#FAF9F7] p-3 space-y-2">
              <div className="flex items-center justify-between text-[10px] font-mono text-[#8A8A85] pb-2 border-b border-[#EBEBE6] px-1">
                <span>FIG. 01 // CROSS-DOMAIN INTERACTION TOPOLOGY</span>
                <span>PHYSICAL ↔ NETWORK ↔ CYBER</span>
              </div>
              <SystemInterconnectionDiagram />
              <div className="px-1 text-[10px] font-mono text-[#666666] leading-tight">
                Unified architectural model linking electrical resonance, host-level kernel telemetry, protocol boundary segmentation, and deterministic testbed validation.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXECUTIVE TECHNICAL BRIEFING: 30-SECOND FACULTY EVALUATION MATRIX */}
      <section aria-label="Executive Technical Briefing" className="border border-[#D9D9D4] bg-[#FFFFFF] p-6 sm:p-8 space-y-5">
        <div className="border-b border-[#D9D9D4] pb-3 flex flex-wrap items-center justify-between gap-2">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#174A5B] font-bold block">
              RAPID FACULTY REVIEW // 30-SECOND DOSSIER SUMMARY
            </span>
            <h2 className="text-xl sm:text-2xl font-sans font-bold text-[#111111] tracking-tight">
              Executive Technical Briefing
            </h2>
          </div>
          <span className="text-xs font-mono text-[#8A8A85]">
            DIRECT ANSWERS FOR SUPERVISORS &amp; ADMISSIONS COMMITTEES
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 text-xs">
          {/* Q1: Who is this? */}
          <div className="p-3.5 border border-[#D9D9D4] bg-[#FAF9F7] space-y-1">
            <span className="font-mono text-[10px] text-[#174A5B] font-bold block">
              1. WHO IS THIS APPLICANT?
            </span>
            <p className="font-sans text-[#222222] font-semibold text-sm">
              Muhammad Adeel Sajjad
            </p>
            <p className="text-[#555555] font-sans text-xs">
              Systems engineer and electrical power graduate specializing in cyber-physical infrastructure defense and telemetry pipelines.
            </p>
          </div>

          {/* Q2: Engineering Background */}
          <div className="p-3.5 border border-[#D9D9D4] bg-[#FAF9F7] space-y-1">
            <span className="font-mono text-[10px] text-[#174A5B] font-bold block">
              2. WHAT IS HIS ENGINEERING BACKGROUND?
            </span>
            <p className="font-sans text-[#222222] font-semibold text-sm">
              B.S. Electrical Engineering (2016)
            </p>
            <p className="text-[#555555] font-sans text-xs">
              The Islamia University of Bahawalpur. Capstone: Resonant Wireless Power (Grade A). Backed by 8+ years hands-on enterprise Linux engineering.
            </p>
          </div>

          {/* Q3: What Systems? */}
          <div className="p-3.5 border border-[#D9D9D4] bg-[#FAF9F7] space-y-1">
            <span className="font-mono text-[10px] text-[#174A5B] font-bold block">
              3. WHAT SYSTEMS DOES HE WORK WITH?
            </span>
            <p className="font-sans text-[#222222] font-semibold text-sm">
              Linux Kernels, OT Firewalls &amp; SIEM
            </p>
            <p className="text-[#555555] font-sans text-xs">
              Bare-metal POSIX systems, memory-mapped socket buffers, Wazuh HIDS/XDR, reverse proxy gateways, and Modbus/DNP3 fieldbus industrial controllers.
            </p>
          </div>

          {/* Q4: Research Direction */}
          <div className="p-3.5 border border-[#D9D9D4] bg-[#FAF9F7] space-y-1">
            <span className="font-mono text-[10px] text-[#174A5B] font-bold block">
              4. WHAT IS HIS RESEARCH DIRECTION?
            </span>
            <p className="font-sans text-[#222222] font-semibold text-sm">
              Cyber-Physical Systems &amp; Smart Grid Security
            </p>
            <p className="text-[#555555] font-sans text-xs">
              Resilient distributed state estimation, timing-deterministic telemetry under fault surges, and hardware-in-the-loop (HIL) testbed engineering.
            </p>
          </div>

          {/* Q5: Technical Evidence */}
          <div className="p-3.5 border border-[#D9D9D4] bg-[#FAF9F7] space-y-1">
            <span className="font-mono text-[10px] text-[#174A5B] font-bold block">
              5. WHAT TECHNICAL EVIDENCE EXISTS?
            </span>
            <p className="font-sans text-[#222222] font-semibold text-sm">
              99.8% SLA, Zero Drops at 50k eps, Grade A
            </p>
            <p className="text-[#555555] font-sans text-xs">
              Rigorous laboratory metrology tables, reproducible benchmark scripts, architecture diagrams, and verified code repositories.
            </p>
          </div>

          {/* Q6 & Q7: Read work & CV */}
          <div className="p-3.5 border border-[#174A5B] bg-[#FFFFFF] space-y-2 flex flex-col justify-between">
            <div className="space-y-1">
              <span className="font-mono text-[10px] text-[#174A5B] font-bold block">
                6 &amp; 7. TECHNICAL WORK &amp; CURRICULUM VITAE
              </span>
              <p className="text-[#444444] font-sans text-xs">
                Inspect monographs, reproducible mathematical derivations, and download the verified academic CV record.
              </p>
            </div>
            <div className="flex items-center space-x-2 pt-1 font-mono text-[11px]">
              <button
                onClick={() => onNavigate('/notes')}
                className="text-[#174A5B] hover:underline font-bold"
              >
                [Notes]
              </button>
              <span className="text-[#8A8A85]">·</span>
              <button
                onClick={() => onNavigate('/evidence')}
                className="text-[#174A5B] hover:underline font-bold"
              >
                [Evidence]
              </button>
              <span className="text-[#8A8A85]">·</span>
              <button
                onClick={() => onNavigate('/cv')}
                className="text-[#174A5B] hover:underline font-bold"
              >
                [Curriculum Vitae →]
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ENGINEERING TRAJECTORY: FORMAL 9-STAGE PROGRESSION (REQUIREMENT 19) */}
      <section className="border border-[#D9D9D4] bg-[#FFFFFF] p-6 sm:p-8 lg:p-10 space-y-6">
        <div className="border-b border-[#D9D9D4] pb-4 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
          <div>
            <div className="text-xs font-mono text-[#174A5B] font-semibold uppercase tracking-wider mb-1">
              TECHNICAL TRAJECTORY // 9-STAGE PROGRESSION
            </div>
            <h2 className="text-2xl sm:text-3xl font-sans font-bold text-[#111111] tracking-tight">
              From Electrical Foundations to Cyber-Physical Security
            </h2>
          </div>
          <span className="font-mono text-xs text-[#666666]">
            ACADEMIC PROGRESSION MAP // 2012 → PRESENT
          </span>
        </div>

        <p className="text-sm text-[#555555] font-sans">
          This chronological progression details how classical electrical engineering principles (electromagnetics, resonance, power distribution) directly informed enterprise systems administration, high-throughput network telemetry, and doctoral research in cyber-physical smart grid testbeds.
        </p>

        {/* 9-Stage Trajectory Component */}
        <EngineeringTrajectoryNarrative onNavigate={onNavigate} />

        {/* Positioning Summary Quote */}
        <div className="p-4 bg-[#FAF9F7] border-l-2 border-[#174A5B] text-xs font-mono text-[#333333] space-y-1">
          <div className="font-bold text-[#174A5B] uppercase text-[10px]">POSITIONING STATEMENT // APPLICANT PROFILE</div>
          <p className="font-sans text-sm text-[#222222] leading-relaxed">
            "Bridging electrical power engineering foundations with resilient Linux operating system administration, defensive host telemetry, and cyber-physical infrastructure defense. Prepared for graduate research in cyber-physical systems, smart grid resilience, and distributed testing architectures."
          </p>
        </div>
      </section>

      {/* 3. TECHNICAL DOMAINS — THREE MAJOR PILLARS */}
      <section className="space-y-6">
        <div className="border-b border-[#D9D9D4] pb-4">
          <div className="text-xs font-mono text-[#174A5B] font-semibold uppercase tracking-wider mb-1">
            CORE COMPETENCY ARCHITECTURE
          </div>
          <h2 className="text-2xl sm:text-3xl font-sans font-bold text-[#111111] tracking-tight">
            TECHNICAL DOMAINS
          </h2>
          <p className="text-sm text-[#555555] font-sans mt-1">
            Three foundational pillars defining the applicant's research and engineering capabilities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {TECHNICAL_DOMAINS.map((pillar) => (
            <div
              key={pillar.number}
              className="border border-[#D9D9D4] bg-[#FFFFFF] p-6 space-y-5 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-[#EBEBE6] pb-2 text-xs font-mono">
                  <span className="font-bold text-[#174A5B]">PILLAR {pillar.number}</span>
                  <span className="text-[#8A8A85] uppercase">TECHNICAL DOMAIN</span>
                </div>

                <h3 className="text-lg font-sans font-bold text-[#111111] leading-snug">
                  {pillar.title}
                </h3>

                <p className="text-xs text-[#666666] font-mono leading-relaxed">
                  {pillar.focus}
                </p>

                <div className="space-y-4 pt-2">
                  {pillar.categories.map((cat) => (
                    <div key={cat.name} className="space-y-1.5">
                      <div className="text-xs font-mono font-semibold text-[#174A5B]">
                        {cat.name}
                      </div>
                      <ul className="space-y-1 text-xs text-[#444444]">
                        {cat.items.map((item) => (
                          <li key={item} className="flex items-start space-x-1.5">
                            <span className="text-[#8A8A85] font-mono text-[10px] mt-0.5">▪</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[#EBEBE6] text-xs font-mono text-[#8A8A85]">
                <span>SUPPORTED BY RESUME &amp; ACADEMIC RECORD</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. FLAGSHIP PROJECT: RESONANT INDUCTIVE WIRELESS POWER TRANSMISSION */}
      <section className="border-2 border-[#174A5B] bg-[#FFFFFF]">
        <div className="bg-[#174A5B] text-white px-6 py-3 flex flex-wrap items-center justify-between gap-2 font-mono text-xs">
          <div className="flex items-center space-x-2">
            <span className="px-1.5 py-0.5 bg-[#FFFFFF] text-[#174A5B] font-bold text-[10px]">
              FLAGSHIP CAPSTONE
            </span>
            <span className="font-semibold tracking-wider uppercase">
              RESONANT INDUCTIVE WIRELESS POWER TRANSMISSION SYSTEM
            </span>
          </div>
          <span className="text-[#D9D9D4] text-[11px]">
            {capstoneProject.period} · {capstoneProject.grade}
          </span>
        </div>

        <div className="p-6 sm:p-8 lg:p-10 space-y-8">
          <div className="space-y-3 max-w-4xl">
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[#666666]">
              <span>{capstoneProject.institution}</span>
              <span>·</span>
              <span className="text-[#174A5B] font-semibold">Department of Electrical Engineering</span>
              <span>·</span>
              <span className="text-[#356859] font-semibold">{capstoneProject.grade}</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-sans font-bold text-[#111111] tracking-tight">
              {capstoneProject.title}
            </h3>
            <p className="text-sm sm:text-base text-[#333333] font-sans leading-relaxed">
              {capstoneProject.technicalSummary}
            </p>
          </div>

          {/* Schematic Diagram */}
          <div className="border border-[#D9D9D4] bg-[#FAF9F7] p-4 sm:p-6">
            <div className="flex items-center justify-between text-[11px] font-mono text-[#8A8A85] border-b border-[#EBEBE6] pb-2 mb-4">
              <span>FIG. 01 // SERIES-SERIES RESONANT INDUCTIVE POWER LINK SCHEMATIC</span>
              <span>EXPERIMENTAL SETUP: AIR-GAP 0–150mm</span>
            </div>
            <div className="flex justify-center overflow-x-auto py-2">
              <ResonantCircuitDiagram />
            </div>
            <div className="text-[11px] font-mono text-[#666666] pt-3 border-t border-[#EBEBE6] flex flex-wrap justify-between gap-2">
              <span>PRIMARY INVERTER (ZVS) ── COUPLING (M) ── SECONDARY RECTIFIER (R_L)</span>
              <span>METROLOGY: DSO, RF POWER METERS, SIGNAL GENERATORS</span>
            </div>
          </div>

          {/* Implementation Highlights */}
          <div className="space-y-3">
            <div className="text-xs font-mono font-semibold text-[#174A5B] uppercase">
              Documented Implementation &amp; Hardware Metrology:
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-[#444444]">
              {capstoneProject.implementationDetails.map((detail, idx) => (
                <div key={idx} className="flex items-start space-x-2 border border-[#EBEBE6] p-3 bg-[#FAF9F7]">
                  <CheckCircle2 className="w-4 h-4 text-[#356859] mt-0.5 flex-shrink-0" />
                  <span className="leading-relaxed">{detail}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap items-center gap-3 pt-2 text-xs font-mono">
            <button
              onClick={() => onNavigate(`/projects/${capstoneProject.slug}`)}
              className="px-4 py-2.5 bg-[#174A5B] text-white border border-[#174A5B] hover:bg-[#103440] transition-colors inline-flex items-center space-x-2 font-medium"
            >
              <span>View Complete Capstone Case Study</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={() => onNavigate('/notes/resonant-inductive-coupling')}
              className="px-4 py-2.5 bg-[#FFFFFF] text-[#111111] border border-[#D9D9D4] hover:border-[#174A5B] transition-colors inline-flex items-center space-x-2"
            >
              <BookOpen className="w-3.5 h-3.5 text-[#555555]" />
              <span>Read Mathematical Monograph</span>
            </button>

            <button
              onClick={() => setDownloadModalOpen(true)}
              className="px-4 py-2.5 bg-[#FFFFFF] text-[#111111] border border-[#D9D9D4] hover:border-[#174A5B] transition-colors inline-flex items-center space-x-2"
            >
              <Download className="w-3.5 h-3.5 text-[#555555]" />
              <span>Download Technical Report</span>
            </button>
          </div>
        </div>
      </section>

      {/* 5. CURATED TECHNICAL SPECTRUM — 6 REPRESENTATIVE SYSTEMS */}
      <section className="space-y-6">
        <div className="border-b border-[#D9D9D4] pb-4 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
          <div>
            <div className="text-xs font-mono text-[#174A5B] font-semibold uppercase tracking-wider mb-1">
              CURATED TECHNICAL SPECTRUM // 6 REPRESENTATIVE SYSTEMS
            </div>
            <h2 className="text-2xl sm:text-3xl font-sans font-bold text-[#111111] tracking-tight">
              FEATURED ENGINEERING SYSTEMS
            </h2>
            <p className="text-sm text-[#555555] font-sans mt-1">
              Cross-disciplinary systems spanning physical modeling, secondary microgrid control, battery estimation, industrial SCADA security, post-quantum cryptography, and zero-trust infrastructure.
            </p>
          </div>
          <button
            onClick={() => onNavigate('/projects')}
            className="inline-flex items-center space-x-1.5 px-3.5 py-2 border border-[#174A5B] bg-[#174A5B] text-white hover:bg-[#103440] transition-colors text-xs font-mono shrink-0 font-semibold"
          >
            <span>View All 12 Projects &amp; Repositories</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 6 Curated Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            'resonant-wireless-power',
            'microgrid-resilient-control',
            'battery-ekf-estimator',
            'scada-ids-telemetry',
            'quantum-pqc-tls-canary',
            'zero-trust-pki-mesh'
          ].map((slug) => {
            const project = PROJECTS.find((p) => p.slug === slug);
            if (!project) return null;
            return (
              <ProjectCard
                key={project.slug}
                project={project}
                onSelect={(s) => onNavigate(`/projects/${s}`)}
              />
            );
          })}
        </div>

        {/* Callout bar linking to full repository index */}
        <div className="border border-[#D9D9D4] bg-[#FAF9F7] p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono">
          <div className="text-[#444444]">
            <span className="font-bold text-[#174A5B]">COMPLETE CATALOG:</span>{' '}
            <span>Explore all 12 experimental hardware testbeds, mathematical models, and automated infrastructure pipelines.</span>
          </div>
          <button
            onClick={() => onNavigate('/projects')}
            className="text-[#174A5B] font-bold hover:underline inline-flex items-center space-x-1 shrink-0"
          >
            <span>Open Technical Project Index (/projects)</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>

      {/* 5.5. 10-PHASE RESEARCH TRAJECTORY VISUALIZER */}
      <ResearchTrajectoryVisualizer onNavigate={onNavigate} />

      {/* 5.6. GLOBAL ENGINEERING VERIFICATION STANDARD */}
      <EngineeringVerificationSection onNavigate={onNavigate} />

      {/* 5. SYSTEMS & TELEMETRY LABORATORY */}
      <section className="space-y-6">
        <div className="border-b border-[#D9D9D4] pb-4 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2">
          <div>
            <div className="text-xs font-mono text-[#174A5B] font-semibold uppercase tracking-wider mb-1">
              PRODUCTION INFRASTRUCTURE &amp; TESTBEDS
            </div>
            <h2 className="text-2xl sm:text-3xl font-sans font-bold text-[#111111] tracking-tight">
              SYSTEMS LABORATORY
            </h2>
            <p className="text-sm text-[#555555] font-sans mt-1">
              Infrastructure, telemetry, security, automation, and reliability engineering.
            </p>
          </div>
          <button
            onClick={() => onNavigate('/systems')}
            className="text-xs font-mono text-[#174A5B] hover:underline inline-flex items-center space-x-1 font-semibold"
          >
            <span>Open Dedicated Systems Page</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SYSTEMS_DOSSIERS.map((dossier) => (
            <div
              key={dossier.id}
              className="border border-[#D9D9D4] bg-[#FFFFFF] p-6 flex flex-col justify-between space-y-4 hover:border-[#174A5B] transition-colors"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-mono border-b border-[#EBEBE6] pb-2">
                  <span className="font-bold text-[#174A5B]">{dossier.number}</span>
                  <span className="text-[#8A8A85]">PRODUCTION</span>
                </div>
                <h3 className="text-base font-sans font-bold text-[#111111] leading-snug">
                  {dossier.title}
                </h3>
                <p className="text-xs text-[#555555] leading-relaxed">
                  {dossier.description}
                </p>
                <div className="flex flex-wrap gap-1 pt-1">
                  {dossier.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-1.5 py-0.5 bg-[#FAF9F7] border border-[#D9D9D4] text-[10px] font-mono text-[#666666]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-[#EBEBE6] flex items-center justify-between text-xs font-mono">
                <button
                  onClick={() => onNavigate(dossier.link)}
                  className="text-[#174A5B] hover:underline inline-flex items-center space-x-1 font-semibold"
                >
                  <span>Inspect Dossier</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. RESEARCH TRAJECTORY & CORE RESEARCH QUESTIONS */}
      <section className="border border-[#D9D9D4] bg-[#FFFFFF] p-6 sm:p-8 lg:p-10 space-y-8">
        <div className="border-b border-[#D9D9D4] pb-4 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2">
          <div>
            <div className="text-xs font-mono text-[#174A5B] font-semibold uppercase tracking-wider mb-1">
              GRADUATE RESEARCH MOTIVATION
            </div>
            <h2 className="text-2xl sm:text-3xl font-sans font-bold text-[#111111] tracking-tight">
              CORE RESEARCH QUESTIONS
            </h2>
            <p className="text-sm text-[#555555] font-sans mt-1">
              Central investigative questions motivating the applicant's proposed PhD and research trajectory.
            </p>
          </div>
          <button
            onClick={() => onNavigate('/research')}
            className="text-xs font-mono text-[#174A5B] hover:underline inline-flex items-center space-x-1 font-semibold"
          >
            <span>Full Research Program</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {researchQuestions.map((q) => (
            <div
              key={q.code}
              className="border border-[#EBEBE6] bg-[#FAF9F7] p-5 space-y-3 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-mono text-[#8A8A85]">
                  <span className="text-[#174A5B] font-bold">{q.code}</span>
                  <span>{q.title}</span>
                </div>
                <h3 className="text-base font-sans font-bold text-[#111111] leading-snug">
                  "{q.question}"
                </h3>
                <p className="text-xs text-[#555555] font-sans leading-relaxed pt-1">
                  {q.framework}
                </p>
              </div>

              <div className="pt-3 border-t border-[#EBEBE6] flex items-center justify-between text-xs font-mono text-[#8A8A85]">
                <span>INVESTIGATION METHODOLOGY</span>
                <span className="text-[#174A5B]">CPS LAB</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. SELECTED TECHNICAL NOTES (MONOGRAPHS) */}
      <section className="space-y-6">
        <div className="border-b border-[#D9D9D4] pb-4 flex items-center justify-between">
          <div>
            <div className="text-xs font-mono text-[#174A5B] font-semibold uppercase tracking-wider mb-1">
              FORMAL DERIVATIONS &amp; MEMORANDA
            </div>
            <h2 className="text-2xl sm:text-3xl font-sans font-bold text-[#111111] tracking-tight">
              TECHNICAL NOTES
            </h2>
          </div>
          <button
            onClick={() => onNavigate('/notes')}
            className="text-xs font-mono text-[#174A5B] hover:underline inline-flex items-center space-x-1 font-semibold"
          >
            <span>All Notes</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="border border-[#D9D9D4] bg-[#FFFFFF] divide-y divide-[#D9D9D4]">
          {TECHNICAL_NOTES.map((note) => (
            <div
              key={note.slug}
              onClick={() => onNavigate(`/notes/${note.slug}`)}
              className="p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 hover:bg-[#FAF9F7] cursor-pointer transition-colors group"
            >
              <div className="space-y-1 sm:max-w-3xl">
                <div className="flex items-center space-x-3 text-xs font-mono text-[#8A8A85]">
                  <span className="text-[#174A5B] font-bold">{note.id}</span>
                  <span>·</span>
                  <span>{note.date}</span>
                  <span>·</span>
                  <span className="text-[#356859]">{note.category}</span>
                </div>
                <h3 className="text-base sm:text-lg font-sans font-semibold text-[#111111] group-hover:text-[#174A5B] transition-colors">
                  {note.title}
                </h3>
                <p className="text-xs text-[#555555] line-clamp-2 font-sans">
                  {note.abstract}
                </p>
              </div>

              <div className="shrink-0 flex items-center space-x-1 text-xs font-mono text-[#174A5B] font-medium">
                <span>Read Derivations</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. EDUCATION & CREDENTIALS SUMMARY */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Education (7 cols) */}
        <div className="lg:col-span-7 border border-[#D9D9D4] bg-[#FFFFFF] p-6 sm:p-8 space-y-6">
          <div className="border-b border-[#D9D9D4] pb-3 flex items-center justify-between">
            <div>
              <div className="text-xs font-mono text-[#174A5B] font-semibold uppercase tracking-wider mb-1">
                ACADEMIC FOUNDATION
              </div>
              <h2 className="text-xl sm:text-2xl font-sans font-bold text-[#111111]">
                EDUCATION
              </h2>
            </div>
            <button
              onClick={() => onNavigate('/education')}
              className="text-xs font-mono text-[#174A5B] hover:underline"
            >
              Coursework Details →
            </button>
          </div>

          <div className="space-y-3">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-base sm:text-lg font-sans font-bold text-[#111111]">
                {EDUCATION.degree} — Power
              </h3>
              <span className="text-xs font-mono text-[#356859]">{EDUCATION.status}</span>
            </div>

            <div className="text-xs font-mono text-[#555555]">
              {EDUCATION.institution} · {EDUCATION.period} · {EDUCATION.location}
            </div>

            <div className="pt-2">
              <span className="text-[10px] font-mono uppercase text-[#8A8A85] block mb-1">
                Selected Theoretical &amp; Engineering Coursework:
              </span>
              <div className="grid grid-cols-2 gap-1.5 text-xs font-mono text-[#444444] bg-[#FAF9F7] p-3 border border-[#EBEBE6]">
                {EDUCATION.relevantCoursework.slice(0, 8).map((course) => (
                  <div key={course} className="flex items-center space-x-1.5">
                    <span className="text-[#174A5B]">▪</span>
                    <span>{course}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Credentials (5 cols) */}
        <div className="lg:col-span-5 border border-[#D9D9D4] bg-[#FFFFFF] p-6 sm:p-8 space-y-6">
          <div className="border-b border-[#D9D9D4] pb-3 flex items-center justify-between">
            <div>
              <div className="text-xs font-mono text-[#174A5B] font-semibold uppercase tracking-wider mb-1">
                VERIFIED CURRICULA
              </div>
              <h2 className="text-xl sm:text-2xl font-sans font-bold text-[#111111]">
                CREDENTIALS
              </h2>
            </div>
            <button
              onClick={() => onNavigate('/credentials')}
              className="text-xs font-mono text-[#174A5B] hover:underline"
            >
              View All 10 →
            </button>
          </div>

          <div className="space-y-2.5 font-mono text-xs">
            {CREDENTIALS.slice(0, 5).map((cred) => (
              <div
                key={cred.id}
                className="p-2.5 border border-[#D9D9D4] bg-[#FAF9F7] flex items-center justify-between"
              >
                <div>
                  <span className="text-[#174A5B] font-bold block text-[10px]">{cred.issuer}</span>
                  <span className="text-[#111111] font-semibold text-xs">{cred.title}</span>
                </div>
                <span className="text-[10px] text-[#356859] px-2 py-0.5 bg-[#356859]/10 font-medium">
                  {cred.status}
                </span>
              </div>
            ))}
          </div>

          <div className="text-[11px] font-mono text-[#8A8A85] leading-relaxed pt-1">
            Official curriculum certificates. Verification links marked "Not provided" when pending or external URL is unsupplied.
          </div>
        </div>
      </section>

      {/* 9. DIRECT NAVIGATION TO FULL DOSSIER SECTIONS */}
      <section className="border-t border-[#D9D9D4] pt-8">
        <div className="text-xs font-mono text-[#8A8A85] uppercase tracking-wider mb-4">
          DOSSIER INDEX // COMPREHENSIVE SECTIONS
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 text-xs font-mono">
          <button
            onClick={() => onNavigate('/research')}
            className="p-3 border border-[#D9D9D4] bg-[#FFFFFF] hover:border-[#174A5B] text-left transition-colors"
          >
            <span className="text-[#174A5B] block font-bold">01 / RES</span>
            <span className="text-[#111111]">Research</span>
          </button>
          <button
            onClick={() => onNavigate('/systems')}
            className="p-3 border border-[#D9D9D4] bg-[#FFFFFF] hover:border-[#174A5B] text-left transition-colors"
          >
            <span className="text-[#174A5B] block font-bold">02 / SYS</span>
            <span className="text-[#111111]">Systems Lab</span>
          </button>
          <button
            onClick={() => onNavigate('/projects')}
            className="p-3 border border-[#D9D9D4] bg-[#FFFFFF] hover:border-[#174A5B] text-left transition-colors"
          >
            <span className="text-[#174A5B] block font-bold">03 / PRJ</span>
            <span className="text-[#111111]">Projects</span>
          </button>
          <button
            onClick={() => onNavigate('/notes')}
            className="p-3 border border-[#D9D9D4] bg-[#FFFFFF] hover:border-[#174A5B] text-left transition-colors"
          >
            <span className="text-[#174A5B] block font-bold">04 / NOT</span>
            <span className="text-[#111111]">Technical Notes</span>
          </button>
          <button
            onClick={() => onNavigate('/experience')}
            className="p-3 border border-[#D9D9D4] bg-[#FFFFFF] hover:border-[#174A5B] text-left transition-colors"
          >
            <span className="text-[#174A5B] block font-bold">05 / EXP</span>
            <span className="text-[#111111]">Experience</span>
          </button>
          <button
            onClick={() => onNavigate('/cv')}
            className="p-3 border border-[#D9D9D4] bg-[#FFFFFF] hover:border-[#174A5B] text-left transition-colors"
          >
            <span className="text-[#174A5B] block font-bold">06 / CV</span>
            <span className="text-[#111111]">Academic CV</span>
          </button>
        </div>
      </section>

      {/* Download Capstone Technical Report Modal */}
      {downloadModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-4">
          <div className="bg-[#FFFFFF] border border-[#D9D9D4] max-w-lg w-full p-6 space-y-4 font-mono text-xs">
            <div className="flex items-center justify-between border-b border-[#D9D9D4] pb-3">
              <span className="font-bold text-[#111111] text-sm uppercase">
                DOCUMENT RETRIEVAL: CAPSTONE REPORT
              </span>
              <button
                onClick={() => setDownloadModalOpen(false)}
                className="text-[#8A8A85] hover:text-[#111111]"
              >
                ✕
              </button>
            </div>
            <div className="space-y-2 text-[#444444] font-sans">
              <p className="font-semibold text-[#111111]">
                Resonant Inductive Wireless Power Transmission System — Technical Report &amp; Experimental Monograph
              </p>
              <p className="text-xs">
                Author: Muhammad Adeel Sajjad · Degree: B.S. Electrical Engineering (Power)
              </p>
              <p className="text-xs">
                Department of Electrical Engineering, The Islamia University of Bahawalpur (Aug 2015 — Jun 2016, Grade A).
              </p>
              <p className="text-xs">
                Includes full mathematical derivations for mutual inductance, air-gap separation sweep data (0–150mm), high-Q helical coil winding parameters, and zero-voltage switching (ZVS) oscillograms.
              </p>
            </div>
            <div className="bg-[#FAF9F7] p-3 border border-[#EBEBE6] space-y-1 text-[11px]">
              <div>FILE: <span className="text-[#111111]">Adeel_Sajjad_Capstone_Resonant_WPT.pdf</span></div>
              <div>CLASSIFICATION: <span className="text-[#174A5B]">Academic Capstone Thesis</span></div>
              <div>EVALUATION: <span className="text-[#356859]">Grade A (Board Defended)</span></div>
            </div>
            <div className="flex items-center justify-end space-x-2 pt-2">
              <button
                onClick={() => setDownloadModalOpen(false)}
                className="px-3 py-1.5 border border-[#D9D9D4] text-[#555555] hover:bg-[#FAF9F7] text-xs font-mono"
              >
                Close
              </button>
              <button
                onClick={() => {
                  setDownloadModalOpen(false);
                  onNavigate('/projects/resonant-power-transfer');
                }}
                className="px-3.5 py-1.5 bg-[#174A5B] text-white hover:bg-[#103440] inline-flex items-center space-x-1.5 text-xs font-mono"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Open Full Monograph &amp; Report</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
