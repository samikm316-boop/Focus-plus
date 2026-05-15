import React from "react";

import GlassCard from "../../components/ui/GlassCard";

export default function HomeScreen() {
  return (
    <div>
      {/* HEADER */}
      <div
        style={{
          marginBottom: "24px",
        }}
      >
        <h1
          style={{
            color: "white",

            fontSize: "32px",

            fontWeight: "700",
          }}
        >
          Welcome Back 👋
        </h1>

        <p
          style={{
            color: "#9CA3AF",

            marginTop: "6px",
          }}
        >
          Stay focused today.
        </p>
      </div>

      {/* GRID */}
      <div
        style={{
          display: "grid",

          gridTemplateColumns:
            "repeat(auto-fit,minmax(260px,1fr))",

          gap: "18px",
        }}
      >
        {/* XP CARD */}
        <GlassCard>
          <h2
            style={{
              color: "white",

              marginBottom: "10px",
            }}
          >
            🔥 Study Streak
          </h2>

          <h1
            style={{
              color: "#F97316",

              fontSize: "42px",
            }}
          >
            12
          </h1>

          <p
            style={{
              color: "#9CA3AF",
            }}
          >
            Keep the momentum going.
          </p>
        </GlassCard>

        {/* XP */}
        <GlassCard>
          <h2
            style={{
              color: "white",

              marginBottom: "10px",
            }}
          >
            ⭐ Total XP
          </h2>

          <h1
            style={{
              color: "#7C3AED",

              fontSize: "42px",
            }}
          >
            2,540
          </h1>

          <p
            style={{
              color: "#9CA3AF",
            }}
          >
            You're progressing fast.
          </p>
        </GlassCard>

        {/* TASKS */}
        <GlassCard>
          <h2
            style={{
              color: "white",

              marginBottom: "14px",
            }}
          >
            📚 Today's Focus
          </h2>

          <div
            style={{
              display: "flex",

              flexDirection: "column",

              gap: "10px",
            }}
          >
            {[
              "Flashcards",
              "Math Revision",
              "Physics Quiz",
            ].map((task) => (
              <div
                key={task}
                style={{
                  background:
                    "rgba(255,255,255,0.05)",

                  padding: "12px",

                  borderRadius: "12px",

                  color: "white",
                }}
              >
                {task}
              </div>
            ))}
          </div>
        </GlassCard>

        {/* QUOTE */}
        <GlassCard>
          <h2
            style={{
              color: "white",

              marginBottom: "10px",
            }}
          >
            💡 Motivation
          </h2>

          <p
            style={{
              color: "#9CA3AF",

              lineHeight: "1.7",
            }}
          >
            Discipline is choosing between
            what you want now and what
            you want most.
          </p>
        </GlassCard>
      </div>
    </div>
  );
}
