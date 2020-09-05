//sys
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
//usr
import { incrementCount, decrementCount } from '../redux/actionCreators';
import RoundedCustomButton from '../components/roundedCustomButton';

const EntryScreen = () => {
  const dispatch = useDispatch();
  const currentCount = useSelector((state: any) => state.count.count);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightblue'
      }}
    >
      <Text style={styles.titleTextStyle}>Entry Screen</Text>
      <Text style={styles.currentCountTextStyle}>
        Current Count: {currentCount}
      </Text>
      <RoundedCustomButton
        title="increase"
        onPress={() => dispatch(incrementCount())}
      />
      <RoundedCustomButton
        title="decrease"
        onPress={() => dispatch(decrementCount())}
      />
    </View>
  );
};

export default EntryScreen;

const styles = StyleSheet.create({
  titleTextStyle: { fontSize: 32, marginBottom: 10 },
  currentCountTextStyle: { fontSize: 24, marginBottom: 10 }
});
