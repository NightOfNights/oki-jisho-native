import * as React from 'react';
import { TextInput } from 'react-native';

const SearchInput = ({ style, onSubmitEditing }) => {
  const [searchInputValue, setSearchInputValue] = React.useState('');

  const handleSubmitEditing = () => {
    onSubmitEditing(searchInputValue);
    setSearchInputValue('');
  };

  return (
    <TextInput
      style={style}
      value={searchInputValue}
      placeholder="English, Japanese, Romaji, words or text"
      onSubmitEditing={handleSubmitEditing}
      onChangeText={setSearchInputValue}
    />
  );
};

export default SearchInput;
