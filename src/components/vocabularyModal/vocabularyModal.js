import * as React from 'react';
import { Modal, View, Button, TextInput } from 'react-native';
import ThemedText from '../themedText/themedText';
import { lightGreen } from '../../constants/colors';
import styles from './styles';

const VocabularyModal = ({
  isVisible,
  modalTitle,
  word,
  translation,
  tags,
  textColor,
  onCancelClick,
}) => {
  const [wordTranslation, setWordTranslation] = React.useState(
    translation || ''
  );
  const [wordTags, setWordTags] = React.useState(tags || '');

  const handleCancelClick = () => {
    onCancelClick();
  };

  return (
    <Modal visible={isVisible} animationType="slide" transparent={true}>
      <View style={styles.modalWrapper}>
        <View style={styles.modalContent}>
          <ThemedText value={modalTitle} style={styles.modalTitle} />
          <View style={styles.modalInputContainer}>
            <ThemedText value="Word:" style={styles.modalInputLabel} />
            <TextInput
              value={word}
              editable={false}
              style={styles.modalInput}
            />
          </View>
          <View style={styles.modalInputContainer}>
            <ThemedText value="Translation:" style={styles.modalInputLabel} />
            <TextInput
              value={wordTranslation}
              onChangeText={setWordTranslation}
              style={styles.modalInput}
            />
          </View>
          <View>
            <ThemedText
              value="Tags (through comma):"
              style={styles.modalInputLabel}
            />
            <TextInput
              value={wordTags}
              onChangeText={setWordTags}
              style={styles.modalInput}
            />
          </View>
          <View style={styles.buttons}>
            <View style={styles.buttonContainer}>
              <Button
                title="Cancel"
                onPress={handleCancelClick}
                color={lightGreen}
              />
            </View>
            <View style={styles.buttonContainer}>
              <Button title="Ok" color={lightGreen} />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default VocabularyModal;
