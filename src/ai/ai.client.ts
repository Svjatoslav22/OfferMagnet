import "dotenv/config";
import OpenAI from "openai";

if (!process.env.OPENROUTER_API_KEY) {
  throw new Error("OPENROUTER_API_KEY is not defined in environment variables");
}

export const aiClient = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.OPENROUTER_API_KEY,
  timeout: 30_000,
  maxRetries: 2,
  defaultHeaders: {
    "HTTP-Referer": "https://github.com/OfferMagnet",
    "X-Title": "OfferMagnet AI Job Agent",
  },
});

export const DEFAULT_AI_MODEL =
  process.env.OPENROUTER_MODEL || "google/gemini-2.5-flash";
