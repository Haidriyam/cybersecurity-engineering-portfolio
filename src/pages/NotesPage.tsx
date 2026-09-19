import React from 'react';
import { TECHNICAL_NOTES } from '../data/dossierData';
import { SectionHeader } from '../components/SectionHeader';
import { TechnicalNoteItem } from '../components/TechnicalNoteItem';
import { Breadcrumb } from '../components/Breadcrumb';

interface NotesPageProps {
  onNavigate: (path: string) => void;
}

export const NotesPage: React.FC<NotesPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-10">
      <Breadcrumb
        items={[{ label: 'Research Notes & Technical Memos' }]}
        onNavigate={onNavigate}
      />

      <SectionHeader
        label="MATHEMATICAL &amp; ARCHITECTURAL REPOSITORY"
        title="Research Notes &amp; Technical Memos"
        description="Formal laboratory derivations, circuit parameter matrices, protocol vulnerability analyses, and kernel benchmark studies written for academic and engineering evaluation."
      />

      {/* Index of notes */}
      <div className="border border-[#D9D9D4] bg-[#FFFFFF] p-5 sm:p-6 divide-y divide-[#D9D9D4]">
        {TECHNICAL_NOTES.map((note) => (
          <TechnicalNoteItem
            key={note.slug}
            note={note}
            onSelect={(slug) => onNavigate(`/notes/${slug}`)}
          />
        ))}
      </div>

      {/* Note about academic citations */}
      <div className="border border-[#D9D9D4] bg-[#FAF9F7] p-5 text-xs font-mono text-[#555555] space-y-1.5">
        <span className="font-semibold text-[#111111] uppercase tracking-wider block">
          Academic Reference Standard:
        </span>
        <p className="font-sans leading-relaxed">
          All technical memos cite peer-reviewed literature (IEEE Transactions, Science, IETF RFCs, and NIST Special Publications) to ground analytical claims in reproducible scientific foundations.
        </p>
      </div>
    </div>
  );
};
