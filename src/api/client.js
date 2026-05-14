const BASE_URL = import.meta.env.VITE_API_URL || "https://focus-plus.onrender.com";

export async function apiRequest(endpoint, method = "GET", body, token) {
  const res = await fetch(BASE_URL + endpoint, {
    method,
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {})
    },
    body: body ? JSON.stringify(body) : undefined
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.error || "API Error");
  }

  return res.json();
}
