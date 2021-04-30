import { StyleSheet } from 'react-native';
import {
  basicWhite,
  modalShadow,
  modalBg,
  gray,
  textInputBorderShadow,
} from '../../constants/colors';

const styles = StyleSheet.create({
  modalWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '80%',
    margin: 20,
    padding: 35,
    backgroundColor: modalBg,
    borderRadius: 20,
    shadowColor: modalShadow,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 18,
    textAlign: 'center',
  },
  modalInputContainer: {
    marginVertical: 10,
  },
  modalInputLabel: {
    color: gray,
    fontSize: 12,
  },
  modalInput: {
    padding: 5,
    borderRadius: 3,
    backgroundColor: basicWhite,
    shadowColor: textInputBorderShadow,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  buttons: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  buttonContainer: {
    flex: 1,
    paddingHorizontal: 5,
  },
});

export default styles;
