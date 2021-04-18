import { StyleSheet } from 'react-native';
import { basicWhite, textInputBorderShadow } from '../../constants/colors';

const styles = StyleSheet.create({
  container: { flex: 1 },
  vocabularyText: { fontSize: 20, marginVertical: 10, marginLeft: 10 },
  vocabularyInput: {
    alignSelf: 'stretch',
    height: 40,
    marginHorizontal: 12,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 3,
    backgroundColor: basicWhite,
    shadowColor: textInputBorderShadow,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  vocabularyCard: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: basicWhite,
  },
  textInfoView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textInfo: {
    fontSize: 16,
  },
  tags: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
});

export default styles;
