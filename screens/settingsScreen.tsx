import React from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native';

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
      <Text>Settings Screen</Text>
      <TouchableOpacity onPress={() => props.navigation.navigate('Login')}>
        <View>
          <Text>Log out!</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default SettingsScreen;
