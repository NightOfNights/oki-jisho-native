import * as React from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Button,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import { basicWhite, textInputBorderShadow } from '../../constants/colors';
import { ThemeContext } from '../../providers/themeProvider';
import { ThemedText } from '../../components';

const SearchScreen = ({ navigation }) => {
  const [searchInput, onSearchInputChange] = React.useState('');
  const [test, setTest] = React.useState('false');

  const { theme, toggleTheme } = React.useContext(ThemeContext);

  const handleSubmitEditing = () => {
    setTest((prev) => !prev);
    console.log(searchInput);

    if (searchInput) {
      navigation.navigate('Result', {
        searchQuery: searchInput,
      });
    }
  };

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
        <View style={styles.clearButton}>
          <Button title="Clear history" />
        </View>
        <Button title="test" onPress={() => navigation.navigate('Result')} />
        <Button title="toggle" onPress={toggleTheme} />
        <ThemedText value={test ? '1' : '3'} color={theme.text} />
        <ThemedText value="Search!" color={theme.text} />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center' },
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
  clearButton: { alignSelf: 'stretch', paddingHorizontal: 12 },
});

export default SearchScreen;