import React, { useState } from "react";

import Sidebar from "./components/layout/Sidebar";

import HomeScreen from "./screens/Home/HomeScreen";
import StudyScreen from "./screens/Study/StudyScreen";
import ChatScreen from "./screens/FocusAI/ChatScreen";
import SettingsScreen from "./screens/Settings/SettingsScreen";

export default function App() {
  const [activeTab, setActiveTab] = useState("home");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const renderScreen = () => {
    switch (activeTab) {
      case "home":
        return <HomeScreen openSidebar={() => setSidebarOpen(true)} />;
      case "study":
        return <StudyScreen openSidebar={() => setSidebarOpen(true)} />;
      case "focus":
        return <ChatScreen openSidebar={() => setSidebarOpen(true)} />;
      case "settings":
        return <SettingsScreen openSidebar={() => setSidebarOpen(true)} />;
      default:
        return <HomeScreen openSidebar={() => setSidebarOpen(true)} />;
    }
  };

  return (
    <div style={{ display: "flex" }}>
      {/* SIDEBAR */}
      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      {/* OVERLAY */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.4)",
            zIndex: 90,
          }}
        />
      )}

      {/* MAIN */}
      <div style={{ flex: 1 }}>{renderScreen()}</div>
    </div>
  );
}
