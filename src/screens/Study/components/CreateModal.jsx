import React, { useState, useEffect } from "react";
import { X } from "lucide-react";

export default function CreateModal({ editingNote, onClose, onSave }) {
  const [form, setForm] = useState({
    title: "",
    content: "",
    subject: "Biology",
    type: "Plain",
  });

  // Fix #8: Reset form to empty when creating a new note, otherwise old data remains
  useEffect(() => {
    if (editingNote) {
      setForm({
        title: editingNote.title,
        content: editingNote.content,
        subject: editingNote.subject,
        type: editingNote.type,
      });
    } else {
      setForm({
        title: "",
        content: "",
        subject: "Biology",
        type: "Plain",
      });
    }
  }, [editingNote]);

  const handleSubmit = () => {
    if (!form.title.trim()) return;
    onSave(form);
  };

  // Fix #1: Complete structural rewrite of the broken JSX block
  return (
    <div style={styles.modalOverlay}>
      <div style={styles.modalBox}>
        <div style={styles.modalHeader}>
          <h3>{editingNote ? "Edit Note" : "Create Note"}</h3>
          <X style={{ cursor: "pointer" }} onClick={onClose} />
        </div>
        
        <input
          placeholder="Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          style={styles.inputStyle}
        />
        
        <textarea
          placeholder="Content"
          value={form.content}
          onChange={(e) => setForm({ ...form, content: e.target.value })}
          style={{ ...styles.inputStyle, height: "120px", resize: "none" }}
        />
        
        <select
          value={form.subject}
          onChange={(e) => setForm({ ...form, subject: e.target.value })}
          style={styles.inputStyle}
        >
          <option>Biology</option>
          <option>Maths</option>
          <option>History</option>
          <option>Chemistry</option>
        </select>
        
        <select
          value={form.type}
          onChange={(e) => setForm({ ...form, type: e.target.value })}
          style={styles.inputStyle}
        >
          <option>Plain</option>
          <option>Enhanced</option>
        </select>
        
        <button onClick={handleSubmit} style={styles.saveBtn}>
          {editingNote ? "Update Note" : "Save Note"}
        </button>
      </div>
    </div>
  );
}

const styles = {
  modalOverlay: {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.4)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 999,
  },
  modalBox: {
    width: "90%",
    maxWidth: "400px",
    background: "white",
    borderRadius: "24px",
    padding: "20px",
  },
  modalHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "14px",
  },
  inputStyle: {
    width: "100%",
    padding: "12px",
    borderRadius: "14px",
    border: "1px solid #E5E7EB",
    marginBottom: "12px",
    boxSizing: "border-box",
  },
  saveBtn: {
    width: "100%",
    padding: "14px",
    borderRadius: "16px",
    border: "none",
    background: "linear-gradient(135deg,#7C3AED,#2563EB)",
    color: "white",
    fontWeight: "800",
    cursor: "pointer",
  },
};
