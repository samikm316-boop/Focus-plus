import api from "./api";

export const getNotes = async (token) => {
  return await api.get("/api/study/notes", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
