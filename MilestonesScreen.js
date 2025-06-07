import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function MilestonesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Milestones</Text>
      <Text>Celebrate your club and national team’s greatest moments and achievements.</Text>
      {/* Add timeline, highlight cards, and stats here */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  header: { fontSize: 22, fontWeight: "bold", marginBottom: 10 }
});