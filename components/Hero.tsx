
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="about" className="pt-32 pb-20 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="w-48 h-48 md:w-64 md:h-64 flex-shrink-0 bg-slate-200 rounded-2xl overflow-hidden border-4 border-white shadow-xl relative group">
          {/* Placeholder for Profile Picture */}
          <div className="absolute inset-0 flex items-center justify-center text-slate-400 text-center p-4">
            <span className="font-medium">Profile Picture Placeholder</span>
          </div>
          <img 
            src="https://picsum.photos/400/400?grayscale" 
            alt="Meilin Pan" 
            className="w-full h-full object-cover opacity-0 group-hover:opacity-10 transition-opacity"
          />
        </div>
        
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-4 tracking-tight">
            Meilin Pan
          </h1>
          <h2 className="text-xl md:text-2xl text-blue-600 font-medium mb-6">
            Data Scientist | Quantitative Analyst
          </h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl">
            Pursuing an MS in Applied Data Science at USC. Specializing in financial engineering, 
            market microstructure, and high-performance machine learning pipelines. 
            Passionate about extracting alpha and building robust quantitative models.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <a href="mailto:meilinpan2000@gmail.com" className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200">
              Email Me
            </a>
            <a href="https://linkedin.com/in/meilinp123" target="_blank" className="px-6 py-3 bg-white text-slate-700 border border-slate-200 rounded-lg font-medium hover:bg-slate-50 transition-colors">
              LinkedIn
            </a>
            <a href="https://github.com/MeilinP" target="_blank" className="px-6 py-3 bg-white text-slate-700 border border-slate-200 rounded-lg font-medium hover:bg-slate-50 transition-colors">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
