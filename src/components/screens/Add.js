import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Alert, ScrollView, TouchableOpacity } from 'react-native';
import axios from 'axios';

const Add = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('sports');
  const [image, setImage] = useState('https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg');
  const [loading, setLoading] = useState(false);
  const handleAddProduct = async () => {
    setLoading(true);
    try {
      const newProduct = {
        title,
        price: parseFloat(price),
        description,
        image,
        category
      };

      await axios.post('https://fakestoreapi.com/products', newProduct);
      console.log(newProduct)
      resetForm();
      navigation.goBack();
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
    if (!title || !price || !description || !category || !image) {
        Alert.alert('Error', 'Please fill all fields');
        return;
      }
  };
  const resetForm = () => {
    setTitle('');
    setPrice('');
    setDescription('');
    setCategory('sports');
    setImage('https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg');
  };

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      resetForm();
    });
    return unsubscribe;
  }, [navigation]);
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Add New Product</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Enter product title"
        value={title}
        onChangeText={setTitle}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Enter price"
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
      />
      
      <TextInput
        style={[styles.input, { height: 80 }]}
        placeholder="Enter description"
        value={description}
        onChangeText={setDescription}
        multiline
      />
      
      <TextInput
        style={styles.input}
        placeholder="Enter category"
        value={category}
        onChangeText={setCategory}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Enter image URL"
        value={image}
        onChangeText={setImage}
      />
     <TouchableOpacity 
      style={[styles.btn, loading && styles.disabledBtn]}
      onPress={handleAddProduct}
      disabled={loading}
>
     <Text style={styles.btnText}>
      {loading ? "Adding..." : "Add Product"}
     </Text>
     </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    padding: 10,
    borderRadius: 5,
  },
  btn: {
    backgroundColor: '#2e86de',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  disabledBtn: {
    backgroundColor: '#cccccc',
  },
  btnText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Add;