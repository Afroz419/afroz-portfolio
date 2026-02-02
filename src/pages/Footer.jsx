import React from "react";

const Footer = () => {
  const socialLinks = [
    { name: "GitHub", icon: "💻", url: "#" },
    { name: "LinkedIn", icon: "💼", url: "#" },
    { name: "Twitter", icon: "🐦", url: "#" },
    { name: "Email", icon: "📧", url: "mailto:afroz@example.com" }
  ];

  const quickLinks = [
    { name: "Home", url: "#home" },
    { name: "About", url: "#about" },
    { name: "Skills", url: "#skills" },
    { name: "Projects", url: "#projects" }
  ];

  return (
    <footer className="bg-slate-50 text-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-slate-700/50">
          
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Afroz Ansari
            </h3>
            <p className="text-black text-sm leading-relaxed">
              React Developer & UI/UX Enthusiast crafting beautiful digital experiences.
            </p>
            <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-full text-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-black">Available for work</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-4 text-black">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.url}
                    className="text-black hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-400 transition-all duration-300 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold mb-4 text-black">Connect With Me</h4>
            <div className="flex justify-center md:justify-end gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="group relative w-12 h-12 bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-slate-600 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/20"
                  title={social.name}
                >
                  <span className="text-xl group-hover:scale-110 transition-transform duration-300">
                    {social.icon}
                  </span>
                  {/* Hover gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
              ))}
            </div>
            <p className="text-black text-sm mt-4">
              Let's build something amazing together!
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-black text-sm">
            © {new Date().getFullYear()} <span className="text-black font-medium">Afroz Ansari</span>. All Rights Reserved.
          </p>
          
          <div className="flex items-center gap-6 text-sm text-black">
            <a href="#" className="hover:text-white transition-colors duration-300">
              Privacy Policy
            </a>
            <span className="text-black">•</span>
            <a href="#" className="hover:text-white transition-colors duration-300">
              Terms of Service
            </a>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <a
          href="#home"
          className="absolute bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-110 group"
          aria-label="Scroll to top"
        >
          <svg 
            className="w-6 h-6 text-black transform group-hover:-translate-y-1 transition-transform duration-300" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </a>
      </div>

      {/* Bottom gradient line */}
      <div className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
    </footer>
  );
};

export default Footer;