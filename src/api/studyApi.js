const API_BASE = "https://focus-plus.onrender.com/api";

export async function fetchNotes() {
  const res = await fetch(`${API_BASE}/notes`);

  if (!res.ok) {
    throw new Error("Failed to fetch notes");
  }

  return res.json();
}

export async function createNote(noteData) {
  const res = await fetch(`${API_BASE}/notes`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(noteData),
  });

  if (!res.ok) {
    throw new Error("Failed to create note");
  }

  return res.json();
}

export async function updateNote(id, noteData) {
  const res = await fetch(`${API_BASE}/notes/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(noteData),
  });

  if (!res.ok) {
    throw new Error("Failed to update note");
  }

  return res.json();
}

export async function deleteNote(id) {
  const res = await fetch(`${API_BASE}/notes/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) {
    throw new Error("Failed to delete note");
  }

  return true;
}

export async function fetchFlashcards() {
  const res = await fetch(`${API_BASE}/flashcards`);

  if (!res.ok) {
    throw new Error("Failed to fetch flashcards");
  }

  return res.json();
}
