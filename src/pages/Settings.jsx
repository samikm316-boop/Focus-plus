import { useTheme } from "../context/ThemeContext";

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
