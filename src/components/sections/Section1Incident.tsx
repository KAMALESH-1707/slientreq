import React, { useState, useEffect } from 'react';
import { ArrowRight, Footprints } from 'lucide-react';

interface SectionProps {
  onNext: () => void;
}

export const Section1Incident: React.FC<SectionProps> = ({ onNext }) => {
  const [walkerPos, setWalkerPos] = useState(15);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setWalkerPos((prev) => (prev >= 82 ? 15 : prev + 0.4));
    }, 40);
    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <div className="w-full h-full flex flex-col justify-between p-6 md:p-12 lg:p-16 max-w-7xl mx-auto text-[#32160E] relative">
      {/* Top Editorial Index & Meta */}
      <div className="flex items-center justify-between border-b border-[#32160E]/15 pb-4 text-xs font-mono tracking-widest text-[#32160E]/70 uppercase">
        <div className="flex items-center gap-3">
          <span className="font-bold text-[#E65A33]">01 // PROLOGUE</span>
          <span>·</span>
          <span>HIGH-ALTITUDE CORRIDOR</span>
        </div>
        <div className="flex items-center gap-3">
          <span>ELEVATION: 3,420 M</span>
          <span className="hidden sm:inline">·</span>
          <span className="hidden sm:inline text-[#32160E]/50">34°18'24.8"N 77°35'12.4"E</span>
        </div>
      </div>

      {/* Main Asymmetric Split Layout matching Kerry Media hero composition */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center my-auto py-6 relative">
        {/* Decorative reference hairline circle accent */}
        <div className="geo-circle-line w-64 h-64 -top-12 -left-12 opacity-40 border-[#32160E]/15" />

        {/* Left Column: Oversized Editorial Typography */}
        <div className="lg:col-span-5 flex flex-col justify-center space-y-6 z-10">
          <div className="space-y-3">
            <span className="eyebrow-label text-[#E65A33]">
              ACT I — THE INCIDENT
            </span>
            <h1 className="headline-section text-5xl sm:text-7xl lg:text-8xl xl:text-9xl text-[#32160E] text-balance">
              MOUNTAIN<br />ROAD.
            </h1>
          </div>

          {/* Subtitle in signature orange like "WE DON'T MAKE ADS. WE IGNITE REVOLUTIONS." */}
          <div className="space-y-2">
            <p className="headline-sub text-xl sm:text-2xl lg:text-3xl text-[#E65A33]">
              LONE TRAVELER IN DEEP HIMALAYAN ISOLATION.
            </p>
            <p className="text-sm sm:text-base lg:text-lg text-[#32160E]/80 leading-relaxed font-body max-w-md">
              A single civilian traverses an unpaved cliff road. Miles from mobile coverage, beneath steep slopes primed for seismic release.
            </p>
          </div>

          {/* Minimal Key Meta Indicators */}
          <div className="pt-4 border-t border-[#32160E]/15 flex flex-col gap-2.5 font-mono text-xs">
            <div className="flex items-center justify-between text-[#32160E]">
              <span className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#05DF72] ring-2 ring-[#05DF72]/40" />
                SUBJECT: LONE CIVILIAN
              </span>
              <span className="text-[#05DF72] font-black">GREEN IDENTIFIER</span>
            </div>
            <div className="flex items-center justify-between text-[#32160E]/60 text-[11px]">
              <span>TERRAIN: FRACTURED METAMORPHIC SHALE</span>
              <span>NETWORK: ZERO BARS</span>
            </div>
          </div>

          {/* Action trigger button following reference style */}
          <div className="pt-2">
            <button
              onClick={onNext}
              className="inline-flex items-center gap-3 px-6 py-3.5 bg-[#32160E] text-[#FDF9F5] text-xs font-mono font-bold tracking-widest uppercase hover:bg-[#E65A33] transition-colors cursor-pointer"
            >
              <span>TRIGGER COLLAPSE</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Right Column: Visual Area with Mountain Scene & Walking Green Person */}
        <div className="lg:col-span-7 relative z-10">
          <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#32160E] border border-[#32160E]/20 shadow-2xl">
            {/* Background Mountain Photo */}
            <img
              src="/src/assets/images/disaster_mountain_road_1790138100529.jpg"
              alt="Mountain Pass"
              className="w-full h-full object-cover opacity-90 brightness-95"
              referrerPolicy="no-referrer"
            />

            {/* Atmospheric warm gradient scrim */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#32160E]/85 via-transparent to-black/25 pointer-events-none" />

            {/* Geometric hairline overlay accents matching reference style */}
            <div className="absolute top-4 left-4 text-[10px] font-mono text-[#FDF9F5]/80 tracking-widest">
              [ CAM_01 // VALLEY PASS LOOKOUT ]
            </div>
            <div className="absolute top-4 right-4 text-[10px] font-mono text-[#FDF9F5]/60">
              34°18'24.8"N
            </div>

            {/* Simulated Road Path Line */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 800 500" preserveAspectRatio="none">
              <path
                d="M 50 420 Q 300 400 480 340 T 750 220"
                fill="none"
                stroke="rgba(255,255,255,0.25)"
                strokeWidth="2"
                strokeDasharray="4 4"
              />
            </svg>

            {/* Animated Walking Green Person */}
            <div
              className="absolute transition-all duration-75 flex flex-col items-center"
              style={{
                left: `${walkerPos}%`,
                bottom: `${22 + (walkerPos * 0.2)}%`,
                transform: 'translate(-50%, 0)',
              }}
            >
              <div className="relative flex flex-col items-center">
                {/* Green identifier pill strictly preserved */}
                <div className="mb-1.5 px-2 py-0.5 bg-[#05DF72] text-[#17110F] text-[10px] font-mono font-bold tracking-wider rounded-none shadow-md whitespace-nowrap">
                  SURVIVOR (GREEN)
                </div>

                {/* Animated Green Human Avatar */}
                <div className="relative">
                  <div className="w-7 h-7 rounded-full bg-[#05DF72] flex items-center justify-center shadow-[0_0_16px_rgba(5,223,114,0.9)] border border-white">
                    <Footprints className="w-4 h-4 text-[#17110F]" />
                  </div>
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-1 bg-[#05DF72]/40 rounded-full blur-[1px]" />
                </div>
              </div>
            </div>

            {/* Interactive Play/Pause walking control */}
            <div className="absolute bottom-4 right-4 flex items-center gap-2">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="px-3 py-1 bg-black/60 hover:bg-black/80 backdrop-blur-sm text-white text-[10px] font-mono uppercase tracking-wider transition-colors border border-white/20 cursor-pointer"
              >
                {isPlaying ? 'PAUSE WALK' : 'RESUME WALK'}
              </button>
            </div>

            {/* Lower info overlay */}
            <div className="absolute bottom-4 left-4 text-[11px] font-mono text-[#FDF9F5]/90 flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-[#05DF72] animate-pulse" />
              <span>POSITION: KM 14.8 ALONG CLIFF PATH</span>
            </div>
          </div>

          <div className="flex justify-between items-center mt-3 text-[11px] font-mono text-[#32160E]/60">
            <span>FIGURE REF: 01-A</span>
            <span>MOUNTAIN GEOLOGY: FRAGILE METAMORPHIC SHALE</span>
          </div>
        </div>
      </div>

      {/* Bottom Editorial Footnote */}
      <div className="border-t border-[#32160E]/15 pt-3 flex items-center justify-between text-xs text-[#32160E]/60 font-body">
        <span>SCENARIO STEP 1: INITIAL RECONNAISSANCE BEFORE CRISIS</span>
        <span className="font-mono">SIH 2026 // SILENTRESQ CONCEPT</span>
      </div>
    </div>
  );
};
