const API_BASE = "https://focus-plus.onrender.com/api";

/* -----------------------------
   CORE FETCH WRAPPER
------------------------------ */
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
      throw new Error(data?.message || "API request failed");
    }

    return data;
  } catch (err) {
    console.error("API Error:", err.message);
    throw err;
  }
}

/* -----------------------------
   NOTES
------------------------------ */

export async function fetchNotes() {
  return request("/study/notes", {
    method: "GET",
  });
}

export async function createNote(noteData) {
  return request("/study/notes", {
    method: "POST",
    body: JSON.stringify(noteData),
  });
}

export async function updateNote(id, noteData) {
  return request(`/study/notes/${id}`, {
    method: "PUT",
    body: JSON.stringify(noteData),
  });
}

export async function deleteNote(id) {
  await request(`/study/notes/${id}`, {
    method: "DELETE",
  });

  return true;
}

/* -----------------------------
   FLASHCARDS
------------------------------ */

export async function fetchFlashcards() {
  return request("/study/flashcards", {
    method: "GET",
  });
}

export async function createFlashcard(data) {
  return request("/study/flashcards", {
    method: "POST",
    body: JSON.stringify(data),
  });
}

/* -----------------------------
   FUTURE READY (PLACEHOLDERS)
------------------------------ */

export async function fetchQuizzes() {
  return request("/study/quizzes", {
    method: "GET",
  });
}

export async function fetchMastery() {
  return request("/mastery", {
    method: "GET",
  });
}
