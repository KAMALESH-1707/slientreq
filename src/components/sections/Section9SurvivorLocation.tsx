import React from 'react';
import { ArrowRight, MapPin, CheckCircle2, ShieldCheck } from 'lucide-react';

interface SectionProps {
  onNext: () => void;
}

export const Section9SurvivorLocation: React.FC<SectionProps> = ({ onNext }) => {
  return (
    <div className="w-full h-full flex flex-col justify-between p-6 md:p-12 lg:p-16 max-w-7xl mx-auto text-[#FDF9F5] relative">
      {/* Top Editorial Index */}
      <div className="flex items-center justify-between border-b border-white/20 pb-4 text-xs font-mono tracking-widest text-[#FDF9F5]/80 uppercase">
        <div className="flex items-center gap-3">
          <span className="font-bold text-[#32160E] bg-white px-2 py-0.5">09 // MISSION LOCK</span>
          <span>·</span>
          <span>MOUNTAIN DISASTER SITE</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#05DF72] animate-ping" />
          <span className="font-bold text-[#05DF72]">STATUS: SURVIVOR LOCATED</span>
        </div>
      </div>

      {/* Main Asymmetric Split Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center my-auto py-6 relative z-10">
        {/* Subtle geometric hairline decoration */}
        <div className="geo-circle-line w-80 h-80 -top-20 -left-20 opacity-30 border-white/20" />

        {/* Left Column: Oversized Editorial Typography & Geo-Evidence */}
        <div className="lg:col-span-5 flex flex-col justify-center space-y-6">
          <div className="space-y-3">
            <span className="eyebrow-label text-[#32160E] bg-white/40 px-2 py-0.5 inline-block">
              ACT VI — TARGET RESOLUTION
            </span>
            <h1 className="headline-section text-5xl sm:text-7xl lg:text-8xl xl:text-9xl text-white text-balance">
              SURVIVOR<br />LOCATED.
            </h1>
          </div>

          <p className="text-base sm:text-lg lg:text-xl text-[#FDF9F5]/90 leading-relaxed font-body max-w-md">
            Thermal detection verifies subsurface living signature. High-precision GPS coordinates locked and offline evidence packet dispatched to ground rescue.
          </p>

          {/* Geo-Coordinates Card matching reference dark espresso block */}
          <div className="p-4 bg-[#32160E] text-[#FDF9F5] border border-white/15 space-y-3 font-mono text-xs shadow-xl">
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
            <div className="flex items-center gap-2 text-[#05DF72] bg-black/30 p-2.5 border border-white/10">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span>EVIDENCE CAPTURED: GREEN MARKER & THERMAL HISTOGRAM</span>
            </div>
            <div className="flex items-center gap-2 text-white bg-black/30 p-2.5 border border-white/10">
              <ShieldCheck className="w-4 h-4 text-[#05DF72] shrink-0" />
              <span>OFFLINE ALERT TRANSMITTED VIA SUB-GHZ LoRa</span>
            </div>
          </div>

          <div className="pt-2">
            <button
              onClick={onNext}
              className="inline-flex items-center gap-3 px-6 py-3.5 bg-[#32160E] text-[#FDF9F5] text-xs font-mono font-bold uppercase tracking-widest hover:bg-black transition-colors cursor-pointer"
            >
              <span>MISSION CONCLUSION</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Right Column: Visual Area with Mountain Scene, HUD Pinpoint Target, and Thermal Reticle */}
        <div className="lg:col-span-7 relative">
          <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#220E08] border border-white/20 shadow-2xl">
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

            {/* Pinpoint Survivor Beacon Target on Buried Location (GREEN MARKER) */}
            <div
              className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center"
              style={{ left: '56%', top: '52%' }}
            >
              <div className="w-24 h-24 rounded-full border border-[#05DF72]/40 flex items-center justify-center animate-ping" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full border-2 border-[#05DF72] flex items-center justify-center">
                <div className="absolute w-20 h-px bg-[#05DF72]/70" />
                <div className="absolute h-20 w-px bg-[#05DF72]/70" />
                <div className="w-5 h-5 rounded-full bg-[#05DF72] shadow-[0_0_20px_#05DF72] border-2 border-white" />
              </div>

              {/* Floating Target Identification Card */}
              <div className="mt-14 px-3 py-1 bg-[#32160E] text-[#FDF9F5] border border-[#05DF72] text-[11px] font-mono tracking-wider shadow-2xl flex items-center gap-2 whitespace-nowrap">
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

          <div className="flex justify-between items-center mt-3 text-[11px] font-mono text-[#FDF9F5]/80">
            <span>BURIAL SECTOR: SECTOR 4-B ALONG PASS</span>
            <span>TIME ELAPSED SINCE SLIDE: 14 MIN</span>
          </div>
        </div>
      </div>

      {/* Bottom Editorial Footnote */}
      <div className="border-t border-white/20 pt-3 flex items-center justify-between text-xs text-white/70 font-body">
        <span>SCENARIO STEP 9: SURVIVOR LOCATED WITHIN GOLDEN HOUR WINDOW</span>
        <span className="font-mono">MISSION PARAMETERS SATISFIED</span>
      </div>
    </div>
  );
};
