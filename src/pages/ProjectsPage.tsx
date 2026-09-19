import React, { useState } from 'react';
import { PROJECTS } from '../data/dossierData';
import { SectionHeader } from '../components/SectionHeader';
import { ProjectCard } from '../components/ProjectCard';
import { Breadcrumb } from '../components/Breadcrumb';
import { EngineeringVerificationSection } from '../components/EngineeringVerificationSection';
import { ShieldCheck, Filter, Layers, CheckCircle2 } from 'lucide-react';

interface ProjectsPageProps {
  onNavigate: (path: string) => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({ onNavigate }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filterDomains = [
    { id: 'All', label: 'All Domains' },
    { id: 'CYBER-PHYSICAL', label: 'Cyber-Physical Systems' },
    { id: 'ELECTRICAL', label: 'Electrical Infrastructure' },
    { id: 'INDUSTRIAL SECURITY', label: 'Industrial Security' },
    { id: 'CRYPTOGRAPHY', label: 'Cryptography' },
    { id: 'ZERO TRUST', label: 'Zero Trust' },
    { id: 'INFRASTRUCTURE', label: 'Distributed Infrastructure' },
    { id: 'DISTRIBUTED SYSTEMS', label: 'Distributed Systems' },
    { id: 'DEVSECOPS', label: 'DevSecOps' },
    { id: 'AUTOMATION', label: 'Automation' }
  ];

  const taxonomyCategories = [
    'All',
    'CYBER-PHYSICAL SYSTEMS & ELECTRICAL INFRASTRUCTURE',
    'ENTERPRISE IT, ZERO-TRUST & DEVSECOPS',
    'FOUNDATIONAL ENGINEERING PROJECTS'
  ];

  const filteredProjects = PROJECTS.filter((p) => {
    // Check domain filter
    const matchesDomain =
      selectedFilter === 'All' ||
      (p.filterDomains && p.filterDomains.includes(selectedFilter)) ||
      (p.domain && p.domain.toUpperCase().includes(selectedFilter));

    // Check taxonomy category
    const matchesCategory =
      selectedCategory === 'All' || p.taxonomyCategory === selectedCategory;

    return matchesDomain && matchesCategory;
  });

  return (
    <div className="space-y-10">
      <Breadcrumb
        items={[{ label: 'Engineering Projects & Testbeds' }]}
        onNavigate={onNavigate}
      />

      <SectionHeader
        label="EMPIRICAL TESTBEDS &amp; SYSTEMS INDEX"
        title="Engineering Projects &amp; Repositories"
        description="Technical catalog spanning Cyber-Physical Systems, Electrical Infrastructure, Industrial SCADA Security, Zero-Trust Infrastructure, Post-Quantum Cryptography, and DevSecOps. Structured around verified circuit topologies, mathematical state estimation, threat models, and automated CI/CD validation."
      />

      {/* Verification Matrix & Evidence Index Callout */}
      <div className="border border-[#174A5B] bg-[#FAF9F7] p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center space-x-2 font-mono text-[10px] font-bold text-[#174A5B] uppercase tracking-wider">
            <span className="w-1.5 h-1.5 bg-[#174A5B]" />
            <span>EVIDENCE PLATFORM // VERIFICATION MATRIX</span>
          </div>
          <h3 className="font-mono text-xs sm:text-sm font-bold text-[#111111]">
            Engineering Evidence Index (/evidence)
          </h3>
          <p className="text-xs text-[#555555] font-sans max-w-2xl">
            Distinguishing between verified engineering artifacts (schematics, code, architectures, monographs) and structured laboratory data placeholders across all 12 projects.
          </p>
        </div>
        <button
          onClick={() => onNavigate('/evidence')}
          className="inline-flex items-center space-x-1.5 px-3.5 py-2 border border-[#174A5B] bg-[#174A5B] text-white hover:bg-[#103440] transition-colors text-xs font-mono shrink-0"
        >
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Open Evidence Index</span>
        </button>
      </div>

      {/* Filter Toolbar */}
      <div className="border border-[#D9D9D4] bg-[#FFFFFF] p-4 sm:p-5 space-y-4">
        {/* Domain Filters */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-mono text-[#8A8A85] uppercase tracking-wider flex items-center space-x-1.5">
              <Filter className="w-3 h-3 text-[#174A5B]" />
              <span>Filter by Technical Domain:</span>
            </span>
            <span className="text-[10px] font-mono text-[#666666]">
              Showing {filteredProjects.length} of {PROJECTS.length} Systems
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-1.5 text-xs font-mono">
            {filterDomains.map((domain) => (
              <button
                key={domain.id}
                onClick={() => setSelectedFilter(domain.id)}
                className={`px-2.5 py-1 transition-colors border text-[11px] ${
                  selectedFilter === domain.id
                    ? 'border-[#174A5B] bg-[#174A5B] text-white font-medium'
                    : 'border-[#D9D9D4] bg-[#FFFFFF] text-[#555555] hover:border-[#111111] hover:text-[#111111]'
                }`}
              >
                {domain.label}
              </button>
            ))}
          </div>
        </div>

        {/* Taxonomy Grouping */}
        <div className="pt-3 border-t border-[#EBEBE6] space-y-1.5">
          <div className="text-[10px] font-mono text-[#8A8A85] uppercase tracking-wider flex items-center space-x-1">
            <Layers className="w-2.5 h-2.5 text-[#8A8A85]" />
            <span>Taxonomy Category:</span>
          </div>
          <div className="flex flex-wrap gap-1.5 text-xs font-mono">
            {taxonomyCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-2 py-0.5 text-[10px] border transition-colors ${
                  selectedCategory === cat
                    ? 'border-[#111111] bg-[#111111] text-white'
                    : 'border-[#EBEBE6] bg-[#FAF9F7] text-[#666666] hover:border-[#8A8A85]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.slug}
            project={project}
            onSelect={(slug) => onNavigate(`/projects/${slug}`)}
          />
        ))}
      </div>

      {/* Global Engineering Verification Standard Section */}
      <EngineeringVerificationSection onNavigate={onNavigate} />

      {/* Architectural Note */}
      <div className="border border-[#D9D9D4] bg-[#FAF9F7] p-5 text-xs font-mono text-[#555555] space-y-2">
        <div className="font-semibold text-[#111111] uppercase tracking-wider">
          Documentation Hierarchy Standard
        </div>
        <p className="font-sans leading-relaxed">
          Each project file adheres strictly to the verifiable sequence:
          <span className="font-mono text-[#174A5B] block mt-1">
            CLAIM → TECHNICAL DESCRIPTION → THREAT / SYSTEM MODEL → ARCHITECTURE → IMPLEMENTATION → MEASUREMENT / RESULT → VALIDATION STANDARD → SOURCE CODE
          </span>
        </p>
      </div>
    </div>
  );
};
