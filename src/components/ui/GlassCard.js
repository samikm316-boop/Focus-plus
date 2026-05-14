import React from "react";
import { View } from "react-native";

export default function GlassCard({ children, style }) {
  return (
    <View
      style={[
        {
          backgroundColor: "rgba(255,255,255,0.06)",
          borderRadius: 18,
          padding: 16,
          borderWidth: 1,
          borderColor: "rgba(255,255,255,0.08)",
          shadowColor: "#000",
          shadowOpacity: 0.3,
          shadowRadius: 10,
          elevation: 5,
        },
        style,
      ]}
    >
      {children}
    </View>
  );
}
