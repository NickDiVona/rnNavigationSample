//system
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
//user
import AppNavigator from './navigation/index';

export default function App() {
  return (
    <SafeAreaProvider style={{ flex: 1 }}>
      <StatusBar />
      <AppNavigator />
    </SafeAreaProvider>
  );
}
