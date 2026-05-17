import React, { useState, useMemo } from "react";
import { Menu, SlidersHorizontal, Plus } from "lucide-react";
import StudyTabs from "./components/StudyTabs";
import SubjectBar from "./components/SubjectBar";
import FilterChips from "./components/FilterChips";
import NotesSection from "./components/NotesSection";
import FlashcardsSection from "./components/FlashcardsSection";
import CreateModal from "./components/CreateModal";

export default function StudyScreen({ openSidebar }) {
  const [activeTab, setActiveTab] = useState("notes");
  const [selectedSubject, setSelectedSubject] = useState("All");
  const [filter, setFilter] = useState("All");
  const [showModal, setShowModal] = useState(false);
  const [editingNote, setEditingNote] = useState(null);

  // Core App State (Your exact mock data)
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: "Cell Structure and Function",
      content: "Cells contain nucleus, mitochondria and ribosomes.",
      type: "Plain",
      subject: "Biology",
      date: "20 May",
    },
    {
      id: 2,
      title: "Photosynthesis Process",
      content: "Plants convert sunlight into energy.",
      type: "Enhanced",
      subject: "Biology",
      date: "18 May",
    },
    {
      id: 3,
      title: "Quadratic Equations",
      content: "ax² + bx + c = 0",
      type: "Plain",
      subject: "Maths",
      date: "19 May",
    },
    {
      id: 4,
      title: "World War 2 Overview",
      content: "Started in 1939.",
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

  const subjects = [
    { name: "All", icon: "📚", color: "#E5E7EB" },
    { name: "Biology", icon: "🌿", color: "#DCFCE7" },
    { name: "Maths", icon: "∑", color: "#DBEAFE" },
    { name: "History", icon: "🏛️", color: "#FFEDD5" },
    { name: "Chemistry", icon: "🧪", color: "#EDE9FE" },
  ];

  // Actions & Event Handlers
  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
    setFilter("All");
  };

  const openCreateModal = () => {
    setEditingNote(null);
    setShowModal(true);
  };

  const handleEditNote = (note) => {
    setEditingNote(note);
    setShowModal(true);
  };

  const handleDeleteNote = (id) => {
    setNotes((prev) => prev.filter((n) => n.id !== id));
  };

  const handleSaveNote = (formValues) => {
    if (editingNote) {
      setNotes((prev) =>
        prev.map((n) => (n.id === editingNote.id ? { ...n, ...formValues } : n))
      );
    } else {
      setNotes((prev) => [
        {
          id: Date.now(),
          ...formValues,
          date: new Date().toLocaleDateString("en-GB", {
            day: "numeric",
            month: "short",
          }),
        },
        ...prev,
      ]);
    }
    setShowModal(false);
  };

  return (
    <div style={styles.container}>
      {/* TOP BAR */}
      <div style={styles.topBar}>
        <button onClick={openSidebar} style={styles.menuBtn}>
          <Menu size={22} />
        </button>
        <h1 style={styles.titleStyle}>STUDY</h1>
        <div style={{ width: "44px" }} />
      </div>

      {/* TABS */}
      <StudyTabs activeTab={activeTab} onTabChange={handleTabChange} />

      {/* SUBJECTS */}
      <SubjectBar
        subjects={subjects}
        notes={notes}
        selectedSubject={selectedSubject}
        setSelectedSubject={setSelectedSubject}
      />

      {/* DYNAMIC SECTION TITLE HEADER */}
      <div style={styles.notesHeader}>
        <h2 style={styles.sectionTitle}>
          {activeTab === "create" && "CREATE STUDY CONTENT"}
          {activeTab === "notes" && "NOTES"}
          {activeTab === "flashcards" && "FLASHCARDS"}
          {activeTab === "quiz" && "QUIZZES"}
          {activeTab === "learn" && "LEARN"}
        </h2>
        <SlidersHorizontal size={18} color="#6B7280" />
      </div>

      {/* DYNAMIC FILTER CHIPS */}
      <FilterChips activeTab={activeTab} filter={filter} setFilter={setFilter} />

      {/* SCREEN CONTENT CONDITIONAL RENDERING */}
      {activeTab === "create" && (
        <div style={styles.placeholderStyle}>
          <div style={{ fontSize: "52px" }}>➕</div>
          <h2>Create Study Content</h2>
          <p>Choose what you want to create.</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "20px" }}>
            <button onClick={openCreateModal} style={styles.saveBtn}>Create Note</button>
            <button style={{ ...styles.saveBtn, background: "linear-gradient(135deg,#2563EB,#06B6D4)" }}>Create Flashcard</button>
            <button style={{ ...styles.saveBtn, background: "linear-gradient(135deg,#F97316,#EF4444)" }}>Create Quiz</button>
          </div>
        </div>
      )}

      {activeTab === "notes" && (
        <NotesSection
          notes={notes}
          subjects={subjects}
          selectedSubject={selectedSubject}
          filter={filter}
          onEdit={handleEditNote}
          onDelete={handleDeleteNote}
        />
      )}

      {activeTab === "flashcards" && (
        <FlashcardsSection
          flashcards={flashcards}
          subjects={subjects}
          selectedSubject={selectedSubject}
          filter={filter}
        />
      )}

      {activeTab === "quiz" && (
        <div style={styles.placeholderStyle}>
          <div style={{ fontSize: "48px" }}>🧪</div>
          <h2>Quiz Mode</h2>
          <p>Generate quizzes from notes.</p>
        </div>
      )}

      {activeTab === "learn" && (
        <div style={styles.placeholderStyle}>
          <div style={{ fontSize: "48px" }}>🎓</div>
          <h2>Learn AI</h2>
          <p>AI explanations and tutoring system.</p>
        </div>
      )}

      {/* FLOATING ACTION BUTTON */}
      <button onClick={openCreateModal} style={styles.floatingBtn}>
        <Plus />
      </button>

      {/* REUSABLE CRUD MODAL */}
      {showModal && (
        <CreateModal
          editingNote={editingNote}
          onClose={() => setShowModal(false)}
          onSave={handleSaveNote}
        />
      )}
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    background: "#F6F7FB",
    padding: "18px",
    paddingBottom: "120px",
    boxSizing: "border-box",
  },
  topBar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "18px",
  },
  menuBtn: {
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
  },
  titleStyle: {
    margin: 0,
    fontSize: "20px",
    fontWeight: "800",
    color: "#6D28D9",
  },
  notesHeader: {
    marginTop: "24px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  sectionTitle: {
    margin: 0,
    fontSize: "16px",
    fontWeight: "800",
  },
  placeholderStyle: {
    background: "white",
    borderRadius: "24px",
    padding: "40px 20px",
    marginTop: "20px",
    textAlign: "center",
    boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
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
  floatingBtn: {
    position: "fixed",
    right: "18px",
    bottom: "18px",
    width: "58px",
    height: "58px",
    borderRadius: "20px",
    border: "none",
    background: "linear-gradient(135deg,#7C3AED,#2563EB)",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 18px 40px rgba(124,77,255,0.35)",
    cursor: "pointer",
    zIndex: 10,
  },
};
                       
