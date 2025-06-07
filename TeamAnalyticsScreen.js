import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function TeamAnalyticsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Team Analytics</Text>
      <Text>Deep dive into team metrics: pace, efficiency, eFG%, and more.</Text>
      {/* Add team stats, charts, and advanced metrics here */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  header: { fontSize: 22, fontWeight: "bold", marginBottom: 10 }
});