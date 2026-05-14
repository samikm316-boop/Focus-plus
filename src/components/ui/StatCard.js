import React from "react";
import { View, Text } from "react-native";
import GlassCard from "./GlassCard";

export default function StatCard({ icon, label, value, color }) {
  return (
    <GlassCard style={{ flex: 1, margin: 6 }}>
      <Text style={{ fontSize: 18 }}>{icon}</Text>

      <Text style={{ fontSize: 22, fontWeight: "700", color: "white" }}>
        {value}
      </Text>

      <Text style={{ fontSize: 12, color: "#9CA3AF" }}>{label}</Text>

      <View
        style={{
          height: 3,
          marginTop: 10,
          borderRadius: 10,
          backgroundColor: color,
          width: `${Math.min(value, 100)}%`,
        }}
      />
    </GlassCard>
  );
}
