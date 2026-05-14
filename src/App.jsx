import { useState } from "react";

import HomeScreen from "./screens/HomeScreen";
import StudyScreen from "./screens/StudyScreen";
import FocusAIScreen from "./screens/FocusAIScreen";
import ProfileScreen from "./screens/ProfileScreen";
import SettingsScreen from "./screens/SettingsScreen";

import Sidebar from "./components/Sidebar";

function App() {
  const [page, setPage] = useState("home");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const renderPage = () => {
    switch (page) {
      case "study":
        return <StudyScreen setSidebarOpen={setSidebarOpen} />;

      case "ai":
        return <FocusAIScreen setSidebarOpen={setSidebarOpen} />;

      case "profile":
        return <ProfileScreen setSidebarOpen={setSidebarOpen} />;

      case "settings":
        return <SettingsScreen setSidebarOpen={setSidebarOpen} />;

      default:
        return <HomeScreen setSidebarOpen={setSidebarOpen} />;
    }
  };

  return (
    <div className="app">
      {sidebarOpen && (
        <>
          <div
            className="sidebar-overlay"
            onClick={() => setSidebarOpen(false)}
          />

          <Sidebar
            setPage={setPage}
            setSidebarOpen={setSidebarOpen}
          />
        </>
      )}

      {renderPage()}
    </div>
  );
}

export default App;
