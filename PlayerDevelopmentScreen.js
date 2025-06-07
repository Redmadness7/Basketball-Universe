import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function PlayerDevelopmentScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Player Development</Text>
      <Text>Run training sessions, track growth, and maximize player potential here.</Text>
      {/* Add training plans, progress bars, and feedback UI here */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  header: { fontSize: 22, fontWeight: "bold", marginBottom: 10 }
});