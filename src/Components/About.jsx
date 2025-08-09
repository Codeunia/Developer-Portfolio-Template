import { motion } from "framer-motion";
import { FaArrowRight, FaDownload } from "react-icons/fa";

const About = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen bg-gradient-to-br from-slate-100 to-white dark:from-zinc-900 dark:to-black py-20 px-4 sm:px-6 md:px-10 lg:px-16"
    >
      <div className="absolute top-10 left-10 w-72 h-72 bg-indigo-400/20 rounded-full blur-[100px] z-0" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/10 rounded-full blur-[120px] z-0" />

      <div className="relative z-10 max-w-[1200px] mx-auto grid md:grid-cols-2 items-center gap-12 md:gap-16">
        
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex flex-col items-center md:items-start gap-8"
        >
          <div className="relative w-48 sm:w-56 h-48 sm:h-56 rounded-full overflow-hidden shadow-xl border-4 border-white dark:border-white/10">
            <img
              src="https://avatars.githubusercontent.com/u/9919?s=280&v=4"
              alt="Profile"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/10 dark:bg-black/30" />
          </div>

          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-3 px-9 py-3 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold rounded-full shadow transition"
          >
            <FaDownload className="text-lg" />
            Download Resume
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
            Hello, I’m Not Just a Developer —
            <br />
            <span className="text-indigo-600 dark:text-indigo-400">
              I’m an Experience Creator.
            </span>
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            With every line of code, I strive to build not just products, but experiences. I combine performance, precision, and aesthetics to deliver immersive solutions.
          </p>
          <div className="border-l-4 border-indigo-500 pl-4 mt-6 space-y-4">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                💡 Vision
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Build systems that simplify life, accelerate impact, and look beautiful doing it.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                🛠️ Skills
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                UI/UX, React, Tailwind, Framer Motion, Unity, C#, and a sprinkle of obsession for perfection.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                🎯 Motto
              </h3>
              <p className="text-indigo-600 dark:text-indigo-400 font-medium">
                “Function with flair. Logic with love.”
              </p>
            </div>
          </div>

          <button className="group inline-flex items-center gap-2 text-indigo-700 dark:text-indigo-300 text-sm font-semibold hover:underline transition">
            Let’s Build Together
            <FaArrowRight className="transition transform group-hover:translate-x-1" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
