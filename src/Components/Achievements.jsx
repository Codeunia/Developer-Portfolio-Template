// Achievements.jsx
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const achievements = [
  {
    title: "Winner - CodeHack 2024",
    description: "Secured 1st place among 500+ teams in a national-level hackathon hosted by TechNova.",
    date: "Mar 2024",
    tag: "Hackathon",
    icon: "🏆",
    link: "https://example.com/codehack-certificate"
  },
  {
    title: "Top 10% - LeetCode Spring Challenge",
    description: "Ranked in the top 10% globally in LeetCode's Spring coding competition.",
    date: "Apr 2024",
    tag: "Competitive",
    icon: "💻",
    link: "https://leetcode.com/spring-challenge-2024"
  },
  {
    title: "Certification - Full Stack Development",
    description: "Completed Meta’s Full Stack Professional Certificate (React, Node, MongoDB).",
    date: "Jan 2024",
    tag: "Certification",
    icon: "📜",
    link: "https://coursera.org/meta-fullstack"
  },
  {
    title: "Speaker - DevSummit Chennai",
    description: "Delivered a lightning talk on Web Performance Optimization for 100+ attendees.",
    date: "Feb 2024",
    tag: "Speaking",
    icon: "🎤",
    link: "https://devsummit.in/speaker-lineup"
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

const Achievements = () => {
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.1 });

  return (
    <section
      id="achievements"
      className="py-24 px-4 max-w-6xl mx-auto relative z-10"
    >
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2 className="text-5xl font-bold tracking-tight bg-gradient-to-r from-purple-500 to-indigo-500 text-transparent bg-clip-text">
          Achievements
        </h2>
        <p className="mt-2 text-zinc-500 dark:text-zinc-400 text-base max-w-xl mx-auto">
          Highlights of accomplishments that define our impact.
        </p>
      </motion.div>

      <motion.div
        ref={ref}
        variants={container}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        className="grid sm:grid-cols-2 lg:grid-cols-2 gap-10"
      >
        {achievements.map((achieve, i) => (
          <motion.div
            key={i}
            variants={item}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.4 }}
            className="rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 p-6 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="text-4xl">{achieve.icon}</div>
              <div>
                <h3 className="text-xl font-semibold text-zinc-800 dark:text-white">
                  {achieve.title}
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-300 mt-1">
                  {achieve.description}
                </p>
              </div>
            </div>

            <div className="mt-auto flex flex-col gap-3">
              <div className="flex justify-between items-center text-sm text-zinc-500 dark:text-zinc-400">
                <span>{achieve.date}</span>
                <span className="inline-block bg-indigo-100 dark:bg-indigo-800 text-indigo-700 dark:text-white px-3 py-0.5 rounded-full">
                  {achieve.tag}
                </span>
              </div>
              <a
                href={achieve.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-center mt-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-md shadow-md"
              >
                📄 View Certification
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Achievements;
