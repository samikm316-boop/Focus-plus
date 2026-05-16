const API_BASE = "https://focus-plus.onrender.com";

/* =========================
   AUTH
========================= */

export async function login(email, password) {
  const res = await fetch(`${API_BASE}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  return res.json();
}

export async function register(email, password, username) {
  const res = await fetch(`${API_BASE}/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password, username }),
  });

  return res.json();
}

/* =========================
   TOKEN
========================= */

export function getToken() {
  return localStorage.getItem("token");
}

/* =========================
   USER
========================= */

export async function getCurrentUser() {
  const res = await fetch(`${API_BASE}/api/users/me`, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });

  return res.json();
}

/* =========================
   XP
========================= */

export async function getXP() {
  const res = await fetch(`${API_BASE}/api/xp`, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });

  return res.json();
}

/* =========================
   NOTES
========================= */

export async function getNotes() {
  const res = await fetch(`${API_BASE}/api/study/notes`, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });

  return res.json();
}

/* =========================
   FLASHCARDS
========================= */

export async function getFlashcards() {
  const res = await fetch(`${API_BASE}/api/study/flashcards`, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });

  return res.json();
}
