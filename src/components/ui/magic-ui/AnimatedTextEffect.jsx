"use client";

import { motion } from "framer-motion";

export function TextGenerateEffectMain() {
  const text = `Crafting exceptional digital experiences through innovative design and cutting-edge technology.`;

  return <TextGenerateEffect text={text} duration={0.3} />;
}

function TextGenerateEffect({ text, duration = 0.3 }) {
  return (
    <motion.div className="z-10 mx-auto mb-8 max-w-xl px-4 text-xs leading-relaxed font-light tracking-wide text-white/40 sm:text-lg md:text-xl">
      {text.split("").map((char, index) => (
        <motion.span
          key={char + index}
          className="inline-block whitespace-pre text-neutral-500 dark:text-black/80"
          initial={{ opacity: 0, filter: "blur(4px)", rotateX: 90, y: 5 }}
          whileInView={{
            opacity: 1,
            filter: "blur(0px)",
            rotateX: 0,
            y: 0,
          }}
          transition={{
            ease: "easeOut",
            duration: duration,
            delay: index * 0.015,
          }}
          viewport={{ once: true }}
        >
          {char}
        </motion.span>
      ))}
    </motion.div>
  );
}
