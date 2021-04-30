import * as React from 'react';
import { Text, View, ActivityIndicator, ScrollView } from 'react-native';
import { getWordDefinitions } from '../../api/apiRequests';
import { lightGreen } from '../../constants/colors';
import { useQuery } from 'react-query';
import { ThemedText, WordDefinition, VocabularyModal } from '../../components';
import { ThemeContext } from '../../providers/themeProvider';
import {
  insertIntoVocabulary,
  readFromVocabulary,
  updateRowInVocabulary,
  deleteRowFromVocabulary,
} from '../../storage/sqlite';
import styles from './styles';

const SearchResultScreen = ({ route }) => {
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const [modalData, setModalData] = React.useState([]);
  const { theme } = React.useContext(ThemeContext);

  const { searchQuery } = route.params || '';

  const { isLoading, error, data } = useQuery(
    ['wordDefinitions', searchQuery],
    () => getWordDefinitions(searchQuery)
  );

  const handleWordDefinitionHoldPress = (word, translation, tags) => {
    console.log('clicked', word);
    setModalData({ word, translation: 'asd', tags: 'ts' });
    setIsModalVisible(true);
  };

  const handleModalCancelClick = () => {
    setIsModalVisible(false);
  };

  const words = data
    ? data.map((searchResult, idx) => (
        <WordDefinition
          key={idx}
          japanese={searchResult.japanese[0]}
          common={searchResult.is_common}
          jlpt={searchResult.jlpt}
          senses={searchResult.senses}
          textColor={theme.text}
          tagColor={theme.tagColor}
          onHoldPress={handleWordDefinitionHoldPress}
        />
      ))
    : [];

  if (error) {
    return <Text>Error</Text>;
  }

  return (
    <View style={styles.container}>
      <ThemedText
        value={`Search: ${searchQuery} `}
        color={theme.text}
        style={styles.searchQueryText}
      />
      {isLoading ? (
        <View style={styles.loadingIndicatior}>
          <ActivityIndicator size="large" color={lightGreen} />
        </View>
      ) : words.length ? (
        <ScrollView>{words}</ScrollView>
      ) : (
        <View style={styles.noDefinitions}>
          <ThemedText
            value="Definitions not found!"
            color={theme.text}
            style={styles.noDefinitionsText}
          />
        </View>
      )}
      <VocabularyModal
        modalTitle="Add to vocabulary"
        isVisible={isModalVisible}
        word={modalData.word}
        translation={modalData.translation}
        tags={modalData.tags}
        textColor={theme.text}
        onCancelClick={handleModalCancelClick}
      />
    </View>
  );
};

export default SearchResultScreen;
