import React from 'react';
import { PROJECTS } from '../data/dossierData';
import { ArrowLeft, ArrowRight, BookOpen, Layers, Github, ExternalLink } from 'lucide-react';

interface TechnicalProjectNavProps {
  currentSlug: string;
  onNavigate: (path: string) => void;
  relatedResearchPath?: string;
  relatedResearchTitle?: string;
  relatedNotePath?: string;
  relatedNoteTitle?: string;
  repositoryUrl?: string;
}

export const TechnicalProjectNav: React.FC<TechnicalProjectNavProps> = ({
  currentSlug,
  onNavigate,
  relatedResearchPath = '/research',
  relatedResearchTitle = 'Cyber-Physical Systems & Testbeds',
  relatedNotePath,
  relatedNoteTitle,
  repositoryUrl = 'https://github.com/Haidriyam'
}) => {
  const currentIndex = PROJECTS.findIndex(p => p.slug === currentSlug);
  const prevProject = currentIndex > 0 ? PROJECTS[currentIndex - 1] : null;
  const nextProject = currentIndex >= 0 && currentIndex < PROJECTS.length - 1 ? PROJECTS[currentIndex + 1] : null;

  return (
    <nav aria-label="Project Navigation" className="border-t border-[#D9D9D4] pt-8 space-y-6 print:hidden">
      {/* Related Academic Vectors */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono">
        {/* Related Research */}
        <div className="p-3.5 border border-[#D9D9D4] bg-[#FFFFFF] flex flex-col justify-between space-y-2">
          <div>
            <span className="text-[10px] text-[#8A8A85] uppercase tracking-wider block font-semibold">
              RELATED RESEARCH
            </span>
            <span className="text-[#111111] font-sans font-semibold text-xs mt-0.5 block">
              {relatedResearchTitle}
            </span>
          </div>
          <button
            onClick={() => onNavigate(relatedResearchPath)}
            className="text-[#174A5B] hover:underline flex items-center space-x-1 pt-1 font-medium"
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Open Research Index →</span>
          </button>
        </div>

        {/* Related Notes */}
        <div className="p-3.5 border border-[#D9D9D4] bg-[#FFFFFF] flex flex-col justify-between space-y-2">
          <div>
            <span className="text-[10px] text-[#8A8A85] uppercase tracking-wider block font-semibold">
              RELATED NOTE / MONOGRAPH
            </span>
            <span className="text-[#111111] font-sans font-semibold text-xs mt-0.5 block truncate" title={relatedNoteTitle || 'Technical Derivations & Monograph'}>
              {relatedNoteTitle || 'Technical Derivations & Monograph'}
            </span>
          </div>
          {relatedNotePath ? (
            <button
              onClick={() => onNavigate(relatedNotePath)}
              className="text-[#174A5B] hover:underline flex items-center space-x-1 pt-1 font-medium"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Read Technical Note →</span>
            </button>
          ) : (
            <button
              onClick={() => onNavigate('/notes')}
              className="text-[#174A5B] hover:underline flex items-center space-x-1 pt-1 font-medium"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Browse All Notes →</span>
            </button>
          )}
        </div>

        {/* Source Repository */}
        <div className="p-3.5 border border-[#D9D9D4] bg-[#FFFFFF] flex flex-col justify-between space-y-2">
          <div>
            <span className="text-[10px] text-[#8A8A85] uppercase tracking-wider block font-semibold">
              SOURCE REPOSITORY
            </span>
            <span className="text-[#111111] font-mono text-xs mt-0.5 block truncate">
              {repositoryUrl.replace('https://', '')}
            </span>
          </div>
          <a
            href={repositoryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#174A5B] hover:underline inline-flex items-center space-x-1 pt-1 font-medium"
          >
            <Github className="w-3.5 h-3.5" />
            <span>Inspect GitHub Repository</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* Sequential Project Traverser: Previous / Next Project */}
      <div className="border border-[#D9D9D4] bg-[#FAF9F7] p-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
        {/* Previous */}
        {prevProject ? (
          <button
            onClick={() => onNavigate(`/projects/${prevProject.slug}`)}
            className="w-full sm:w-auto text-left hover:text-[#174A5B] group flex items-center space-x-2 py-1"
          >
            <ArrowLeft className="w-4 h-4 text-[#8A8A85] group-hover:text-[#174A5B] transition-colors shrink-0" />
            <div className="truncate">
              <span className="text-[10px] text-[#8A8A85] uppercase block">PREVIOUS PROJECT</span>
              <span className="font-semibold text-[#111111] group-hover:text-[#174A5B] transition-colors truncate block max-w-xs">
                {prevProject.title}
              </span>
            </div>
          </button>
        ) : (
          <div className="w-full sm:w-auto text-left text-[#8A8A85] flex items-center space-x-2 py-1 opacity-50">
            <ArrowLeft className="w-4 h-4 shrink-0" />
            <div>
              <span className="text-[10px] uppercase block">PREVIOUS PROJECT</span>
              <span className="text-xs">[FIRST SYSTEM ENTRY]</span>
            </div>
          </div>
        )}

        {/* Center: Archive index */}
        <button
          onClick={() => onNavigate('/projects')}
          className="px-3 py-1.5 bg-[#FFFFFF] border border-[#D9D9D4] hover:border-[#174A5B] text-[#555555] hover:text-[#111111] transition-colors shrink-0"
        >
          PROJECTS ARCHIVE [INDEX]
        </button>

        {/* Next */}
        {nextProject ? (
          <button
            onClick={() => onNavigate(`/projects/${nextProject.slug}`)}
            className="w-full sm:w-auto text-right hover:text-[#174A5B] group flex items-center justify-end space-x-2 py-1"
          >
            <div className="truncate">
              <span className="text-[10px] text-[#8A8A85] uppercase block">NEXT PROJECT</span>
              <span className="font-semibold text-[#111111] group-hover:text-[#174A5B] transition-colors truncate block max-w-xs">
                {nextProject.title}
              </span>
            </div>
            <ArrowRight className="w-4 h-4 text-[#8A8A85] group-hover:text-[#174A5B] transition-colors shrink-0" />
          </button>
        ) : (
          <div className="w-full sm:w-auto text-right text-[#8A8A85] flex items-center justify-end space-x-2 py-1 opacity-50">
            <div>
              <span className="text-[10px] uppercase block">NEXT PROJECT</span>
              <span className="text-xs">[TERMINAL ENTRY]</span>
            </div>
            <ArrowRight className="w-4 h-4 shrink-0" />
          </div>
        )}
      </div>
    </nav>
  );
};
