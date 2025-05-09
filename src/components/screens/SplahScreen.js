import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native';

const SplashScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>

      <Image
        source={require('../../assets/images/noto_house.png')}
        style={styles.image}
        resizeMode="contain"
      />

      <View style={styles.heading}>
        <Text>
          <Text style={styles.text_global}>Global</Text>
          <Text style={styles.text_link}>Link</Text>
        </Text>

        <Text style={[styles.text, styles.centerText]}>
          No matter how far you go,
        </Text>

        <Text style={styles.text}>
          home will be your destination to return to.
        </Text>

        <Text style={[styles.text, styles.centerText]}>
          Let's make your home comfortable
        </Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('SplashScreen2')}
      >
        <Text style={styles.btn_txt}>Next  &gt;- </Text>
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
    padding: 20,
  },

  heading: {
    marginTop: 20,
    alignItems: 'center',
    backgroundColor: '#EFF1F5',
  },

  image: {
    width: 204,
    height: 204,
  },

  text_global: {
    fontSize: 35,
    fontFamily: 'Raleway-Bold',
    color: '#309FDB',
    fontWeight: '700',top:10
  },

  text_link: {
    fontSize: 35,
    fontFamily: 'Raleway-Bold',
    color: '#2072A3',
    fontWeight: '700',top:10
  },

  text: {
    fontSize: 16,
    color: '#333',
    marginVertical: 2,
    fontFamily: 'Raleway-Regular',
  },

  centerText: {
    textAlign: 'center',
    alignSelf: 'center',
    fontFamily: 'Raleway-Regular',
    fontSize: 16,
  },

  button: {
    width: 180,
    height: 45,
    backgroundColor: '#309FDB',
    marginTop: 180,
    borderRadius: 10,
    elevation: 10,
  },

  btn_txt: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
    textAlign: 'center',
    padding: 12,
  }
});

export default SplashScreen;
