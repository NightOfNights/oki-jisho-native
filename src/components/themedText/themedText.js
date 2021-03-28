import * as React from 'react';
import { Text } from 'react-native';

const ThemedText = ({ value, color }) => {
  const textStyle = { color };

  return <Text style={textStyle}>{value}</Text>;
};

export default ThemedText;
