import React from 'react';
import { SectionId } from '../types';
import { Play, Pause, ChevronRight } from 'lucide-react';

interface HeaderProps {
  currentSection: SectionId;
  onSelectSection: (id: SectionId) => void;
  isAutoPlaying: boolean;
  onToggleAutoPlay: () => void;
  theme: 'peach' | 'chocolate' | 'coral' | 'dark-emergency';
}

export const Header: React.FC<HeaderProps> = ({
  currentSection,
  onSelectSection,
  isAutoPlaying,
  onToggleAutoPlay,
  theme,
}) => {
  const isDark = theme === 'chocolate' || theme === 'dark-emergency';
  const isCoral = theme === 'coral';

  const textColor = isDark || isCoral ? 'text-[#FDF9F5]' : 'text-[#32160E]';
  const mutedColor = isDark || isCoral
    ? 'text-[#FDF9F5]/70 hover:text-white'
    : 'text-[#32160E]/70 hover:text-[#32160E]';
  const borderColor = isDark || isCoral ? 'border-white/15' : 'border-[#32160E]/15';

  const navItems = [
    { id: 1, label: '01 INCIDENT' },
    { id: 2, label: '02 LANDSLIDE' },
    { id: 3, label: '03 PROBLEM' },
    { id: 4, label: '04 COMPARISON' },
    { id: 5, label: '05 THE FLIGHT' },
    { id: 6, label: '06 AIRFRAME' },
    { id: 7, label: '07 THERMAL' },
    { id: 8, label: '08 LoRa' },
    { id: 9, label: '09 LOCATED' },
    { id: 10, label: '10 HERO' },
  ];

  return (
    <header
      className={`relative z-40 flex items-center justify-between px-6 md:px-12 py-4 border-b ${borderColor} transition-colors duration-500`}
    >
      {/* Brand Wordmark matching "KERRY MEDIA" in top left */}
      <button
        onClick={() => onSelectSection(1)}
        className="text-left group cursor-pointer"
      >
        <span className={`font-display text-xl md:text-2xl font-black tracking-widest uppercase ${textColor}`}>
          SILENT RESQ
        </span>
      </button>

      {/* Chapter index links in minimalist editorial style */}
      <nav className="hidden xl:flex items-center gap-6 text-xs font-mono font-bold tracking-[0.16em] uppercase">
        {navItems.map((item) => {
          const isActive = item.id === currentSection;
          return (
            <button
              key={item.id}
              onClick={() => onSelectSection(item.id as SectionId)}
              className={`transition-colors relative py-1 cursor-pointer ${
                isActive ? `${textColor} font-black` : mutedColor
              }`}
            >
              {item.label}
              {isActive && (
                <span
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#E65A33]"
                />
              )}
            </button>
          );
        })}
      </nav>

      {/* Action buttons following reference editorial style */}
      <div className="flex items-center gap-3">
        <button
          onClick={onToggleAutoPlay}
          className={`flex items-center gap-2 px-3.5 py-1.5 text-xs font-mono tracking-wider uppercase border transition-colors cursor-pointer ${
            isDark || isCoral
              ? 'border-white/20 text-[#FDF9F5] hover:bg-white/10'
              : 'border-[#32160E]/20 text-[#32160E] hover:bg-[#32160E]/5'
          }`}
          title={isAutoPlaying ? 'Pause automatic presentation' : 'Play presentation'}
        >
          {isAutoPlaying ? (
            <>
              <Pause className="w-3.5 h-3.5 text-[#E65A33]" />
              <span className="hidden sm:inline">Pause</span>
            </>
          ) : (
            <>
              <Play className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Play</span>
            </>
          )}
        </button>

        <button
          onClick={() => onSelectSection(currentSection < 10 ? ((currentSection + 1) as SectionId) : 1)}
          className={`flex items-center gap-1.5 px-4 py-1.5 text-xs font-mono font-bold tracking-widest uppercase transition-colors cursor-pointer ${
            isCoral
              ? 'bg-[#32160E] text-[#FDF9F5] hover:bg-black'
              : 'bg-[#E65A33] text-white hover:bg-[#d04a25]'
          }`}
        >
          <span>{currentSection === 10 ? 'Restart' : 'Next'}</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </header>
  );
};
