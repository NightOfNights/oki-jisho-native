import * as React from 'react';
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  Button,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';

const SearchScreen = ({ navigation }) => {
  const [searchInput, onSearchInputChange] = React.useState('');
  const [test, setTest] = React.useState('false');

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
        <Text>{test ? '1' : '3'}</Text>
        <Text>Search!</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', paddingTop: 25 },
  searchInput: {
    alignSelf: 'stretch',
    height: 40,
    margin: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderRadius: 3,
  },
  clearButton: { alignSelf: 'stretch', paddingHorizontal: 12 },
});

export default SearchScreen;
