import * as React from 'react';
import { Text } from 'react-native';

const ThemedText = ({ value, color, style }) => {
  const textStyle = { color, ...style };

  return <Text style={textStyle}>{value}</Text>;
};

export default ThemedText;
