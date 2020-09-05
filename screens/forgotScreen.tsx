//sys
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
//usr
import RoundedCustomButton from '../components/roundedCustomButton';

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
      <RoundedCustomButton
        onPress={() => props.navigation.navigate('Login')}
        title="Actually.... wait."
      />
    </View>
  );
};

export default ForgotScreen;
