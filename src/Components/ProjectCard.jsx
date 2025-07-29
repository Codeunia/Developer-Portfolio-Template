
import { motion } from "framer-motion";
import { useState } from "react";

const ProjectCard = ({ project, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  const cardVariant = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <>
      <motion.div
        variants={cardVariant}
        whileHover={{
          scale: 1.03,
          rotateX: 4,
          rotateY: -4,
          boxShadow: "0 20px 50px rgba(0,0,0,0.25)",
        }}
        transition={{ type: "spring", stiffness: 200, damping: 18 }}
        className="relative group bg-white dark:bg-zinc-900 border dark:border-zinc-700 border-zinc-200 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transform transition-all duration-300"
      >
        {/* Floating index */}
        <div className="absolute top-4 left-4 text-sm font-semibold text-zinc-400 dark:text-zinc-600 tracking-widest z-10">
          0{index + 1}
        </div>

        {/* Image */}
        <div className="relative cursor-pointer" onClick={() => setIsOpen(true)}>
          <img
            src={project.image}
            alt={project.title}
            className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition duration-300"></div>
        </div>

        {/* Card Content */}
        <div className="p-6">
          <h3 className="text-2xl font-bold text-zinc-800 dark:text-white mb-2">
            {project.title}
          </h3>
          <p className="text-sm text-zinc-600 dark:text-zinc-300 mb-4 leading-relaxed">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-5">
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className="px-2 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-indigo-500 to-pink-500 text-white shadow"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex gap-3">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 text-sm font-semibold rounded-full bg-zinc-100 dark:bg-zinc-800 text-blue-600 dark:text-blue-400 border border-blue-300 dark:border-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900 transition-all duration-300"
            >
              Visit Site →
            </a>
            <a
              href={project.repo || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 text-sm font-semibold rounded-full bg-zinc-100 dark:bg-zinc-800 text-green-600 dark:text-green-400 border border-green-300 dark:border-green-600 hover:bg-green-50 dark:hover:bg-green-900 transition-all duration-300"
            >
              GitHub ↗
            </a>
          </div>
        </div>
      </motion.div>

      {/* Modal (Lightbox) */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="max-w-4xl w-full bg-white dark:bg-zinc-900 p-6 rounded-2xl shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-zinc-800 dark:text-zinc-100 text-xl font-bold hover:text-red-500"
              onClick={() => setIsOpen(false)}
            >
              ✕
            </button>
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto rounded-xl mb-4"
            />
            <h2 className="text-3xl font-bold mb-2 text-zinc-800 dark:text-white">
              {project.title}
            </h2>
            <p className="text-zinc-700 dark:text-zinc-300 mb-4">
              {project.description}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCard;
