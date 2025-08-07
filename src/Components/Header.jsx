import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Career", href: "#career" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50  backdrop-blur-lg border-b border-white/20 dark:border-white/10 shadow-lg rounded-b-2xl">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        <h1 className="text-xl font-bold  drop-shadow-sm tracking-wide">
          Yadhidya.dev
        </h1>

        <nav className="hidden md:flex space-x-6  font-medium">
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="hover:text-cyan-400 transition-colors duration-200"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
           <ThemeToggle/>
        </div>

        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className=" text-xl">
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            className="md:hidden overflow-hidden bg-white/10 dark:bg-black/10 backdrop-blur-md border-t border-white/10"
          >
            <div className="flex flex-col items-center py-4 space-y-4 ">
              {navLinks.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="hover:text-cyan-400 transition-colors duration-200"
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </a>
              ))}
               <ThemeToggle/>
              
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;