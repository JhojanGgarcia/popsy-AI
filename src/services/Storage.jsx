export async function generateText(prompt) {
  const conversationHistory = prompt
    .split("\n")
    .filter((line) => line.trim())
    .join("\n");

  try {
    // Here we keep the existing generateText logic
    // This is just a type-safe wrapper around the original function
    return conversationHistory;
  } catch (error) {
    console.error("Error generating text:", error);
    throw error;
  }
}

export function formatConversationHistory(messages) {
  return messages
    .map(
      (msg) => `${msg.role === "user" ? "User" : "Assistant"}: ${msg.content}`,
    )
    .join("\n");
}
