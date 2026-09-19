import React from 'react';
import { PERSONAL_INFO } from '../data/dossierData';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="site-footer no-print mt-20 border-t border-[#D9D9D4] bg-[#F7F7F5] py-12 text-[#111111] font-sans">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-[#D9D9D4]">
          {/* Col 1: Identity */}
          <div>
            <div className="font-sans font-bold text-sm tracking-tight text-[#111111]">
              {PERSONAL_INFO.name.toUpperCase()}
            </div>
            <div className="mt-2 text-xs font-mono text-[#555555] space-y-0.5">
              <div>{PERSONAL_INFO.title}</div>
              <div>{PERSONAL_INFO.credential}</div>
            </div>
          </div>

          {/* Col 2: Research Focus & Navigation */}
          <div>
            <div className="text-[11px] font-mono uppercase tracking-wider text-[#8A8A85] mb-2 font-semibold">
              Research &amp; Sections
            </div>
            <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs font-mono text-[#555555]">
              <button onClick={() => onNavigate('/research')} className="hover:text-[#174A5B]">Research</button>
              <span>·</span>
              <button onClick={() => onNavigate('/systems')} className="hover:text-[#174A5B]">Systems Lab</button>
              <span>·</span>
              <button onClick={() => onNavigate('/projects')} className="hover:text-[#174A5B]">Projects</button>
              <span>·</span>
              <button onClick={() => onNavigate('/evidence')} className="hover:text-[#174A5B] font-semibold text-[#174A5B]">Evidence Index</button>
              <span>·</span>
              <button onClick={() => onNavigate('/notes')} className="hover:text-[#174A5B]">Notes</button>
              <span>·</span>
              <button onClick={() => onNavigate('/credentials')} className="hover:text-[#174A5B]">Credentials</button>
              <span>·</span>
              <button onClick={() => onNavigate('/education')} className="hover:text-[#174A5B]">Education</button>
            </div>
          </div>

          {/* Col 3: Direct Access */}
          <div className="md:text-right">
            <div className="text-[11px] font-mono uppercase tracking-wider text-[#8A8A85] mb-2 font-semibold">
              Evidence &amp; Materials
            </div>
            <div className="flex md:justify-end items-center space-x-4 text-xs font-mono">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#555555] hover:text-[#174A5B] transition-colors"
              >
                GitHub ↗
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="text-[#555555] hover:text-[#174A5B] transition-colors"
              >
                Email ↗
              </a>
              <button
                onClick={() => onNavigate('/cv')}
                className="text-[#174A5B] hover:underline font-semibold focus:outline-none"
              >
                CV ↗
              </button>
            </div>
          </div>
        </div>

        {/* Copyright & Timestamp */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-[#8A8A85] gap-2">
          <div>
            © 2026 {PERSONAL_INFO.name}
          </div>
          <div className="text-[11px]">
            Academic Engineering Dossier · Built with React &amp; Tailwind · Zero Marketing Slop
          </div>
        </div>
      </div>
    </footer>
  );
};
