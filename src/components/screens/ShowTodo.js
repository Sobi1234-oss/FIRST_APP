import React from 'react';
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';
import { useTodoStore } from './store';

const ShowTodo = () => {
  const { todos, removeTodo } = useTodoStore();

  return (
    <View style={styles.container}>
      <FlatList
        data={todos}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.todoItem}>
            <Text style={styles.todoText}>{item}</Text>
            <Button title="Remove" onPress={() => removeTodo(item)} />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  todoItem: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
  todoText: { fontSize: 18, marginRight: 10 },
});

export default ShowTodo;
