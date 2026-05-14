 import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";

import HomeScreen from "../screens/HomeScreen";
import StudyScreen from "../screens/StudyScreen";
import FocusAIScreen from "../screens/FocusAIScreen";

const { width } = Dimensions.get("window");

export default function AppNavigator() {
  const [activeScreen, setActiveScreen] = useState("Home");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const renderScreen = () => {
    switch (activeScreen) {
      case "Study":
        return <StudyScreen />;

      case "FocusAI":
        return <FocusAIScreen />;

      default:
        return <HomeScreen />;
    }
  };

  const MenuButton = ({ title, screen }) => (
    <TouchableOpacity
      style={[
        styles.menuButton,
        activeScreen === screen && styles.activeButton,
      ]}
      onPress={() => {
        setActiveScreen(screen);
        setSidebarOpen(false);
      }}
    >
      <Text style={styles.menuText}>{title}</Text>

      {screen === "Study" && (
        <View style={styles.badge}>
          <Text style={styles.badgeText}>5</Text>
        </View>
      )}
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* SIDEBAR */}
      {sidebarOpen && (
        <>
          <TouchableOpacity
            style={styles.overlay}
            onPress={() => setSidebarOpen(false)}
          />

          <View style={styles.sidebar}>
            <Text style={styles.logo}>FOCUS+</Text>

            <MenuButton title="🏠 Home" screen="Home" />

            <MenuButton title="📚 Study" screen="Study" />

            <MenuButton title="🤖 Focus AI" screen="FocusAI" />

            <View style={styles.bottomSection}>
              <MenuButton title="👤 Profile" screen="Profile" />

              <MenuButton title="⚙ Settings" screen="Settings" />
            </View>
          </View>
        </>
      )}

      {/* MAIN SCREEN */}
      <View style={styles.main}>
        {/* TOP BAR */}
        <View style={styles.topBar}>
          <TouchableOpacity onPress={() => setSidebarOpen(true)}>
            <Text style={styles.menuIcon}>☰</Text>
          </TouchableOpacity>

          <Text style={styles.headerTitle}>{activeScreen}</Text>

          <View style={{ width: 30 }} />
        </View>

        {renderScreen()}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0B1020",
  },

  main: {
    flex: 1,
  },

  topBar: {
    height: 70,
    paddingHorizontal: 20,
    paddingTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#0B1020",
  },

  menuIcon: {
    color: "white",
    fontSize: 28,
  },

  headerTitle: {
    color: "#C084FC",
    fontSize: 22,
    fontWeight: "bold",
  },

  sidebar: {
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    width: width * 0.72,
    backgroundColor: "#111827",
    paddingTop: 80,
    paddingHorizontal: 20,
    zIndex: 10,
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
  },

  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.6)",
    zIndex: 5,
  },

  logo: {
    color: "#C084FC",
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 40,
  },

  menuButton: {
    paddingVertical: 18,
    paddingHorizontal: 18,
    borderRadius: 18,
    marginBottom: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  activeButton: {
    backgroundColor: "#7C3AED",
  },

  menuText: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
  },

  badge: {
    backgroundColor: "#EC4899",
    width: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },

  badgeText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 12,
  },

  bottomSection: {
    marginTop: 40,
    borderTopWidth: 1,
    borderTopColor: "#374151",
    paddingTop: 20,
  },
});
