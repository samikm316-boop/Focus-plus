import React from "react";

export default function Sidebar({
  active,
  setActive,
}) {
  const tabs = [
    "home",
    "study",
    "focus ai",
    "profile",
    "settings",
  ];

  return (
    <div
      style={{
        width: "260px",

        background:
          "rgba(15,23,42,0.95)",

        backdropFilter: "blur(14px)",

        borderRight:
          "1px solid rgba(255,255,255,0.06)",

        padding: "22px",

        display: "flex",

        flexDirection: "column",

        gap: "12px",
      }}
    >
      {/* LOGO */}
      <div
        style={{
          marginBottom: "20px",
        }}
      >
        <h1
          style={{
            color: "white",

            fontSize: "28px",

            fontWeight: "700",
          }}
        >
          Focus+
        </h1>

        <p
          style={{
            color: "#9CA3AF",

            fontSize: "13px",

            marginTop: "4px",
          }}
        >
          Productivity Reimagined
        </p>
      </div>

      {/* TABS */}
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActive(tab)}
          style={{
            width: "100%",

            background:
              active === tab
                ? "linear-gradient(135deg,#7C3AED,#2563EB)"
                : "transparent",

            border:
              active === tab
                ? "none"
                : "1px solid rgba(255,255,255,0.05)",

            color: "white",

            padding: "15px",

            borderRadius: "14px",

            textAlign: "left",

            fontSize: "15px",

            fontWeight: "500",

            cursor: "pointer",

            transition: "0.2s",
          }}
        >
          {tab.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
