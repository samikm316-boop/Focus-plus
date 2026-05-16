import React, { useState } from "react";

import HomeScreen from "./screens/Home/HomeScreen";
import StudyScreen from "./screens/Study/StudyScreen";
import ChatScreen from "./screens/FocusAI/ChatScreen";
import SettingsScreen from "./screens/Settings/SettingsScreen";

export default function App() {
  const [sidebarOpen, setSidebarOpen] =
    useState(false);

  const [activeScreen, setActiveScreen] =
    useState("home");

  const renderScreen = () => {
    switch (activeScreen) {
      case "home":
        return (
          <HomeScreen
            openSidebar={() =>
              setSidebarOpen(true)
            }
            navigate={setActiveScreen}
          />
        );

      case "study":
        return (
          <StudyScreen
            openSidebar={() =>
              setSidebarOpen(true)
            }
            navigate={setActiveScreen}
          />
        );

      case "focus-ai":
        return (
          <ChatScreen
            openSidebar={() =>
              setSidebarOpen(true)
            }
            navigate={setActiveScreen}
          />
        );

      case "settings":
        return (
          <SettingsScreen
            openSidebar={() =>
              setSidebarOpen(true)
            }
            navigate={setActiveScreen}
          />
        );

      default:
        return (
          <HomeScreen
            openSidebar={() =>
              setSidebarOpen(true)
            }
            navigate={setActiveScreen}
          />
        );
    }
  };

  return (
    <div
      style={{
        width: "100vw",
        minHeight: "100vh",
        background: "#F5F5FA",
        overflowX: "hidden",
        position: "relative",
      }}
    >
      {/* OVERLAY */}

      {sidebarOpen && (
        <div
          onClick={() =>
            setSidebarOpen(false)
          }
          style={{
            position: "fixed",
            inset: 0,
            background:
              "rgba(0,0,0,0.35)",
            zIndex: 50,
          }}
        />
      )}

      {/* SIDEBAR */}

      <div
        style={{
          position: "fixed",
          top: 0,
          left: sidebarOpen ? 0 : "-82%",
          width: "78%",
          maxWidth: "320px",
          height: "100vh",
          background:
            "linear-gradient(180deg,#111827,#0F172A)",
          transition: "0.3s",
          zIndex: 100,
          padding: "24px",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          boxShadow:
            "10px 0 40px rgba(0,0,0,0.25)",
        }}
      >
        <div>
          {/* HEADER */}

          <div
            style={{
              display: "flex",
              justifyContent:
                "space-between",
              alignItems: "center",
              marginBottom: "42px",
            }}
          >
            <h1
              style={{
                margin: 0,
                fontSize: "32px",
                fontWeight: "800",
                background:
                  "linear-gradient(90deg,#ff5ec4,#7c4dff)",
                WebkitBackgroundClip:
                  "text",
                WebkitTextFillColor:
                  "transparent",
              }}
            >
              FOCUS+
            </h1>

            <button
              onClick={() =>
                setSidebarOpen(false)
              }
              style={{
                border: "none",
                background:
                  "transparent",
                color: "white",
                fontSize: "30px",
                cursor: "pointer",
              }}
            >
              ×
            </button>
          </div>

          {/* BUTTONS */}

          <SidebarButton
            text="Home"
            icon="🏠"
            active={
              activeScreen === "home"
            }
            onClick={() => {
              setActiveScreen("home");
              setSidebarOpen(false);
            }}
          />

          <SidebarButton
            text="Study"
            icon="📚"
            active={
              activeScreen === "study"
            }
            onClick={() => {
              setActiveScreen("study");
              setSidebarOpen(false);
            }}
          />

          <SidebarButton
            text="Focus AI"
            icon="🤖"
            active={
              activeScreen ===
              "focus-ai"
            }
            onClick={() => {
              setActiveScreen(
                "focus-ai"
              );
              setSidebarOpen(false);
            }}
          />

          <SidebarButton
            text="Settings"
            icon="⚙️"
            active={
              activeScreen ===
              "settings"
            }
            onClick={() => {
              setActiveScreen(
                "settings"
              );
              setSidebarOpen(false);
            }}
          />
        </div>
      </div>

      {/* SCREEN */}

      {renderScreen()}
    </div>
  );
}

function SidebarButton({
  icon,
  text,
  active,
  onClick,
}) {
  return (
    <button
      onClick={onClick}
      style={{
        width: "100%",
        border: "none",
        cursor: "pointer",
        background: active
          ? "linear-gradient(90deg,#7c3aed,#d946ef)"
          : "transparent",
        color: "white",
        display: "flex",
        alignItems: "center",
        gap: "14px",
        padding: "18px",
        borderRadius: "18px",
        marginBottom: "14px",
        fontSize: "18px",
        fontWeight: "600",
      }}
    >
      <span>{icon}</span>
      <span>{text}</span>
    </button>
  );
}
