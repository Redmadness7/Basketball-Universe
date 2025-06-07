import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function TradeDraftAnalysisScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Trade & Draft Analysis</Text>
      <Text>Project the impact of trades and draft picks on your team’s future.</Text>
      {/* Add projections, fit analysis, and recommendations here */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  header: { fontSize: 22, fontWeight: "bold", marginBottom: 10 }
});