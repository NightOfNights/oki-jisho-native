import * as React from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Button,
  Keyboard,
  TouchableWithoutFeedback,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {
  basicWhite,
  textInputBorderShadow,
  lightGreen,
} from '../../constants/colors';
import { ThemeContext } from '../../providers/themeProvider';
import { ThemedText } from '../../components';

const SearchScreen = ({ navigation }) => {
  const [searchInput, onSearchInputChange] = React.useState('');

  const { theme } = React.useContext(ThemeContext);

  const navigateToResult = (query) => {
    navigation.navigate('Result', {
      searchQuery: query,
    });
  };

  const handleSubmitEditing = () => {
    console.log(searchInput);

    if (searchInput) {
      navigateToResult(searchInput);
    }
  };

  const testData = [
    { query: 'neko', date: '2021-04-02' },
    { query: '首相', date: '2021-04-02' },
  ];

  const searchHistory = testData.map((searchHistoryItem, idx) => (
    <TouchableOpacity
      key={idx}
      style={styles.searchHistory}
      onPress={() => navigateToResult(searchHistoryItem.query)}
    >
      <ThemedText value={searchHistoryItem.query} color={theme.text} />
      <ThemedText value={searchHistoryItem.date} color={theme.text} />
    </TouchableOpacity>
  ));

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <TextInput
          style={styles.searchInput}
          placeholder="English, Japanese, Romaji, words or text"
          onSubmitEditing={handleSubmitEditing}
          onChangeText={onSearchInputChange}
          onBlur={() => Keyboard.dismiss}
        />
        <View style={styles.clearButtonView}>
          <Button title="Clear history" color={lightGreen} />
        </View>
        <ScrollView>{searchHistory}</ScrollView>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  searchInput: {
    alignSelf: 'stretch',
    height: 40,
    margin: 12,
    paddingHorizontal: 10,
    borderRadius: 3,
    backgroundColor: basicWhite,
    shadowColor: textInputBorderShadow,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  clearButtonView: {
    alignSelf: 'stretch',
    paddingHorizontal: 12,
    marginBottom: 10,
  },
  searchHistory: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    borderTopWidth: 1,
    borderColor: basicWhite,
    paddingVertical: 15,
  },
});

export default SearchScreen;
