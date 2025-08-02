import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './Components/Header';
import About from './Components/About';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Achievements from './Components/Achievements';
import Contact from './Components/Contact';
import AIWidget from './Components/AIWidget';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="min-h-screen w-full bg-white text-black dark:bg-black dark:text-white antialiased transition-colors duration-300 scroll-smooth">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex flex-col items-center justify-center bg-background z-50 transition-colors duration-500"
          >
            <img
              src="/image.png" 
              alt="CodeUnia Logo"
              className="w-20 h-auto mb-6 animate-pulse"
            />

            <div className="w-16 h-16 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin mb-4" />

            <p className="text-md font-semibold text-gray-800 dark:text-gray-200">
              Launching your experience...
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Powered by <span className="font-bold text-indigo-600 dark:text-indigo-400">CodeUnia</span>
            </p>
          </motion.div>
        ) : (
          <>
            <Header />
            <main className="mt-[50px]">
              <section id="about">
                <About />
                <Skills />
                <Projects />
                <Achievements />
                <Contact />
              </section>
            </main>
            <AIWidget/>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
