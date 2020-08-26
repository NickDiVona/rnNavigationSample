//system
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
//user
import EntryScreen from '../screens/entryScreen';
import DetailScreen from '../screens/detailScreen';
import SettingsScreen from '../screens/settingsScreen';
import LoginScreen from '../screens/loginScreen';
import ForgotScreen from '../screens/forgotScreen';

const Tab = createBottomTabNavigator();

const BottomTabNav = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: 'red',
        activeBackgroundColor: 'white',
        inactiveBackgroundColor: 'black'
      }}
    >
      <Tab.Screen name="Entry" component={EntryScreen} />
      <Tab.Screen name="Detail" component={DetailScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

const Stack = createStackNavigator();

const StackNav = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Forgot" component={ForgotScreen} />
      <Stack.Screen name="BottomTabNav" component={BottomTabNav} />
    </Stack.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <StackNav />
    </NavigationContainer>
  );
};

export default AppNavigator;
