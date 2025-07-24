import { useTheme } from "./ThemeContext";
import { motion } from "framer-motion";
import { FaMoon, FaSun } from "react-icons/fa";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      whileTap={{ scale: 0.9, rotate: 15 }}
      onClick={toggleTheme}
      className="p-2 rounded-full transition duration-300 bg-gray-300 dark:bg-gray-800 text-yellow-500 dark:text-blue-400 shadow"
      aria-label="Toggle Theme"
    >
      {theme === "dark" ? <FaSun size={20} /> : <FaMoon size={20} />}
    </motion.button>
  );
}
