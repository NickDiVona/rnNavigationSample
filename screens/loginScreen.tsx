import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const LoginScreen = (props: any) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightgoldenrodyellow'
      }}
    >
      <Text style={{ marginBottom: 10 }}>Login Screen</Text>
      <TouchableOpacity
        onPress={() => props.navigation.navigate('BottomTabNav')}
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
          <Text>Log in!</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => props.navigation.navigate('Forgot')}
        style={{
          width: 150,
          height: 50,
          backgroundColor: 'lightsalmon',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 20
        }}
      >
        <View>
          <Text>Forgot password?</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
