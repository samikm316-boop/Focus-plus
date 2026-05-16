import React from "react";

export default function HomeScreen() {
  return (
    <div
      style={{
        color: "white",
      }}
    >
      {/* TOP BAR */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "28px",
        }}
      >
        <div>
          <h1
            style={{
              fontSize: "34px",
              fontWeight: "700",
              marginBottom: "4px",
            }}
          >
            Dashboard
          </h1>

          <p
            style={{
              color: "#94A3B8",
              fontSize: "15px",
            }}
          >
            Stay focused and productive today.
          </p>
        </div>

        {/* PROFILE */}
        <div
          style={{
            width: "52px",
            height: "52px",
            borderRadius: "50%",
            background:
              "linear-gradient(135deg,#7C3AED,#2563EB)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "700",
            fontSize: "18px",
            boxShadow:
              "0 0 25px rgba(124,58,237,0.45)",
          }}
        >
          S
        </div>
      </div>

      {/* HERO CARD */}
      <div
        style={{
          background:
            "linear-gradient(135deg,#7C3AED,#2563EB)",
          borderRadius: "28px",
          padding: "28px",
          marginBottom: "22px",
          position: "relative",
          overflow: "hidden",
          boxShadow:
            "0 10px 40px rgba(124,58,237,0.35)",
        }}
      >
        {/* Glow */}
        <div
          style={{
            position: "absolute",
            right: "-80px",
            top: "-80px",
            width: "220px",
            height: "220px",
            borderRadius: "50%",
            background:
              "rgba(255,255,255,0.12)",
          }}
        />

        <p
          style={{
            opacity: 0.9,
            marginBottom: "10px",
            fontSize: "15px",
          }}
        >
          LEVEL 12
        </p>

        <h1
          style={{
            fontSize: "42px",
            fontWeight: "700",
            marginBottom: "12px",
          }}
        >
          2,540 XP
        </h1>

        <p
          style={{
            maxWidth: "420px",
            lineHeight: "1.6",
            opacity: 0.92,
          }}
        >
          You’re doing great. Keep your streak alive
          and complete today’s study goals.
        </p>

        {/* STREAK */}
        <div
          style={{
            marginTop: "22px",
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            background:
              "rgba(255,255,255,0.14)",
            padding: "12px 18px",
            borderRadius: "18px",
            backdropFilter: "blur(12px)",
          }}
        >
          <span style={{ fontSize: "22px" }}>
            🔥
          </span>

          <div>
            <h3
              style={{
                fontSize: "18px",
                fontWeight: "600",
              }}
            >
              12 Day Streak
            </h3>

            <p
              style={{
                fontSize: "13px",
                opacity: 0.8,
              }}
            >
              Keep it going
            </p>
          </div>
        </div>
      </div>

      {/* GRID */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(280px,1fr))",
          gap: "18px",
        }}
      >
        {/* TODAY FOCUS */}
        <div
          style={{
            background:
              "rgba(255,255,255,0.05)",
            border:
              "1px solid rgba(255,255,255,0.06)",
            borderRadius: "24px",
            padding: "22px",
            backdropFilter: "blur(12px)",
          }}
        >
          <h2
            style={{
              marginBottom: "18px",
              fontSize: "20px",
            }}
          >
            📚 Today’s Focus
          </h2>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            {[
              {
                title: "Physics Revision",
                xp: "+120 XP",
              },

              {
                title: "Flashcards",
                xp: "+80 XP",
              },

              {
                title: "Math Quiz",
                xp: "+150 XP",
              },
            ].map((task) => (
              <button
                key={task.title}
                style={{
                  background:
                    "rgba(255,255,255,0.05)",

                  border:
                    "1px solid rgba(255,255,255,0.05)",

                  borderRadius: "18px",

                  padding: "16px",

                  display: "flex",

                  justifyContent:
                    "space-between",

                  alignItems: "center",

                  color: "white",

                  cursor: "pointer",

                  transition: "0.2s",
                }}
              >
                <span>{task.title}</span>

                <span
                  style={{
                    color: "#A78BFA",
                    fontWeight: "600",
                  }}
                >
                  {task.xp}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* PRODUCTIVITY */}
        <div
          style={{
            background:
              "rgba(255,255,255,0.05)",

            border:
              "1px solid rgba(255,255,255,0.06)",

            borderRadius: "24px",

            padding: "22px",

            backdropFilter: "blur(12px)",
          }}
        >
          <h2
            style={{
              marginBottom: "18px",
              fontSize: "20px",
            }}
          >
            ⚡ Productivity
          </h2>

          {/* Progress */}
          <div
            style={{
              marginBottom: "18px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent:
                  "space-between",
                marginBottom: "8px",
              }}
            >
              <span>Daily Progress</span>

              <span>72%</span>
            </div>

            <div
              style={{
                height: "12px",
                borderRadius: "999px",
                background:
                  "rgba(255,255,255,0.08)",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  width: "72%",
                  height: "100%",
                  background:
                    "linear-gradient(90deg,#7C3AED,#2563EB)",
                  borderRadius: "999px",
                }}
              />
            </div>
          </div>

          {/* Stats */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "14px",
              marginTop: "20px",
            }}
          >
            {[
              {
                label: "Tasks",
                value: "14",
              },

              {
                label: "Completed",
                value: "10",
              },

              {
                label: "Study Time",
                value: "5h",
              },

              {
                label: "Rank",
                value: "#12",
              },
            ].map((item) => (
              <div
                key={item.label}
                style={{
                  background:
                    "rgba(255,255,255,0.04)",

                  borderRadius: "18px",

                  padding: "16px",
                }}
              >
                <h2
                  style={{
                    fontSize: "24px",
                    marginBottom: "6px
