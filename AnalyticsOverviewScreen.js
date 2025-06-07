import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function AnalyticsOverviewScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Analytics</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("TeamAnalyticsScreen")}>
        <Text style={styles.buttonText}>Team Analytics</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("PlayerAnalyticsScreen")}>
        <Text style={styles.buttonText}>Player Analytics</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("OpponentAnalyticsScreen")}>
        <Text style={styles.buttonText}>Opponent Analytics</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("TradeDraftAnalysisScreen")}>
        <Text style={styles.buttonText}>Trade & Draft Analysis</Text>
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