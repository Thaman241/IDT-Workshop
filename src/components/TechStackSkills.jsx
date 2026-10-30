import React from 'react';
import { 
  Code2, 
  Wrench, 
  Binary, 
  Sparkles,
  Terminal,
  Cpu
} from 'lucide-react';

/**
 * TechStackSkills Component
 * Displays categorized skill badges (Languages, Frameworks & Tools, Core CS Concepts)
 * with official tech SVG logos, hover scale-105, emerald border glow, and interactive comfort-level tooltips.
 */
const TechStackSkills = () => {
  const skillCategories = [
    {
      category: 'Languages',
      badge: 'Syntax & Logic',
      icon: Code2,
      skills: [
        {
          name: 'C++',
          level: 'Proficient',
          levelColor: 'text-emerald-300',
          dotColor: 'bg-emerald-400',
          iconType: 'cpp',
        },
        {
          name: 'Python',
          level: 'Proficient',
          levelColor: 'text-emerald-300',
          dotColor: 'bg-emerald-400',
          iconType: 'python',
        },
        {
          name: 'JavaScript',
          level: 'Proficient',
          levelColor: 'text-emerald-300',
          dotColor: 'bg-emerald-400',
          iconType: 'javascript',
        },
        {
          name: 'Java',
          level: 'Familiar',
          levelColor: 'text-lime-300',
          dotColor: 'bg-lime-400',
          iconType: 'java',
        },
      ],
    },
    {
      category: 'Frameworks & Tools',
      badge: 'Stack & Workflow',
      icon: Wrench,
      skills: [
        {
          name: 'React',
          level: 'Proficient',
          levelColor: 'text-emerald-300',
          dotColor: 'bg-emerald-400',
          iconType: 'react',
        },
        {
          name: 'Tailwind CSS',
          level: 'Proficient',
          levelColor: 'text-emerald-300',
          dotColor: 'bg-emerald-400',
          iconType: 'tailwind',
        },
        {
          name: 'Node.js',
          level: 'Familiar',
          levelColor: 'text-lime-300',
          dotColor: 'bg-lime-400',
          iconType: 'nodejs',
        },
        {
          name: 'Git / GitHub',
          level: 'Proficient',
          levelColor: 'text-emerald-300',
          dotColor: 'bg-emerald-400',
          iconType: 'github',
        },
      ],
    },
    {
      category: 'Core CS Concepts',
      badge: 'Engineering Foundations',
      icon: Binary,
      skills: [
        {
          name: 'Data Structures',
          level: 'Proficient',
          levelColor: 'text-emerald-300',
          dotColor: 'bg-emerald-400',
          iconType: 'dsa',
        },
        {
          name: 'OOP',
          level: 'Proficient',
          levelColor: 'text-emerald-300',
          dotColor: 'bg-emerald-400',
          iconType: 'oop',
        },
        {
          name: 'DBMS',
          level: 'Familiar',
          levelColor: 'text-lime-300',
          dotColor: 'bg-lime-400',
          iconType: 'dbms',
        },
        {
          name: 'OS',
          level: 'Currently Learning',
          levelColor: 'text-teal-300',
          dotColor: 'bg-teal-400',
          iconType: 'os',
        },
      ],
    },
  ];

  // Helper for rendering high-precision official tech SVGs
  const renderTechIcon = (type) => {
    switch (type) {
      case 'cpp':
        return (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L2 7V17L12 22L22 17V7L12 2Z" stroke="#34d399" strokeWidth="1.5" strokeLinejoin="round"/>
            <path d="M9 14.5C7.6 14.5 6.5 13.4 6.5 12C6.5 10.6 7.6 9.5 9 9.5C9.8 9.5 10.5 9.9 10.9 10.5" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M14 11V13M13 12H15" stroke="#a3e635" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M18 11V13M17 12H19" stroke="#a3e635" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        );
      case 'python':
        return (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.9 2C8.6 2 8.7 3.4 8.7 3.4L8.7 4.9H12.1V5.4H5.3C3.6 5.4 2.1 6.8 2.1 9.4C2.1 12 3.4 12.3 3.4 12.3H5V10.7C5 8.7 6.7 8.7 6.7 8.7H10.1C11.9 8.7 12 7 12 7V3.4C12 3.4 12 2 11.9 2ZM10.4 3.1C10.8 3.1 11.1 3.4 11.1 3.8C11.1 4.2 10.8 4.5 10.4 4.5C10 4.5 9.7 4.2 9.7 3.8C9.7 3.4 10 3.1 10.4 3.1Z" fill="#38bdf8"/>
            <path d="M12.1 22C15.4 22 15.3 20.6 15.3 20.6L15.3 19.1H11.9V18.6H18.7C20.4 18.6 21.9 17.2 21.9 14.6C21.9 12 20.6 11.7 20.6 11.7H19V13.3C19 15.3 17.3 15.3 17.3 15.3H13.9C12.1 15.3 12 17 12 17V20.6C12 20.6 12 22 12.1 22ZM13.6 20.9C13.2 20.9 12.9 20.6 12.9 20.2C12.9 19.8 13.2 19.5 13.6 19.5C14 19.5 14.3 19.8 14.3 20.2C14.3 20.6 14 20.9 13.6 20.9Z" fill="#fbbf24"/>
          </svg>
        );
      case 'javascript':
        return (
          <svg className="w-5 h-5 rounded" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="24" rx="4" fill="#F7DF1E"/>
            <path d="M6 18.5V14.5M10.5 14.5C10.5 13.5 9.5 13 8.5 13C7.5 13 6.5 13.5 6.5 14.5" stroke="#000" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M12 18C12.5 18.4 13.5 18.6 14.5 18.6C16.5 18.6 17.5 17.5 17.5 16C17.5 13.5 14.5 14 14.5 12.5C14.5 11.8 15 11.4 16 11.4C16.8 11.4 17.5 11.7 18 12.2" stroke="#000" strokeWidth="1.8" strokeLinecap="round"/>
          </svg>
        );
      case 'java':
        return (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 17C10.5 17.5 14 17.5 16 17C14.5 18.5 9.5 18.5 8 17Z" fill="#f97316"/>
            <path d="M6.5 19.5C9.5 20.3 14.5 20.3 17.5 19.5C15.5 21.5 8.5 21.5 6.5 19.5Z" fill="#f97316"/>
            <path d="M13 3C11 5 13 7 11 9M16 4C14 6 15 8 13.5 10M10 6C9 7.5 9.5 9 8.5 10.5" stroke="#38bdf8" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        );
      case 'react':
        return (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="12" cy="12" rx="9" ry="3.8" stroke="#38bdf8" strokeWidth="1.4" transform="rotate(30 12 12)"/>
            <ellipse cx="12" cy="12" rx="9" ry="3.8" stroke="#38bdf8" strokeWidth="1.4" transform="rotate(90 12 12)"/>
            <ellipse cx="12" cy="12" rx="9" ry="3.8" stroke="#38bdf8" strokeWidth="1.4" transform="rotate(150 12 12)"/>
            <circle cx="12" cy="12" r="1.8" fill="#38bdf8"/>
          </svg>
        );
      case 'tailwind':
        return (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 13C6.8 10 9 8.5 12.5 8.5C16.7 8.5 17.5 11.5 19 12C20 12.4 21 12 22 10.5C21.2 13.5 19 15 15.5 15C11.3 15 10.5 12 9 11.5C8 11.1 7 11.5 6 13Z" fill="#38bdf8"/>
            <path d="M2 18.5C2.8 15.5 5 14 8.5 14C12.7 14 13.5 17 15 17.5C16 17.9 17 17.5 18 16C17.2 19 15 20.5 11.5 20.5C7.3 20.5 6.5 17.5 5 17C4 16.6 3 17 2 18.5Z" fill="#06b6d4"/>
          </svg>
        );
      case 'nodejs':
        return (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L21 7.2V16.8L12 22L3 16.8V7.2L12 2Z" stroke="#22c55e" strokeWidth="1.5" strokeLinejoin="round"/>
            <path d="M12 6.5V11.5M12 11.5L8.5 9.5M12 11.5L15.5 9.5M8.5 14.5L12 16.5L15.5 14.5" stroke="#86efac" strokeWidth="1.4" strokeLinecap="round"/>
          </svg>
        );
      case 'github':
        return (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
          </svg>
        );
      case 'dsa':
        return (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="4" r="2.5" stroke="#10b981" strokeWidth="1.5"/>
            <circle cx="6" cy="18" r="2.5" stroke="#34d399" strokeWidth="1.5"/>
            <circle cx="18" cy="18" r="2.5" stroke="#34d399" strokeWidth="1.5"/>
            <path d="M10.5 6L7.5 15.5M13.5 6L16.5 15.5M6 18H18" stroke="#10b981" strokeWidth="1.2" strokeLinecap="round"/>
          </svg>
        );
      case 'oop':
        return (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L4 6.5V15.5L12 20L20 15.5V6.5L12 2Z" stroke="#a3e635" strokeWidth="1.5"/>
            <path d="M12 20V11M12 11L4 6.5M12 11L20 6.5" stroke="#84cc16" strokeWidth="1.4"/>
            <circle cx="12" cy="11" r="1.5" fill="#bef264"/>
          </svg>
        );
      case 'dbms':
        return (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="12" cy="5" rx="8" ry="2.5" stroke="#34d399" strokeWidth="1.5"/>
            <path d="M4 5V12C4 13.4 7.6 14.5 12 14.5C16.4 14.5 20 13.4 20 12V5" stroke="#10b981" strokeWidth="1.5"/>
            <path d="M4 12V19C4 20.4 7.6 21.5 12 21.5C16.4 21.5 20 20.4 20 19V12" stroke="#059669" strokeWidth="1.5"/>
          </svg>
        );
      case 'os':
        return (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="5" y="5" width="14" height="14" rx="2" stroke="#2dd4bf" strokeWidth="1.5"/>
            <rect x="9" y="9" width="6" height="6" rx="1" fill="#14b8a6"/>
            <path d="M9 2V5M15 2V5M9 19V22M15 19V22M2 9H5M2 15H5M19 9H22M19 15H22" stroke="#2dd4bf" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        );
      default:
        return <Terminal className="w-5 h-5 text-emerald-400" />;
    }
  };

  return (
    <section 
      id="skills" 
      className="relative z-10 py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto scroll-mt-20"
    >
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-950/60 border border-emerald-500/20 text-emerald-400 font-mono text-xs uppercase tracking-wider mb-3">
          <Sparkles className="w-3.5 h-3.5 text-lime-400" />
          Technical Arsenal
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Tech Stack & Skills
        </h2>
        <p className="text-slate-400 text-sm sm:text-base max-w-2xl mt-3 leading-relaxed">
          Curated toolbox of programming languages, full-stack frameworks, developer tools, and foundational computer science principles.
        </p>
      </div>

      {/* 3 Categorized Columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7">
        {skillCategories.map((group, groupIdx) => {
          const CategoryIcon = group.icon;
          return (
            <div
              key={groupIdx}
              className="rounded-2xl bg-carbon-900/80 backdrop-blur-xl border border-emerald-500/20 p-6 sm:p-7 flex flex-col justify-between shadow-[0_4px_24px_rgba(0,0,0,0.4)] hover:border-emerald-500/40 transition-colors"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-carbon-800">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-carbon-950 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                      <CategoryIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white tracking-tight">
                        {group.category}
                      </h3>
                      <span className="text-[11px] font-mono text-emerald-400/80">
                        {group.badge}
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-carbon-950 text-slate-400 border border-carbon-800">
                    {group.skills.length} skills
                  </span>
                </div>

                {/* Skill Badges Flex Container */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {group.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="relative group">
                      {/* Interactive Badge: scale-105 on hover with emerald border glow */}
                      <div className="flex items-center gap-3 px-3.5 py-3 rounded-xl bg-carbon-950/70 hover:bg-carbon-850 border border-emerald-500/15 hover:border-emerald-400 transition-all duration-200 hover:scale-105 hover:-translate-y-0.5 hover:shadow-[0_0_18px_rgba(16,185,129,0.32)] cursor-default select-none">
                        <div className="shrink-0 flex items-center justify-center">
                          {renderTechIcon(skill.iconType)}
                        </div>
                        <span className="text-xs sm:text-sm font-semibold text-slate-200 group-hover:text-white transition-colors truncate">
                          {skill.name}
                        </span>
                      </div>

                      {/* Tooltip Indicating Comfort Level */}
                      <div className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-200 z-30 whitespace-nowrap">
                        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#080b0f] border border-emerald-500/40 text-[11px] font-mono shadow-[0_4px_16px_rgba(0,0,0,0.8)]">
                          <span className={`w-1.5 h-1.5 rounded-full ${skill.dotColor} animate-pulse`} />
                          <span className={skill.levelColor}>{skill.level}</span>
                        </div>
                        {/* Caret */}
                        <div className="w-2 h-2 bg-[#080b0f] border-r border-b border-emerald-500/40 transform rotate-45 mx-auto -mt-1" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Comfort Level Legend */}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-slate-400 pt-4 border-t border-carbon-800/80">
        <span className="text-slate-500 uppercase tracking-widest text-[11px]">Proficiency Key:</span>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_6px_#10b981]" />
          <span className="text-slate-300">Proficient (Daily Driver)</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-lime-400 shadow-[0_0_6px_#a3e635]" />
          <span className="text-slate-300">Familiar (Working Competence)</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-teal-400 shadow-[0_0_6px_#2dd4bf]" />
          <span className="text-slate-300">Currently Learning (Active Focus)</span>
        </div>
      </div>
    </section>
  );
};

export default TechStackSkills;

