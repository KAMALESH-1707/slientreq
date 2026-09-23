import React from 'react';
import { RotateCcw } from 'lucide-react';
import { SectionId } from '../../types';
import { SECTIONS } from '../../data/sections';

interface SectionProps {
  onRestart: () => void;
  onJumpToSection: (id: SectionId) => void;
}

export const Section10HeroSummary: React.FC<SectionProps> = ({ onRestart, onJumpToSection }) => {
  return (
    <div className="w-full h-full flex flex-col justify-between p-6 md:p-12 lg:p-16 max-w-7xl mx-auto text-[#FDF9F5] relative">
      {/* Top Editorial Index */}
      <div className="flex items-center justify-between border-b border-white/15 pb-4 text-xs font-mono tracking-widest text-[#FDF9F5]/70 uppercase">
        <div className="flex items-center gap-3">
          <span className="font-bold text-[#E65A33]">10 // EPILOGUE</span>
          <span>·</span>
          <span>SYSTEM SYNTHESIS</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-[#05DF72] font-semibold">MISSION COMPLETE</span>
          <span>·</span>
          <span className="hidden sm:inline">SMART INDIA HACKATHON 2026</span>
        </div>
      </div>

      {/* Center Hero Monumental Typography matching reference "THE FUTURE OF ADVERTISING / A TEAM OF REBELS" */}
      <div className="my-auto py-6 space-y-10 max-w-5xl relative z-10">
        {/* Decorative reference hairline circle accent */}
        <div className="geo-circle-line w-96 h-96 -top-20 -right-20 opacity-25 border-white/20" />

        <div className="space-y-4">
          <span className="eyebrow-label text-[#E65A33] block">
            THE DISASTER RESPONSE REVOLUTION
          </span>

          <h1 className="headline-hero text-6xl sm:text-8xl lg:text-9xl xl:text-[10rem] text-white text-balance">
            FROM ALERT<br />
            <span className="text-[#E65A33]">TO SURVIVOR.</span>
          </h1>
        </div>

        {/* Wordmark & Pill-Free Core Pillars */}
        <div className="space-y-4 pt-2">
          <div className="headline-sub text-3xl sm:text-4xl lg:text-5xl text-white tracking-widest">
            SILENT RESQ
          </div>

          <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm font-mono tracking-widest text-[#05DF72] uppercase font-bold">
            <span>AUTONOMOUS</span>
            <span className="text-white/30">·</span>
            <span>HYBRID VTOL</span>
            <span className="text-white/30">·</span>
            <span>AI THERMAL</span>
            <span className="text-white/30">·</span>
            <span>OFFLINE LoRa</span>
            <span className="text-white/30">·</span>
            <span>GEO-TAGGED</span>
          </div>

          <p className="text-base sm:text-lg text-[#FDF9F5]/80 font-body max-w-2xl leading-relaxed">
            Eliminating blind excavation in remote landslides through runway-independent hybrid VTOL, edge thermal perception, and resilient offline telemetry.
          </p>
        </div>

        {/* Primary Action Button: REPLAY MISSION */}
        <div className="pt-2 flex flex-wrap items-center gap-4">
          <button
            onClick={onRestart}
            className="px-8 py-4 bg-[#E65A33] text-white text-xs sm:text-sm font-mono font-bold uppercase tracking-widest hover:bg-[#d04a25] transition-all flex items-center gap-3 shadow-xl shadow-[#E65A33]/25 cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
            <span>REPLAY MISSION →</span>
          </button>
        </div>

        {/* SIH Presentation Quick-Jump Index */}
        <div className="pt-6 border-t border-white/15 space-y-3">
          <div className="flex items-center justify-between text-xs font-mono text-white/50">
            <span>JURY DRILL-DOWN // SELECT ANY PHASE TO REVISIT</span>
            <span>01 TO 09</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
            {SECTIONS.slice(0, 9).map((sec) => (
              <button
                key={sec.id}
                onClick={() => onJumpToSection(sec.id)}
                className="p-2.5 bg-white/5 border border-white/10 text-left hover:bg-white/10 hover:border-[#E65A33] transition-colors cursor-pointer"
              >
                <span className="font-mono text-[10px] text-[#E65A33] font-bold block">
                  {sec.indexStr}
                </span>
                <span className="font-display text-xs font-bold uppercase text-white truncate block">
                  {sec.tagline}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Editorial Footnote */}
      <div className="border-t border-white/15 pt-3 flex items-center justify-between text-xs text-white/50 font-body">
        <span>SILENTRESQ DISASTER PROTOTYPE PRESENTATION SYSTEM</span>
        <span className="font-mono">SIH 2026 // JURY BENCHMARK</span>
      </div>
    </div>
  );
};
