import React from "react";

import GlassCard from "../../components/ui/GlassCard";

export default function ChatScreen() {
  return (
    <div>
      <h1
        style={{
          color: "white",
          marginBottom: "20px",
        }}
      >
        Focus AI
      </h1>

      <GlassCard>
        <p style={{ color: "white" }}>
          Ask anything...
        </p>
      </GlassCard>
    </div>
  );
}
