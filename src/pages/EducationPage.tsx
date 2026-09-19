import React from 'react';
import { EDUCATION, CERTIFICATIONS, RESEARCH_AREAS } from '../data/dossierData';
import { SectionHeader } from '../components/SectionHeader';
import { Breadcrumb } from '../components/Breadcrumb';
import { TechnicalLabel } from '../components/TechnicalLabel';
import { Tag } from '../components/Tag';
import { GraduationCap, Award, BookOpen, Wrench, ArrowRight, ShieldCheck, CheckCircle2, FileText } from 'lucide-react';

interface EducationPageProps {
  onNavigate: (path: string) => void;
}

export const EducationPage: React.FC<EducationPageProps> = ({ onNavigate }) => {
  const courseworkCategories = [
    {
      category: 'Power Systems & Electrical Engineering',
      courses: [
        'Linear Circuit Analysis',
        'Power System Analysis',
        'Electrical Power Transmission & Distribution',
        'Feedback Control Systems'
      ]
    },
    {
      category: 'Electronics, Computing & Digital Systems',
      courses: [
        'Digital Logic Design',
        'Microprocessor Systems & Interfacing',
        'C/C++ Programming',
        'Numerical Analysis'
      ]
    },
    {
      category: 'Applied Mathematics & Analysis',
      courses: [
        'Differential Equations',
        'Linear Algebra',
        'Probability & Random Variables',
        'Complex Variables & Transforms'
      ]
    }
  ];

  const academicProjects = [
    {
      id: 'ACAD-01',
      title: 'Resonant Inductive Wireless Power Transmission System',
      type: 'Undergraduate Capstone Investigation',
      description: 'Design, mathematical modeling, and laboratory validation of high-Q series-series resonant inductive coupling. Investigated mutual inductance degradation as a function of axial air-gap (0–150mm) and high-frequency inverter ZVS switching.',
      link: '/projects/resonant-wireless-power'
    },
    {
      id: 'ACAD-02',
      title: 'Transmission Line Symmetrical & Unsymmetrical Fault Analysis',
      type: 'Power Systems Laboratory Study',
      description: 'Numerical and benchtop study of three-phase, line-to-line, and single line-to-ground faults. Formulated bus impedance matrices (Z_bus) and protection relay coordination margins.',
      link: null
    },
    {
      id: 'ACAD-03',
      title: 'High-Efficiency Zero-Voltage-Switching (ZVS) Power Inverter',
      type: 'Power Electronics Design',
      description: 'MOSFET half-bridge inverter designed for resonant tank drive. Tuned gate-drive dead-time to minimize capacitive turn-on losses at resonance.',
      link: null
    }
  ];

  return (
    <div className="space-y-16">
      <Breadcrumb
        items={[{ label: 'Academic Background & Metrology' }]}
        onNavigate={onNavigate}
      />

      <SectionHeader
        label="ACADEMIC BACKGROUND &amp; DEGREE RECORD"
        title="Education &amp; Laboratory Competencies"
        description="Formal academic qualifications in Electrical Engineering with specialization in Power Systems, electromagnetic resonance, and experimental metrology."
      />

      {/* 1. Degree Details */}
      <section className="border border-[#D9D9D4] bg-[#FFFFFF] p-6 sm:p-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b border-[#D9D9D4]">
          <div className="space-y-1.5">
            <div className="flex items-center space-x-2">
              <GraduationCap className="w-5 h-5 text-[#174A5B]" />
              <TechnicalLabel variant="accent">UNDERGRADUATE DEGREE</TechnicalLabel>
              <TechnicalLabel variant="neutral">{EDUCATION.status}</TechnicalLabel>
            </div>
            <h2 className="text-2xl sm:text-3xl font-sans font-bold text-[#111111]">
              {EDUCATION.degree} — Power
            </h2>
            <div className="text-sm font-mono text-[#174A5B] font-medium">
              Major: {EDUCATION.major} · Specialization: {EDUCATION.specialization}
            </div>
          </div>

          <div className="sm:text-right font-mono text-xs text-[#555555] space-y-0.5">
            <div className="font-semibold text-[#111111]">{EDUCATION.institution}</div>
            <div>{EDUCATION.location}</div>
            <div className="text-[#8A8A85]">{EDUCATION.period}</div>
          </div>
        </div>

        {/* Thesis / Capstone Highlight */}
        {EDUCATION.thesisOrCapstone && (
          <div className="bg-[#FAF9F7] border border-[#D9D9D4] p-5 space-y-2">
            <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-[#174A5B] font-semibold">
              <div className="flex items-center space-x-2">
                <Award className="w-4 h-4" />
                <span>UNDERGRADUATE CAPSTONE INVESTIGATION</span>
              </div>
              <span className="px-2 py-0.5 bg-[#356859]/10 text-[#356859]">
                {EDUCATION.thesisOrCapstone.grade || 'Grade A'}
              </span>
            </div>
            <h3 className="text-base sm:text-lg font-sans font-semibold text-[#111111]">
              "{EDUCATION.thesisOrCapstone.title}"
            </h3>
            <div className="text-xs font-mono text-[#666666] flex flex-wrap gap-3">
              <span>{EDUCATION.thesisOrCapstone.department || 'Department of Electrical Engineering'}</span>
              <span>·</span>
              <span>{EDUCATION.thesisOrCapstone.period || 'Aug 2015 — Jun 2016'}</span>
            </div>
            <p className="text-xs sm:text-sm text-[#444444] font-sans leading-relaxed pt-1">
              {EDUCATION.thesisOrCapstone.summary}
            </p>
            <div className="pt-2">
              <button
                onClick={() => onNavigate('/projects/resonant-wireless-power')}
                className="text-xs font-mono text-[#174A5B] hover:underline inline-flex items-center space-x-1 font-semibold"
              >
                <span>Inspect hardware testbed and experimental measurements</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}
      </section>

      {/* 2. Coursework Breakdown */}
      <section className="border border-[#D9D9D4] bg-[#FFFFFF] p-6 sm:p-8 space-y-6">
        <div className="border-b border-[#D9D9D4] pb-3">
          <div className="flex items-center space-x-2 text-xs font-mono text-[#174A5B] font-semibold">
            <BookOpen className="w-4 h-4" />
            <span className="uppercase tracking-wider">RIGOROUS CURRICULUM</span>
          </div>
          <h3 className="text-xl font-sans font-bold text-[#111111] mt-1">
            Coursework Breakdown
          </h3>
          <p className="text-xs sm:text-sm text-[#555555] font-sans mt-1">
            Comprehensive curriculum covering electrical power distribution, electromagnetic field physics, linear circuit theory, and computational networking.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {courseworkCategories.map((group, gIdx) => (
            <div key={gIdx} className="border border-[#D9D9D4] bg-[#FAF9F7] p-4 flex flex-col justify-between">
              <div>
                <div className="text-[10px] font-mono uppercase text-[#174A5B] font-bold border-b border-[#EBEBE6] pb-1.5 mb-3">
                  {group.category}
                </div>
                <ul className="space-y-2 text-xs font-sans text-[#333333]">
                  {group.courses.map((c, cIdx) => (
                    <li key={cIdx} className="flex items-start space-x-2">
                      <span className="text-[#8A8A85] font-mono text-[10px] mt-0.5">•</span>
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Lab Experience & Experimental Metrology */}
      <section className="border border-[#D9D9D4] bg-[#FFFFFF] p-6 sm:p-8 space-y-6">
        <div className="border-b border-[#D9D9D4] pb-3">
          <div className="flex items-center space-x-2 text-xs font-mono text-[#356859] font-semibold">
            <Wrench className="w-4 h-4" />
            <span className="uppercase tracking-wider">LABORATORY RIGOR</span>
          </div>
          <h3 className="text-xl font-sans font-bold text-[#111111] mt-1">
            Lab Experience &amp; Experimental Metrology
          </h3>
          <p className="text-xs sm:text-sm text-[#555555] font-sans mt-1">
            Hands-on proficiency with calibrated electrical instrumentation, high-frequency measurements, and bare-metal server infrastructure:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">
          {EDUCATION.laboratoryCompetencies.map((comp, idx) => (
            <div
              key={idx}
              className="border border-[#D9D9D4] p-3.5 bg-[#FAF9F7] flex items-center space-x-3"
            >
              <span className="w-2 h-2 bg-[#356859] shrink-0" />
              <span className="text-[#222222] font-medium">{comp}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Academic Projects */}
      <section className="border border-[#D9D9D4] bg-[#FFFFFF] p-6 sm:p-8 space-y-6">
        <div className="border-b border-[#D9D9D4] pb-3">
          <span className="text-xs font-mono text-[#174A5B] font-semibold uppercase">
            FORMAL LABORATORY WORK
          </span>
          <h3 className="text-xl font-sans font-bold text-[#111111] mt-1">
            Academic Projects
          </h3>
        </div>

        <div className="space-y-4">
          {academicProjects.map((p) => (
            <div
              key={p.id}
              className="border border-[#D9D9D4] p-5 space-y-2 bg-[#FAF9F7] hover:border-[#174A5B] transition-colors"
            >
              <div className="flex flex-wrap items-center justify-between text-xs font-mono">
                <span className="font-bold text-[#174A5B]">{p.id}</span>
                <span className="text-[#8A8A85]">{p.type}</span>
              </div>
              <h4 className="text-base font-sans font-bold text-[#111111]">
                {p.title}
              </h4>
              <p className="text-xs sm:text-sm text-[#444444] font-sans leading-relaxed">
                {p.description}
              </p>
              {p.link && (
                <div className="pt-1">
                  <button
                    onClick={() => onNavigate(p.link!)}
                    className="text-xs font-mono text-[#174A5B] hover:underline inline-flex items-center space-x-1"
                  >
                    <span>View Project Monograph</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 5. Certifications */}
      <section className="border border-[#D9D9D4] bg-[#FFFFFF] p-6 sm:p-8 space-y-6">
        <div className="border-b border-[#D9D9D4] pb-3 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
          <div>
            <div className="text-xs font-mono text-[#174A5B] font-semibold uppercase tracking-wider mb-1">
              PROFESSIONAL CREDENTIALS
            </div>
            <h3 className="text-xl font-sans font-bold text-[#111111]">
              Verified Curricula &amp; Certifications
            </h3>
            <p className="text-xs sm:text-sm text-[#555555] font-sans mt-1">
              Curriculum specializations in DevOps, operating systems, cybersecurity tools, software quality, and systems programming.
            </p>
          </div>
          <button
            onClick={() => onNavigate('/credentials')}
            className="text-xs font-mono text-[#174A5B] hover:underline inline-flex items-center space-x-1 font-semibold self-start sm:self-auto"
          >
            <span>View Full Credentials Matrix</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.id}
              className="border border-[#D9D9D4] bg-[#FAF9F7] p-4 flex flex-col justify-between space-y-2"
            >
              <div>
                <span className="text-[#174A5B] font-bold block text-[11px]">{cert.issuer}</span>
                <span className="text-sm font-bold text-[#111111] font-sans">{cert.title}</span>
              </div>
              <div className="flex items-center justify-between pt-2 border-t border-[#EBEBE6] text-[11px]">
                <span className="text-[#8A8A85]">ID: [VERIFIED]</span>
                <span className="text-[#356859] font-medium">{cert.status}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Research Interests & PhD Readiness */}
      <section className="border border-[#D9D9D4] bg-[#FFFFFF] p-6 sm:p-8 space-y-6">
        <div className="border-b border-[#D9D9D4] pb-3">
          <div className="text-xs font-mono text-[#174A5B] font-semibold uppercase tracking-wider mb-1">
            ADMISSIONS &amp; SUPERVISOR DOSSIER
          </div>
          <h3 className="text-xl font-sans font-bold text-[#111111]">
            Research Interests &amp; PhD Readiness
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-xs sm:text-sm font-sans text-[#333333] leading-relaxed">
          <div className="lg:col-span-8 space-y-4">
            <p>
              I am prepared to immediately undertake rigorous experimental and theoretical research within academic laboratories focused on <strong>Cyber-Physical Systems (CPS)</strong>, <strong>Smart Grid Security</strong>, and <strong>Distributed Testbed Infrastructure</strong>.
            </p>
            <p>
              Having completed both a formal electrical engineering power curriculum and over 8 years of enterprise infrastructure practice, I do not require onboarding in systems programming, networking architectures, or electrical laboratory equipment handling. I can formulate test matrices, implement bare-metal automation pipelines, instrument physical hardware rigs, and write peer-reviewed manuscripts with empirical discipline.
            </p>
            <div className="pt-2">
              <button
                onClick={() => onNavigate('/contact')}
                className="px-4 py-2 bg-[#174A5B] text-white font-mono text-xs hover:bg-[#103440] transition-colors inline-flex items-center space-x-2"
              >
                <span>Initiate Research Discussion</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-4 border border-[#D9D9D4] bg-[#FAF9F7] p-4 font-mono text-xs space-y-3">
            <div className="text-[10px] uppercase text-[#8A8A85] font-semibold border-b border-[#EBEBE6] pb-1">
              READINESS CHECKLIST
            </div>
            <div className="flex items-center space-x-2 text-[#111111]">
              <CheckCircle2 className="w-4 h-4 text-[#356859] shrink-0" />
              <span>Full-time PhD availability</span>
            </div>
            <div className="flex items-center space-x-2 text-[#111111]">
              <CheckCircle2 className="w-4 h-4 text-[#356859] shrink-0" />
              <span>Power laboratory safety trained</span>
            </div>
            <div className="flex items-center space-x-2 text-[#111111]">
              <CheckCircle2 className="w-4 h-4 text-[#356859] shrink-0" />
              <span>8+ years Linux systems practice</span>
            </div>
            <div className="flex items-center space-x-2 text-[#111111]">
              <CheckCircle2 className="w-4 h-4 text-[#356859] shrink-0" />
              <span>Hardware-in-the-loop testbed ready</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
