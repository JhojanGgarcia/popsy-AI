import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_GENERATIVE_AI_KEY; // Usa una variable de entorno para mayor seguridad

const genAI = new GoogleGenerativeAI(API_KEY);

export async function generateText(prompt) {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
    const result = await model.generateContent(prompt);
    const response = result.response;
    return response.text(); // Extrae el texto generado
  } catch (error) {
    console.error("Error generating text:", error);
    return "An error occurred while generating the response.";
  }
}
