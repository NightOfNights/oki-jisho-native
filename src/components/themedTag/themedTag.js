import * as React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const Tag = ({ value, tagColor }) => {
  return (
    <View style={{ backgroundColor: tagColor, ...styles.container }}>
      <Text style={styles.tagText}>{value}</Text>
    </View>
  );
};

export default Tag;
