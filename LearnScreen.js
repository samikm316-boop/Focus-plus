import React, { useEffect, useState } from "react";
import { View, Text, Switch } from "react-native";
import GlassCard from "../../../components/ui/GlassCard";
import { api } from "../../../services/api";

export default function LearnScreen() {
  const [data, setData] = useState([]);
  const [showAnswers, setShowAnswers] = useState(false);

  useEffect(() => {
    load();
  }, []);

  const load = async () => {
    const res = await api.get("/api/learn");
    setData(res);
  };

  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 10,
        }}
      >
        <Text style={{ color: "#9CA3AF" }}>Learn Mode</Text>

        <Switch
          value={showAnswers}
          onValueChange={setShowAnswers}
        />
      </View>

      {data.map((item) => (
        <GlassCard key={item.id} style={{ marginBottom: 12 }}>
          <Text style={{ color: "white" }}>{item.question}</Text>

          {showAnswers && (
            <Text style={{ color: "#22C55E", marginTop: 8 }}>
              {item.answer}
            </Text>
          )}
        </GlassCard>
      ))}
    </View>
  );
}
