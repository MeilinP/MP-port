
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectCard from './components/ProjectCard';
import Skills from './components/Skills';
import { PROJECTS, EXPERIENCES, EDUCATION } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      
      <Hero />
      
      {/* Education & Experience Grid */}
      <section className="py-24 px-4 bg-slate-900/50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 id="experience" className="text-3xl font-bold mb-10 text-white flex items-center">
              <span className="w-10 h-10 bg-blue-500/10 text-blue-400 rounded-xl flex items-center justify-center mr-4 text-sm border border-blue-500/20">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </span>
              Experience
            </h2>
            <div className="space-y-12">
              {EXPERIENCES.map((exp, idx) => (
                <div key={idx} className="relative pl-8 border-l border-slate-800">
                  <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
                  <div className="mb-1 flex flex-col md:flex-row md:justify-between md:items-start">
                    <h3 className="text-xl font-bold text-slate-100">{exp.role}</h3>
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-1 md:mt-0">{exp.period}</span>
                  </div>
                  <p className="text-blue-400 font-medium mb-5">{exp.company} • {exp.location}</p>
                  <ul className="space-y-4">
                    {exp.points.map((p, i) => (
                      <li key={i} className="text-sm text-slate-400 flex items-start leading-relaxed">
                        <span className="text-blue-500/50 mr-3 mt-1.5 flex-shrink-0">
                          <svg className="w-2 h-2" fill="currentColor" viewBox="0 0 8 8"><circle cx="4" cy="4" r="3"/></svg>
                        </span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-10 text-white flex items-center">
              <span className="w-10 h-10 bg-indigo-500/10 text-indigo-400 rounded-xl flex items-center justify-center mr-4 text-sm border border-indigo-500/20">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                </svg>
              </span>
              Education
            </h2>
            <div className="space-y-6">
              {EDUCATION.map((edu, idx) => (
                <div key={idx} className="p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-colors">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-slate-100 leading-tight">{edu.institution}</h3>
                    <span className="text-[10px] font-bold text-slate-500 text-right whitespace-nowrap ml-4 uppercase tracking-tighter">{edu.period}</span>
                  </div>
                  <p className="text-sm text-indigo-400 font-medium mb-4">{edu.degree}</p>
                  {edu.gpa && <p className="text-xs text-slate-400 mb-6 font-semibold uppercase tracking-widest">GPA: {edu.gpa}</p>}
                  <div className="flex flex-wrap gap-2">
                    {edu.coursework.map(course => (
                      <span key={course} className="text-[10px] bg-slate-800 border border-slate-700 px-3 py-1.5 rounded-lg text-slate-300 font-medium uppercase tracking-wider">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="py-24 px-4 bg-slate-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Featured Projects</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
              Quantitative research and derivatives engineering projects leveraging 
              computational finance and natural language processing.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project, idx) => (
              <ProjectCard key={idx} project={project} />
            ))}
          </div>
        </div>
      </section>

      <Skills />

      {/* Personal Interests */}
      <section className="py-24 px-4 bg-slate-950">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-16 text-white tracking-tight">Personal Interests</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "Options Trading", icon: "📈" },
              { label: "Figure Skating", icon: "⛸️" },
              { label: "Ballet", icon: "🩰" },
              { label: "Orienteering", icon: "🧭" },
              { label: "Polyglot", icon: "🌍" },
              { label: "Track & Field", icon: "🏃‍♀️" },
              { label: "Fashion", icon: "👗" },
              { label: "Algorithmic Trading", icon: "🤖" },
            ].map(interest => (
              <div key={interest.label} className="p-8 rounded-3xl bg-slate-900 border border-slate-800 hover:border-blue-500/50 transition-all duration-300 group">
                <div className="text-4xl mb-4 group-hover:scale-125 transition-transform duration-500">{interest.icon}</div>
                <span className="text-sm font-bold text-slate-400 group-hover:text-white uppercase tracking-widest">{interest.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer id="contact" className="py-24 bg-slate-950 border-t border-slate-900">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Let's Connect</h2>
          <p className="text-slate-400 mb-10 max-w-lg mx-auto leading-relaxed">I am actively seeking roles in Quantitative Research and Data Science where I can apply my expertise in stochastic modeling and ML.</p>
          <div className="flex justify-center space-x-10 mb-16">
             <a href="mailto:meilinpan2000@gmail.com" className="text-slate-500 hover:text-blue-400 transition-all transform hover:scale-110">
               <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
             </a>
             <a href="https://linkedin.com/in/meilinp123" target="_blank" className="text-slate-500 hover:text-blue-400 transition-all transform hover:scale-110">
               <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
             </a>
             <a href="https://github.com/MeilinP" target="_blank" className="text-slate-500 hover:text-blue-400 transition-all transform hover:scale-110">
               <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
             </a>
          </div>
          <p className="text-xs text-slate-600 tracking-[0.2em] uppercase font-bold">
            &copy; {new Date().getFullYear()} Meilin Pan &bull; Designed for impact
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
