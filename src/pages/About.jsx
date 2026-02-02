import React from "react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-4 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="md:flex items-center gap-12 lg:gap-16">
          
          {/* Image Side */}
          <div className="md:w-1/2 mb-10 md:mb-0" style={{ animation: 'fadeInLeft 0.8s ease-out' }}>
            <div className="relative group">
              
           {/* Image Side */}
        <div className="md:w-1/2 mb-10 md:mb-0 animate-fadeLeft">
          <div className="relative w-48 sm:w-80 h-48 sm:h-80 mx-auto rounded-full overflow-hidden border-4 border-white shadow-2xl">
            <img
              src="/images/me.png"
              alt="Afroz Ansari"
              className="w-full h-full object-cover"
            />
          </div>
        </div>    
              
            </div>
          </div>

          {/* Content Side */}
          <div className="md:w-1/2" style={{ animation: 'fadeInRight 0.8s ease-out' }}>
            {/* Label */}
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium">
                👋 Get to know me
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About Me
            </h2>

            {/* Description */}
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>
                I am a <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-semibold">passionate React developer</span> with experience in UI/UX design and modern frontend technologies.
              </p>
              <p>
                I love building clean, beautiful interfaces and solving complex problems through code. My goal is to create digital experiences that are not only functional but also delightful to use.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-4 my-8">
              <div className="text-center p-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg hover:border-blue-500/50 transition-colors duration-300">
                <div className="text-2xl mb-1">⚛️</div>
                <div className="text-xs text-slate-400">React Expert</div>
              </div>
              <div className="text-center p-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg hover:border-purple-500/50 transition-colors duration-300">
                <div className="text-2xl mb-1">🎨</div>
                <div className="text-xs text-slate-400">UI/UX Design</div>
              </div>
              <div className="text-center p-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg hover:border-pink-500/50 transition-colors duration-300">
                <div className="text-2xl mb-1">💡</div>
                <div className="text-xs text-slate-400">Problem Solver</div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href="#skills"
                className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50"
              >
                <span className="relative z-10">Explore My Skills</span>
                <svg 
                  className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-slate-800 border border-slate-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-slate-700 hover:border-slate-600 transition-all duration-300"
              >
                <span>Get in Touch</span>
                <svg 
                  className="w-5 h-5" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
};

export default About;