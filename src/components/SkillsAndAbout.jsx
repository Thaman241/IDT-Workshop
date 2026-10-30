import React from 'react';
import { 
  GraduationCap, 
  Terminal, 
  Code, 
  Server, 
  Cpu, 
  Award, 
  BookOpen, 
  Users, 
  Coffee 
} from 'lucide-react';

const SkillsAndAbout = () => {
  const skillCategories = [
    {
      title: 'Frontend & UI',
      icon: Code,
      skills: ['React 18', 'Tailwind CSS', 'Next.js', 'TypeScript', 'HTML5 Canvas', 'Framer Motion'],
    },
    {
      title: 'Backend & Cloud',
      icon: Server,
      skills: ['Node.js', 'Express', 'Python', 'FastAPI', 'PostgreSQL', 'RESTful APIs'],
    },
    {
      title: 'AI & CS Fundamentals',
      icon: Cpu,
      skills: ['Data Structures & Algorithms', 'OOP', 'Prompt Engineering', 'LangChain', 'Git & GitHub'],
    },
  ];

  const campusHighlights = [
    {
      icon: GraduationCap,
      title: 'K S Institute of Technology (KSIT)',
      role: 'Bachelor of Engineering in Computer Science',
      period: '2023 - 2027 (Currently 2nd Year)',
      desc: 'Active member of the Coding Club and Technical Symposium organizing team.',
    },
    {
      icon: Users,
      title: 'Hackathons & Community',
      role: 'Hackathon Contender & Peer Mentor',
      period: 'Bangalore Tech Circuit',
      desc: 'Collaborated on rapid prototype development and mentored 1st year students in web basics.',
    },
    {
      icon: Award,
      title: 'Technical Milestones',
      role: 'Certifications & Open Source',
      period: 'Continuous Learning',
      desc: 'Consistent problem solver on LeetCode & contributor to student open source tools.',
    },
  ];

  return (
    <div className="space-y-24 py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto z-10 relative">
      {/* About Section */}
      <section id="about" className="scroll-mt-24">
        <div className="rounded-3xl bg-carbon-900/60 border border-emerald-500/20 p-8 sm:p-10 backdrop-blur-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <span className="font-mono text-xs text-emerald-400 uppercase tracking-widest bg-emerald-950/50 px-3 py-1 rounded-md border border-emerald-500/20">
                01 // BACKGROUND
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-4 mb-4">
                Engineering Tomorrow with Code & Curiosity
              </h2>
              <p className="text-slate-300 leading-relaxed mb-4 text-sm sm:text-base">
                I am <strong className="text-white">Thaman</strong>, a 2nd year Computer Science student at <strong className="text-emerald-300">K S I T, Bangalore</strong>. My coding journey revolves around building software that bridges clean user-centric interfaces with robust scalable backends.
              </p>
              <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
                Whether it's interactive canvas visualizations, modern full-stack web applications, or experimenting with intelligent AI agents, I love turning conceptual challenges into elegant real-world software.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3">
              <div className="p-4 rounded-xl bg-carbon-850/80 border border-emerald-500/15">
                <div className="text-xs font-mono text-emerald-400 uppercase">Degree Objective</div>
                <div className="text-sm font-bold text-white mt-1">B.E. Computer Science</div>
                <div className="text-xs text-slate-400">KSIT • Visvesvaraya Tech. Univ.</div>
              </div>
              <div className="p-4 rounded-xl bg-carbon-850/80 border border-emerald-500/15">
                <div className="text-xs font-mono text-lime-400 uppercase">Availability</div>
                <div className="text-sm font-bold text-white mt-1">Summer / Fall Internships</div>
                <div className="text-xs text-slate-400">Remote or Onsite (Bangalore)</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="scroll-mt-24">
        <div className="flex flex-col items-center text-center mb-10">
          <span className="font-mono text-xs text-emerald-400 uppercase tracking-widest bg-emerald-950/50 px-3 py-1 rounded-md border border-emerald-500/20 mb-3">
            02 // TECHNICAL ARSENAL
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
            Core Competencies & Stack
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-carbon-900/80 border border-emerald-500/20 p-6 backdrop-blur-md hover:border-emerald-400/60 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-carbon-850 flex items-center justify-center border border-emerald-500/30 text-emerald-400">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white">{cat.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-lg text-xs font-mono bg-carbon-850 text-slate-200 border border-carbon-700/80 hover:border-emerald-500/50 hover:text-emerald-300 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Campus Life Section */}
      <section id="campus-life" className="scroll-mt-24">
        <div className="flex flex-col items-center text-center mb-10">
          <span className="font-mono text-xs text-lime-400 uppercase tracking-widest bg-lime-950/30 px-3 py-1 rounded-md border border-lime-500/20 mb-3">
            03 // CAMPUS LIFE & INVOLVEMENT
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
            Beyond the Classroom at KSIT
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {campusHighlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-carbon-900/70 border border-carbon-800 p-6 backdrop-blur-md hover:border-emerald-500/40 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-carbon-850 flex items-center justify-center border border-carbon-700 text-lime-400 mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white mb-1">{item.title}</h3>
                <div className="text-xs font-mono text-emerald-400 mb-2">{item.role}</div>
                <div className="text-[11px] font-mono text-slate-500 mb-3">{item.period}</div>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default SkillsAndAbout;

