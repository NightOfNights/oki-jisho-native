import * as React from 'react';
import { Text, View, Image } from 'react-native';
import styles from './styles';

const MapScreen = () => {
  const viewStyle = { flex: 1, justifyContent: 'center', alignItems: 'center' };

  return (
    <View style={viewStyle}>
      <Text>Map!</Text>
      <Image
        source={{
          uri:
            'https://memepedia.ru/wp-content/uploads/2020/10/big-floppa-meme.png',
        }}
        style={styles.mapPlaceholder}
      />
    </View>
  );
};

export default MapScreen;
