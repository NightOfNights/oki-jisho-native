import * as React from 'react';
import {
  View,
  Button,
  ScrollView,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import { lightGreen } from '../../constants/colors';
import { ThemeContext } from '../../providers/themeProvider';
import { ThemedText, SearchInput } from '../../components';
import {
  getSearchHistory,
  updateSearchHistory,
  clearSearchHistory,
} from '../../storage/asyncStorage';
import styles from './styles';

const SearchScreen = ({ navigation }) => {
  const [searchHistory, setSearchHistory] = React.useState([]);

  async function getSearchHistoryFromAsyncStorage() {
    const searchHistoryFromAsyncStorage = await getSearchHistory();
    setSearchHistory(searchHistoryFromAsyncStorage);
  }

  React.useEffect(() => {
    getSearchHistoryFromAsyncStorage();
  }, []);

  const { theme } = React.useContext(ThemeContext);

  const navigateToResult = (query) => {
    navigation.navigate('Result', {
      searchQuery: query,
    });
  };

  const handleSubmitEditing = (searchInput) => {
    console.log(searchInput);
    const currentDate = new Date().toISOString().slice(0, 10);
    updateSearchHistory(
      { query: searchInput, date: currentDate },
      getSearchHistoryFromAsyncStorage
    );

    if (searchInput) {
      navigateToResult(searchInput);
    }
  };

  const handleClearSearchHistoryButtonClick = () => {
    clearSearchHistory();
    getSearchHistoryFromAsyncStorage();
  };

  const searchHistoryElement = searchHistory
    ? searchHistory.map((searchHistoryItem) => (
        <TouchableOpacity
          key={searchHistoryItem.query}
          style={styles.searchHistoryWrapper}
          activeOpacity={1}
        >
          <TouchableOpacity
            onPress={() => navigateToResult(searchHistoryItem.query)}
            style={styles.searchHistory}
          >
            <ThemedText value={searchHistoryItem.query} color={theme.text} />
            <ThemedText value={searchHistoryItem.date} color={theme.text} />
          </TouchableOpacity>
        </TouchableOpacity>
      ))
    : [];

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <SearchInput
          style={styles.searchInput}
          onSubmitEditing={handleSubmitEditing}
        />
        <View style={styles.clearButtonView}>
          <Button
            title="Clear history"
            color={lightGreen}
            onPress={handleClearSearchHistoryButtonClick}
          />
        </View>
        <ScrollView>{searchHistoryElement}</ScrollView>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SearchScreen;
