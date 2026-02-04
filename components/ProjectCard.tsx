
import React from 'react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group bg-slate-900/50 rounded-3xl border border-slate-800 overflow-hidden hover:border-blue-500/30 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col h-full">
      <div className="aspect-[16/10] bg-slate-900 relative overflow-hidden flex items-center justify-center border-b border-slate-800 group-hover:bg-slate-800 transition-colors">
        {project.imageUrl ? (
          <img 
            src={project.imageUrl} 
            alt={project.title} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
        ) : (
          <div className="text-center p-12">
            <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-blue-500/20">
              <svg className="w-8 h-8 text-blue-500 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 max-w-[150px] mx-auto leading-relaxed">
              {project.imagePlaceholder}
            </p>
          </div>
        )}
        <div className="absolute top-4 right-4 text-[10px] font-black text-slate-700 uppercase tracking-widest bg-slate-950/50 px-2 py-1 rounded backdrop-blur-sm">{project.year}</div>
      </div>
      
      <div className="p-8 flex flex-col flex-1">
        <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map(tag => (
            <span key={tag} className="px-2.5 py-1 bg-blue-500/10 text-blue-400 text-[9px] font-black uppercase rounded-md tracking-[0.1em] border border-blue-500/10">
              {tag}
            </span>
          ))}
        </div>
        
        <ul className="space-y-4 mb-8 flex-1">
          {project.description.map((point, i) => (
            <li key={i} className="text-sm text-slate-400 flex items-start leading-relaxed">
              <span className="text-blue-500/40 mr-3 mt-1.5 flex-shrink-0">
                <svg className="w-1.5 h-1.5" fill="currentColor" viewBox="0 0 8 8"><circle cx="4" cy="4" r="3"/></svg>
              </span>
              {point}
            </li>
          ))}
        </ul>
        
        {project.link && (
          <a 
            href={project.link} 
            target="_blank" 
            className="inline-flex items-center text-xs font-black uppercase tracking-widest text-blue-400 hover:text-white transition-all group/link"
          >
            Launch Live Project
            <svg className="w-4 h-4 ml-2 transform group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
