import React from 'react';
import { SectionId } from '../types';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface FooterNavProps {
  currentSection: SectionId;
  totalSections: number;
  onPrev: () => void;
  onNext: () => void;
  onSelectSection: (id: SectionId) => void;
  theme: 'peach' | 'chocolate' | 'coral' | 'dark-emergency';
}

export const FooterNav: React.FC<FooterNavProps> = ({
  currentSection,
  totalSections,
  onPrev,
  onNext,
  onSelectSection,
  theme,
}) => {
  const isDark = theme === 'chocolate' || theme === 'dark-emergency';
  const isCoral = theme === 'coral';

  const textColor = isDark || isCoral ? 'text-[#FDF9F5]' : 'text-[#32160E]';
  const mutedText = isDark || isCoral ? 'text-[#FDF9F5]/60' : 'text-[#32160E]/60';
  const borderColor = isDark || isCoral ? 'border-white/15' : 'border-[#32160E]/15';

  return (
    <footer
      className={`relative z-40 px-6 md:px-12 py-3.5 border-t ${borderColor} flex flex-col sm:flex-row items-center justify-between gap-3 text-xs tracking-wider transition-colors duration-500`}
    >
      {/* Left: Chapter index */}
      <div className="flex items-center gap-4">
        <span className={`font-mono font-black text-sm tracking-widest ${textColor}`}>
          {currentSection < 10 ? `0${currentSection}` : currentSection} / {totalSections < 10 ? `0${totalSections}` : totalSections}
        </span>
        <span className="hidden md:inline-block w-px h-3 bg-current opacity-30" />
        <span className={`hidden md:inline-block font-mono uppercase tracking-widest text-[11px] ${mutedText}`}>
          AUTONOMOUS DISASTER RESPONSE UAV
        </span>
      </div>

      {/* Center: Geometric step dashes */}
      <div className="flex items-center gap-1.5">
        {Array.from({ length: totalSections }).map((_, idx) => {
          const sId = (idx + 1) as SectionId;
          const isActive = sId === currentSection;
          return (
            <button
              key={idx}
              onClick={() => onSelectSection(sId)}
              className={`h-1 transition-all duration-300 cursor-pointer ${
                isActive
                  ? 'w-7 bg-[#E65A33]'
                  : `w-2.5 hover:w-4 ${
                      isDark || isCoral
                        ? 'bg-white/25 hover:bg-white/50'
                        : 'bg-[#32160E]/25 hover:bg-[#32160E]/50'
                    }`
              }`}
              title={`Jump to Section ${sId}`}
              aria-label={`Jump to Section ${sId}`}
            />
          );
        })}
      </div>

      {/* Right: Step arrows & shortcut tips */}
      <div className="flex items-center gap-4">
        <span className={`hidden lg:inline text-[11px] ${mutedText} font-mono tracking-wider`}>
          USE KEYS ← → OR 0-9
        </span>
        <div className="flex items-center gap-1">
          <button
            onClick={onPrev}
            disabled={currentSection === 1}
            className={`p-1.5 border transition-colors cursor-pointer ${
              isDark || isCoral
                ? 'border-white/20 text-[#FDF9F5] hover:bg-white/10'
                : 'border-[#32160E]/20 text-[#32160E] hover:bg-[#32160E]/5'
            } disabled:opacity-25 disabled:pointer-events-none`}
            aria-label="Previous Section"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={onNext}
            disabled={currentSection === totalSections}
            className={`p-1.5 border transition-colors cursor-pointer ${
              isDark || isCoral
                ? 'border-white/20 text-[#FDF9F5] hover:bg-white/10'
                : 'border-[#32160E]/20 text-[#32160E] hover:bg-[#32160E]/5'
            } disabled:opacity-25 disabled:pointer-events-none`}
            aria-label="Next Section"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
