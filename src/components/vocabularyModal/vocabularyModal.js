import * as React from 'react';
import { Modal, View, Button, TextInput, Alert } from 'react-native';
import ThemedText from '../themedText/themedText';
import { lightGreen, red } from '../../constants/colors';
import styles from './styles';

const VocabularyModal = ({
  isVisible,
  modalTitle,
  edit,
  id,
  word,
  translation,
  tags,
  onClickCancel,
  onClickOk,
  onClickDelete,
}) => {
  const [wordTranslation, setWordTranslation] = React.useState(
    translation || ''
  );
  const [wordTags, setWordTags] = React.useState(tags || '');

  React.useEffect(() => {
    setWordTranslation(translation);
    setWordTags(tags);
  }, [translation, tags]);

  const handleClickCancel = () => {
    onClickCancel();
  };

  const handleClickOk = () => {
    if (edit) {
      onClickOk(
        id,
        wordTranslation ? wordTranslation : 'No translation',
        wordTags ? wordTags : ''
      );
    } else {
      onClickOk(
        word,
        wordTranslation ? wordTranslation : 'No translation',
        wordTags ? wordTags : ''
      );
      setWordTranslation('');
      setWordTags('');
    }
  };

  const handleClickDelete = () => {
    Alert.alert('Alert', `Delete ${word} from vocabulary?`, [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: () => {
          onClickDelete(id);
        },
      },
    ]);
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
          {edit ? (
            <View style={styles.buttons}>
              <View style={styles.buttonContainer}>
                <Button
                  title="Delete"
                  onPress={handleClickDelete}
                  color={red}
                />
              </View>
            </View>
          ) : null}
          <View style={styles.buttons}>
            <View style={styles.buttonContainer}>
              <Button
                title="Cancel"
                onPress={handleClickCancel}
                color={lightGreen}
              />
            </View>
            <View style={styles.buttonContainer}>
              <Button title="Ok" onPress={handleClickOk} color={lightGreen} />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default VocabularyModal;
