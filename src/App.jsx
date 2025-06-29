import React, { useEffect } from 'react';
import './App.css'
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  useEffect(() => {
    // Add smooth scrolling behavior
    document.documentElement.style.scrollBehavior = 'smooth';

    // Cleanup
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Background pattern */}
      <motion.div
        className="fixed inset-0 opacity-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #3B82F6 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, #8B5CF6 0%, transparent 50%)`,
        }}></div>
      </motion.div>

      <div className="relative z-10">
        <Navbar />
        <Hero></Hero>
        <About></About>
        <Skills></Skills>
        <Education></Education>
        <Experience></Experience>
        <Projects></Projects>
        <Contact></Contact>

      </div>
    </motion.div>
  )
}

export default App
