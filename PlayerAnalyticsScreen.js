import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function PlayerAnalyticsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Player Analytics</Text>
      <Text>Analyze player stats: usage rate, TS%, plus/minus, and more.</Text>
      {/* Add player tables, graphs, and trend analysis here */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  header: { fontSize: 22, fontWeight: "bold", marginBottom: 10 }
});