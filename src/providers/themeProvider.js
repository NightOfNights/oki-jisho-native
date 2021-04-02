import * as React from 'react';
import { DefaultTheme } from '@react-navigation/native';
import {
  darkBlue,
  basicWhite,
  basicBlack,
  lightTag,
  darkTag,
} from '../constants/colors';

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
    tagColor: lightTag,
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
  const toggleTheme = (themeValue) => {
    if (themeValue === 'dark' || themeValue === 'light') {
      if (themeValue === 'dark') {
        console.log('dark1');
        setTheme(themes.dark);
        setThemeName('dark');
      } else {
        console.log('light1');
        setTheme(themes.light);
        setThemeName('light');
      }
    } else {
      if (themeName === 'dark') {
        setTheme(themes.light);
        setThemeName('light');
      } else {
        setTheme(themes.dark);
        setThemeName('dark');
      }
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
