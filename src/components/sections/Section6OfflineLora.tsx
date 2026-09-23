import React, { useState, useEffect } from 'react';
import { ArrowRight, WifiOff, Radio, RadioTower, Building2, Users, Send, Check } from 'lucide-react';

interface SectionProps {
  onNext: () => void;
}

export const Section6OfflineLora: React.FC<SectionProps> = ({ onNext }) => {
  const [activeStep, setActiveStep] = useState<number>(1);
  const [isTransmitting, setIsTransmitting] = useState<boolean>(true);

  useEffect(() => {
    if (!isTransmitting) return;
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev >= 4 ? 1 : prev + 1));
    }, 2200);
    return () => clearInterval(timer);
  }, [isTransmitting]);

  const steps = [
    {
      num: '01',
      node: 'UAV PLATFORM',
      subtitle: 'Edge AI Detection',
      desc: 'Onboard edge computer packages GPS coordinates, time, and compressed thermal bounding box into an ultralight 64-byte payload.',
      icon: Radio,
    },
    {
      num: '02',
      node: 'LoRa SUB-GHZ LINK',
      subtitle: 'Non-Line-Of-Sight Transmission',
      desc: 'Sub-GHz radio (868/915 MHz) penetrates dense mountain canyons, bypassing blocked lines-of-sight and severed fiber networks.',
      icon: RadioTower,
    },
    {
      num: '03',
      node: 'BUILDING HUB',
      subtitle: 'Mountain Base Station',
      desc: 'Local emergency command hub receives and decrypts the alert packet, populating the offline tactical map instantly.',
      icon: Building2,
    },
    {
      num: '04',
      node: 'RESCUE TEAM',
      subtitle: 'Tactical Ground Dispatch',
      desc: 'Handheld responder terminals receive pinpoint coordinates (34°18\'N 77°35\'E) eliminating random searching across acres of debris.',
      icon: Users,
    },
  ];

  return (
    <div className="w-full h-full flex flex-col justify-between p-6 md:p-12 lg:p-16 max-w-7xl mx-auto text-[#211815]">
      {/* Top Editorial Index & Stark "NO INTERNET" Banner */}
      <div className="flex items-center justify-between border-b border-[#211815]/10 pb-4 text-xs font-mono tracking-widest text-[#211815]/70 uppercase">
        <div className="flex items-center gap-3">
          <span className="font-bold text-[#E65100]">06 // TELEMETRY CHAIN</span>
          <span>·</span>
          <span>OFFLINE MESH TOPOLOGY</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-1 bg-[#211815] text-white font-bold tracking-wider flex items-center gap-1.5">
            <WifiOff className="w-3.5 h-3.5 text-[#EB5A36]" />
            NO INTERNET REQUIRED
          </span>
        </div>
      </div>

      {/* Main Asymmetric Split Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center my-auto py-6">
        {/* Left Column: Oversized Editorial Typography */}
        <div className="lg:col-span-5 flex flex-col justify-center space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold font-mono tracking-widest text-[#E65100] uppercase">
              ACT V — CONNECTIVITY
            </span>
            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black text-[#211815] leading-[0.92] tracking-tighter uppercase text-balance">
              OFFLINE<br />LoRa LINK.
            </h1>
          </div>

          <p className="text-base sm:text-lg text-[#211815]/80 leading-relaxed font-body max-w-md">
            When all cellular infrastructure and internet towers are obliterated, SilentResQ forms an autonomous offline Sub-GHz telemetry corridor.
          </p>

          {/* Simulated Packet Specimen Box */}
          <div className="p-4 bg-[#211815] text-[#F6EEE3] border border-[#211815]/20 space-y-2 font-mono text-xs">
            <div className="flex items-center justify-between text-white/50 text-[11px]">
              <span>SIMULATED PACKET // PROTOCOL LoRaWAN</span>
              <span className="text-[#05DF72]">STATUS: DISPATCHED</span>
            </div>
            <div className="text-[#05DF72] font-semibold text-[13px] tracking-wide">
              [LAT: 34.3068°N | LON: 77.5867°E | CONF: 98% | TYPE: HUMAN_HEAT]
            </div>
            <p className="text-[11px] text-white/60 font-body">
              Compact payload design fits within standard LoRa duty cycles without requiring broadband backhaul.
            </p>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-3 pt-1">
            <button
              onClick={() => setIsTransmitting(!isTransmitting)}
              className="px-4 py-2.5 border border-[#211815]/30 text-xs font-mono uppercase tracking-wider hover:bg-[#211815]/5 transition-colors"
            >
              {isTransmitting ? 'PAUSE PULSE' : 'PLAY PULSE'}
            </button>
            <button
              onClick={onNext}
              className="px-6 py-3 bg-[#211815] text-[#F6EEE3] text-xs font-bold uppercase tracking-widest hover:bg-[#E65100] transition-colors flex items-center gap-2"
            >
              <span>INSPECT AERODYNAMICS</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Right Column: Visual Vertical Flow Diagram (UAV -> LoRa -> Building Hub -> Rescue Team) */}
        <div className="lg:col-span-7 relative">
          <div className="p-6 md:p-8 bg-[#211815] border border-[#211815]/20 text-[#F6EEE3] shadow-2xl relative overflow-hidden">
            {/* Background subtle mesh grid lines */}
            <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

            <div className="space-y-4 relative z-10">
              {steps.map((step, idx) => {
                const isCurrent = activeStep === idx + 1;
                const isPassed = activeStep > idx + 1;
                const IconComponent = step.icon;

                return (
                  <div key={step.num} className="relative">
                    {/* Connecting line between nodes */}
                    {idx < steps.length - 1 && (
                      <div className="absolute left-6 top-12 bottom-[-16px] w-[2px] bg-white/10 z-0">
                        {isPassed && <div className="w-full h-full bg-[#05DF72] transition-all duration-500" />}
                        {isCurrent && (
                          <div className="w-full h-full bg-gradient-to-b from-[#05DF72] to-transparent animate-pulse" />
                        )}
                      </div>
                    )}

                    {/* Step Card */}
                    <button
                      onClick={() => setActiveStep(idx + 1)}
                      className={`w-full text-left p-4 transition-all duration-300 flex items-start gap-4 relative z-10 border ${
                        isCurrent
                          ? 'bg-white/10 border-[#05DF72] shadow-lg'
                          : 'bg-white/5 border-white/10 hover:bg-white/[0.08]'
                      }`}
                    >
                      {/* Node Icon Avatar */}
                      <div
                        className={`w-12 h-12 shrink-0 rounded-none flex items-center justify-center transition-colors ${
                          isCurrent
                            ? 'bg-[#05DF72] text-[#17110F]'
                            : isPassed
                            ? 'bg-[#E65100] text-white'
                            : 'bg-white/10 text-white/50'
                        }`}
                      >
                        <IconComponent className="w-6 h-6" />
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="font-mono text-xs text-[#05DF72] font-bold">
                              {step.num}
                            </span>
                            <h3 className="font-display font-bold text-sm tracking-wide text-white uppercase">
                              {step.node}
                            </h3>
                          </div>
                          <span className="text-[10px] font-mono text-white/50 uppercase">
                            {step.subtitle}
                          </span>
                        </div>
                        <p className="text-xs text-white/70 font-body mt-1 leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    </button>
                  </div>
                );
              })}
            </div>

            {/* Simulation Rigor Note Box */}
            <div className="mt-6 pt-4 border-t border-white/10 text-[11px] font-mono text-white/50 flex items-start gap-2">
              <span className="text-[#E65100] font-bold shrink-0">[NOTE]</span>
              <span>
                SIMULATION PARAMETERS: Communication range, latency, and packet transfer rates represent simulated system design criteria for SIH 2026 and are subject to real-world test telemetry validation.
              </span>
            </div>
          </div>

          <div className="flex justify-between items-center mt-3 text-[11px] font-mono text-[#211815]/50">
            <span>OFFLINE TOPOLOGY: POINT-TO-MULTIPOINT</span>
            <span>RADIO SPECTRUM: 868 MHZ / ISM BAND</span>
          </div>
        </div>
      </div>

      {/* Bottom Editorial Footnote */}
      <div className="border-t border-[#211815]/10 pt-3 flex items-center justify-between text-xs text-[#211815]/60 font-body">
        <span>SCENARIO STEP 6: OFFLINE TELEMETRY DISPATCH TO FIELD SQUAD</span>
        <span className="font-mono">NO CELLULAR TOWER DEPENDENCY</span>
      </div>
    </div>
  );
};
