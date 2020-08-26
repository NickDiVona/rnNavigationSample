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
      <Text style={{ marginBottom: 10 }}>Settings Screen</Text>
      <TouchableOpacity
        onPress={() => props.navigation.navigate('Login')}
        style={{
          width: 150,
          height: 50,
          backgroundColor: 'lightsalmon',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 20,
          marginBottom: 10
        }}
      >
        <View>
          <Text>Log out!</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default SettingsScreen;
