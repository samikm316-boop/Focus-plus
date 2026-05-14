import React from "react";

import GlassCard from "../../components/ui/GlassCard";

export default function ChatScreen() {
  return (
    <div
      style={{
        display: "flex",

        flexDirection: "column",

        height: "100%",
      }}
    >
      {/* HEADER */}
      <div
        style={{
          marginBottom: "20px",
        }}
      >
        <h1
          style={{
            color: "white",

            fontSize: "32px",
          }}
        >
          Focus AI 🤖
        </h1>

        <p
          style={{
            color: "#9CA3AF",

            marginTop: "6px",
          }}
        >
          Your futuristic study assistant
        </p>
      </div>

      {/* CHAT AREA */}
      <div
        style={{
          flex: 1,

          display: "flex",

          flexDirection: "column",

          gap: "14px",
        }}
      >
        <GlassCard>
          <p style={{ color: "white" }}>
            Hey 👋 How can I help you
            today?
          </p>
        </GlassCard>

        <div
          style={{
            alignSelf: "flex-end",

            background:
              "linear-gradient(135deg,#7C3AED,#2563EB)",

            padding: "14px",

            borderRadius: "16px",

            color: "white",

            maxWidth: "70%",
          }}
        >
          Help me revise biology.
        </div>
      </div>

      {/* INPUT */}
      <div
        style={{
          marginTop: "20px",

          display: "flex",

          gap: "10px",
        }}
      >
        <input
          placeholder="Ask anything..."
          style={{
            flex: 1,

            background:
              "rgba(255,255,255,0.06)",

            border:
              "1px solid rgba(255,255,255,0.06)",

            borderRadius: "14px",

            padding: "14px",

            color: "white",

            outline: "none",
          }}
        />

        <button
          style={{
            background:
              "linear-gradient(135deg,#7C3AED,#2563EB)",

            border: "none",

            color: "white",

            padding: "14px 18px",

            borderRadius: "14px",

            cursor: "pointer",
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
}
