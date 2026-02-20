import React, { useEffect, useState } from "react";
import { SafeAreaView, View, FlatList, Text, StyleSheet } from "react-native";
import TodoInput from "../src/components/TodoInput";
import TodoItem from "../src/components/TodoItem";
import { loadTasks, saveTasks } from "../src/utils/storage";

export default function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    (async () => {
      const loaded = await loadTasks();
      setTasks(loaded);
    })();
  }, []);

  useEffect(() => {
    // persist on every change
    saveTasks(tasks);
  }, [tasks]);

  const addTask = (text) => {
    const newTask = { id: Date.now().toString(), text, done: false };
    setTasks((prev) => [newTask, ...prev]);
  };

  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t)),
    );
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Simple To-Do</Text>
      </View>
      <TodoInput onAdd={addTask} />
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TodoItem item={item} onToggle={toggleTask} onDelete={deleteTask} />
        )}
        ListEmptyComponent={
          <Text style={styles.empty}>No tasks yet — add one!</Text>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  header: { padding: 16, borderBottomWidth: 1, borderColor: "#eee" },
  title: { fontSize: 22, fontWeight: "600" },
  empty: { textAlign: "center", marginTop: 40, color: "#666" },
});
