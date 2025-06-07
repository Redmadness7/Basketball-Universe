import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function HistoryOverviewScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>History</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("ClubHistoryScreen")}>
        <Text style={styles.buttonText}>Club History</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("NationalHistoryScreen")}>
        <Text style={styles.buttonText}>National Team History</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("MilestonesScreen")}>
        <Text style={styles.buttonText}>Milestones</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", backgroundColor: "#fff", paddingTop: 40 },
  header: { fontSize: 24, fontWeight: "bold", marginBottom: 24 },
  button: { backgroundColor: "#27509b", padding: 20, marginVertical: 10, borderRadius: 10, width: "80%", alignItems: "center" },
  buttonText: { color: "#fff", fontSize: 18, fontWeight: "600" }
});