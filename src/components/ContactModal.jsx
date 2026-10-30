import React, { useState } from 'react';
import { X, Mail, Github, Linkedin, Send, Check, Copy } from 'lucide-react';

const ContactModal = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const email = "thaman.dev@ksit.edu.in";

  if (!isOpen) return null;

  const handleCopyEmail = () => {
    navigator.clipboard?.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg rounded-2xl bg-carbon-900 border border-emerald-500/40 p-6 sm:p-8 shadow-[0_0_50px_rgba(16,185,129,0.25)] text-left"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg text-slate-400 hover:text-white bg-carbon-850 hover:bg-carbon-800 border border-carbon-700"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5 text-emerald-400" />
        </button>

        <div className="flex items-center gap-2 mb-2">
          <span className="w-2.5 h-2.5 rounded-full bg-lime-400 animate-ping" />
          <span className="font-mono text-xs uppercase tracking-wider text-emerald-400">
            TRANSMISSION CHANNEL // DIRECT CONTACT
          </span>
        </div>

        <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
          Let's Build Something Together
        </h3>
        <p className="text-sm text-slate-300 mb-6">
          I am actively seeking internship opportunities for 2025-2026. Feel free to connect for internships, project collaborations, or tech discussions!
        </p>

        {/* Quick Email Copy Box */}
        <div className="flex items-center justify-between p-3.5 rounded-xl bg-carbon-950 border border-emerald-500/30 mb-6">
          <div className="flex items-center gap-3 overflow-hidden">
            <Mail className="w-5 h-5 text-emerald-400 shrink-0" />
            <span className="font-mono text-xs sm:text-sm text-slate-200 truncate">
              {email}
            </span>
          </div>
          <button
            onClick={handleCopyEmail}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/40 text-emerald-300 font-mono text-xs transition-colors shrink-0 ml-2"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-lime-400" />
                <span className="text-lime-400">Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>

        {/* Social / Dev Links */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 p-3 rounded-xl bg-carbon-850 hover:bg-carbon-800 border border-carbon-700 hover:border-emerald-500/50 text-slate-200 text-xs sm:text-sm font-medium transition-all"
          >
            <Github className="w-4 h-4 text-emerald-400" />
            <span>GitHub Profile</span>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 p-3 rounded-xl bg-carbon-850 hover:bg-carbon-800 border border-carbon-700 hover:border-emerald-500/50 text-slate-200 text-xs sm:text-sm font-medium transition-all"
          >
            <Linkedin className="w-4 h-4 text-emerald-400" />
            <span>LinkedIn Profile</span>
          </a>
        </div>

        <button
          onClick={onClose}
          className="w-full py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-carbon-950 font-bold text-sm tracking-wide shadow-[0_0_20px_rgba(16,185,129,0.35)] transition-all"
        >
          Close Transmission
        </button>
      </div>
    </div>
  );
};

export default ContactModal;

