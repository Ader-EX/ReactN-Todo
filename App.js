import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import Header from "./components/Header";
import TodoItem from "./components/TodoItem";
import AddTodo from "./components/AddTodo";

export default function App() {
  const [todo, setTodo] = useState([
    {
      text: " Coffee",
      key: 1,
    },
    {
      text: " Eat",
      key: 2,
    },
    {
      text: " Drink",
      key: 3,
    },
  ]);

  const handlePassItems = (key) => {
    setTodo((prevTodo) => {
      return prevTodo.filter((todo) => todo.key != key);
    });
  };

  const addItem = (text) => {
    setTodo((prevTodo) => {
      return [...prevTodo, { text: text, key: Math.random().toString() }];
    });
  };
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <AddTodo handleAdd={addItem} />
        <View style={styles.list}>
          <FlatList
            data={todo}
            keyExtractor={(item) => item.key.toString()}
            renderItem={({ item }) => (
              <TodoItem item={item} handlePress={handlePassItems} />
            )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    // alignItems: "center",
    // justifyContent: "center",
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
});
