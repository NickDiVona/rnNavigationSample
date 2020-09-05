import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';

const DetailScreen = () => {
  const count = useSelector((state: any) => state.count.count);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 32, marginBottom: 10 }}>Detail Screen</Text>
      <Text style={{ fontSize: 24 }}>{count}</Text>
    </View>
  );
};

export default DetailScreen;
