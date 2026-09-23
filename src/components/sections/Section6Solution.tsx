import React, { useState } from 'react';
import { ArrowRight, Crosshair } from 'lucide-react';
import { QuadplaneSVG } from '../uav/UavIllustrations';

interface SectionProps {
  onNext: () => void;
}

interface ComponentFeature {
  id: string;
  name: string;
  shortDesc: string;
  role: string;
  spec: string;
  x: number;
  y: number;
}

const UAV_COMPONENTS: ComponentFeature[] = [
  {
    id: 'fixed-wing',
    name: 'FIXED WING AIRFRAME',
    shortDesc: 'Generates aerodynamic lift during high-speed transit across rugged mountain ranges.',
    role: 'Lift-Generating Aerofoil',
    spec: 'High aspect-ratio composite wing, minimal drag profile',
    x: 50,
    y: 35,
  },
  {
    id: 'vtol-motors',
    name: '4 DEDICATED VTOL MOTORS',
    shortDesc: 'Twin carbon boom quad-rotor configuration enables vertical takeoff and precise stationary hover without a runway.',
    role: 'Vertical Lift & Hover Array',
    spec: '4x high-torque brushless motors with instant thrust vectoring',
    x: 32,
    y: 52,
  },
  {
    id: 'cruise-propulsion',
    name: 'CRUISE PROPULSION',
    shortDesc: 'Dedicated forward thrust motor disengages VTOL lift motors during horizontal cruise to minimize continuous power consumption.',
    role: 'Horizontal Transit Thruster',
    spec: 'Efficient brushless pusher motor tuned for endurance flight',
    x: 82,
    y: 54,
  },
  {
    id: 'sensing-payload',
    name: 'FRONT SENSING PAYLOAD',
    shortDesc: 'Nose-mounted dual RGB optical and long-wave infrared (LWIR) radiometric thermal camera gimbal.',
    role: 'Subsurface Heat & Optical Sensing',
    spec: 'Dual-spectral stabilized gimbal with onboard edge neural inference',
    x: 18,
    y: 45,
  },
];

