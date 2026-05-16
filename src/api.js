const API =
  "https://focus-plus.onrender.com";

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
  try {
    const response = await fetch(
      `${API}/api/users/me`,
      {
        headers: {
          Authorization:
            `Bearer ${getToken()}`,
        },
      }
    );

    return await response.json();
  } catch (error) {
    console.error(
      "USER ERROR:",
      error
    );

    return null;
  }
}

/* =========================
   XP
========================= */

export async function getXP() {
  try {
    const response = await fetch(
      `${API}/api/xp`,
      {
        headers: {
          Authorization:
            `Bearer ${getToken()}`,
        },
      }
    );

    return await response.json();
  } catch (error) {
    console.error(
      "XP ERROR:",
      error
    );

    return null;
  }
}

/* =========================
   NOTES
========================= */

export async function getNotes() {
  try {
    const response = await fetch(
      `${API}/api/study/notes`,
      {
        headers: {
          Authorization:
            `Bearer ${getToken()}`,
        },
      }
    );

    return await response.json();
  } catch (error) {
    console.error(
      "NOTES ERROR:",
      error
    );

    return [];
  }
}

export async function createNote(
  title,
  content
) {
  try {
    const response = await fetch(
      `${API}/api/study/notes`,
      {
        method: "POST",

        headers: {
          "Content-Type":
            "application/json",

          Authorization:
            `Bearer ${getToken()}`,
        },

        body: JSON.stringify({
          title,
          content,
        }),
      }
    );

    return await response.json();
  } catch (error) {
    console.error(
      "CREATE NOTE ERROR:",
      error
    );

    return null;
  }
}

/* =========================
   FLASHCARDS
========================= */

export async function getFlashcards() {
  try {
    const response = await fetch(
      `${API}/api/study/flashcards`,
      {
        headers: {
          Authorization:
            `Bearer ${getToken()}`,
        },
      }
    );

    return await response.json();
  } catch (error) {
    console.error(
      "FLASHCARD ERROR:",
      error
    );

    return [];
  }
}

export async function createFlashcard(
  question,
  answer
) {
  try {
    const response = await fetch(
      `${API}/api/study/flashcards`,
      {
        method: "POST",

        headers: {
          "Content-Type":
            "application/json",

          Authorization:
            `Bearer ${getToken()}`,
        },

        body: JSON.stringify({
          question,
          answer,
        }),
      }
    );

    return await response.json();
  } catch (error) {
    console.error(
      "CREATE FLASHCARD ERROR:",
      error
    );

    return null;
  }
}

/* =========================
   CHAT AI
========================= */

export async function sendAIMessage(
  message,
  type = "study"
) {
  try {
    const response = await fetch(
      `${API}/api/chat`,
      {
        method: "POST",

        headers: {
          "Content-Type":
            "application/json",

          Authorization:
            `Bearer ${getToken()}`,
        },

        body: JSON.stringify({
          message,
          type,
        }),
      }
    );

    return await response.json();
  } catch (error) {
    console.error(
      "CHAT ERROR:",
      error
    );

    return null;
  }
}
