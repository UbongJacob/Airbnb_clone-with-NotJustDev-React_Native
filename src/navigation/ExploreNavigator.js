import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import SearchResultsTabNavigator from './SearchResultsTabNavigator';

const Stack = createStackNavigator();

function ExploreNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerTitleAlign: 'center'}}>
      <Stack.Screen
        component={HomeScreen}
        name={'Welcome'}
        options={{headerShown: false}}
      />

      <Stack.Screen
        component={SearchResultsTabNavigator}
        name={'SearchResults'}
        options={{title: 'Search your destination'}}
      />
    </Stack.Navigator>
  );
}

export default ExploreNavigator;
