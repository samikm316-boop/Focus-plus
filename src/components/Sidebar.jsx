import React from "react";

export default function Sidebar({
  activeTab,
  setActiveTab,
  sidebarOpen,
  setSidebarOpen,
}) {
  const menu = [
    { id: "home", label: "Home", icon: "🏠" },
    { id: "study", label: "Study", icon: "📚" },
    { id: "focus", label: "Focus AI", icon: "🧠" },
    { id: "settings", label: "Settings", icon: "⚙️" },
  ];

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: sidebarOpen ? 0 : "-280px",
        width: 260,
        height: "100vh",
        background: "#0B0F1A",
        color: "white",
        padding: 20,
        transition: "0.3s",
        zIndex: 100,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      {/* TOP */}
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: 30,
          }}
        >
          <h2 style={{ margin: 0 }}>FOCUS+</h2>

          <button
            onClick={() => setSidebarOpen(false)}
            style={{
              background: "transparent",
              border: "none",
              color: "white",
              fontSize: 24,
              cursor: "pointer",
            }}
          >
            ×
          </button>
        </div>

        {/* MENU */}
        {menu.map((item) => (
          <button
            key={item.id}
            onClick={() => {
              setActiveTab(item.id);
              setSidebarOpen(false);
            }}
            style={{
              width: "100%",
              padding: 14,
              marginBottom: 10,
              borderRadius: 12,
              border: "none",
              textAlign: "left",
              cursor: "pointer",
              background:
                activeTab === item.id
                  ? "linear-gradient(90deg,#7c3aed,#d946ef)"
                  : "transparent",
              color: "white",
            }}
          >
            {item.icon} {item.label}
          </button>
        ))}
      </div>

      {/* USER */}
      <div
        style={{
          padding: 14,
          borderRadius: 16,
          background: "rgba(255,255,255,0.06)",
        }}
      >
        USER
      </div>
    </div>
  );
}
