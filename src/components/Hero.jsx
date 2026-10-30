import React, { useState } from 'react';
import { 
  ArrowRight, 
  FileDown, 
  Code2, 
  Cpu, 
  Terminal, 
  Sparkles, 
  CheckCircle2, 
  ExternalLink,
  ChevronDown
} from 'lucide-react';

/**
 * Hero Component
 * Opening screen featuring the animated radar status pill, cyber-emerald headline,
 * student bio, responsive action buttons, and telemetry tech dock.
 */
const Hero = ({ onProjectsClick, onResumeClick }) => {
  const [downloading, setDownloading] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);

  const handleResumeDownload = () => {
    setDownloading(true);
    if (onResumeClick) {
      onResumeClick();
    }
    setTimeout(() => {
      setDownloading(false);
    }, 1800);
  };

  const handleCopyCommand = () => {
    navigator.clipboard?.writeText('npx thaman-portfolio');
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <section 
      id="home"
      className="relative min-h-[92vh] flex flex-col justify-center items-center pt-28 sm:pt-32 pb-16 px-4 sm:px-6 lg:px-8 text-center z-10"
    >
      {/* Background radial glow behind hero content */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[600px] h-[340px] sm:h-[450px] bg-gradient-to-tr from-emerald-500/15 via-emerald-600/10 to-lime-500/10 rounded-full blur-[100px] pointer-events-none -z-10" 
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto flex flex-col items-center">
        {/* 1. Status Badge: Animated Blinking Radar Pill */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-carbon-900/80 hover:bg-emerald-950/30 backdrop-blur-md text-emerald-300 shadow-[0_0_20px_rgba(16,185,129,0.15)] hover:shadow-[0_0_25px_rgba(16,185,129,0.25)] hover:border-emerald-400/60 transition-all duration-300 mb-8 cursor-default group">
          {/* Radar Blinking Indicator */}
          <span className="relative flex h-2.5 w-2.5 items-center justify-center">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-80" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-lime-400 shadow-[0_0_8px_#a3e635]" />
          </span>

          <span className="font-mono text-xs sm:text-sm font-semibold tracking-wide text-emerald-300 group-hover:text-lime-300 transition-colors">
            Student Developer // Open for Internships
          </span>

          <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-emerald-500/40" />
          <span className="hidden sm:inline-block font-mono text-[11px] text-emerald-400/70 tracking-wider">
            2025-2026
          </span>
        </div>

        {/* 2. Main Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.15] sm:leading-[1.12]">
          Hey, I am{' '}
          <span className="relative inline-block">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-lime-400 drop-shadow-[0_0_35px_rgba(16,185,129,0.45)]">
              Thaman
            </span>
            {/* Subtle underline cyber accent */}
            <span className="absolute left-0 bottom-1 sm:bottom-2 w-full h-[3px] bg-gradient-to-r from-emerald-500 to-lime-400 opacity-60 rounded-full" />
          </span>
          <br className="hidden sm:block" />
          <span className="text-slate-100 font-black">
            {' '}— Building the Future of Tech.
          </span>
        </h1>

        {/* 3. Student Bio */}
        <p className="max-w-2xl text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed font-normal mb-10 text-balance">
          <span className="text-white font-medium">2nd Year Computer Science Student</span> at{' '}
          <span className="inline-flex items-center px-2 py-0.5 rounded-md bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 font-mono font-medium text-sm sm:text-base">
            K S I T
          </span>{' '}
          passionate about{' '}
          <span className="text-emerald-400 font-medium underline decoration-emerald-500/40 decoration-2 underline-offset-4">
            web development
          </span>
          ,{' '}
          <span className="text-lime-300 font-medium underline decoration-lime-400/40 decoration-2 underline-offset-4">
            AI
          </span>
          , and building real-world projects.
        </p>

        {/* 4. Action Buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 w-full sm:w-auto mb-14">
          {/* Primary Action Button: Glowing Emerald with Lift on Hover */}
          <button
            onClick={onProjectsClick}
            className="group relative inline-flex items-center justify-center gap-2.5 px-8 py-3.5 text-sm sm:text-base font-bold text-[#0d1117] bg-emerald-400 hover:bg-emerald-300 rounded-xl transition-all duration-300 shadow-[0_0_25px_rgba(16,185,129,0.45)] hover:shadow-[0_0_35px_rgba(16,185,129,0.7)] hover:-translate-y-1 active:translate-y-0 active:scale-[0.99] focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-[#0d1117]"
          >
            {/* Subtle light sweep reflection */}
            <span className="absolute inset-0 w-1/2 h-full bg-white/20 skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-in-out pointer-events-none rounded-xl" />
            
            <span>View My Projects</span>
            <ArrowRight className="w-4 h-4 text-[#0d1117] transition-transform duration-300 group-hover:translate-x-1" />
          </button>

          {/* Secondary Action Button: Cyber Outline */}
          <button
            onClick={handleResumeDownload}
            disabled={downloading}
            className="group relative inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-sm sm:text-base font-medium text-emerald-300 hover:text-white bg-carbon-900/60 hover:bg-emerald-950/40 border border-emerald-500/35 hover:border-emerald-400 rounded-xl backdrop-blur-md transition-all duration-300 hover:-translate-y-1 active:translate-y-0 active:scale-[0.99] shadow-[0_0_15px_rgba(16,185,129,0.12)] hover:shadow-[0_0_25px_rgba(16,185,129,0.25)] focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
          >
            {downloading ? (
              <>
                <span className="w-4 h-4 rounded-full border-2 border-emerald-400 border-t-transparent animate-spin" />
                <span>Preparing PDF...</span>
              </>
            ) : (
              <>
                <FileDown className="w-4 h-4 text-emerald-400 group-hover:text-lime-300 group-hover:-translate-y-0.5 transition-all" />
                <span>Download Resume / CV</span>
              </>
            )}
          </button>
        </div>

        {/* Interactive Cyber Telemetry Strip */}
        <div className="w-full max-w-2xl bg-carbon-900/70 backdrop-blur-md rounded-2xl border border-emerald-500/20 p-4 sm:p-5 shadow-[0_8px_30px_rgba(0,0,0,0.4)]">
          <div className="flex flex-wrap items-center justify-between gap-3 text-left border-b border-carbon-800 pb-3 mb-3">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-emerald-400" />
              <span className="font-mono text-xs font-semibold text-slate-300">
                PORTFOLIO_CORE // RUNTIME STATUS
              </span>
            </div>
            
            <button 
              onClick={handleCopyCommand}
              className="flex items-center gap-1.5 px-2 py-1 rounded bg-carbon-850 hover:bg-carbon-800 border border-carbon-700 hover:border-emerald-500/40 font-mono text-[11px] text-slate-300 transition-colors"
              title="Click to copy CLI command"
            >
              {copiedCode ? (
                <>
                  <CheckCircle2 className="w-3.5 h-3.5 text-lime-400" />
                  <span className="text-lime-400">Copied!</span>
                </>
              ) : (
                <>
                  <span className="text-emerald-400">$</span>
                  <span>npx thaman-portfolio</span>
                </>
              )}
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
            <div className="p-2.5 rounded-xl bg-carbon-950/60 border border-emerald-500/10">
              <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Institution</div>
              <div className="text-xs sm:text-sm font-bold text-white mt-0.5">K S I T</div>
              <div className="text-[10px] font-mono text-emerald-400">Bangalore</div>
            </div>

            <div className="p-2.5 rounded-xl bg-carbon-950/60 border border-emerald-500/10">
              <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Current Year</div>
              <div className="text-xs sm:text-sm font-bold text-white mt-0.5">2nd Year B.E.</div>
              <div className="text-[10px] font-mono text-lime-400">Comp. Science</div>
            </div>

            <div className="p-2.5 rounded-xl bg-carbon-950/60 border border-emerald-500/10">
              <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Core Focus</div>
              <div className="text-xs sm:text-sm font-bold text-white mt-0.5">Fullstack + AI</div>
              <div className="text-[10px] font-mono text-emerald-400">React • Node • Py</div>
            </div>

            <div className="p-2.5 rounded-xl bg-carbon-950/60 border border-emerald-500/10">
              <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Status</div>
              <div className="text-xs sm:text-sm font-bold text-emerald-400 mt-0.5 flex items-center justify-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-lime-400 animate-pulse"></span>
                Active
              </div>
              <div className="text-[10px] font-mono text-slate-400">Internship Ready</div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-12 flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity">
          <span className="text-[11px] font-mono uppercase tracking-widest text-slate-400">
            Scroll to explore
          </span>
          <ChevronDown className="w-4 h-4 text-emerald-400 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

