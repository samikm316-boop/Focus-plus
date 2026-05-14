import React from "react";
import { TouchableOpacity, Text, ActivityIndicator } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function GradientButton({
  title,
  onPress,
  loading,
  colors = ["#7C3AED", "#2563EB"],
}) {
  return (
    <TouchableOpacity onPress={onPress} disabled={loading}>
      <LinearGradient
        colors={colors}
        style={{
          padding: 14,
          borderRadius: 14,
          alignItems: "center",
        }}
      >
        {loading ? (
          <ActivityIndicator color="white" />
        ) : (
          <Text style={{ color: "white", fontWeight: "600" }}>
            {title}
          </Text>
        )}
      </LinearGradient>
    </TouchableOpacity>
  );
}
