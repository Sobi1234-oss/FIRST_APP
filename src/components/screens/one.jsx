
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useCounterStore } from './store';

const one = () => {
  const { count, increment } = useCounterStore();

  return (
<View style={styles.container}>
      <Text style={styles.text}>One Screen</Text>
 <Text style={styles.counter}>Counter: {count}</Text>
      <Button title="Increment" onPress={increment} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center' },
  text: { 
    fontSize: 24, 
    marginBottom: 10 },
  counter: { 
    fontSize: 20, 
    marginBottom: 20 },
});

export default one;
