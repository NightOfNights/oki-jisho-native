import * as React from 'react';
import {
  TextInput,
  View,
  Button,
  ScrollView,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import { lightGreen } from '../../constants/colors';
import { ThemeContext } from '../../providers/themeProvider';
import { ThemedText } from '../../components';
import styles from './styles';

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
        />
        <View style={styles.clearButtonView}>
          <Button title="Clear history" color={lightGreen} />
        </View>
        <ScrollView>{searchHistory}</ScrollView>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SearchScreen;
