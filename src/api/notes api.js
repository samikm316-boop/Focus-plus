import API from "./client";

export const getNotes = async () => {
  const res = await API.get("/study/notes");
  return res.data;
};
