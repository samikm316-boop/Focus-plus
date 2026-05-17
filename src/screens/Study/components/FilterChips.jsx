import React from "react";

export default function FilterChips({ activeTab, filter, setFilter }) {
  const getFilterOptions = () => {
    if (activeTab === "notes") return ["All", "Plain", "Enhanced"];
    if (activeTab === "flashcards") return ["All", "True/False", "Q&A"];
    if (activeTab === "quiz") return ["All", "Easy", "Hard"];
    return ["All"];
  };

  return (
    <div style={styles.filterRow}>
      {getFilterOptions().map((f) => {
        const active = filter === f;
        return (
          <div
            key={f}
            onClick={() => setFilter(f)}
            style={{
              ...styles.chip,
              background: active ? "#EDE9FE" : "#F3F4F6",
              color: active ? "#6D28D9" : "#6B7280",
            }}
          >
            {f}
          </div>
        );
      })}
    </div>
  );
}

const styles = {
  filterRow: {
    display: "flex",
    gap: "10px",
    marginTop: "12px",
    marginBottom: "18px",
  },
  chip: {
    padding: "8px 14px",
    borderRadius: "999px",
    fontWeight: "700",
    fontSize: "12px",
    cursor: "pointer",
  },
};
