import * as React from 'react';
import { Text, View } from 'react-native';

const VocabularyScreen = () => {
  const viewStyle = { flex: 1, justifyContent: 'center', alignItems: 'center' };

  return (
    <View style={viewStyle}>
      <Text>Vocabulary!</Text>
    </View>
  );
};

export default VocabularyScreen;
