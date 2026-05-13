import api from "./api";

export const login = async (data) => {
  return await api.post("/api/auth/login", data);
};

export const register = async (data) => {
  return await api.post("/api/auth/register", data);
};
