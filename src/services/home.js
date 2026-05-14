import { api } from "./api";

export const HomeService = {
  getDashboard: (token) => api.get("/api/home/dashboard", token),

  getTasks: (token) => api.get("/api/tasks/today", token),

  completeTask: (id, token) =>
    api.post(`/api/tasks/${id}/complete`, {}, token),
};
