import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>About</Text>
      <Text>Basketball Universe v1.0.0</Text>
      <Text style={styles.credit}>Created by Redmadness7</Text>
      <Text>Built with React Native and Expo</Text>
      {/* Add links, credits, and license info here */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  header: { fontSize: 22, fontWeight: "bold", marginBottom: 10 },
  credit: { fontStyle: "italic", color: "#27509b", marginVertical: 8 }
});