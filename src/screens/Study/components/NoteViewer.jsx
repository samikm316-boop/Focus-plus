import React from "react";
import { X } from "lucide-react";

export default function NoteViewer({ note, onClose }) {
  if (!note) return null;

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <div style={styles.header}>
          <div>
            <h2 style={styles.title}>{note.title}</h2>
            <div style={styles.metaRow}>
              <span>{note.subject}</span>
              <span>•</span>
              <span>{note.type}</span>
              <span>•</span>
              <span>{note.date}</span>
            </div>
          </div>

          <button style={styles.closeBtn} onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        <div style={styles.content}>
          {note.content}
        </div>
      </div>
    </div>
  );
}

const styles = {
  overlay: {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.45)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
    padding: "20px",
  },

  modal: {
    width: "100%",
    maxWidth: "500px",
    background: "white",
    borderRadius: "28px",
    padding: "24px",
    boxShadow: "0 20px 50px rgba(0,0,0,0.15)",
    maxHeight: "85vh",
    overflowY: "auto",
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: "20px",
    gap: "12px",
  },

  title: {
    margin: 0,
    fontSize: "22px",
    fontWeight: "800",
    color: "#111827",
  },

  metaRow: {
    display: "flex",
    gap: "8px",
    marginTop: "8px",
    fontSize: "13px",
    color: "#6B7280",
    flexWrap: "wrap",
  },

  closeBtn: {
    width: "40px",
    height: "40px",
    borderRadius: "14px",
    border: "none",
    background: "#F3F4F6",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  content: {
    fontSize: "15px",
    lineHeight: "1.8",
    color: "#374151",
    whiteSpace: "pre-wrap",
  },
};
