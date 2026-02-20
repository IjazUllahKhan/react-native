import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function TodoItem({ item, onToggle, onDelete }) {
  return (
    <View style={styles.row}>
      <TouchableOpacity
        onPress={() => onToggle(item.id)}
        accessibilityLabel="toggle"
      >
        <Text style={styles.checkbox}>{item.done ? "✅" : "⬜"}</Text>
      </TouchableOpacity>

      <Text style={[styles.text, item.done && styles.done]}>{item.text}</Text>

      <TouchableOpacity
        onPress={() => onDelete(item.id)}
        accessibilityLabel="delete"
      >
        <Text style={styles.delete}>🗑</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    borderBottomWidth: 1,
    borderColor: "#eee",
  },
  checkbox: { fontSize: 20, marginRight: 12 },
  text: { flex: 1, fontSize: 16 },
  done: { textDecorationLine: "line-through", color: "#999" },
  delete: { paddingLeft: 8 },
});
