
import { motion } from "framer-motion";
import { FaFileAlt } from "react-icons/fa";

const About = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen px-6 py-24 bg-gradient-to-b from-white via-gray-100 to-white dark:from-black dark:via-zinc-900 dark:to-black transition-all duration-300"
    >
      <div className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-indigo-400/10 rounded-full blur-[120px] dark:bg-indigo-600/20 z-0"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-pink-400/10 rounded-full blur-[100px] dark:bg-purple-600/10 z-0"></div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-6xl mx-auto rounded-3xl border border-white/20 dark:border-white/10 shadow-xl bg-white/60 dark:bg-white/10 backdrop-blur-2xl p-10 md:p-16 grid md:grid-cols-2 gap-12"
      >
        <div className="flex flex-col items-center md:items-start gap-6 text-center md:text-left">
          <div className="relative w-52 h-52">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 blur-2xl opacity-20 z-0 animate-pulse"></div>
            <img
              src="https://avatars.githubusercontent.com/u/9919?s=280&v=4"
              alt="Anonymous Dev"
              className="w-full h-full object-cover rounded-full relative z-10 border-4 border-white/30 dark:border-white/10 shadow-xl"
            />
          </div>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-12 py-2.5 bg-neutral-800 dark:bg-white/10 text-white dark:text-white border border-white/30 dark:border-white/10 rounded-full font-medium text-sm shadow-md hover:shadow-lg transition"
          >
            <FaFileAlt size={16} />
            View Resume
          </a>
        </div>

        <div className="flex flex-col justify-center space-y-6">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white leading-tight">
            Not a Name. Just a Mission.
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            A quiet craftsman of code. Focused on meaningful UI, scalable logic, and immersive design — without the need for introductions.
          </p>
          <p className="text-base text-gray-600 dark:text-gray-400">
            Specializing in performance-driven builds and polished front-end interactions. Every function and frame serves a purpose.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
