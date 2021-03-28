import * as React from 'react';
import { Text, View, StyleSheet, ActivityIndicator } from 'react-native';
import { getWordDefinitions } from '../../api/apiRequests';
import { lightGreen } from '../../constants/colors';
import { useQuery } from 'react-query';

const SearchResultScreen = ({ route }) => {
  const { searchQuery } = route.params || '';

  const { isLoading, error, data } = useQuery(
    ['wordDefinitions', searchQuery],
    getWordDefinitions
  );

  const words = data
    ? data.map((searchResult, idx) => (
        <Text
          key={idx}
        >{`${searchResult.slug} ${searchResult.japanese[0].reading}`}</Text>
      ))
    : [];

  if (error) {
    return <Text>Error</Text>;
  }

  return (
    <View style={styles.container}>
      <Text>{searchQuery ? searchQuery : 'Home!'}</Text>
      {isLoading ? (
        <ActivityIndicator size="large" color={lightGreen} />
      ) : (
        words
      )}
    </View>
  );
};

export default SearchResultScreen;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});
