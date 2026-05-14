import React, { useEffect, useState } from "react";
import { View, Text, ScrollView } from "react-native";
import GlassCard from "../../../components/ui/GlassCard";
import { api } from "../../../services/api";

export default function NotesScreen() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    load();
  }, []);

  const load = async () => {
    const res = await api.get("/api/notes");
    setNotes(res);
  };

  return (
    <ScrollView>
      <Text style={{ color: "#9CA3AF", marginBottom: 10 }}>
        Your Notes
      </Text>

      <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
        {notes.map((note) => (
          <GlassCard
            key={note.id}
            style={{
              width: "48%",
              margin: "1%",
            }}
          >
            <Text style={{ color: "white", fontWeight: "700" }}>
              {note.title}
            </Text>

            <Text style={{ color: "#9CA3AF", fontSize: 12 }}>
              {note.subject || "No Subject"}
            </Text>
          </GlassCard>
        ))}
      </View>
    </ScrollView>
  );
}