export const Section6Solution: React.FC<SectionProps> = ({ onNext }) => {
  const [selectedComp, setSelectedComp] = useState<ComponentFeature>(UAV_COMPONENTS[0]);
  const [viewMode, setViewMode] = useState<'photo' | 'schematic'>('photo');

  return (
    <div className="w-full h-full flex flex-col justify-between p-6 md:p-12 lg:p-16 max-w-7xl mx-auto text-[#FDF9F5] relative">
      {/* Top Editorial Index */}
      <div className="flex items-center justify-between border-b border-white/20 pb-4 text-xs font-mono tracking-widest text-[#FDF9F5]/80 uppercase">
        <div className="flex items-center gap-3">
          <span className="font-bold text-[#32160E] bg-white px-2 py-0.5">06 // AIRFRAME ANATOMY</span>
          <span>·</span>
          <span>QUADPLANE PLATFORM</span>
        </div>
        <div>
          <span className="font-mono text-[11px] text-white/60">CONCEPT: RUNWAY-FREE HYBRID AIRFRAME</span>
        </div>
      </div>

      {/* Main Asymmetric Split Layout matching reference "A TEAM OF REBELS, DREAMERS" */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center my-auto py-6 relative z-10">
        {/* Subtle geometric hairline decoration */}
        <div className="geo-circle-line w-72 h-72 -bottom-16 -left-16 opacity-30 border-white/20" />

        {/* Left Column: Oversized Typography & Selected Component Details */}
        <div className="lg:col-span-5 flex flex-col justify-center space-y-6">
          <div className="space-y-3">
            <span className="eyebrow-label text-[#32160E] bg-white/40 px-2 py-0.5 inline-block">
              ACT III — THE SOLUTION
            </span>
            <h1 className="headline-section text-5xl sm:text-7xl lg:text-8xl xl:text-9xl text-white text-balance">
              HYBRID<br />VTOL UAV.
            </h1>
          </div>

          <p className="text-base sm:text-lg lg:text-xl text-[#FDF9F5]/90 leading-relaxed font-body max-w-md">
            SilentResQ bridges the gap between rotary hover agility and fixed-wing long-distance range to penetrate inaccessible disaster zones.
          </p>

          {/* Interactive Feature Deep Dive */}
          <div className="p-4 bg-[#32160E] border border-white/15 text-[#FDF9F5] space-y-3 shadow-xl">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-[#E65A33] font-bold">SELECTED MODULE</span>
              <span className="text-white/50">{selectedComp.role}</span>
            </div>
            <h3 className="font-display text-xl font-black uppercase tracking-tight text-white">
              {selectedComp.name}
            </h3>
            <p className="text-xs text-[#FDF9F5]/80 font-body leading-relaxed">
              {selectedComp.shortDesc}
            </p>
            <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-white/60">
              <span>DESIGN SPEC:</span>
              <span className="text-white/90">{selectedComp.spec}</span>
            </div>
          </div>

          {/* 4 Interactive Quick Selector Tabs */}
          <div className="grid grid-cols-2 gap-2">
            {UAV_COMPONENTS.map((comp) => {
              const isSelected = comp.id === selectedComp.id;
              return (
                <button
                  key={comp.id}
                  onClick={() => setSelectedComp(comp)}
                  className={`p-2.5 text-left text-xs font-mono uppercase tracking-wider transition-all border cursor-pointer ${
                    isSelected
                      ? 'bg-white text-[#32160E] font-bold border-white'
                      : 'bg-black/20 text-white/80 border-white/20 hover:bg-black/40'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="truncate">{comp.name.split(' ')[0]}</span>
                    {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-[#E65A33]" />}
                  </div>
                </button>
              );
            })}
          </div>

          <div className="pt-2 flex items-center gap-3">
            <button
              onClick={onNext}
              className="inline-flex items-center gap-3 px-6 py-3.5 bg-[#32160E] text-[#FDF9F5] text-xs font-mono font-bold uppercase tracking-widest hover:bg-black transition-colors cursor-pointer"
            >
              <span>INSPECT DUAL-VISION SENSOR</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode(viewMode === 'photo' ? 'schematic' : 'photo')}
              className="px-4 py-3.5 border border-white/30 text-xs font-mono uppercase tracking-wider hover:bg-white/10 transition-colors cursor-pointer"
            >
              {viewMode === 'photo' ? 'VIEW SCHEMATIC' : 'VIEW PHOTO'}
            </button>
          </div>
        </div>

        {/* Right Column: Visual Area with Quadplane Photo / Blueprint and Interactive Hotspots */}
        <div className="lg:col-span-7 relative">
          <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#220E08] border border-white/25 shadow-2xl">
            {viewMode === 'photo' ? (
              <>
                <img
                  src="/src/assets/images/silentresq_quadplane_exact_1790139571100.jpg"
                  alt="SilentResQ Fixed-Wing Hybrid VTOL Quadplane"
                  className="w-full h-full object-cover brightness-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none" />
              </>
            ) : (
              <div className="w-full h-full p-8 flex items-center justify-center bg-[#220E08]">
                <QuadplaneSVG className="w-full max-w-lg h-auto" isHovering={true} isCruising={true} color="#E65A33" />
              </div>
            )}

            {/* Interactive Hotspots on UAV */}
            {UAV_COMPONENTS.map((comp) => {
              const isSelected = comp.id === selectedComp.id;
              return (
                <button
                  key={comp.id}
                  onClick={() => setSelectedComp(comp)}
                  className="absolute -translate-x-1/2 -translate-y-1/2 group transition-transform duration-200 focus:outline-none z-20 cursor-pointer"
                  style={{ left: `${comp.x}%`, top: `${comp.y}%` }}
                >
                  <div className="relative flex items-center justify-center">
                    <span
                      className={`absolute w-8 h-8 rounded-full border transition-all ${
                        isSelected
                          ? 'border-[#05DF72] scale-125 animate-ping'
                          : 'border-white/40 group-hover:border-white'
                      }`}
                    />
                    <span
                      className={`w-4 h-4 rounded-full flex items-center justify-center border shadow-md transition-colors ${
                        isSelected
                          ? 'bg-[#05DF72] border-white text-black'
                          : 'bg-[#32160E] border-white text-white group-hover:bg-[#E65A33]'
                      }`}
                    >
                      <Crosshair className="w-2.5 h-2.5" />
                    </span>
                  </div>

                  <span
                    className={`absolute left-1/2 -translate-x-1/2 top-7 px-2 py-0.5 text-[10px] font-mono tracking-wider whitespace-nowrap shadow-lg transition-all ${
                      isSelected
                        ? 'bg-white text-[#32160E] font-bold opacity-100'
                        : 'bg-black/75 text-white opacity-0 group-hover:opacity-100'
                    }`}
                  >
                    {comp.name}
                  </span>
                </button>
              );
            })}

            <div className="absolute top-4 left-4 text-[10px] font-mono text-white/70 tracking-widest">
              [ PLATFORM CONFIG: FIXED-WING HYBRID VTOL / QUADPLANE ]
            </div>
            <div className="absolute bottom-4 left-4 text-[10px] font-mono text-white/80 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#05DF72]" />
              <span>PROPULSION: 4 VTOL LIFT + 1 REAR PUSHER CRUISE</span>
            </div>
            <div className="absolute bottom-4 right-4 text-[10px] font-mono text-white/60">
              PAYLOAD: DUAL RGB + THERMAL
            </div>
          </div>

          <div className="flex justify-between items-center mt-3 text-[11px] font-mono text-[#FDF9F5]/80">
            <span>AIRFRAME: AERODYNAMIC CARBON COMPOSITE QUADPLANE</span>
            <span>SIH 2026 PROTOTYPE ARCHITECTURE</span>
          </div>
        </div>
      </div>

      {/* Bottom Editorial Footnote */}
      <div className="border-t border-white/20 pt-3 flex items-center justify-between text-xs text-white/70 font-body">
        <span>SCENARIO STEP 6: QUADPLANE DEPLOYMENT INTO THE DISASTER CORRIDOR</span>
        <span className="font-mono">HYBRID VTOL RECONNAISSANCE</span>
      </div>
    </div>
  );
};
