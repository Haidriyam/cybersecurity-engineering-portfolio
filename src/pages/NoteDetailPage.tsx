import React, { useState, useEffect } from 'react';
import { TECHNICAL_NOTES, PROJECTS } from '../data/dossierData';
import { Breadcrumb } from '../components/Breadcrumb';
import { TechnicalLabel } from '../components/TechnicalLabel';
import { CodeBlock } from '../components/CodeBlock';
import { TechnicalTable } from '../components/TechnicalTable';
import { MathEquation } from '../components/MathEquation';
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Calendar,
  Clock,
  ExternalLink,
  FileText,
  List,
  CheckCircle2,
  ChevronRight,
  Share2
} from 'lucide-react';

interface NoteDetailPageProps {
  slug: string;
  onNavigate: (path: string) => void;
}

export const NoteDetailPage: React.FC<NoteDetailPageProps> = ({ slug, onNavigate }) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSectionId, setActiveSectionId] = useState<string>('');

  const noteIndex = TECHNICAL_NOTES.findIndex((n) => n.slug === slug);
  const note = TECHNICAL_NOTES[noteIndex];

  const prevNote = noteIndex > 0 ? TECHNICAL_NOTES[noteIndex - 1] : null;
  const nextNote = noteIndex < TECHNICAL_NOTES.length - 1 ? TECHNICAL_NOTES[noteIndex + 1] : null;

  // Track scroll progress and active section
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      }

      if (note && note.sections) {
        const sectionElements = note.sections.map((_, idx) =>
          document.getElementById(`section-${idx}`)
        );

        for (let i = sectionElements.length - 1; i >= 0; i--) {
          const el = sectionElements[i];
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= 160) {
              setActiveSectionId(`section-${i}`);
              break;
            }
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [note]);

  if (!note) {
    return (
      <div className="border border-[#D9D9D4] bg-[#FFFFFF] p-8 text-center space-y-4">
        <h2 className="text-xl font-bold font-mono text-[#111111]">
          404: RESEARCH NOTE NOT FOUND
        </h2>
        <p className="text-sm text-[#666666] font-sans">
          The requested engineering note <code className="font-mono text-[#174A5B]">{slug}</code> is not in the dossier catalog.
        </p>
        <button
          onClick={() => onNavigate('/notes')}
          className="inline-flex items-center space-x-1.5 px-4 py-2 border border-[#174A5B] bg-[#174A5B] text-white text-xs font-mono"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Return to Research Notes</span>
        </button>
      </div>
    );
  }

  // Find associated projects
  const associatedProject = PROJECTS.find((p) =>
    p.documentationUrl === `/notes/${note.slug}` ||
    (note.slug.includes('resonant') && p.slug === 'resonant-wireless-power') ||
    (note.slug.includes('telemetry') && p.slug === 'siem-telemetry') ||
    (note.slug.includes('scada') && p.slug === 'perimeter-hardening')
  );

  // Other related notes
  const otherNotes = TECHNICAL_NOTES.filter((n) => n.slug !== note.slug);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative">
      {/* Top Reading Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-[#EDEDEA] z-50">
        <div
          className="h-full bg-[#174A5B] transition-all duration-75"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <article className="space-y-10 max-w-5xl mx-auto">
        <Breadcrumb
          items={[
            { label: 'Research Notes', path: '/notes' },
            { label: note.id }
          ]}
          onNavigate={onNavigate}
        />

        {/* Note Dossier Header */}
        <header className="border-b border-[#D9D9D4] pb-6 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-mono text-xs font-bold text-[#174A5B] bg-[#FAF9F7] px-2 py-0.5 border border-[#D9D9D4]">
                {note.id}
              </span>
              <span className="text-[#D9D9D4]">·</span>
              <TechnicalLabel variant="neutral">
                {note.category}
              </TechnicalLabel>
              <span className="text-[#D9D9D4]">·</span>
              <span className="font-mono text-xs text-[#8A8A85] flex items-center">
                <Calendar className="w-3 h-3 mr-1" />
                {note.date}
              </span>
              <span className="text-[#D9D9D4]">·</span>
              <span className="font-mono text-xs text-[#8A8A85] flex items-center">
                <Clock className="w-3 h-3 mr-1" />
                {note.readingTime}
              </span>
            </div>

            <div className="text-[11px] font-mono text-[#8A8A85]">
              READING PROGRESS: {Math.round(scrollProgress)}%
            </div>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-sans font-semibold tracking-tight text-[#111111] leading-tight">
            {note.title}
          </h1>

          {/* Abstract callout */}
          <div className="p-4 sm:p-5 bg-[#FFFFFF] border-l-3 border-[#174A5B] border-y border-r border-[#D9D9D4] text-xs sm:text-sm text-[#333333] font-sans leading-relaxed">
            <span className="font-mono text-[11px] font-bold text-[#174A5B] block uppercase tracking-wider mb-1.5">
              ABSTRACT // SCOPE STATEMENT:
            </span>
            {note.abstract}
          </div>
        </header>

        {/* 2-Column Content Layout: Main Text + Table of Contents */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Article Body */}
          <div className="lg:col-span-8 space-y-10">
            {/* Core Mathematical Equations Block */}
            {note.equations && note.equations.length > 0 && (
              <section className="border border-[#D9D9D4] bg-[#FAF9F7] p-5 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] font-bold text-[#8A8A85] block uppercase tracking-wider">
                    Closed-Form Equations &amp; Resonant Formulations:
                  </span>
                  <span className="font-mono text-[10px] text-[#174A5B] font-semibold">
                    KATEX RENDERED
                  </span>
                </div>

                <div className="space-y-2.5">
                  {note.equations.map((eq, idx) => (
                    <div
                      key={idx}
                      className="bg-[#FFFFFF] border border-[#D9D9D4] p-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[#111111]"
                    >
                      <div className="overflow-x-auto py-1">
                        <MathEquation math={eq} />
                      </div>
                      <span className="font-mono text-[10px] text-[#8A8A85] self-end sm:self-center">
                        EQ ({idx + 1})
                      </span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Note Sections */}
            <div className="space-y-10 font-sans text-sm sm:text-base text-[#333333] leading-relaxed">
              {note.sections.map((section, idx) => (
                <section
                  key={idx}
                  id={`section-${idx}`}
                  className="space-y-3.5 scroll-mt-20"
                >
                  <div className="flex items-center space-x-2 border-b border-[#EBEBE6] pb-2">
                    <span className="font-mono text-xs text-[#174A5B] font-bold bg-[#FAF9F7] px-1.5 py-0.5 border border-[#D9D9D4]">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <h2 className="text-lg sm:text-xl font-sans font-semibold text-[#111111]">
                      {section.heading.replace(/^\d+\.\s*/, '')}
                    </h2>
                  </div>

                  <p className="text-[#333333] leading-relaxed font-sans">
                    {section.content}
                  </p>

                  {/* Render table if section has tableData */}
                  {section.tableData && (
                    <div className="my-4">
                      <TechnicalTable
                        headers={section.tableData.headers}
                        rows={section.tableData.rows}
                        caption={section.tableData.caption}
                      />
                    </div>
                  )}

                  {/* Render code snippet if present */}
                  {section.codeSnippet && (
                    <div className="my-4">
                      <CodeBlock
                        caption={section.codeSnippet.caption}
                        language={section.codeSnippet.language}
                        code={section.codeSnippet.code}
                      />
                    </div>
                  )}
                </section>
              ))}
            </div>

            {/* Academic References & Standards */}
            <section className="border-t border-[#D9D9D4] pt-6 space-y-3">
              <div className="flex items-center space-x-2 text-xs font-mono font-bold text-[#111111] uppercase tracking-wider">
                <BookOpen className="w-3.5 h-3.5 text-[#174A5B]" />
                <span>Academic Citations &amp; Standards (IEEE Format):</span>
              </div>
              <ul className="space-y-2 text-xs font-mono text-[#555555]">
                {note.references.map((ref, idx) => (
                  <li key={idx} className="leading-relaxed pl-2 border-l-2 border-[#D9D9D4]">
                    <span className="text-[#333333]">{ref}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Sticky Sidebar: Table of Contents & Related Links */}
          <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-8">
            {/* Table of Contents */}
            <div className="border border-[#D9D9D4] bg-[#FFFFFF] p-4 space-y-3">
              <div className="flex items-center space-x-1.5 text-xs font-mono font-bold text-[#111111] uppercase tracking-wider border-b border-[#EBEBE6] pb-2">
                <List className="w-3.5 h-3.5 text-[#174A5B]" />
                <span>Table of Contents</span>
              </div>
              <nav className="space-y-1">
                {note.sections.map((sec, idx) => {
                  const sectionId = `section-${idx}`;
                  const isActive = activeSectionId === sectionId;
                  return (
                    <button
                      key={idx}
                      onClick={() => scrollToSection(sectionId)}
                      className={`w-full text-left text-xs font-mono py-1 px-2 transition-colors flex items-center justify-between ${
                        isActive
                          ? 'bg-[#174A5B] text-white font-semibold'
                          : 'text-[#555555] hover:bg-[#FAF9F7] hover:text-[#111111]'
                      }`}
                    >
                      <span className="truncate mr-2">
                        {String(idx + 1).padStart(2, '0')}. {sec.heading.replace(/^\d+\.\s*/, '')}
                      </span>
                      <ChevronRight className="w-3 h-3 shrink-0 opacity-50" />
                    </button>
                  );
                })}
              </nav>
            </div>

            {/* Associated Experimental Testbed */}
            {associatedProject && (
              <div className="border border-[#174A5B] bg-[#FFFFFF] p-4 space-y-2.5">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#174A5B] font-bold block">
                  Associated Testbed Project:
                </span>
                <h4 className="text-xs font-semibold text-[#111111] font-sans">
                  {associatedProject.title}
                </h4>
                <p className="text-[11px] text-[#666666] font-sans leading-normal">
                  {associatedProject.subtitle}
                </p>
                <button
                  onClick={() => onNavigate(`/projects/${associatedProject.slug}`)}
                  className="w-full inline-flex items-center justify-center space-x-1.5 px-3 py-1.5 bg-[#174A5B] text-white text-xs font-mono hover:bg-[#103440] transition-colors"
                >
                  <span>Examine System Case Study</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            )}

            {/* Other Research Notes */}
            <div className="border border-[#D9D9D4] bg-[#FAF9F7] p-4 space-y-2.5">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#8A8A85] font-bold block">
                Other Technical Monographs:
              </span>
              <div className="space-y-2">
                {otherNotes.map((other) => (
                  <button
                    key={other.slug}
                    onClick={() => {
                      onNavigate(`/notes/${other.slug}`);
                      window.scrollTo(0, 0);
                    }}
                    className="w-full text-left p-2 bg-[#FFFFFF] border border-[#D9D9D4] hover:border-[#174A5B] transition-colors space-y-1 block"
                  >
                    <span className="font-mono text-[10px] text-[#174A5B] font-bold block">
                      {other.id}
                    </span>
                    <span className="text-xs font-sans text-[#111111] font-medium line-clamp-2 block leading-snug">
                      {other.title}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </aside>
        </div>

        {/* Previous / Next Note Navigation */}
        <div className="pt-8 border-t border-[#D9D9D4] grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
          {prevNote ? (
            <button
              onClick={() => {
                onNavigate(`/notes/${prevNote.slug}`);
                window.scrollTo(0, 0);
              }}
              className="p-3 border border-[#D9D9D4] bg-[#FFFFFF] hover:border-[#174A5B] text-left transition-colors space-y-1"
            >
              <div className="flex items-center space-x-1 text-[#8A8A85] text-[10px]">
                <ArrowLeft className="w-3 h-3" />
                <span>PREVIOUS NOTE</span>
              </div>
              <div className="text-[#111111] font-sans font-semibold truncate">
                {prevNote.title}
              </div>
            </button>
          ) : (
            <div />
          )}

          {nextNote ? (
            <button
              onClick={() => {
                onNavigate(`/notes/${nextNote.slug}`);
                window.scrollTo(0, 0);
              }}
              className="p-3 border border-[#D9D9D4] bg-[#FFFFFF] hover:border-[#174A5B] text-right transition-colors space-y-1 sm:col-start-2"
            >
              <div className="flex items-center justify-end space-x-1 text-[#8A8A85] text-[10px]">
                <span>NEXT NOTE</span>
                <ArrowRight className="w-3 h-3" />
              </div>
              <div className="text-[#111111] font-sans font-semibold truncate">
                {nextNote.title}
              </div>
            </button>
          ) : (
            <div />
          )}
        </div>

        {/* Navigation Footer */}
        <div className="pt-4 border-t border-[#EDEDEA] flex items-center justify-between text-xs font-mono">
          <button
            onClick={() => onNavigate('/notes')}
            className="hover:text-[#174A5B] flex items-center space-x-1.5"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>All Research Notes</span>
          </button>

          <button
            onClick={() => onNavigate('/projects')}
            className="hover:text-[#174A5B] flex items-center space-x-1.5 text-[#174A5B]"
          >
            <span>Explore Engineering Projects</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </article>
    </div>
  );
};
