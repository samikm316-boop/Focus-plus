import React, { useMemo } from "react";
import { Pencil, Trash2 } from "lucide-react";

export default function NotesSection({ notes, subjects, selectedSubject, filter, onEdit, onDelete }) {
  
  // Calculate dynamic filters accurately
  const filteredNotes = useMemo(() => {
    return notes.filter((note) => {
      const subjectMatch = selectedSubject === "All" ? true : note.subject === selectedSubject;
      const typeMatch = filter === "All" ? true : note.type === filter;
      return subjectMatch && typeMatch;
    });
  }, [notes, selectedSubject, filter]);

  // Safely map notes layout by their subject groups
  const groupedNotes = useMemo(() => {
    return subjects
      .filter((s) => s.name !== "All")
      .map((subjectObj) => ({
        subject: subjectObj.name,
        icon: subjectObj.icon,
        notesList: filteredNotes.filter((n) => n.subject === subjectObj.name),
      }))
      .filter((group) => group.notesList.length > 0);
  }, [subjects, filteredNotes]);

  return (
    <>
      {groupedNotes.map((group) => (
        <div key={group.subject} style={{ marginBottom: "18px" }}>
          <div style={styles.groupHeader}>
            {group.icon} {group.subject}
            <span style={{ color: "#9CA3AF" }}> • {group.notesList.length} notes</span>
          </div>

          {group.notesList.map((note) => (
            <div key={note.id} style={styles.noteCard}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                  <div style={{ fontWeight: "800" }}>{note.title}</div>
                  <div style={{ fontSize: "13px", color: "#666", marginTop: "6px" }}>{note.content}</div>
                </div>
                <div style={{ display: "flex", gap: "10px" }}>
                  <Pencil size={16} style={{ cursor: "pointer" }} onClick={() => onEdit(note)} />
                  <Trash2 size={16} color="red" style={{ cursor: "pointer" }} onClick={() => onDelete(note.id)} />
                </div>
              </div>
              <div style={styles.noteFooter}>
                <span>{note.type}</span>
                <span>{note.date}</span>
              </div>
            </div>
          ))}
        </div>
      ))}
    </>
  );
}

const styles = {
  groupHeader: {
    marginBottom: "10px",
    fontWeight: "800",
  },
  noteCard: {
    background: "white",
    padding: "14px",
    borderRadius: "16px",
    marginBottom: "10px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.04)",
  },
  noteFooter: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "10px",
    fontSize: "12px",
    color: "#6B7280",
  },
};

