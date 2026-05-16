import React from "react";
import { X } from "lucide-react";

export default function Sidebar({
  activeTab,
  setActiveTab,
  sidebarOpen,
  closeSidebar,
}) {
  const menu = [
    { id: "home", label: "Home", icon: "🏠" },
    { id: "study", label: "Study", icon: "📚" },
    { id: "focus", label: "Focus AI", icon: "🧠" },
    { id: "settings", label: "Settings", icon: "⚙️" },
  ];

  return (
    <>
      {/* overlay */}
      {sidebarOpen && (
        <div
          onClick={closeSidebar}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.5)",
            zIndex: 10,
          }}
        />
      )}

      {/* sidebar */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: sidebarOpen ? 0 : "-280px",
          width: 280,
          height: "100vh",
          background: "#0B0F1A",
          color: "white",
          padding: 20,
          transition: "0.3s ease",
          zIndex: 20,
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* header */}
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h2 style={{ margin: 0 }}>FOCUS+</h2>

          <button
            onClick={closeSidebar}
            style={{
              background: "transparent",
              border: "none",
              color: "white",
              fontSize: 22,
            }}
          >
            <X />
          </button>
        </div>

        {/* menu */}
        <div style={{ marginTop: 30, display: "flex", flexDirection: "column", gap: 10 }}>
          {menu.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              style={{
                padding: "14px",
                borderRadius: "12px",
                border: "none",
                textAlign: "left",
                background:
                  activeTab === item.id
                    ? "linear-gradient(90deg,#7c3aed,#d946ef)"
                    : "transparent",
                color: "white",
                cursor: "pointer",
                fontSize: 16,
                transition: "0.2s",
              }}
            >
              {item.icon} {item.label}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
