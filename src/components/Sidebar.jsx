import React, { useState } from "react";

export default function Sidebar({
  activeTab,
  setActiveTab,
  user,
  onLogout,
}) {
  const [open, setOpen] = useState(false);

  const menu = [
    { id: "home", label: "Home", icon: "🏠" },
    { id: "study", label: "Study", icon: "📚" },
    { id: "focus", label: "Focus AI", icon: "🧠" },
    { id: "settings", label: "Settings", icon: "⚙️" },
  ];

  return (
    <>
      {/* HAMBURGER */}
      <button
        onClick={() => setOpen(!open)}
        style={{
          position: "absolute",
          top: 15,
          left: 15,
          zIndex: 999,
          background: "transparent",
          color: "white",
          fontSize: 24,
          border: "none",
        }}
      >
        ☰
      </button>

      {/* OVERLAY */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.6)",
            backdropFilter: "blur(6px)",
            zIndex: 10,
          }}
        />
      )}

      {/* SIDEBAR */}
      <div
        style={{
          position: "fixed",
          left: open ? 0 : "-260px",
          top: 0,
          width: 260,
          height: "100%",
          background: "#0B0F1A",
          color: "white",
          padding: 20,
          transition: "0.3s",
          zIndex: 20,
          borderRight: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        {/* USER */}
        <div style={{ marginBottom: 30 }}>
          <h2>{user?.username}</h2>
          <p style={{ color: "#9CA3AF" }}>Focus+ User</p>
        </div>

        {/* MENU */}
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {menu.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(item.id);
                setOpen(false);
              }}
              style={{
                padding: 12,
                borderRadius: 10,
                border: "none",
                textAlign: "left",
                background:
                  activeTab === item.id
                    ? "rgba(99,102,241,0.3)"
                    : "transparent",
                color: "white",
                cursor: "pointer",
              }}
            >
              {item.icon} {item.label}
            </button>
          ))}
        </div>

        {/* LOGOUT */}
        <button
          onClick={onLogout}
          style={{
            marginTop: 30,
            width: "100%",
            padding: 12,
            borderRadius: 10,
            border: "none",
            background: "red",
            color: "white",
          }}
        >
          Logout
        </button>
      </div>
    </>
  );
}
