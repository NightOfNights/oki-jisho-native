import { StyleSheet } from 'react-native';
import { basicWhite, textInputBorderShadow } from '../../constants/colors';

const styles = StyleSheet.create({
  container: {},
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
    flexDirection: 'row',
  },
  textInfo: {
    fontSize: 16,
    flex: 1,
    flexWrap: 'wrap',
  },
  word: {
    flex: 4,
  },
  tags: {
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
});

export default styles;
