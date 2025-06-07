import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function NationalTeamScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>National Team</Text>
      <Text>Manage your national squad, select for FIBA events, and monitor world rankings.</Text>
      {/* Add squad selection, schedule, and stats UI here */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  header: { fontSize: 22, fontWeight: "bold", marginBottom: 10 }
});