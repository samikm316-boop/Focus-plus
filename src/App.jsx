import React, { useState } from "react";
import Sidebar from "./components/layout/Sidebar";

import HomeScreen from "./screens/Home/HomeScreen";
import StudyScreen from "./screens/Study/StudyScreen";
import ChatScreen from "./screens/FocusAI/ChatScreen";
import SettingsScreen from "./screens/Settings/SettingsScreen";

export default function App() {
  const [activeTab, setActiveTab] = useState("home");

  const user = {
    username: "USER",
  };

  const renderScreen = () => {
    switch (activeTab) {
      case "home":
        return <HomeScreen />;

      case "study":
        return <StudyScreen />;

      case "focus":
        return <ChatScreen />;

      case "settings":
        return <SettingsScreen />;

      default:
        return <HomeScreen />;
    }
  };

  return (
    <div style={styles.app}>
      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        user={user}
        onLogout={() => alert("logout")}
      />

      <div style={styles.screen}>{renderScreen()}</div>
    </div>
  );
}

const styles = {
  app: {
    display: "flex",
    height: "100vh",
    width: "100vw",
    overflow: "hidden",
    background: "#0B1220",
  },

  screen: {
    flex: 1,
    overflowY: "auto",
  },
};
