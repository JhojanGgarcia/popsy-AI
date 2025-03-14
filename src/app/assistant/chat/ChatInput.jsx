"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Command,
  Loader2,
  MessageCircle,
  MessageCircleDashed,
} from "lucide-react";
import Button from "@/components/Button";
import DownloadButton from "@/utils/HandleDownload";

export function ChatInput({
  loading,
  code,
  onSend,
  onNewConversation,
  hasConversations,
}) {
  const [input, setInput] = useState("");
  const [displayText, setDisplayText] = useState("");
  const fullText = "How can I help you?";
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (charIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + fullText[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 50); // Adjust the timeout for speed

      return () => clearTimeout(timeout);
    }
  }, [charIndex, fullText]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    onSend(input.trim());
    setInput("");
  };

  const getLetterStyle = (index) => {
    const shouldBlur = index >= charIndex;
    return {
      filter: shouldBlur ? "blur(5px)" : "none",
      opacity: shouldBlur ? 0 : 1,
      transition: "filter 0.3s ease-out, opacity 0.3s ease-out",
      display: "inline-block",
    };
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full gap-2">
      <div className="flex min-h-full w-full">
        <div className="sticky top-0 mx-auto mt-20 flex w-full max-w-3xl flex-col items-center justify-start px-3">
          <div className="relative w-full transition-all duration-300">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="px-4 py-6 text-center text-xl text-nowrap whitespace-break-spaces text-white md:text-4xl dark:text-black/90"
            >
              {fullText.split("").map((letter, index) => {
                const isHelp =
                  index >= fullText.indexOf("help") &&
                  index < fullText.indexOf("help") + 4;

                return (
                  <motion.span
                    key={index}
                    style={getLetterStyle(index)}
                    className={isHelp ? "font-pacifico text-[#72b894]" : ""}
                  >
                    {letter}
                  </motion.span>
                );
              })}
            </motion.h1>

            <div className="rounded-b-xl">
              <div className="peer w-full resize-none rounded-2xl shadow-[0_4px_10px_2px_rgba(251,251,251,0.02),_0_3px_1.5px_rgba(0,0,0,0.4),_inset_0_-20px_1px_1px_rgba(0,0,0,0.01),_inset_0_-2px_1px_0.5px_rgba(255,255,255,0.08)] placeholder:font-light focus:outline-none dark:shadow-[0_4px_10px_2px_rgba(251,251,251,0.02),_0_3px_1.5px_rgba(0,0,0,0.1),_inset_0_-20px_1px_1px_rgba(0,0,0,0.01),_inset_0_-2px_1px_0.5px_rgba(255,255,255,0.08)]">
                <div className="sticky bottom-0 z-10 flex flex-col rounded-xl">
                  <textarea
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask to build animations…"
                    spellCheck="false"
                    className="w-full flex-1 resize-none bg-transparent p-3 text-sm font-light text-white ring-0 outline-none placeholder:font-light placeholder:text-white dark:text-black dark:placeholder:text-black/50"
                  />
                  <div className="flex items-center gap-2 p-3">
                    <div className="flex flex-col justify-center gap-1 md:flex-row">
                      <motion.div
                        layout
                        transition={{
                          type: "spring",
                          stiffness: 100,
                          damping: 15,
                        }}
                        className="bottom-2 left-2 inline-flex items-center gap-2"
                      >
                        <DownloadButton code={code} />
                      </motion.div>
                      <Button
                        type="submit"
                        icon={
                          loading ? (
                            <Loader2 className="h-4 w-4 animate-spin" />
                          ) : (
                            <Command className="h-4 w-4" />
                          )
                        }
                        label={loading ? "Generating..." : "Send"}
                        className="absolute right-2 bottom-3 flex items-center gap-1"
                        disabled={loading}
                      />
                      <button
                        onClick={onNewConversation}
                        className="flex cursor-pointer items-center gap-2 rounded-lg border border-dashed border-white/10 px-2 py-1 text-sm font-light text-nowrap text-white/90 transition-all duration-700 hover:bg-[#72b894]/10 dark:border-black/30 dark:text-black/90"
                      >
                        {hasConversations ? (
                          <MessageCircle className="h-4 w-4 text-[#72b894]" />
                        ) : (
                          <MessageCircleDashed className="h-4 w-4 text-[#72b894]" />
                        )}
                        New Conversation
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
