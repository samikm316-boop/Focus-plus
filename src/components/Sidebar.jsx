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
      <button style={styles.hamburger} onClick={() => setOpen(true)}>
        ☰
      </button>

      {/* OVERLAY */}
      {open && <div style={styles.overlay} onClick={() => setOpen(false)} />}

      {/* SIDEBAR */}
      <div style={{ ...styles.sidebar, left: open ? 0 : -280 }}>
        
        {/* USER CARD */}
        <div style={styles.userBox}>
          <div style={styles.avatar} />

          <div>
            <div style={{ fontWeight: 800 }}>{user?.username}</div>
            <div style={{ fontSize: 12, color: "#9CA3AF" }}>
              Focus+ User
            </div>
          </div>
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
                ...styles.item,
                background:
                  activeTab === item.id
                    ? "linear-gradient(135deg,#7C3AED,#2563EB)"
                    : "rgba(255,255,255,0.04)",
              }}
            >
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </button>
          ))}
        </div>

        {/* LOGOUT */}
        <button onClick={onLogout} style={styles.logout}>
          Logout
        </button>
      </div>
    </>
  );
}

/* ================= STYLES ================= */

const styles = {
  hamburger: {
    position: "fixed",
    top: 16,
    left: 16,
    zIndex: 999,
    fontSize: 22,
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.1)",
    color: "white",
    width: 44,
    height: 44,
    borderRadius: 12,
  },

  overlay: {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.5)",
    backdropFilter: "blur(6px)",
    zIndex: 10,
  },

  sidebar: {
    position: "fixed",
    top: 0,
    left: 0,
    width: 280,
    height: "100%",
    padding: 20,
    background: "rgba(15,23,42,0.98)",
    backdropFilter: "blur(18px)",
    borderRight: "1px solid rgba(255,255,255,0.06)",
    transition: "0.25s ease",
    zIndex: 20,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },

  userBox: {
    display: "flex",
    gap: 12,
    alignItems: "center",
    marginBottom: 24,
  },

  avatar: {
    width: 42,
    height: 42,
    borderRadius: 14,
    background: "linear-gradient(135deg,#c084fc,#60a5fa)",
  },

  item: {
    display: "flex",
    gap: 10,
    alignItems: "center",
    padding: 14,
    borderRadius: 14,
    border: "none",
    color: "white",
    cursor: "pointer",
    fontWeight: 600,
  },

  logout: {
    marginTop: 20,
    padding: 14,
    borderRadius: 14,
    border: "none",
    background: "#ef4444",
    color: "white",
    fontWeight: 700,
  },
};
