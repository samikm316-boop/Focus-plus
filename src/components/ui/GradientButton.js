import React from "react";

export default function GradientButton({
  title,
  onClick,
}) {
  return (
    <button
      onClick={onClick}
      style={{
        background:
          "linear-gradient(135deg,#7C3AED,#2563EB)",

        border: "none",

        padding: "12px 16px",

        borderRadius: "14px",

        color: "white",

        fontWeight: "600",

        cursor: "pointer",

        width: "100%",
      }}
    >
      {title}
    </button>
  );
}
