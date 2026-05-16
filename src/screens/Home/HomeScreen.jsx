import React, { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "https://focus-plus.onrender.com";

export default function HomeScreen() {
  const [xp, setXp] = useState(0);
  const [notes, setNotes] = useState([]);
  const [flashcards, setFlashcards] = useState([]);

  useEffect(() => {
    fetchDashboard();
  }, []);

  const fetchDashboard = async () => {
    try {
      const token = localStorage.getItem("token");

      const headers = {
        Authorization: `Bearer ${token}`,
      };

      const xpRes = await axios.get(
        `${API_URL}/api/xp`,
        { headers }
      );

      const notesRes = await axios.get(
        `${API_URL}/api/study/notes`,
        { headers }
      );

      const flashRes = await axios.get(
        `${API_URL}/api/study/flashcards`,
        { headers }
      );

      setXp(xpRes.data.total_xp || 0);
      setNotes(notesRes.data || []);
      setFlashcards(flashRes.data || []);
    } catch (err) {
      console.log(err);
    }
  };

  const level = Math.floor(xp / 100) || 1;

  const progress = xp % 100;

  return (
    <div
      style={{
        background: "#F5F5FA",
        minHeight: "100vh",
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
          marginBottom: "20px",
        }}
      >
        <button
          style={{
            border: "none",
            background: "transparent",
            fontSize: "30px",
            cursor: "pointer",
          }}
        >
          ☰
        </button>

        <h1
          style={{
            fontSize: "30px",
            fontWeight: "800",
            background:
              "linear-gradient(90deg,#ff5ec4,#6c63ff)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            margin: 0,
          }}
        >
          FOCUS+
        </h1>

        <div
          style={{
            background: "#EFE7FF",
            borderRadius: "16px",
            padding: "10px 14px",
            textAlign: "center",
            minWidth: "52px",
          }}
        >
          <div
            style={{
              fontSize: "11px",
              color: "#666",
              fontWeight: "600",
            }}
          >
            DATE
          </div>

          <div
            style={{
              fontWeight: "800",
              fontSize: "20px",
              color: "#111",
            }}
          >
            {new Date().getDate()}
          </div>
        </div>
      </div>

      {/* PROFILE CARD */}

      <div
        style={{
          background: "white",
          borderRadius: "28px",
          padding: "18px",
          boxShadow:
            "0 10px 30px rgba(0,0,0,0.05)",
          marginBottom: "20px",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "16px",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "100px",
              height: "100px",
              borderRadius: "24px",
              overflow: "hidden",
              background:
                "linear-gradient(135deg,#c7d2fe,#fbcfe8)",
              flexShrink: 0,
            }}
          >
            <img
              src="https://api.dicebear.com/7.x/adventurer/svg?seed=Focus"
              alt="avatar"
              style={{
                width: "100%",
                height: "100%",
              }}
            />
          </div>

          <div style={{ flex: 1 }}>
            <p
              style={{
                margin: 0,
                color: "#555",
                fontSize: "15px",
              }}
            >
              Welcome back,
            </p>

            <h2
              style={{
                margin: "6px 0",
                fontSize: "38px",
                fontWeight: "800",
                color: "#111",
              }}
            >
              USER
            </h2>

            <div
              style={{
                display: "inline-block",
                background:
                  "linear-gradient(90deg,#d946ef,#6366f1)",
                color: "white",
                padding: "6px 14px",
                borderRadius: "999px",
                fontSize: "14px",
                fontWeight: "700",
                marginBottom: "12px",
              }}
            >
              Level {level}
            </div>

            <div
              style={{
                width: "100%",
                height: "10px",
                background: "#E5E7EB",
                borderRadius: "999px",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  width: `${progress}%`,
                  height: "100%",
                  background:
                    "linear-gradient(90deg,#d946ef,#60a5fa)",
                }}
              />
            </div>

            <div
              style={{
                textAlign: "right",
                marginTop: "6px",
                fontWeight: "700",
                color: "#666",
              }}
            >
              {progress}%
            </div>
          </div>
        </div>

        {/* STATS */}

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(3,1fr)",
            marginTop: "20px",
            borderTop: "1px solid #eee",
            paddingTop: "18px",
          }}
        >
          <StatCard
            emoji="🔥"
            value={notes.length}
            label="Day Streak"
          />

          <StatCard
            emoji="🏋️"
            value={flashcards.length * 20}
            label="Fitness XP"
          />

          <StatCard
            emoji="⭐"
            value={xp}
            label="Study XP"
          />
        </div>
      </div>

      {/* TODAY GOALS */}

      <SectionCard title="TODAY'S GOALS">
        <GoalRow
          text="Review flashcards"
          xp="50 XP"
        />

        <GoalRow
          text="Study Biology Notes"
          xp="120 XP"
        />
      </SectionCard>

      {/* PENDING */}

      <SectionCard title="PENDING LIST">
        <PendingRow
          color="#ff4d6d"
          text="Missed"
          count="3"
        />

        <PendingRow
          color="#3b82f6"
          text="Started"
          count="2"
        />

        <PendingRow
          color="#22c55e"
          text="Left to complete"
          count={notes.length}
        />
      </SectionCard>

      {/* XP */}

      <SectionCard title="MASTERY GAUGE (OVERALL)">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "10px",
          }}
        >
          <span
            style={{
              color: "#666",
            }}
          >
            XP Progress
          </span>

          <span
            style={{
              color: "#666",
            }}
          >
            Today
          </span>
        </div>

        <div
          style={{
            width: "100%",
            height: "12px",
            background: "#ECECF3",
            borderRadius: "999px",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              width: `${progress}%`,
              height: "100%",
              background:
                "linear-gradient(90deg,#ff5ec4,#60a5fa)",
            }}
          />
        </div>

        <div
          style={{
            textAlign: "center",
            marginTop: "10px",
            fontWeight: "700",
            color: "#444",
          }}
        >
          {xp} / 1000 XP
        </div>
      </SectionCard>

      {/* QUOTE */}

      <div
        style={{
          borderRadius: "28px",
          padding: "34px",
          color: "white",
          textAlign: "center",
          background:
            "linear-gradient(135deg,#f9a8d4,#818cf8,#60a5fa)",
          boxShadow:
            "0 20px 40px rgba(129,140,248,0.3)",
        }}
      >
        <div
          style={{
            fontSize: "28px",
            opacity: 0.8,
            marginBottom: "18px",
          }}
        >
          ❝
        </div>

        <div
          style={{
            fontSize: "30px",
            lineHeight: "1.5",
            fontWeight: "300",
          }}
        >
          Discipline today
          <br />
          leads to freedom
          <br />
          tomorrow.
        </div>

        <div
          style={{
            marginTop: "24px",
            fontSize: "22px",
            fontWeight: "700",
          }}
        >
          — Focus+
        </div>
      </div>
    </div>
  );
}

