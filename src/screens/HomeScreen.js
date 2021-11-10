import React from 'react';
import {
  Dimensions,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import colors from '../styles/colors';
import Fontisto from 'react-native-vector-icons/Fontisto';

function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => navigation.navigate('DestinationSearch')}
        style={styles.searchButton}>
        <Fontisto color={colors.red} name="search" size={25} />
        <Text style={styles.searchButtonText}> Where are you going?</Text>
      </Pressable>
      <ImageBackground
        source={require('../../assets/images/wallpaper.jpg')}
        style={styles.image}>
        <Text style={styles.title}>Go Near</Text>
        <Pressable
          onPress={() => console.warn('Explore Button Clicked')}
          style={styles.button}>
          <Text style={styles.buttonText}>Explore nearby stays</Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 10,
    justifyContent: 'center',
    height: 40,
    marginTop: 25,
    marginLeft: 25,
    width: 200,
  },
  buttonText: {
    color: colors.black,
    fontSize: 16,
    fontWeight: 'bold',
  },
  container: {},
  image: {
    height: 500,
    justifyContent: 'center',
    resizeMode: 'cover',
    width: '100%',
  },
  searchButton: {
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 30,
    elevation: 1,
    flexDirection: 'row',
    height: 60,
    justifyContent: 'center',
    marginHorizontal: 10,
    position: 'absolute',
    top: 15,
    width: Dimensions.get('screen').width - 20,
    zIndex: 1,
  },
  searchButtonText: {
    color: colors.black,
    fontSize: 16,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 80,
    fontWeight: 'bold',
    marginLeft: 25,
    width: '70%',
  },
});

export default HomeScreen;
