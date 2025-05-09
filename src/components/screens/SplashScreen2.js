
import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator,Image } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const SplashScreen2 = ({ navigation }) => {
  

  return (
    <View style={styles.container}>

      <Image
        source={require('../../assets/images/coolkids.png')}
        style={styles.image}
        resizeMode="contain"
      />
    
      <Text  style={styles.text_description} >
      Connecting Your Home{'\n'}
      Simplifying Your Life
 
      </Text>
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.btn_txt}>Get Started &gt;-</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EFF1F5',
    padding:20
  },
  image:{
    width:300,
    height:270,
    
    
  },
  text_global: {
    fontSize:35,
    fontFamily:"Quicksand-Light",
    color:'#309FDB',
    fontWeight:'700'
  },
  text_link: {
    fontSize:35,
   
    color:'#2072A3',
    fontWeight:'700'
  },
  text_description: {
    fontSize:16,
    fontFamily:"Raleway-Regular",
    color:'black',
    fontWeight:'600',top:20,
  },
  button:{
    width:180,
    height:45,
    backgroundColor:'#309FDB',
    marginTop:180,
    borderRadius:10,
    elevation:10
  },
  btn_txt:{
    fontSize:18,
    fontweight:600,
    color:'white',
    textAlign:'center',
    padding:12,
  }
});

export default SplashScreen2;
