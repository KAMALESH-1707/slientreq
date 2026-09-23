import React, { useState, useEffect } from 'react';
import { ArrowRight, WifiOff, Radio, RadioTower, Building2, Users, Send, Check } from 'lucide-react';

interface SectionProps {
  onNext: () => void;
}

export const Section8OfflineLora: React.FC<SectionProps> = ({ onNext }) => {
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
    <div className="w-full h-full flex flex-col justify-between p-6 md:p-12 lg:p-16 max-w-7xl mx-auto text-[#32160E] relative">
      {/* Top Editorial Index & Stark "NO INTERNET" Banner */}
      <div className="flex items-center justify-between border-b border-[#32160E]/15 pb-4 text-xs font-mono tracking-widest text-[#32160E]/70 uppercase">
        <div className="flex items-center gap-3">
          <span className="font-bold text-[#E65A33]">08 // TELEMETRY CHAIN</span>
          <span>·</span>
          <span>OFFLINE MESH TOPOLOGY</span>
        </div>
        <div className="flex items-center gap-2">
          <WifiOff className="w-4 h-4 text-[#E65A33]" />
          <span className="font-bold text-[#E65A33]">NO INTERNET REQUIRED</span>
        </div>
      </div>

      {/* Main Asymmetric Split Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center my-auto py-6 relative z-10">
        {/* Subtle geometric hairline decoration */}
        <div className="geo-circle-line w-80 h-80 -top-20 -right-20 opacity-25 border-[#32160E]/20" />

        {/* Left Column: Oversized Editorial Typography */}
        <div className="lg:col-span-5 flex flex-col justify-center space-y-6">
          <div className="space-y-3">
            <span className="eyebrow-label text-[#E65A33]">
              ACT V — CONNECTIVITY
            </span>
            <h1 className="headline-section text-5xl sm:text-7xl lg:text-8xl xl:text-9xl text-[#32160E] text-balance">
              OFFLINE<br />LoRa.
            </h1>
          </div>

          <div className="space-y-2">
            <p className="headline-sub text-xl sm:text-2xl lg:text-3xl text-[#E65A33]">
              WHEN NETWORKS DIE, PEER-TO-PEER RADIO SURVIVES.
            </p>
            <p className="text-sm sm:text-base lg:text-lg text-[#32160E]/80 leading-relaxed font-body max-w-md">
              Commercial rescue apps fail when towers collapse. SilentResQ transmits lightweight tactical coordinate bursts using peer-to-peer Sub-GHz telemetry.
            </p>
          </div>

          {/* Real-time Packet Payload Display */}
          <div className="p-4 bg-[#32160E] text-[#FDF9F5] border border-white/10 space-y-2 font-mono text-xs shadow-xl">
            <div className="flex items-center justify-between text-[#05DF72]">
              <span className="flex items-center gap-1.5 font-bold">
                <Send className="w-3.5 h-3.5" />
                PACKET DISPATCHED (64 BYTES)
              </span>
              <span className="text-white/40">FREQ: 868 MHZ</span>
            </div>
            <div className="text-[11px] text-white/90 font-mono bg-black/50 p-2.5 border border-white/10 break-all leading-tight">
              0x535251|LAT:34.3068|LON:77.5867|ALT:3420M|SIG:HUMAN_36.8C|CONF:99.2%
            </div>
            <div className="flex items-center justify-between text-[10px] text-white/60 pt-1">
              <span>HOP: POINT-TO-POINT MESH</span>
              <span className="text-[#05DF72]">PACKET LOSS: 0.0%</span>
            </div>
          </div>

          <div className="pt-2">
            <button
              onClick={onNext}
              className="inline-flex items-center gap-3 px-6 py-3.5 bg-[#32160E] text-[#FDF9F5] text-xs font-mono font-bold uppercase tracking-widest hover:bg-[#E65A33] transition-colors cursor-pointer"
            >
              <span>LOCK SURVIVOR COORDINATES</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Right Column: Visual Telemetry Chain Flow Diagram */}
        <div className="lg:col-span-7 relative">
          <div className="p-6 md:p-8 bg-[#32160E] border border-white/15 text-[#FDF9F5] shadow-2xl space-y-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <span className="font-mono text-xs text-white/70 uppercase">
                EMERGENCY DISPATCH CHAIN
              </span>
              <button
                onClick={() => setIsTransmitting(!isTransmitting)}
                className="text-xs font-mono text-[#05DF72] hover:underline cursor-pointer"
              >
                {isTransmitting ? 'PAUSE PULSE' : 'RESUME PULSE'}
              </button>
            </div>

            {/* 4-Node Linear Chain Flow */}
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 relative">
              {steps.map((s, idx) => {
                const isActive = activeStep === idx + 1;
                const isPassed = activeStep > idx + 1;
                const IconComponent = s.icon;

                return (
                  <div
                    key={s.num}
                    onClick={() => setActiveStep(idx + 1)}
                    className={`p-4 border transition-all cursor-pointer flex flex-col justify-between space-y-3 ${
                      isActive
                        ? 'bg-[#E65A33] border-[#E65A33] text-white shadow-xl scale-[1.02]'
                        : isPassed
                        ? 'bg-white/10 border-[#05DF72]/40 text-white'
                        : 'bg-white/5 border-white/10 text-white/60 hover:bg-white/10'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[10px] opacity-70">{s.num}</span>
                      <IconComponent className={`w-4 h-4 ${isActive ? 'text-white' : isPassed ? 'text-[#05DF72]' : 'text-white/40'}`} />
                    </div>

                    <div>
                      <div className="font-display text-xs font-black uppercase tracking-tight line-clamp-1">
                        {s.node}
                      </div>
                      <div className="text-[10px] font-mono opacity-70 mt-0.5 line-clamp-1">
                        {s.subtitle}
                      </div>
                    </div>

                    {isPassed && (
                      <div className="text-[10px] font-mono text-[#05DF72] flex items-center gap-1">
                        <Check className="w-3 h-3" />
                        <span>RELAYED</span>
                      </div>
                    )}
                    {isActive && (
                      <div className="text-[10px] font-mono text-white flex items-center gap-1 animate-pulse">
                        <span>●</span>
                        <span>TRANSMITTING</span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Active Node Detail Card */}
            <div className="p-4 bg-black/40 border border-white/10 space-y-1">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-[#05DF72] font-bold">
                  STAGE {activeStep}: {steps[activeStep - 1].node}
                </span>
                <span className="text-white/40">SIMULATION PARAMETERS</span>
              </div>
              <p className="text-xs text-white/80 font-body leading-relaxed">
                {steps[activeStep - 1].desc}
              </p>
            </div>

            <div className="text-[11px] font-mono text-white/50 border-t border-white/10 pt-3">
              SIMULATION NOTE: In real-world disaster zones, cellular base stations are damaged or non-existent. Sub-GHz LoRa provides an unintercepted, zero-dependency relay across rugged topography.
            </div>
          </div>

          <div className="flex justify-between items-center mt-3 text-[11px] font-mono text-[#32160E]/60">
            <span>NETWORK STATE: OFF-GRID AIR-TO-GROUND</span>
            <span>LATENCY: &lt; 400 MS (64-BYTE BURST)</span>
          </div>
        </div>
      </div>

      {/* Bottom Editorial Footnote */}
      <div className="border-t border-[#32160E]/15 pt-3 flex items-center justify-between text-xs text-[#32160E]/60 font-body">
        <span>SCENARIO STEP 8: TELEMETRY DISPATCHED THROUGH HIGH-ALTITUDE CANYON</span>
        <span className="font-mono">NO CELL TOWER PREREQUISITE</span>
      </div>
    </div>
  );
};
