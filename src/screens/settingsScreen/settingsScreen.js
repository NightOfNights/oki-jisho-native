import * as React from 'react';
import { Text, View } from 'react-native';

const SettingsScreen = () => {
  const viewStyle = { flex: 1, justifyContent: 'center', alignItems: 'center' };

  return (
    <View style={viewStyle}>
      <Text>Settings!</Text>
    </View>
  );
};

export default SettingsScreen;
