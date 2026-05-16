import React from "react";
import { Menu, Plus, SlidersHorizontal } from "lucide-react";

export default function StudyScreen({
  openSidebar,
  studyTab,
  setStudyTab,
}) {
  const activeTab = studyTab;
  const setActiveTab = setStudyTab;

  // Render content conditionally based on activeTab
  function renderStudyContent() {
    switch (activeTab) {
      case "create":
        return <div>Create Screen</div>;

      case "notes":
        return (
          <>
            {/* SUBJECTS */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "14px",
              }}
            >
              <h2 style={{ margin: 0, fontSize: "16px", fontWeight: "800" }}>
                SUBJECTS
              </h2>

              <span style={{ color: "#7C3AED", fontWeight: "700", fontSize: "13px" }}>
                View all
              </span>
            </div>

            <div
              style={{
                display: "flex",
                gap: "12px",
                overflowX: "auto",
                paddingBottom: "8px",
              }}
            >
              <SubjectCard color="#DCFCE7" icon="🌿" name="Biology" count="12 notes" />
              <SubjectCard color="#DBEAFE" icon="∑" name="Maths" count="15 notes" />
              <SubjectCard color="#FFEDD5" icon="🏛️" name="History" count="8 notes" />
              <SubjectCard color="#EDE9FE" icon="🧪" name="Chemistry" count="7 notes" />
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
              <h2 style={{ margin: 0, fontSize: "16px", fontWeight: "800" }}>
                NOTES
              </h2>

              <SlidersHorizontal size={18} color="#6B7280" />
            </div>

            {/* FILTER CHIPS */}
            <div
              style={{
                display: "flex",
                gap: "10px",
                marginTop: "12px",
                marginBottom: "18px",
              }}
            >
              <Chip label="All" active />
              <Chip label="Plain" />
              <Chip label="Enhanced" />
            </div>

            {/* NOTES LIST */}
            <NoteGroup color="#22C55E" subject="Biology" count="12 notes">
              <Note title="Cell Structure and Function" type="Plain Note" date="20 May" />
              <Note title="Photosynthesis Process" type="Enhanced" date="18 May" highlight />
            </NoteGroup>

            <NoteGroup color="#3B82F6" subject="Maths" count="15 notes">
              <Note title="Quadratic Equations" type="Plain Note" date="19 May" />
              <Note title="Algebraic Identities" type="Enhanced" date="17 May" highlight />
            </NoteGroup>

            <NoteGroup color="#F97316" subject="History" count="8 notes">
              <Note title="World War 2 Overview" type="Plain Note" date="16 May" />
            </NoteGroup>
          </>
        );

      case "flashcards":
        return <div>Flashcards Screen</div>;

      case "quiz":
        return <div>Quiz Screen</div>;

      case "learn":
        return <div>Learn Screen</div>;

      default:
        return <div>Notes Screen</div>;
    }
  }

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
          justifyContent: "space-between",
          marginBottom: "18px",
        }}
      >
        <button
          onClick={openSidebar}
          style={{
            width: "44px",
            height: "44px",
            borderRadius: "14px",
            border: "none",
            background: "white",
            boxShadow: "0 6px 18px rgba(0,0,0,0.06)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
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

        <div style={{ width: "44px" }} />
      </div>

      {/* TOP ACTION TABS */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          background: "white",
          padding: "10px",
          borderRadius: "18px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
          marginBottom: "22px",
        }}
      >
        <Tab
          icon="➕"
          label="Create"
          active={activeTab === "create"}
          onClick={() => setActiveTab("create")}
        />
        <Tab
          icon="📘"
          label="Notes"
          active={activeTab === "notes"}
          onClick={() => setActiveTab("notes")}
        />
        <Tab
          icon="📖"
          label="Flashcards"
          active={activeTab === "flashcards"}
          onClick={() => setActiveTab("flashcards")}
        />
        <Tab
          icon="🧪"
          label="Quiz"
          active={activeTab === "quiz"}
          onClick={() => setActiveTab("quiz")}
        />
        <Tab
          icon="🎓"
          label="Learn"
          active={activeTab === "learn"}
          onClick={() => setActiveTab("learn")}
        />
      </div>

      {/* DYNAMIC CONTENT SWITCHER */}
      {renderStudyContent()}

      {/* FLOATING BUTTON */}
      <button
        style={{
          position: "fixed",
          right: "18px",
          bottom: "18px",
          width: "58px",
          height: "58px",
          borderRadius: "20px",
          border: "none",
          background: "linear-gradient(135deg,#7C3AED,#2563EB)",
          color: "white",
          fontSize: "26px",
          boxShadow: "0 18px 40px rgba(124,77,255,0.35)",
        }}
      >
        <Plus />
      </button>
    </div>
  );
}

/* ===== SUB-COMPONENTS ===== */

function Tab({ icon, label, active, onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        flex: 1,
        textAlign: "center",
        padding: "8px",
        borderRadius: "14px",
        background: active ? "#F3E8FF" : "transparent",
        color: active ? "#6D28D9" : "#6B7280",
        fontWeight: "700",
        fontSize: "12px",
        cursor: "pointer",
      }}
    >
      <div style={{ fontSize: "16px" }}>{icon}</div>
      {label}
      {active && (
        <div
          style={{
            height: "3px",
            background: "#6D28D9",
            marginTop: "6px",
            borderRadius: "10px",
          }}
        />
      )}
    </div>
  );
}

function SubjectCard({ color, icon, name, count }) {
  return (
    <div
      style={{
        minWidth: "120px",
        background: color,
        padding: "14px",
        borderRadius: "18px",
      }}
    >
      <div style={{ fontSize: "20px" }}>{icon}</div>
      <div style={{ fontWeight: "800", marginTop: "6px" }}>{name}</div>
      <div style={{ fontSize: "12px", color: "#555" }}>{count}</div>
    </div>
  );
}

function Chip({ label, active }) {
  return (
    <div
      style={{
        padding: "8px 14px",
        borderRadius: "999px",
        background: active ? "#EDE9FE" : "#F3F4F6",
        color: active ? "#6D28D9" : "#6B7280",
        fontWeight: "700",
        fontSize: "12px",
      }}
    >
      {label}
    </div>
  );
}

function NoteGroup({ color, subject, count, children }) {
  return (
    <div style={{ marginBottom: "18px" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          marginBottom: "10px",
          fontWeight: "800",
        }}
      >
        <div
          style={{
            width: "10px",
            height: "10px",
            borderRadius: "50%",
            background: color,
          }}
        />
        {subject}
        <span style={{ color: "#9CA3AF", fontWeight: "600" }}>
          • {count}
        </span>
      </div>
      {children}
    </div>
  );
}

function Note({ title, type, date, highlight }) {
  return (
    <div
      style={{
        background: "white",
        padding: "14px",
        borderRadius: "16px",
        marginBottom: "10px",
        boxShadow: "0 10px 25px rgba(0,0,0,0.04)",
        border: highlight ? "1px solid #A78BFA" : "none",
      }}
    >
      <div style={{ fontWeight: "800" }}>{title}</div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "6px",
          fontSize: "12px",
          color: "#6B7280",
        }}
      >
        <span style={{ color: highlight ? "#7C3AED" : "#6B7280" }}>
          {type}
        </span>
        <span>{date}</span>
      </div>
    </div>
  );
}
