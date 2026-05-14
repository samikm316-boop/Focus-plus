import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function Sidebar({ active, setActive, close }) {
  const items = [
    { key: "home", label: "Home" },
    { key: "study", label: "Study" },
    { key: "ai", label: "Focus AI" },
    { key: "profile", label: "Profile" },
    { key: "settings", label: "Settings" },
  ];

  return (
    <View
      style={{
        position: "absolute",
        left: 0,
        top: 0,
        bottom: 0,
        width: 260,
        backgroundColor: "#0B1220",
        padding: 20,
        zIndex: 100,
      }}
    >
      <Text
        style={{
          color: "white",
          fontSize: 22,
          fontWeight: "700",
          marginBottom: 20,
        }}
      >
        Focus+
      </Text>

      {items.map((item) => (
        <TouchableOpacity
          key={item.key}
          onPress={() => {
            setActive(item.key);
            close();
          }}
          style={{
            padding: 14,
            borderRadius: 12,
            backgroundColor:
              active === item.key ? "#7C3AED" : "transparent",
            marginBottom: 10,
          }}
        >
          <Text style={{ color: "white" }}>{item.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
