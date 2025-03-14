"use client";

import { motion } from "framer-motion";

export function BentoCard({ dark = false, className = "", graphic }) {
  return (
    <motion.div
      initial="idle"
      whileHover="active"
      variants={{ idle: {}, active: {} }}
      data-dark={dark ? "true" : undefined}
      className={`group relative flex h-full w-full flex-col overflow-hidden${className}`}
    >
      <div className="relative h-80 shrink-0">{graphic}</div>
    </motion.div>
  );
}
