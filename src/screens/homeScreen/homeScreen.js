import * as React from 'react';
import { Text, View } from 'react-native';

const HomeScreen = () => {
  const viewStyle = { flex: 1, justifyContent: 'center', alignItems: 'center' };

  return (
    <View style={viewStyle}>
      <Text>Home!</Text>
    </View>
  );
};

export default HomeScreen;
