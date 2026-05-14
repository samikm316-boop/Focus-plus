import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Welcome back 👋</Text>

        <Text style={styles.level}>Level 3</Text>

        <Text style={styles.stats}>🔥 17 Day Streak</Text>

        <Text style={styles.stats}>⭐ 534 Study XP</Text>
      </View>

      <View style={styles.quoteBox}>
        <Text style={styles.quote}>
          "Discipline today leads to freedom tomorrow."
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0B1020",
    padding: 20,
  },

  card: {
    backgroundColor: "#151A2E",
    borderRadius: 25,
    padding: 25,
    marginBottom: 20,
  },

  title: {
    color: "white",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
  },

  level: {
    color: "#C084FC",
    fontSize: 20,
    marginBottom: 10,
  },

  stats: {
    color: "#E5E7EB",
    fontSize: 18,
    marginBottom: 8,
  },

  quoteBox: {
    backgroundColor: "#7C3AED",
    borderRadius: 25,
    padding: 25,
  },

  quote: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
    fontWeight: "600",
  },
});
