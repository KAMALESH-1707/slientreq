import React, { useState } from 'react';
import { ArrowRight, MapPin, CheckCircle2, ShieldCheck, Share2, Compass } from 'lucide-react';

interface SectionProps {
  onNext: () => void;
}

export const Section8SurvivorLocation: React.FC<SectionProps> = ({ onNext }) => {
  const [evidenceExpanded, setEvidenceExpanded] = useState<boolean>(true);

  return (
    <div className="w-full h-full flex flex-col justify-between p-6 md:p-12 lg:p-16 max-w-7xl mx-auto text-white">
      {/* Top Editorial Index */}
      <div className="flex items-center justify-between border-b border-white/20 pb-4 text-xs font-mono tracking-widest text-white/80 uppercase">
        <div className="flex items-center gap-3">
          <span className="font-bold text-[#211815] bg-white px-2 py-0.5">08 // MISSION LOCK</span>
          <span>·</span>
          <span>MOUNTAIN DISASTER SITE</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#05DF72] animate-ping" />
          <span className="font-bold text-[#05DF72]">STATUS: SURVIVOR LOCATED</span>
        </div>
      </div>

      {/* Main Asymmetric Split Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center my-auto py-6">
        {/* Left Column: Oversized Editorial Typography & Geo-Evidence */}
        <div className="lg:col-span-5 flex flex-col justify-center space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold font-mono tracking-widest text-[#211815] uppercase bg-white/30 px-2 py-0.5 inline-block">
              ACT VII — TARGET RESOLUTION
            </span>
            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black text-white leading-[0.92] tracking-tighter uppercase text-balance">
              SURVIVOR<br />LOCATED.
            </h1>
          </div>

          <p className="text-base sm:text-lg text-white/90 leading-relaxed font-body max-w-md">
            Thermal detection verifies subsurface living signature. High-precision GPS coordinates locked and offline evidence packet dispatched to ground rescue.
          </p>

          {/* Geo-Coordinates Card */}
          <div className="p-4 bg-[#211815] text-[#F6EEE3] border border-white/10 space-y-3 font-mono text-xs">
            <div className="flex items-center justify-between">
              <span className="text-[#05DF72] flex items-center gap-1.5 font-bold">
                <MapPin className="w-3.5 h-3.5" />
                GEO-COORDINATES LOCKED
              </span>
              <span className="text-white/50">CONFIDENCE: 99.2%</span>
            </div>
            <div className="text-base sm:text-lg text-white font-bold tracking-wider py-1 border-y border-white/10">
              34°18'24.8"N 77°35'12.4"E
            </div>
            <div className="grid grid-cols-2 gap-2 text-[11px] text-white/70">
              <div>
                <span className="text-white/40 block">ALTITUDE:</span>
                <span>3,420 M</span>
              </div>
              <div>
                <span className="text-white/40 block">RADIUS ACCURACY:</span>
                <span className="text-[#05DF72]">±0.6 METERS</span>
              </div>
            </div>
          </div>

          {/* Evidence and Offline Transmission Status */}
          <div className="space-y-2 font-mono text-xs">
            <div className="flex items-center gap-2 text-[#05DF72] bg-black/20 p-2.5 border border-white/10">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span>EVIDENCE CAPTURED: THERMAL HISTOGRAM & BOUNDING BOX</span>
            </div>
            <div className="flex items-center gap-2 text-white bg-black/20 p-2.5 border border-white/10">
              <ShieldCheck className="w-4 h-4 text-[#05DF72] shrink-0" />
              <span>OFFLINE ALERT TRANSMITTED VIA SUB-GHZ LoRa</span>
            </div>
          </div>

          <div className="pt-2">
            <button
              onClick={onNext}
              className="inline-flex items-center gap-3 px-6 py-3.5 bg-[#211815] text-[#F6EEE3] text-xs font-bold uppercase tracking-widest hover:bg-black transition-colors"
            >
              <span>MISSION CONCLUSION</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Right Column: Visual Area with Mountain Scene, HUD Pinpoint Target, and Thermal Reticle */}
        <div className="lg:col-span-7 relative">
          <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#17110F] border border-white/20 shadow-2xl">
            {/* Background Mountain Debris Photo */}
            <img
              src="/src/assets/images/disaster_mountain_road_1790138100529.jpg"
              alt="Mountain Scene Target Lock"
              className="w-full h-full object-cover brightness-95"
              referrerPolicy="no-referrer"
            />

            {/* Gradient Scrim */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30 pointer-events-none" />

            {/* Simulated Radiometric Scan Overlay Grid */}
            <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

            {/* Pinpoint Survivor Beacon Target on Buried Location */}
            <div
              className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center"
              style={{ left: '56%', top: '52%' }}
            >
              {/* Pulsing Concentric Radar Rings */}
              <div className="w-24 h-24 rounded-full border border-[#05DF72]/40 flex items-center justify-center animate-ping" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full border-2 border-[#05DF72] flex items-center justify-center">
                {/* Crosshairs */}
                <div className="absolute w-20 h-px bg-[#05DF72]/70" />
                <div className="absolute h-20 w-px bg-[#05DF72]/70" />
                {/* Center Green Beacon Core */}
                <div className="w-5 h-5 rounded-full bg-[#05DF72] shadow-[0_0_20px_#05DF72] border-2 border-white" />
              </div>

              {/* Floating Target Identification Card */}
              <div className="mt-14 px-3 py-1 bg-[#211815] text-[#F6EEE3] border border-[#05DF72] text-[11px] font-mono tracking-wider shadow-2xl flex items-center gap-2 whitespace-nowrap">
                <span className="w-2 h-2 rounded-full bg-[#05DF72] animate-pulse" />
                <span className="font-bold text-[#05DF72]">SURVIVOR LOCATED</span>
                <span className="text-white/40">|</span>
                <span className="text-white/80">36.8°C</span>
              </div>
            </div>

            {/* Live Telemetry Watermark */}
            <div className="absolute top-4 left-4 text-[10px] font-mono text-white/80 bg-black/70 px-2 py-1 border border-white/20">
              [ TARGET REF #SRQ-2026-081 ]
            </div>
            <div className="absolute top-4 right-4 text-[10px] font-mono text-[#05DF72] bg-black/70 px-2 py-1 border border-[#05DF72]/30">
              ● REAL-TIME DOWNLINK ACTIVE
            </div>

            {/* Bottom HUD bar */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[11px] font-mono text-white/80 bg-black/70 px-3 py-2 border border-white/10">
              <span>ESTIMATED EXCAVATION DEPTH: 1.4 M</span>
              <span className="text-[#05DF72]">GROUND SQUAD DISPATCHED</span>
            </div>
          </div>

          <div className="flex justify-between items-center mt-3 text-[11px] font-mono text-white/80">
            <span>BURIAL SECTOR: SECTOR 4-B ALONG PASS</span>
            <span>TIME ELAPSED SINCE SLIDE: 14 MIN</span>
          </div>
        </div>
      </div>

      {/* Bottom Editorial Footnote */}
      <div className="border-t border-white/20 pt-3 flex items-center justify-between text-xs text-white/70 font-body">
        <span>SCENARIO STEP 8: SURVIVOR LOCATED WITHIN GOLDEN HOUR WINDOW</span>
        <span className="font-mono">MISSION PARAMETERS SATISFIED</span>
      </div>
    </div>
  );
};
