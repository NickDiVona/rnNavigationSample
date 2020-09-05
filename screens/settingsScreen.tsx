//sys
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
//usr
import RoundedCustomButton from '../components/roundedCustomButton';

const SettingsScreen = (props: any) => {
  const [bgColor, setBgColor] = useState('lightseagreen');

  const changeButtonColor = () => {
    if (bgColor === 'lightseagreen') {
      return setBgColor('lightsteelblue');
    }

    return setBgColor('lightseagreen');
  };

  return (
    <View style={[styles.containerStyle, { backgroundColor: bgColor }]}>
      <Text style={styles.titleTextStyle}>Settings Screen</Text>
      <RoundedCustomButton title="Change Color" onPress={changeButtonColor} />
      <RoundedCustomButton
        onPress={() => props.navigation.navigate('Login')}
        title="Log out!"
      />
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleTextStyle: { fontSize: 32, marginBottom: 10 }
});
