import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const ForgotScreen = (props: any) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'khaki'
      }}
    >
      <Text style={{ marginBottom: 10 }}>Forgot Screen</Text>
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
          <Text>Actually.... wait.</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ForgotScreen;
