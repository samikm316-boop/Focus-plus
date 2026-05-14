import TopBar from "../components/TopBar";
import ThemeToggle from "../components/ThemeToggle";

export default function SettingsScreen({ setSidebarOpen }) {
  return (
    <div className="screen">
      <TopBar
        title="Settings"
        setSidebarOpen={setSidebarOpen}
      />

      <div className="settings-card card">
        <h3>Appearance</h3>

        <ThemeToggle />
      </div>
    </div>
  );
}
