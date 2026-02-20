import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Keyboard } from "react-native";

export default function TodoInput({ onAdd }) {
  const [text, setText] = useState("");

  const submit = () => {
    if (!text.trim()) return;
    onAdd(text.trim());
    setText("");
    Keyboard.dismiss();
  };

  return (
    <View style={styles.wrap}>
      <TextInput
        style={styles.input}
        placeholder="Add a task..."
        value={text}
        onChangeText={setText}
        onSubmitEditing={submit}
        returnKeyType="done"
      />
      <Button title="Add" onPress={submit} />
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { flexDirection: "row", padding: 12, alignItems: "center" },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 8,
    marginRight: 8,
    borderRadius: 6,
  },
});
