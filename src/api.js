const API_BASE = "https://focus-plus.onrender.com";

/* =========================
   TOKEN
========================= */
export function getToken() {
  return localStorage.getItem("token");
}

/* =========================
   AUTH
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
