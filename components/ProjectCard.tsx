
import React from 'react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300">
      <div className="aspect-video bg-slate-100 relative overflow-hidden flex items-center justify-center p-8 border-b border-slate-100">
        {/* Screenshot Placeholder */}
        <div className="text-center text-slate-400">
          <svg className="w-12 h-12 mx-auto mb-3 opacity-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <p className="text-xs font-medium uppercase tracking-wider">{project.imagePlaceholder}</p>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
            {project.title}
          </h3>
          <span className="text-xs font-bold text-slate-400">{project.year}</span>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map(tag => (
            <span key={tag} className="px-2 py-1 bg-blue-50 text-blue-600 text-[10px] font-bold uppercase rounded tracking-wide">
              {tag}
            </span>
          ))}
        </div>
        
        <ul className="space-y-2 mb-6">
          {project.description.map((point, i) => (
            <li key={i} className="text-sm text-slate-600 flex items-start">
              <span className="text-blue-500 mr-2 mt-1">•</span>
              {point}
            </li>
          ))}
        </ul>
        
        {project.link && (
          <a 
            href={project.link} 
            target="_blank" 
            className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-700"
          >
            View Live Project
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
