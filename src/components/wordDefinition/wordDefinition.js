import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import ThemedText from '../themedText/themedText';
import { gray, basicWhite } from '../../constants/colors';

const WordDefinition = ({ japanese, jlpt, senses, textColor }) => {
  const { word, reading } = japanese;

  const jlptTags = jlpt.map((jlptTag, idx) => <Text key={idx}>{jlptTag}</Text>);

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
          ) : undefined}
        </Text>
      </View>
    );
  });

  return (
    <View style={styles.container}>
      <View style={styles.leftContent}>
        <View>
          {word ? (
            <ThemedText
              value={word}
              color={textColor}
              style={{ ...styles.wordText, ...styles.leftContentText }}
            />
          ) : undefined}
          <ThemedText
            value={reading}
            color={textColor}
            style={
              word
                ? { ...styles.readingText, ...styles.leftContentText }
                : { ...styles.wordText, ...styles.leftContentText }
            }
          />
          {jlptTags}
        </View>
      </View>
      <View style={styles.rightContent}>
        <View style={styles.definitions}>{definitionList}</View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    marginBottom: 10,
    paddingTop: 10,
    borderColor: basicWhite,
    borderTopWidth: 1,
  },
  leftContent: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  wordText: {
    fontSize: 18,
  },
  readingText: {
    fontSize: 12,
  },
  leftContentText: {
    textAlign: 'center',
  },
  rightContent: {
    flex: 2,
    paddingHorizontal: 10,
  },
  definitions: {
    flex: 1,
    flexDirection: 'column',
  },
  wordDefinitionCard: {
    marginBottom: 10,
  },
  partsOfSpeechText: {
    color: gray,
    fontSize: 11,
  },
  infoText: {
    color: gray,
    fontSize: 12,
  },
});

export default WordDefinition;
