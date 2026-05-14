import React from "react";
import { View } from "react-native";

export default function ScreenWrapper({ children }) {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#0B1220",
        padding: 14,
      }}
    >
      {children}
    </View>
  );
}
