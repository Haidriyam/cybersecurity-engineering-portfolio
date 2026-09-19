import React from 'react';
import { Breadcrumb } from '../components/Breadcrumb';
import { CREDENTIALS } from '../data/dossierData';
import { Award, ExternalLink, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface CredentialsPageProps {
  onNavigate: (path: string) => void;
}

export const CredentialsPage: React.FC<CredentialsPageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 space-y-12">
      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          { label: 'Engineering Dossier', path: '/' },
          { label: 'Credentials & Verifications' }
        ]}
        onNavigate={onNavigate}
      />

      {/* Header */}
      <div className="space-y-4 border-b border-[#D9D9D4] pb-6">
        <div className="flex items-center space-x-2 text-xs font-mono text-[#8A8A85]">
          <span className="px-2 py-0.5 bg-[#F2F2EE] text-[#174A5B] font-semibold">RECORD / CRED-001</span>
          <span>CURRICULUM &amp; SPECIALIZATIONS</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-sans font-bold text-[#111111] tracking-tight">
          TECHNICAL CREDENTIALS &amp; VERIFICATIONS
        </h1>
        <p className="text-base text-[#444444] max-w-3xl font-sans leading-relaxed">
          Formal specialized training and verified curriculum credentials across cloud DevOps, operating systems, defensive cybersecurity, software quality control, and systems programming.
        </p>
      </div>

      {/* Verification Protocol Notice */}
      <div className="border border-[#D9D9D4] bg-[#FAF9F7] p-4 text-xs font-mono text-[#555555] space-y-1.5">
        <div className="flex items-center space-x-2 text-[#174A5B] font-semibold">
          <ShieldCheck className="w-4 h-4" />
          <span>VERIFICATION AUDIT PROTOCOL</span>
        </div>
        <p className="text-[#666666] leading-relaxed">
          In strict accordance with academic dossier integrity, external credential verification links are only displayed when provided by the issuing institution or candidate. Unverified or pending verification URLs are explicitly marked as "Not provided" rather than fabricated.
        </p>
      </div>

      {/* Credentials Table / Matrix */}
      <div className="border border-[#D9D9D4] bg-[#FFFFFF] overflow-hidden">
        <div className="bg-[#FAF9F7] border-b border-[#D9D9D4] px-4 py-3 flex items-center justify-between text-xs font-mono text-[#666666]">
          <span className="font-semibold text-[#111111]">CURRICULUM &amp; SPECIALIZATIONS REGISTER</span>
          <span>TOTAL CREDENTIALS: {CREDENTIALS.length}</span>
        </div>

        <div className="divide-y divide-[#EBEBE6]">
          {CREDENTIALS.map((cred, index) => (
            <div
              key={cred.id}
              className="p-5 hover:bg-[#FAF9F7] transition-colors flex flex-col md:flex-row md:items-center justify-between gap-4"
            >
              <div className="space-y-1.5 max-w-2xl">
                <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                  <span className="text-[#8A8A85]">REF-{String(index + 1).padStart(2, '0')}</span>
                  <span className="text-[#D9D9D4]">|</span>
                  <span className="text-[#174A5B] font-semibold">{cred.issuer}</span>
                  {cred.category && (
                    <>
                      <span className="text-[#D9D9D4]">|</span>
                      <span className="text-[#666666]">{cred.category}</span>
                    </>
                  )}
                </div>
                <h3 className="text-base font-sans font-bold text-[#111111]">
                  {cred.title}
                </h3>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-xs font-mono">
                <div className="flex items-center space-x-1.5 px-2.5 py-1 bg-[#F2F2EE] border border-[#E0E0DB] text-[#356859]">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span className="font-medium">{cred.status}</span>
                </div>

                <div className="min-w-[140px]">
                  <div className="text-[10px] text-[#8A8A85] uppercase">VERIFICATION LINK</div>
                  {cred.verificationUrl ? (
                    <a
                      href={cred.verificationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1 text-[#174A5B] hover:underline"
                    >
                      <span>Verify Credential</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : (
                    <span className="text-[#8A8A85] italic">Not provided</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Technical Competency Cross-Reference */}
      <div className="border border-[#D9D9D4] bg-[#FFFFFF] p-6 space-y-4">
        <h3 className="text-base font-sans font-bold text-[#111111]">
          Institutional &amp; Curriculum Distribution
        </h3>
        <p className="text-xs text-[#555555] leading-relaxed">
          The credentials complement the B.S. in Electrical Engineering degree with rigorous continuous specialization across modern systems infrastructure:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 pt-2">
          <div className="border border-[#EBEBE6] p-3 space-y-1">
            <div className="text-xs font-mono text-[#174A5B] font-semibold">IBM</div>
            <div className="text-xs text-[#444444]">4 Curricula</div>
            <div className="text-[11px] text-[#8A8A85]">Hardware, OS, Networking, Storage &amp; Cybersecurity</div>
          </div>

          <div className="border border-[#EBEBE6] p-3 space-y-1">
            <div className="text-xs font-mono text-[#174A5B] font-semibold">NORTHEASTERN UNIV.</div>
            <div className="text-xs text-[#444444]">Software Quality</div>
            <div className="text-[11px] text-[#8A8A85]">Quality Control &amp; Management (Parts 1 &amp; 2)</div>
          </div>

          <div className="border border-[#EBEBE6] p-3 space-y-1">
            <div className="text-xs font-mono text-[#174A5B] font-semibold">UNIV. OF LEEDS</div>
            <div className="text-xs text-[#444444]">Testing &amp; Validation</div>
            <div className="text-[11px] text-[#8A8A85]">Foundations of Software Testing &amp; Verification</div>
          </div>

          <div className="border border-[#EBEBE6] p-3 space-y-1">
            <div className="text-xs font-mono text-[#174A5B] font-semibold">PACKT / META</div>
            <div className="text-xs text-[#444444]">Cloud &amp; Languages</div>
            <div className="text-[11px] text-[#8A8A85]">AWS DevOps Specialization &amp; Advanced Kotlin</div>
          </div>
        </div>
      </div>

      {/* Navigation Footer */}
      <div className="border-t border-[#D9D9D4] pt-6 flex justify-between items-center text-xs font-mono">
        <button
          onClick={() => onNavigate('/education')}
          className="text-[#555555] hover:text-[#111111]"
        >
          ← Academic Education &amp; Coursework
        </button>
        <button
          onClick={() => onNavigate('/cv')}
          className="text-[#174A5B] hover:underline flex items-center space-x-1 font-semibold"
        >
          <span>Curriculum Vitae</span>
          <span>→</span>
        </button>
      </div>
    </div>
  );
};
