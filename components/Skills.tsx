
import React from 'react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-slate-950 text-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Computational Toolkit</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-10 rounded-[2.5rem] bg-slate-900 border border-slate-800 hover:border-blue-500/20 transition-all duration-500 group">
            <h3 className="text-blue-400 font-black mb-8 text-[10px] uppercase tracking-[0.4em]">Programming & ML</h3>
            <div className="flex flex-wrap gap-2.5">
              {SKILLS.programming.map(s => (
                <span key={s} className="px-4 py-2 bg-slate-800/50 rounded-xl text-xs font-bold text-slate-300 border border-slate-700/50 group-hover:border-slate-600 transition-colors">{s}</span>
              ))}
            </div>
          </div>
          
          <div className="p-10 rounded-[2.5rem] bg-slate-900 border border-slate-800 hover:border-indigo-500/20 transition-all duration-500 group">
            <h3 className="text-indigo-400 font-black mb-8 text-[10px] uppercase tracking-[0.4em]">Quant & Finance</h3>
            <div className="flex flex-wrap gap-2.5">
              {SKILLS.modeling.map(s => (
                <span key={s} className="px-4 py-2 bg-slate-800/50 rounded-xl text-xs font-bold text-slate-300 border border-slate-700/50 group-hover:border-slate-600 transition-colors">{s}</span>
              ))}
            </div>
          </div>
          
          <div className="p-10 rounded-[2.5rem] bg-slate-900 border border-slate-800 hover:border-emerald-500/20 transition-all duration-500 group">
            <h3 className="text-emerald-400 font-black mb-8 text-[10px] uppercase tracking-[0.4em]">Infra & DevTools</h3>
            <div className="flex flex-wrap gap-2.5">
              {SKILLS.cloud.map(s => (
                <span key={s} className="px-4 py-2 bg-slate-800/50 rounded-xl text-xs font-bold text-slate-300 border border-slate-700/50 group-hover:border-slate-600 transition-colors">{s}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
