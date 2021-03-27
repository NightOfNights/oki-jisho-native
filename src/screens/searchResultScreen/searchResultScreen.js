import * as React from 'react';
import { Text, View, StyleSheet, ActivityIndicator } from 'react-native';
import { getWordDefinitions } from '../../api/apiRequests';
import { greenColor } from '../../constants/colors';

const SearchResultScreen = ({ route }) => {
  const { searchQuery } = route.params || '';
  const [searchResults, setSearchResults] = React.useState([]);
  const [loading, setLoading] = React.useState(
    searchQuery && searchQuery.length > 0
  );

  React.useEffect(() => {
    if (searchQuery) {
      const wordDefinitions = getWordDefinitions(searchQuery);
      wordDefinitions.then((result) => {
        setSearchResults(result);
        setLoading(false);
      });
    }
  }, []);

  const words = searchResults.map((searchResult, idx) => (
    <Text
      key={idx}
    >{`${searchResult.slug} ${searchResult.japanese[0].reading}`}</Text>
  ));

  return (
    <View style={styles.container}>
      <Text>{searchQuery ? searchQuery : 'Home!'}</Text>
      {loading ? <ActivityIndicator size="large" color={greenColor} /> : words}
    </View>
  );
};

export default SearchResultScreen;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});
