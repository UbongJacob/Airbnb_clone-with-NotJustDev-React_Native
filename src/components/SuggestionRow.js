import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

import colors from '../styles/colors';

const SuggestionRow = ({item}) => (
  <View style={styles.row}>
    <View style={styles.iconContainer}>
      <Entypo color={colors.black} name="location-pin" size={30} />
    </View>
    <Text style={styles.locationText}> {item.description} </Text>
  </View>
);

const styles = StyleSheet.create({
  iconContainer: {
    backgroundColor: colors.lightGrey,
    borderRadius: 10,
    marginRight: 15,
    padding: 7,
  },
  locationText: {
    color: colors.black,
  },
  row: {
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: colors.lightGrey,
    flexDirection: 'row',
    paddingVertical: 15,
  },
});

export default SuggestionRow;
