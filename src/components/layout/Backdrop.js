import React from "react";
import { TouchableOpacity } from "react-native";

export default function Backdrop({ onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0,0,0,0.6)",
        zIndex: 90,
      }}
    />
  );
}
