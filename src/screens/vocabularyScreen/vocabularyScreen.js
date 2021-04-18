import * as React from 'react';
import {
  View,
  TextInput,
  Keyboard,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';
import { ThemedText, ThemedTag } from '../../components';
import { ThemeContext } from '../../providers/themeProvider';
import styles from './styles';

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

export default VocabularyScreen;
