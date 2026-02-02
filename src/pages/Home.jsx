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
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mt-2">
                Afroz Ansari
              </span>
            </h2>
            <p className="text-gray-600 text-sm">
              Crafting digital experiences with passion and precision
            </p>

            <button
              onClick={scrollToAbout}
              className="group relative px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl border-2 border-blue-600 overflow-hidden shadow-lg hover:shadow-xl hover:text-white transition-all duration-300 hover:scale-105"
            >
              <span className="relative z-10 flex items-center gap-2">
                About Me
                <svg
                  className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>
            </button>
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
                <span className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mt-2">
                  Developer
                </span>
              </h2>
              <p className="text-gray-600 text-sm">
                Building scalable softwares with modern technologies
              </p>
            </div>

            <button
              onClick={scrollToProjects}
              className="group relative px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl border-2 border-blue-600 overflow-hidden shadow-lg hover:shadow-xl hover:text-white transition-all duration-300 hover:scale-105"
            >
              <span className="relative z-10 flex items-center gap-2">
                View Projects
                <svg
                  className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </span>
              <div className="absolute inset-0 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              <span className="absolute inset-0 flex items-center justify-center gap-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                View Projects
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>

        {/* Stats or Features Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
          {[
            { number: "50+", label: "Projects Completed" },
            { number: "3+", label: "Years Experience" },
            { number: "100%", label: "Client Satisfaction" },
            { number: "24/7", label: "Support Available" },
          ].map((stat, index) => (
            <div
              key={index}
              className={`text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 transform ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${800 + index * 100}ms` }}
            >
              <h3 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {stat.number}
              </h3>
              <p className="text-gray-600 mt-2 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Technology Scroll Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-50 via-purple-50 to-blue-50 py-12 mt-16 border-y border-gray-200">
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
                <span className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent whitespace-nowrap">
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
