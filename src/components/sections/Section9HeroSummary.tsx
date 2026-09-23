import React from 'react';
import { RotateCcw, ArrowRight, CheckCircle2, Shield, Radio, Plane, Zap } from 'lucide-react';
import { SectionId } from '../../types';
import { SECTIONS } from '../../data/sections';

interface SectionProps {
  onRestart: () => void;
  onJumpToSection: (id: SectionId) => void;
}

export const Section9HeroSummary: React.FC<SectionProps> = ({ onRestart, onJumpToSection }) => {
  return (
    <div className="w-full h-full flex flex-col justify-between p-6 md:p-12 lg:p-16 max-w-7xl mx-auto text-[#F6EEE3]">
      {/* Top Editorial Index */}
      <div className="flex items-center justify-between border-b border-white/10 pb-4 text-xs font-mono tracking-widest text-white/60 uppercase">
        <div className="flex items-center gap-3">
          <span className="font-bold text-[#E65100]">09 // EPILOGUE</span>
          <span>·</span>
          <span>SYSTEM SYNTHESIS</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-[#05DF72] font-semibold">MISSION COMPLETE</span>
          <span>·</span>
          <span className="hidden sm:inline">SMART INDIA HACKATHON 2026</span>
        </div>
      </div>

      {/* Center Hero Monumental Typography */}
      <div className="my-auto py-6 space-y-10 max-w-5xl">
        <div className="space-y-4">
          <span className="text-xs sm:text-sm font-mono uppercase tracking-[0.25em] text-[#E65100] font-bold block">
            THE DISASTER RESPONSE REVOLUTION
          </span>

          {/* Monumental Headline */}
          <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.88] text-white uppercase text-balance">
            FROM ALERT<br />
            <span className="text-[#EB5A36]">TO SURVIVOR.</span>
          </h1>
        </div>

        {/* Wordmark & Pill-Free Core Pillars */}
        <div className="space-y-4 pt-2">
          <div className="font-display text-2xl sm:text-3xl font-black tracking-tight text-white uppercase">
            SILENTRESQ
          </div>

          <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm font-mono tracking-widest text-[#05DF72] uppercase">
            <span>AUTONOMOUS</span>
            <span className="text-white/30">·</span>
            <span>AI-POWERED</span>
            <span className="text-white/30">·</span>
            <span>OFFLINE LoRa</span>
            <span className="text-white/30">·</span>
            <span>GEO-TAGGED</span>
          </div>

          <p className="text-base sm:text-lg text-white/70 font-body max-w-2xl leading-relaxed">
            Eliminating blind excavation in remote landslides through runway-independent hybrid VTOL, edge thermal perception, and resilient offline telemetry.
          </p>
        </div>

        {/* Primary Action Button: REPLAY MISSION */}
        <div className="pt-2 flex flex-wrap items-center gap-4">
          <button
            onClick={onRestart}
            className="px-8 py-4 bg-[#E65100] text-white text-xs sm:text-sm font-bold uppercase tracking-widest hover:bg-[#EB5A36] transition-all flex items-center gap-3 shadow-xl shadow-[#E65100]/20"
          >
            <RotateCcw className="w-4 h-4" />
            <span>REPLAY MISSION →</span>
          </button>
        </div>

        {/* SIH Presentation Quick-Jump Index */}
        <div className="pt-6 border-t border-white/10 space-y-3">
          <div className="flex items-center justify-between text-xs font-mono text-white/50">
            <span>JURY DRILL-DOWN // SELECT ANY PHASE TO REVISIT</span>
            <span>01 TO 08</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {SECTIONS.slice(0, 8).map((sec) => (
              <button
                key={sec.id}
                onClick={() => onJumpToSection(sec.id)}
                className="p-2.5 bg-white/5 border border-white/10 text-left hover:bg-white/10 hover:border-[#E65100] transition-colors"
              >
                <span className="font-mono text-[10px] text-[#E65100] block">
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
      <div className="border-t border-white/10 pt-3 flex items-center justify-between text-xs text-white/50 font-body">
        <span>SILENTRESQ DISASTER PROTOTYPE PRESENTATION SYSTEM</span>
        <span className="font-mono">SIH 2026 // JURY BENCHMARK</span>
      </div>
    </div>
  );
};
