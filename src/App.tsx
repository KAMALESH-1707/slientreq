/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useCallback } from 'react';
import { SectionId } from './types';
import { SECTIONS } from './data/sections';
import { Header } from './components/Header';
import { FooterNav } from './components/FooterNav';
import { Section1Incident } from './components/sections/Section1Incident';
import { Section2Landslide } from './components/sections/Section2Landslide';
import { Section3Problem } from './components/sections/Section3Problem';
import { Section4FlightComparison } from './components/sections/Section4FlightComparison';
import { Section5DifferenceInFlight } from './components/sections/Section5DifferenceInFlight';
import { Section6Solution } from './components/sections/Section6Solution';
import { Section7ThermalVision } from './components/sections/Section7ThermalVision';
import { Section8OfflineLora } from './components/sections/Section8OfflineLora';
import { Section9SurvivorLocation } from './components/sections/Section9SurvivorLocation';
import { Section10HeroSummary } from './components/sections/Section10HeroSummary';

export default function App() {
  const [currentSection, setCurrentSection] = useState<SectionId>(1);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(false);

  const activeMeta = SECTIONS.find((s) => s.id === currentSection) || SECTIONS[0];
  const theme = activeMeta.theme;

  const handleNext = useCallback(() => {
    setCurrentSection((prev) => (prev < 10 ? ((prev + 1) as SectionId) : 1));
  }, []);

  const handlePrev = useCallback(() => {
    setCurrentSection((prev) => (prev > 1 ? ((prev - 1) as SectionId) : 1));
  }, []);

  const handleSelectSection = useCallback((id: SectionId) => {
    setCurrentSection(id);
  }, []);

  const handleRestart = useCallback(() => {
    setCurrentSection(1);
  }, []);

  // Keyboard navigation for presentation mode
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore if typing in form inputs
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return;
      }

      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        handlePrev();
      } else if (e.key >= '1' && e.key <= '9') {
        const num = Number(e.key) as SectionId;
        handleSelectSection(num);
      } else if (e.key === '0') {
        handleSelectSection(10);
      } else if (e.key.toLowerCase() === 'p') {
        setIsAutoPlaying((prev) => !prev);
      } else if (e.key.toLowerCase() === 'r') {
        handleRestart();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev, handleSelectSection, handleRestart]);

  // Auto-play timer for presentation mode
  useEffect(() => {
    if (!isAutoPlaying) return;

    const dwellTime = currentSection === 2 ? 8000 : currentSection === 4 ? 9000 : 7000;

    const timer = setTimeout(() => {
      handleNext();
    }, dwellTime);

    return () => clearTimeout(timer);
  }, [isAutoPlaying, currentSection, handleNext]);

  // Color mapping strictly derived from reference design:
  // - chocolate: #32160E (rich dark brown block like "KERRY MEDIA / THE FUTURE OF ADVERTISING")
  // - dark-emergency: #220E08 (deep emergency darkness)
  // - coral: #E65A33 (saturated vermilion/coral like "A TEAM OF REBELS, DREAMERS")
  // - peach: #F7D4BE (soft warm cream/peach testimonial block with outline quote mark)
  const getBgClass = () => {
    switch (theme) {
      case 'chocolate':
        return 'bg-[#32160E] text-[#FDF9F5]';
      case 'dark-emergency':
        return 'bg-[#220E08] text-[#FDF9F5]';
      case 'coral':
        return 'bg-[#E65A33] text-[#FDF9F5]';
      case 'peach':
      default:
        return 'bg-[#F7D4BE] text-[#32160E]';
    }
  };

  return (
    <div
      className={`min-h-screen flex flex-col justify-between transition-colors duration-700 select-none overflow-x-hidden ${getBgClass()}`}
    >
      {/* Top Bar following Reference Layout */}
      <Header
        currentSection={currentSection}
        onSelectSection={handleSelectSection}
        isAutoPlaying={isAutoPlaying}
        onToggleAutoPlay={() => setIsAutoPlaying(!isAutoPlaying)}
        theme={theme}
      />

      {/* Main Screen Container: ONE SCREEN = ONE IDEA */}
      <main className="flex-1 flex flex-col justify-center relative w-full overflow-y-auto">
        {currentSection === 1 && <Section1Incident onNext={handleNext} />}
        {currentSection === 2 && <Section2Landslide onNext={handleNext} />}
        {currentSection === 3 && <Section3Problem onNext={handleNext} />}
        {currentSection === 4 && <Section4FlightComparison onNext={handleNext} />}
        {currentSection === 5 && <Section5DifferenceInFlight onNext={handleNext} />}
        {currentSection === 6 && <Section6Solution onNext={handleNext} />}
        {currentSection === 7 && <Section7ThermalVision onNext={handleNext} />}
        {currentSection === 8 && <Section8OfflineLora onNext={handleNext} />}
        {currentSection === 9 && <Section9SurvivorLocation onNext={handleNext} />}
        {currentSection === 10 && (
          <Section10HeroSummary
            onRestart={handleRestart}
            onJumpToSection={handleSelectSection}
          />
        )}
      </main>

      {/* Presentation Bottom Navigation & Slide Counter */}
      <FooterNav
        currentSection={currentSection}
        totalSections={SECTIONS.length}
        onPrev={handlePrev}
        onNext={handleNext}
        onSelectSection={handleSelectSection}
        theme={theme}
      />
    </div>
  );
}
