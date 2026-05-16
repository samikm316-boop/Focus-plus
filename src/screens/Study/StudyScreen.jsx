import React, { useMemo, useState } from "react";
import { Menu, Plus, X, Trash2, Pencil } from "lucide-react";

export default function StudyScreen({ openSidebar }) {
  const [selectedSubject, setSelectedSubject] = useState("All");
  const [filter, setFilter] = useState("all");
  const [showModal, setShowModal] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const [form, setForm] = useState({
    title: "",
    subject: "Biology",
    type: "plain",
  });

  const [notes, setNotes] = useState([
    {
      id: 1,
      title: "Cell Structure",
      subject: "Biology",
      type: "plain",
      date: "20 May",
    },
    {
      id: 2,
      title: "Photosynthesis Deep Dive",
      subject: "Biology",
      type: "enhanced",
      date: "18 May",
    },
    {
      id: 3,
      title: "Quadratic Equations",
      subject: "Maths",
      type: "plain",
      date: "19 May",
    },
  ]);

  const subjects = ["All", "Biology", "Maths", "History"];

  const filteredNotes = useMemo(() => {
    return notes.filter((n) => {
      const subjectOk =
        selectedSubject === "All" || n.subject === selectedSubject;

      const typeOk =
        filter === "all" || n.type === filter;

      return subjectOk && typeOk;
    });
  }, [notes, selectedSubject, filter]);

  function resetForm() {
    setForm({ title: "", subject: "Biology", type: "plain" });
    setEditingId(null);
  }

  function openCreate() {
    resetForm();
    setShowModal(true);
  }

  function saveNote() {
    if (!form.title.trim()) return;

    if (editingId) {
      setNotes((prev) =>
        prev.map((n) =>
          n.id === editingId
            ? { ...n, ...form }
            : n
        )
      );
    } else {
      setNotes((prev) => [
        {
          id: Date.now(),
          ...form,
          date: new Date().toLocaleDateString(),
        },
        ...prev,
      ]);
    }

    setShowModal(false);
    resetForm();
  }

  function deleteNote(id) {
    setNotes((prev) => prev.filter((n) => n.id !== id));
  }

  function editNote(note) {
    setForm({
      title: note.title,
      subject: note.subject,
      type: note.type,
    });
    setEditingId(note.id);
    setShowModal(true);
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#F6F7FB",
        padding: "18px",
        paddingBottom: "120px",
      }}
    >
      {/* HEADER */}
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <button onClick={openSidebar}>
          <Menu />
        </button>

        <h1 style={{ color: "#6D28D9", fontWeight: "800" }}>
          STUDY
        </h1>

        <div style={{ width: 40 }} />
      </div>

      {/* FILTERS */}
      <div style={{ display: "flex", gap: 10, marginTop: 16 }}>
        {["all", "plain", "enhanced"].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            style={{
              padding: "8px 14px",
              borderRadius: "999px",
              border: "none",
              background: filter === f ? "#EDE9FE" : "#F3F4F6",
              fontWeight: "700",
            }}
          >
            {f}
          </button>
        ))}
      </div>

      {/* SUBJECTS */}
      <div
        style={{
          display: "flex",
          gap: 10,
          overflowX: "auto",
          marginTop: 18,
        }}
      >
        {subjects.map((s) => (
          <div
            key={s}
            onClick={() => setSelectedSubject(s)}
            style={{
              padding: "10px 14px",
              borderRadius: "14px",
              background: selectedSubject === s ? "#6D28D9" : "white",
              color: selectedSubject === s ? "white" : "#333",
              fontWeight: "700",
              cursor: "pointer",
              whiteSpace: "nowrap",
            }}
          >
            {s}
          </div>
        ))}
      </div>

      {/* NOTES */}
      <div style={{ marginTop: 20 }}>
        {filteredNotes.map((note) => (
          <div
            key={note.id}
            style={{
              background: "white",
              padding: 14,
              borderRadius: 16,
              marginBottom: 10,
              boxShadow: "0 10px 25px rgba(0,0,0,0.05)",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div style={{ fontWeight: 800 }}>{note.title}</div>

              <div style={{ display: "flex", gap: 10 }}>
                <Pencil
                  size={16}
                  onClick={() => editNote(note)}
                  style={{ cursor: "pointer" }}
                />
                <Trash2
                  size={16}
                  onClick={() => deleteNote(note.id)}
                  style={{ cursor: "pointer", color: "red" }}
                />
              </div>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: 6,
                fontSize: 12,
                color: "#666",
              }}
            >
              <span
                style={{
                  color: note.type === "enhanced" ? "#7C3AED" : "#555",
                  fontWeight: "700",
                }}
              >
                {note.type}
              </span>
              <span>{note.date}</span>
            </div>
          </div>
        ))}
      </div>

      {/* FLOAT BUTTON */}
      <button
        onClick={openCreate}
        style={{
          position: "fixed",
          bottom: 20,
          right: 20,
          width: 58,
          height: 58,
          borderRadius: 20,
          border: "none",
          background: "linear-gradient(135deg,#7C3AED,#2563EB)",
          color: "white",
          fontSize: 24,
        }}
      >
        <Plus />
      </button>

      {/* MODAL */}
      {showModal && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.4)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              background: "white",
              width: "90%",
              maxWidth: 360,
              padding: 18,
              borderRadius: 16,
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h3>{editingId ? "Edit Note" : "Create Note"}</h3>
              <X onClick={() => setShowModal(false)} />
            </div>

            <input
              placeholder="Title"
              value={form.title}
              onChange={(e) =>
                setForm({ ...form, title: e.target.value })
              }
              style={{
                width: "100%",
                padding: 10,
                marginTop: 10,
              }}
            />

            <select
              value={form.subject}
              onChange={(e) =>
                setForm({ ...form, subject: e.target.value })
              }
              style={{ width: "100%", padding: 10, marginTop: 10 }}
            >
              <option>Biology</option>
              <option>Maths</option>
              <option>History</option>
            </select>

            <select
              value={form.type}
              onChange={(e) =>
                setForm({ ...form, type: e.target.value })
              }
              style={{ width: "100%", padding: 10, marginTop: 10 }}
            >
              <option value="plain">Plain</option>
              <option value="enhanced">Enhanced</option>
            </select>

            <button
              onClick={saveNote}
              style={{
                width: "100%",
                marginTop: 14,
                padding: 12,
                background: "#6D28D9",
                color: "white",
                border: "none",
                borderRadius: 12,
                fontWeight: "700",
              }}
            >
              {editingId ? "Update Note" : "Save Note"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
