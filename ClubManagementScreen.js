import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function ClubManagementScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Club Management</Text>
      <Text>Manage your club roster, finances, facilities, and strategy here.</Text>
      {/* Add cards, lists, and actions as needed */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  header: { fontSize: 22, fontWeight: "bold", marginBottom: 10 }
});