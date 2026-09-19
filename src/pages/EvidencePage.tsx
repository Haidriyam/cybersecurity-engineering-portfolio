import React, { useState, useMemo } from 'react';
import { EVIDENCE_ITEMS } from '../data/evidenceData';
import { Breadcrumb } from '../components/Breadcrumb';
import { EvidenceType } from '../types';
import {
  FileText,
  CheckCircle2,
  AlertTriangle,
  ExternalLink,
  Search,
  Filter,
  Layers,
  ArrowRight,
  Database,
  Cpu,
  ShieldCheck,
  Server,
  Zap,
  Info
} from 'lucide-react';

interface EvidencePageProps {
  onNavigate: (path: string) => void;
}

export const EvidencePage: React.FC<EvidencePageProps> = ({ onNavigate }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<'ALL' | 'AVAILABLE' | 'PLACEHOLDER'>('ALL');
  const [typeFilter, setTypeFilter] = useState<string>('ALL');
  const [projectFilter, setProjectFilter] = useState<string>('ALL');

  // Filtered evidence items
  const filteredItems = useMemo(() => {
    return EVIDENCE_ITEMS.filter((item) => {
      // Status filter
      if (statusFilter !== 'ALL' && item.status !== statusFilter) {
        return false;
      }
      // Type filter
      if (typeFilter !== 'ALL' && item.evidenceType !== typeFilter) {
        return false;
      }
      // Project filter
      if (projectFilter !== 'ALL' && item.projectSlug !== projectFilter) {
        return false;
      }
      // Search query
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        const matchesTitle = item.title.toLowerCase().includes(q);
        const matchesId = item.id.toLowerCase().includes(q);
        const matchesDesc = item.description.toLowerCase().includes(q);
        const matchesProj = item.projectTitle.toLowerCase().includes(q);
        if (!matchesTitle && !matchesId && !matchesDesc && !matchesProj) {
          return false;
        }
      }
      return true;
    });
  }, [searchQuery, statusFilter, typeFilter, projectFilter]);

  // Statistics
  const totalCount = EVIDENCE_ITEMS.length;
  const availableCount = EVIDENCE_ITEMS.filter((i) => i.status === 'AVAILABLE').length;
  const placeholderCount = EVIDENCE_ITEMS.filter((i) => i.status === 'PLACEHOLDER').length;

  const uniqueTypes: EvidenceType[] = [
    'Architecture Diagram',
    'Lab Measurement',
    'Configuration',
    'Benchmark',
    'Thesis',
    'Technical Note',
    'Repository',
    'System Screenshot'
  ];

  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          { label: 'Evidence Platform', path: '/evidence' }
        ]}
        onNavigate={onNavigate}
      />

      {/* Header Section */}
      <header className="border border-[#D9D9D4] bg-[#FFFFFF] p-6 sm:p-8 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#EBEBE6] pb-3 text-xs font-mono">
          <div className="flex items-center space-x-2">
            <span className="bg-[#174A5B] text-white px-2 py-0.5 font-bold">
              VERIFICATION MATRIX
            </span>
            <span className="text-[#8A8A85]">|</span>
            <span className="text-[#174A5B] font-semibold">METROLOGY &amp; EVIDENCE INDEX</span>
          </div>
          <span className="text-[11px] text-[#8A8A85]">
            GOAL: FULL ARCHIVAL TRANSPARENCY
          </span>
        </div>

        <div className="space-y-2">
          <h1 className="text-2xl sm:text-3xl font-sans font-bold tracking-tight text-[#111111] uppercase">
            ENGINEERING EVIDENCE INDEX
          </h1>
          <p className="text-sm sm:text-base text-[#444444] font-sans leading-relaxed">
            Rigorous inventory distinguishing verified engineering evidence from structured laboratory data placeholders. Every claim is supported either by accessible architectural specifications and code repositories, or explicitly identified pending physical transcription from primary capstone notebooks.
          </p>
        </div>

        {/* Audit Metrics Banner */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-[#EBEBE6] font-mono text-xs">
          <div className="border border-[#D9D9D4] bg-[#FAF9F7] p-3 space-y-1">
            <span className="text-[10px] text-[#8A8A85] block uppercase">TOTAL CATALOGED ARTIFACTS</span>
            <span className="text-xl font-bold text-[#111111]">{totalCount}</span>
            <span className="text-[10px] text-[#666666] block">Cross-disciplinary testbed items</span>
          </div>

          <div className="border border-[#CCE5DB] bg-[#EDF7F2] p-3 space-y-1">
            <span className="text-[10px] text-[#226644] block uppercase font-bold flex items-center">
              <CheckCircle2 className="w-3 h-3 mr-1 text-[#226644]" />
              AVAILABLE &amp; VERIFIED
            </span>
            <span className="text-xl font-bold text-[#226644]">{availableCount}</span>
            <span className="text-[10px] text-[#356859] block">
              Architectures, code, schematics, notes
            </span>
          </div>

          <div className="border border-[#F0D5CC] bg-[#FAF0ED] p-3 space-y-1">
            <span className="text-[10px] text-[#C15C3D] block uppercase font-bold flex items-center">
              <AlertTriangle className="w-3 h-3 mr-1 text-[#C15C3D]" />
              VERIFICATION REQUIRED
            </span>
            <span className="text-xl font-bold text-[#C15C3D]">{placeholderCount}</span>
            <span className="text-[10px] text-[#C15C3D] block">
              Original laboratory records required
            </span>
          </div>
        </div>

        {/* Data Integrity Protocol Notice */}
        <div className="p-3.5 bg-[#FAF9F7] border border-[#EBEBE6] text-xs font-sans text-[#555555] flex items-start space-x-3">
          <Info className="w-4 h-4 text-[#174A5B] shrink-0 mt-0.5" />
          <div className="leading-relaxed">
            <strong className="text-[#111111] font-mono text-[11px] block">ACADEMIC DATA INTEGRITY POLICY:</strong>
            In accordance with rigorous academic engineering standards, this platform rejects fabricated or synthetic metrics. Missing laboratory readings from physical notebooks are explicitly identified as <code>VERIFIED VALUE REQUIRED</code> pending archive transcription.
          </div>
        </div>
      </header>

      {/* Control & Filter Suite */}
      <section className="border border-[#D9D9D4] bg-[#FFFFFF] p-4 sm:p-5 space-y-4 font-mono text-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
          {/* Search Box */}
          <div className="relative flex-1">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-[#8A8A85]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search evidence by ID, keyword, or project..."
              className="w-full pl-8 pr-3 py-1.5 bg-[#FAF9F7] border border-[#D9D9D4] focus:outline-none focus:border-[#174A5B] text-xs"
            />
          </div>

          {/* Status Buttons */}
          <div className="flex items-center space-x-1 shrink-0">
            <span className="text-[11px] text-[#8A8A85] mr-1">Status:</span>
            <button
              onClick={() => setStatusFilter('ALL')}
              className={`px-2.5 py-1 text-xs border ${
                statusFilter === 'ALL'
                  ? 'border-[#174A5B] bg-[#174A5B] text-white font-bold'
                  : 'border-[#D9D9D4] bg-[#FAF9F7] text-[#555555] hover:bg-[#EBEBE6]'
              }`}
            >
              All ({totalCount})
            </button>
            <button
              onClick={() => setStatusFilter('AVAILABLE')}
              className={`px-2.5 py-1 text-xs border ${
                statusFilter === 'AVAILABLE'
                  ? 'border-[#226644] bg-[#226644] text-white font-bold'
                  : 'border-[#D9D9D4] bg-[#FAF9F7] text-[#226644] hover:bg-[#EBEBE6]'
              }`}
            >
              Available ({availableCount})
            </button>
            <button
              onClick={() => setStatusFilter('PLACEHOLDER')}
              className={`px-2.5 py-1 text-xs border ${
                statusFilter === 'PLACEHOLDER'
                  ? 'border-[#C15C3D] bg-[#C15C3D] text-white font-bold'
                  : 'border-[#D9D9D4] bg-[#FAF9F7] text-[#C15C3D] hover:bg-[#EBEBE6]'
              }`}
            >
              Verification Pending ({placeholderCount})
            </button>
          </div>
        </div>

        {/* Secondary Filter Row: Project & Type */}
        <div className="flex flex-wrap items-center gap-3 pt-2 border-t border-[#EBEBE6] text-[11px]">
          {/* Project Filter */}
          <div className="flex items-center space-x-1.5">
            <span className="text-[#8A8A85]">Project:</span>
            <select
              value={projectFilter}
              onChange={(e) => setProjectFilter(e.target.value)}
              className="bg-[#FAF9F7] border border-[#D9D9D4] px-2 py-1 text-xs focus:outline-none focus:border-[#174A5B]"
            >
              <option value="ALL">All Projects</option>
              <option value="resonant-wireless-power">Resonant Wireless Power</option>
              <option value="siem-telemetry">SIEM &amp; Telemetry</option>
              <option value="perimeter-hardening">Perimeter Hardening</option>
              <option value="infrastructure-automation">Infrastructure Automation</option>
            </select>
          </div>

          {/* Type Filter */}
          <div className="flex items-center space-x-1.5">
            <span className="text-[#8A8A85]">Type:</span>
            <select
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
              className="bg-[#FAF9F7] border border-[#D9D9D4] px-2 py-1 text-xs focus:outline-none focus:border-[#174A5B]"
            >
              <option value="ALL">All Types</option>
              {uniqueTypes.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>

          {/* Reset Filters */}
          {(statusFilter !== 'ALL' || typeFilter !== 'ALL' || projectFilter !== 'ALL' || searchQuery !== '') && (
            <button
              onClick={() => {
                setStatusFilter('ALL');
                setTypeFilter('ALL');
                setProjectFilter('ALL');
                setSearchQuery('');
              }}
              className="text-[#C15C3D] underline ml-auto text-[10px] hover:text-[#933C24]"
            >
              Reset Filters
            </button>
          )}
        </div>
      </section>

      {/* Evidence Items Catalog */}
      <section className="space-y-3">
        <div className="flex items-center justify-between text-xs font-mono text-[#8A8A85] px-1">
          <span>
            SHOWING {filteredItems.length} OF {totalCount} EVIDENCE ITEMS
          </span>
          <span>SORTED BY PROJECT ARCHIVE SEQUENCE</span>
        </div>

        {filteredItems.length === 0 ? (
          <div className="border border-[#D9D9D4] bg-[#FFFFFF] p-8 text-center space-y-2">
            <p className="font-mono text-sm text-[#111111] font-bold">
              NO EVIDENCE ARTIFACTS MATCH THE CURRENT FILTERS
            </p>
            <p className="text-xs text-[#666666] font-sans">
              Try adjusting your query or resetting status and type filters.
            </p>
          </div>
        ) : (
          <div className="divide-y divide-[#EBEBE6] border border-[#D9D9D4] bg-[#FFFFFF]">
            {filteredItems.map((item) => {
              const isAvailable = item.status === 'AVAILABLE';
              return (
                <div
                  key={item.id}
                  className="p-4 sm:p-5 hover:bg-[#FAF9F7] transition-colors space-y-3"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center space-x-2">
                      <span className="font-mono text-xs font-bold text-[#174A5B]">
                        {item.id}
                      </span>
                      <span className="text-[#8A8A85]">|</span>
                      <span className="text-[11px] font-mono text-[#666666]">
                        {item.evidenceType}
                      </span>
                      <span className="text-[#8A8A85]">·</span>
                      <span className="text-[11px] font-mono text-[#8A8A85] hidden sm:inline">
                        {item.projectTitle}
                      </span>
                    </div>

                    {/* Status Badge */}
                    <span
                      className={`text-[10px] font-mono font-bold px-2 py-0.5 border ${
                        isAvailable
                          ? 'border-[#CCE5DB] bg-[#EDF7F2] text-[#226644]'
                          : 'border-[#F0D5CC] bg-[#FAF0ED] text-[#C15C3D]'
                      }`}
                    >
                      {isAvailable ? '✓ EVIDENCE AVAILABLE' : '⚠ VERIFIED VALUE REQUIRED'}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-sm sm:text-base font-semibold text-[#111111] font-sans">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#555555] font-sans leading-relaxed pt-1">
                      {item.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-[#F2F2EE] text-xs font-mono">
                    <div className="flex items-center space-x-1.5 text-[11px] text-[#8A8A85]">
                      <span className="uppercase font-semibold">Provenance:</span>
                      <span className="text-[#444444]">{item.source}</span>
                    </div>

                    <div className="flex items-center space-x-2">
                      {item.targetRef && (
                        <button
                          onClick={() => onNavigate(item.targetRef!)}
                          className="inline-flex items-center space-x-1 text-[#174A5B] hover:underline text-xs"
                        >
                          <span>Inspect in Dossier</span>
                          <ArrowRight className="w-3 h-3" />
                        </button>
                      )}
                      {item.sourceUrl && item.sourceUrl.startsWith('http') && (
                        <a
                          href={item.sourceUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-1 text-[#174A5B] hover:underline text-xs ml-2"
                        >
                          <ExternalLink className="w-3 h-3" />
                          <span>External Source</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* Navigation Footer */}
      <div className="pt-6 border-t border-[#D9D9D4] flex items-center justify-between text-xs font-mono">
        <button
          onClick={() => onNavigate('/projects')}
          className="hover:text-[#174A5B] flex items-center space-x-1.5"
        >
          <span>Return to Projects Archive</span>
        </button>

        <button
          onClick={() => onNavigate('/projects/resonant-wireless-power')}
          className="hover:text-[#174A5B] flex items-center space-x-1.5 text-[#174A5B]"
        >
          <span>Flagship: Resonant Wireless Power</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
