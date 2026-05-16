import React from "react";

export default function Sidebar({
  activeTab,
  setActiveTab,
  sidebarOpen,
  setSidebarOpen,
}) {
  const menu = [
    {
      id: "home",
      label: "HOME",
      icon: "🏠",
    },
    {
      id: "study",
      label: "STUDY",
      icon: "📚",
    },
    {
      id: "focus",
      label: "FOCUS AI",
      icon: "🤖",
    },
    {
      id: "settings",
      label: "SETTINGS",
      icon: "⚙️",
    },
  ];

  return (
    <>
      {/* OVERLAY */}
      <div
        onClick={() => setSidebarOpen(false)}
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(0,0,0,0.45)",
          backdropFilter: "blur(4px)",
          opacity: sidebarOpen ? 1 : 0,
          pointerEvents: sidebarOpen ? "auto" : "none",
          transition: "0.3s",
          zIndex: 998,
        }}
      />

      {/* SIDEBAR */}
      <div
        style={{
          position: "fixed",
          top: 0,
          transform: sidebarOpen
  ? "translateX(0)"
  : "translateX(-110%)",
          width: "260px",
          height: "100vh",
          background:
            "linear-gradient(180deg,#0B1020,#09142B)",
          transition: "0.35s ease",
          zIndex: 999,
          padding: "28px 20px",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          boxShadow:
            "10px 0 40px rgba(0,0,0,0.35)",
        }}
      >
        <div>
          {/* LOGO */}
          <div
            style={{
              marginBottom: "40px",
            }}
          >
            <h1
              style={{
                color: "white",
                fontSize: "42px",
                fontWeight: "800",
                margin: 0,
              }}
            >
              Focus+
            </h1>

            <p
              style={{
                color: "#9CA3AF",
                marginTop: "6px",
                fontSize: "15px",
              }}
            >
              Productivity Reimagined
            </p>
          </div>

          {/* BUTTONS */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}
          >
            {menu.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setSidebarOpen(false);
                }}
                style={{
                  width: "100%",
                  border: "none",
                  cursor: "pointer",
                  background:
                    activeTab === item.id
                      ? "linear-gradient(135deg,#7C3AED,#D946EF)"
                      : "transparent",
                  borderRadius: "22px",
                  padding: "18px",
                  color: "white",
                  fontSize: "18px",
                  fontWeight: "700",
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                  transition: "0.25s",
                  boxShadow:
                    activeTab === item.id
                      ? "0 10px 25px rgba(124,58,237,0.35)"
                      : "none",
                }}
              >
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* BOTTOM USER CARD */}
        <div
          style={{
            background:
              "rgba(255,255,255,0.06)",
            borderRadius: "24px",
            padding: "16px",
            border:
              "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <div
            style={{
              color: "white",
              fontWeight: "700",
              fontSize: "18px",
            }}
          >
            USER
          </div>

          <div
            style={{
              marginTop: "8px",
              display: "inline-block",
              padding: "6px 12px",
              borderRadius: "999px",
              background:
                "linear-gradient(90deg,#D946EF,#6366F1)",
              color: "white",
              fontWeight: "700",
              fontSize: "13px",
            }}
          >
            Level 1
          </div>
        </div>
      </div>
    </>
  );
}
