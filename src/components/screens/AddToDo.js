import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { useTodoStore } from './store';

const AddToDo = () => {
  const [text, setText] = useState('');
  const { addTodo } = useTodoStore();

  const handleAddTodo = () => {
    if (text) {
      addTodo(text);
      setText('');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter Todo"
        value={text}
        onChangeText={setText}
      />
      <Button title="Add Todo" onPress={handleAddTodo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  input: { width: '80%', padding: 10, marginBottom: 10, borderWidth: 1, borderColor: 'gray' },
});

export default AddToDo;
