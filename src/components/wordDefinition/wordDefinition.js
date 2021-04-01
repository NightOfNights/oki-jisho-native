import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const WordDefinition = () => {
  const testData = ['omae', 'neko', 'dog'];
  const definitionList = testData.map((data, idx) => (
    <View key={idx}>
      <Text>{`${idx + 1}. ${data}`}</Text>
    </View>
  ));

  return (
    <View style={styles.container}>
      <View style={styles.leftContent}>
        <View>
          <Text>left1</Text>
          <Text>left2</Text>
          <Text>left3</Text>
        </View>
      </View>
      <View style={styles.rightContent}>
        <View style={styles.definitions}>{definitionList}</View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
  },
  leftContent: {
    flex: 1,
  },
  rightContent: {
    flex: 2,
  },
  definitions: {
    flex: 1,
    flexDirection: 'column',
  },
});

export default WordDefinition;
