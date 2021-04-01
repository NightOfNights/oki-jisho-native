import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { lightGreen } from '../../constants/colors';

const Tag = ({ value, tagColor }) => {
  return (
    <View style={{ backgroundColor: tagColor, ...styles.container }}>
      <Text style={styles.tagText}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    paddingHorizontal: 10,
    marginTop: 3,
  },
  tagText: {
    color: lightGreen,
    textAlign: 'center',
    fontSize: 12,
  },
});

export default Tag;
