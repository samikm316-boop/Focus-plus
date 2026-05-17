import React, { useMemo, useState } from "react";
import {
  Menu,
  Plus,
  SlidersHorizontal,
  X,
  Trash2,
  Pencil,
} from "lucide-react";

export default function StudyScreen({ openSidebar }) {
  const [activeTab, setActiveTab] = useState("notes");

  const [selectedSubject, setSelectedSubject] =
    useState("All");

  const [filter, setFilter] =
    useState("All");

  const [showModal, setShowModal] =
    useState(false);

  const [editingId, setEditingId] =
    useState(null);

  const [form, setForm] = useState({
    title: "",
    content: "",
    subject: "Biology",
    type: "Plain",
  });

  const [notes, setNotes] = useState([
    {
      id: 1,
      title: "Cell Structure and Function",
      content:
        "Cells contain nucleus, mitochondria and ribosomes.",
      type: "Plain",
      subject: "Biology",
      date: "20 May",
    },

    {
      id: 2,
      title: "Photosynthesis Process",
      content:
        "Plants convert sunlight into energy.",
      type: "Enhanced",
      subject: "Biology",
      date: "18 May",
    },

    {
      id: 3,
      title: "Quadratic Equations",
      content:
        "ax² + bx + c = 0",
      type: "Plain",
      subject: "Maths",
      date: "19 May",
    },

    {
      id: 4,
      title: "World War 2 Overview",
      content:
        "Started in 1939.",
      type: "Plain",
      subject: "History",
      date: "16 May",
    },
  ]);

  const [flashcards] = useState([
    {
      id: 1,
      question: "What is photosynthesis?",
      answer: "Process plants use to create energy.",
      type: "Q&A",
      subject: "Biology",
    },

    {
      id: 2,
      question: "Mitochondria is powerhouse?",
      answer: "True",
      type: "True/False",
      subject: "Biology",
    },

    {
      id: 3,
      question: "2x + 2 = 4?",
      answer: "True",
      type: "True/False",
      subject: "Maths",
    },
  ]);

  // Patch 1: Updated subjects structure with icons and colors
  const subjects = [
    {
      name: "All",
      icon: "📚",
      color: "#E5E7EB",
    },

    {
      name: "Biology",
      icon: "🌿",
      color: "#DCFCE7",
    },

    {
      name: "Maths",
      icon: "∑",
      color: "#DBEAFE",
    },

    {
      name: "History",
      icon: "🏛️",
      color: "#FFEDD5",
    },

    {
      name: "Chemistry",
      icon: "🧪",
      color: "#EDE9FE",
    },
  ];

  const filteredNotes = useMemo(() => {
    return notes.filter((note) => {
      const subjectMatch =
        selectedSubject === "All"
          ? true
          : note.subject ===
            selectedSubject;

      const typeMatch =
        filter === "All"
          ? true
          : note.type === filter;

      return subjectMatch && typeMatch;
    });
  }, [notes, selectedSubject, filter]);

  function handleTabChange(tabName) {
    setActiveTab(tabName);
    setFilter("All");
  }

  function openCreateModal() {
    setEditingId(null);

    setForm({
      title: "",
      content: "",
      subject: "Biology",
      type: "Plain",
    });

    setShowModal(true);
  }

  function saveNote() {
    if (!form.title.trim()) return;

    if (editingId) {
      setNotes((prev) =>
        prev.map((n) =>
          n.id === editingId
            ? {
                ...n,
                ...form,
              }
            : n
        )
      );
    } else {
      setNotes((prev) => [
        {
          id: Date.now(),
          ...form,
          date:
            new Date().toLocaleDateString(
              "en-GB",
              {
                day: "numeric",
                month: "short",
              }
            ),
        },
        ...prev,
      ]);
    }

    setShowModal(false);
  }

  function editNote(note) {
    setEditingId(note.id);

    setForm({
      title: note.title,
      content: note.content,
      subject: note.subject,
      type: note.type,
    });

    setShowModal(true);
  }

  function deleteNote(id) {
    setNotes((prev) =>
      prev.filter((n) => n.id !== id)
    );
  }

  // Patch 2: Updated groupedNotes logic to map names and pass along the subject icon
  const groupedNotes = subjects
    .filter((s) => s.name !== "All")
    .map((subjectObj) => ({
      subject: subjectObj.name,
      icon: subjectObj.icon,
      notes: filteredNotes.filter(
        (n) => n.subject === subjectObj.name
      ),
    }))
    .filter((group) => group.notes.length);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#F6F7FB",
        padding: "18px",
        paddingBottom: "120px",
        boxSizing: "border-box",
      }}
    >
      {/* TOP BAR */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent:
            "space-between",
          marginBottom: "18px",
        }}
      >
        <button
          onClick={openSidebar}
          style={menuBtn}
        >
          <Menu size={22} />
        </button>

        <h1 style={titleStyle}>
          STUDY
        </h1>

        <div style={{ width: "44px" }} />
      </div>

      {/* TABS */}
      <div style={tabsContainer}>
        <Tab
          icon="➕"
          label="Create"
          active={activeTab === "create"}
          onClick={() => handleTabChange("create")}
        />

        <Tab
          icon="📘"
          label="Notes"
          active={activeTab === "notes"}
          onClick={() => handleTabChange("notes")}
        />

        <Tab
          icon="📖"
          label="Flashcards"
          active={activeTab === "flashcards"}
          onClick={() => handleTabChange("flashcards")}
        />

        <Tab
          icon="🧪"
          label="Quiz"
          active={activeTab === "quiz"}
          onClick={() => handleTabChange("quiz")}
        />

        <Tab
          icon="🎓"
          label="Learn"
          active={activeTab === "learn"}
          onClick={() => handleTabChange("learn")}
        />
      </div>

      {/* SUBJECTS */}
      <div style={sectionHeader}>
        <h2 style={sectionTitle}>
          SUBJECTS
        </h2>

        <span
          style={{
            ...viewAll,
            cursor: "pointer",
          }}
          onClick={() =>
            setSelectedSubject("All")
          }
        >
          View all
        </span>
      </div>

      <div style={subjectsRow}>
        {subjects
          .filter((s) => s.name !== "All")
          .map((subject) => (
            <SubjectCard
              key={subject.name}
              name={subject.name}
              icon={subject.icon}
              color={subject.color}
              active={
                selectedSubject === subject.name
              }
              onClick={() =>
                setSelectedSubject(subject.name)
              }
              count={`${
                notes.filter(
                  (n) =>
                    n.subject === subject.name
                ).length
              } notes`}
            />
          ))}
      </div>

      {/* DYNAMIC SECTION TITLE HEADER */}
      <div style={notesHeader}>
        <h2 style={sectionTitle}>
          {activeTab === "create" && "CREATE STUDY CONTENT"}
          {activeTab === "notes" && "NOTES"}
          {activeTab === "flashcards" && "FLASHCARDS"}
          {activeTab === "quiz" && "QUIZZES"}
          {activeTab === "learn" && "LEARN"}
        </h2>

        <SlidersHorizontal
          size={18}
          color="#6B7280"
        />
      </div>

      {/* DYNAMIC FILTER CHIPS */}
      <div style={filterRow}>
        {(
          activeTab === "notes"
            ? ["All", "Plain", "Enhanced"]
            : activeTab === "flashcards"
            ? ["All", "True/False", "Q&A"]
            : activeTab === "quiz"
            ? ["All", "Easy", "Hard"]
            : ["All"]
        ).map((f) => (
          <Chip
            key={f}
            label={f}
            active={filter === f}
            onClick={() => setFilter(f)}
          />
        ))}
      </div>

      {/* SCREEN CONTENT */}
      {activeTab === "create" && (
        <div style={placeholderStyle}>
          <div style={{ fontSize: "52px" }}>➕</div>
          <h2>Create Study Content</h2>
          <p>Choose what you want to create.</p>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              marginTop: "20px",
            }}
          >
            <button onClick={openCreateModal} style={saveBtn}>
              Create Note
            </button>

            <button
              style={{
                ...saveBtn,
                background:
                  "linear-gradient(135deg,#2563EB,#06B6D4)",
              }}
            >
              Create Flashcard
            </button>

            <button
              style={{
                ...saveBtn,
                background:
                  "linear-gradient(135deg,#F97316,#EF4444)",
              }}
            >
              Create Quiz
            </button>
          </div>
        </div>
      )}

      {activeTab === "notes" && (
        <>
          {groupedNotes.map((group) => (
            <NoteGroup
              key={group.subject}
              subject={group.subject}
              icon={group.icon}
              count={`${group.notes.length} notes`}
            >
              {group.notes.map((note) => (
                <Note
                  key={note.id}
                  note={note}
                  onEdit={() =>
                    editNote(note)
                  }
                  onDelete={() =>
                    deleteNote(note.id)
                  }
                />
              ))}
            </NoteGroup>
          ))}
        </>
      )}

      {activeTab === "flashcards" && (
        <>
          {subjects
            .filter((s) => s.name !== "All")
            .map((subjectObj) => {
              const subjectCards = flashcards.filter(
                (f) =>
                  f.subject === subjectObj.name &&
                  (filter === "All" ? true : f.type === filter)
              );

              if (!subjectCards.length) return null;

              return (
                <div key={subjectObj.name} style={{ marginBottom: "18px" }}>
                  <div
                    style={{
                      fontWeight: "800",
                      marginBottom: "10px",
                    }}
                  >
                    {subjectObj.icon} {subjectObj.name}
                    <span
                      style={{
                        color: "#9CA3AF",
                      }}
                    >
                      {" "}
                      • {subjectCards.length} cards
                    </span>
                  </div>

                  {subjectCards.map((card) => (
                    <div
                      key={card.id}
                      style={{
                        background: "white",
                        padding: "16px",
                        borderRadius: "18px",
                        marginBottom: "10px",
                        boxShadow: "0 10px 25px rgba(0,0,0,0.04)",
                      }}
                    >
                      <div
                        style={{
                          fontWeight: "800",
                          marginBottom: "8px",
                        }}
                      >
                        {card.question}
                      </div>

                      <div
                        style={{
                          color: "#6B7280",
                          fontSize: "14px",
                        }}
                      >
                        {card.answer}
                      </div>

                      <div
                        style={{
                          marginTop: "10px",
                          fontSize: "12px",
                          color: "#7C3AED",
                          fontWeight: "700",
                        }}
                      >
                        {card.type}
                      </div>
                    </div>
                  ))}
                </div>
              );
            })}
        </>
      )}

      {activeTab === "quiz" && (
        <div style={placeholderStyle}>
          <div style={{ fontSize: "48px" }}>🧪</div>
          <h2>Quiz Mode</h2>
          <p>Generate quizzes from notes.</p>
        </div>
      )}

      {activeTab === "learn" && (
        <div style={placeholderStyle}>
          <div style={{ fontSize: "48px" }}>🎓</div>
          <h2>Learn AI</h2>
          <p>AI explanations and tutoring system.</p>
        </div>
      )}

      {/* FLOAT BUTTON */}
      <button
        onClick={openCreateModal}
        style={floatingBtn}
      >
        <Plus />
      </button>

      {/* MODAL */}
      {showModal && (
        <div style={modalOverlay}>
          <div style={modalBox}>
            <div style={modalHeader}>
              <h3>
                {editingId
                  ? "Edit Note"
                  : "Create Note"}
              </h3>

              <X
                style={{
                  cursor: "pointer",
                }}
                onClick={() =>
                  setShowModal(false)
                }
              />
            </div>

            <input
              placeholder="Title"
              value={form.title}
              onChange={(e) =>
                setForm({
                  ...form,
                  title:
                    e.target.value,
                })
              }
              style={inputStyle}
            />

            <textarea
              placeholder="Content"
              value={form.content}
              onChange={(e) =>
                setForm({
                  ...form,
                  content:
                    e.target.value,
                })
              }
              style={{
                ...inputStyle,
                height: "120px",
                resize: "none",
              }}
            />

            <select
              value={form.subject}
              onChange={(e) =>
                setForm({
                  ...form,
                  subject:
                    e.target.value,
                })
              }
              style={inputStyle}
            >
              <option>
                Biology
              </option>

              <option>
                Maths
              </option>

              <option>
                History
              </option>

              <option>
                Chemistry
              </option>
            </select>

            <select
              value={form.type}
              onChange={(e) =>
                setForm({
                  ...form,
                  type:
                    e.target.value,
                })
              }
              style={inputStyle}
            >
              <option>
                Plain
              </option>

              <option>
                Enhanced
              </option>
            </select>

            <button
              onClick={saveNote}
              style={saveBtn}
            >
              {editingId
                ? "Update Note"
                : "Save Note"}
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
        transition: "0.25s",
      }}
    >
      <div
        style={{
          fontSize: "16px",
        }}
      >
        {icon}
      </div>

      {label}
    </div>
  );
}

