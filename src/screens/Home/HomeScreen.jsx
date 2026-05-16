import React, { useEffect, useState } from "react";
import { getCurrentUser, getXP, getNotes, getFlashcards } from "../api";

export default function HomeScreen() {
  const [user, setUser] = useState(null);
  const [xp, setXp] = useState(0);
  const [notes, setNotes] = useState([]);
  const [flashcards, setFlashcards] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        setLoading(true);

        const [userData, xpData, notesData, flashData] =
          await Promise.all([
            getCurrentUser(),
            getXP(),
            getNotes(),
            getFlashcards(),
          ]);

        setUser(userData);
        setXp(xpData?.total_xp || 0);
        setNotes(notesData || []);
        setFlashcards(flashData || []);
      } catch (err) {
        console.error("Dashboard load error:", err);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  if (loading) {
    return (
      <div style={{ color: "white", padding: 20 }}>
        Loading dashboard...
      </div>
    );
  }

  return (
    <div style={{ color: "white" }}>
      {/* HEADER */}
      <div style={{ marginBottom: 24 }}>
        <h1 style={{ fontSize: 32, fontWeight: 700 }}>
          Welcome {user?.username || "User"} 👋
        </h1>

        <p style={{ color: "#9CA3AF" }}>
          Let’s build consistency today.
        </p>
      </div>

      {/* CARDS */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
          gap: 16,
        }}
      >
        {/* XP */}
        <div style={cardStyle}>
          <h3>🔥 Total XP</h3>
          <h1 style={{ fontSize: 40 }}>{xp}</h1>
        </div>

        {/* NOTES */}
        <div style={cardStyle}>
          <h3>📚 Notes</h3>
          <h1 style={{ fontSize: 40 }}>{notes.length}</h1>
        </div>

        {/* FLASHCARDS */}
        <div style={cardStyle}>
          <h3>🧠 Flashcards</h3>
          <h1 style={{ fontSize: 40 }}>{flashcards.length}</h1>
        </div>

        {/* STREAK (placeholder until backend exists) */}
        <div style={cardStyle}>
          <h3>🔥 Streak</h3>
          <h1 style={{ fontSize: 40 }}>--</h1>
        </div>
      </div>
    </div>
  );
}

const cardStyle = {
  background: "rgba(255,255,255,0.05)",
  padding: 20,
  borderRadius: 16,
  border: "1px solid rgba(255,255,255,0.08)",
};
