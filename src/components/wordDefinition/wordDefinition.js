import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import ThemedText from '../themedText/themedText';
import ThemedTag from '../themedTag/themedTag';
import styles from './styles';

const WordDefinition = ({
  japanese,
  common,
  jlpt,
  senses,
  textColor,
  tagColor,
  onHoldPress,
}) => {
  const handleHoldPress = () => {
    onHoldPress(wordText ? wordText : reading);
  };

  const { word, reading } = japanese;
  const wordText = reading ? `${word}(${reading})` : word;

  const definitionList = senses.map((sense, idx) => {
    const englishDefinitions = sense.english_definitions.join('; ');
    const partsOfSpeech = sense.parts_of_speech.join(', ');
    const info = sense.tags.join(', ') + ' ' + sense.info.join(', ');

    return (
      <View key={idx} style={styles.wordDefinitionCard}>
        <Text style={styles.partsOfSpeechText}>{partsOfSpeech}</Text>
        <Text>
          <ThemedText
            value={`${idx + 1}. ${englishDefinitions}`}
            color={textColor}
          />
          {info.split(' ').join('') ? (
            <Text style={styles.infoText}>{` ${info}`}</Text>
          ) : null}
        </Text>
      </View>
    );
  });

  return (
    <View style={styles.container}>
      <TouchableOpacity onLongPress={handleHoldPress} style={styles.wrapper}>
        <View style={styles.leftContent}>
          <View>
            {word ? (
              <ThemedText
                value={word}
                color={textColor}
                style={{ ...styles.wordText, ...styles.leftContentText }}
              />
            ) : null}
            <ThemedText
              value={reading}
              color={textColor}
              style={
                word
                  ? { ...styles.readingText, ...styles.leftContentText }
                  : { ...styles.wordText, ...styles.leftContentText }
              }
            />
            <View style={styles.tags}>
              {jlpt.length ? (
                <ThemedTag value={jlpt[0]} tagColor={tagColor} />
              ) : null}
              {common ? (
                <ThemedTag value="common word" tagColor={tagColor} />
              ) : null}
            </View>
          </View>
        </View>
        <View style={styles.rightContent}>
          <View style={styles.definitions}>{definitionList}</View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default WordDefinition;
