//sys
import React from 'react';
import { View, Text } from 'react-native';
//usr
import RoundedCustomButton from '../components/roundedCustomButton';

const SettingsScreen = (props: any) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightseagreen'
      }}
    >
      <Text style={{ marginBottom: 10 }}>Settings Screen</Text>
      <RoundedCustomButton
        onPress={() => props.navigation.navigate('Login')}
        title="Log out!"
      />
    </View>
  );
};

export default SettingsScreen;
