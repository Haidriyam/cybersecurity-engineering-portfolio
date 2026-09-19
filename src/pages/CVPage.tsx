import React, { useState } from 'react';
import {
  PERSONAL_INFO,
  EDUCATION,
  EXPERIENCE,
  PROJECTS,
  TECHNICAL_NOTES,
  CREDENTIALS,
  RESEARCH_AREAS
} from '../data/dossierData';
import { Breadcrumb } from '../components/Breadcrumb';
import { Download, Printer, FileText, CheckCircle2, AlertCircle, ExternalLink, Loader2 } from 'lucide-react';
import { generateAcademicCVPdf } from '../utils/generateCVPdf';

interface CVPageProps {
  onNavigate: (path: string) => void;
}

export const CVPage: React.FC<CVPageProps> = ({ onNavigate }) => {
  const [pdfStatus, setPdfStatus] = useState<'idle' | 'generating' | 'success' | 'error'>('idle');
  const [printNotice, setPrintNotice] = useState<string | null>(null);

  // Direct client-side PDF generation & download
  const handleDownloadPdf = () => {
    setPdfStatus('generating');
    setPrintNotice(null);

    // Give browser brief microtask to update UI state
    setTimeout(() => {
      try {
        generateAcademicCVPdf();
        setPdfStatus('success');
        setTimeout(() => setPdfStatus('idle'), 4000);
      } catch (err) {
        console.error('PDF generation error:', err);
        setPdfStatus('error');
        setPrintNotice('Direct PDF compilation encountered an issue. You can still use the browser print dialog.');
        setTimeout(() => setPdfStatus('idle'), 6000);
      }
    }, 60);
  };

  // Browser system print trigger
  const handleBrowserPrint = () => {
    setPrintNotice(null);
    const isInIframe = typeof window !== 'undefined' && window.self !== window.top;

    try {
      window.print();
      if (isInIframe) {
        // Many sandboxed iframes prevent window.print() or fail silently
        setTimeout(() => {
          setPrintNotice(
            'Preview environment detected: If your browser dialogue did not open, click "DOWNLOAD PDF (.PDF)" above or open the app in a new browser tab.'
          );
        }, 1200);
      }
    } catch (err) {
      console.warn('window.print() prevented by sandbox', err);
      setPrintNotice(
        'Browser printing was restricted by the preview iframe. Please use "DOWNLOAD PDF (.PDF)" for the direct file or open the app in a new tab.'
      );
    }
  };

  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      {/* Breadcrumb (hidden in print) */}
      <div className="no-print">
        <Breadcrumb
          items={[{ label: 'Curriculum Vitae' }]}
          onNavigate={onNavigate}
        />
      </div>

      {/* Action Header with Direct Download + System Print Controls (hidden in print) */}
      <div className="no-print border border-[#D9D9D4] bg-[#FFFFFF] p-5 sm:p-6 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#D9D9D4] pb-4">
          <div>
            <span className="font-mono text-xs text-[#174A5B] font-bold block uppercase tracking-wider">
              ACADEMIC CURRICULUM VITAE // VERIFIED RECORD
            </span>
            <span className="text-xs text-[#666666] font-sans">
              Formatted for PhD admissions committees, engineering faculty, and research collaborators.
            </span>
          </div>
          <div className="inline-flex items-center space-x-1.5 px-3 py-1.5 bg-[#FAF9F7] text-[#666666] text-[11px] font-mono border border-[#D9D9D4] shrink-0">
            <FileText className="w-3.5 h-3.5 text-[#8A8A85]" />
            <span>INSTITUTIONAL FORMAT: A4 / 10PT</span>
          </div>
        </div>

        {/* Action Buttons Row */}
        <div className="flex flex-wrap items-center gap-3">
          {/* 1. Direct PDF Download Button */}
          <button
            onClick={handleDownloadPdf}
            disabled={pdfStatus === 'generating'}
            className="inline-flex items-center space-x-2 px-4 py-2.5 bg-[#174A5B] text-white hover:bg-[#103440] disabled:bg-[#8A8A85] text-xs font-mono font-bold transition-colors border border-[#174A5B] shadow-xs cursor-pointer"
            title="Generate and download verified PDF file immediately"
          >
            {pdfStatus === 'generating' ? (
              <>
                <Loader2 className="w-3.5 h-3.5 animate-spin" />
                <span>GENERATING PDF...</span>
              </>
            ) : pdfStatus === 'success' ? (
              <>
                <CheckCircle2 className="w-3.5 h-3.5 text-[#A5D6A7]" />
                <span>DOWNLOAD STARTED ✓</span>
              </>
            ) : (
              <>
                <Download className="w-3.5 h-3.5" />
                <span>DOWNLOAD ACADEMIC CV (.PDF)</span>
              </>
            )}
          </button>

          {/* 2. Browser Print / Save via System Dialogue */}
          <button
            onClick={handleBrowserPrint}
            className="inline-flex items-center space-x-2 px-4 py-2.5 bg-[#FAF9F7] text-[#111111] hover:bg-[#FFFFFF] hover:border-[#174A5B] text-xs font-mono font-medium transition-colors border border-[#D9D9D4] cursor-pointer"
            title="Open browser print dialogue (or Save as PDF via system printer)"
          >
            <Printer className="w-3.5 h-3.5 text-[#555555]" />
            <span>PRINT VIA BROWSER</span>
          </button>

          {/* 3. Open in New Tab for unrestricted native printing */}
          <a
            href={window.location.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-1.5 px-3 py-2.5 bg-[#FFFFFF] text-[#555555] hover:text-[#174A5B] hover:border-[#174A5B] text-[11px] font-mono transition-colors border border-[#D9D9D4]"
            title="Open this CV in a dedicated browser tab to bypass iframe sandbox limits"
          >
            <span>OPEN IN NEW TAB</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        {/* Status / Notice feedback */}
        {printNotice && (
          <div className="p-3 bg-[#FAF9F7] border-l-2 border-[#174A5B] text-xs font-mono text-[#444444] flex items-start space-x-2">
            <AlertCircle className="w-4 h-4 text-[#174A5B] shrink-0 mt-0.5" />
            <div className="space-y-1">
              <span className="font-semibold block text-[#111111]">Browser Print Status:</span>
              <p>{printNotice}</p>
            </div>
          </div>
        )}
      </div>

      {/* Printable Academic CV Document */}
      <div className="print-page border border-[#D9D9D4] bg-[#FFFFFF] p-8 sm:p-12 lg:p-14 space-y-9 text-[#111111] font-sans shadow-xs">
        {/* Document Header (using div.cv-document-header so print styles never hide it) */}
        <div className="cv-document-header border-b-2 border-[#111111] pb-6 space-y-2.5">
          <h1 className="text-3xl sm:text-4xl font-sans font-bold tracking-tight text-[#111111]">
            {PERSONAL_INFO.name}
          </h1>
          <div className="space-y-0.5">
            <div className="text-xs sm:text-sm font-mono text-[#174A5B] font-bold tracking-wide">
              {PERSONAL_INFO.title.toUpperCase()}
            </div>
            <div className="text-xs sm:text-sm font-mono text-[#333333] font-semibold">
              {PERSONAL_INFO.credential.toUpperCase()}
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-y-1 gap-x-3 text-xs font-mono text-[#555555] pt-1">
            <span>Email: <a href={`mailto:${PERSONAL_INFO.email}`} className="text-[#111111] underline">{PERSONAL_INFO.email}</a></span>
            <span className="text-[#D9D9D4]">•</span>
            <span>Location: {PERSONAL_INFO.location}</span>
            <span className="text-[#D9D9D4]">•</span>
            <span>GitHub: <a href={`https://${PERSONAL_INFO.github}`} target="_blank" rel="noopener noreferrer" className="text-[#174A5B] hover:underline">{PERSONAL_INFO.github}</a></span>
            <span className="text-[#D9D9D4]">•</span>
            <span>GPG: {PERSONAL_INFO.gpgFingerprint.slice(0, 24)}...</span>
          </div>
        </div>

        {/* 1. Profile / Summary */}
        <section className="cv-section space-y-2.5 break-inside-avoid">
          <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-[#174A5B] border-b border-[#D9D9D4] pb-1">
            1. Profile / Summary
          </h2>
          <p className="text-xs sm:text-sm text-[#333333] leading-relaxed font-sans">
            Systems &amp; Infrastructure Engineer with a foundational degree in Electrical Engineering (Power Systems) and over 8 years of hands-on enterprise infrastructure experience. Possesses rigorous training in electromagnetic field modeling, resonant power electronics, and high-voltage transmission, combined with deep operational expertise in deterministic kernel telemetry pipelines, bare-metal infrastructure automation, and industrial control systems (SCADA) network boundary defense.
          </p>
        </section>

        {/* 2. Research Interests */}
        <section className="cv-section space-y-2.5 break-inside-avoid">
          <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-[#174A5B] border-b border-[#D9D9D4] pb-1">
            2. Research Interests
          </h2>
          <div className="text-xs sm:text-sm text-[#333333] space-y-1.5 font-sans">
            <p>
              <strong>Resilient Cyber-Physical Systems (CPS):</strong> Analyzing failure modes and attack surfaces where unauthenticated industrial protocols (Modbus-TCP, DNP3) couple with physical power converter dynamics and protection relays.
            </p>
            <p>
              <strong>Smart Grid Security &amp; Anomaly Detection:</strong> Deterministic packet inspection, state-estimation defense against false data injection (FDI), and IEC 62443 / Purdue reference architecture enforcement.
            </p>
            <p>
              <strong>Resonant Inductive Coupling:</strong> High-Q magnetic resonance link optimization, mutual inductance parameter extraction, and zero-voltage-switching (ZVS) power electronics.
            </p>
            <p>
              <strong>Distributed Testbed Infrastructure:</strong> Hardware-in-the-loop (HIL) environments, kernel-level zero-drop ring buffering, and reproducible bare-metal infrastructure orchestration.
            </p>
          </div>
        </section>

        {/* 3. Education */}
        <section className="cv-section space-y-3 break-inside-avoid">
          <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-[#174A5B] border-b border-[#D9D9D4] pb-1">
            3. Education
          </h2>
          <div className="space-y-2">
            <div className="flex justify-between items-baseline text-xs sm:text-sm">
              <div>
                <span className="font-bold text-[#111111]">{EDUCATION.degree} — Power</span>
                <div className="text-xs font-mono text-[#555555]">
                  {EDUCATION.institution} · {EDUCATION.location}
                </div>
              </div>
              <span className="font-mono text-xs text-[#174A5B] font-semibold">{EDUCATION.period}</span>
            </div>

            <div className="text-xs font-mono text-[#555555]">
              Specialization: {EDUCATION.specialization} · Status: {EDUCATION.status}
            </div>

            {EDUCATION.thesisOrCapstone && (
              <div className="text-xs text-[#333333] bg-[#FAF9F7] p-3.5 border border-[#EBEBE6] space-y-2">
                <div className="flex flex-wrap items-baseline justify-between gap-1">
                  <span className="font-mono font-bold text-[#174A5B]">
                    Capstone Thesis: "{EDUCATION.thesisOrCapstone.title}"
                  </span>
                  <span className="text-[11px] font-mono text-[#8A8A85]">
                    {EDUCATION.thesisOrCapstone.period} · {EDUCATION.thesisOrCapstone.grade}
                  </span>
                </div>
                <p className="text-[11px] leading-relaxed text-[#555555]">
                  Modeled Maxwell's equations and coupled-mode theory for near-field electromagnetic energy transfer over variable air gaps. Designed, wound, and tuned helical magnetic induction coils. Developed primary and secondary resonant LC tanks to cancel reactive power and maximize power factor. Fabricated switching driver hardware and evaluated transmission efficiency curves, Q factors, and thermal behavior using DSO oscilloscopes and RF instruments. Authored thesis documentation followed by an examination-board defense.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* 4. Engineering Experience */}
        <section className="cv-section space-y-6">
          <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-[#174A5B] border-b border-[#D9D9D4] pb-1">
            4. Engineering Experience
          </h2>
          {EXPERIENCE.map((exp) => (
            <div key={exp.id} className="cv-item space-y-2 text-xs sm:text-sm break-inside-avoid">
              <div className="flex justify-between items-baseline">
                <span className="font-bold text-[#111111] text-sm">{exp.role}</span>
                <span className="font-mono text-xs text-[#174A5B] font-semibold">{exp.period}</span>
              </div>
              <div className="flex justify-between items-baseline text-xs font-mono text-[#555555]">
                <span>{exp.organization} {exp.division ? `· ${exp.division}` : ''}</span>
                <span>{exp.location}</span>
              </div>
              <p className="text-xs text-[#444444] leading-relaxed pt-0.5">{exp.scope}</p>

              {/* Technical Responsibilities */}
              {exp.technicalResponsibilities && (
                <div className="pt-1">
                  <span className="text-[10px] font-mono uppercase text-[#8A8A85] block font-semibold mb-1">
                    Technical Responsibilities:
                  </span>
                  <ul className="list-disc list-inside text-xs text-[#333333] space-y-1 pl-1">
                    {exp.technicalResponsibilities.map((resp, idx) => (
                      <li key={idx} className="leading-relaxed">{resp}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Systems Worked With */}
              {exp.systemsWorkedWith && (
                <div className="text-[11px] font-mono text-[#555555] pt-1">
                  <span className="font-semibold text-[#111111]">Systems Worked With: </span>
                  <span>{exp.systemsWorkedWith.join(', ')}</span>
                </div>
              )}

              {/* Selected Technical Contributions */}
              {exp.selectedContributions && (
                <div className="pt-1">
                  <span className="text-[10px] font-mono uppercase text-[#174A5B] block font-semibold mb-1">
                    Selected Technical Contributions:
                  </span>
                  <ul className="list-disc list-inside text-xs text-[#333333] space-y-1 pl-1">
                    {exp.selectedContributions.map((contrib, idx) => (
                      <li key={idx} className="leading-relaxed">{contrib}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </section>

        {/* 5. Selected Projects & Systems */}
        <section className="cv-section space-y-4">
          <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-[#174A5B] border-b border-[#D9D9D4] pb-1">
            5. Selected Projects &amp; Systems
          </h2>
          <div className="space-y-4 text-xs">
            {PROJECTS.map((prj) => (
              <div key={prj.slug} className="cv-item border-l-2 border-[#174A5B] pl-3.5 space-y-1.5 break-inside-avoid">
                <div className="flex flex-wrap items-baseline justify-between gap-1">
                  <span className="font-mono font-bold text-[#111111]">
                    {prj.id}: {prj.title}
                  </span>
                  <span className="font-mono text-[#8A8A85] text-[11px]">{prj.date}</span>
                </div>
                <div className="font-mono text-[11px] text-[#174A5B]">
                  Domain: {prj.domain}
                </div>
                <p className="text-[#444444] leading-relaxed">{prj.technicalSummary}</p>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] font-mono text-[#666666] pt-0.5">
                  <span>Stack: {prj.tags.slice(0, 5).join(', ')}</span>
                  {prj.securityValidation && (
                    <>
                      <span className="text-[#D9D9D4]">•</span>
                      <span>Verification: {prj.securityValidation.slice(0, 2).join(', ')}</span>
                    </>
                  )}
                  {prj.repositoryUrl && (
                    <>
                      <span className="text-[#D9D9D4]">•</span>
                      <a href={prj.repositoryUrl} target="_blank" rel="noopener noreferrer" className="text-[#174A5B] hover:underline inline-flex items-center gap-0.5">
                        <span>Repo</span>
                        <ExternalLink className="w-2.5 h-2.5" />
                      </a>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 6. Technical Notes & Engineering Monographs */}
        <section className="cv-section space-y-3">
          <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-[#174A5B] border-b border-[#D9D9D4] pb-1">
            6. Technical Notes &amp; Engineering Monographs
          </h2>
          <div className="space-y-3 text-xs">
            {TECHNICAL_NOTES.map((note) => (
              <div key={note.slug} className="cv-item border-l-2 border-[#174A5B] pl-3.5 space-y-1 break-inside-avoid">
                <div className="flex flex-wrap items-baseline gap-2">
                  <span className="font-mono font-bold text-[#174A5B]">[{note.id}]</span>
                  <span className="font-sans font-bold text-[#111111]">"{note.title}"</span>
                </div>
                <div className="text-[11px] font-mono text-[#8A8A85]">
                  Category: {note.category} · {note.date}
                </div>
                <p className="text-[11px] font-sans text-[#555555] leading-relaxed">
                  {note.abstract}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 7. Technical Competencies */}
        <section className="cv-section space-y-3 break-inside-avoid">
          <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-[#174A5B] border-b border-[#D9D9D4] pb-1">
            7. Technical Competencies
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
            <div className="space-y-1">
              <span className="font-bold text-[#174A5B] block">Power Systems &amp; Hardware:</span>
              <p className="text-[#444444] leading-relaxed">
                High-Q Resonant Inductive Coupling, Series-Series Tank Compensation, ZVS Inverters, Transmission Fault Studies, Digital Storage Oscilloscopes, Precision LCR Meters, Spectrum Analyzers.
              </p>
            </div>
            <div className="space-y-1">
              <span className="font-bold text-[#174A5B] block">Infrastructure, Security &amp; Networking:</span>
              <p className="text-[#444444] leading-relaxed">
                Linux Kernel Sockets (SO_RCVBUFFORCE), AF_PACKET MMAP Ring Buffers, SCADA Modbus-TCP / DNP3 Deep Packet Inspection, IEC 62443 Zone Segmentation, Ansible Automation, WireGuard Mesh.
              </p>
            </div>
          </div>
        </section>

        {/* 8. Verified Curricula & Credentials */}
        <section className="cv-section space-y-3 break-inside-avoid">
          <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-[#174A5B] border-b border-[#D9D9D4] pb-1">
            8. Verified Curricula &amp; Credentials
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
            {CREDENTIALS.map((cred) => (
              <div key={cred.id} className="cv-item p-2.5 border border-[#D9D9D4] bg-[#FAF9F7] flex items-center justify-between">
                <div>
                  <span className="font-bold text-[#174A5B] block text-[11px]">{cred.issuer}</span>
                  <span className="font-semibold text-[#111111]">{cred.title}</span>
                </div>
                <span className="text-[10px] text-[#356859] font-medium shrink-0 ml-2">{cred.status}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Academic Reference Notice (using div.cv-document-footer so print styles never hide it) */}
        <div className="cv-document-footer pt-4 border-t border-[#D9D9D4] text-xs font-mono text-[#666666] leading-relaxed">
          <span>REFERENCES: </span>
          <span>
            Academic supervisor recommendations, authenticated degree transcripts, and institutional validation records available immediately upon request during formal evaluation.
          </span>
        </div>
      </div>
    </div>
  );
};
