import React from "react";

export default function SubjectBar({ subjects, notes, selectedSubject, setSelectedSubject }) {
  return (
    <>
      <div style={styles.sectionHeader}>
        <h2 style={styles.sectionTitle}>SUBJECTS</h2>
        <span style={styles.viewAll} onClick={() => setSelectedSubject("All")}>
          View all
        </span>
      </div>

      <div style={styles.subjectsRow}>
        {subjects
          .filter((s) => s.name !== "All")
          .map((subject) => {
            const active = selectedSubject === subject.name;
            const noteCount = notes.filter((n) => n.subject === subject.name).length;

            return (
              <div
                key={subject.name}
                onClick={() => setSelectedSubject(subject.name)}
                style={{
                  ...styles.subjectCard,
                  background: active ? "#DDD6FE" : subject.color,
                  transform: active ? "scale(1.03)" : "scale(1)",
                }}
              >
                <div style={{ fontSize: "24px", marginBottom: "10px" }}>{subject.icon}</div>
                <div style={{ fontWeight: "800" }}>{subject.name}</div>
                <div style={{ fontSize: "12px", color: "#555", marginTop: "4px" }}>
                  {noteCount} notes
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
}

const styles = {
  sectionHeader: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "14px" },
  sectionTitle: { margin: 0, fontSize: "16px", fontWeight: "800" },
  viewAll: { color: "#7C3AED", fontWeight: "700", fontSize: "13px", cursor: "pointer" },
  subjectsRow: {
    display: "flex",
    gap: "12px",
    overflowX: "auto",
    paddingBottom: "8px",
    // Fix #4: Ensures silky smooth cross-platform hardware acceleration on mobile touch gestures
    WebkitOverflowScrolling: "touch",
  },
  subjectCard: { minWidth: "130px", padding: "14px", borderRadius: "20px", cursor: "pointer", transition: "0.25s", boxShadow: "0 10px 25px rgba(0,0,0,0.05)" },
};
