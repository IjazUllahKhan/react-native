import AsyncStorage from "@react-native-async-storage/async-storage";

const TASKS_KEY = "TASKS_v1";

export async function saveTasks(tasks) {
  try {
    await AsyncStorage.setItem(TASKS_KEY, JSON.stringify(tasks));
  } catch (e) {
    console.error("saveTasks error", e);
    throw e;
  }
}

export async function loadTasks() {
  try {
    const raw = await AsyncStorage.getItem(TASKS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    console.error("loadTasks error", e);
    return [];
  }
}
