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

import { fetchNotes, fetchFlashcards } from "../../api/studyApi";

const API_URL = "https://focus-plus.onrender.com";

export default function HomeScreen({ openSidebar }) {
  // ---------------- STATES ----------------
  const [loading, setLoading] = useState(true);

  const [xp, setXp] = useState(0);
  const [streak, setStreak] = useState(0);

  const [notesCount, setNotesCount] = useState(0);
  const [flashcardsCount, setFlashcardsCount] = useState(0);

  const [profile, setProfile] = useState({
    name: "Focus User",
    location: "Unknown",
    status: "Home",
  });

  const [nextTask, setNextTask] = useState({
    title: "No Task Available",
    xp: 0,
  });

  const [mastery, setMastery] = useState({
    study: 0,
    productivity: 0,
  });

  // ---------------- EFFECT ----------------
  useEffect(() => {
    loadDashboardData();
  }, []);

  // ---------------- API LOADER ----------------
  const loadDashboardData = async () => {
    try {
      setLoading(true);

      const token = localStorage.getItem("token");

      const headers = {
        Authorization: `Bearer ${token}`,
      };

      // XP + streak
      const xpRes = await axios.get(`${API_URL}/api/xp`, { headers });

      const totalXp = xpRes.data?.total_xp || 0;

      setXp(totalXp);
      setStreak(xpRes.data?.streak || 0);

      // Notes + Flashcards
      const notes = await fetchNotes();
      const flashcards = await fetchFlashcards();

      setNotesCount(notes?.length || 0);
      setFlashcardsCount(flashcards?.length || 0);

      // Profile (safe fallback)
      try {
        const profileRes = await axios.get(`${API_URL}/api/users/me`, {
          headers,
        });

        setProfile({
          name: profileRes.data?.name || "Focus User",
          location: profileRes.data?.location || "Unknown",
          status: profileRes.data?.status || "Home",
        });
      } catch (err) {
        console.log("Profile fetch failed");
      }

      // Next task placeholder (backend not ready yet)
      setNextTask({
        title: "Complete Study Session",
        xp: 50,
      });

      // Mastery calculation (simple safe version)
      setMastery({
        study: Math.min(
          100,
          (notes?.length || 0) * 10 + (flashcards?.length || 0) * 5
        ),
        productivity: Math.min(100, totalXp / 10),
      });
    } catch (err) {
      console.error("Dashboard load error:", err);
    } finally {
      setLoading(false);
    }
  };

  // ---------------- DERIVED VALUES ----------------
  const level = Math.floor(xp / 100) + 1;
  const progress = xp % 100;

  // ---------------- LOADING ----------------
  if (loading) {
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "18px",
          fontWeight: "700",
        }}
      >
        Loading Focus+...
      </div>
    );
  }

  // ---------------- UI ----------------
  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(180deg,#fdf4ff 0%,#eef2ff 45%,#f5f7ff 100%)",
        padding: "18px",
        paddingBottom: "120px",
      }}
    >
      {/* HEADER */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <button
          onClick={openSidebar}
          style={{
            width: 50,
            height: 50,
            borderRadius: 18,
            border: "none",
            background: "#fff",
            boxShadow: "0 8px 25px rgba(0,0,0,0.06)",
          }}
        >
          <Menu />
        </button>

        <h1 style={{ fontWeight: "900" }}>FOCUS+</h1>

        <div
          style={{
            width: 52,
            height: 52,
            borderRadius: 18,
            background: "#ECE7FF",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span style={{ fontSize: 10 }}>DATE</span>
          <strong>{new Date().getDate()}</strong>
        </div>
      </div>

      {/* PROFILE */}
      <div
        style={{
          background: "#fff",
          padding: 18,
          borderRadius: 32,
          marginBottom: 18,
        }}
      >
        <div style={{ display: "flex", gap: 16 }}>
          <img
            src="https://api.dicebear.com/7.x/adventurer/svg?seed=Focus"
            style={{ width: 90, borderRadius: 20 }}
          />

          <div>
            <div style={{ color: "#777" }}>Welcome back</div>

            <h2 style={{ margin: 0 }}>{profile.name}</h2>

            <div style={{ marginTop: 8, fontWeight: "700" }}>
              Level {level}
            </div>

            <div style={{ fontSize: 12, color: "#666" }}>
              📍 {profile.location} • {profile.status}
            </div>

            <div
              style={{
                marginTop: 10,
                height: 10,
                background: "#eee",
                borderRadius: 10,
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

            <div style={{ fontSize: 12, marginTop: 6 }}>
              {xp} XP • {progress}%
            </div>
          </div>
        </div>

        {/* STATS */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: 10,
            marginTop: 20,
          }}
        >
          <MiniStat icon={<Flame />} value={streak} label="Streak" />
          <MiniStat icon={<Brain />} value={flashcardsCount} label="Cards" />
          <MiniStat icon={<BookOpen />} value={xp} label="XP" />
        </div>
      </div>

      {/* NEXT TASK */}
      <Section title="NEXT TASK">
        <div style={{ fontWeight: "800" }}>{nextTask.title}</div>
        <div style={{ color: "#666" }}>+{nextTask.xp} XP</div>
      </Section>

      {/* PENDING */}
      <Section title="PENDING">
        <PendingItem text="Missed" count={3} icon={<XCircle />} />
        <PendingItem text="Started" count={2} icon={<PlayCircle />} />
        <PendingItem text="To Complete" count={notesCount} icon={<Target />} />
      </Section>

      {/* MASTERY */}
      <Section title="MASTERY">
        <div>Study: {mastery.study}%</div>
        <div>Productivity: {mastery.productivity}%</div>
      </Section>
    </div>
  );
}

// ---------------- COMPONENTS ----------------
function Section({ title, children }) {
  return (
    <div
      style={{
        background: "#fff",
        padding: 20,
        borderRadius: 20,
        marginBottom: 15,
      }}
    >
      <h3>{title}</h3>
      {children}
    </div>
  );
}

function PendingItem({ icon, text, count }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div style={{ display: "flex", gap: 10 }}>
        {icon}
        {text}
      </div>
      <b>{count}</b>
    </div>
  );
}

function MiniStat({ icon, value, label }) {
  return (
    <div style={{ textAlign: "center" }}>
      {icon}
      <div>{value}</div>
      <small>{label}</small>
    </div>
  );
}
