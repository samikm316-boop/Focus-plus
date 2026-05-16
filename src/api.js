const API_BASE =
  "YOUR_BACKEND_URL";

export async function getDashboard() {
  try {
    const response = await fetch(
      `${API_BASE}/dashboard`,
      {
        headers: {
          "Content-Type":
            "application/json",

          Authorization:
            `Bearer ${
              localStorage.getItem("token")
            }`,
        },
      }
    );

    if (!response.ok) {
      throw new Error(
        "Failed to fetch dashboard"
      );
    }

    return await response.json();
  } catch (error) {
    console.error(
      "Dashboard API Error:",
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
      `${API_BASE}/notes`,
      {
        headers: {
          Authorization:
            `Bearer ${
              localStorage.getItem("token")
            }`,
        },
      }
    );

    return await response.json();
  } catch (error) {
    console.error(error);
  }
}

export async function createNote(data) {
  try {
    const response = await fetch(
      `${API_BASE}/notes`,
      {
        method: "POST",

        headers: {
          "Content-Type":
            "application/json",

          Authorization:
            `Bearer ${
              localStorage.getItem("token")
            }`,
        },

        body: JSON.stringify(data),
      }
    );

    return await response.json();
  } catch (error) {
    console.error(error);
  }
}

/* =========================
   FLASHCARDS
========================= */

export async function getFlashcards() {
  try {
    const response = await fetch(
      `${API_BASE}/flashcards`,
      {
        headers: {
          Authorization:
            `Bearer ${
              localStorage.getItem("token")
            }`,
        },
      }
    );

    return await response.json();
  } catch (error) {
    console.error(error);
  }
}

/* =========================
   CHAT
========================= */

export async function sendMessage(
  message
) {
  try {
    const response = await fetch(
      `${API_BASE}/chat`,
      {
        method: "POST",

        headers: {
          "Content-Type":
            "application/json",

          Authorization:
            `Bearer ${
              localStorage.getItem("token")
            }`,
        },

        body: JSON.stringify({
          message,
        }),
      }
    );

    return await response.json();
  } catch (error) {
    console.error(error);
  }
}
