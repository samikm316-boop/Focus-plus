import { apiRequest } from "./client";

// AUTH
export const loginUser = (data) =>
  apiRequest("/api/auth/login", {
    method: "POST",
    body: JSON.stringify(data),
  });

export const registerUser = (data) =>
  apiRequest("/api/auth/register", {
    method: "POST",
    body: JSON.stringify(data),
  });

// NOTES
export const getNotes = () =>
  apiRequest("/api/notes");

// FLASHCARDS
export const getFlashcards = () =>
  apiRequest("/api/flashcards");
