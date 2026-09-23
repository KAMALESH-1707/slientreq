import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { QuadplaneSVG } from '../uav/UavIllustrations';

interface SectionProps {
  onNext: () => void;
}

type Mode = 'vtol' | 'cruise' | 'search';

export const Section5DifferenceInFlight: React.FC<SectionProps> = ({ onNext }) => {
  const [activeMode, setActiveMode] = useState<Mode>('cruise');

  const modeData = {
    vtol: {
      headline: 'VERTICAL WHEN NEEDED.',
      modeLabel: 'VTOL LAUNCH / CLIMB',
      desc: 'No runway required. 4 high-torque brushless vertical motors lift the composite quadplane straight out of tight ravines or vehicle bays.',
      motorState: '4 VTOL MOTORS ENGAGED • PUSHER IDLE',
      isHovering: true,
      isCruising: false,
    },
    cruise: {
      headline: 'EFFICIENT IN TRANSIT.',
      modeLabel: 'FIXED-WING CRUISE',
      desc: 'Upon reaching transit altitude, forward pusher propulsion drives forward airspeed. Fixed wings create natural Bernoulli lift, cutting vertical power drain completely.',
      motorState: 'VTOL MOTORS FEATHERED • REAR PUSHER ENGAGED',
      isHovering: false,
      isCruising: true,
    },
    search: {
      headline: 'PRECISE DURING SEARCH.',
      modeLabel: 'VTOL TARGET HOVER',
      desc: 'At ground zero, the aircraft disengages cruise to hover stationarily over the disaster zone, stabilizing the radiometric thermal and optical sensor suite.',
      motorState: '4 VTOL MOTORS RE-ENGAGED • SUB-METER POSITION LOCK',
      isHovering: true,
      isCruising: false,
    },
  };

  const current = modeData[activeMode];

  return (
    <div className="w-full h-full flex flex-col justify-between p-6 md:p-12 lg:p-16 max-w-7xl mx-auto text-[#FDF9F5] relative">
      {/* Top Editorial Index */}
      <div className="flex items-center justify-between border-b border-white/15 pb-4 text-xs font-mono tracking-widest text-[#FDF9F5]/70 uppercase">
        <div className="flex items-center gap-3">
          <span className="font-bold text-[#E65A33]">05 // FLIGHT PRINCIPLE</span>
          <span>·</span>
          <span>AERODYNAMIC ADVANTAGE</span>
        </div>
        <div>
          <span className="font-mono text-[11px] text-white/50">HYBRID VTOL / QUADPLANE PROFILE</span>
        </div>
      </div>

      {/* Main Container */}
      <div className="my-auto py-6 space-y-10 relative z-10">
        {/* Subtle geometric hairline decoration */}
        <div className="geo-circle-line w-80 h-80 -top-16 -left-16 opacity-25 border-white/20" />

        {/* Monumental Headline */}
        <div className="space-y-4">
          <span className="eyebrow-label text-[#E65A33]">
            THE AERODYNAMIC SECRET
          </span>
          <h1 className="headline-section text-5xl sm:text-7xl lg:text-8xl xl:text-9xl text-white text-balance">
            THE DIFFERENCE<br />IS IN THE FLIGHT.
          </h1>
        </div>

        {/* 3 Core Editorial Statements matching reference cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
          {/* Card 1: VERTICAL WHEN NEEDED */}
          <button
            onClick={() => setActiveMode('vtol')}
            className={`p-6 text-left border transition-all cursor-pointer ${
              activeMode === 'vtol'
                ? 'bg-white/10 border-[#E65A33] shadow-xl'
                : 'bg-white/5 border-white/10 hover:bg-white/[0.08]'
            }`}
          >
            <div className="flex items-center justify-between text-xs font-mono text-white/50 mb-3">
              <span>PHASE 01</span>
              <span>LAUNCH</span>
            </div>
            <h2 className="font-display text-xl sm:text-2xl font-black uppercase tracking-tight text-white mb-2">
              VERTICAL WHEN NEEDED.
            </h2>
            <p className="text-xs text-[#FDF9F5]/70 font-body leading-relaxed">
              Unrestricted mountain deployment without runways, nets, or launch catapults.
            </p>
          </button>

          {/* Card 2: EFFICIENT IN TRANSIT */}
          <button
            onClick={() => setActiveMode('cruise')}
            className={`p-6 text-left border transition-all cursor-pointer ${
              activeMode === 'cruise'
                ? 'bg-white/10 border-[#05DF72] shadow-xl'
                : 'bg-white/5 border-white/10 hover:bg-white/[0.08]'
            }`}
          >
            <div className="flex items-center justify-between text-xs font-mono text-[#05DF72] mb-3">
              <span>PHASE 02</span>
              <span>TRANSIT</span>
            </div>
            <h2 className="font-display text-xl sm:text-2xl font-black uppercase tracking-tight text-white mb-2">
              EFFICIENT IN TRANSIT.
            </h2>
            <p className="text-xs text-[#FDF9F5]/70 font-body leading-relaxed">
              Wings generate lift during forward cruise, eliminating constant rotor drag over 10+ km.
            </p>
          </button>

          {/* Card 3: PRECISE DURING SEARCH */}
          <button
            onClick={() => setActiveMode('search')}
            className={`p-6 text-left border transition-all cursor-pointer ${
              activeMode === 'search'
                ? 'bg-white/10 border-[#E65A33] shadow-xl'
                : 'bg-white/5 border-white/10 hover:bg-white/[0.08]'
            }`}
          >
            <div className="flex items-center justify-between text-xs font-mono text-[#E65A33] mb-3">
              <span>PHASE 03</span>
              <span>LOITER</span>
            </div>
            <h2 className="font-display text-xl sm:text-2xl font-black uppercase tracking-tight text-white mb-2">
              PRECISE DURING SEARCH.
            </h2>
            <p className="text-xs text-[#FDF9F5]/70 font-body leading-relaxed">
              Stationary hover delivers stable subsurface radiometric thermal sensor lock.
            </p>
          </button>
        </div>

        {/* Cinematic Animated Aircraft Arena */}
        <div className="p-8 bg-black/50 border border-white/15 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left: Animated Aircraft Graphic */}
          <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-4">
            <div className="relative w-full max-w-sm flex items-center justify-center">
              <QuadplaneSVG
                className="w-full max-w-[280px] h-auto"
                isHovering={current.isHovering}
                isCruising={current.isCruising}
                color={activeMode === 'cruise' ? '#05DF72' : '#E65A33'}
                scale={1.1}
              />
            </div>
            <div className="mt-4 px-3 py-1 bg-white/10 border border-white/20 text-xs font-mono tracking-widest text-[#05DF72]">
              CURRENT MODE: {current.modeLabel}
            </div>
          </div>

          {/* Right: Technical Explanation Callout */}
          <div className="w-full md:w-1/2 space-y-4 font-mono">
            <div className="space-y-1">
              <span className="text-xs text-[#E65A33] uppercase tracking-widest">
                PROPULSION STATUS:
              </span>
              <div className="text-sm font-bold text-white">
                {current.motorState}
              </div>
            </div>

            <div className="space-y-1 border-t border-white/10 pt-3">
              <span className="text-xs text-white/50 uppercase tracking-widest">
                STAGE DESCRIPTION:
              </span>
              <p className="text-xs text-[#FDF9F5]/80 font-body leading-relaxed">
                {current.desc}
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={onNext}
                className="inline-flex items-center gap-3 px-6 py-3.5 bg-[#E65A33] text-white text-xs font-mono font-bold uppercase tracking-widest hover:bg-[#d04a25] transition-colors cursor-pointer"
              >
                <span>EXPLORE AIRFRAME ANATOMY</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Editorial Footnote */}
      <div className="border-t border-white/15 pt-3 flex items-center justify-between text-xs text-white/50 font-body">
        <span>SCENARIO STEP 5: AERODYNAMIC TRANSLATION BETWEEN FLIGHT REGIMES</span>
        <span className="font-mono">HYBRID VTOL / QUADPLANE ADVANTAGE</span>
      </div>
    </div>
  );
};
