import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const ForgotScreen = (props) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'khaki'
      }}
    >
      <Text>Forgot Screen</Text>
      <TouchableOpacity onPress={() => props.navigation.navigate('Login')}>
        <View>
          <Text>Actually.... wait.</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ForgotScreen;
