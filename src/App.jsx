import React, { useState } from "react";

import HomeScreen from "./screens/Home/HomeScreen";
import StudyScreen from "./screens/Study/StudyScreen";
import ChatScreen from "./screens/FocusAI/ChatScreen";
import SettingsScreen from "./screens/Settings/SettingsScreen";

export default function App() {
  const [sidebarOpen, setSidebarOpen] =
    useState(false);

  const [screen, setScreen] =
    useState("home");

  const renderScreen = () => {
    switch (screen) {
      case "home":
        return (
          <HomeScreen
            openSidebar={() =>
              setSidebarOpen(true)
            }
          />
        );

      case "study":
        return (
          <StudyScreen
            openSidebar={() =>
              setSidebarOpen(true)
            }
          />
        );

      case "focus-ai":
        return (
          <ChatScreen
            openSidebar={() =>
              setSidebarOpen(true)
            }
          />
        );

      case "settings":
        return (
          <SettingsScreen
            openSidebar={() =>
              setSidebarOpen(true)
            }
          />
        );

      default:
        return (
          <HomeScreen
            openSidebar={() =>
              setSidebarOpen(true)
            }
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
      {/* SIDEBAR OVERLAY */}

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
          {/* TOP */}

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

          {/* MENU */}

          <SidebarButton
            icon="🏠"
            text="Home"
            active={screen === "home"}
            onClick={() => {
              setScreen("home");
              setSidebarOpen(false);
            }}
          />

          <SidebarButton
            icon="📚"
            text="Study"
            badge="5"
            active={screen === "study"}
            onClick={() => {
              setScreen("study");
              setSidebarOpen(false);
            }}
          />

          <SidebarButton
            icon="🤖"
            text="Focus AI"
            active={
              screen === "focus-ai"
            }
            onClick={() => {
              setScreen("focus-ai");
              setSidebarOpen(false);
            }}
          />

          <SidebarButton
            icon="👤"
            text="Profile"
            active={
              screen === "profile"
            }
            onClick={() => {
              setSidebarOpen(false);
            }}
          />

          <SidebarButton
            icon="⚙️"
            text="Settings"
            active={
              screen === "settings"
            }
            onClick={() => {
              setScreen("settings");
              setSidebarOpen(false);
            }}
          />
        </div>

        {/* USER CARD */}

        <div
          style={{
            background:
              "rgba(255,255,255,0.06)",
            borderRadius: "24px",
            padding: "16px",
            border:
              "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
            }}
          >
            <img
              src="https://api.dicebear.com/7.x/adventurer/svg?seed=Focus"
              alt="avatar"
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "18px",
                background:
                  "linear-gradient(135deg,#c4b5fd,#f9a8d4)",
              }}
            />

            <div>
              <div
                style={{
                  color: "white",
                  fontWeight: "700",
                  fontSize: "18px",
                }}
              >
                USER
              </div>

              <div
                style={{
                  marginTop: "4px",
                  display: "inline-block",
                  padding:
                    "4px 10px",
                  borderRadius:
                    "999px",
                  background:
                    "linear-gradient(90deg,#d946ef,#6366f1)",
                  color: "white",
                  fontSize: "12px",
                  fontWeight: "700",
                }}
              >
                Level 3
              </div>
            </div>
          </div>

          <div
            style={{
              marginTop: "16px",
              width: "100%",
              height: "8px",
              background:
                "rgba(255,255,255,0.08)",
              borderRadius: "999px",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: "60%",
                height: "100%",
                background:
                  "linear-gradient(90deg,#d946ef,#60a5fa)",
              }}
            />
          </div>
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
  badge,
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
        justifyContent:
          "space-between",
        padding: "18px",
        borderRadius: "18px",
        marginBottom: "14px",
        fontSize: "18px",
        fontWeight: "600",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "14px",
          alignItems: "center",
        }}
      >
        <span>{icon}</span>
        <span>{text}</span>
      </div>

      {badge && (
        <div
          style={{
            minWidth: "26px",
            height: "26px",
            borderRadius: "50%",
            background: "#ff4da6",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "13px",
            fontWeight: "700",
          }}
        >
          {badge}
        </div>
      )}
    </button>
  );
}