/* COMPONENTS */

function SectionCard({ title, children }) {
  return (
    <div
      style={{
        background: "white",
        borderRadius: "26px",
        padding: "22px",
        marginBottom: "20px",
        boxShadow:
          "0 10px 30px rgba(0,0,0,0.05)",
      }}
    >
      <h3
        style={{
          marginTop: 0,
          marginBottom: "20px",
          color: "#111",
          fontWeight: "800",
          fontSize: "20px",
        }}
      >
        {title}
      </h3>

      {children}
    </div>
  );
}

function GoalRow({ text, xp }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: "18px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "14px",
        }}
      >
        <div
          style={{
            width: "26px",
            height: "26px",
            borderRadius: "50%",
            border: "2px solid #ddd",
          }}
        />

        <span
          style={{
            color: "#222",
            fontWeight: "600",
          }}
        >
          {text}
        </span>
      </div>

      <span
        style={{
          color: "#666",
          fontWeight: "700",
        }}
      >
        {xp}
      </span>
    </div>
  );
}

function PendingRow({
  color,
  text,
  count,
}) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "18px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
        }}
      >
        <div
          style={{
            width: "28px",
            height: "28px",
            borderRadius: "50%",
            border: `3px solid ${color}`,
          }}
        />

        <span
          style={{
            color,
            fontWeight: "700",
            fontSize: "18px",
          }}
        >
          {text}
        </span>
      </div>

      <span
        style={{
          fontWeight: "700",
          color: "#555",
          fontSize: "18px",
        }}
      >
        {count}
      </span>
    </div>
  );
}

function StatCard({
  emoji,
  value,
  label,
}) {
  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <div
        style={{
          fontSize: "30px",
        }}
      >
        {emoji}
      </div>

      <div
        style={{
          fontSize: "34px",
          fontWeight: "800",
          color: "#111",
        }}
      >
        {value}
      </div>

      <div
        style={{
          color: "#777",
          fontWeight: "600",
        }}
      >
        {label}
      </div>
    </div>
  );
}
