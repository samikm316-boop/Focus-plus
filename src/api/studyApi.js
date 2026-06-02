const API_BASE = "https://focus-plus.onrender.com/api";

/* =================================================
   CORE REQUEST HANDLER
================================================= */
async function request(endpoint, options = {}) {
  try {
    const token = localStorage.getItem("token");

    const res = await fetch(`${API_BASE}${endpoint}`, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
        ...(options.headers || {}),
      },
    });

    const data = await res.json().catch(() => null);

    if (!res.ok) {
      throw new Error(data?.message || `API Error: ${endpoint}`);
    }

    return data;
  } catch (err) {
    console.error("Focus+ API Error:", err.message);
    throw err;
  }
}

/* =================================================
   NOTES (Backend: study module)
================================================= */

export function fetchNotes() {
  return request("/study/notes", {
    method: "GET",
  });
}

export function createNote(noteData) {
  return request("/study/notes", {
    method: "POST",
    body: JSON.stringify(noteData),
  });
}

export function updateNote(id, noteData) {
  return request(`/study/notes/${id}`, {
    method: "PUT",
    body: JSON.stringify(noteData),
  });
}

export function deleteNote(id) {
  return request(`/study/notes/${id}`, {
    method: "DELETE",
  });
}

/* =================================================
   FLASHCARDS (Backend: study module)
================================================= */

export function fetchFlashcards() {
  return request("/study/flashcards", {
    method: "GET",
  });
}

export function createFlashcard(data) {
  return request("/study/flashcards", {
    method: "POST",
    body: JSON.stringify(data),
  });
}

/* =================================================
   XP SYSTEM (Backend: xp module)
================================================= */

export function fetchXP() {
  return request("/xp", {
    method: "GET",
  });
}

/* =================================================
   USER SYSTEM
================================================= */

export function fetchUserProfile() {
  return request("/users/me", {
    method: "GET",
  });
}

/* =================================================
   FUTURE MODULES (QUIZ + LEARN READY)
================================================= */

export function fetchQuizzes() {
  return request("/study/quizzes", {
    method: "GET",
  });
}

export function fetchMastery() {
  return request("/mastery", {
    method: "GET",
  });
}
