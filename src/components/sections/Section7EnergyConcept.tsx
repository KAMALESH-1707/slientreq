import React, { useState } from 'react';
import { ArrowRight, Plane, ArrowUp, Compass, BatteryCharging, Wind } from 'lucide-react';

interface SectionProps {
  onNext: () => void;
}

type FlightPhase = 'takeoff' | 'cruise' | 'search';

export const Section7EnergyConcept: React.FC<SectionProps> = ({ onNext }) => {
  const [activePhase, setActivePhase] = useState<FlightPhase>('cruise');

  const phases = {
    takeoff: {
      title: '01. VTOL TAKEOFF',
      subtitle: 'Zero Runway Requirement',
      propulsion: '4 Dedicated Vertical Motors Active',
      wingsRole: 'Passive (Low Speed)',
      desc: 'Ascends vertically from tight ravines, rubble piles, or vehicle beds without requiring flat runway infrastructure.',
      diagramStatus: 'ROTARY LIFT ENGAGED',
    },
    cruise: {
      title: '02. FIXED-WING CRUISE',
      subtitle: 'Aerodynamic Transit Efficiency',
      propulsion: 'Forward Pusher Motor Active • VTOL Motors Off',
      wingsRole: 'Generates 100% Aerodynamic Lift',
      desc: 'Fixed wings generate lift as air flows over aerofoils. Designed to reduce continuous power demand over long distances compared with full-time rotary flight.',
      diagramStatus: 'WING LIFT ACTIVE // ROTORS FEATHERED',
    },
    search: {
      title: '03. VTOL SEARCH',
      subtitle: 'Precision Target Hover',
      propulsion: '4 Vertical Motors Re-Engaged',
      wingsRole: 'Secondary Stabilization',
      desc: 'Disengages high-speed forward cruise to hover motionless directly above the suspected disaster coordinates for deep thermal scanning.',
      diagramStatus: 'HOVER SCANNING ACTIVE',
    },
  };

  const current = phases[activePhase];

  return (
    <div className="w-full h-full flex flex-col justify-between p-6 md:p-12 lg:p-16 max-w-7xl mx-auto text-[#211815]">
      {/* Top Editorial Index */}
      <div className="flex items-center justify-between border-b border-[#211815]/10 pb-4 text-xs font-mono tracking-widest text-[#211815]/70 uppercase">
        <div className="flex items-center gap-3">
          <span className="font-bold text-[#E65100]">07 // FLIGHT DYNAMICS</span>
          <span>·</span>
          <span>HYBRID FLIGHT PROFILE</span>
        </div>
        <div>
          <span>AERODYNAMIC DESIGN PRINCIPLE</span>
        </div>
      </div>

      {/* Main Asymmetric Split Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center my-auto py-6">
        {/* Left Column: Oversized Editorial Typography */}
        <div className="lg:col-span-5 flex flex-col justify-center space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold font-mono tracking-widest text-[#E65100] uppercase">
              ACT VI — AERODYNAMICS
            </span>
            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black text-[#211815] leading-[0.92] tracking-tighter uppercase text-balance">
              HYBRID<br />ENERGY.
            </h1>
          </div>

          <p className="text-base sm:text-lg text-[#211815]/80 leading-relaxed font-body max-w-md">
            Multirotors spend massive energy battling gravity constantly. The SilentResQ quadplane trades rotor thrust for aerofoil lift during forward transit.
          </p>

          {/* Active Phase Card */}
          <div className="p-4 bg-[#211815] text-[#F6EEE3] border border-[#211815]/20 space-y-3">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-[#E65100] font-bold">{current.title}</span>
              <span className="text-white/60">{current.subtitle}</span>
            </div>
            <p className="text-xs text-white/80 font-body leading-relaxed">
              {current.desc}
            </p>
            <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-white/60">
              <span>MOTOR STATE:</span>
              <span className="text-[#05DF72]">{current.propulsion}</span>
            </div>
          </div>

          {/* Interactive Phase Selectors */}
          <div className="grid grid-cols-3 gap-2">
            <button
              onClick={() => setActivePhase('takeoff')}
              className={`p-2.5 text-center text-xs font-mono uppercase tracking-wider border transition-all ${
                activePhase === 'takeoff'
                  ? 'bg-[#211815] text-white font-bold border-[#211815]'
                  : 'bg-white/60 border-[#211815]/20 hover:bg-white'
              }`}
            >
              1. TAKEOFF
            </button>
            <button
              onClick={() => setActivePhase('cruise')}
              className={`p-2.5 text-center text-xs font-mono uppercase tracking-wider border transition-all ${
                activePhase === 'cruise'
                  ? 'bg-[#E65100] text-white font-bold border-[#E65100]'
                  : 'bg-white/60 border-[#211815]/20 hover:bg-white'
              }`}
            >
              2. CRUISE
            </button>
            <button
              onClick={() => setActivePhase('search')}
              className={`p-2.5 text-center text-xs font-mono uppercase tracking-wider border transition-all ${
                activePhase === 'search'
                  ? 'bg-[#211815] text-white font-bold border-[#211815]'
                  : 'bg-white/60 border-[#211815]/20 hover:bg-white'
              }`}
            >
              3. SEARCH
            </button>
          </div>

          <div className="pt-2">
            <button
              onClick={onNext}
              className="inline-flex items-center gap-3 px-6 py-3.5 bg-[#211815] text-[#F6EEE3] text-xs font-bold uppercase tracking-widest hover:bg-[#E65100] transition-colors"
            >
              <span>LOCK SURVIVOR COORDINATES</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Right Column: Visual Aerodynamic Flight Profile Envelope Diagram */}
        <div className="lg:col-span-7 relative">
          <div className="p-6 md:p-8 bg-[#211815] border border-[#211815]/20 text-[#F6EEE3] shadow-2xl relative overflow-hidden">
            {/* Header in Diagram */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <span className="font-mono text-xs text-white/70 uppercase">
                FLIGHT ENVELOPE PROFILE
              </span>
              <span className="text-xs font-mono text-[#05DF72] flex items-center gap-1.5">
                <BatteryCharging className="w-3.5 h-3.5" />
                TRANSIT EFFICIENCY MAXIMIZED
              </span>
            </div>

            {/* Flight Path SVG Graphic */}
            <div className="my-6 relative h-48 sm:h-56 bg-black/40 border border-white/10 overflow-hidden flex items-center justify-center">
              <svg className="w-full h-full p-4" viewBox="0 0 600 220" preserveAspectRatio="none">
                {/* Mountain Ridge Profile */}
                <path
                  d="M 0 200 L 100 170 L 220 190 L 380 150 L 480 180 L 600 200 L 600 220 L 0 220 Z"
                  fill="rgba(255,255,255,0.05)"
                />

                {/* Flight Path Curve: Takeoff (0-150) -> Cruise (150-450) -> Descent/Hover (450-580) */}
                <path
                  d="M 50 170 C 80 80, 140 60, 200 60 L 420 60 C 470 60, 520 100, 550 140"
                  fill="none"
                  stroke="rgba(255,255,255,0.2)"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                />

                {/* Highlighted active path segment */}
                {activePhase === 'takeoff' && (
                  <path
                    d="M 50 170 C 80 80, 140 60, 200 60"
                    fill="none"
                    stroke="#E65100"
                    strokeWidth="3"
                  />
                )}
                {activePhase === 'cruise' && (
                  <path
                    d="M 200 60 L 420 60"
                    fill="none"
                    stroke="#05DF72"
                    strokeWidth="3"
                  />
                )}
                {activePhase === 'search' && (
                  <path
                    d="M 420 60 C 470 60, 520 100, 550 140"
                    fill="none"
                    stroke="#EB5A36"
                    strokeWidth="3"
                  />
                )}

                {/* Markers on path */}
                {/* Phase 1 Node */}
                <circle cx="50" cy="170" r="5" fill="#E65100" />
                <text x="35" y="195" fill="#E65100" fontSize="10" fontFamily="monospace">VTOL LAUNCH</text>

                {/* Phase 2 Node */}
                <circle cx="310" cy="60" r="5" fill="#05DF72" />
                <text x="260" y="45" fill="#05DF72" fontSize="10" fontFamily="monospace">FIXED-WING CRUISE</text>

                {/* Phase 3 Node */}
                <circle cx="550" cy="140" r="5" fill="#EB5A36" />
                <text x="500" y="165" fill="#EB5A36" fontSize="10" fontFamily="monospace">VTOL SEARCH</text>
              </svg>

              {/* Status overlay label inside graphic */}
              <div className="absolute bottom-3 left-4 text-[10px] font-mono text-white/70 bg-black/70 px-2 py-1 border border-white/10">
                CURRENT PROFILE: {current.diagramStatus}
              </div>
            </div>

            {/* Comparison Box: Multirotor vs Quadplane */}
            <div className="grid grid-cols-2 gap-4 text-xs font-mono border-t border-white/10 pt-4">
              <div>
                <span className="text-white/50 block">PURE MULTIROTOR:</span>
                <span className="text-white/80">Continuous rotor draw against gravity</span>
              </div>
              <div>
                <span className="text-[#05DF72] block">SILENTRESQ QUADPLANE:</span>
                <span className="text-white">Aerodynamic wing lift during transit</span>
              </div>
            </div>

            {/* Measured Data Disclaimer */}
            <div className="mt-4 pt-3 border-t border-white/10 text-[11px] font-mono text-white/50">
              ENGINEERING NOTE: Fixed-wing flight reduces power demand during sustained transit compared to hovering rotocraft. Quantitative percentage savings will be verified via hardware bench testing.
            </div>
          </div>

          <div className="flex justify-between items-center mt-3 text-[11px] font-mono text-[#211815]/50">
            <span>TRANSIT PRINCIPLE: BERNOULLI LIFT VIA FIXED AEROFOIL</span>
            <span>ENDURANCE FOCUS: MOUNTAIN RANGE PENETRATION</span>
          </div>
        </div>
      </div>

      {/* Bottom Editorial Footnote */}
      <div className="border-t border-[#211815]/10 pt-3 flex items-center justify-between text-xs text-[#211815]/60 font-body">
        <span>SCENARIO STEP 7: EFFICIENT FLIGHT ARCHITECTURE FOR REMOTE CANYONS</span>
        <span className="font-mono">HYBRID VTOL TRANSITION</span>
      </div>
    </div>
  );
};
