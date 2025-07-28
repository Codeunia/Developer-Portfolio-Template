
import { motion } from 'framer-motion';
import { useRef } from 'react';

export const TiltCard = ({ children, maxTilt = 15 }) => {
  const ref = useRef(null);

  const handleMouseMove = (e) => {
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;
    const rotateX = (maxTilt / 2 - x * maxTilt).toFixed(2);
    const rotateY = (y * maxTilt - maxTilt / 2).toFixed(2);
    ref.current.style.transform = `rotateX(${rotateY}deg) rotateY(${rotateX}deg)`;
  };

  const handleMouseLeave = () => {
    ref.current.style.transform = `rotateX(0deg) rotateY(0deg)`;
  };

  return (
    <div
      ref={ref}
      className="transition-transform duration-300"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
};

export const HoverGlow = ({ children }) => (
  <div className="relative group">
    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-500 pointer-events-none" />
    {children}
  </div>
);

export const MagneticButton = ({ children, className }) => (
  <div className={`transition-transform duration-300 hover:scale-[1.03] active:scale-95 ${className}`}>
    {children}
  </div>
);

// ModernCard.jsx
export const ModernCard = ({ children, variant = "glass", className = "" }) => {
  return (
    <div
      className={`rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 ${
        variant === "glass"
          ? "bg-white/10 backdrop-blur-md dark:bg-white/5"
          : "bg-white dark:bg-gray-900"
      } ${className}`}
    >
      {children}
    </div>
  );
};
