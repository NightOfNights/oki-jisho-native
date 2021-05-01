import * as React from 'react';
import {
  View,
  TextInput,
  Keyboard,
  ScrollView,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import { ThemedText, ThemedTag, VocabularyModal } from '../../components';
import { ThemeContext } from '../../providers/themeProvider';
import {
  readFromVocabulary,
  updateRowInVocabulary,
  deleteRowFromVocabulary,
} from '../../storage/sqlite';
import { useIsFocused } from '@react-navigation/native';
import styles from './styles';

const VocabularyScreen = () => {
  const { theme } = React.useContext(ThemeContext);
  const [vocabularyData, setVocabularyData] = React.useState([]);
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const [modalData, setModalData] = React.useState({});
  const [filter, setFilter] = React.useState('');
  const isFocused = useIsFocused();

  React.useEffect(() => {
    if (isFocused) {
      console.log(isFocused);
      readFromVocabulary(setVocabularyData);
    }
  }, [isFocused]);

  const handleVocabularyItemLongPress = (id, word, translation, tags) => {
    setIsModalVisible(true);
    setModalData({ id, word, translation, tags });
  };

  const handleModalClickCancel = () => {
    setIsModalVisible(false);
  };

  const handleModalClickOk = (id, translation, tags) => {
    setIsModalVisible(false);
    updateRowInVocabulary(id, translation, tags, setVocabularyData);
  };

  const handleModalClickDelete = (id) => {
    setIsModalVisible(false);
    deleteRowFromVocabulary(id, setVocabularyData);
  };

  const vocabulary = vocabularyData
    ? vocabularyData
        .filter(
          (vocabularyItem) =>
            vocabularyItem.word.toLowerCase().includes(filter.toLowerCase()) ||
            vocabularyItem.tags.toLowerCase().includes(filter.toLowerCase()) ||
            vocabularyItem.translation
              .toLowerCase()
              .includes(filter.toLowerCase())
        )
        .map((vocabularyItem) => (
          <View key={vocabularyItem.word} style={styles.vocabularyCard}>
            <TouchableOpacity
              onLongPress={() =>
                handleVocabularyItemLongPress(
                  vocabularyItem.id,
                  vocabularyItem.word,
                  vocabularyItem.translation,
                  vocabularyItem.tags
                )
              }
            >
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
            </TouchableOpacity>
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
          onChangeText={setFilter}
          placeholder="Find by word or tags"
        />
        <ScrollView>{vocabulary}</ScrollView>
        <VocabularyModal
          modalTitle="Edit"
          isVisible={isModalVisible}
          {...modalData}
          edit
          onClickCancel={handleModalClickCancel}
          onClickOk={handleModalClickOk}
          onClickDelete={handleModalClickDelete}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default VocabularyScreen;
