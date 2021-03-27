import * as React from 'react';
import { Text } from 'react-native';
import { ThemeContext } from '../../providers/themeProvider';

const ThemedText = ({ value }) => {
  const { theme } = React.useContext(ThemeContext);

  const textStyle = { color: theme.text };

  return <Text style={textStyle}>{value}</Text>;
};

export default ThemedText;
