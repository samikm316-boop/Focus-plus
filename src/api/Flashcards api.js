import API from "./client";

export const getFlashcards = async () => {
  const res = await API.get("/study/flashcards");
  return res.data;
};
