import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const achievements = [
  {
    title: "1st Place – Innovation Sprint",
    org: "TechSpark University",
    date: "Jan 2024",
    desc: "Led a team to victory in a national-level innovation sprint by building a smart agriculture prototype in under 48 hours.",
    link: "https://example.com/innovation-cert",
  },
  {
    title: "Winner – UX Design Challenge",
    org: "DesignX · Remote",
    date: "Mar 2024",
    desc: "Created an intuitive financial app prototype that won the judge's choice award for usability and accessibility.",
    link: "https://example.com/ux-cert",
  },
  {
    title: "Top 5 Finalist – AI Hackfest",
    org: "CodeCore Labs",
    date: "Aug 2023",
    desc: "Developed an AI-based fraud detection model that achieved 93% accuracy and made it to the national finals.",
    link: "https://example.com/ai-cert",
  },
  {
    title: "Internship – QuantumSoft",
    org: "QuantumSoft Solutions Pvt Ltd",
    date: "Jul 2023 – Dec 2023",
    desc: "Worked on full-stack dashboards and built custom analytics tools using React and Flask.",
    link: "https://example.com/quantum-intern",
  },
  {
    title: "Best Project – Capstone Expo",
    org: "Digital Minds Institute",
    date: "Nov 2022",
    desc: "Presented a smart energy monitoring system that was selected as the best capstone project of the semester.",
    link: "https://example.com/expo-cert",
  },
  {
    title: "2nd Place – Debug Clash",
    org: "DevHackers Conference",
    date: "May 2024",
    desc: "Ranked 2nd out of 300+ participants in a timed debugging and optimization contest.",
    link: "https://example.com/debug-cert",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.7, ease: "easeOut" },
  }),
};

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="relative w-full px-6 py-24 bg-gradient-to-b from-[#f5f7fb] via-[#e6ecf8] to-[#f5f7fb] dark:from-[#0c0b16] dark:via-[#1a152d] dark:to-[#0c0b16] transition-colors duration-500"
    >
      {/* Background Glows */}
      <div className="absolute -top-32 -left-24 w-[500px] h-[500px] bg-[#7f5af0]/20 dark:bg-[#ff6ac1]/20 rounded-full blur-[160px] z-0" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#ffb86c]/20 dark:bg-[#7f5af0]/20 rounded-full blur-[140px] z-0" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="relative z-10 text-center mb-20"
      >
        <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-2 tracking-tight">
          Achievements
        </h2>
        <p className="text-base text-gray-700 dark:text-gray-300">
          Highlights of my recent victories and milestones
        </p>
      </motion.div>

      {/* Cards */}
      <div className="relative z-10 max-w-6xl mx-auto grid gap-12 md:grid-cols-2 lg:grid-cols-3">
        {achievements.map((item, i) => (
          <motion.div
            key={i}
            custom={i}
            initial="hidden"
            whileInView="show"
            variants={cardVariants}
            viewport={{ once: true }}
            className="group relative bg-white/70 dark:bg-white/5 backdrop-blur-3xl border border-white/20 dark:border-white/10 rounded-3xl p-6 shadow-2xl hover:shadow-indigo-500/30 hover:scale-[1.03] transition-all duration-300"
          >
            <div className="flex flex-col gap-3">
              <p className="text-sm text-[#7f5af0] dark:text-[#ffb86c] font-medium tracking-wide">
                {item.date}
              </p>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white leading-snug">
                {item.title}
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 font-semibold">
                {item.org}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                {item.desc}
              </p>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-[#7f5af0] dark:text-[#ffb86c] text-sm font-semibold mt-3 hover:underline"
              >
                View Certificate <ExternalLink className="ml-1 w-4 h-4" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
