import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import { getWordDefinitions } from '../../api/apiRequests';
import { lightGreen } from '../../constants/colors';
import { useQuery } from 'react-query';
import { ThemedText, WordDefinition } from '../../components';
import { ThemeContext } from '../../providers/themeProvider';

const SearchResultScreen = ({ route }) => {
  const { searchQuery } = route.params || '';
  const { theme } = React.useContext(ThemeContext);

  const { isLoading, error, data } = useQuery(
    ['wordDefinitions', searchQuery],
    () => getWordDefinitions(searchQuery)
  );

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

const styles = StyleSheet.create({
  container: { flex: 1 },
  loadingIndicatior: {
    justifyContent: 'center',
    height: '90%',
  },
  searchQueryText: { fontSize: 20, marginLeft: 10, marginVertical: 10 },
  noDefinitions: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '80%',
  },
  noDefinitionsText: {
    fontSize: 18,
  },
});

export default SearchResultScreen;
