import React, { useState } from "react";

import Sidebar from "./components/layout/Sidebar";

import HomeScreen from "./screens/Home/HomeScreen";
import StudyScreen from "./screens/Study/StudyScreen";
import ChatScreen from "./screens/FocusAI/ChatScreen";
import SettingsScreen from "./screens/Settings/SettingsScreen";

export default function App() {
  const [activeTab, setActiveTab] = useState("home");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const screenProps = {
    openSidebar: () => setSidebarOpen(true),
  };

  const renderScreen = () => {
    switch (activeTab) {
      case "home":
        return <HomeScreen {...screenProps} />;

      case "study":
        return <StudyScreen {...screenProps} />;

      case "focus":
        return <ChatScreen {...screenProps} />;

      case "settings":
        return <SettingsScreen {...screenProps} />;

      default:
        return <HomeScreen {...screenProps} />;
    }
  };

  return (
    <>
      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      <div
        style={{
          width: "100%",
          minHeight: "100vh",
          overflowX: "hidden",
          background: "#F6F7FB",
        }}
      >
        {renderScreen()}
      </div>
    </>
  );
}
