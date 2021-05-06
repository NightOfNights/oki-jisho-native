import * as React from 'react';
import { Text, View, ActivityIndicator, ScrollView } from 'react-native';
import { getWordDefinitions } from '../../api/apiRequests';
import { lightGreen } from '../../constants/colors';
import { useQuery } from 'react-query';
import { ThemedText, WordDefinition, VocabularyModal } from '../../components';
import { useThemeContext } from '../../hooks/useThemeContext';
import { insertIntoVocabulary } from '../../storage/sqlite';
import styles from './styles';

const SearchResultScreen = ({ route }) => {
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const [modalData, setModalData] = React.useState([]);
  const { theme } = useThemeContext();

  const { searchQuery } = route.params || '';

  const { isLoading, error, data } = useQuery(
    ['wordDefinitions', searchQuery],
    () => getWordDefinitions(searchQuery)
  );

  const handleWordDefinitionHoldPress = (word) => {
    console.log('clicked', word);
    setModalData({
      word,
    });
    setIsModalVisible(true);
  };

  const handleModalClickCancel = () => {
    setIsModalVisible(false);
  };

  const handleModalClickOk = (word, translation, tags) => {
    setIsModalVisible(false);
    insertIntoVocabulary(word, translation, tags);
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
      ) : error ? (
        <View style={styles.noDefinitions}>
          <ThemedText
            value="Error! Check your Internet connection"
            color={theme.text}
            style={styles.noDefinitionsText}
          />
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
        {...modalData}
        onClickCancel={handleModalClickCancel}
        onClickOk={handleModalClickOk}
      />
    </View>
  );
};

export default SearchResultScreen;
