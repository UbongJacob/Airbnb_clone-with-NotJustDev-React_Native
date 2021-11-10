import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import colors from '../styles/colors';
import ExploreNavigator from './ExploreNavigator';
import HomeScreen from '../screens/HomeScreen';

const Tab = createBottomTabNavigator();

function HomeTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false, tabBarActiveTintColor: colors.red}}>
      <Tab.Screen
        component={ExploreNavigator}
        name={'Explore'}
        options={{
          tabBarIcon: ({color}) => (
            <Fontisto name="search" size={25} color={color} />
          ),
        }}
      />

      <Tab.Screen
        component={HomeScreen}
        name={'Saved'}
        options={{
          tabBarIcon: ({color}) => (
            <FontAwesome name="heart-o" size={25} color={color} />
          ),
        }}
      />

      <Tab.Screen
        component={HomeScreen}
        name={'AirBnb'}
        options={{
          tabBarIcon: ({color}) => (
            <FontAwesome5 name="airbnb" size={25} color={color} />
          ),
        }}
      />

      <Tab.Screen
        component={HomeScreen}
        name={'Messages'}
        options={{
          tabBarIcon: ({color}) => (
            <Feather name="message-square" size={25} color={color} />
          ),
        }}
      />

      <Tab.Screen
        component={HomeScreen}
        name={'Profile'}
        options={{
          tabBarIcon: ({color}) => (
            <EvilIcons name="user" size={25} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default HomeTabNavigator;
