import { StyleSheet } from 'react-native';
import { basicWhite, gray, transparent } from '../../constants/colors';

const styles = StyleSheet.create({
  container: { flex: 1 },
  settingsText: { fontSize: 20, marginVertical: 10, marginLeft: 10 },
  settingsCard: {
    borderColor: basicWhite,
    borderTopWidth: 1,
    paddingLeft: 12,
    paddingTop: 10,
  },
  settingsName: {
    fontSize: 16,
  },
  picker: {
    height: 40,
    width: '100%',
    color: gray,
    backgroundColor: transparent,
  },
});

export default styles;
