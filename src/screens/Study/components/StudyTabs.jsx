import React from "react";

export default function StudyTabs({ activeTab, onTabChange }) {
  const tabs = [
    { id: "create", icon: "➕", label: "Create" },
    { id: "notes", icon: "📘", label: "Notes" },
    { id: "flashcards", icon: "📖", label: "Flashcards" },
    { id: "quiz", icon: "🧪", label: "Quiz" },
    { id: "learn", icon: "🎓", label: "Learn" },
  ];

  return (
    <div style={styles.tabsContainer}>
      {tabs.map((tab) => {
        const active = activeTab === tab.id;
        return (
          <div
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            style={{
              ...styles.tab,
              background: active ? "#F3E8FF" : "transparent",
              color: active ? "#6D28D9" : "#6B7280",
            }}
          >
            <div style={{ fontSize: "16px" }}>{tab.icon}</div>
            {tab.label}
          </div>
        );
      })}
    </div>
  );
}

const styles = {
  tabsContainer: {
    display: "flex",
    justifyContent: "space-between",
    background: "white",
    padding: "10px",
    borderRadius: "18px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
    marginBottom: "22px",
  },
  tab: {
    flex: 1,
    textAlign: "center",
    padding: "8px",
    borderRadius: "14px",
    fontWeight: "700",
    fontSize: "12px",
    cursor: "pointer",
    transition: "0.25s",
  },
};

