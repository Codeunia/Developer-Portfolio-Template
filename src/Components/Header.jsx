import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaBars } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { id: "about_me", label: "About me" },
    { id: "skills", label: "Skills" },
    { id: "CareerHighlights", label: "Career Highlights" },
    { id: "Achievements", label: "Achievements" },
    { id: "education", label: "Education" },
    { id: "contact_me", label: "Contact" },
  ];

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
  };

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-black bg-opacity-80 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-4 flex justify-between items-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-100">Yadhidya</h2>

        <nav className="hidden md:block">
          <ul className="flex gap-6 text-base lg:text-lg font-medium text-gray-200">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a href={`#${link.id}`} className="hover:text-indigo-400 transition">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div
          className="md:hidden text-white text-2xl cursor-pointer z-50"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute top-full left-0 w-full bg-black bg-opacity-95 text-white px-6 pb-6 pt-2 backdrop-blur-sm md:hidden z-40"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <ul className="flex flex-col gap-4 text-lg">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={() => setIsOpen(false)}
                    className="block border-b border-gray-700 pb-2 hover:text-indigo-400 transition"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
