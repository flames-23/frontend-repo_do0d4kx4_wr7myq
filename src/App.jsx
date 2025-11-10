import React from 'react';
import HeroSection from './components/HeroSection';
import JourneySection from './components/JourneySection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import PhilosophyContact from './components/PhilosophyContact';

const App = () => {
  return (
    <div className="min-h-screen w-full scroll-smooth bg-[#0D0D0D]">
      <HeroSection />
      <JourneySection />
      <SkillsSection />
      <ProjectsSection />
      <PhilosophyContact />
    </div>
  );
};

export default App;
