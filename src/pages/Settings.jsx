import { useTheme } from "../context/ThemeContext";

import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Settings() {
  const { mode, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <h2>Settings</h2>

      <button onClick={toggleTheme}>
        Switch to {mode === "dark" ? "Light" : "Dark"} Mode
      </button>
    </div>
  );
}

export default function Settings() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="page">
      <h2>Settings</h2>

      <div className="card">
        Current Theme: {theme}
      </div>

      <button onClick={toggleTheme}>
        Toggle Dark / Light
      </button>
    </div>
  );
}
