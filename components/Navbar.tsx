
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#" className="text-2xl font-black bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent tracking-tighter">
          MP
        </a>
        <div className="hidden md:flex space-x-10 text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
          <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
          <a href="#experience" className="hover:text-blue-400 transition-colors">Experience</a>
          <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
          <a href="#skills" className="hover:text-blue-400 transition-colors">Skills</a>
          <a href="#contact" className="px-4 py-2 border border-slate-700 rounded-full hover:border-blue-400 hover:text-blue-400 transition-all">Contact</a>
        </div>
        <button className="md:hidden p-2 text-slate-400">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
