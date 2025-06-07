import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🏀 Basketball Universe</Text>
      <Text style={styles.subtitle}>Build your legacy. Dominate the world.</Text>
      <View style={styles.quickRow}>
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("PlayTab")}>
          <Ionicons name="basketball" size={32} color="#27509b" />
          <Text style={styles.cardText}>Play</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("AnalyticsTab")}>
          <Ionicons name="bar-chart" size={32} color="#27509b" />
          <Text style={styles.cardText}>Analytics</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.quickRow}>
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("HistoryTab")}>
          <Ionicons name="trophy" size={32} color="#27509b" />
          <Text style={styles.cardText}>History</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("MoreTab")}>
          <Ionicons name="menu" size={32} color="#27509b" />
          <Text style={styles.cardText}>More</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.footer}>Created by Redmadness7 • v1.0.0</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", alignItems: "center", justifyContent: "center", padding: 16 },
  title: { fontSize: 28, fontWeight: "bold", color: "#27509b", marginBottom: 12, textAlign: "center" },
  subtitle: { fontSize: 18, color: "#444", marginBottom: 24, textAlign: "center" },
  quickRow: { flexDirection: "row", marginBottom: 18, justifyContent: "space-around", width: "100%" },
  card: { alignItems: "center", justifyContent: "center", backgroundColor: "#eaf1fb", padding: 20, margin: 10, borderRadius: 12, width: 120, elevation: 3 },
  cardText: { marginTop: 8, fontSize: 16, color: "#27509b", fontWeight: "500" },
  footer: { position: "absolute", bottom: 15, color: "#888", fontSize: 12 },
});