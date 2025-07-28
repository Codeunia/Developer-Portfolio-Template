import React from 'react';
import clsx from 'clsx';

export const ModernCard = ({ children, className, variant = "glass" }) => {
  return (
    <div
      className={clsx(
        "rounded-2xl shadow-xl border p-4 transition-all duration-300",
        variant === "glass"
          ? "bg-white/10 backdrop-blur-lg border-white/20"
          : "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700",
        className
      )}
    >
      {children}
    </div>
  );
};
