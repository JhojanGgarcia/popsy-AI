import { motion } from "framer-motion";
import { Trash } from "lucide-react";

export function ChatHistory({
  conversations,
  selectedIndex,
  onSelect,
  onDelete,
}) {
  return (
    <motion.div className="absolute left-0 z-40 hidden h-full w-64 flex-col items-center justify-start p-4 backdrop-blur-sm xl:flex">
      <div className="flex max-h-[calc(100vh-120px)] w-full max-w-xs flex-col gap-2 overflow-y-auto">
        {conversations.map((conv, index) => (
          <motion.div
            key={`chat-${index}`}
            className={`flex cursor-pointer items-center justify-between gap-5 rounded-xl px-2 py-1 transition-colors ${
              selectedIndex === index ? "bg-[#72b894]/10" : ""
            }`}
            onClick={() => onSelect(index)}
          >
            <span className="max-w-[80%] truncate text-sm font-light text-white/80 underline-offset-3 transition-all duration-700 hover:underline dark:text-black/80">
              <span className="mr-1 no-underline underline-offset-0">
                {index + 1}.
              </span>
              {conv.title}
            </span>
            <button
              onClick={(e) => onDelete(index, e)}
              className="cursor-pointer rounded-lg border border-white/10 p-1 text-white/50 hover:bg-[#72b894]/10 hover:text-white/90"
            >
              <Trash className="h-4 w-4 text-white/50 dark:text-black/50" />
            </button>
          </motion.div>
        ))}

        {conversations.length === 0 && (
          <div className="p-4 text-center text-sm font-light text-white/50 dark:text-black/50">
            No conversations yet.
          </div>
        )}
      </div>
    </motion.div>
  );
}
