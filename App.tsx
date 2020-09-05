//system
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
//user
import AppNavigator from './navigation/index';
import appStore from './redux/configureStore';

export default function App() {
  return (
    <Provider store={appStore.store}>
      <PersistGate persistor={appStore.persistor}>
        <SafeAreaProvider style={{ flex: 1 }}>
          <StatusBar />
          <AppNavigator />
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
}
