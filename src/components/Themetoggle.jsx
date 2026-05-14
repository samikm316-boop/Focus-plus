import { useTheme } from "../context/ThemeContext";

export default function ThemeToggle() {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <button className="theme-toggle" onClick={toggleTheme}>
      {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
    </button>
  );
}
