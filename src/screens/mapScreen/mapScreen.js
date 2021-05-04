import * as React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { View } from 'react-native';
import styles from './styles';

const krasnoyarskCoordinates = {
  latitude: 56.0078,
  longitude: 92.87187,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};

const japaneseKrasnoyarskSpots = [
  {
    title: 'ЯПОНСКИЙ ЦЕНТР СФУ',
    latlng: { latitude: 56.00548, longitude: 92.77242 },
    description: 'Научно-образовательный центр',
  },
  {
    title: 'Ин.яз',
    latlng: { latitude: 56.0106, longitude: 92.86874 },
    description: 'Школа иностранных языков',
  },
  {
    title: 'Иероглиф',
    latlng: { latitude: 56.03832, longitude: 92.92657 },
    description: 'Языковой центр',
  },
];

const MapScreen = () => {
  const [region, setRegion] = React.useState(krasnoyarskCoordinates);

  const handleRegionChange = (region) => {
    setRegion({ region });
  };

  const markers = japaneseKrasnoyarskSpots.map((spot, idx) => {
    return (
      <Marker
        key={idx}
        coordinate={spot.latlng}
        title={spot.title}
        description={spot.description}
      />
    );
  });

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={region}
        onRegionChange={handleRegionChange}
      >
        {markers}
      </MapView>
    </View>
  );
};

export default MapScreen;
