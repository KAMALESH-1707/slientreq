import React from 'react';
import { ArrowRight, WifiOff, EyeOff, UserX } from 'lucide-react';

interface SectionProps {
  onNext: () => void;
}

export const Section3Problem: React.FC<SectionProps> = ({ onNext }) => {
  return (
    <div className="w-full h-full flex flex-col justify-between p-6 md:p-12 lg:p-16 max-w-7xl mx-auto text-[#FDF9F5] relative">
      {/* Top Editorial Index */}
      <div className="flex items-center justify-between border-b border-white/15 pb-4 text-xs font-mono tracking-widest text-[#FDF9F5]/70 uppercase">
        <div className="flex items-center gap-3">
          <span className="font-bold text-[#E65A33]">03 // THE CRISIS</span>
          <span>·</span>
          <span>TRIPLE DEFICIT AT GROUND ZERO</span>
        </div>
        <div>
          <span className="font-mono text-[11px] text-white/50">CONVENTIONAL SEARCH: IMPOSSIBLE</span>
        </div>
      </div>

      {/* Center Monumental Typography: Three Stark Truths */}
      <div className="my-auto py-8 space-y-12 max-w-5xl relative z-10">
        {/* Geometric accent line */}
        <div className="geo-circle-line w-72 h-72 -top-16 -right-16 opacity-25 border-white/20" />

        <div className="space-y-4">
          <span className="eyebrow-label text-[#E65A33]">
            THE REALITY OF REMOTE DISASTERS
          </span>
          <h2 className="headline-section text-4xl sm:text-6xl lg:text-7xl xl:text-8xl text-white text-balance">
            THREE FAILURES AT GROUND ZERO.
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-[#FDF9F5]/80 max-w-2xl font-body leading-relaxed">
            When terrain collapses in isolated mountain passes, conventional emergency response mechanisms fail instantly on three fronts:
          </p>
        </div>

        {/* 3 Monumental Typographic Blocks matching reference editorial grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
          {/* Block 1: NO NETWORK */}
          <div className="border-t-2 border-[#E65A33] pt-6 space-y-4 group">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-bold text-white/50">DEFICIT 01</span>
              <WifiOff className="w-5 h-5 text-[#E65A33]" />
            </div>
            <h3 className="headline-section text-5xl sm:text-6xl lg:text-7xl text-white">
              NO<br />NETWORK.
            </h3>
            <p className="text-sm sm:text-base text-[#FDF9F5]/75 font-body leading-relaxed">
              Base stations are miles away or severed by rockfall. Zero cellular signal, zero civilian internet, total communication blackout.
            </p>
          </div>

          {/* Block 2: NO VISUAL CONTACT */}
          <div className="border-t-2 border-white/25 pt-6 space-y-4 group">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-bold text-white/50">DEFICIT 02</span>
              <EyeOff className="w-5 h-5 text-white/80" />
            </div>
            <h3 className="headline-section text-5xl sm:text-6xl lg:text-7xl text-white">
              NO VISUAL<br />CONTACT.
            </h3>
            <p className="text-sm sm:text-base text-[#FDF9F5]/75 font-body leading-relaxed">
              Standard optical drone cameras see only an indistinguishable sea of crushed shale, mud, and boulders. The survivor is completely concealed.
            </p>
          </div>

          {/* Block 3: SURVIVOR HIDDEN */}
          <div className="border-t-2 border-white/25 pt-6 space-y-4 group">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-bold text-white/50">DEFICIT 03</span>
              <UserX className="w-5 h-5 text-[#05DF72]" />
            </div>
            <h3 className="headline-section text-5xl sm:text-6xl lg:text-7xl text-white">
              SURVIVOR<br />HIDDEN.
            </h3>
            <p className="text-sm sm:text-base text-[#FDF9F5]/75 font-body leading-relaxed">
              No audio propagation through dense rock. Ground teams cannot blindly excavate acres of unstable terrain without precise localized coordinates.
            </p>
          </div>
        </div>

        {/* Transitional Banner */}
        <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-t border-white/15">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#E65A33]">
              TIME TO ASPHYXIATION: &lt; 90 MINUTES
            </span>
            <h4 className="font-display text-2xl font-bold uppercase tracking-tight text-white mt-1">
              THE GOLDEN WINDOW DEMANDS A RADICAL SOLUTION.
            </h4>
          </div>

          <button
            onClick={onNext}
            className="px-8 py-4 bg-[#E65A33] text-white text-xs font-mono font-bold uppercase tracking-widest hover:bg-[#d04a25] transition-all flex items-center gap-3 shrink-0 cursor-pointer shadow-xl shadow-[#E65A33]/20"
          >
            <span>WHY SILENTRESQ</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Bottom Editorial Footnote */}
      <div className="border-t border-white/15 pt-3 flex items-center justify-between text-xs text-white/50 font-body">
        <span>SCENARIO STEP 3: DEFINING THE TRIPLE DEFICIT IN DISASTER MEDICINE</span>
        <span className="font-mono">SIH 2026 BENCHMARK</span>
      </div>
    </div>
  );
};
