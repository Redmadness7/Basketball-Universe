import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function TournamentScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Tournaments</Text>
      <Text>View and manage club and national tournaments, results, and highlights.</Text>
      {/* Add tournament bracket, results, and highlight UI here */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  header: { fontSize: 22, fontWeight: "bold", marginBottom: 10 }
});