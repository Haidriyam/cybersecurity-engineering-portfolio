import React from 'react';
import {
  Zap,
  Cpu,
  Server,
  Terminal,
  Network,
  Shield,
  Cog,
  Layers,
  Activity,
  ArrowDown,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';

interface EngineeringTrajectoryNarrativeProps {
  onNavigate?: (path: string) => void;
}

interface TrajectoryNode {
  step: number;
  label: string;
  domain: string;
  period: string;
  focus: string;
  evidenceAnchor: string;
  evidenceLabel: string;
  linkPath?: string;
  icon: React.ComponentType<{ className?: string }>;
}

export const EngineeringTrajectoryNarrative: React.FC<EngineeringTrajectoryNarrativeProps> = ({ onNavigate }) => {
  const trajectorySteps: TrajectoryNode[] = [
    {
      step: 1,
      label: 'ELECTRICAL ENGINEERING FOUNDATION',
      domain: 'Formal Theory & Applied Mathematics',
      period: '2012 — 2016',
      focus: 'Electromagnetics, circuit theory, differential equations, transmission line physics, and signal analysis.',
      evidenceLabel: 'B.Sc. Electrical Engineering (The Islamia University of Bahawalpur, 2016)',
      evidenceAnchor: '/education',
      linkPath: '/education',
      icon: Zap
    },
    {
      step: 2,
      label: 'POWER SYSTEMS / HARDWARE',
      domain: 'Electromagnetic Energy Transfer & Metrology',
      period: '2015 — 2016',
      focus: 'High-Q LC resonant tanks, series-series magnetic coupling, ZVS inverters, DSO & RF instrument metrology.',
      evidenceLabel: 'Capstone Thesis: Resonant Wireless Power (Grade A, Aug 2015 – Jun 2016)',
      evidenceAnchor: '/projects/resonant-wireless-power',
      linkPath: '/projects/resonant-wireless-power',
      icon: Cpu
    },
    {
      step: 3,
      label: 'ENTERPRISE SYSTEMS',
      domain: 'Production Reliability & Workload Scaling',
      period: '2017 — 2020',
      focus: 'Multi-tier operational infrastructure, service-level guarantees, failover clustering, incident RCA.',
      evidenceLabel: 'Documented 99.8% Operational SLA across multi-tier production services',
      evidenceAnchor: '/experience',
      linkPath: '/experience',
      icon: Server
    },
    {
      step: 4,
      label: 'LINUX / CLOUD',
      domain: 'Kernel Internals & Virtualized Environments',
      period: '2018 — Present',
      focus: 'POSIX kernel tuning, virtual memory paging, cgroups, AWS EC2/Lightsail/S3 compute architecture.',
      evidenceLabel: '40%+ Server Response Latency Reduction via OS profile & buffer optimization',
      evidenceAnchor: '/systems',
      linkPath: '/systems',
      icon: Terminal
    },
    {
      step: 5,
      label: 'NETWORKING',
      domain: 'Deterministic Transport & Boundary Isolation',
      period: '2018 — Present',
      focus: 'VLAN boundary segmentation, Layer 2/3 routing, WireGuard VPN meshes, nftables/iptables policies.',
      evidenceLabel: 'Hardware-isolated network zones & sub-millisecond edge routing topologies',
      evidenceAnchor: '/systems',
      linkPath: '/systems',
      icon: Network
    },
    {
      step: 6,
      label: 'CYBERSECURITY / TELEMETRY',
      domain: 'Zero-Drop Ingestion & Security Monitoring',
      period: '2020 — Present',
      focus: 'Wazuh HIDS/XDR, kernel auditd socket tracing, memory-mapped packet rings, SO_RCVBUFFORCE.',
      evidenceLabel: 'Zero-Drop Telemetry Pipeline: 50k+ eps burst ingestion at 1.18 ms parsing latency',
      evidenceAnchor: '/projects/siem-telemetry',
      linkPath: '/projects/siem-telemetry',
      icon: Shield
    },
    {
      step: 7,
      label: 'AUTOMATION / SOFTWARE RELIABILITY',
      domain: 'Idempotent Orchestration & Quality Assurance',
      period: '2021 — Present',
      focus: 'Idempotent Ansible playbooks, Python/Bash test harnesses, CI/CD regression verification, Git provenance.',
      evidenceLabel: 'Ansible & Shell automation configurations archived at github.com/Haidriyam',
      evidenceAnchor: '/projects/infrastructure-automation',
      linkPath: '/projects/infrastructure-automation',
      icon: Cog
    },
    {
      step: 8,
      label: 'CYBER-PHYSICAL SYSTEMS (CPS)',
      domain: 'Coupled Cyber & Physical Grid Dynamics',
      period: '2023 — Present',
      focus: 'Industrial fieldbus protocols (Modbus-TCP, DNP3), physical actuator loops, IEC 62443 Purdue reference model.',
      evidenceLabel: '100% Unauthenticated Modbus Write Block at IDMZ Reverse-Proxy Boundary',
      evidenceAnchor: '/projects/perimeter-hardening',
      linkPath: '/projects/perimeter-hardening',
      icon: Layers
    },
    {
      step: 9,
      label: 'SMART GRID SECURITY / DISTRIBUTED TESTBEDS',
      domain: 'Doctoral Research & Experimental Infrastructure',
      period: 'Current Focus // 2026+',
      focus: 'Phasor measurement unit (PMU) telemetry, false data injection (FDI) mitigation, hardware-in-the-loop (HIL) testbeds.',
      evidenceLabel: 'Research Programs in Resilient Distributed Energy Resource (DER) State Estimation',
      evidenceAnchor: '/research',
      linkPath: '/research',
      icon: Activity
    }
  ];

  return (
    <div className="space-y-6">
      {/* Visual Sequence Grid */}
      <div className="relative">
        {/* Central timeline line (desktop) */}
        <div className="hidden lg:block absolute top-6 bottom-6 left-7 w-0.5 bg-[#D9D9D4]" />

        <div className="space-y-3">
          {trajectorySteps.map((item, idx) => {
            const Icon = item.icon;
            const isLast = idx === trajectorySteps.length - 1;

            return (
              <div
                key={item.step}
                className="relative flex flex-col lg:flex-row lg:items-start space-y-2 lg:space-y-0 lg:space-x-5 border border-[#D9D9D4] bg-[#FFFFFF] p-4 sm:p-5 hover:border-[#174A5B] transition-colors"
              >
                {/* Step indicator node */}
                <div className="flex items-center space-x-3 shrink-0 lg:w-14">
                  <div className="w-8 h-8 rounded-none border border-[#174A5B] bg-[#FAF9F7] flex items-center justify-center font-mono font-bold text-xs text-[#174A5B] z-10">
                    0{item.step}
                  </div>
                  <span className="lg:hidden font-mono text-[10px] text-[#8A8A85] uppercase">
                    {item.period}
                  </span>
                </div>

                {/* Content body */}
                <div className="flex-1 space-y-1.5">
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                    <div className="flex items-center space-x-2">
                      <Icon className="w-3.5 h-3.5 text-[#174A5B] shrink-0" />
                      <h3 className="font-mono text-xs font-bold text-[#111111] tracking-tight uppercase">
                        {item.label}
                      </h3>
                    </div>
                    <div className="hidden lg:flex items-center space-x-3 text-[11px] font-mono text-[#8A8A85]">
                      <span className="text-[#174A5B] font-medium">{item.domain}</span>
                      <span>·</span>
                      <span>{item.period}</span>
                    </div>
                  </div>

                  <p className="text-xs font-sans text-[#444444] leading-relaxed">
                    {item.focus}
                  </p>

                  {/* Evidence Anchor */}
                  <div className="pt-2 border-t border-[#EBEBE6] flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono">
                    <div className="flex items-center space-x-1.5 text-[#356859]">
                      <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                      <span className="text-[11px] font-medium leading-tight">
                        {item.evidenceLabel}
                      </span>
                    </div>

                    {item.linkPath && onNavigate && (
                      <button
                        onClick={() => onNavigate(item.linkPath!)}
                        className="text-[#174A5B] hover:underline inline-flex items-center space-x-1 text-[11px] shrink-0"
                      >
                        <span>Verify Record</span>
                        <span aria-hidden="true">→</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
