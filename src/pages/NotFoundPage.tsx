import React from 'react';
import { ArrowLeft, Terminal, AlertOctagon } from 'lucide-react';

interface NotFoundPageProps {
  onNavigate: (path: string) => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-[60vh] flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full border border-[#D9D9D4] bg-[#FFFFFF] p-8 sm:p-10 space-y-6 text-left shadow-xs">
        {/* Monospace System Header */}
        <div className="flex items-center justify-between border-b border-[#EBEBE6] pb-3 text-[11px] font-mono text-[#8A8A85]">
          <span className="flex items-center space-x-1.5 text-[#C84B31]">
            <AlertOctagon className="w-3.5 h-3.5" />
            <span>HTTP 404 // RESOURCE NOT FOUND</span>
          </span>
          <span>ERR_ROUTE_UNDEFINED</span>
        </div>

        {/* Core Notice */}
        <div className="space-y-2">
          <div className="text-4xl sm:text-5xl font-mono font-bold tracking-tight text-[#111111]">
            404
          </div>
          <div className="text-sm font-mono font-semibold uppercase tracking-wider text-[#174A5B]">
            SYSTEM NOT FOUND
          </div>
          <p className="text-xs sm:text-sm text-[#555555] font-sans leading-relaxed pt-1">
            The requested technical monograph, experiment record, or routing address could not be located in this engineering dossier.
          </p>
        </div>

        {/* Routing Options */}
        <div className="pt-4 border-t border-[#EBEBE6] space-y-3 font-mono text-xs">
          <button
            onClick={() => onNavigate('/research')}
            className="w-full py-2.5 px-4 bg-[#174A5B] text-white hover:bg-[#103440] transition-colors flex items-center justify-between font-medium focus:outline-none focus:ring-2 focus:ring-[#174A5B]"
          >
            <span>Return to research index</span>
            <span aria-hidden="true">→</span>
          </button>

          <button
            onClick={() => onNavigate('/')}
            className="w-full py-2 px-4 bg-[#FAF9F7] text-[#111111] border border-[#D9D9D4] hover:border-[#174A5B] transition-colors flex items-center justify-between focus:outline-none"
          >
            <span className="flex items-center space-x-1.5">
              <ArrowLeft className="w-3.5 h-3.5 text-[#666666]" />
              <span>Return to dossier home</span>
            </span>
            <span className="text-[#8A8A85]">[ / ]</span>
          </button>
        </div>
      </div>
    </div>
  );
};
