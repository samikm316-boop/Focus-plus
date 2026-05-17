import React, { useMemo } from "react";

export default function FlashcardsSection({ flashcards, subjects, selectedSubject, filter }) {
  
  // Calculate if any matching cards exist before map rendering
  const hasVisibleCards = useMemo(() => {
    return flashcards.some((f) => {
      const subjectMatch = selectedSubject === "All" ? true : f.subject === selectedSubject;
      const typeMatch = filter === "All" ? true : f.type === filter;
      return subjectMatch && typeMatch;
    });
  }, [flashcards, selectedSubject, filter]);

  // Fix #7: Avoid blank layouts by testing filtered criteria length properties directly
  if (!hasVisibleCards) {
    return (
      <div style={styles.emptyState}>
        No flashcards found matching your selection.
      </div>
    );
  }

  return (
    <>
      {subjects
        .filter((s) => s.name !== "All")
        .map((subjectObj) => {
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
  groupHeader: { fontWeight: "800", marginBottom: "10px" },
  flashcard: { background: "white", padding: "16px", borderRadius: "18px", marginBottom: "10px", boxShadow: "0 10px 25px rgba(0,0,0,0.04)" },
  badge: { marginTop: "10px", fontSize: "12px", color: "#7C3AED", fontWeight: "700" },
  emptyState: { textAlign: "center", padding: "40px 20px", color: "#6B7280", fontWeight: "600", fontSize: "14px" }
};
