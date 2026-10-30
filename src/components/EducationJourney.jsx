import React from 'react';
import { 
  GraduationCap, 
  Calendar, 
  Sparkles, 
  Trophy, 
  Zap, 
  Users, 
  Award,
  ChevronRight,
  BookOpen
} from 'lucide-react';

/**
 * EducationJourney Component
 * Features an interactive vertical milestone timeline with an illuminated emerald line
 * and a 2x2 grid of student achievement callout badges.
 */
const EducationJourney = () => {
  const milestones = [
    {
      year: '2026',
      status: 'Current • Active',
      title: 'Engineering Student – Building Technical Skills',
      description:
        'Currently pursuing B.Tech in Computer Science, focusing on AI, web development, programming, and real-world project development.',
      isCurrent: true,
      tags: ['AI & ML', 'Fullstack Dev', 'Real-world Projects'],
    },
    {
      year: '2025',
      status: 'Team Projects & Core',
      title: 'Exploring Development & Team Projects',
      description:
        'Strengthened programming fundamentals and collaborated on technical projects, gaining practical experience in software development and problem-solving.',
      isCurrent: false,
      tags: ['Collaborative Coding', 'Open Source', 'Hackathons'],
    },
    {
      year: '2024',
      status: 'Foundation',
      title: 'Started Engineering Journey',
      description:
        'Began my engineering degree, developed an interest in technology, and started learning programming and core computer science concepts.',
      isCurrent: false,
      tags: ['C++ & Logic', 'Data Structures', 'CS Foundations'],
    },
  ];

  const achievements = [
    {
      icon: Trophy,
      title: '1st Place',
      subtitle: 'University Hackathon',
      detail: 'Ranked #1 for rapid MVP engineering and AI prototype.',
      accent: 'emerald',
      badge: '🏆 Winner',
    },
    {
      icon: Zap,
      title: '150+ Solved',
      subtitle: 'LeetCode Problems',
      detail: 'Consistent daily problem solving in DSA, trees, and graphs.',
      accent: 'lime',
      badge: '⚡ Algorithms',
    },
    {
      icon: Users,
      title: 'Tech Club Organizer',
      subtitle: 'KSIT Student Chapter',
      detail: 'Coordinated coding bootcamps & mentor sessions for 100+ peers.',
      accent: 'emerald',
      badge: '👥 Community',
    },
    {
      icon: Award,
      title: 'Full-Stack Certified',
      subtitle: 'Web Development',
      detail: 'Certified in modern React, Node.js, and API architecture.',
      accent: 'lime',
      badge: '📜 Certified',
    },
  ];

  return (
    <section 
      id="campus-life" 
      className="relative z-10 py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto scroll-mt-20"
    >
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-950/60 border border-emerald-500/20 text-emerald-400 font-mono text-xs uppercase tracking-wider mb-3">
          <GraduationCap className="w-3.5 h-3.5 text-lime-400" />
          Academics & Milestones
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Education & Campus Journey
        </h2>
        <p className="text-slate-400 text-sm sm:text-base max-w-2xl mt-3 leading-relaxed">
          Tracking my progression from foundational CS concepts to collaborative software projects and university milestones at K S I T.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left Column: Interactive Vertical Milestone Timeline */}
        <div className="lg:col-span-7 relative">
          {/* Illuminated Emerald Vertical Beam Line */}
          <div 
            className="absolute left-4 sm:left-6 top-6 bottom-6 w-[2px] bg-gradient-to-b from-emerald-400 via-emerald-500/70 to-emerald-500/20 shadow-[0_0_12px_rgba(16,185,129,0.7)]" 
            aria-hidden="true"
          />

          <div className="space-y-8 sm:space-y-10">
            {milestones.map((item, idx) => (
              <div key={item.year} className="relative flex items-start gap-5 sm:gap-7 group">
                
                {/* Glowing Nodal Dot on Timeline */}
                <div className="relative z-20 shrink-0 mt-1.5 flex items-center justify-center">
                  {item.isCurrent ? (
                    <div className="relative flex items-center justify-center w-8 h-8 sm:w-12 sm:h-12">
                      <span className="animate-ping absolute inline-flex h-7 w-7 rounded-full bg-emerald-400 opacity-75" />
                      <div className="w-8 h-8 rounded-full bg-carbon-950 border-2 border-emerald-400 flex items-center justify-center shadow-[0_0_18px_#10b981]">
                        <span className="w-2.5 h-2.5 rounded-full bg-lime-400 shadow-[0_0_8px_#a3e635]" />
                      </div>
                    </div>
                  ) : (
                    <div className="w-8 h-8 sm:w-12 sm:h-12 flex items-center justify-center">
                      <div className="w-6 h-6 rounded-full bg-carbon-950 border-2 border-emerald-500/50 group-hover:border-emerald-400 group-hover:shadow-[0_0_12px_rgba(16,185,129,0.5)] transition-all flex items-center justify-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      </div>
                    </div>
                  )}
                </div>

                {/* Milestone Content Card */}
                <div className="flex-1 rounded-2xl bg-carbon-900/80 backdrop-blur-xl border border-emerald-500/20 group-hover:border-emerald-400/70 p-5 sm:p-6 transition-all duration-300 group-hover:translate-x-1.5 shadow-[0_4px_24px_rgba(0,0,0,0.4)] group-hover:shadow-[0_10px_30px_rgba(16,185,129,0.18)]">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="font-mono text-sm sm:text-base font-extrabold text-emerald-400 bg-emerald-950/70 px-2.5 py-0.5 rounded-md border border-emerald-500/30">
                      {item.year}
                    </span>
                    <span className="font-mono text-[11px] text-slate-400 bg-carbon-950 px-2 py-0.5 rounded border border-carbon-800">
                      {item.status}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-emerald-300 transition-colors mt-2 mb-2">
                    {item.title}
                  </h3>

                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-carbon-800">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-carbon-950 text-slate-300 border border-carbon-800"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* Right Column: 2x2 Achievement Badges Grid */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="rounded-2xl bg-carbon-900/60 border border-emerald-500/20 p-5 sm:p-6 backdrop-blur-xl">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-carbon-800">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-lime-400" />
                <span className="font-mono text-xs font-bold text-slate-200 uppercase tracking-wider">
                  Accolades & Achievements
                </span>
              </div>
              <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/20">
                Verified
              </span>
            </div>

            {/* 2x2 Grid of Accomplishment Callouts */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {achievements.map((ach, idx) => {
                const Icon = ach.icon;
                return (
                  <div
                    key={idx}
                    className="group relative rounded-xl bg-carbon-950/80 hover:bg-carbon-850 border border-emerald-500/15 hover:border-emerald-400 p-4 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(16,185,129,0.22)] flex flex-col justify-between cursor-default"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2.5">
                        <div className="w-8 h-8 rounded-lg bg-carbon-900 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:text-lime-300 transition-colors">
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="text-[11px] font-mono text-slate-400 group-hover:text-emerald-300 transition-colors">
                          {ach.badge}
                        </span>
                      </div>
                      <div className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">
                        {ach.title}
                      </div>
                      <div className="text-xs font-medium text-slate-300 mt-0.5">
                        {ach.subtitle}
                      </div>
                    </div>
                    <p className="text-[11px] text-slate-400 mt-2.5 leading-relaxed pt-2 border-t border-carbon-800/60">
                      {ach.detail}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Academic Institution Card */}
          <div className="rounded-2xl bg-carbon-900/60 border border-emerald-500/20 p-5 backdrop-blur-xl">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-carbon-950 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">K S Institute of Technology (KSIT)</h4>
                <div className="text-xs font-mono text-emerald-400">Bengaluru, Karnataka</div>
                <div className="text-[11px] text-slate-400 mt-0.5">B.Tech / B.E. in Computer Science & Engineering (2023 - 2027)</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationJourney;