style={menuBtn}
function SubjectCard({
  name,
  count,
  active,
  onClick,
  icon,
  color,
}) {
  return (
    <div
      onClick={onClick}
      style={{
        minWidth: "130px",
        background: active
          ? "#DDD6FE"
          : color,
        padding: "14px",
        borderRadius: "20px",
        cursor: "pointer",
        transition: "0.25s",
        boxShadow:
          "0 10px 25px rgba(0,0,0,0.05)",
        transform: active
          ? "scale(1.03)"
          : "scale(1)",
      }}
    >
      <div
        style={{
          fontSize: "24px",
          marginBottom: "10px",
        }}
      >
        {icon}
      </div>

      <div
        style={{
          fontWeight: "800",
        }}
      >
        {name}
      </div>

      <div
        style={{
          fontSize: "12px",
          color: "#555",
          marginTop: "4px",
        }}
      >
        {count}
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
    <div
      onClick={onClick}
      style={{
        padding: "8px 14px",
        borderRadius: "999px",
        background: active
          ? "#EDE9FE"
          : "#F3F4F6",
        color: active
          ? "#6D28D9"
          : "#6B7280",
        fontWeight: "700",
        fontSize: "12px",
        cursor: "pointer",
      }}
    >
      {label}
    </div>
  );
}

