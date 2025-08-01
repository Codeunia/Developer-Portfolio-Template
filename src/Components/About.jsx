import { motion } from "framer-motion";
import { FaFileAlt } from "react-icons/fa";

const About = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen px-6 py-24 bg-background transition-colors duration-500"
    >
      <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-indigo-500/20 dark:bg-indigo-400/30 rounded-full blur-[120px] z-0" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-rose-400/20 dark:bg-purple-600/20 rounded-full blur-[100px] z-0" />

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative z-10 max-w-6xl mx-auto bg-white dark:bg-zinc-900/70 backdrop-blur-xl border border-gray-200 dark:border-white/10 shadow-xl rounded-3xl p-10 md:p-16 grid md:grid-cols-2 gap-10"
      >
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-col items-center md:items-start gap-6 text-center md:text-left"
        >
          <div className="relative w-48 h-48">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 to-fuchsia-500 blur-2xl opacity-30 animate-pulse z-0" />
            <img
              src="https://avatars.githubusercontent.com/u/9919?s=280&v=4"
              alt="Profile"
              className="w-full h-full object-cover rounded-full border-4 border-white/50 dark:border-white/20 shadow-lg relative z-10"
            />
          </div>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-12 py-2.5 text-white bg-indigo-600 dark:bg-indigo-500 hover:bg-indigo-700 dark:hover:bg-indigo-400 transition rounded-full text-sm font-semibold shadow"
          >
            <FaFileAlt />
            View Resume
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-5"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white leading-snug">
            Not a Name. Just a Mission.
          </h2>
          <p className="text-lg text-gray-800 dark:text-gray-300">
            I’m a focused craftsman of code. I build clean UI, efficient logic, and immersive interactions — all without saying a word.
          </p>
          <p className="text-base text-gray-700 dark:text-gray-400">
            Specializing in performance-driven apps and polished front-end systems. Every frame, every function, every detail matters.
          </p>
          <p className="text-base text-indigo-600 dark:text-indigo-400 font-medium">
            Driven by clarity. Designed for performance. Delivered with precision.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
