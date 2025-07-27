import { motion } from "framer-motion";
import { FaCode, FaTools, FaCogs } from "react-icons/fa";

const skillsData = [
  {
    title: "Frontend",
    icon: <FaCode className="text-3xl text-sky-600 dark:text-sky-400" />, 
    skills: ["React", "Tailwind CSS", "Framer Motion", "JavaScript", "HTML", "CSS"]
  },
  {
    title: "Backend",
    icon: <FaCogs className="text-3xl text-emerald-600 dark:text-emerald-400" />, 
    skills: ["Node.js", "Express.js", "MongoDB", "SQL"]
  },
  {
    title: "Tools & Others",
    icon: <FaTools className="text-3xl text-indigo-600 dark:text-indigo-400" />, 
    skills: ["Git", "GitHub", "VS Code", "Postman", "Figma"]
  }
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative px-6 py-24 transition-all duration-300 bg-transparent"
    >
      {/* Subtle animated background glow */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.15 }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ once: true }}
        className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-indigo-400 via-purple-400 to-pink-400 dark:from-indigo-800 dark:via-purple-700 dark:to-pink-600 rounded-full blur-[150px] z-0"
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-6xl mx-auto text-center"
      >
        <h2 className="text-4xl font-bold mb-6 tracking-tight">Technical Arsenal</h2>
        <p className="mb-12 max-w-2xl mx-auto">
          The tools and technologies I specialize in to build fast, scalable, and visually appealing applications.
        </p>

        <div className="grid md:grid-cols-3 gap-10">
          {skillsData.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-white/30 dark:bg-white/10 border border-white/20 dark:border-white/10 shadow-lg hover:shadow-xl backdrop-blur-md transition-transform hover:scale-[1.02] group"
            >
              <div className="mb-4 flex items-center justify-center gap-3">
                {section.icon}
                <h3 className="text-xl font-semibold group-hover:underline underline-offset-4">
                  {section.title}
                </h3>
              </div>
              <ul className="flex flex-wrap justify-center gap-3 mt-4">
                {section.skills.map((skill, idx) => (
                  <li
                    key={idx}
                    className="px-4 py-1 bg-white/40 dark:bg-white/5 border border-white/20 dark:border-white/10 rounded-full text-sm shadow-inner"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
