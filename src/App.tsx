/**
 * Academic Engineering Dossier
 * Muhammad Adeel Sajjad — Systems & Infrastructure Engineer
 * B.S. Electrical Engineering — Power
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { PERSONAL_INFO, PROJECTS, TECHNICAL_NOTES } from './data/dossierData';
import { SEO } from './components/SEO';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ResearchPage } from './pages/ResearchPage';
import { SystemsPage } from './pages/SystemsPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';
import { NotesPage } from './pages/NotesPage';
import { NoteDetailPage } from './pages/NoteDetailPage';
import { ExperiencePage } from './pages/ExperiencePage';
import { EducationPage } from './pages/EducationPage';
import { CredentialsPage } from './pages/CredentialsPage';
import { CVPage } from './pages/CVPage';
import { ContactPage } from './pages/ContactPage';
import { EvidencePage } from './pages/EvidencePage';
import { NotFoundPage } from './pages/NotFoundPage';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const pathname = window.location.pathname;
      return pathname === '' ? '/' : pathname;
    }
    return '/';
  });

  // Listen to browser history changes
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Navigate function with URL update and scroll to top
  const navigate = (path: string) => {
    setCurrentPath(path);
    if (typeof window !== 'undefined') {
      window.history.pushState({}, '', path);
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  };

  // Dynamic route-level SEO metadata
  const getSEO = () => {
    const path = currentPath.toLowerCase().replace(/\/$/, '') || '/';
    if (path === '/') {
      return {
        title: `${PERSONAL_INFO.name} — Engineering & Systems | Electrical Engineering & Research`,
        description: 'Academic engineering dossier of Muhammad Adeel Sajjad (B.S. Electrical Engineering, 2016). Research and systems engineering across power systems, telemetry, cyber-physical security, and distributed testbeds.',
        type: 'profile' as const,
        canonicalPath: '/',
        schema: {
          '@context': 'https://schema.org',
          '@type': 'ProfilePage',
          mainEntity: {
            '@type': 'Person',
            name: PERSONAL_INFO.name,
            jobTitle: PERSONAL_INFO.title,
            alumniOf: {
              '@type': 'EducationalOrganization',
              name: PERSONAL_INFO.institution
            },
            hasCredential: {
              '@type': 'EducationalOccupationalCredential',
              name: 'B.Sc. Electrical Engineering — Power',
              credentialCategory: 'degree'
            },
            knowsAbout: [
              'Cyber-Physical Systems',
              'Smart Grid Security',
              'Resonant Inductive Power Transfer',
              'High-Throughput Telemetry',
              'Enterprise Linux & Network Security'
            ],
            url: 'https://adeelsajjad.engineering'
          }
        }
      };
    }
    if (path === '/about') {
      return {
        title: `About & Methodology — ${PERSONAL_INFO.name}`,
        description: 'Technical background, engineering principles, and systems philosophy of Muhammad Adeel Sajjad.',
        type: 'profile' as const,
        canonicalPath: '/about'
      };
    }
    if (path === '/research') {
      return {
        title: `Research Programs & CPS Testbeds — ${PERSONAL_INFO.name}`,
        description: 'Research programs in resonant power transfer, cyber-physical perimeter security, and deterministic telemetry.',
        type: 'website' as const,
        canonicalPath: '/research'
      };
    }
    if (path === '/systems') {
      return {
        title: `Systems Laboratory — ${PERSONAL_INFO.name}`,
        description: 'Infrastructure, telemetry, defensive security, reverse-proxy hardening, and automated CI/CD deployment pipelines.',
        type: 'website' as const,
        canonicalPath: '/systems'
      };
    }
    if (path === '/projects') {
      return {
        title: `Engineering Projects Archive — ${PERSONAL_INFO.name}`,
        description: 'Rigorous technical case studies and hardware testbeds across power electronics, SIEM telemetry, and infrastructure automation.',
        type: 'website' as const,
        canonicalPath: '/projects'
      };
    }
    if (path === '/evidence') {
      return {
        title: `Engineering Evidence Index & Verification Matrix — ${PERSONAL_INFO.name}`,
        description: 'Metrology verification index distinguishing verified evidence artifacts from structured laboratory data placeholders across power systems, telemetry, and perimeter security.',
        type: 'website' as const,
        canonicalPath: '/evidence'
      };
    }
    if (path.startsWith('/projects/')) {
      const slug = path.replace('/projects/', '');
      const project = PROJECTS.find((p) => p.slug === slug);
      return {
        title: project ? `${project.title} — ${PERSONAL_INFO.name}` : `Project Dossier — ${PERSONAL_INFO.name}`,
        description: project ? project.subtitle : 'Engineering project technical report and laboratory measurements.',
        type: 'article' as const,
        canonicalPath: path,
        schema: project ? {
          '@context': 'https://schema.org',
          '@type': 'TechArticle',
          headline: project.title,
          description: project.subtitle,
          author: { '@type': 'Person', name: PERSONAL_INFO.name }
        } : undefined
      };
    }
    if (path === '/notes') {
      return {
        title: `Technical Notes & Derivations — ${PERSONAL_INFO.name}`,
        description: 'Peer-level technical monographs, mathematical derivations, and laboratory measurements for cyber-physical systems.',
        type: 'website' as const,
        canonicalPath: '/notes'
      };
    }
    if (path.startsWith('/notes/')) {
      const slug = path.replace('/notes/', '');
      const note = TECHNICAL_NOTES.find((n) => n.slug === slug);
      return {
        title: note ? `${note.id}: ${note.title} — ${PERSONAL_INFO.name}` : `Technical Note — ${PERSONAL_INFO.name}`,
        description: note ? note.abstract : 'Mathematical derivation and laboratory analysis.',
        type: 'article' as const,
        canonicalPath: path,
        schema: note ? {
          '@context': 'https://schema.org',
          '@type': 'TechArticle',
          headline: `${note.id}: ${note.title}`,
          description: note.abstract,
          author: { '@type': 'Person', name: PERSONAL_INFO.name }
        } : undefined
      };
    }
    if (path === '/experience') {
      return {
        title: `Engineering Experience — ${PERSONAL_INFO.name}`,
        description: 'Professional systems and infrastructure engineering experience across industrial testbeds and mission-critical environments.',
        type: 'profile' as const,
        canonicalPath: '/experience'
      };
    }
    if (path === '/education') {
      return {
        title: `Education & Metrology — ${PERSONAL_INFO.name}`,
        description: 'B.S. in Electrical Engineering (Power Systems) and laboratory instrumentation credentials.',
        type: 'profile' as const,
        canonicalPath: '/education'
      };
    }
    if (path === '/credentials') {
      return {
        title: `Technical Credentials & Verifications — ${PERSONAL_INFO.name}`,
        description: 'Curriculum verifications and credentials across cloud DevOps, operating systems, cybersecurity, and software quality.',
        type: 'profile' as const,
        canonicalPath: '/credentials'
      };
    }
    if (path === '/cv') {
      return {
        title: `Curriculum Vitae — ${PERSONAL_INFO.name}`,
        description: 'Academic CV of Muhammad Adeel Sajjad for PhD admissions committees and research evaluations.',
        type: 'profile' as const,
        canonicalPath: '/cv'
      };
    }
    if (path === '/contact') {
      return {
        title: `Contact & GPG Key — ${PERSONAL_INFO.name}`,
        description: 'Academic correspondence channels, institutional affiliations, and GPG public key for Muhammad Adeel Sajjad.',
        type: 'website' as const,
        canonicalPath: '/contact'
      };
    }
    return {
      title: `404: System Not Found — ${PERSONAL_INFO.name}`,
      description: 'The requested resource could not be located in this engineering dossier.',
      type: 'website' as const,
      canonicalPath: path
    };
  };

  const seoData = getSEO();

  // Route Resolver
  const renderCurrentView = () => {
    const path = currentPath.toLowerCase().replace(/\/$/, '') || '/';

    if (path === '/' || path === '') {
      return <HomePage onNavigate={navigate} />;
    }
    if (path === '/about') {
      return <AboutPage onNavigate={navigate} />;
    }
    if (path === '/research') {
      return <ResearchPage onNavigate={navigate} />;
    }
    if (path === '/projects') {
      return <ProjectsPage onNavigate={navigate} />;
    }
    if (path === '/evidence') {
      return <EvidencePage onNavigate={navigate} />;
    }
    if (path.startsWith('/projects/')) {
      const slug = path.replace('/projects/', '');
      return <ProjectDetailPage slug={slug} onNavigate={navigate} />;
    }
    if (path === '/systems') {
      return <SystemsPage onNavigate={navigate} />;
    }
    if (path === '/notes') {
      return <NotesPage onNavigate={navigate} />;
    }
    if (path.startsWith('/notes/')) {
      const slug = path.replace('/notes/', '');
      return <NoteDetailPage slug={slug} onNavigate={navigate} />;
    }
    if (path === '/experience') {
      return <ExperiencePage onNavigate={navigate} />;
    }
    if (path === '/education') {
      return <EducationPage onNavigate={navigate} />;
    }
    if (path === '/credentials') {
      return <CredentialsPage onNavigate={navigate} />;
    }
    if (path === '/cv') {
      return <CVPage onNavigate={navigate} />;
    }
    if (path === '/contact') {
      return <ContactPage onNavigate={navigate} />;
    }

    // 404 Not Found for unmapped routes
    return <NotFoundPage onNavigate={navigate} />;
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F7F5] text-[#111111] font-sans antialiased selection:bg-[#174A5B] selection:text-white">
      {/* Dynamic SEO & OpenGraph / Schema.org Injection */}
      <SEO
        title={seoData.title}
        description={seoData.description}
        canonicalPath={seoData.canonicalPath}
        type={seoData.type}
        schema={seoData.schema}
      />

      {/* Global Public Header */}
      <Header
        currentPath={currentPath}
        onNavigate={navigate}
      />

      {/* Main Content Area */}
      <main className="flex-1 w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 max-w-6xl">
        {renderCurrentView()}
      </main>

      {/* Global Footer */}
      <Footer onNavigate={navigate} />
    </div>
  );
}
