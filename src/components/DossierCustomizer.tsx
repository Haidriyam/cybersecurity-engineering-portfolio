import React from 'react';
import { X, Check, Eye, Sliders, Printer } from 'lucide-react';
import { DossierLayoutMode, DossierFontScale } from '../types';

interface DossierCustomizerProps {
  isOpen: boolean;
  onClose: () => void;
  layoutMode: DossierLayoutMode;
  setLayoutMode: (mode: DossierLayoutMode) => void;
  fontScale: DossierFontScale;
  setFontScale: (scale: DossierFontScale) => void;
  showTolerances: boolean;
  setShowTolerances: (show: boolean) => void;
  showTechnicalGrid: boolean;
  setShowTechnicalGrid: (show: boolean) => void;
}

export const DossierCustomizer: React.FC<DossierCustomizerProps> = ({
  isOpen,
  onClose,
  layoutMode,
  setLayoutMode,
  fontScale,
  setFontScale,
  showTolerances,
  setShowTolerances,
  showTechnicalGrid,
  setShowTechnicalGrid
}) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    onClose();
    setTimeout(() => {
      try {
        window.print();
      } catch (err) {
        console.warn('Print blocked or failed', err);
      }
    }, 120);
  };

  return (
    <div className="no-print fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xs p-4">
      <div className="bg-[#FFFFFF] border-2 border-[#174A5B] max-w-md w-full p-5 shadow-sm text-xs font-mono">
        <div className="flex items-center justify-between pb-3 border-b border-[#D9D9D4]">
          <div className="flex items-center space-x-2">
            <Sliders className="w-4 h-4 text-[#174A5B]" />
            <span className="font-bold text-sm text-[#111111] uppercase tracking-wide">
              Dossier Presentation Controls
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-[#666666] hover:text-[#111111] border border-[#D9D9D4] hover:border-[#111111]"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>

        <p className="mt-2.5 text-[#555555] font-sans text-xs leading-relaxed">
          Configure the technical dossier presentation according to your evaluation workflow (academic committee review, lab notebook inspection, or compact printout).
        </p>

        {/* 1. Layout Mode */}
        <div className="mt-4 pt-3 border-t border-[#EBEBE6]">
          <label className="text-[11px] uppercase tracking-wider text-[#8A8A85] block mb-2 font-semibold">
            Structural Layout Mode:
          </label>
          <div className="grid grid-cols-3 gap-2">
            {[
              { id: 'standard', label: 'Standard', desc: 'Formal academic dossier' },
              { id: 'laboratory', label: 'Lab Notebook', desc: 'Engineering testbed log' },
              { id: 'compact', label: 'Compact', desc: 'Dense data density' }
            ].map((mode) => (
              <button
                key={mode.id}
                onClick={() => setLayoutMode(mode.id as DossierLayoutMode)}
                className={`p-2 border text-left flex flex-col justify-between ${
                  layoutMode === mode.id
                    ? 'border-[#174A5B] bg-[#174A5B]/10 text-[#174A5B] font-bold'
                    : 'border-[#D9D9D4] text-[#444444] hover:border-[#111111]'
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <span>{mode.label}</span>
                  {layoutMode === mode.id && <Check className="w-3 h-3" />}
                </div>
                <span className="text-[10px] text-[#777777] font-normal mt-1 block">
                  {mode.desc}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* 2. Font Scale */}
        <div className="mt-4 pt-3 border-t border-[#EBEBE6]">
          <label className="text-[11px] uppercase tracking-wider text-[#8A8A85] block mb-2 font-semibold">
            Typography Density:
          </label>
          <div className="grid grid-cols-3 gap-2">
            {[
              { id: 'normal', label: 'Standard' },
              { id: 'dense', label: 'Dense (13px)' },
              { id: 'editorial', label: 'Editorial' }
            ].map((scale) => (
              <button
                key={scale.id}
                onClick={() => setFontScale(scale.id as DossierFontScale)}
                className={`p-2 border text-center ${
                  fontScale === scale.id
                    ? 'border-[#174A5B] bg-[#174A5B]/10 text-[#174A5B] font-bold'
                    : 'border-[#D9D9D4] text-[#444444] hover:border-[#111111]'
                }`}
              >
                {scale.label}
              </button>
            ))}
          </div>
        </div>

        {/* 3. Toggles */}
        <div className="mt-4 pt-3 border-t border-[#EBEBE6] space-y-2">
          <label className="flex items-center justify-between cursor-pointer p-1.5 border border-[#EBEBE6] hover:bg-[#FAF9F7]">
            <span className="text-xs text-[#333333]">Display Measurement Tolerances &amp; Methods</span>
            <input
              type="checkbox"
              checked={showTolerances}
              onChange={(e) => setShowTolerances(e.target.checked)}
              className="accent-[#174A5B]"
            />
          </label>

          <label className="flex items-center justify-between cursor-pointer p-1.5 border border-[#EBEBE6] hover:bg-[#FAF9F7]">
            <span className="text-xs text-[#333333]">Subtle Engineering Coordinate Grid</span>
            <input
              type="checkbox"
              checked={showTechnicalGrid}
              onChange={(e) => setShowTechnicalGrid(e.target.checked)}
              className="accent-[#174A5B]"
            />
          </label>
        </div>

        {/* 4. Print Action */}
        <div className="mt-5 pt-3 border-t border-[#D9D9D4] flex items-center justify-between">
          <button
            onClick={handlePrint}
            className="inline-flex items-center space-x-1.5 px-3 py-1.5 border border-[#D9D9D4] bg-[#F7F7F5] hover:border-[#111111] text-[#111111] cursor-pointer"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print / Export PDF</span>
          </button>

          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-[#174A5B] text-white hover:bg-[#103440] font-semibold"
          >
            Apply &amp; Close
          </button>
        </div>
      </div>
    </div>
  );
};
