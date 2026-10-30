import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MatrixGridCanvas from './components/MatrixGridCanvas';
import ProjectsPreview from './components/ProjectsPreview';
import TechStackSkills from './components/TechStackSkills';
import EducationJourney from './components/EducationJourney';
import SkillsAndAbout from './components/SkillsAndAbout';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';

function App() {
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  const handleProjectsClick = () => {
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleResumeClick = () => {
    showToast('📄 Resume downloaded! Thaman_Resume_2026.pdf');
  };

  return (
    <div className="relative min-h-screen bg-[#0d1117] text-slate-100 selection:bg-emerald-500 selection:text-black">
      {/* Background Interactive Matrix Dot Grid */}
      <MatrixGridCanvas />

      {/* Floating Frosted-Glass Navbar */}
      <Navbar onContactClick={() => setContactModalOpen(true)} />

      {/* Main Content Area */}
      <main className="relative">
        {/* Opening Hero Intro Screen */}
        <Hero 
          onProjectsClick={handleProjectsClick} 
          onResumeClick={handleResumeClick} 
        />

        {/* Selected Featured Projects */}
        <ProjectsPreview />

        {/* Interactive Tech Stack & Skills */}
        <TechStackSkills />

        {/* Education & Campus Journey Timeline + Achievement Badges */}
        <EducationJourney />

        {/* About Background */}
        <SkillsAndAbout />
      </main>

      {/* Footer */}
      <Footer />

      {/* Contact Modal */}
      <ContactModal 
        isOpen={contactModalOpen} 
        onClose={() => setContactModalOpen(false)} 
      />

      {/* Notification Toast */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-4 py-3 rounded-xl bg-carbon-900 border border-emerald-500/50 shadow-[0_0_25px_rgba(16,185,129,0.3)] text-sm font-medium text-emerald-300 animate-in fade-in slide-in-from-bottom-3 duration-200">
          <span className="w-2 h-2 rounded-full bg-lime-400 animate-pulse" />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}

export default App;
