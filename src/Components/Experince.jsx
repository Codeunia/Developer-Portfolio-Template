import { motion } from "framer-motion";
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";

const timelineItemVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2 },
  }),
};

const EducationExperience = () => {
  const education = [
    {
      degree: "Bachelor of Technology in Computer Science",
      place: "University Name",
      year: "YYYY - YYYY",
    },
    {
      degree: "Diploma in Computer Science",
      place: "College Name",
      year: "YYYY - YYYY",
    },
  ];

  const experience = [
    {
      title: "Software Developer Intern",
      company: "Company Name",
      year: "YYYY - YYYY",
    },
    {
      title: "AI Research Intern",
      company: "Company Name",
      year: "YYYY - YYYY",
    },
  ];

  return (
    <section
      id="career"
      className="relative py-24 px-4 sm:px-6 md:px-10 lg:px-16 bg-white dark:bg-zinc-900"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center text-zinc-800 dark:text-white mb-16"
        >
          Career
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-14">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
              <FaGraduationCap className="text-indigo-600 dark:text-indigo-400" />
              Education
            </h3>
            <ul className="space-y-6">
              {education.map((edu, i) => (
                <motion.li
                  key={i}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={timelineItemVariant}
                  className="border-l-4 border-indigo-500 pl-6 relative"
                >
                  <div className="absolute -left-2 w-4 h-4 bg-indigo-500 rounded-full top-2" />
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
                    {edu.degree}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{edu.place}</p>
                  <span className="text-sm text-indigo-500 dark:text-indigo-400 font-medium">
                    {edu.year}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
              <FaBriefcase className="text-indigo-600 dark:text-indigo-400" />
              Experience
            </h3>
            <ul className="space-y-6">
              {experience.map((exp, i) => (
                <motion.li
                  key={i}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={timelineItemVariant}
                  className="border-l-4 border-indigo-500 pl-6 relative"
                >
                  <div className="absolute -left-2 w-4 h-4 bg-indigo-500 rounded-full top-2" />
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
                    {exp.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{exp.company}</p>
                  <span className="text-sm text-indigo-500 dark:text-indigo-400 font-medium">
                    {exp.year}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EducationExperience;
