import React from "react";
import { View, Text } from "react-native";
import GradientButton from "./GradientButton";
import GlassCard from "./GlassCard";

export default function TaskCard({ task, onComplete }) {
  return (
    <GlassCard style={{ marginTop: 10 }}>
      <Text style={{ color: "white", fontSize: 14 }}>
        {task.title}
      </Text>

      <Text style={{ color: "#9CA3AF", fontSize: 12, marginTop: 4 }}>
        +{task.xp} XP reward
      </Text>

      <View style={{ marginTop: 10 }}>
        <GradientButton
          title="Complete Task"
          onPress={() => onComplete(task.id)}
        />
      </View>
    </GlassCard>
  );
}
