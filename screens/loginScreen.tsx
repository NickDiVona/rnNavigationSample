//sys
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
//usr
import RoundedCustomButton from '../components/roundedCustomButton';

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
      <RoundedCustomButton
        onPress={() => props.navigation.navigate('BottomTabNav')}
        title="Log in!"
      />
      <RoundedCustomButton
        onPress={() => props.navigation.navigate('Forgot')}
        title="Forgot password?"
      />
    </View>
  );
};

export default LoginScreen;
