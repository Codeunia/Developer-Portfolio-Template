
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaFileAlt } from "react-icons/fa";

const AboutMe = () => {
  const roles = [
    "Competitive Programmer",
    "Frontend Developer",
    "Video Editor"
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const viewresume = () => {
    window.open(`${import.meta.env.BASE_URL}resume.pdf`, '_blank', 'noopener,noreferrer');
  };

  return (
  <section
  id="about_me"
  className="w-full flex flex-col-reverse md:flex-row justify-between items-center px-4 sm:px-6 md:px-10 pt-10 pb-16 gap-10 md:gap-6"
>

      <motion.div
        className="md:w-1/2 text-center md:text-left"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Hi, I'm <br /> Yadhidya 👋
        </h1>

        <div className="flex justify-center md:justify-start items-center flex-wrap gap-2">
          <span className="text-lg sm:text-xl md:text-2xl">I am a</span>
          <AnimatePresence mode="wait">
            <motion.h3
              key={roles[index]}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="text-xl sm:text-2xl font-medium text-indigo-400"
            >
              {roles[index]}
            </motion.h3>
          </AnimatePresence>
        </div>

        <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-300 mt-6 max-w-md mx-auto md:mx-0">
        I’m a Frontend Developer focused on building responsive and user-friendly web interfaces. With a strong foundation in Data Structures and Algorithms, I aim to write efficient, maintainable code.
This portfolio showcases my journey through design, development, and continuous learning in both frontend technologies and core programming concepts.
        </p>

        <button
          onClick={viewresume}
          className="text-base sm:text-lg md:text-xl text-white border border-indigo-700 shadow-xl my-6 px-5 py-3 rounded-2xl bg-indigo-900 hover:bg-indigo-700 hover:scale-105 hover:shadow-indigo-500/50 transition duration-300"
        >
          <FaFileAlt className="inline-block mr-2" />
          View Resume
        </button>
      </motion.div>

      <motion.div
        className="md:w-1/2 flex justify-center"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
      <img
  src=""
  alt="yadhidya"
  className="w-full max-w-[240px] sm:max-w-[300px] md:max-w-[350px] lg:max-w-[300px] xl:max-w-[280px] object-cover rounded-full shadow-xl"
/>

      </motion.div>
    </section>
  );
};

export default AboutMe;
