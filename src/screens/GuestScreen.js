import React, {useState} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import GuestNumberPicker from '../components/GuestNumberPicker';
import colors from '../styles/colors';

function GuestScreen() {
  function SearchResultsNavigator() {
    navigation.navigate('Home', {
      screen: 'Explore',
      params: {
        screen: 'SearchResults',
      },
    });
  }
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View>
        <GuestNumberPicker
          decrement={() => setAdults(Math.max(0, adults - 1))}
          increment={() => setAdults(adults + 1)}
          subtitle="Ages 13 or above"
          title="Adults"
          value={adults}
        />
        <GuestNumberPicker
          decrement={() => setChildren(Math.max(0, children - 1))}
          increment={() => setChildren(children + 1)}
          subtitle="Ages 2 - 12"
          title="Children"
          value={children}
        />
        <GuestNumberPicker
          decrement={() => setInfants(Math.max(0, infants - 1))}
          increment={() => setInfants(infants + 1)}
          subtitle="Under 2"
          title="Infants"
          value={infants}
        />
      </View>
      <Pressable
        onPress={() => SearchResultsNavigator()}
        style={styles.searchButton}>
        <Text style={styles.text}>Search</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
    flex: 1,
    justifyContent: 'space-between',
  },
  searchButton: {
    alignItems: 'center',
    backgroundColor: colors.red,
    borderRadius: 10,
    height: 50,
    justifyContent: 'center',
    marginBottom: 20,
    marginHorizontal: 20,
  },
  text: {
    color: colors.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default GuestScreen;
