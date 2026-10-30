import React, { useState, useRef } from 'react';
import { 
  ExternalLink, 
  Github, 
  Sparkles, 
  Calendar, 
  ScanFace, 
  BookOpen, 
  Layers,
  ArrowUpRight
} from 'lucide-react';

/**
 * 3D Perspective Tilt Card Component
 * Reacts dynamically to cursor coordinates with rotational perspective,
 * smooth translateY lift, and an emerald specular shine spotlight.
 */
const TiltCard = ({ project }) => {
  const cardRef = useRef(null);
  const shineRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Subtle 3D tilt angles (up to +/- 9 degrees)
    const rotateX = ((centerY - y) / centerY) * 9;
    const rotateY = ((x - centerX) / centerX) * 9;

    card.style.transform = `perspective(1000px) translateY(-6px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`;

    // Specular shine spotlight tracking cursor
    if (shineRef.current) {
      shineRef.current.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(16, 185, 129, 0.22) 0%, rgba(163, 230, 53, 0.08) 25%, transparent 65%)`;
      shineRef.current.style.opacity = '1';
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    const card = cardRef.current;
    if (card) {
      card.style.transform = 'perspective(1000px) translateY(0px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    }
    if (shineRef.current) {
      shineRef.current.style.opacity = '0';
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const Icon = project.icon;

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group relative rounded-2xl bg-carbon-900/85 backdrop-blur-xl border border-emerald-500/20 hover:border-emerald-400/80 p-6 sm:p-7 transition-all duration-200 ease-out will-change-transform flex flex-col justify-between shadow-[0_4px_24px_rgba(0,0,0,0.5)] hover:shadow-[0_14px_40px_-10px_rgba(16,185,129,0.35),0_0_25px_rgba(16,185,129,0.2)]"
      style={{
        transformStyle: 'preserve-3d',
      }}
    >
      {/* Specular Shine / Glare Layer */}
      <div
        ref={shineRef}
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 z-20"
        aria-hidden="true"
      />

      {/* Card Body */}
      <div className="relative z-10">
        {/* Top Meta Header: Icon + Category Badge */}
        <div className="flex items-center justify-between mb-5">
          <div className="w-11 h-11 rounded-xl bg-carbon-950 border border-emerald-500/30 group-hover:border-emerald-400 group-hover:shadow-[0_0_15px_rgba(16,185,129,0.4)] flex items-center justify-center text-emerald-400 group-hover:text-lime-300 transition-all">
            <Icon className="w-5 h-5" />
          </div>
          <span className="font-mono text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-md bg-emerald-950/60 border border-emerald-500/30 text-emerald-300">
            {project.badge}
          </span>
        </div>

        {/* Project Title */}
        <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors mb-3">
          {project.title}
        </h3>

        {/* Project Description */}
        <p className="text-slate-300 text-sm leading-relaxed mb-6 font-normal">
          {project.description}
        </p>
      </div>

      {/* Card Footer: Tech Badges & Interactive Buttons */}
      <div className="relative z-10 pt-4 border-t border-carbon-800/80">
        {/* Tech Badges */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-md text-xs font-mono bg-carbon-950 text-emerald-300 border border-emerald-500/20 group-hover:border-emerald-500/40 transition-colors"
            >
              #{tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-3">
          {/* Live Demo Button */}
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold text-emerald-300 group-hover:text-carbon-950 bg-emerald-500/15 group-hover:bg-emerald-400 border border-emerald-500/40 group-hover:border-emerald-300 transition-all duration-300 shadow-[0_0_12px_rgba(16,185,129,0.15)] group-hover:shadow-[0_0_20px_rgba(16,185,129,0.5)] focus:outline-none"
          >
            <span>Live Demo</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          {/* GitHub Code Button */}
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-medium text-slate-300 hover:text-white bg-carbon-950/70 hover:bg-carbon-850 border border-carbon-800 hover:border-emerald-500/40 transition-all duration-200 focus:outline-none"
          >
            <Github className="w-3.5 h-3.5 text-emerald-400" />
            <span>GitHub Code</span>
          </a>
        </div>
      </div>
    </div>
  );
};

/**
 * ProjectsPreview Showcase Component
 * Houses the filter pill row and the 3-column responsive grid featuring 3 student project cards.
 */
const ProjectsPreview = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Web Apps', 'AI / ML', 'Mini-Projects'];

  const projects = [
    {
      id: 1,
      title: 'Campus Event Finder',
      category: ['Web Apps', 'Mini-Projects'],
      badge: 'Web App',
      icon: Calendar,
      description:
        'A centralized platform that helps students discover upcoming college events, workshops, hackathons, and cultural activities. Students can explore event details, register for events, and stay updated without missing important campus activities.',
      technologies: ['React', 'Firebase', 'JavaScript', 'Tailwind CSS'],
      demoUrl: 'https://campus-events-demo.vercel.app',
      githubUrl: 'https://github.com/thaman-dev/campus-event-finder',
    },
    {
      id: 2,
      title: 'Smart Attendance Tracker',
      category: ['AI / ML'],
      badge: 'AI & Computer Vision',
      icon: ScanFace,
      description:
        'An intelligent attendance management system that automates student attendance tracking using facial recognition. It uses a camera and computer vision to identify students, record attendance, and reduce manual work for teachers.',
      technologies: ['Python', 'OpenCV', 'Face Recognition', 'SQLite'],
      demoUrl: 'https://smart-attendance-demo.streamlit.app',
      githubUrl: 'https://github.com/thaman-dev/smart-attendance-tracker',
    },
    {
      id: 3,
      title: 'Student Notes Marketplace',
      category: ['Web Apps', 'Mini-Projects'],
      badge: 'Fullstack Platform',
      icon: BookOpen,
      description:
        'A student-focused platform where users can upload, browse, share, and download academic notes and study materials. It helps students access quality learning resources, collaborate with peers, and prepare for examinations more efficiently.',
      technologies: ['Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB'],
      demoUrl: 'https://notes-marketplace-demo.vercel.app',
      githubUrl: 'https://github.com/thaman-dev/student-notes-marketplace',
    },
  ];

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === 'All') return true;
    return project.category.includes(activeFilter);
  });

  return (
    <section 
      id="projects" 
      className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto z-10 scroll-mt-20"
    >
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-950/60 border border-emerald-500/20 text-emerald-400 font-mono text-xs uppercase tracking-wider mb-3">
          <Sparkles className="w-3.5 h-3.5 text-lime-400" />
          Featured Projects Showcase
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Crafted with Code & Purpose
        </h2>
        <p className="text-slate-400 text-sm sm:text-base max-w-2xl mt-3 leading-relaxed">
          Explore hands-on student engineering projects spanning responsive full-stack applications, computer vision, and student utility systems.
        </p>
      </div>

      {/* Filter Pill Row */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
        {filters.map((filter) => {
          const isActive = activeFilter === filter;
          return (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-mono font-medium transition-all duration-200 focus:outline-none ${
                isActive
                  ? 'bg-emerald-400 text-[#0d1117] font-bold shadow-[0_0_20px_rgba(16,185,129,0.55)] scale-105'
                  : 'bg-carbon-900/80 text-slate-400 hover:text-emerald-300 border border-emerald-500/20 hover:border-emerald-500/40 hover:bg-carbon-850'
              }`}
            >
              {filter}
              {isActive && (
                <span className="ml-2 inline-block w-1.5 h-1.5 rounded-full bg-[#0d1117] animate-pulse" />
              )}
            </button>
          );
        })}
      </div>

      {/* 3-Column Responsive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 items-stretch">
        {filteredProjects.map((project) => (
          <TiltCard key={project.id} project={project} />
        ))}
      </div>

      {/* Grid Empty State (if needed) */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-12 rounded-2xl bg-carbon-900/60 border border-carbon-800">
          <p className="font-mono text-sm text-slate-400">
            No projects found under category "{activeFilter}".
          </p>
        </div>
      )}
    </section>
  );
};

export default ProjectsPreview;
