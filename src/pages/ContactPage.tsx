import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/dossierData';
import { SectionHeader } from '../components/SectionHeader';
import { Breadcrumb } from '../components/Breadcrumb';
import { Mail, Shield, Copy, Check, ExternalLink, Key, MessageSquare, ArrowRight, Github } from 'lucide-react';

interface ContactPageProps {
  onNavigate: (path: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedFingerprint, setCopiedFingerprint] = useState(false);

  const copyText = (text: string, type: 'email' | 'fingerprint') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedFingerprint(true);
      setTimeout(() => setCopiedFingerprint(false), 2000);
    }
  };

  const researchTopics = [
    {
      title: 'Prospective PhD Opportunities',
      description: 'Doctoral research positions, graduate fellowships, and supervisor openings in Electrical Engineering, Computer Engineering, or Cyber-Physical Systems for the 2026/2027 cycle.'
    },
    {
      title: 'Cyber-Physical Systems Security Research',
      description: 'SCADA boundary defense, Modbus/DNP3 anomaly detection, state estimation under adversarial disruption, and IEC 62443 zone segmentation.'
    },
    {
      title: 'Smart Grid Testbed Collaboration',
      description: 'Hardware-in-the-loop (HIL) simulation, synchronized microsecond phasor measurement unit (PMU) telemetry, and resilient distributed energy resource (DER) control.'
    },
    {
      title: 'Technical Infrastructure Engineering',
      description: 'Deterministic Linux kernel ring buffers, high-throughput SIEM pipelines (50k+ eps zero-drop), bare-metal automation, and bare-metal experimental clusters.'
    }
  ];

  return (
    <div className="space-y-12 max-w-4xl mx-auto">
      <Breadcrumb
        items={[{ label: 'Academic Inquiries' }]}
        onNavigate={onNavigate}
      />

      <div className="border-b border-[#D9D9D4] pb-6">
        <div className="text-xs font-mono text-[#174A5B] font-semibold uppercase tracking-wider mb-1">
          COMMUNICATIONS // ACADEMIC LIAISON
        </div>
        <h1 className="text-3xl sm:text-4xl font-sans font-bold text-[#111111] tracking-tight">
          Academic Correspondence &amp; Contact
        </h1>
        <p className="text-sm sm:text-base font-sans text-[#555555] mt-2 max-w-2xl">
          Direct communication channels for prospective PhD supervisors, university admissions committees, research scientists, and technical infrastructure collaborators.
        </p>
      </div>

      {/* 1. Topics of Interest */}
      <section className="border border-[#D9D9D4] bg-[#FFFFFF] p-6 sm:p-8 space-y-6">
        <div className="border-b border-[#D9D9D4] pb-3">
          <div className="text-xs font-mono text-[#174A5B] font-semibold uppercase tracking-wider mb-1">
            COLLABORATION VECTORS
          </div>
          <h2 className="text-xl sm:text-2xl font-sans font-bold text-[#111111]">
            Topics of Interest
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {researchTopics.map((topic, idx) => (
            <div
              key={idx}
              className="border border-[#D9D9D4] bg-[#FAF9F7] p-5 space-y-2"
            >
              <div className="flex items-center space-x-2 text-xs font-mono text-[#174A5B]">
                <span className="font-bold">0{idx + 1}.</span>
                <span className="font-semibold text-[#111111] font-sans text-sm">{topic.title}</span>
              </div>
              <p className="text-xs text-[#555555] font-sans leading-relaxed">
                {topic.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 2. Academic / Technical Contact Details */}
      <section className="border border-[#D9D9D4] bg-[#FFFFFF] p-6 sm:p-8 space-y-6">
        <div className="border-b border-[#D9D9D4] pb-3">
          <div className="text-xs font-mono text-[#174A5B] font-semibold uppercase tracking-wider mb-1">
            DIRECT CHANNELS
          </div>
          <h2 className="text-xl sm:text-2xl font-sans font-bold text-[#111111]">
            Academic &amp; Technical Contact Details
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Email Block */}
          <div className="space-y-3 font-mono text-xs">
            <span className="text-[#8A8A85] uppercase block font-semibold text-[10px]">
              Direct Research Email:
            </span>
            <div className="p-3 bg-[#FAF9F7] border border-[#D9D9D4] flex items-center justify-between text-[#111111]">
              <span className="font-semibold">{PERSONAL_INFO.email}</span>
              <button
                onClick={() => copyText(PERSONAL_INFO.email, 'email')}
                className="text-[#666666] hover:text-[#111111] p-1 focus:outline-none"
                title="Copy email to clipboard"
              >
                {copiedEmail ? <Check className="w-3.5 h-3.5 text-[#356859]" /> : <Copy className="w-3.5 h-3.5 text-[#8A8A85]" />}
              </button>
            </div>
            <a
              href={`mailto:${PERSONAL_INFO.email}?subject=[Research%20Inquiry]%20PhD%20%2F%20Collaboration`}
              className="inline-flex items-center justify-center w-full py-2 bg-[#174A5B] text-white font-medium hover:bg-[#103440] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 mr-2" />
              <span>Compose Email</span>
            </a>
          </div>

          {/* GitHub / Repository Block */}
          <div className="space-y-3 font-mono text-xs">
            <span className="text-[#8A8A85] uppercase block font-semibold text-[10px]">
              Code Artifacts &amp; Repository:
            </span>
            <div className="p-3 bg-[#FAF9F7] border border-[#D9D9D4] flex items-center justify-between text-[#111111]">
              <span>github.com/Haidriyam</span>
              <span className="text-[10px] text-[#8A8A85]">[PUBLIC]</span>
            </div>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full py-2 bg-[#FFFFFF] border border-[#D9D9D4] text-[#111111] hover:border-[#174A5B] transition-colors"
            >
              <Github className="w-3.5 h-3.5 mr-2 text-[#555555]" />
              <span>View GitHub Repositories</span>
              <ExternalLink className="w-3 h-3 ml-1.5 text-[#8A8A85]" />
            </a>
          </div>
        </div>
      </section>

      {/* 3. PGP / GPG Key Fingerprint Placeholder */}
      <section className="border border-[#D9D9D4] bg-[#FFFFFF] p-6 sm:p-8 space-y-4">
        <div className="flex items-center space-x-2 text-xs font-mono text-[#111111] font-bold">
          <Key className="w-4 h-4 text-[#174A5B]" />
          <span>CRYPTOGRAPHIC VERIFICATION (PGP / GPG KEY FINGERPRINT)</span>
        </div>

        <p className="text-xs text-[#555555] font-sans leading-relaxed">
          For confidential inquiries, code-audit verifications, or secure transmission of laboratory logs, please verify communications against the GPG key fingerprint below:
        </p>

        <div className="p-3.5 bg-[#171717] text-[#EDEDED] font-mono text-xs flex items-center justify-between border border-[#333333] overflow-x-auto">
          <span className="text-[#EDEDED] font-medium tracking-wide">
            {PERSONAL_INFO.gpgFingerprint}
          </span>
          <button
            onClick={() => copyText(PERSONAL_INFO.gpgFingerprint, 'fingerprint')}
            className="text-[#888888] hover:text-[#FFFFFF] ml-3 shrink-0 p-1"
            title="Copy GPG Fingerprint"
          >
            {copiedFingerprint ? <Check className="w-3.5 h-3.5 text-[#356859]" /> : <Copy className="w-3.5 h-3.5" />}
          </button>
        </div>
        <div className="text-[11px] font-mono text-[#8A8A85]">
          STATUS: Public key downloadable via OpenPGP keyservers (keys.openpgp.org).
        </div>
      </section>
    </div>
  );
};
