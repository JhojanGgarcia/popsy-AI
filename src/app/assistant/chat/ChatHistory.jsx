import { motion } from "framer-motion";
import { Trash } from "lucide-react";
import { FormatRelativeDate } from "@/utils/RelativeDate";

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
            className={`relative flex flex-col cursor-pointer rounded-xl px-2 py-1 transition-colors ${
              selectedIndex === index ? "bg-[#72b894]/10" : ""
            }`}
            onClick={() => onSelect(index)}
          >
            {/* Fecha */}
            <span className="text-xs font-light text-white/60 dark:text-black/50">
              {FormatRelativeDate(conv.lastUpdated)}
            </span>
            
            {/* Contenido */}
            <div className="flex items-center w-full pr-8">
              <span className="max-w-full truncate text-sm font-light text-white/80 underline-offset-3 transition-all duration-700 hover:underline dark:text-black/80">
                <span className="mr-1 no-underline underline-offset-0">
                  {index + 1}.
                </span>
                {conv.title}
              </span>
            </div>
            
            {/* Papelera posicionada absolutamente */}
            <button
              onClick={(e) => {
                e.stopPropagation(); // Evitar que el click se propague al contenedor
                onDelete(index, e);
              }}
              className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer rounded-lg border border-white/10 p-1 text-white/50 hover:bg-[#72b894]/10 hover:text-white/90"
              aria-label="Eliminar conversación"
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