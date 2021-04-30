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
import { readFromVocabulary } from '../../storage/sqlite';
import { useIsFocused } from '@react-navigation/native';
import styles from './styles';

const VocabularyScreen = () => {
  const { theme } = React.useContext(ThemeContext);
  const [vocabularyData, setVocabularyData] = React.useState([]);
  const isFocused = useIsFocused();

  React.useEffect(() => {
    if (isFocused) {
      console.log(isFocused);
      readFromVocabulary(setVocabularyData);
    }
  }, [isFocused]);

  const vocabulary = vocabularyData
    ? vocabularyData.map((vocabularyItem) => (
        <View key={vocabularyItem.word} style={styles.vocabularyCard}>
          <View style={styles.textInfoView}>
            <ThemedText
              value={vocabularyItem.word}
              color={theme.text}
              style={styles.textInfo}
            />
            <ThemedText
              value={vocabularyItem.translation}
              color={theme.text}
              style={styles.textInfo}
            />
          </View>
          <View style={styles.tags}>
            {vocabularyItem.tags
              ? vocabularyItem.tags
                  .split(',')
                  .map((tag) => (
                    <ThemedTag
                      key={tag}
                      value={tag}
                      tagColor={theme.tagColor}
                    />
                  ))
              : null}
          </View>
        </View>
      ))
    : null;

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
