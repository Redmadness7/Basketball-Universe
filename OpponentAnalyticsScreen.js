import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function OpponentAnalyticsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Opponent Analytics</Text>
      <Text>Scout your opponents: weaknesses, strengths, and tactical trends.</Text>
      {/* Add opponent reports, comparison charts, and notes here */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  header: { fontSize: 22, fontWeight: "bold", marginBottom: 10 }
});