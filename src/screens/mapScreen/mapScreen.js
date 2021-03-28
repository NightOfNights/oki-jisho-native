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
            'https://psv4.userapi.com/c856336/u81226711/docs/d18/ec615a3bf763/hpmhwmks4zy51.jpg?extra=3mx8_8AfAIjOFcpVIukaNL7Euu_Xsd-r69-nZP918mpg89tEd-Cy8JmGn33L1lq_n3MznkAsDYJ8C93u8L3Ennq0HXWjE-fTngNHcRA7QA2tUCkJYuxFUMm5jbCKQKS8sPM-9suP4mwXVv475yBU',
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
