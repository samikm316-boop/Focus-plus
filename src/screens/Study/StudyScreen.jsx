import React, { useMemo, useState } from "react";
import {
  Menu,
  Plus,
  SlidersHorizontal,
  Settings,
  Pencil,
  Trash2,
  X,
} from "lucide-react";

export default function StudyScreen({ openSidebar }) {
  const [activeTab, setActiveTab] = useState("notes");

  const [selectedSubject, setSelectedSubject] =
    useState("All");

  const [filter, setFilter] =
    useState("All");

  const [showModal, setShowModal] =
    useState(false);

  const [editingNote, setEditingNote] =
    useState(null);

  const [noteTitle, setNoteTitle] =
    useState("");

  const [noteType, setNoteType] =
    useState("Plain");

  const [noteSubject, setNoteSubject] =
    useState("Biology");

  const [notes, setNotes] = useState([
    {
      id: 1,
      title: "Cell Structure and Function",
      type: "Plain",
      subject: "Biology",
      date: "20 May",
    },

    {
      id: 2,
      title: "Photosynthesis Process",
      type: "Enhanced",
      subject: "Biology",
      date: "18 May",
    },

    {
      id: 3,
      title: "Quadratic Equations",
      type: "Plain",
      subject: "Maths",
      date: "19 May",
    },
  ]);

  const subjects = [
    "All",
    "Biology",
    "Maths",
    "History",
    "Chemistry",
  ];

  const filteredNotes = useMemo(() => {
    return notes.filter((note) => {
      const subjectMatch =
        selectedSubject === "All" ||
        note.subject === selectedSubject;

      const typeMatch =
        filter === "All" ||
        note.type === filter;

      return subjectMatch && typeMatch;
    });
  }, [notes, selectedSubject, filter]);

  function openCreateModal() {
    setEditingNote(null);

    setNoteTitle("");
    setNoteType("Plain");
    setNoteSubject("Biology");

    setShowModal(true);
  }

  function openEditModal(note) {
    setEditingNote(note);

    setNoteTitle(note.title);
    setNoteType(note.type);
    setNoteSubject(note.subject);

    setShowModal(true);
  }

  function saveNote() {
    if (!noteTitle.trim()) return;

    if (editingNote) {
      setNotes((prev) =>
        prev.map((note) =>
          note.id === editingNote.id
            ? {
                ...note,
                title: noteTitle,
                type: noteType,
                subject: noteSubject,
              }
            : note
        )
      );
    } else {
      const newNote = {
        id: Date.now(),
        title: noteTitle,
        type: noteType,
        subject: noteSubject,
        date: "Today",
      };

      setNotes([newNote, ...notes]);
    }

    setShowModal(false);
  }

  function deleteNote(id) {
    setNotes((prev) =>
      prev.filter((note) => note.id !== id)
    );
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
      {/* TOP BAR */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "18px",
        }}
      >
        <button
          onClick={openSidebar}
          style={topButtonStyle}
        >
          <Menu size={22} />
        </button>

        <h1
          style={{
            margin: 0,
            fontSize: "20px",
            fontWeight: "800",
            color: "#6D28D9",
          }}
        >
          STUDY
        </h1>

        <button style={topButtonStyle}>
          <Settings size={20} />
        </button>
      </div>

      {/* TOP TABS */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          background: "white",
          padding: "10px",
          borderRadius: "18px",
          boxShadow:
            "0 10px 30px rgba(0,0,0,0.05)",
          marginBottom: "22px",
        }}
      >
        <Tab
          icon="➕"
          label="Create"
          onClick={openCreateModal}
        />

        <Tab
          icon="📘"
          label="Notes"
          active={activeTab === "notes"}
          onClick={() =>
            setActiveTab("notes")
          }
        />

        <Tab
          icon="📖"
          label="Flashcards"
          active={activeTab === "flashcards"}
          onClick={() =>
            setActiveTab("flashcards")
          }
        />

        <Tab
          icon="🧪"
          label="Quiz"
          active={activeTab === "quiz"}
          onClick={() =>
            setActiveTab("quiz")
          }
        />

        <Tab
          icon="🎓"
          label="Learn"
          active={activeTab === "learn"}
          onClick={() =>
            setActiveTab("learn")
          }
        />
      </div>

      {/* SUBJECTS HEADER */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "14px",
        }}
      >
        <h2
          style={{
            margin: 0,
            fontSize: "16px",
            fontWeight: "800",
          }}
        >
          SUBJECTS
        </h2>

        <button
          onClick={() =>
            setSelectedSubject("All")
          }
          style={{
            border: "none",
            background: "transparent",
            color: "#7C3AED",
            fontWeight: "700",
            cursor: "pointer",
          }}
        >
          View all
        </button>
      </div>

      {/* SUBJECT CARDS */}
      <div
        style={{
          display: "flex",
          gap: "12px",
          overflowX: "auto",
          paddingBottom: "8px",
        }}
      >
        <SubjectCard
          color="#DCFCE7"
          icon="🌿"
          name="Biology"
          active={selectedSubject === "Biology"}
          onClick={() =>
            setSelectedSubject("Biology")
          }
        />

        <SubjectCard
          color="#DBEAFE"
          icon="∑"
          name="Maths"
          active={selectedSubject === "Maths"}
          onClick={() =>
            setSelectedSubject("Maths")
          }
        />

        <SubjectCard
          color="#FFEDD5"
          icon="🏛️"
          name="History"
          active={selectedSubject === "History"}
          onClick={() =>
            setSelectedSubject("History")
          }
        />

        <SubjectCard
          color="#EDE9FE"
          icon="🧪"
          name="Chemistry"
          active={selectedSubject === "Chemistry"}
          onClick={() =>
            setSelectedSubject("Chemistry")
          }
        />
      </div>

      {/* NOTES HEADER */}
      <div
        style={{
          marginTop: "24px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2
          style={{
            margin: 0,
            fontSize: "16px",
            fontWeight: "800",
          }}
        >
          NOTES
        </h2>

        <button style={topButtonStyle}>
          <SlidersHorizontal size={18} />
        </button>
      </div>

      {/* FILTERS */}
      <div
        style={{
          display: "flex",
          gap: "10px",
          marginTop: "12px",
          marginBottom: "18px",
        }}
      >
        {["All", "Plain", "Enhanced"].map(
          (item) => (
            <Chip
              key={item}
              label={item}
              active={filter === item}
              onClick={() =>
                setFilter(item)
              }
            />
          )
        )}
      </div>

      {/* NOTES */}
      <div>
        {filteredNotes.map((note) => (
          <NoteCard
            key={note.id}
            note={note}
            onEdit={() =>
              openEditModal(note)
            }
            onDelete={() =>
              deleteNote(note.id)
            }
          />
        ))}
      </div>

      {/* FLOAT BUTTON */}
      <button
        onClick={openCreateModal}
        style={{
          position: "fixed",
          right: "18px",
          bottom: "18px",
          width: "58px",
          height: "58px",
          borderRadius: "20px",
          border: "none",
          background:
            "linear-gradient(135deg,#7C3AED,#2563EB)",
          color: "white",
          boxShadow:
            "0 18px 40px rgba(124,77,255,0.35)",
          cursor: "pointer",
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
            background: "rgba(0,0,0,0.45)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 999,
          }}
        >
          <div
            style={{
              width: "90%",
              maxWidth: "380px",
              background: "white",
              borderRadius: "24px",
              padding: "22px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent:
                  "space-between",
                alignItems: "center",
                marginBottom: "18px",
              }}
            >
              <h2
                style={{
                  margin: 0,
                  fontSize: "20px",
                }}
              >
                {editingNote
                  ? "Edit Note"
                  : "Create Note"}
              </h2>

              <X
                onClick={() =>
                  setShowModal(false)
                }
                style={{
                  cursor: "pointer",
                }}
              />
            </div>

            <input
              value={noteTitle}
              onChange={(e) =>
                setNoteTitle(e.target.value)
              }
              placeholder="Note title"
              style={inputStyle}
            />

            <select
              value={noteSubject}
              onChange={(e) =>
                setNoteSubject(e.target.value)
              }
              style={inputStyle}
            >
              <option>Biology</option>
              <option>Maths</option>
              <option>History</option>
              <option>Chemistry</option>
            </select>

            <select
              value={noteType}
              onChange={(e) =>
                setNoteType(e.target.value)
              }
              style={inputStyle}
            >
              <option>Plain</option>
              <option>Enhanced</option>
            </select>

            <button
              onClick={saveNote}
              style={{
                width: "100%",
                marginTop: "16px",
                border: "none",
                padding: "14px",
                borderRadius: "16px",
                background:
                  "linear-gradient(135deg,#7C3AED,#2563EB)",
                color: "white",
                fontWeight: "700",
                cursor: "pointer",
              }}
            >
              {editingNote
                ? "Update Note"
                : "Create Note"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

/* COMPONENTS */

function Tab({
  icon,
  label,
  active,
  onClick,
}) {
  return (
    <div
      onClick={onClick}
      style={{
        flex: 1,
        textAlign: "center",
        padding: "8px",
        borderRadius: "14px",
        background: active
          ? "#F3E8FF"
          : "transparent",
        color: active
          ? "#6D28D9"
          : "#6B7280",
        fontWeight: "700",
        fontSize: "12px",
        cursor: "pointer",
        transition: "0.2s",
      }}
    >
      <div style={{ fontSize: "16px" }}>
        {icon}
      </div>

      {label}
    </div>
  );
}

function SubjectCard({
  color,
  icon,
  name,
  active,
  onClick,
}) {
  return (
    <div
      onClick={onClick}
      style={{
        minWidth: "120px",
        background: color,
        padding: "14px",
        borderRadius: "18px",
        cursor: "pointer",
        transform: active
          ? "scale(1.05)"
          : "scale(1)",
        border: active
          ? "2px solid #7C3AED"
          : "2px solid transparent",
        transition: "0.2s",
      }}
    >
      <div style={{ fontSize: "20px" }}>
        {icon}
      </div>

      <div
        style={{
          fontWeight: "800",
          marginTop: "6px",
        }}
      >
        {name}
      </div>
    </div>
  );
}

function Chip({
  label,
  active,
  onClick,
}) {
  return (
    <button
      onClick={onClick}
      style={{
        border: "none",
        cursor: "pointer",
        padding: "8px 14px",
        borderRadius: "999px",
        background: active
          ? "#EDE9FE"
          : "#F3F4F6",
        color: active
          ? "#6D28D9"
          : "#6B7280",
        fontWeight: "700",
      }}
    >
      {label}
    </button>
  );
}

function NoteCard({
  note,
  onEdit,
  onDelete,
}) {
  return (
    <div
      style={{
        background: "white",
        padding: "16px",
        borderRadius: "18px",
        marginBottom: "12px",
        boxShadow:
          "0 10px 25px rgba(0,0,0,0.05)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent:
            "space-between",
        }}
      >
        <div
          style={{
            fontWeight: "800",
          }}
        >
          {note.title}
        </div>

        <div
          style={{
            display: "flex",
            gap: "10px",
          }}
        >
          <Pencil
            size={18}
            onClick={onEdit}
            style={{
              cursor: "pointer",
            }}
          />

          <Trash2
            size={18}
            onClick={onDelete}
            style={{
              cursor: "pointer",
              color: "#EF4444",
            }}
          />
        </div>
      </div>

      <div
        style={{
          marginTop: "8px",
          display: "flex",
          justifyContent:
            "space-between",
          fontSize: "12px",
          color: "#6B7280",
        }}
      >
        <span>{note.type}</span>
        <span>{note.date}</span>
      </div>
    </div>
  );
}

const topButtonStyle = {
  width: "44px",
  height: "44px",
  borderRadius: "14px",
  border: "none",
  background: "white",
  boxShadow: "0 6px 18px rgba(0,0,0,0.06)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
};

const inputStyle = {
  width: "100%",
  padding: "14px",
  borderRadius: "14px",
  border: "1px solid #E5E7EB",
  marginBottom: "12px",
  fontSize: "14px",
  boxSizing: "border-box",
};
