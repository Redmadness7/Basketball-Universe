import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function ClubHistoryScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Club History</Text>
      <Text>Review your club’s season-by-season records, stats, and awards.</Text>
      {/* Add season list, stats, and trophies display here */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  header: { fontSize: 22, fontWeight: "bold", marginBottom: 10 }
});