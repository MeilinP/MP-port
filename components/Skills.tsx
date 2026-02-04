
import React from 'react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center tracking-tight">Technical Stack</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
            <h3 className="text-blue-400 font-bold mb-6 text-sm uppercase tracking-widest">Programming & Libraries</h3>
            <div className="flex flex-wrap gap-2">
              {SKILLS.programming.map(s => (
                <span key={s} className="px-3 py-1.5 bg-white/10 rounded-lg text-sm font-medium">{s}</span>
              ))}
            </div>
          </div>
          
          <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
            <h3 className="text-indigo-400 font-bold mb-6 text-sm uppercase tracking-widest">Modeling & Analytics</h3>
            <div className="flex flex-wrap gap-2">
              {SKILLS.modeling.map(s => (
                <span key={s} className="px-3 py-1.5 bg-white/10 rounded-lg text-sm font-medium">{s}</span>
              ))}
            </div>
          </div>
          
          <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
            <h3 className="text-emerald-400 font-bold mb-6 text-sm uppercase tracking-widest">Cloud & Tools</h3>
            <div className="flex flex-wrap gap-2">
              {SKILLS.cloud.map(s => (
                <span key={s} className="px-3 py-1.5 bg-white/10 rounded-lg text-sm font-medium">{s}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
