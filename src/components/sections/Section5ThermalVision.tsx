import React, { useState } from 'react';
import { ArrowRight, Sliders, Eye, Flame, CheckCircle2 } from 'lucide-react';
import mountainDebrisField from '../../assets/images/mountain_debris_field_1790138130634.jpg';

interface SectionProps {
  onNext: () => void;
}

export const Section5ThermalVision: React.FC<SectionProps> = ({ onNext }) => {
  // Split position: percentage from 0 (all RGB) to 100 (all Thermal)
  const [sliderPos, setSliderPos] = useState<number>(50);
  const [activeMode, setActiveMode] = useState<'split' | 'rgb' | 'thermal'>('split');

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPos(Number(e.target.value));
    setActiveMode('split');
  };

  const effectivePos = activeMode === 'rgb' ? 0 : activeMode === 'thermal' ? 100 : sliderPos;

  return (
    <div className="w-full h-full flex flex-col justify-between p-6 md:p-12 lg:p-16 max-w-7xl mx-auto text-[#211815]">
      {/* Top Editorial Index */}
      <div className="flex items-center justify-between border-b border-[#211815]/10 pb-4 text-xs font-mono tracking-widest text-[#211815]/70 uppercase">
        <div className="flex items-center gap-3">
          <span className="font-bold text-[#E65100]">05 // SPECTRAL DIFFERENTIATION</span>
          <span>·</span>
          <span>ELECTRO-OPTICAL VS INFRARED</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#05DF72] animate-pulse" />
          <span className="font-bold text-[#05DF72]">SURVIVOR DETECTED</span>
        </div>
      </div>

      {/* Main Asymmetric Split Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center my-auto py-6">
        {/* Left Column: Oversized Typography & Detection Metrics */}
        <div className="lg:col-span-5 flex flex-col justify-center space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold font-mono tracking-widest text-[#E65100] uppercase">
              ACT IV — PERCEPTION
            </span>
            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black text-[#211815] leading-[0.92] tracking-tighter uppercase text-balance">
              RGB +<br />THERMAL.
            </h1>
          </div>

          <p className="text-base sm:text-lg text-[#211815]/80 leading-relaxed font-body max-w-md">
            While standard RGB imagery is rendered blind by opaque rock and dirt, radiometric thermal imaging detects the subsurface metabolic heat signature.
          </p>

          {/* Detection Callout Card */}
          <div className="p-4 bg-[#211815] text-[#F6EEE3] border-l-4 border-[#05DF72] space-y-3 font-mono text-xs">
            <div className="flex items-center justify-between">
              <span className="text-white/60">NEURAL INFERENCE:</span>
              <span className="px-2 py-0.5 bg-[#05DF72] text-[#17110F] font-bold">
                SURVIVOR DETECTED
              </span>
            </div>
            <div className="grid grid-cols-2 gap-2 text-[11px] pt-1 border-t border-white/10">
              <div>
                <span className="text-white/50 block">RGB CLUSTER:</span>
                <span className="text-[#EB5A36] font-semibold">0 CANDIDATES (BLIND)</span>
              </div>
              <div>
                <span className="text-white/50 block">THERMAL DELTA:</span>
                <span className="text-[#05DF72] font-semibold">+14.6°C PEAK</span>
              </div>
            </div>
          </div>

          {/* Mode switch buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveMode('rgb')}
              className={`px-3 py-2 text-xs font-mono uppercase tracking-wider border transition-colors ${
                activeMode === 'rgb'
                  ? 'bg-[#211815] text-white border-[#211815]'
                  : 'bg-white/60 border-[#211815]/20 hover:bg-white'
              }`}
            >
              RGB ONLY
            </button>
            <button
              onClick={() => setActiveMode('split')}
              className={`px-3 py-2 text-xs font-mono uppercase tracking-wider border transition-colors ${
                activeMode === 'split'
                  ? 'bg-[#211815] text-white border-[#211815]'
                  : 'bg-white/60 border-[#211815]/20 hover:bg-white'
              }`}
            >
              INTERACTIVE SPLIT
            </button>
            <button
              onClick={() => setActiveMode('thermal')}
              className={`px-3 py-2 text-xs font-mono uppercase tracking-wider border transition-colors ${
                activeMode === 'thermal'
                  ? 'bg-[#05DF72] text-[#17110F] font-bold border-[#05DF72]'
                  : 'bg-white/60 border-[#211815]/20 hover:bg-white'
              }`}
            >
              THERMAL ONLY
            </button>
          </div>

          <div className="pt-2">
            <button
              onClick={onNext}
              className="inline-flex items-center gap-3 px-6 py-3.5 bg-[#211815] text-[#F6EEE3] text-xs font-bold uppercase tracking-widest hover:bg-[#E65100] transition-colors"
            >
              <span>SEND OFFLINE LoRa ALERT</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Right Column: Visual Interactive Split View */}
        <div className="lg:col-span-7 relative">
          <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#17110F] border border-[#211815]/20 shadow-2xl select-none group">
            {/* Base Under-Layer: Thermal IR False-Color View */}
            <div className="absolute inset-0 bg-[#0F0C1B]">
              <img
                src={mountainDebrisField}
                alt="Thermal Debris"
                className="w-full h-full object-cover filter contrast-125 saturate-200 hue-rotate-180 brightness-75 opacity-70"
                referrerPolicy="no-referrer"
              />
              {/* Thermal color map gradient */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#1B0033]/80 via-[#660066]/30 to-[#FF4500]/30 mix-blend-color" />

              {/* Subsurface Human Thermal Heat Anomaly Bloom */}
              <div
                className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center"
                style={{ left: '52%', top: '55%' }}
              >
                {/* Heat bloom glow */}
                <div className="w-24 h-24 rounded-full bg-gradient-radial from-[#FFFC00] via-[#FF3300] to-transparent opacity-80 blur-md animate-pulse" />

                {/* GREEN Survivor Marker Target */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full border-2 border-[#05DF72] flex items-center justify-center animate-survivor-beacon">
                    <div className="w-4 h-4 rounded-full bg-[#05DF72] shadow-[0_0_12px_#05DF72]" />
                  </div>
                  <div className="mt-2 px-2 py-0.5 bg-[#05DF72] text-[#17110F] text-[10px] font-mono font-bold uppercase tracking-wider whitespace-nowrap shadow-md">
                    SURVIVOR DETECTED (36.8°C)
                  </div>
                </div>
              </div>

              {/* Thermal View Tag */}
              <div className="absolute top-4 right-4 text-[11px] font-mono text-[#05DF72] bg-black/60 px-2 py-1 border border-[#05DF72]/40">
                LWIR THERMAL // 8μm – 14μm
              </div>
            </div>

            {/* Over-Layer: Natural Optical RGB Image (Clipped by slider position) */}
            <div
              className="absolute inset-y-0 left-0 overflow-hidden border-r-2 border-white shadow-xl"
              style={{ width: `${effectivePos}%` }}
            >
              <div className="relative w-full h-full min-w-[500px]">
                <img
                  src={mountainDebrisField}
                  alt="Optical RGB View"
                  className="w-full h-full object-cover"
                  style={{ width: '100%', height: '100%' }}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20" />
                {/* RGB View Tag */}
                <div className="absolute top-4 left-4 text-[11px] font-mono text-white bg-black/60 px-2 py-1 border border-white/20">
                  RGB OPTICAL // VISIBLE LIGHT
                </div>
                <div className="absolute bottom-4 left-4 text-[10px] font-mono text-white/70 bg-black/60 px-2 py-0.5">
                  OPAQUE DEBRIS: NO TARGET VISIBLE
                </div>
              </div>
            </div>

            {/* Slider Handle Divider */}
            {activeMode === 'split' && (
              <div
                className="absolute inset-y-0 pointer-events-none flex items-center justify-center -translate-x-1/2"
                style={{ left: `${effectivePos}%` }}
              >
                <div className="w-7 h-7 rounded-full bg-white text-[#211815] shadow-xl flex items-center justify-center border border-[#211815]/20">
                  <Sliders className="w-3.5 h-3.5 rotate-90" />
                </div>
              </div>
            )}

            {/* Subsurface Sensor Crosshair HUD */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-white/20 rounded-full pointer-events-none" />
            <div className="absolute bottom-4 right-4 text-[10px] font-mono text-white/70 bg-black/60 px-2 py-0.5">
              TARGET CONFIDENCE: 98.4%
            </div>
          </div>

          {/* Interactive Drag Control Slider */}
          <div className="mt-4 flex items-center gap-4">
            <span className="text-xs font-mono text-[#211815]/70 whitespace-nowrap">
              DRAG TO REVEAL:
            </span>
            <input
              type="range"
              min="0"
              max="100"
              value={sliderPos}
              onChange={handleSliderChange}
              className="w-full accent-[#E65100] h-1.5 bg-[#211815]/20 cursor-pointer"
            />
            <span className="text-xs font-mono font-bold text-[#E65100] w-12 text-right">
              {sliderPos}%
            </span>
          </div>

          <div className="flex justify-between items-center mt-2 text-[11px] font-mono text-[#211815]/50">
            <span>LEFT: VISIBLE RGB MUD/RUBBLE</span>
            <span>RIGHT: RADIOMETRIC THERMAL EMISSION</span>
          </div>
        </div>
      </div>

      {/* Bottom Editorial Footnote */}
      <div className="border-t border-[#211815]/10 pt-3 flex items-center justify-between text-xs text-[#211815]/60 font-body">
        <span>SCENARIO STEP 5: COMPUTER-VISION INFERENCE ONBOARD THE UAV</span>
        <span className="font-mono">SURVIVOR CONFIRMED THROUGH 1.8M DEBRIS</span>
      </div>
    </div>
  );
};
