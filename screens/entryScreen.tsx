//sys
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
//usr
import { incrementCount, decrementCount } from '../redux/actionCreators';
import RoundedCustomButton from '../components/roundedCustomButton';

const Block = (props: any) => {
  //componentWillUnmount
  useEffect(() => {
    return () => console.log('=== BLOCK WAS UNMOUNTED ===');
  }, []);

  return (
    <View style={[styles.blockStyle, { backgroundColor: props.blockColor }]} />
  );
};

const EntryScreen = () => {
  const [bgColor, setBgColor] = useState('lightblue');
  const [blockColor, setBlockColor] = useState('darkorchid');
  const [showBlock, setShowBlock] = useState(true);

  const dispatch = useDispatch();
  const currentCount = useSelector((state: any) => state.count.count);

  const renderBlock = () => {
    if (showBlock === true) {
      return <Block blockColor={blockColor} />;
    }
    return null;
  };

  //componentDidMount
  useEffect(() => {
    setBlockColor('darkkhaki');
  }, []);

  //componentDidUpdate
  useEffect(() => {
    if (currentCount >= 10) {
      setBgColor('lightgoldenrodyellow');
    } else {
      setBgColor('lightblue');
    }
  }, [currentCount]);

  return (
    <View style={[styles.containerStyle, { backgroundColor: bgColor }]}>
      <Text style={[styles.titleTextStyle]}>Entry Screen</Text>
      {renderBlock()}
      <RoundedCustomButton
        title="Remove Block"
        onPress={() => setShowBlock(false)}
      />
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
  containerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleTextStyle: { fontSize: 32, marginBottom: 10 },
  currentCountTextStyle: { fontSize: 24, marginBottom: 10 },
  blockStyle: {
    height: 100,
    width: 100,

    borderRadius: 25,
    marginBottom: 10
  }
});
