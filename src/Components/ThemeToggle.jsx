import { useTheme } from "./ThemeContext";
import { motion } from "framer-motion";
import { FaSun, FaMoon } from "react-icons/fa";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle Theme"
      className="focus:outline-none"
    >
      <div
        className={`
          w-20 h-10 px-1 py-1 rounded-full flex items-center justify-between
          transition-colors duration-300 relative
          ${theme === "dark" ? "bg-neutral-800" : "bg-neutral-200"}
        `}
        style={{
          boxShadow:
            theme === "dark"
              ? "0 1px 8px 0 #0004"
              : "0 1px 8px 0 #0002",
        }}
      >
        <FaSun
          size={18}
          className={`z-10 ${theme === "light" ? "text-yellow-500" : "text-neutral-500"}`}
        />
        <FaMoon
          size={18}
          className={`z-10 ${theme === "dark" ? "text-white" : "text-neutral-500"}`}
        />

        <motion.div
          layout
          transition={{ type: "spring", stiffness: 700, damping: 30 }}
          className={`
            absolute top-1 bottom-1
            w-8 rounded-full shadow
            flex items-center justify-center
            ${theme === "light"
              ? "left-1 bg-yellow-400"
              : "right-1 left-auto bg-neutral-700"}
          `}
        >
          <motion.div
            key={theme}
            className="flex items-center justify-center"
            initial={{ rotate: theme === "light" ? 0 : -90 }}
            animate={{ rotate: 0 }}
            exit={{ rotate: theme === "light" ? 90 : 0 }}
            transition={{ duration: 0.2 }}
          >
            {theme === "light" ? (
              <FaSun size={18} className="text-white" />
            ) : (
              <FaMoon size={18} className="text-white" />
            )}
          </motion.div>
        </motion.div>
      </div>
    </button>
  );
};

export default ThemeToggle;
