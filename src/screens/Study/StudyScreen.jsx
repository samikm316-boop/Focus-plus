import React from "react";

import GlassCard from "../../components/ui/GlassCard";

export default function StudyScreen() {
  return (
    <div>
      <h1
        style={{
          color: "white",
          marginBottom: "20px",
        }}
      >
        Study
      </h1>

      <GlassCard>
        <p style={{ color: "white" }}>
          Notes, flashcards, quizzes.
        </p>
      </GlassCard>
    </div>
  );
}
