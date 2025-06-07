import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function PlayMenuScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Play</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("ClubManagementScreen")}>
        <Text style={styles.buttonText}>Club Management</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("NationalTeamScreen")}>
        <Text style={styles.buttonText}>National Team</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("PlayerDevelopmentScreen")}>
        <Text style={styles.buttonText}>Player Development</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("TournamentScreen")}>
        <Text style={styles.buttonText}>Tournaments</Text>
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