import React from 'react';
import {StyleSheet, View} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {useNavigation} from '@react-navigation/native';

import GOOGLE_API_KEY from '../api/apiData';
import SuggestionRow from '../components/SuggestionRow';
import colors from '../styles/colors';

function DestinationSearchScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete
        fetchDetails
        onPress={(data, details = null) => {
          navigation.navigate('Guests');
          console.log(data, details);
        }}
        placeholder="Where are you going?"
        query={{
          key: GOOGLE_API_KEY,
          language: 'en',
          type: '(cities)',
        }}
        renderRow={item => <SuggestionRow item={item} />}
        styles={{
          textInput: styles.textInput,
        }}
        suppressDefaultStyles
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
    height: '100%',
    padding: 20,
  },
  textInput: {
    fontSize: 20,
    marginBottom: 20,
    backgroundColor: colors.grey,
    borderRadius: 10,
  },
});

export default DestinationSearchScreen;
