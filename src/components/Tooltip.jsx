"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export function TooltipBlock({ tooltipText, children, className }) {
  return (
    <Tooltip className={className} text={tooltipText}>
      {children}
    </Tooltip>
  );
}

function Tooltip({ text, children, className }) {
  const [isToastVisible, setIsToastVisible] = useState(false);

  const handleMouseEnter = (e) => {
    e.stopPropagation();
    setIsToastVisible(true);
  };

  const handleMouseLeave = (e) => {
    e.stopPropagation();
    setIsToastVisible(false);
  };

  return (
    <div className="relative inline-block">
      <span
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="inline-block"
      >
        {children}
      </span>

      <motion.div
        className={`absolute left-1/2 [translate:-50%_-50%] rounded-md border border-white/10 px-2 py-1 text-xs font-light whitespace-nowrap text-white shadow-lg backdrop-blur-xs select-none dark:border-black/30 dark:bg-white/90 dark:text-black/80 ${className}`}
        initial={{ opacity: 0, y: 5, filter: "blur(4px)", scale: 0.9 }}
        animate={{
          opacity: isToastVisible ? 1 : 0,
          y: isToastVisible ? 0 : 5,
          filter: isToastVisible ? "blur(0px)" : "blur(4px)",
          scale: isToastVisible ? 1 : 0.9,
        }}
        transition={{ ease: "easeInOut", duration: 0.15 }}
      >
        <span>{text}</span>
      </motion.div>
    </div>
  );
}
