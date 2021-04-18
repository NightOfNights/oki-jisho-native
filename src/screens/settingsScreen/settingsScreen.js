import * as React from 'react';
import { View } from 'react-native';
import { ThemedText } from '../../components';
import { ThemeContext } from '../../providers/themeProvider';
import { Picker } from '@react-native-picker/picker';
import styles from './styles';

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

export default SettingsScreen;
