import { StyleSheet } from 'react-native';
import { basicWhite, textInputBorderShadow } from '../../constants/colors';

const styles = StyleSheet.create({
  container: { flex: 1 },
  searchInput: {
    alignSelf: 'stretch',
    height: 40,
    margin: 12,
    paddingHorizontal: 10,
    borderRadius: 3,
    backgroundColor: basicWhite,
    shadowColor: textInputBorderShadow,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  clearButtonView: {
    alignSelf: 'stretch',
    paddingHorizontal: 12,
    marginBottom: 10,
  },
  searchHistory: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    borderTopWidth: 1,
    borderColor: basicWhite,
    paddingVertical: 15,
  },
});

export default styles;
