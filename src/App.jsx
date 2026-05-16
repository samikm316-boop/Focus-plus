import React, { useState } from "react";
import Sidebar from "./components/layout/Sidebar";

import HomeScreen from "./screens/Home/HomeScreen";
import StudyScreen from "./screens/Study/StudyScreen";
import ChatScreen from "./screens/FocusAI/ChatScreen";
import SettingsScreen from "./screens/Settings/SettingsScreen";

export default function App() {
  const [activeTab, setActiveTab] = useState("home");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const openSidebar = () => setSidebarOpen(true);
  const closeSidebar = () => setSidebarOpen(false);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    closeSidebar(); // IMPORTANT: closes sidebar on navigation
  };

  const renderScreen = () => {
    const props = { openSidebar };

    switch (activeTab) {
      case "home":
        return <HomeScreen {...props} />;
      case "study":
        return <StudyScreen {...props} />;
      case "focus":
        return <ChatScreen {...props} />;
      case "settings":
        return <SettingsScreen {...props} />;
      default:
        return <HomeScreen {...props} />;
    }
  };

  return (
    <div style={{ display: "flex", height: "100vh", overflow: "hidden" }}>
      <Sidebar
        activeTab={activeTab}
        setActiveTab={handleTabChange}
        sidebarOpen={sidebarOpen}
        closeSidebar={closeSidebar}
      />

      <div style={{ flex: 1, overflow: "auto" }}>
        {renderScreen()}
      </div>
    </div>
  );
}
