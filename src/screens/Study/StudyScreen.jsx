import React, { useState } from "react";
import {
  Menu,
  Plus,
  SlidersHorizontal,
  ArrowLeft,
} from "lucide-react";

export default function StudyScreen({
  openSidebar,
}) {
  const [activeTab, setActiveTab] =
    useState("notes");

  const [selectedSubject, setSelectedSubject] =
    useState("All");

  const [noteFilter, setNoteFilter] =
    useState("All");

  const subjects = [
    "All",
    "Biology",
    "Maths",
    "History",
    "Chemistry",
  ];

  const notes = [
    {
      title: "Cell Structure and Function",
      type: "Plain",
      date: "20 May",
      subject: "Biology",
    },
    {
      title: "Photosynthesis Process",
      type: "Enhanced",
      date: "18 May",
      subject: "Biology",
    },
    {
      title: "Quadratic Equations",
      type: "Plain",
      date: "17 May",
      subject: "Maths",
    },
  ];

  const filteredNotes = notes.filter(
    (note) => {
      const subjectMatch =
        selectedSubject === "All" ||
        note.subject === selectedSubject;

      const typeMatch =
        noteFilter === "All" ||
        note.type === noteFilter;

      return subjectMatch && typeMatch;
    }
  );

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
          style={topButton}
        >
          <Menu size={22} />
        </button>

        <h1
          style={{
            margin: 0,
            fontSize: "20px",
            fontWeight: "800",
            color: "#6D28D9",
            letterSpacing: "1px",
          }}
        >
          STUDY
        </h1>

        <button style={topButton}>
          <SlidersHorizontal size={18} />
        </button>
      </div>

      {/* TOP NAV */}

      <div
        style={{
          display: "flex",
          justifyContent:
            "space-between",
          background: "white",
          padding: "10px",
          borderRadius: "22px",
          boxShadow:
            "0 10px 30px rgba(0,0,0,0.05)",
          marginBottom: "24px",
          gap: "8px",
        }}
      >
        <TopTab
          icon="➕"
          label="Create"
          active={activeTab === "create"}
          onClick={() =>
            setActiveTab("create")
          }
        />

        <TopTab
          icon="📘"
          label="Notes"
          active={activeTab === "notes"}
          onClick={() =>
            setActiveTab("notes")
          }
        />

        <TopTab
          icon="📖"
          label="Flashcards"
          active={
            activeTab === "flashcards"
          }
          onClick={() =>
            setActiveTab("flashcards")
          }
        />

        <TopTab
          icon="🧪"
          label="Quiz"
          active={activeTab === "quiz"}
          onClick={() =>
            setActiveTab("quiz")
          }
        />

        <TopTab
          icon="🎓"
          label="Learn"
          active={activeTab === "learn"}
          onClick={() =>
            setActiveTab("learn")
          }
        />
      </div>

      {/* RENDER TABS */}

      {activeTab === "notes" && (
        <>
          {/* SUBJECTS */}

          <div
            style={{
              display: "flex",
              justifyContent:
                "space-between",
              alignItems: "center",
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

            <span
              style={{
                color: "#7C3AED",
                fontWeight: "700",
                fontSize: "13px",
              }}
            >
              View all
            </span>
          </div>

          <div
            style={{
              display: "flex",
              gap: "12px",
              overflowX: "auto",
              paddingBottom: "10px",
            }}
          >
            <SubjectCard
              active={
                selectedSubject === "All"
              }
              onClick={() =>
                setSelectedSubject("All")
              }
              color="#F3E8FF"
              icon="📚"
              name="All"
              count="All notes"
            />

            <SubjectCard
              active={
                selectedSubject ===
                "Biology"
              }
              onClick={() =>
                setSelectedSubject(
                  "Biology"
                )
              }
              color="#DCFCE7"
              icon="🌿"
              name="Biology"
              count="12 notes"
            />

            <SubjectCard
              active={
                selectedSubject ===
                "Maths"
              }
              onClick={() =>
                setSelectedSubject("Maths")
              }
              color="#DBEAFE"
              icon="∑"
              name="Maths"
              count="15 notes"
            />

            <SubjectCard
              active={
                selectedSubject ===
                "History"
              }
              onClick={() =>
                setSelectedSubject(
                  "History"
                )
              }
              color="#FFEDD5"
              icon="🏛️"
              name="History"
              count="8 notes"
            />
          </div>

          {/* NOTES */}

          <div
            style={{
              marginTop: "24px",
              display: "flex",
              justifyContent:
                "space-between",
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

            <SlidersHorizontal
              size={18}
              color="#6B7280"
            />
          </div>

          {/* FILTERS */}

          <div
            style={{
              display: "flex",
              gap: "10px",
              marginTop: "14px",
              marginBottom: "18px",
            }}
          >
            {[
              "All",
              "Plain",
              "Enhanced",
            ].map((filter) => (
              <Chip
                key={filter}
                label={filter}
                active={
                  noteFilter === filter
                }
                onClick={() =>
                  setNoteFilter(filter)
                }
              />
            ))}
          </div>

          {/* NOTES LIST */}

          {filteredNotes.map(
            (note, index) => (
              <Note
                key={index}
                title={note.title}
                type={note.type}
                date={note.date}
                highlight={
                  note.type ===
                  "Enhanced"
                }
              />
            )
          )}
        </>
      )}

      {activeTab === "flashcards" && (
        <SubPage
          title="Flashcards"
          subtitle="Interactive memory learning"
          emoji="📖"
        />
      )}

      {activeTab === "quiz" && (
        <SubPage
          title="Quiz"
          subtitle="Test your knowledge"
          emoji="🧪"
        />
      )}

      {activeTab === "learn" && (
        <SubPage
          title="Learn"
          subtitle="AI learning experience"
          emoji="🎓"
        />
      )}

      {activeTab === "create" && (
        <SubPage
          title="Create"
          subtitle="Generate study content"
          emoji="➕"
        />
      )}

      {/* FLOAT BUTTON */}

      <button
        style={{
          position: "fixed",
          right: "18px",
          bottom: "18px",
          width: "60px",
          height: "60px",
          borderRadius: "22px",
          border: "none",
          background:
            "linear-gradient(135deg,#7C3AED,#2563EB)",
          color: "white",
          boxShadow:
            "0 18px 40px rgba(124,77,255,0.35)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Plus />
      </button>
    </div>
  );
}

/* ---------- COMPONENTS ---------- */

const topButton = {
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

function TopTab({
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
        padding: "10px 8px",
        borderRadius: "16px",
        background: active
          ? "#F3E8FF"
          : "transparent",
        color: active
          ? "#6D28D9"
          : "#6B7280",
        fontWeight: "700",
        fontSize: "11px",
        cursor: "pointer",
        transition: "0.2s",
      }}
    >
      <div
        style={{
          fontSize: "18px",
          marginBottom: "4px",
        }}
      >
        {icon}
      </div>

      {label}

      {active && (
        <div
          style={{
            height: "3px",
            background: "#6D28D9",
            borderRadius: "999px",
            marginTop: "7px",
          }}
        />
      )}
    </div>
  );
}

function SubjectCard({
  color,
  icon,
  name,
  count,
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
        borderRadius: "20px",
        cursor: "pointer",
        transform: active
          ? "scale(1.04)"
          : "scale(1)",
        border: active
          ? "2px solid #7C3AED"
          : "2px solid transparent",
        transition: "0.2s",
      }}
    >
      <div style={{ fontSize: "22px" }}>
        {icon}
      </div>

      <div
        style={{
          fontWeight: "800",
          marginTop: "8px",
        }}
      >
        {name}
      </div>

      <div
        style={{
          fontSize: "12px",
          color: "#555",
          marginTop: "2px",
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
        padding: "9px 15px",
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

function Note({
  title,
  type,
  date,
  highlight,
}) {
  return (
    <div
      style={{
        background: "white",
        padding: "16px",
        borderRadius: "18px",
        marginBottom: "12px",
        boxShadow:
          "0 10px 25px rgba(0,0,0,0.04)",
        border: highlight
          ? "1px solid #A78BFA"
          : "1px solid transparent",
      }}
    >
      <div
        style={{
          fontWeight: "800",
          fontSize: "15px",
        }}
      >
        {title}
      </div>

      <div
        style={{
          display: "flex",
          justifyContent:
            "space-between",
          marginTop: "8px",
          fontSize: "12px",
          color: "#6B7280",
        }}
      >
        <span
          style={{
            color: highlight
              ? "#7C3AED"
              : "#6B7280",
            fontWeight: "700",
          }}
        >
          {type}
        </span>

        <span>{date}</span>
      </div>
    </div>
  );
}

function SubPage({
  title,
  subtitle,
  emoji,
}) {
  return (
    <div
      style={{
        marginTop: "40px",
        textAlign: "center",
      }}
    >
      <div
        style={{
          fontSize: "70px",
        }}
      >
        {emoji}
      </div>

      <h1
        style={{
          fontSize: "30px",
          fontWeight: "800",
          color: "#111827",
          marginBottom: "10px",
        }}
      >
        {title}
      </h1>

      <p
        style={{
          color: "#6B7280",
          fontWeight: "500",
        }}
      >
        {subtitle}
      </p>
    </div>
  );
}
