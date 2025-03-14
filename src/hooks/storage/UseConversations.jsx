"use client";

import { useState, useCallback, useMemo, useEffect } from "react";
import { useLocalStorage } from "@/hooks/storage/UseLocalStorage";

export function useConversations() {
  const [conversations, setConversations] = useLocalStorage(
    "conversations",
    [],
  );
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [currentMessages, setCurrentMessages] = useState([]);
  const [idCounter, setIdCounter] = useState(1);

  const currentConversation = useMemo(
    () => (selectedIndex >= 0 ? conversations[selectedIndex] : null),
    [selectedIndex, conversations],
  );

  useEffect(() => {
    if (currentConversation) {
      setCurrentMessages(currentConversation.messages);
    }
  }, [currentConversation]);

  const generateUniqueId = useCallback(() => {
    setIdCounter((prev) => prev + 1);
    return `conv_${idCounter}`;
  }, [idCounter]);

  const addMessage = useCallback(
    (message) => {
      setCurrentMessages((prev) => {
        const newMessages = [...prev, message];

        if (selectedIndex === -1 && newMessages.length >= 2) {
          const title =
            newMessages[0].content.substring(0, 30) +
            (newMessages[0].content.length > 30 ? "..." : "");

          const newConversation = {
            id: generateUniqueId(),
            title,
            messages: newMessages,
            lastUpdated: Date.now(),
          };

          setConversations((prevConversations) => [
            ...prevConversations,
            newConversation,
          ]);
          setSelectedIndex(conversations.length);
        } else if (selectedIndex !== -1) {
          setConversations((prevConversations) => {
            const updated = [...prevConversations];
            updated[selectedIndex] = {
              ...updated[selectedIndex],
              messages: newMessages,
              lastUpdated: Date.now(),
            };
            return updated;
          });
        }

        return newMessages;
      });
    },
    [selectedIndex, conversations.length, setConversations, generateUniqueId],
  );

  const selectConversation = useCallback(
    (index) => {
      if (index >= 0 && index < conversations.length) {
        setSelectedIndex(index);
        setCurrentMessages(conversations[index].messages);
      }
    },
    [conversations],
  );

  const deleteConversation = useCallback(
    (index) => {
      setConversations((prevConversations) => {
        const updated = [...prevConversations];
        updated.splice(index, 1);
        return updated;
      });

      if (index === selectedIndex) {
        setSelectedIndex(-1);
        setCurrentMessages([]);
      } else if (index < selectedIndex) {
        setSelectedIndex((prevIndex) => prevIndex - 1);
      }
    },
    [selectedIndex, setConversations],
  );

  const startNewConversation = useCallback(() => {
    setCurrentMessages([]);
    setSelectedIndex(-1);
  }, []);

  return {
    conversations,
    currentMessages,
    selectedIndex,
    currentConversation,
    addMessage,
    selectConversation,
    deleteConversation,
    startNewConversation,
  };
}
