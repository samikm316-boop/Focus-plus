import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function Header({ title, onMenu }) {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 16,
      }}
    >
      <TouchableOpacity onPress={onMenu}>
        <Text style={{ fontSize: 22, color: "white" }}>☰</Text>
      </TouchableOpacity>

      <Text style={{ color: "white", fontSize: 18, fontWeight: "700" }}>
        {title}
      </Text>

      <View style={{ width: 22 }} />
    </View>
  );
}
