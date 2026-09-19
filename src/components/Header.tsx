import React, { useState } from 'react';
import { ExternalLink, Menu, X } from 'lucide-react';
import { PERSONAL_INFO } from '../data/dossierData';

interface HeaderProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  onToggleCustomizer?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPath,
  onNavigate
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'RESEARCH', path: '/research' },
    { label: 'SYSTEMS', path: '/systems' },
    { label: 'PROJECTS', path: '/projects' },
    { label: 'NOTES', path: '/notes' },
    { label: 'ABOUT', path: '/about' },
    { label: 'CV', path: '/cv' }
  ];

  const handleNavClick = (path: string) => {
    onNavigate(path);
    setMobileMenuOpen(false);
  };

  return (
    <header className="site-header no-print sticky top-0 z-40 bg-[#F7F7F5]/95 backdrop-blur-xs border-b border-[#D9D9D4]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        {/* Brand / Header Identity */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          <button
            onClick={() => handleNavClick('/')}
            className="text-left group focus:outline-none"
            aria-label="Academic Dossier Home"
          >
            {/* Desktop Brand */}
            <div className="hidden lg:flex items-center space-x-2 text-sm">
              <span className="font-sans font-bold tracking-tight text-[#111111] group-hover:text-[#174A5B] transition-colors whitespace-nowrap">
                MUHAMMAD ADEEL SAJJAD
              </span>
              <span className="text-[#8A8A85] font-mono text-xs">//</span>
              <span className="font-mono text-xs text-[#174A5B] font-semibold whitespace-nowrap">
                Systems &amp; Power
              </span>
              <span className="text-[#8A8A85] font-mono text-xs">//</span>
              <span className="font-mono text-xs text-[#555555] whitespace-nowrap">
                Academic Dossier
              </span>
            </div>

            {/* Tablet Brand */}
            <div className="hidden sm:flex lg:hidden items-center space-x-2 text-sm">
              <span className="font-sans font-bold tracking-tight text-[#111111] group-hover:text-[#174A5B] transition-colors whitespace-nowrap">
                MUHAMMAD ADEEL SAJJAD
              </span>
              <span className="text-[#8A8A85] font-mono text-xs">//</span>
              <span className="font-mono text-xs text-[#174A5B] font-medium whitespace-nowrap">
                Systems &amp; Power
              </span>
            </div>

            {/* Mobile Brand */}
            <div className="sm:hidden">
              <span className="font-sans font-bold text-sm tracking-tight text-[#111111] group-hover:text-[#174A5B] transition-colors block leading-tight">
                MUHAMMAD ADEEL SAJJAD
              </span>
              <span className="text-[10px] font-mono text-[#174A5B] block font-medium">
                Systems &amp; Power // Academic Dossier
              </span>
            </div>
          </button>
        </div>

        {/* Restrained Desktop Navigation */}
        <nav aria-label="Primary" className="hidden md:flex items-center space-x-5 lg:space-x-7 text-xs font-mono font-medium tracking-wide">
          {navLinks.map((link) => {
            const isActive = currentPath === link.path || (link.path !== '/' && currentPath.startsWith(link.path));
            return (
              <button
                key={link.path}
                onClick={() => handleNavClick(link.path)}
                className={`py-1 transition-colors relative focus:outline-none focus:ring-1 focus:ring-[#174A5B] ${
                  isActive
                    ? 'text-[#174A5B] font-bold'
                    : 'text-[#444444] hover:text-[#111111]'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-[#174A5B]" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right side links & controls */}
        <div className="flex items-center space-x-3 sm:space-x-4 text-xs font-mono">
          {/* Contact Link */}
          <button
            onClick={() => handleNavClick('/contact')}
            className={`hidden sm:inline-block transition-colors ${
              currentPath === '/contact'
                ? 'text-[#174A5B] font-bold'
                : 'text-[#555555] hover:text-[#111111]'
            }`}
          >
            CONTACT
          </button>

          {/* GitHub Link */}
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center space-x-1 text-[#555555] hover:text-[#174A5B] transition-colors"
            title="External repository on GitHub"
          >
            <span>GITHUB</span>
            <span className="text-[10px]" aria-hidden="true">↗</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#111111] border border-[#D9D9D4] bg-[#FFFFFF] hover:bg-[#FAF9F7] focus:outline-none min-w-[44px] min-h-[44px] flex items-center justify-center cursor-pointer"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel - Simple, legible, accessible */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#D9D9D4] bg-[#FFFFFF] px-4 py-4 space-y-3 font-mono text-xs shadow-xs">
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => {
              const isActive = currentPath === link.path || (link.path !== '/' && currentPath.startsWith(link.path));
              return (
                <button
                  key={link.path}
                  onClick={() => handleNavClick(link.path)}
                  className={`text-left py-2.5 px-3 border transition-colors min-h-[44px] flex items-center cursor-pointer ${
                    isActive
                      ? 'border-[#174A5B] bg-[#174A5B]/5 text-[#174A5B] font-bold'
                      : 'border-[#EBEBE6] text-[#222222] hover:border-[#D9D9D4] bg-[#FAF9F7]'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </div>

          <div className="pt-3 border-t border-[#EBEBE6] grid grid-cols-2 gap-2 text-xs">
            <button
              onClick={() => handleNavClick('/contact')}
              className={`py-2 px-3 border text-left min-h-[44px] flex items-center cursor-pointer ${
                currentPath === '/contact'
                  ? 'border-[#174A5B] text-[#174A5B] font-bold bg-[#174A5B]/5'
                  : 'border-[#EBEBE6] text-[#333333]'
              }`}
            >
              CONTACT
            </button>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2 px-3 border border-[#EBEBE6] text-[#333333] hover:text-[#174A5B] min-h-[44px] flex items-center justify-between"
            >
              <span>GITHUB</span>
              <span>↗</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
