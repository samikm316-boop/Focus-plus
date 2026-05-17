import React from "react";

export default function FlashcardsSection({ flashcards, subjects, selectedSubject, filter }) {
  return (
    <>
      {subjects
        .filter((s) => s.name !== "All")
        .map((subjectObj) => {
          // Precise contextual data filters matching your strict criteria conditions
          const subjectCards = flashcards.filter((f) => {
            const subjectMatch =
              selectedSubject === "All"
                ? f.subject === subjectObj.name
                : f.subject === selectedSubject && f.subject === subjectObj.name;

            const typeMatch = filter === "All" ? true : f.type === filter;

            return subjectMatch && typeMatch;
          });

          if (!subjectCards.length) return null;

          return (
            <div key={subjectObj.name} style={{ marginBottom: "18px" }}>
              <div style={styles.groupHeader}>
                {subjectObj.icon} {subjectObj.name}
                <span style={{ color: "#9CA3AF" }}> • {subjectCards.length} cards</span>
              </div>
              {subjectCards.map((card) => (
                <div key={card.id} style={styles.flashcard}>
                  <div style={{ fontWeight: "800", marginBottom: "8px" }}>{card.question}</div>
                  <div style={{ color: "#6B7280", fontSize: "14px" }}>{card.answer}</div>
                  <div style={styles.badge}>{card.type}</div>
                </div>
              ))}
            </div>
          );
        })}
    </>
  );
}

const styles = {
  groupHeader: {
    fontWeight: "800",
    marginBottom: "10px",
  },
  flashcard: {
    background: "white",
    padding: "16px",
    borderRadius: "18px",
    marginBottom: "10px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.04)",
  },
  badge: {
    marginTop: "10px",
    fontSize: "12px",
    color: "#7C3AED",
    fontWeight: "700",
  },
};

