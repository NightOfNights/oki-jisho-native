import { StyleSheet } from 'react-native';
import { gray, basicWhite } from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    marginBottom: 10,
    paddingTop: 10,
    borderColor: basicWhite,
    borderTopWidth: 1,
  },
  leftContent: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  wordText: {
    fontSize: 20,
  },
  readingText: {
    fontSize: 13,
  },
  leftContentText: {
    textAlign: 'center',
  },
  rightContent: {
    flex: 2,
    paddingHorizontal: 10,
  },
  definitions: {
    flex: 1,
    flexDirection: 'column',
  },
  wordDefinitionCard: {
    marginBottom: 10,
  },
  partsOfSpeechText: {
    color: gray,
    fontSize: 11,
  },
  infoText: {
    color: gray,
    fontSize: 12,
  },
  tags: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
  },
});

export default styles;
