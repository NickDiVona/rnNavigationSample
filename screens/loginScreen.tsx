import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const LoginScreen = (props) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightgoldenrodyellow'
      }}
    >
      <Text>Login Screen</Text>
      <TouchableOpacity
        onPress={() => props.navigation.navigate('BottomTabNav')}
      >
        <View>
          <Text>Log in!</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.navigation.navigate('Forgot')}>
        <View>
          <Text>Forgot password?</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
