import * as React from 'react';
import { Text, View, ActivityIndicator, ScrollView } from 'react-native';
import { getWordDefinitions } from '../../api/apiRequests';
import { lightGreen } from '../../constants/colors';
import { useQuery } from 'react-query';
import { ThemedText, WordDefinition } from '../../components';
import { ThemeContext } from '../../providers/themeProvider';
import {
  insertIntoVocabulary,
  readFromVocabulary,
  updateRowInVocabulary,
  deleteRowFromVocabulary,
} from '../../storage/sqlite';
import styles from './styles';

const SearchResultScreen = ({ route }) => {
  const { searchQuery } = route.params || '';
  const { theme } = React.useContext(ThemeContext);

  const { isLoading, error, data } = useQuery(
    ['wordDefinitions', searchQuery],
    () => getWordDefinitions(searchQuery)
  );

  const handleWordDefinitionHoldPress = (word) => {
    console.log('clicked', word);
    //deleteRowFromVocabulary(1);
    //insertIntoVocabulary(word, 'test', 'test');
    //updateRowInVocabulary(2, 'test2', 'test2');
    readFromVocabulary();
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
        <React.Fragment>
          <ScrollView>{words}</ScrollView>
        </React.Fragment>
      ) : (
        <View style={styles.noDefinitions}>
          <ThemedText
            value="Definitions not found!"
            color={theme.text}
            style={styles.noDefinitionsText}
          />
        </View>
      )}
    </View>
  );
};

export default SearchResultScreen;
