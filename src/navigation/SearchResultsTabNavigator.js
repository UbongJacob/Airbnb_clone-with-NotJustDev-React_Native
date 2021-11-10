import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import colors from '../styles/colors';
import SearchResultScreen from '../screens/SearchResultScreen';
import SearchResultMap from '../screens/SearchResultMap';

const Tab = createMaterialTopTabNavigator();

function SearchResultsTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: colors.red,
        tabBarInactiveTintColor: colors.lightGrey,
        tabBarIndicatorStyle: {
          backgroundColor: colors.red,
        },
      }}>
      <Tab.Screen component={SearchResultScreen} name={'list'} />
      <Tab.Screen component={SearchResultMap} name={'map'} />
    </Tab.Navigator>
  );
}

export default SearchResultsTabNavigator;
