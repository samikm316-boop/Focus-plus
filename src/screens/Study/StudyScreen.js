import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

import NotesScreen from "./Notes/NotesScreen";
import FlashcardsScreen from "./Flashcards/FlashcardsScreen";
import QuizScreen from "./Quiz/QuizScreen";
import LearnScreen from "./Learn/LearnScreen";

export default function StudyScreen({ openSidebar }) {
  const [tab, setTab] = useState("notes");

  const renderTab = () => {
    switch (tab) {
      case "notes":
        return <NotesScreen />;
      case "flashcards":
        return <FlashcardsScreen />;
      case "quiz":
        return <QuizScreen />;
      case "learn":
        return <LearnScreen />;
      default:
        return <NotesScreen />;
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#0B1220", padding: 14 }}>
      
      {/* HEADER */}
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text onPress={openSidebar} style={{ color: "white", fontSize: 26 }}>
          ☰
        </Text>

        <Text style={{ color: "white", fontSize: 18, fontWeight: "700" }}>
          Study
        </Text>

        <View style={{ width: 26 }} />
      </View>

      {/* TABS */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 16,
          marginBottom: 16,
        }}
      >
        {["notes", "flashcards", "quiz", "learn"].map((t) => (
          <TouchableOpacity
            key={t}
            onPress={() => setTab(t)}
            style={{
              paddingVertical: 10,
              paddingHorizontal: 12,
              borderRadius: 12,
              backgroundColor: tab === t ? "#7C3AED" : "#111827",
            }}
          >
            <Text style={{ color: "white", fontSize: 12 }}>
              {t.toUpperCase()}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* CONTENT */}
      <View style={{ flex: 1 }}>{renderTab()}</View>
    </View>
  );
            }
