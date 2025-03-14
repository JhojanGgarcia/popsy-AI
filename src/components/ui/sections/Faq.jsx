"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  AtSign,
  BadgeInfo,
  ChevronDown,
  Command,
  Diamond,
  GitPullRequest,
  Terminal,
} from "lucide-react";
import Button from "@/components/Button";

function FAQItem({ icon, question, answer, index }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.3,
        delay: index * 0.15,
        ease: "easeOut",
      }}
      className={`group overflow-hidden", "transition-all hover:bg-black/5" } z-50 rounded-2xl border border-white/20 backdrop-blur-3xl duration-200 ease-in-out dark:border-black/20`}
    >
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between gap-4 px-6 py-4"
      >
        <h3
          className={`flex items-center gap-1 text-left text-base font-medium text-white/50 transition-colors duration-200 dark:text-black ${isOpen ? "text-gray-900" : ""}`}
        >
          <span className="mr-2 rounded-full border border-white/10 p-2 text-white/50 group-hover:border-[#72b894]/15 dark:border-black/10 dark:text-black/50">
            {icon}
          </span>

          {question}
        </h3>
        <motion.div
          animate={{
            rotate: isOpen ? 180 : 0,
            scale: isOpen ? 1.1 : 1,
          }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
          className={`shrink-0 rounded-full p-0.5 transition-colors duration-200 ${
            isOpen ? "text-primary" : "text-white/50"
          }`}
        >
          <ChevronDown
            width={15}
            height={15}
            className="text-white/50 dark:text-black/50"
          />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: "auto",
              opacity: 1,
              transition: {
                height: {
                  duration: 0.4,
                  ease: [0.04, 0.62, 0.23, 0.98],
                },
                opacity: {
                  duration: 0.25,
                  delay: 0.1,
                },
              },
            }}
            exit={{
              height: 0,
              opacity: 0,
              transition: {
                height: {
                  duration: 0.3,
                  ease: "easeInOut",
                },
                opacity: {
                  duration: 0.25,
                },
              },
            }}
          >
            <div className="px-6 pt-2 pb-4 font-light">
              <motion.p
                initial={{ y: -8, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -8, opacity: 0 }}
                transition={{
                  duration: 0.3,
                  ease: "easeOut",
                }}
                className="text-sm leading-relaxed text-white/50 dark:text-black/80"
              >
                {answer}
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function Faq() {
  const faqs = [
    {
      icon: <Command width={15} height={15} />,
      question: "What is Popsy and what does it offer?",
      answer:
        "Popsy is a platform for animated components built with Framer Motion, Tailwind, and CSS, designed for frameworks like Next.js and React. Our components are AI-generated using Gemini and are free to use without attribution.",
    },
    {
      icon: <Terminal width={15} height={15} />,
      question: "Are the components free to use?",
      answer:
        "Yes! All components generated on Popsy are completely free to use, with no restrictions or attribution required. You can integrate them into your projects without any concerns.",
    },
    {
      icon: <Diamond width={15} height={15} />,
      question: "How can I start using the components?",
      answer:
        "Simply generated components and access your personal vault. Then, browse our library of animated components and copy the ready-to-use code.",
    },
    {
      icon: <GitPullRequest width={15} height={15} />,
      question: "Can I contribute my own components?",
      answer:
        "Yes! Popsy features a community vault where users can share their animated components, allowing the community to discover and reuse creative designs.",
    },
    {
      icon: <BadgeInfo width={15} height={15} />,
      question: "How can I get support or ask questions?",
      answer:
        "Our support is available through Discord and Gmail. Join our Discord community to share ideas, get help, and stay updated on new features.",
    },
  ];

  return (
    <section className="w-full py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-12 max-w-2xl text-center"
        >
          <h2 className="mb-3 text-5xl font-semibold text-white dark:text-black/90">
            Frequently{" "}
            <span className="font-pacifico text-[#72B894]"> Questions.</span>
          </h2>
          <p className="text-xl font-light text-white/80 dark:text-black/50">
            Everything you need to know about our platform.
          </p>
        </motion.div>

        <div className="mx-auto max-w-2xl space-y-2">
          {faqs.map((faq, index) => (
            <FAQItem key={index} {...faq} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mx-auto mt-12 flex max-w-md flex-col items-center justify-center rounded-lg p-6 text-center"
        ></motion.div>
      </div>
    </section>
  );
}

export default Faq;
