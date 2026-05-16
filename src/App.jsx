import React, { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";

import HomeScreen from "./screens/HomeScreen";
import StudyScreen from "./screens/StudyScreen";
import FocusAIScreen from "./screens/FocusAIScreen";
import SettingsScreen from "./screens/SettingsScreen";

import LoginScreen from "./screens/LoginScreen";

export default function App() {
  const [user, setUser] = useState(null);
  const [activeTab, setActiveTab] = useState("home");

  useEffect(() => {
    const token = localStorage.getItem("token");
    const savedUser = localStorage.getItem("user");

    if (token && savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const logout = () => {
    localStorage.clear();
    setUser(null);
  };

  if (!user) {
    return <LoginScreen onLogin={setUser} />;
  }

  const renderScreen = () => {
    switch (activeTab) {
      case "home":
        return <HomeScreen />;
      case "study":
        return <StudyScreen />;
      case "focus":
        return <FocusAIScreen />;
      case "settings":
        return <SettingsScreen />;
      default:
        return <HomeScreen />;
    }
  };

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        user={user}
        onLogout={logout}
      />

      <div style={{ flex: 1, padding: 20, overflow: "auto" }}>
        {renderScreen()}
      </div>
    </div>
  );
}
