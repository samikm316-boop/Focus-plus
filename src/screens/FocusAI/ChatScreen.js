import React, { useState } from "react";
import { View, Text, TextInput, ScrollView, TouchableOpacity } from "react-native";
import GlassCard from "../../components/ui/GlassCard";

export default function ChatScreen({ openSidebar }) {
  const [messages, setMessages] = useState([
    { role: "ai", text: "Hey 👋 How can I help you study today?" },
  ]);

  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMsg = { role: "user", text: input };
    setMessages((prev) => [...prev, newMsg]);

    setInput("");

    // TEMP AI RESPONSE (later connect backend / OpenAI)
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          text: "Got it. I’ll help you with that step-by-step 📚",
        },
      ]);
    }, 600);
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#0B1220", padding: 14 }}>

      {/* HEADER */}
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text onPress={openSidebar} style={{ color: "white", fontSize: 26 }}>
          ☰
        </Text>

        <Text style={{ color: "white", fontSize: 18, fontWeight: "700" }}>
          Focus AI
        </Text>

        <View style={{ width: 26 }} />
      </View>

      {/* CHAT AREA */}
      <ScrollView style={{ flex: 1, marginTop: 16 }}>
        {messages.map((msg, i) => (
          <View
            key={i}
            style={{
              alignSelf: msg.role === "user" ? "flex-end" : "flex-start",
              marginBottom: 10,
              maxWidth: "80%",
            }}
          >
            <GlassCard
              style={{
                backgroundColor:
                  msg.role === "user"
                    ? "rgba(124,58,237,0.3)"
                    : "rgba(255,255,255,0.06)",
              }}
            >
              <Text style={{ color: "white" }}>{msg.text}</Text>
            </GlassCard>
          </View>
        ))}
      </ScrollView>

      {/* INPUT BAR */}
      <View
        style={{
          flexDirection: "row",
          gap: 10,
          marginTop: 10,
        }}
      >
        <TextInput
          value={input}
          onChangeText={setInput}
          placeholder="Ask anything..."
          placeholderTextColor="#9CA3AF"
          style={{
            flex: 1,
            backgroundColor: "#111827",
            borderRadius: 12,
            padding: 12,
            color: "white",
          }}
        />

        <TouchableOpacity
          onPress={sendMessage}
          style={{
            backgroundColor: "#7C3AED",
            paddingHorizontal: 16,
            justifyContent: "center",
            borderRadius: 12,
          }}
        >
          <Text style={{ color: "white", fontWeight: "700" }}>
            Send
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
                }
