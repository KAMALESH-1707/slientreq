import React, { useState } from 'react';
import { ArrowRight, Plane, Crosshair, Cpu, Wind, Layers } from 'lucide-react';

interface SectionProps {
  onNext: () => void;
}

interface ComponentFeature {
  id: string;
  name: string;
  shortDesc: string;
  role: string;
  spec: string;
  x: number; // percentage on image
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
    x: 28,
    y: 55,
  },
  {
    id: 'cruise-propulsion',
    name: 'CRUISE PROPULSION',
    shortDesc: 'Dedicated forward thrust motor disengages VTOL lift motors during horizontal cruise to minimize continuous power consumption.',
    role: 'Horizontal Transit Thruster',
    spec: 'Efficient brushless pusher motor tuned for endurance flight',
    x: 82,
    y: 52,
  },
  {
    id: 'sensing-payload',
    name: 'FRONT SENSING PAYLOAD',
    shortDesc: 'Nose-mounted dual RGB optical and long-wave infrared (LWIR) radiometric thermal camera gimbal.',
    role: 'Subsurface Heat & Optical Sensing',
    spec: 'Dual-spectral stabilized gimbal with onboard edge neural inference',
    x: 18,
    y: 42,
  },
];

export const Section4Solution: React.FC<SectionProps> = ({ onNext }) => {
  const [selectedComp, setSelectedComp] = useState<ComponentFeature>(UAV_COMPONENTS[0]);

  return (
    <div className="w-full h-full flex flex-col justify-between p-6 md:p-12 lg:p-16 max-w-7xl mx-auto text-white">
      {/* Top Editorial Index */}
      <div className="flex items-center justify-between border-b border-white/20 pb-4 text-xs font-mono tracking-widest text-white/80 uppercase">
        <div className="flex items-center gap-3">
          <span className="font-bold text-[#211815] bg-white px-2 py-0.5">04 // SYSTEM ARCHITECTURE</span>
          <span>·</span>
          <span>QUADPLANE PLATFORM</span>
        </div>
        <div>
          <span>CONCEPT: RUNWAY-FREE HYBRID AIRFRAME</span>
        </div>
      </div>

      {/* Main Asymmetric Split Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center my-auto py-6">
        {/* Left Column: Oversized Typography & Selected Component Details */}
        <div className="lg:col-span-5 flex flex-col justify-center space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold font-mono tracking-widest text-[#211815] uppercase bg-white/30 px-2 py-0.5 inline-block">
              ACT III — THE SOLUTION
            </span>
            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black text-white leading-[0.92] tracking-tighter uppercase text-balance">
              HYBRID<br />VTOL UAV.
            </h1>
          </div>

          <p className="text-base sm:text-lg text-white/90 leading-relaxed font-body max-w-md">
            SilentResQ bridges the gap between rotary hover agility and fixed-wing long-distance range to penetrate inaccessible disaster zones.
          </p>

          {/* Interactive Feature Deep Dive */}
          <div className="p-4 bg-[#211815] border border-white/10 text-[#F6EEE3] space-y-3">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-[#EB5A36] font-bold">SELECTED MODULE</span>
              <span className="text-white/50">{selectedComp.role}</span>
            </div>
            <h3 className="font-display text-xl font-bold uppercase tracking-tight text-white">
              {selectedComp.name}
            </h3>
            <p className="text-xs text-white/80 font-body leading-relaxed">
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
                  className={`p-2.5 text-left text-xs font-mono uppercase tracking-wider transition-all border ${
                    isSelected
                      ? 'bg-white text-[#211815] font-bold border-white'
                      : 'bg-black/20 text-white/80 border-white/20 hover:bg-black/40'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="truncate">{comp.name.split(' ')[0]}</span>
                    {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-[#E65100]" />}
                  </div>
                </button>
              );
            })}
          </div>

          <div className="pt-2">
            <button
              onClick={onNext}
              className="inline-flex items-center gap-3 px-6 py-3.5 bg-[#211815] text-[#F6EEE3] text-xs font-bold uppercase tracking-widest hover:bg-black transition-colors"
            >
              <span>INSPECT DUAL-VISION SENSOR</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Right Column: Visual Area with Quadplane Photo and Interactive Hotspots */}
        <div className="lg:col-span-7 relative">
          <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#17110F] border border-white/20 shadow-2xl">
            {/* Generated Hybrid VTOL UAV Drone Image */}
            <img
              src="/src/assets/images/hybrid_vtol_drone_1790138117665.jpg"
              alt="SilentResQ Hybrid VTOL Quadplane"
              className="w-full h-full object-cover brightness-105"
              referrerPolicy="no-referrer"
            />

            {/* Gradient Scrim for Contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none" />

            {/* Interactive Pins / Hotspots on UAV Body */}
            {UAV_COMPONENTS.map((comp) => {
              const isSelected = comp.id === selectedComp.id;
              return (
                <button
                  key={comp.id}
                  onClick={() => setSelectedComp(comp)}
                  className="absolute -translate-x-1/2 -translate-y-1/2 group transition-transform duration-200 focus:outline-none"
                  style={{ left: `${comp.x}%`, top: `${comp.y}%` }}
                >
                  <div className="relative flex items-center justify-center">
                    {/* Outer ring */}
                    <span
                      className={`absolute w-8 h-8 rounded-full border transition-all ${
                        isSelected
                          ? 'border-[#05DF72] scale-125 animate-ping'
                          : 'border-white/40 group-hover:border-white'
                      }`}
                    />
                    {/* Inner core */}
                    <span
                      className={`w-4 h-4 rounded-full flex items-center justify-center border shadow-md transition-colors ${
                        isSelected
                          ? 'bg-[#05DF72] border-white text-black'
                          : 'bg-[#211815] border-white text-white group-hover:bg-[#E65100]'
                      }`}
                    >
                      <Crosshair className="w-2.5 h-2.5" />
                    </span>
                  </div>

                  {/* Tooltip Tag */}
                  <span
                    className={`absolute left-1/2 -translate-x-1/2 top-7 px-2 py-0.5 text-[10px] font-mono tracking-wider whitespace-nowrap shadow-lg transition-all ${
                      isSelected
                        ? 'bg-white text-[#211815] font-bold opacity-100'
                        : 'bg-black/75 text-white opacity-0 group-hover:opacity-100'
                    }`}
                  >
                    {comp.name}
                  </span>
                </button>
              );
            })}

            {/* Technical HUD Overlay Watermark */}
            <div className="absolute top-4 left-4 text-[10px] font-mono text-white/70 tracking-widest">
              [ PLATFORM CONFIG: QUADPLANE // 4+1 PROPULSION ]
            </div>
            <div className="absolute bottom-4 left-4 text-[10px] font-mono text-white/80 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#05DF72]" />
              <span>PAYLOAD CAPACITY: 2.2 KG RADIOMETRIC GIMBAL</span>
            </div>
            <div className="absolute bottom-4 right-4 text-[10px] font-mono text-white/60">
              VTOL HOVER + CRUISE WING
            </div>
          </div>

          <div className="flex justify-between items-center mt-3 text-[11px] font-mono text-white/80">
            <span>AIRFRAME: AERODYNAMIC CARBON COMPOSITE</span>
            <span>SIH 2026 PROTOTYPE SPECIFICATION</span>
          </div>
        </div>
      </div>

      {/* Bottom Editorial Footnote */}
      <div className="border-t border-white/20 pt-3 flex items-center justify-between text-xs text-white/70 font-body">
        <span>SCENARIO STEP 4: QUADPLANE DEPLOYMENT INTO THE DISASTER CORRIDOR</span>
        <span className="font-mono">HYBRID VTOL RECONNAISSANCE</span>
      </div>
    </div>
  );
};
