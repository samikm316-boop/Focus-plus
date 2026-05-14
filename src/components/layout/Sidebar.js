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
        width: "250px",

        background: "rgba(11,18,32,0.98)",

        height: "100vh",

        padding: "20px",

        borderRight:
          "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <h1
        style={{
          color: "white",
          marginBottom: "30px",
        }}
      >
        Focus+
      </h1>

      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActive(tab)}
          style={{
            width: "100%",

            background:
              active === tab
                ? "#7C3AED"
                : "transparent",

            border: "none",

            color: "white",

            padding: "14px",

            marginBottom: "10px",

            borderRadius: "12px",

            textAlign: "left",

            cursor: "pointer",
          }}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
