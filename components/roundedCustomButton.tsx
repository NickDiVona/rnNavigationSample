import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const RoundedCustomButton = (props: any) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={styles.roundedButtonContainerStyle}
    >
      <View>
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default RoundedCustomButton;

const styles = StyleSheet.create({
  roundedButtonContainerStyle: {
    width: 150,
    height: 50,
    backgroundColor: 'lightsalmon',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginBottom: 10
  }
});
