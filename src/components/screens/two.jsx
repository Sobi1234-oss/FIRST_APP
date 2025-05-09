
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useCounterStore } from './store';

const two = () => {
  const { count, decrement } = useCounterStore();

  return (
<View style={styles.container}> 
    <Text style={styles.text}>Two Screen</Text>
   <Text style={styles.counter}>Counter: {count}</Text>
       <Button title="Decrement" onPress={decrement} />
    </View>
  );
};

const styles = StyleSheet.create({
container: { flex: 1, 
    justifyContent: 'center',
     alignItems: 'center' 
    },
 text: { 
    fontSize: 24,
    marginBottom: 10 },
 counter: { 
    fontSize: 20,
     marginBottom: 20 },
});

export default two;
