import React, { useState } from "react";
import { View } from "react-native";
import Sidebar from "../components/layout/Sidebar";

import HomeScreen from "../screens/Home/HomeScreen";
import StudyScreen from "../screens/Study/StudyScreen";
import ChatScreen from "../screens/FocusAI/ChatScreen";
import ProfileScreen from "../screens/Profile/ProfileScreen";
import SettingsScreen from "../screens/Settings/SettingsScreen";

export default function RootNavigator() {
  const [active, setActive] = useState("home");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const renderScreen = () => {
    switch (active) {
      case "home":
        return <HomeScreen openSidebar={() => setSidebarOpen(true)} />;

      case "study":
        return <StudyScreen openSidebar={() => setSidebarOpen(true)} />;

      case "ai":
        return <ChatScreen openSidebar={() => setSidebarOpen(true)} />;

      case "profile":
        return <ProfileScreen openSidebar={() => setSidebarOpen(true)} />;

      case "settings":
        return <SettingsScreen openSidebar={() => setSidebarOpen(true)} />;

      default:
        return <HomeScreen openSidebar={() => setSidebarOpen(true)} />;
    }
  };

  return (
    <View style={{ flex: 1 }}>
      {renderScreen()}

      {sidebarOpen && (
        <Sidebar
          active={active}
          setActive={setActive}
          close={() => setSidebarOpen(false)}
        />
      )}
    </View>
  );
          }
