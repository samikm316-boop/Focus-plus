import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Flame,
  Brain,
  BookOpen,
  ChevronRight,
  Circle,
  XCircle,
  PlayCircle,
  Target,
  Sparkles,
  Menu,
} from "lucide-react";

// Import your unified centralized endpoints 
import { fetchNotes, fetchFlashcards } from "../../api/studyApi";

const API_URL = "https://focus-plus.onrender.com";

export default function HomeScreen({ openSidebar }) {
  // Core Profile Data States
  const [xp, setXp] = useState(0);
  const [streak, setStreak] = useState(0); // Added to back the actual Streak UI element

  // Sync Stats Count States (Step 14 Integration)
  const [notesCount, setNotesCount] = useState(0);
  const [flashcardsCount, setFlashcardsCount] = useState(0);

  useEffect(() => {
    loadDashboardData();
  }, []);

  const loadDashboardData = async () => {
    try {
      const token = localStorage.getItem("token");
      const headers = { Authorization: `Bearer ${token}` };

      // 1. Fetch Core XP and Streak metrics via direct Axios calls
      const xpRes = await axios.get(`${API_URL}/api/xp`, { headers });
      setXp(xpRes.data.total_xp || 0);
      setStreak(xpRes.data.streak || 0);

      // 2. Fetch study element records asynchronously using studyApi instances
      const notes = await fetchNotes();
      const flashcards = await fetchFlashcards();

      setNotesCount(notes.length);
      setFlashcardsCount(flashcards.length);
    } catch (err) {
      console.error("Error loading dashboard data:", err);
    }
  };

  const level = Math.floor(xp / 100) + 1;
  const progress = xp % 100;

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg,#fdf4ff 0%,#eef2ff 45%,#f5f7ff 100%)",
        padding: "18px",
        paddingBottom: "120px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* BACKGROUND GLOWS */}
      <div
        style={{
          position: "fixed",
          top: "-120px",
          right: "-100px",
          width: "280px",
          height: "280px",
          borderRadius: "50%",
          background: "rgba(236,72,153,0.18)",
          filter: "blur(70px)",
          zIndex: 0,
        }}
      />

      <div
        style={{
          position: "fixed",
          bottom: "-120px",
          left: "-100px",
          width: "260px",
          height: "260px",
          borderRadius: "50%",
          background: "rgba(96,165,250,0.18)",
          filter: "blur(70px)",
          zIndex: 0,
        }}
      />

      {/* HEADER */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "20px",
        }}
      >
        <button
          onClick={openSidebar}
          style={{
            width: "50px",
            height: "50px",
            borderRadius: "18px",
            border: "none",
            background: "white",
            boxShadow: "0 8px 25px rgba(0,0,0,0.06)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
        >
          <Menu size={24} />
        </button>

        <h1
          style={{
            margin: 0,
            fontSize: "30px",
            fontWeight: "800",
            background: "linear-gradient(90deg,#ff4db8,#7c4dff)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          FOCUS+
        </h1>

        <div
          style={{
            width: "52px",
            height: "52px",
            borderRadius: "18px",
            background: "#ECE7FF",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 8px 25px rgba(0,0,0,0.04)",
          }}
        >
          <span style={{ fontSize: "10px", color: "#666", fontWeight: "700" }}>DATE</span>
          <span style={{ fontSize: "18px", fontWeight: "800" }}>{new Date().getDate()}</span>
        </div>
      </div>

      {/* PROFILE CARD */}
      <div
        style={{
          background: "white",
          position: "relative",
          zIndex: 2,
          borderRadius: "32px",
          padding: "18px",
          boxShadow: "0 14px 40px rgba(0,0,0,0.06)",
          marginBottom: "18px",
        }}
      >
        <div style={{ display: "flex", gap: "16px" }}>
          {/* AVATAR */}
          <div style={{ position: "relative" }}>
            <div
              style={{
                width: "105px",
                height: "105px",
                borderRadius: "28px",
                background: "linear-gradient(135deg,#d8b4fe,#f9a8d4,#93c5fd)",
                padding: "4px",
                boxShadow: "0 15px 35px rgba(168,85,247,0.25)",
              }}
            >
              <img
                src="https://api.dicebear.com/7.x/adventurer/svg?seed=Focus"
                alt="avatar"
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "24px",
                  background: "white",
                }}
              />
            </div>
            <div
              style={{
                width: "18px",
                height: "18px",
                borderRadius: "50%",
                background: "#22c55e",
                position: "absolute",
                right: "4px",
                bottom: "4px",
                border: "3px solid white",
              }}
            />
          </div>

          {/* INFO */}
          <div style={{ flex: 1 }}>
            <div style={{ color: "#777", fontSize: "14px", marginBottom: "4px" }}>
              Welcome back
            </div>
            <h2 style={{ margin: 0, fontSize: "34px", fontWeight: "800", color: "#111" }}>
              USER
            </h2>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                marginTop: "10px",
                background: "linear-gradient(90deg,#ff4db8,#7c4dff)",
                padding: "8px 14px",
                borderRadius: "999px",
                color: "white",
                fontWeight: "700",
                fontSize: "13px",
              }}
            >
              <Sparkles size={14} />
              Level {level}
            </div>

            {/* PROGRESS */}
            <div style={{ marginTop: "14px" }}>
              <div
                style={{
                  width: "100%",
                  height: "10px",
                  borderRadius: "999px",
                  background: "#ECECF4",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    width: `${progress}%`,
                    height: "100%",
                    borderRadius: "999px",
                    background: "linear-gradient(90deg,#ff4db8,#60a5fa)",
                  }}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "6px",
                  fontSize: "13px",
                  fontWeight: "700",
                  color: "#666",
                }}
              >
                <span>{xp} XP</span>
                <span>{progress}%</span>
              </div>
            </div>
          </div>
        </div>

        {/* STATS ROW USING SYNCED COUNTS */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: "12px",
            marginTop: "22px",
          }}
        >
          <MiniStat
            icon={<Flame size={20} color="#ff5a5a" />}
            value={streak}
            label="Streak"
          />

          <MiniStat
            icon={<Brain size={20} color="#8b5cf6" />}
            value={flashcardsCount}
            label="Cards"
          />

          <MiniStat
            icon={<BookOpen size={20} color="#3b82f6" />}
            value={xp}
            label="Total XP"
          />
        </div>
      </div>

      {/* GOALS */}
      <Section title="TODAY'S GOALS">
        <GoalItem text="Review flashcards" xp="50 XP" />
        <GoalItem text="Biology revision" xp="120 XP" />
      </Section>

      {/* PENDING */}
      <Section title="PENDING LIST">
        <PendingItem icon={<XCircle size={20} color="#ff4d6d" />} text="Missed" count="3" />
        <PendingItem icon={<PlayCircle size={20} color="#3b82f6" />} text="Started" count="2" />
        <PendingItem
          icon={<Target size={20} color="#22c55e" />}
          text="To Complete"
          count={notesCount}
        />
      </Section>

      {/* MASTERY */}
      <Section title="MASTERY GAUGE">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "12px",
            color: "#666",
            fontWeight: "600",
          }}
        >
          <span>Overall Progress</span>
          <span>{progress}%</span>
        </div>
        <div
          style={{
            width: "100%",
            height: "14px",
            background: "#ECECF4",
            borderRadius: "999px",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              width: `${progress}%`,
              height: "100%",
              background: "linear-gradient(90deg,#ff4db8,#60a5fa)",
            }}
          />
        </div>
        <div style={{ marginTop: "12px", textAlign: "center", fontWeight: "700", color: "#555" }}>
          {xp} / 1000 XP
        </div>
      </Section>

      {/* QUOTE */}
      <div
        style={{
          borderRadius: "32px",
          position: "relative",
          zIndex: 2,
          padding: "34px 26px",
          marginTop: "18px",
          color: "white",
          textAlign: "center",
          background: "linear-gradient(135deg,#f472b6,#8b5cf6,#60a5fa)",
          boxShadow: "0 20px 40px rgba(139,92,246,0.25)",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: "180px",
            height: "180px",
            borderRadius: "50%",
            background: "rgba(255,255,255,0.08)",
            top: "-50px",
            right: "-50px",
          }}
        />
        <div style={{ position: "relative", zIndex: 2 }}>
          <div style={{ fontSize: "26px", opacity: 0.7 }}>❝</div>
          <div style={{ fontSize: "28px", lineHeight: "1.5", fontWeight: "300", marginTop: "8px" }}>
            Discipline today
            <br />
            creates freedom
            <br />
            tomorrow.
          </div>
          <div style={{ marginTop: "18px", fontWeight: "700", fontSize: "18px" }}>— Focus+</div>
        </div>
      </div>
    </div>
  );
}

