import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const linkClass = ({ isActive }) =>
    `relative text-lg font-medium transition-all duration-300 ${
      isActive
        ? 'text-blue-600'
        : 'text-gray-700 hover:text-blue-600'
    } after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-blue-600 after:transition-all after:duration-300 ${
      isActive ? 'after:w-full' : 'after:w-0 hover:after:w-full'
    }`;

  const mobileLinkClass = ({ isActive }) =>
    `block px-4 py-3 text-base font-medium transition-colors duration-200 ${
      isActive
        ? 'text-blue-600 bg-blue-50 border-l-4 border-blue-600'
        : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
    }`;

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg py-3'
            : 'bg-white shadow-sm py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <NavLink
              to="/"
              className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent hover:from-blue-700 hover:to-blue-900 transition-all duration-300"
              onClick={closeMenu}
            >
              Afroz Ansari
            </NavLink>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <ul className="flex items-center space-x-8">
                <li>
                  <NavLink to="/" className={linkClass}>
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/skills" className={linkClass}>
                    Skills
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/projects" className={linkClass}>
                    Projects
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/about" className={linkClass}>
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contact" className={linkClass}>
                    Contact
                  </NavLink>
                </li>
              </ul>

              <button className="relative px-6 py-2.5 font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg overflow-hidden group hover:shadow-lg transition-all duration-300 hover:scale-105">
                <span className="relative z-10">Hire Me</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span
                  className={`block h-0.5 w-full bg-gray-700 transform transition-all duration-300 ${
                    isOpen ? 'rotate-45 translate-y-2' : ''
                  }`}
                ></span>
                <span
                  className={`block h-0.5 w-full bg-gray-700 transition-all duration-300 ${
                    isOpen ? 'opacity-0' : ''
                  }`}
                ></span>
                <span
                  className={`block h-0.5 w-full bg-gray-700 transform transition-all duration-300 ${
                    isOpen ? '-rotate-45 -translate-y-2' : ''
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-2 pt-2 pb-4 space-y-1 bg-white border-t border-gray-100 shadow-lg">
            <NavLink to="/" className={mobileLinkClass} onClick={closeMenu}>
              Home
            </NavLink>
            <NavLink to="/skills" className={mobileLinkClass} onClick={closeMenu}>
              Skills
            </NavLink>
            <NavLink to="/projects" className={mobileLinkClass} onClick={closeMenu}>
              Projects
            </NavLink>
            <NavLink to="/about" className={mobileLinkClass} onClick={closeMenu}>
              About
            </NavLink>
            <NavLink to="/contact" className={mobileLinkClass} onClick={closeMenu}>
              Contact
            </NavLink>
            <div className="px-4 pt-2">
              <button className="w-full px-6 py-2.5 font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105">
                Hire Me
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer to prevent content from going under fixed navbar */}
      <div className="h-20"></div>
    </>
  );
};

export default Navbar;