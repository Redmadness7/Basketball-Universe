import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function HallOfRecordsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Hall of Records</Text>
      <Text>Explore the Hall of Fame, retired jerseys, legendary coaches, and historic moments.</Text>
      {/* Add inductee list, club/national legacy, and voting UI here */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  header: { fontSize: 22, fontWeight: "bold", marginBottom: 10 }
});