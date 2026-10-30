import React from 'react';
import { Terminal, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="relative z-10 border-t border-carbon-800/80 bg-carbon-950/80 backdrop-blur-md py-8 px-4 sm:px-6 lg:px-8 mt-20">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          <span className="text-white font-medium">Thaman</span>
          <span>// Designed with Cyber-Emerald Theme & Tailwind CSS</span>
        </div>

        <div className="flex items-center gap-4 text-slate-400">
          <span>K S I T, Bangalore</span>
          <span>•</span>
          <span className="text-emerald-400">2025-2026</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

