import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Card({ title, value, icon, color }) {
  return (
    <View style={[styles.card, { borderColor: color }]}>
      <Text style={styles.icon}>{icon}</Text>
      <Text style={styles.value}>{value}</Text>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    padding: 16,
    borderRadius: 16,
    backgroundColor: "#111827",
    margin: 6,
    borderWidth: 1,
  },
  icon: {
    fontSize: 18,
    marginBottom: 6,
  },
  value: {
    fontSize: 22,
    fontWeight: "bold",
    color: "white",
  },
  title: {
    fontSize: 12,
    color: "#9CA3AF",
    marginTop: 4,
  },
});
