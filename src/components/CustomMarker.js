import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Marker} from 'react-native-maps';
import colors from '../styles/colors';

function CustomMarker(props) {
  const {coordinate, isSelected, onPress, price} = props;
  return (
    <Marker coordinate={coordinate} onPress={onPress}>
      <View
        style={[
          styles.priceContainer,
          {
            backgroundColor: isSelected ? colors.black : colors.lightGrey,
            borderColor: isSelected ? colors.red : colors.black,
          },
        ]}>
        <Text
          style={[
            styles.text,
            {color: isSelected ? colors.white : colors.black},
          ]}>
          ₦{price}
        </Text>
      </View>
    </Marker>
  );
}

const styles = StyleSheet.create({
  priceContainer: {
    borderRadius: 20,
    borderWidth: 2,
    padding: 5,
  },
  text: {
    fontWeight: 'bold',
  },
});

export default CustomMarker;
