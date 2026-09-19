export interface TechnicalMetric {
  label: string;
  value: string;
  unit?: string;
  tolerance?: string;
  verificationMethod?: string;
}

export interface TechnicalFigure {
  id: string;
  figureNumber: string;
  caption: string;
  sourceNote?: string;
  type: 'svg-diagram' | 'table' | 'waveform' | 'schematic' | 'topology';
}

export type ProjectTaxonomyCategory =
  | 'CYBER-PHYSICAL SYSTEMS & ELECTRICAL INFRASTRUCTURE'
  | 'ENTERPRISE IT, ZERO-TRUST & DEVSECOPS'
  | 'FOUNDATIONAL ENGINEERING PROJECTS';

export interface ProjectRelatedItem {
  slug: string;
  title: string;
  relationshipReason: string;
}

export interface ProjectItem {
  slug: string;
  id: string; // e.g., "PROJECT / WPT-001"
  projectNumber?: string; // e.g. "01", "02"
  title: string;
  subtitle: string;
  domain: string;
  taxonomyCategory: ProjectTaxonomyCategory;
  date: string;
  status: 'Complete' | 'Active Testbed' | 'Archived' | 'Documented';
  claim: string;
  technicalSummary: string;
  architectureDescription: string;
  implementationDetails: string[];
  metrics: TechnicalMetric[];
  figureRef?: string;
  tags: string[];
  repositoryUrl: string;
  documentationUrl?: string;
  isCapstone?: boolean;
  institution?: string;
  period?: string;
  grade?: string;
  // Rigorous Academic Dossier Fields
  filterDomains: string[]; // e.g., ['CYBER-PHYSICAL', 'ELECTRICAL', ...]
  technicalFocus: string[];
  keyTechnologies: string[];
  securityValidation: string[];
  threatModel?: string;
  problemStatement?: string;
  systemModel?: string;
  securityModel?: string;
  validationApproach?: string;
  cicdWorkflow?: string[];
  relatedResearch?: string[];
  relatedProjects?: ProjectRelatedItem[];
  evidenceStatus?: 'VERIFIED_ARTIFACT' | 'LABORATORY_BENCHMARK' | 'EVIDENCE_PENDING_PUBLICATION';
}

export interface ResearchQuestion {
  id: string;
  code: string;
  title: string;
  question: string;
  theoreticalContext: string;
  methodology: string;
  connectedProjects: { slug: string; title: string }[];
}

export interface VerificationPractice {
  title: string;
  category: 'CONTINUOUS INTEGRATION' | 'STATIC ANALYSIS' | 'CODE HYGIENE' | 'AUTOMATED TESTING' | 'HARDENED PACKAGING';
  tooling: string;
  specification: string;
  associatedProjects: { slug: string; title: string }[];
}

export interface ResearchArea {
  id: string;
  title: string;
  code: string;
  objective: string;
  theoreticalFramework: string;
  currentInvestigation: string;
  associatedProjects: string[];
  associatedNotes: string[];
  relevantStandards: string[];
}

export interface TechnicalNote {
  slug: string;
  id: string; // e.g., "NOTE / TN-001"
  title: string;
  date: string;
  category: 'Electromagnetics & Resonance' | 'Telemetry & Distributed Systems' | 'Industrial SCADA & CPS Security';
  readingTime: string;
  abstract: string;
  equations?: string[];
  sections: {
    heading: string;
    content: string;
    codeSnippet?: {
      language: string;
      code: string;
      caption?: string;
    };
    tableData?: {
      headers: string[];
      rows: string[][];
      caption?: string;
    };
  }[];
  references: string[];
  figureRef?: string;
}

export interface ExperienceItem {
  id: string;
  period: string;
  role: string;
  organization: string;
  division?: string;
  location: string;
  scope: string;
  technicalResponsibilities?: string[];
  systemsWorkedWith?: string[];
  selectedContributions?: string[];
  documentedOutcomes?: {
    metric: string;
    detail: string;
  }[];
  keyEvidence: string[];
  technologies: string[];
}

export interface CredentialItem {
  id: string;
  title: string;
  issuer: string;
  verificationUrl?: string | null;
  status: string;
  category?: string;
}

export interface OpenSourceRepo {
  name: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  stars?: string;
  role?: string;
}

export interface EducationItem {
  degree: string;
  major: string;
  specialization: string;
  institution: string;
  period: string;
  location: string;
  status: string;
  thesisOrCapstone?: {
    title: string;
    advisor?: string;
    department?: string;
    grade?: string;
    period?: string;
    summary: string;
  };
  relevantCoursework: string[];
  laboratoryCompetencies: string[];
}

export interface TechnicalDomainPillar {
  number: string;
  title: string;
  focus: string;
  categories: {
    name: string;
    items: string[];
  }[];
}

export interface EngineeringTrajectoryStage {
  phase: string;
  title: string;
  summary: string;
  technologies: string[];
}

export type EvidenceType =
  | 'Architecture Diagram'
  | 'Lab Measurement'
  | 'System Screenshot'
  | 'Repository'
  | 'Thesis'
  | 'Technical Note'
  | 'Configuration'
  | 'Benchmark';

export interface EvidenceItem {
  id: string;
  projectSlug: string;
  projectTitle: string;
  evidenceType: EvidenceType;
  title: string;
  description: string;
  status: 'AVAILABLE' | 'PLACEHOLDER';
  source: string;
  sourceUrl?: string;
  targetRef?: string;
}

export type DossierLayoutMode = 'standard' | 'laboratory' | 'compact';
export type DossierFontScale = 'normal' | 'dense' | 'editorial';