/* SUB-COMPONENTS */

function Section({ title, children }) {
  return (
    <div
      style={{
        background: "white",
        position: "relative",
        zIndex: 2,
        borderRadius: "28px",
        padding: "22px",
        marginBottom: "18px",
        boxShadow: "0 12px 35px rgba(0,0,0,0.05)",
      }}
    >
      <h3 style={{ marginTop: 0, marginBottom: "18px", fontSize: "18px", fontWeight: "800", color: "#111" }}>
        {title}
      </h3>
      {children}
    </div>
  );
}

function GoalItem({ text, xp }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "18px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <Circle size={22} color="#D1D5DB" />
        <span style={{ fontWeight: "600", color: "#222" }}>{text}</span>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "#666", fontWeight: "700" }}>
        {xp}
        <ChevronRight size={18} />
      </div>
    </div>
  );
}

function PendingItem({ icon, text, count }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "18px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        {icon}
        <span style={{ fontWeight: "700", color: "#222" }}>{text}</span>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <span style={{ fontWeight: "700", color: "#666" }}>{count}</span>
        <ChevronRight size={18} color="#999" />
      </div>
    </div>
  );
}

function MiniStat({ icon, value, label }) {
  return (
    <div style={{ background: "#F8F8FC", borderRadius: "22px", padding: "16px", textAlign: "center" }}>
      <div style={{ marginBottom: "8px" }}>{icon}</div>
      <div style={{ fontSize: "26px", fontWeight: "800", color: "#111" }}>{value}</div>
      <div style={{ fontSize: "13px", color: "#777", fontWeight: "700" }}>{label}</div>
    </div>
  );
}
