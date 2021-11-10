import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import DestinationSearchScreen from '../screens/DestinationSearchScreen';
import GuestScreen from '../screens/GuestScreen';
import HomeTabNavigator from './HomeTabNavigator';
import PostScreen from '../screens/PostScreen';

const Stack = createStackNavigator();

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerTitleAlign: 'center', presentation: 'modal'}}>
        <Stack.Screen
          component={HomeTabNavigator}
          name={'Home'}
          options={{headerShown: false}}
        />

        <Stack.Screen
          component={DestinationSearchScreen}
          name={'DestinationSearch'}
          options={{title: 'Search your destination'}}
        />
        <Stack.Screen
          component={GuestScreen}
          name={'Guests'}
          options={{title: 'Who is coming ?'}}
        />
        <Stack.Screen
          component={PostScreen}
          name={'Post'}
          options={{title: 'Accommodation Details'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;
