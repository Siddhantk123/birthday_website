
import { GoogleGenAI } from "@google/genai";

export const generateBirthdayPoem = async (name: string) => {
  const apiKey = process.env.API_KEY;
  
  if (!apiKey) {
    return "Wishing you the happiest of birthdays, Ayushi! You are truly special.";
  }
  
  try {
    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Write a short, heart-touching 4-line birthday poem for my friend ${name} who is simple, beautiful, and cute. Include themes of forgiveness and friendship.`,
    });
    return response.text;
  } catch (error) {
    console.error("Error generating poem:", error);
    return "To the one who brings light to every room, Happy Birthday!";
  }
};
