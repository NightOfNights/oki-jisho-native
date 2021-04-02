import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { ThemedText } from '../../components';
import { ThemeContext } from '../../providers/themeProvider';
import { Picker } from '@react-native-picker/picker';
import { basicWhite, gray, transparent } from '../../constants/colors';

const SettingsScreen = () => {
  const { theme, themeName, toggleTheme } = React.useContext(ThemeContext);
  const [settingsTheme, setSettingsTheme] = React.useState(themeName);

  const handlePickerValueChange = (value) => {
    if (value !== settingsTheme) {
      console.log(value);
      toggleTheme(value);
      setSettingsTheme(value);
    }
  };

  return (
    <View style={styles.container}>
      <ThemedText
        value="Settings"
        color={theme.text}
        style={styles.settingsText}
      />
      <View style={styles.settingsCard}>
        <ThemedText
          value="Theme"
          color={theme.text}
          style={styles.settingsName}
        />
        <Picker
          selectedValue={settingsTheme}
          onValueChange={(itemValue) => handlePickerValueChange(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Light" value="light" />
          <Picker.Item label="Dark" value="dark" />
        </Picker>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  settingsText: { fontSize: 20, marginVertical: 10, marginLeft: 10 },
  settingsCard: {
    borderColor: basicWhite,
    borderTopWidth: 1,
    paddingLeft: 12,
    paddingTop: 10,
  },
  settingsName: {
    fontSize: 16,
  },
  picker: {
    height: 40,
    width: '100%',
    color: gray,
    backgroundColor: transparent,
  },
});

export default SettingsScreen;
