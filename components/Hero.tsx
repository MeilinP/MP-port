
import React from 'react';

const Hero: React.FC = () => {
  // Use absolute path relative to the domain root
  const profilePicUrl = "/IMG_7143.JPG"; 

  return (
    <section id="about" className="pt-40 pb-24 px-4 overflow-hidden relative">
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[500px] h-[500px] bg-indigo-500/5 blur-[120px] rounded-full"></div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16 relative z-10">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          <div className="w-56 h-56 md:w-72 md:h-72 flex-shrink-0 bg-slate-900 rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative">
            <img 
              src={profilePicUrl} 
              alt="Meilin Pan" 
              className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                console.error("Image failed to load at path:", profilePicUrl);
                // Fallback to a placeholder if the local file isn't found
                target.src = "https://picsum.photos/600/600?grayscale";
                target.classList.add('opacity-20');
              }}
            />
          </div>
        </div>
        
        <div className="flex-1 text-center md:text-left">
          <div className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-[0.3em] mb-8">
            Currently in Los Angeles, CA and willing to relocate
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter leading-[1.1]">
            Meilin Pan
          </h1>
          <h2 className="text-xl md:text-3xl font-medium text-slate-300 mb-8 max-w-2xl leading-relaxed">
            Architecting <span className="text-blue-400">Alpha</span> through Machine Learning and <span className="text-indigo-400">Computational Finance</span>.
          </h2>
          <p className="text-lg text-slate-500 mb-12 max-w-xl leading-relaxed">
            Master of Science at Viterbi School of Engineering at USC specializing in Applied Data Science. I enjoy testing out different strategies specifically for option trading. 
          </p>
          
          <div className="flex flex-wrap gap-5 justify-center md:justify-start">
            <a href="mailto:meilinpan2000@gmail.com" className="px-10 py-4 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-500 transition-all shadow-[0_10px_30px_rgba(37,99,235,0.3)] hover:scale-105 active:scale-95">
              Contact Me
            </a>
            <a href="https://linkedin.com/in/meilinp123" target="_blank" className="px-10 py-4 bg-slate-900 text-slate-100 border border-slate-800 rounded-2xl font-bold hover:bg-slate-800 transition-all hover:scale-105 active:scale-95">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
