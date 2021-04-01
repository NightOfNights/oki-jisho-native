import * as React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

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

const styles = StyleSheet.create({
  mapPlaceholder: { flex: 1, resizeMode: 'cover', width: 425 },
});

export default MapScreen;
