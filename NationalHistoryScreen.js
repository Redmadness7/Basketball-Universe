import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function NationalHistoryScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>National Team History</Text>
      <Text>See tournament medals, game results, top performers, and ranking history.</Text>
      {/* Add medal display, stats timeline, and key games list here */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  header: { fontSize: 22, fontWeight: "bold", marginBottom: 10 }
});