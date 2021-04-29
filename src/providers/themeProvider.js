import * as React from 'react';
import { DefaultTheme } from '@react-navigation/native';
import {
  darkBlue,
  basicWhite,
  basicBlack,
  lightTag,
  darkTag,
} from '../constants/colors';
import { setThemeToLocalStorage, getTheme } from '../storage/asyncStorage';

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
    themeName: 'light',
    statusBarBackground: basicWhite,
    statusBarText: 'dark-content',
    text: basicBlack,
    navigation: lightThemeNavigation,
    tagColor: lightTag,
  },
  dark: {
    themeName: 'dark',
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

  const getThemeFromLocalStorage = async () => {
    const themeValue = await getTheme();
    setTheme(themeValue == 'dark' ? themes.dark : themes.light);
  };

  React.useEffect(() => {
    getThemeFromLocalStorage();
  }, []);

  const toggleTheme = (themeValue) => {
    if (themeValue === 'dark' || themeValue === 'light') {
      if (themeValue === 'dark') {
        setTheme(themes.dark);
        setThemeToLocalStorage('dark');
      } else {
        setTheme(themes.light);
        setThemeToLocalStorage('light');
      }
    } else {
      if (theme.themeName === 'dark') {
        setTheme(themes.light);
        setThemeToLocalStorage('light');
      } else {
        setTheme(themes.dark);
        setThemeToLocalStorage('dark');
      }
    }
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        themeName:
          theme.themeName.charAt(0).toUpperCase() + theme.themeName.slice(1),
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
