import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

import colors from '../styles/colors';

function GuestNumberPicker({
  decrement,
  increment,
  subtitle = 'subtitle',
  title = 'title',
  value = 0,
}) {
  return (
    <View style={styles.row}>
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>

      <View style={styles.buttonContainer}>
        <Pressable onPress={decrement} style={styles.button}>
          <Text style={styles.symbol}>-</Text>
        </Pressable>

        <Text style={styles.counterText}>{value}</Text>

        <Pressable onPress={increment} style={styles.button}>
          <Text style={styles.symbol}>+</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    borderColor: colors.darkGrey,
    borderRadius: 20,
    borderWidth: 1,
    height: 40,
    justifyContent: 'center',
    width: 40,
  },
  buttonContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  counterText: {
    color: colors.black,
    fontSize: 16,
    marginHorizontal: 20,
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: colors.lightGrey,
    justifyContent: 'space-between',
    marginHorizontal: 20,
    paddingVertical: 20,
  },
  subtitle: {
    color: colors.lightGrey,
  },
  symbol: {
    color: colors.darkGrey,
    fontSize: 30,
  },
  title: {
    color: colors.black,
    fontWeight: 'bold',
  },
});

export default GuestNumberPicker;
