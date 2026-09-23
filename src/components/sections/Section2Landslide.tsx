import React, { useState, useEffect } from 'react';
import { ArrowRight, RotateCcw, AlertTriangle } from 'lucide-react';
import mountainDebrisField from '../../assets/images/mountain_debris_field_1790138130634.jpg';

interface SectionProps {
  onNext: () => void;
}

export const Section2Landslide: React.FC<SectionProps> = ({ onNext }) => {
  const [stage, setStage] = useState<'anticipation' | 'collapsing' | 'buried'>('anticipation');
  const [debrisProgress, setDebrisProgress] = useState(0);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setStage('collapsing');
    }, 600);
    return () => clearTimeout(timer1);
  }, []);

  useEffect(() => {
    if (stage === 'collapsing') {
      const interval = setInterval(() => {
        setDebrisProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setStage('buried');
            return 100;
          }
          return prev + 3;
        });
      }, 30);
      return () => clearInterval(interval);
    }
  }, [stage]);

  const restartSimulation = () => {
    setDebrisProgress(0);
    setStage('anticipation');
    setTimeout(() => {
      setStage('collapsing');
    }, 400);
  };

  return (
    <div className="w-full h-full flex flex-col justify-between p-6 md:p-12 lg:p-16 max-w-7xl mx-auto text-[#FDF9F5] relative">
      {/* Top Editorial Index */}
      <div className="flex items-center justify-between border-b border-white/15 pb-4 text-xs font-mono tracking-widest text-[#FDF9F5]/70 uppercase">
        <div className="flex items-center gap-3">
          <span className="font-bold text-[#E65A33]">02 // CATASTROPHE</span>
          <span>·</span>
          <span>SUDDEN SLOPE FAILURE</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-[#E65A33] flex items-center gap-1.5 font-bold">
            <AlertTriangle className="w-3.5 h-3.5" />
            MASS COLLAPSE IN PROGRESS
          </span>
          <span className="hidden sm:inline">·</span>
          <span className="hidden sm:inline text-white/50">SECTOR 4-B</span>
        </div>
      </div>

      {/* Main Asymmetric Split Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center my-auto py-6 relative">
        {/* Geometric line decoration matching reference */}
        <div className="geo-circle-line w-80 h-80 -bottom-20 -right-20 opacity-30 border-white/20" />

        {/* Left Column: Dark Oversized Typography */}
        <div className="lg:col-span-5 flex flex-col justify-center space-y-6 z-10">
          <div className="space-y-3">
            <span className="eyebrow-label text-[#E65A33]">
              ACT II — THE DISASTER
            </span>
            <h1 className="headline-section text-5xl sm:text-7xl lg:text-8xl xl:text-9xl text-white text-balance">
              THE<br />LANDSLIDE.
            </h1>
          </div>

          <div className="space-y-2">
            <p className="headline-sub text-xl sm:text-2xl lg:text-3xl text-[#E65A33]">
              THOUSANDS OF TONS OF ROCK OBLITERATE THE LEDGE.
            </p>
            <p className="text-sm sm:text-base lg:text-lg text-[#FDF9F5]/80 leading-relaxed font-body max-w-md">
              A devastating mud and scree avalanche tears down the canyon wall. Within seconds, the lone traveler is completely entombed beneath rubble.
            </p>
          </div>

          {/* Real-time Status Card */}
          <div className="p-4 bg-black/40 border border-white/15 space-y-3 font-mono text-xs">
            <div className="flex justify-between items-center text-[#FDF9F5]">
              <span>SURVIVOR STATUS:</span>
              <span className={stage === 'buried' ? 'text-[#E65A33] font-bold' : 'text-[#05DF72]'}>
                {stage === 'buried' ? 'BURIED UNDER DEBRIS' : 'COLLAPSE IN PROGRESS'}
              </span>
            </div>
            {/* Visual collapse depth bar */}
            <div className="w-full bg-white/10 h-1.5 overflow-hidden">
              <div
                className="bg-[#E65A33] h-full transition-all duration-75"
                style={{ width: `${debrisProgress}%` }}
              />
            </div>
            <div className="flex justify-between text-white/50 text-[11px]">
              <span>BURIAL DEPTH: {(debrisProgress * 0.014).toFixed(1)} M</span>
              <span>SURFACE VISIBILITY: {Math.max(0, 100 - debrisProgress)}%</span>
            </div>
          </div>

          {/* Action buttons matching reference */}
          <div className="flex items-center gap-3 pt-2">
            <button
              onClick={restartSimulation}
              className="px-4 py-3 border border-white/20 text-[#FDF9F5] text-xs font-mono font-bold uppercase tracking-widest hover:bg-white/10 transition-colors flex items-center gap-2 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>REPLAY</span>
            </button>
            <button
              onClick={onNext}
              className="px-6 py-3 bg-[#E65A33] text-white text-xs font-mono font-bold uppercase tracking-widest hover:bg-[#d04a25] transition-colors flex items-center gap-2 cursor-pointer"
            >
              <span>ASSESS CRISIS</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Right Column: Visual Area showing animated rock debris burying the green person */}
        <div className="lg:col-span-7 relative z-10">
          <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#220E08] border border-white/20 shadow-2xl">
            {/* Base Mountain Debris Photo */}
            <img
              src={mountainDebrisField}
              alt="Landslide Debris"
              className="w-full h-full object-cover opacity-80"
              referrerPolicy="no-referrer"
            />

            {/* Dark atmosphere & dust haze */}
            <div
              className="absolute inset-0 bg-[#32160E]/50 transition-opacity duration-700 pointer-events-none"
              style={{ opacity: 0.3 + debrisProgress * 0.005 }}
            />

            {/* Falling rocks & scree particles simulation */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              {Array.from({ length: 18 }).map((_, i) => {
                const startX = 20 + ((i * 17) % 65);
                const delay = (i * 0.07).toFixed(2);
                const size = 12 + (i % 5) * 6;
                return (
                  <div
                    key={i}
                    className="absolute bg-[#3A2A24] border border-[#5C453C] rounded-none shadow-lg transition-transform"
                    style={{
                      width: `${size}px`,
                      height: `${size * 0.8}px`,
                      left: `${startX}%`,
                      top: stage === 'anticipation' ? '-20%' : `${15 + (debrisProgress * 0.75) + (i * 2)}%`,
                      opacity: stage === 'anticipation' ? 0 : 0.85,
                      transform: `rotate(${debrisProgress * (i % 2 === 0 ? 3 : -3)}deg)`,
                      transition: `top 0.8s cubic-bezier(0.25, 1, 0.5, 1) ${delay}s, opacity 0.3s`,
                    }}
                  />
                );
              })}
            </div>

            {/* The Green Person walking and disappearing beneath debris */}
            <div
              className="absolute transition-all duration-500"
              style={{
                left: '52%',
                bottom: '30%',
                transform: 'translate(-50%, 0)',
                opacity: Math.max(0, 1 - (debrisProgress / 65)),
                filter: `blur(${debrisProgress * 0.08}px)`,
              }}
            >
              <div className="flex flex-col items-center">
                <span className="mb-1 px-1.5 py-0.5 bg-[#05DF72] text-[#17110F] text-[9px] font-mono font-bold">
                  SURVIVOR
                </span>
                <div className="w-8 h-8 rounded-full bg-[#05DF72] shadow-[0_0_20px_#05DF72] border-2 border-white flex items-center justify-center">
                  <div className="w-3 h-3 bg-[#17110F] rounded-full" />
                </div>
              </div>
            </div>

            {/* Dust cloud expanding over the buried zone */}
            <div
              className="absolute inset-0 bg-gradient-to-t from-[#32160E]/95 via-[#32160E]/85 to-transparent transition-opacity duration-1000 pointer-events-none flex items-center justify-center"
              style={{
                opacity: stage === 'buried' ? 0.95 : debrisProgress > 50 ? 0.6 : 0,
              }}
            >
              {stage === 'buried' && (
                <div className="text-center p-6 space-y-4 max-w-md animate-fadeIn">
                  <div className="inline-block px-3 py-1 bg-[#E65A33] text-white font-mono text-xs font-bold uppercase tracking-widest mb-2">
                    SCREEN PAUSED // IMPACT CONFIRMED
                  </div>
                  <div className="font-display font-black text-2xl sm:text-3xl text-white tracking-tight uppercase space-y-1">
                    <p className="text-white/90">NO NETWORK.</p>
                    <p className="text-[#E65A33]">NO VISUAL CONTACT.</p>
                    <p className="text-white/70">SURVIVOR NON-IDENTIFIABLE.</p>
                  </div>
                  <div className="pt-2">
                    <span className="text-xs font-mono text-[#05DF72]">
                      ● THERMAL VITAL SIGN DETECTED UNDERGROUND
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Top metadata */}
            <div className="absolute top-4 left-4 text-[10px] font-mono text-white/70 tracking-widest">
              [ REAL-TIME SEISMIC FEED // RUNAWAY SLIDE ]
            </div>
            <div className="absolute bottom-4 left-4 text-[10px] font-mono text-white/60">
              DISASTER COORDINATES: 34°18'24.8"N 77°35'12.4"E
            </div>
          </div>

          <div className="flex justify-between items-center mt-3 text-[11px] font-mono text-[#FDF9F5]/60">
            <span>EVENT: MASS SLUMP WITH OVERBURDEN SPREAD</span>
            <span>CRITICAL RESCUE WINDOW: 60 MINUTES</span>
          </div>
        </div>
      </div>

      {/* Bottom Editorial Footnote */}
      <div className="border-t border-white/15 pt-3 flex items-center justify-between text-xs text-[#FDF9F5]/60 font-body">
        <span>SCENARIO STEP 2: COMPLETE SURFACE BURIAL AND VISUAL OBSCURATION</span>
        <span className="font-mono">GOLDEN HOUR COMMENCED</span>
      </div>
    </div>
  );
};
