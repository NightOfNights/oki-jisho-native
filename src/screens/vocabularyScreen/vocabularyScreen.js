import * as React from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Keyboard,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';
import { ThemedText, ThemedTag } from '../../components';
import { ThemeContext } from '../../providers/themeProvider';
import { basicWhite, textInputBorderShadow } from '../../constants/colors';

const VocabularyScreen = () => {
  const { theme } = React.useContext(ThemeContext);

  const testData = [
    { word: '猫', englishTranslation: 'cat', tags: ['animal', 'N5'] },
    {
      word: '首相',
      englishTranslation: 'Prime minister',
      tags: ['profession', 'N3'],
    },
  ];

  const vocabulary = testData.map((vocabularyItem, idx) => (
    <View key={`${vocabularyItem.word}+${idx}`} style={styles.vocabularyCard}>
      <View style={styles.textInfoView}>
        <ThemedText
          value={vocabularyItem.word}
          color={theme.text}
          style={styles.textInfo}
        />
        <ThemedText
          value={vocabularyItem.englishTranslation}
          color={theme.text}
          style={styles.textInfo}
        />
      </View>
      <View style={styles.tags}>
        {vocabularyItem.tags.map((tag, idx) => (
          <ThemedTag
            key={`${tag}+${idx}`}
            value={tag}
            tagColor={theme.tagColor}
          />
        ))}
      </View>
    </View>
  ));

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <ThemedText
          value="Vocabulary"
          color={theme.text}
          style={styles.vocabularyText}
        />
        <TextInput
          style={styles.vocabularyInput}
          onChangeText={() => console.log('test')}
          onSubmitEditing={() => console.log('test1')}
          placeholder="Find by word or tags"
        />
        <ScrollView>{vocabulary}</ScrollView>
      </View>
    </TouchableWithoutFeedback>
  );
};

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

export default VocabularyScreen;
