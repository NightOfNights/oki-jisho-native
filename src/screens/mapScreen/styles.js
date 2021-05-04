import { StyleSheet, Dimensions } from 'react-native';
import { basicWhite } from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: basicWhite,
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default styles;
