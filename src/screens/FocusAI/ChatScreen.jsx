import React from "react";

export default function ChatScreen() {
  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "24px",
        background:
          "linear-gradient(180deg,#0F172A,#111827)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* HEADER */}

      <div
        style={{
          marginBottom: "24px",
        }}
      >
        <h1
          style={{
            color: "white",
            fontSize: "34px",
            fontWeight: "800",
            marginBottom: "6px",
          }}
        >
          Focus AI 🤖
        </h1>

        <p
          style={{
            color: "#9CA3AF",
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
          gap: "16px",
        }}
      >
        {/* AI MESSAGE */}

        <div
          style={{
            background:
              "rgba(255,255,255,0.06)",
            border:
              "1px solid rgba(255,255,255,0.08)",
            borderRadius: "20px",
            padding: "16px",
            color: "white",
            maxWidth: "80%",
            backdropFilter: "blur(12px)",
          }}
        >
          Hey 👋 How can I help you
          today?
        </div>

        {/* USER MESSAGE */}

        <div
          style={{
            alignSelf: "flex-end",
            background:
              "linear-gradient(135deg,#7C3AED,#2563EB)",
            padding: "16px",
            borderRadius: "20px",
            color: "white",
            maxWidth: "75%",
            fontWeight: "500",
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
              "1px solid rgba(255,255,255,0.08)",
            borderRadius: "16px",
            padding: "16px",
            color: "white",
            outline: "none",
            fontSize: "15px",
          }}
        />

        <button
          style={{
            background:
              "linear-gradient(135deg,#7C3AED,#2563EB)",
            border: "none",
            color: "white",
            padding: "16px 20px",
            borderRadius: "16px",
            cursor: "pointer",
            fontWeight: "700",
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
}
