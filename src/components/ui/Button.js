import React from "react";
import { TouchableOpacity, Text, ActivityIndicator } from "react-native";

export default function Button({
  title,
  onPress,
  loading,
  color = "#6366F1",
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: color,
        padding: 14,
        borderRadius: 12,
        alignItems: "center",
        opacity: loading ? 0.7 : 1,
      }}
      disabled={loading}
    >
      {loading ? (
        <ActivityIndicator color="white" />
      ) : (
        <Text style={{ color: "white", fontWeight: "600" }}>{title}</Text>
      )}
    </TouchableOpacity>
  );
}
