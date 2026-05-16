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
    { id: 1, title: "Cell Structure", subject: "Biology", type: "plain", date: "20 May" },
    { id: 2, title: "Photosynthesis Deep Dive", subject: "Biology", type: "enhanced", date: "18 May" },
    { id: 3, title: "Quadratic Equations", subject: "Maths", type: "plain", date: "19 May" },
  ]);

  const subjects = ["All", "Biology", "Maths", "History"];

  const filteredNotes = useMemo(() => {
    return notes.filter((n) => {
      const subjectOk = selectedSubject === "All" || n.subject === selectedSubject;
      const typeOk = filter === "all" || n.type === filter;
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
        prev.map((n) => (n.id === editingId ? { ...n, ...form } : n))
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
    setForm(note);
    setEditingId(note.id);
    setShowModal(true);
  }

  return (
    <div style={styles.page}>
      {/* HEADER */}
      <div style={styles.header}>
        <button onClick={openSidebar} style={styles.iconBtn}>
          <Menu size={22} />
        </button>

        <div style={styles.title}>Study</div>

        <div style={{ width: 42 }} />
      </div>

      {/* FILTER BAR */}
      <div style={styles.filterRow}>
        {["all", "plain", "enhanced"].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            style={{
              ...styles.filterBtn,
              background: filter === f ? "#7C3AED" : "#EEE",
              color: filter === f ? "white" : "#333",
            }}
          >
            {f.toUpperCase()}
          </button>
        ))}
      </div>

      {/* SUBJECT CHIPS */}
      <div style={styles.subjectRow}>
        {subjects.map((s) => (
          <div
            key={s}
            onClick={() => setSelectedSubject(s)}
            style={{
              ...styles.subjectChip,
              background: selectedSubject === s ? "#111827" : "white",
              color: selectedSubject === s ? "white" : "#111",
            }}
          >
            {s}
          </div>
        ))}
      </div>

      {/* NOTES */}
      <div style={styles.notesWrap}>
        {filteredNotes.map((note) => (
          <div key={note.id} style={styles.card}>
            <div style={styles.cardTop}>
              <div style={styles.noteTitle}>{note.title}</div>

              <div style={styles.actions}>
                <Pencil size={16} onClick={() => editNote(note)} />
                <Trash2 size={16} onClick={() => deleteNote(note.id)} />
              </div>
            </div>

            <div style={styles.cardBottom}>
              <span
                style={{
                  color: note.type === "enhanced" ? "#7C3AED" : "#666",
                  fontWeight: 700,
                }}
              >
                {note.type.toUpperCase()}
              </span>
              <span>{note.date}</span>
            </div>
          </div>
        ))}
      </div>

      {/* FLOATING BUTTON */}
      <button onClick={openCreate} style={styles.fab}>
        <Plus />
      </button>

      {/* MODAL */}
      {showModal && (
        <div style={styles.modalOverlay}>
          <div style={styles.modal}>
            <div style={styles.modalHeader}>
              <h3>{editingId ? "Edit Note" : "Create Note"}</h3>
              <X onClick={() => setShowModal(false)} />
            </div>

            <input
              placeholder="Title"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              style={styles.input}
            />

            <select
              value={form.subject}
              onChange={(e) => setForm({ ...form, subject: e.target.value })}
              style={styles.input}
            >
              <option>Biology</option>
              <option>Maths</option>
              <option>History</option>
            </select>

            <select
              value={form.type}
              onChange={(e) => setForm({ ...form, type: e.target.value })}
              style={styles.input}
            >
              <option value="plain">Plain</option>
              <option value="enhanced">Enhanced</option>
            </select>

            <button onClick={saveNote} style={styles.saveBtn}>
              SAVE NOTE
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

/* ================= STYLES ================= */

const styles = {
  page: {
    minHeight: "100vh",
    background: "#F5F6FA",
    padding: 16,
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },

  iconBtn: {
    background: "white",
    border: "none",
    borderRadius: 12,
    padding: 10,
  },

  title: {
    fontSize: 26,
    fontWeight: 900,
    color: "#111",
  },

  filterRow: {
    display: "flex",
    gap: 10,
    marginBottom: 14,
  },

  filterBtn: {
    border: "none",
    padding: "8px 14px",
    borderRadius: 999,
    fontWeight: 700,
  },

  subjectRow: {
    display: "flex",
    gap: 10,
    overflowX: "auto",
    paddingBottom: 10,
  },

  subjectChip: {
    padding: "10px 14px",
    borderRadius: 14,
    fontWeight: 700,
    whiteSpace: "nowrap",
    boxShadow: "0 6px 20px rgba(0,0,0,0.05)",
  },

  notesWrap: {
    marginTop: 12,
  },

  card: {
    background: "white",
    padding: 14,
    borderRadius: 16,
    marginBottom: 12,
    boxShadow: "0 10px 25px rgba(0,0,0,0.06)",
  },

  cardTop: {
    display: "flex",
    justifyContent: "space-between",
  },

  noteTitle: {
    fontWeight: 900,
  },

  actions: {
    display: "flex",
    gap: 10,
    cursor: "pointer",
  },

  cardBottom: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: 6,
    fontSize: 12,
    color: "#666",
  },

  fab: {
    position: "fixed",
    bottom: 20,
    right: 20,
    width: 56,
    height: 56,
    borderRadius: 18,
    border: "none",
    background: "linear-gradient(135deg,#7C3AED,#2563EB)",
    color: "white",
    fontSize: 22,
  },

  modalOverlay: {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.4)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  modal: {
    background: "white",
    padding: 18,
    borderRadius: 16,
    width: "90%",
    maxWidth: 360,
  },

  modalHeader: {
    display: "flex",
    justifyContent: "space-between",
  },

  input: {
    width: "100%",
    padding: 10,
    marginTop: 10,
    borderRadius: 10,
    border: "1px solid #ddd",
  },

  saveBtn: {
    width: "100%",
    marginTop: 14,
    padding: 12,
    borderRadius: 12,
    background: "#7C3AED",
    color: "white",
    border: "none",
    fontWeight: 800,
  },
};
