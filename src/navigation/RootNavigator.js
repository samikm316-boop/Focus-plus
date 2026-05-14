import React, { useState } from "react";

import Sidebar from "../components/layout/Sidebar";

import HomeScreen from "../screens/Home/HomeScreen";

import StudyScreen from "../screens/Study/StudyScreen";

import ChatScreen from "../screens/FocusAI/ChatScreen";

import SettingsScreen from "../screens/Settings/SettingsScreen";

export default function RootNavigator() {
  const [active, setActive] =
    useState("home");

  const renderScreen = () => {
    switch (active) {
      case "home":
        return <HomeScreen />;

      case "study":
        return <StudyScreen />;

      case "focus ai":
        return <ChatScreen />;

      case "settings":
        return <SettingsScreen />;

      default:
        return <HomeScreen />;
    }
  };

  return (
    <div
      style={{
        display: "flex",

        background: "#0B1220",

        height: "100vh",
overflow: "hidden",
      }}
    >
      <Sidebar
        active={active}
        setActive={setActive}
      />

      <div
        style={{
          flex: 1,

          padding: "20px",
        }}
      >
        {renderScreen()}
      </div>
    </div>
  );
}
