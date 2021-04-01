import * as React from 'react';
import { DefaultTheme } from '@react-navigation/native';
import { darkBlue, basicWhite, basicBlack, darkTag } from '../constants/colors';

const darkThemeNavigation = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: darkBlue,
    text: basicWhite,
    border: darkBlue,
    card: darkBlue,
  },
};

const lightThemeNavigation = { ...DefaultTheme };

const themes = {
  light: {
    statusBarBackground: basicWhite,
    statusBarText: 'dark-content',
    text: basicBlack,
    navigation: lightThemeNavigation,
    tagColor: darkTag,
  },
  dark: {
    statusBarBackground: darkBlue,
    statusBarText: 'default',
    text: basicWhite,
    navigation: darkThemeNavigation,
    tagColor: darkTag,
  },
};

export const ThemeContext = React.createContext(null);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = React.useState(themes.light);
  const [themeName, setThemeName] = React.useState('light');
  const toggleTheme = () => {
    if (themeName === 'dark') {
      setTheme(themes.light);
      setThemeName('light');
    } else {
      setTheme(themes.dark);
      setThemeName('dark');
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
