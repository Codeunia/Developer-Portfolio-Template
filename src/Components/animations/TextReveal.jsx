import { motion } from "framer-motion";

export const FadeInText = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

export const BlurText = ({ children, className = "" }) => {
  return (
    <motion.span
      initial={{ filter: "blur(4px)", opacity: 0 }}
      whileInView={{ filter: "blur(0px)", opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className={className}
    >
      {children}
    </motion.span>
  );
};
