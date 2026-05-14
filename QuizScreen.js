import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import GlassCard from "../../../components/ui/GlassCard";
import { api } from "../../../services/api";

export default function QuizScreen() {
  const [quiz, setQuiz] = useState([]);

  useEffect(() => {
    load();
  }, []);

  const load = async () => {
    const res = await api.get("/api/quiz");
    setQuiz(res);
  };

  return (
    <View>
      <Text style={{ color: "#9CA3AF", marginBottom: 10 }}>
        Quiz Mode
      </Text>

      {quiz.map((q) => (
        <GlassCard key={q.id} style={{ marginBottom: 12 }}>
          <Text style={{ color: "white" }}>{q.question}</Text>

          <Text style={{ color: "#9CA3AF", marginTop: 6 }}>
            A • B • C • D
          </Text>
        </GlassCard>
      ))}
    </View>
  );
}
