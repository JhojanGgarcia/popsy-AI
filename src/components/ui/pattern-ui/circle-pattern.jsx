"use client";

import react from "react";
import { motion } from "framer-motion";

function FloatingPaths() {
  const paths = Array.from({ length: 18 }, (_, i) => ({
    id: i,
    radius: 100 + i * 20,
    color: `rgba(15,23,42,${0.1 + i * 0.03})`,
    width: 0.5 + i * 0.03,
  }));

  return (
    <div className="pointer-events-none absolute inset-0">
      <svg
        strokeDasharray="10"
        strokeDashoffset="10"
        className="h-full w-full text-slate-950 dark:text-black/20"
        viewBox="-400 -400 800 800"
        fill="none"
      >
        {paths.map((path) => (
          <motion.circle
            className="dark:stroke-black/60"
            key={path.id}
            cx={0}
            cy={0}
            r={path.radius}
            stroke="#fff5"
            strokeWidth={path.width}
            strokeOpacity={0.1 + path.id * 0.03}
            initial={{
              pathLength: 0,
              opacity: 0,
              rotate: 0,
            }}
            animate={{
              pathLength: [0, 0.5, 1, 0.5, 0],
              opacity: [0, 0.5, 0.8, 0.5, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Infinity,
              ease: "easeInOut",
              times: [0, 0.25, 0.5, 0.75, 1],
            }}
          />
        ))}
      </svg>
    </div>
  );
}

export default function CirclePattern() {
  return (
    <div className="mask absolute flex h-screen w-screen items-center justify-center">
      <div className="absolute inset-0">
        <FloatingPaths />
      </div>
    </div>
  );
}
