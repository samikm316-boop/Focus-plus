import React from "react";

import GlassCard from "../../components/ui/GlassCard";

export default function HomeScreen() {
  return (
    <div>
      <h1
        style={{
          color: "white",
          marginBottom: "20px",
        }}
      >
        Home
      </h1>

      <GlassCard>
        <h2 style={{ color: "white" }}>
          Welcome back 👋
        </h2>

        <p style={{ color: "#9CA3AF" }}>
          Stay focused today.
        </p>
      </GlassCard>
    </div>
  );
}
