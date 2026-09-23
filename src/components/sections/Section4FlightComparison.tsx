import React, { useState, useEffect } from 'react';
import { ArrowRight, RotateCcw } from 'lucide-react';
import { QuadplaneSVG, MultirotorSVG } from '../uav/UavIllustrations';

interface SectionProps {
  onNext: () => void;
}

export const Section4FlightComparison: React.FC<SectionProps> = ({ onNext }) => {
  const [distanceKm, setDistanceKm] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setDistanceKm((prev) => {
        if (prev >= 10) return 10;
        return Math.min(10, prev + 0.12);
      });
    }, 45);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const handleReplay = () => {
    setDistanceKm(0);
    setIsPlaying(true);
  };

  const progressFraction = distanceKm / 10;
  const multirotorEnergy = Math.round(progressFraction * 100);
  const silentresqEnergy = Math.round(progressFraction * 60);

  const isSilentResqCruising = distanceKm >= 2.0 && distanceKm <= 8.5;
  const isSilentResqHovering = !isSilentResqCruising;

  let silentResqPhaseText = 'VTOL TAKEOFF';
  if (distanceKm > 1.5 && distanceKm < 2.5) silentResqPhaseText = 'TRANSITION';
  else if (distanceKm >= 2.5 && distanceKm <= 8.5) silentResqPhaseText = 'FIXED-WING CRUISE';
  else if (distanceKm > 8.5 && distanceKm < 9.5) silentResqPhaseText = 'TRANSITION';
  else if (distanceKm >= 9.5) silentResqPhaseText = 'VTOL SEARCH';

  return (
    <div className="w-full h-full flex flex-col justify-between p-6 md:p-12 lg:p-16 max-w-7xl mx-auto text-[#32160E] relative">
      {/* Top Editorial Index & Meta */}
      <div className="flex items-center justify-between border-b border-[#32160E]/15 pb-4 text-xs font-mono tracking-widest text-[#32160E]/70 uppercase">
        <div className="flex items-center gap-3">
          <span className="font-bold text-[#E65A33]">04 // FLIGHT ARCHITECTURE</span>
          <span>·</span>
          <span>10 KM COMPARATIVE SIMULATION</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="font-bold text-[#32160E]">MISSION: 10.0 KM RAPID TRANSIT</span>
          <span className="hidden sm:inline">·</span>
          <span className="hidden sm:inline text-[#E65A33]">{distanceKm.toFixed(1)} KM COMPLETED</span>
        </div>
      </div>

      {/* Main Container */}
      <div className="my-auto py-6 space-y-8 relative z-10">
        {/* Subtle geometric hairline decoration */}
        <div className="geo-circle-line w-96 h-96 -top-24 -right-24 opacity-25 border-[#32160E]/20" />

        {/* Editorial Headlines */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <span className="eyebrow-label text-[#E65A33]">
              ARCHITECTURAL EFFICIENCY COMPARISON
            </span>
            <h1 className="headline-section text-5xl sm:text-7xl lg:text-8xl xl:text-9xl text-[#32160E]">
              WHY SILENTRESQ?
            </h1>
            <p className="headline-sub text-xl sm:text-2xl lg:text-3xl text-[#E65A33] pt-1">
              ONE DESIGN. TWO FLIGHT MODES.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={handleReplay}
              className="px-3.5 py-2 border border-[#32160E]/25 text-[#32160E] text-xs font-mono font-bold uppercase tracking-wider hover:bg-[#32160E]/5 transition-colors flex items-center gap-2 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>REPLAY MISSION</span>
            </button>
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="px-3.5 py-2 border border-[#32160E]/25 text-[#32160E] text-xs font-mono font-bold uppercase tracking-wider hover:bg-[#32160E]/5 transition-colors cursor-pointer"
            >
              {isPlaying ? 'PAUSE' : 'RESUME'}
            </button>
          </div>
        </div>

        {/* Side-by-Side Visual Flight Comparison matching reference dark espresso cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* LEFT: Conventional Multirotor */}
          <div className="bg-[#32160E] text-[#FDF9F5] p-6 border border-white/10 space-y-5 flex flex-col justify-between relative shadow-xl">
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-white/50 mb-1">
                <span>CONVENTIONAL ARCHITECTURE</span>
                <span>ROTOR-BORNE THROUGHOUT</span>
              </div>
              <h2 className="font-display text-xl sm:text-2xl font-black uppercase tracking-tight text-white">
                CONVENTIONAL MULTIROTOR
              </h2>
            </div>

            {/* Flight Lane Graphic */}
            <div className="relative h-44 bg-black/40 border border-white/10 p-3 overflow-hidden flex flex-col justify-between">
              <div className="flex justify-between text-[10px] font-mono text-white/40 border-b border-white/10 pb-1">
                <span>0 KM BASE</span>
                <span>5 KM CANYON</span>
                <span>10 KM DEBRIS ZONE</span>
              </div>

              <div className="relative h-20 my-auto">
                <div className="absolute bottom-1 left-0 right-0 h-px bg-white/20" />
                <div
                  className="absolute top-1/2 -translate-y-1/2 transition-all duration-75 flex flex-col items-center"
                  style={{
                    left: `${Math.min(88, 5 + progressFraction * 80)}%`,
                  }}
                >
                  <MultirotorSVG className="w-14 h-14" isHovering={true} />
                  <span className="text-[9px] font-mono text-[#E65A33] mt-1 whitespace-nowrap bg-black/80 px-1 border border-white/10">
                    MULTIROTOR HOVER-DRIVEN
                  </span>
                </div>
              </div>

              <div className="text-[10px] font-mono text-white/60 tracking-wider flex items-center justify-between">
                <span>MODE: CONTINUOUS ROTOR THRUST</span>
                <span className="text-[#E65A33]">ALL 4 MOTORS DRAWING MAX POWER</span>
              </div>
            </div>

            {/* Energy Meter: Conventional */}
            <div className="space-y-2 font-mono">
              <div className="flex justify-between items-baseline">
                <span className="text-xs text-white/70">SIMULATED ENERGY CONSUMED:</span>
                <span className="text-2xl font-black text-white tracking-tight">
                  {multirotorEnergy}%
                </span>
              </div>
              <div className="w-full bg-white/10 h-2.5 overflow-hidden">
                <div
                  className="bg-white/80 h-full transition-all duration-75"
                  style={{ width: `${multirotorEnergy}%` }}
                />
              </div>
              <div className="flex justify-between text-[10px] text-white/40">
                <span>100% SIMULATED REFERENCE ENERGY</span>
                <span>BENCHMARK BASELINE</span>
              </div>
            </div>
          </div>

          {/* RIGHT: SilentResQ Hybrid VTOL */}
          <div className="bg-[#32160E] text-[#FDF9F5] p-6 border-2 border-[#E65A33] space-y-5 flex flex-col justify-between relative shadow-2xl">
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-[#05DF72] mb-1">
                <span>HYBRID VTOL / QUADPLANE</span>
                <span>WING LIFT + ROTOR TAKEOFF</span>
              </div>
              <h2 className="font-display text-xl sm:text-2xl font-black uppercase tracking-tight text-white flex items-center justify-between">
                <span>SILENTRESQ HYBRID VTOL</span>
                <span className="text-xs px-2 py-0.5 bg-[#E65A33] text-white font-mono font-bold">
                  DUAL-MODE
                </span>
              </h2>
            </div>

            {/* Flight Lane Graphic */}
            <div className="relative h-44 bg-black/40 border border-white/10 p-3 overflow-hidden flex flex-col justify-between">
              <div className="flex justify-between text-[10px] font-mono text-white/40 border-b border-white/10 pb-1">
                <span>0 KM BASE</span>
                <span>5 KM CANYON</span>
                <span>10 KM DEBRIS ZONE</span>
              </div>

              <div className="relative h-20 my-auto">
                <div className="absolute bottom-1 left-0 right-0 h-px bg-white/20" />
                <div
                  className="absolute top-1/2 -translate-y-1/2 transition-all duration-75 flex flex-col items-center"
                  style={{
                    left: `${Math.min(88, 5 + progressFraction * 80)}%`,
                  }}
                >
                  <QuadplaneSVG
                    className="w-20 h-14"
                    isHovering={isSilentResqHovering}
                    isCruising={isSilentResqCruising}
                    color="#05DF72"
                  />
                  <span
                    className={`text-[9px] font-mono mt-1 whitespace-nowrap px-1.5 py-0.5 border ${
                      isSilentResqCruising
                        ? 'bg-[#05DF72] text-[#17110F] font-bold border-white'
                        : 'bg-black/80 text-[#E65A33] border-white/10'
                    }`}
                  >
                    {silentResqPhaseText}
                  </span>
                </div>
              </div>

              <div className="text-[10px] font-mono tracking-wider flex items-center justify-between">
                <span className="text-white/70">
                  CURRENT: {silentResqPhaseText}
                </span>
                <span className="text-[#05DF72]">
                  {isSilentResqCruising ? '● ROTORS FEATHERED (CRUISE MOTOR ONLY)' : '● VERTICAL MOTORS ACTIVE'}
                </span>
              </div>
            </div>

            {/* Energy Meter: SilentResQ (60% at completion) */}
            <div className="space-y-2 font-mono">
              <div className="flex justify-between items-baseline">
                <span className="text-xs text-white/70">SIMULATED ENERGY CONSUMED:</span>
                <span className="text-2xl font-black text-[#05DF72] tracking-tight">
                  {silentresqEnergy}%
                </span>
              </div>
              <div className="w-full bg-white/10 h-2.5 overflow-hidden">
                <div
                  className="bg-[#05DF72] h-full transition-all duration-75"
                  style={{ width: `${silentresqEnergy}%` }}
                />
              </div>
              <div className="flex justify-between text-[10px] text-white/40">
                <span>60% SIMULATED ENERGY</span>
                <span className="text-[#05DF72]">40% LOWER SIMULATED MISSION ENERGY</span>
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic Energy Difference Banner matching "A TEAM OF REBELS, DREAMERS" vibrant coral */}
        <div className="p-6 bg-[#32160E] text-[#FDF9F5] border border-white/15 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xl relative overflow-hidden">
          <div className="flex items-center gap-6 z-10">
            <div className="font-display text-5xl sm:text-7xl font-black text-[#E65A33] tracking-tighter leading-none">
              40%
            </div>
            <div className="space-y-1">
              <div className="font-display text-lg sm:text-2xl font-black text-white uppercase tracking-tight">
                LOWER SIMULATED MISSION ENERGY
              </div>
              <p className="text-xs font-mono text-white/60">
                10 KM DEPLOYMENT • 100% SIMULATED REFERENCE ENERGY VS 60% SIMULATED ENERGY
              </p>
            </div>
          </div>

          <button
            onClick={onNext}
            className="px-6 py-3.5 bg-[#E65A33] text-white text-xs font-mono font-bold uppercase tracking-widest hover:bg-[#d04a25] transition-colors flex items-center gap-3 shrink-0 shadow-lg cursor-pointer z-10"
          >
            <span>UNDERSTAND THE DIFFERENCE</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Subtle engineering disclaimer required by prompt */}
        <div className="pt-2 text-[11px] font-mono text-[#32160E]/70 border-t border-[#32160E]/15">
          Demonstration target — actual energy savings depend on aircraft mass, payload, wind, speed, battery and mission profile.
        </div>
      </div>

      {/* Bottom Editorial Footnote */}
      <div className="border-t border-[#32160E]/15 pt-3 flex items-center justify-between text-xs text-[#32160E]/60 font-body">
        <span>SCENARIO STEP 4: SIDE-BY-SIDE 10 KM MISSION FLIGHT ENVELOPE</span>
        <span className="font-mono">SIH 2026 ARCHITECTURAL BENCHMARK</span>
      </div>
    </div>
  );
};
