import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import ThemedText from '../themedText/themedText';
import { gray, basicWhite } from '../../constants/colors';
import ThemedTag from '../themedTag/themedTag';

const WordDefinition = ({
  japanese,
  common,
  jlpt,
  senses,
  textColor,
  tagColor,
}) => {
  const { word, reading } = japanese;

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
          <View style={styles.tags}>
            {jlpt.length ? (
              <ThemedTag value={jlpt[0]} tagColor={tagColor} />
            ) : undefined}
            {common ? (
              <ThemedTag value="common word" tagColor={tagColor} />
            ) : undefined}
          </View>
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
    fontSize: 20,
  },
  readingText: {
    fontSize: 13,
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
  tags: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
  },
});

export default WordDefinition;
