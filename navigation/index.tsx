//system
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//user
import EntryScreen from '../screens/entryScreen';
import DetailScreen from '../screens/detailScreen';

const Tab = createBottomTabNavigator();

const BottomTabNav = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Entry" component={EntryScreen} />
      <Tab.Screen name="Detail" component={DetailScreen} />
    </Tab.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <BottomTabNav />
    </NavigationContainer>
  );
};

export default AppNavigator;
