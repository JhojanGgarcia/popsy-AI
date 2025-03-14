"use client";

import { useState, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import { useEnterKey } from "@/hooks/UseEnterKey";
import { generateText } from "@/services/Model";
import { Code } from "@/app/assistant/chat/Code";
import { useConversations } from "@/hooks/storage/UseConversations";
import { ChatHistory } from "@/app/assistant/chat/ChatHistory";
import { ChatInput } from "@/app/assistant/chat/ChatInput";

export default function ChatInterface() {
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);

  const {
    conversations,
    currentMessages,
    selectedIndex,
    currentConversation,
    addMessage,
    selectConversation,
    deleteConversation,
    startNewConversation,
  } = useConversations();

  useEffect(() => {
    if (currentMessages.length > 0) {
      const lastAssistantMessage = currentMessages
        .filter((msg) => msg.role === "assistant")
        .pop();

      if (lastAssistantMessage) {
        setCode(lastAssistantMessage.content);
      }
    } else {
      setCode("");
    }
  }, [currentMessages]);

  const handleSendMessage = useCallback(
    async (input) => {
      if (!input.trim() || loading) return;

      setLoading(true);

      const newUserMessage = { role: "user", content: input.trim() };
      addMessage(newUserMessage);

      const conversationHistory = currentMessages
        .concat(newUserMessage)
        .map(
          (msg) =>
            `${msg.role === "user" ? "User" : "Assistant"}: ${msg.content}`,
        )
        .join("\n");

      const prompt = `
      Framer Motion only. Provide only advanced, pure code.  

      Rules:
      - If the request is unrelated to Framer Motion or its animations, return a warning message.  
      - Ignore security concerns about \`dangerouslySetInnerHTML\`, as it's used for mapping code with the Shiki library.  
      - If the request is in Spanish, respond in Spanish, respecting conversation history.  

      Context:
      ${conversationHistory}

      Assistant:
    `;

      try {
        let animationCode = await generateText(prompt);
        animationCode = animationCode
          .replace(/```[a-zA-Z]*\n/g, "")
          .replace(/```/g, "");

        const assistantMessage = { role: "assistant", content: animationCode };
        addMessage(assistantMessage);
        setCode(animationCode);
      } catch (error) {
        console.error("Error generating text:", error);
      } finally {
        setLoading(false);
      }
    },
    [loading, currentMessages, addMessage],
  );

  const handleDeleteConversation = useCallback(
    (index, e) => {
      e.stopPropagation();
      deleteConversation(index);
    },
    [deleteConversation],
  );

  useEnterKey(
    useCallback(() => {
      const textArea = document.querySelector("textarea");
      if (textArea && textArea.value.trim()) {
        handleSendMessage(textArea.value.trim());
        textArea.value = "";
      }
    }, [handleSendMessage]),
  );

  return (
    <div className="relative flex min-h-screen w-full flex-col items-center gap-4 px-3">
      <div className="absolute mx-auto flex min-h-screen w-full max-w-3xl flex-col">
        <div className="absolute top-0 right-0 z-50 h-full w-[2px] border-r border-dashed border-white/10 transition dark:border-black/10" />
        <div className="absolute top-0 left-0 z-50 h-full w-[2px] border-r border-dashed border-white/10 transition dark:border-black/10" />
      </div>

      <ChatHistory
        conversations={conversations}
        selectedIndex={selectedIndex}
        onSelect={selectConversation}
        onDelete={handleDeleteConversation}
      />

      <motion.div
        className="relative flex w-full flex-col"
        transition={{ type: "spring", stiffness: 100, damping: 15 }}
      >
        <ChatInput
          loading={loading}
          code={code}
          onSend={handleSendMessage}
          onNewConversation={startNewConversation}
          hasConversations={conversations.length > 0}
        />

        {!loading && code && (
          <motion.div
            className="mx-auto w-full max-w-[15rem] flex-1 md:max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Code code={code} />
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
