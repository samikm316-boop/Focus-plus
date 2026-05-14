import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function StudyScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>📚 Study Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0B1020",
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
  },
});
