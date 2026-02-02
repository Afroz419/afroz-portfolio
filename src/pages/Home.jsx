import React, { useState, useEffect } from "react";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const technologies = [
    "HTML",
    "CSS",
    "JavaScript",
    "Node.js",
    "React",
    "Firebase",
    "MongoDB",
    "Express",
    "HTML",
    "CSS",
    "JavaScript",
    "Node.js",
    "React",
    "Firebase",
    "MongoDB",
    "Express",
  ];

  const scrollToProjects = () => {
    // Navigate to projects section
    window.location.href = "/projects";
  };

  const scrollToAbout = () => {
    // Navigate to about section
    window.location.href = "/about";
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-blue-100">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-center">

          {/* Left Column - Introduction */}
          <div
            className={`space-y-6 transform transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Hi, I'm
              <span className="block bg-gradient-to-r from-blue-600 to-blue-900 bg-clip-text text-transparent mt-2">
                Afroz Ansari
              </span>
            </h2>
            <p className="text-gray-600 text-sm">
              Crafting digital experiences with passion and precision
            </p>

            <div className="flex justify-between">

            <button
              onClick={scrollToAbout}
              className="group relative px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl border-2 border-blue-700 overflow-hidden shadow-lg hover:shadow-xl hover:text-white transition-all duration-300 hover:scale-105"
            >
              <span className="relative z-10 flex items-center gap-2">
                50+ Projects
              </span>
            </button>

            <button
              onClick={scrollToAbout}
              className="group relative px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl border-2 border-blue-700 overflow-hidden shadow-lg hover:shadow-xl hover:text-white transition-all duration-300 hover:scale-105"
            >
              <span className="relative z-10 flex items-center gap-2">
                2+ Experience
              </span>
            </button>
            </div>
          </div>

          {/* Center Column - Profile Image */}
          <div
            className={`flex justify-center transform transition-all duration-1000 delay-300 ${
              isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"
            }`}
          >
            <div className="relative w-40 sm:w-80 h-40 sm:h-80 rounded-full overflow-hidden shadow-2xl">
              <img
                src="/images/me.png"
                alt="Afroz Ansari"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>

          {/* Right Column - Role & CTA */}
          <div
            className={`space-y-6 transform transition-all duration-1000 delay-500 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight">
                I am a
                <span className="block bg-gradient-to-r from-blue-600 to-blue-900 bg-clip-text text-transparent mt-2">
                  Developer
                </span>
              </h2>
              <p className="text-gray-600 text-sm">
                Building scalable softwares with modern technologies
              </p>
            </div>

            <div className="flex justify-between">

            <button
              onClick={scrollToProjects}
              className="group relative px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl border-2 border-blue-600 overflow-hidden shadow-lg hover:shadow-xl hover:text-white transition-all duration-300 hover:scale-105"
            >
              <span className="relative z-10 flex items-center gap-2">
                100% Satisfaction
              </span>
              <div className="absolute inset-0 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              <span className="absolute inset-0 flex items-center justify-center gap-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                100% Satisfaction
              </span>
            </button>

            <button
              onClick={scrollToProjects}
              className="group relative px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl border-2 border-blue-600 overflow-hidden shadow-lg hover:shadow-xl hover:text-white transition-all duration-300 hover:scale-105"
            >
              <span className="relative z-10 flex items-center gap-2">
                24/7 Support
              </span>
              <div className="absolute inset-0 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              <span className="absolute inset-0 flex items-center justify-center gap-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                24/7 Support
              </span>
            </button>
          </div>

          </div>
        </div>

      </section>

      {/* Technology Scroll Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-50 via-purple-50 to-blue-50 py-8 mt-10 border-y border-gray-200">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

        <h3 className="text-center text-gray-500 font-semibold text-sm tracking-widest mb-8 uppercase">
          Technologies I Work With
        </h3>

        <div className="relative">
          <div className="flex animate-scroll">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-6 sm:mx-8 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <span className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-900 bg-clip-text text-transparent whitespace-nowrap opacity-80">
                  {tech}
                </span>
              </div>
            ))}
          </div>

          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-blue-50 to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-blue-50 to-transparent pointer-events-none"></div>
        </div>
      </section>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
          display: flex;
          width: fit-content;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }

        @keyframes bounce {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .animate-bounce {
          animation: bounce 3s ease-in-out infinite;
        }

        .delay-300 {
          animation-delay: 0.5s;
        }

        .bg-grid-pattern {
          background-image: radial-gradient(
            circle,
            #e5e7eb 1px,
            transparent 1px
          );
          background-size: 20px 20px;
        }
      `}</style>
    </main>
  );
};

export default Home;
