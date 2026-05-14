import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import GlassCard from "../../../components/ui/GlassCard";
import { api } from "../../../services/api";

export default function FlashcardsScreen() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    load();
  }, []);

  const load = async () => {
    const res = await api.get("/api/flashcards");
    setCards(res);
  };

  return (
    <View>
      <Text style={{ color: "#9CA3AF", marginBottom: 10 }}>
        Flashcards
      </Text>

      {cards.map((c) => (
        <GlassCard key={c.id} style={{ marginBottom: 12 }}>
          <Text style={{ color: "white", fontSize: 16 }}>
            {c.question}
          </Text>

          <Text style={{ color: "#9CA3AF", marginTop: 8 }}>
            Tap to reveal answer
          </Text>
        </GlassCard>
      ))}
    </View>
  );
}
