import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native';

const Login = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.circle} />
      <View style={styles.circle2} />
      <View style={styles.heading}>
        <Text>
          <Text style={styles.text_global}>Global</Text>
          <Text style={styles.text_link}>Link</Text>
        </Text>

        <View style={styles.inputContainer}>
          <TextInput 
            style={styles.input} 
            placeholder="Email Address" 
            placeholderTextColor="#888" 
          />
          <TextInput 
            style={styles.input} 
            placeholder="Password" 
            placeholderTextColor="#888" 
            secureTextEntry 
          />
        </View>

        <TouchableOpacity>
          <Text style={styles.forgotText}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('MainApp')}
      >
        <Text style={styles.btn_txt}>Login</Text>
      </TouchableOpacity>

      {/* Social Login Section */}
      <View style={styles.socialContainer}>
        <View style={styles.dividerContainer}>
          <View style={styles.line} />
          <Text style={styles.orText}>Or sign up with</Text>
          <View style={styles.line} />
        </View>

        <View style={styles.iconRow}>
          <TouchableOpacity style={styles.iconCircle}>
            <Image 
              source={require('../../assets/images/google.png')} 
              style={styles.iconImage} 
              resizeMode="contain" 
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconCircle}>
            <Image 
              source={require('../../assets/images/fb.png')} 
              style={styles.iconImage} 
              resizeMode="contain" 
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFF1F5',
    alignItems: 'center',
    justifyContent: 'flex-start',
    position:'relative'

  },
  circle:{
    backgroundColor: '#EFF1F5',
    opacity:0.3,
    alignItems: 'center',
    justifyContent: 'flex-start',
    position: 'absolute',
    width:360,
    height:350,
    backgroundColor:'#309FDB',
    borderRadius:195,
    right:1,
    left:0,top:-160
  },
  circle2:{
    backgroundColor: '#EFF1F5',
    alignItems: 'center',
    justifyContent: 'flex-start',
    position: 'absolute',
    width:200,
    height:200,
    backgroundColor:'#309FDB',
    opacity:0.3,
    borderRadius:126,
    right:-40,top:-30,
    
  },
  heading: {
    marginTop: 200,
    alignItems: 'center',
  },
  text_global: {
    fontSize: 35,
    fontFamily: 'Raleway-bold',
    color: '#309FDB',
    fontWeight: '700',
  },
  text_link: {
    fontSize: 35,
    fontFamily: 'Raleway-Bold',
    color: '#2072A3',
    fontWeight: '700',
  },
  inputContainer: {
    marginTop: 30,
    justifyContent: 'space-evenly',
    paddingTop: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
    width: 300,
    height: 50,
  },
  forgotText: {
    color: 'black',
    fontSize: 16,
    textAlign: 'right',
    marginBottom: 20,
    marginRight: 20,
    marginLeft: 180,
    fontWeight: '600',
  },
  button: {
    width: 180,
    height: 45,
    backgroundColor: '#309FDB',
    marginTop: 10,
    borderRadius: 10,
    elevation: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn_txt: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
    textAlign: 'center',
  },
  socialContainer: {
    alignItems: 'center',
    marginTop: 30,
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#ccc',
    marginHorizontal: 10,
  },
  orText: {
    fontSize: 14,
    color: '#666',
  },
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
  },
  iconCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
    marginHorizontal: 10,
  },
  iconImage: {
    width: 30,
    height: 30,
  },
});

export default Login;
