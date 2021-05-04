import { useContext } from 'react';
import { ThemeContext } from '../providers/themeProvider';

export const useThemeContext = () => {
  const { theme, themeName, toggleTheme } = useContext(ThemeContext);
  return { theme, themeName, toggleTheme };
};