function NoteGroup({
  subject,
  count,
  children,
  icon,
}) {
  return (
    <div
      style={{
        marginBottom: "18px",
      }}
    >
      <div
        style={{
          marginBottom: "10px",
          fontWeight: "800",
        }}
      >
        {icon} {subject}
        <span
          style={{
            color: "#9CA3AF",
          }}
        >
          {" "}
          • {count}
        </span>
      </div>

      {children}
    </div>
  );
}

function Note({
  note,
  onEdit,
  onDelete,
}) {
  return (
    <div
      style={{
        background: "white",
        padding: "14px",
        borderRadius: "16px",
        marginBottom: "10px",
        boxShadow:
          "0 10px 25px rgba(0,0,0,0.04)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent:
            "space-between",
        }}
      >
        <div>
          <div
            style={{
              fontWeight: "800",
            }}
          >
            {note.title}
          </div>

          <div
            style={{
              fontSize: "13px",
              color: "#666",
              marginTop: "6px",
            }}
          >
            {note.content}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: "10px",
          }}
        >
          <Pencil
            size={16}
            style={{
              cursor: "pointer",
            }}
            onClick={onEdit}
          />

          <Trash2
            size={16}
            color="red"
            style={{
              cursor: "pointer",
            }}
            onClick={onDelete}
          />
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent:
            "space-between",
          marginTop: "10px",
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

/* STYLES */

const placeholderStyle = {
  background: "white",
  borderRadius: "24px",
  padding: "40px 20px",
  marginTop: "20px",
  textAlign: "center",
  boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
};

const menuBtn = {
  width: "44px",
  height: "44px",
  borderRadius: "14px",
  border: "none",
  background: "white",
  boxShadow:
    "0 6px 18px rgba(0,0,0,0.06)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const titleStyle = {
  margin: 0,
  fontSize: "20px",
  fontWeight: "800",
  color: "#6D28D9",
};

