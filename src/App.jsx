// src/App.jsx
import React from "react";
import "tailwindcss"

import Footer from "./pages/Footer";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import SkillPage from "./components/SkillPage";
import ProjectPage from "./components/ProjectPage";
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <Navbar/>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/skills" element={<SkillPage />}/>
        <Route path="/projects" element={<ProjectPage />}/>
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
