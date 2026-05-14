const BASE_URL = "https://your-backend-url.com"; // change this later

export const api = {
  async get(endpoint, token) {
    const res = await fetch(`${BASE_URL}${endpoint}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token ? `Bearer ${token}` : "",
      },
    });
    return res.json();
  },

  async post(endpoint, body, token) {
    const res = await fetch(`${BASE_URL}${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token ? `Bearer ${token}` : "",
      },
      body: JSON.stringify(body),
    });
    return res.json();
  },
};
