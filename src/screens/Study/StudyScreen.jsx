import React from "react";

export default function StudyScreen() {
  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "24px",
        background:
          "linear-gradient(180deg,#0F172A,#111827)",
      }}
    >
      <h1
        style={{
          color: "white",
          marginBottom: "20px",
          fontSize: "32px",
          fontWeight: "800",
        }}
      >
        Study
      </h1>

      <div
        style={{
          background:
            "rgba(255,255,255,0.06)",
          border:
            "1px solid rgba(255,255,255,0.08)",
          borderRadius: "24px",
          padding: "24px",
          color: "white",
          backdropFilter: "blur(10px)",
        }}
      >
        Notes, flashcards, quizzes.
      </div>
    </div>
  );
}
