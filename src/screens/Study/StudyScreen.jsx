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
    setEditingId(null);
    setForm({ title: "", subject: "Biology", type: "plain" });
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
        <button style={styles.iconBtn} onClick={openSidebar}>
          <Menu size={22} />
        </button>

        <div style={styles.title}>STUDY</div>

        <div style={{ width: 44 }} />
      </div>

      {/* FILTERS */}
      <div style={styles.filterRow}>
        {["all", "plain", "enhanced"].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            style={{
              ...styles.chip,
              background:
                filter === f
                  ? "linear-gradient(135deg,#7C3AED,#2563EB)"
                  : "rgba(255,255,255,0.7)",
              color: filter === f ? "white" : "#333",
            }}
          >
            {f.toUpperCase()}
          </button>
        ))}
      </div>

      {/* SUBJECTS */}
      <div style={styles.subjectRow}>
        {subjects.map((s) => (
          <div
            key={s}
            onClick={() => setSelectedSubject(s)}
            style={{
              ...styles.subjectChip,
              background:
                selectedSubject === s
                  ? "linear-gradient(135deg,#7C3AED,#2563EB)"
                  : "rgba(255,255,255,0.85)",
              color: selectedSubject === s ? "white" : "#222",
            }}
          >
            {s}
          </div>
        ))}
      </div>

      {/* NOTES */}
      <div style={styles.notesList}>
        {filteredNotes.map((note) => (
          <div key={note.id} style={styles.card}>
            
            <div style={styles.cardTop}>
              <div style={styles.noteTitle}>{note.title}</div>

              <div style={styles.actions}>
                <Pencil size={16} onClick={() => editNote(note)} />
                <Trash2 size={16} onClick={() => deleteNote(note.id)} color="#ef4444" />
              </div>
            </div>

            <div style={styles.cardBottom}>
              <span style={{
                fontWeight: 700,
                color: note.type === "enhanced" ? "#7C3AED" : "#555"
              }}>
                {note.type.toUpperCase()}
              </span>

              <span style={{ color: "#666" }}>{note.date}</span>
            </div>
          </div>
        ))}
      </div>

      {/* FLOAT BUTTON */}
      <button onClick={() => setShowModal(true)} style={styles.fab}>
        <Plus />
      </button>

      {/* MODAL */}
      {showModal && (
        <div style={styles.modalOverlay}>
          <div style={styles.modal}>
            
            <div style={styles.modalHeader}>
              <h3 style={{ margin: 0 }}>
                {editingId ? "Edit Note" : "Create Note"}
              </h3>

              <X onClick={() => setShowModal(false)} style={{ cursor: "pointer" }} />
            </div>

            <input
              placeholder="Title"
              value={form.title}
              onChange={(e) =>
                setForm({ ...form, title: e.target.value })
              }
              style={styles.input}
            />

            <select
              value={form.subject}
              onChange={(e) =>
                setForm({ ...form, subject: e.target.value })
              }
              style={styles.input}
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

/* ================= DESIGN SYSTEM ================= */

const styles = {
  page: {
    minHeight: "100vh",
    padding: 18,
    background: "linear-gradient(180deg,#F6F7FB,#EEF2FF)",
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },

  iconBtn: {
    width: 44,
    height: 44,
    borderRadius: 14,
    border: "none",
    background: "white",
    boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
  },

  title: {
    fontSize: 22,
    fontWeight: 900,
    letterSpacing: 1,
    background: "linear-gradient(90deg,#7C3AED,#2563EB)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },

  filterRow: {
    display: "flex",
    gap: 10,
    marginBottom: 14,
  },

  chip: {
    padding: "8px 14px",
    borderRadius: 999,
    border: "none",
    fontWeight: 700,
    cursor: "pointer",
  },

  subjectRow: {
    display: "flex",
    gap: 10,
    overflowX: "auto",
    paddingBottom: 6,
  },

  subjectChip: {
    padding: "10px 14px",
    borderRadius: 14,
    fontWeight: 700,
    cursor: "pointer",
    whiteSpace: "nowrap",
  },

  notesList: {
    marginTop: 16,
    display: "flex",
    flexDirection: "column",
    gap: 12,
  },

  card: {
    background: "white",
    padding: 14,
    borderRadius: 18,
    boxShadow: "0 12px 30px rgba(0,0,0,0.06)",
  },

  cardTop: {
    display: "flex",
    justifyContent: "space-between",
  },

  noteTitle: {
    fontWeight: 900,
    fontSize: 15,
  },

  actions: {
    display: "flex",
    gap: 10,
    cursor: "pointer",
  },

  cardBottom: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: 8,
    fontSize: 12,
  },

  fab: {
    position: "fixed",
    bottom: 22,
    right: 22,
    width: 58,
    height: 58,
    borderRadius: 18,
    border: "none",
    background: "linear-gradient(135deg,#7C3AED,#2563EB)",
    color: "white",
    boxShadow: "0 18px 40px rgba(124,58,237,0.35)",
  },

  modalOverlay: {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.45)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  modal: {
    background: "white",
    width: "90%",
    maxWidth: 360,
    padding: 18,
    borderRadius: 18,
  },

  modalHeader: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: 10,
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
    border: "none",
    background: "linear-gradient(135deg,#7C3AED,#2563EB)",
    color: "white",
    fontWeight: 900,
  },
};
