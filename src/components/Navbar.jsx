import React, { useState, useEffect } from 'react';
import { Terminal, Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';

/**
 * Navbar Component
 * Floating frosted-glass navigation bar with cyber-emerald accents,
 * responsive mobile drawer, and active scroll state.
 */
const Navbar = ({ onContactClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Campus Life', href: '#campus-life' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (name, href, e) => {
    e.preventDefault();
    setActiveLink(name);
    setMobileMenuOpen(false);

    if (name === 'Contact' && onContactClick) {
      onContactClick();
      return;
    }

    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-4 transition-all duration-300">
      <nav
        className={`max-w-6xl mx-auto transition-all duration-300 rounded-2xl ${
          isScrolled
            ? 'bg-[#0d1117]/85 backdrop-blur-xl border border-emerald-500/25 shadow-[0_8px_30px_rgba(0,0,0,0.7)] shadow-emerald-950/20 py-2.5 px-4 sm:px-6'
            : 'bg-[#0d1117]/60 backdrop-blur-lg border border-emerald-500/15 py-3.5 px-4 sm:px-6'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo / Brand Name */}
          <a
            href="#home"
            className="group flex items-center gap-2.5 focus:outline-none"
            onClick={(e) => handleLinkClick('Home', '#home', e)}
          >
            <div className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-carbon-850 border border-emerald-500/30 group-hover:border-emerald-400 group-hover:shadow-[0_0_15px_rgba(16,185,129,0.35)] transition-all duration-300">
              <span className="font-mono text-xs font-bold text-emerald-400 group-hover:text-lime-300 transition-colors">
                &lt;T/&gt;
              </span>
              <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#10b981]"></span>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-base font-bold tracking-tight text-white group-hover:text-emerald-300 transition-colors">
                  Thaman
                </span>
                <span className="text-[12px] font-mono font-medium text-emerald-400/80 bg-emerald-950/60 px-1.5 py-0.5 rounded border border-emerald-500/20">
                  .dev
                </span>
              </div>
              <span className="text-[12px] font-mono text-slate-400 hidden sm:inline-block tracking-wider">
                KSIT // CS 2ND YEAR
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const isActive = activeLink === link.name;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(link.name, link.href, e)}
                  className={`relative px-3.5 py-1.5 text-sm font-medium transition-all duration-200 rounded-lg group ${
                    isActive
                      ? 'text-emerald-300 bg-emerald-500/10'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-gradient-to-r from-emerald-400 to-lime-400 rounded-full shadow-[0_0_8px_#10b981]" />
                  )}
                  <span className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 border border-emerald-500/20 transition-opacity pointer-events-none" />
                </a>
              );
            })}
          </div>

          {/* Desktop Right CTA */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => {
                if (onContactClick) onContactClick();
              }}
              className="relative inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-mono font-medium tracking-wide text-emerald-300 bg-emerald-950/40 hover:bg-emerald-900/50 border border-emerald-500/30 hover:border-emerald-400/80 rounded-xl transition-all duration-300 shadow-[0_0_12px_rgba(16,185,129,0.15)] hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:-translate-y-0.5 active:translate-y-0"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-lime-400 animate-pulse"></span>
              <span>Available for Hire</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-emerald-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-300 hover:text-white bg-carbon-850/80 border border-emerald-500/30 hover:border-emerald-400 transition-colors focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-emerald-400" />
              ) : (
                <Menu className="w-5 h-5 text-emerald-400" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pt-3 pb-2 border-t border-emerald-500/20 animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(link.name, link.href, e)}
                  className={`flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    activeLink === link.name
                      ? 'text-emerald-300 bg-emerald-500/15 border border-emerald-500/30'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span>{link.name}</span>
                  <span className="text-xs font-mono text-emerald-500/60">&gt;</span>
                </a>
              ))}

              <div className="pt-2 mt-1 border-t border-carbon-800">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    if (onContactClick) onContactClick();
                  }}
                  className="w-full flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg text-xs font-mono font-medium text-emerald-300 bg-emerald-950/50 border border-emerald-500/40 hover:bg-emerald-900/60 transition-all shadow-[0_0_15px_rgba(16,185,129,0.2)]"
                >
                  <span className="w-2 h-2 rounded-full bg-lime-400 animate-ping"></span>
                  <span>🟢 Open for Internships // Get in Touch</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;

