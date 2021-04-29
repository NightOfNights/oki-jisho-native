import AsyncStorage from '@react-native-async-storage/async-storage';

const maxSearchHistoryAmount = 20;
const searchHistoryKey = 'searchHistory';

const themeKey = 'theme';

export const getSearchHistory = async () => {
  try {
    const searchHistory = await AsyncStorage.getItem(searchHistoryKey);
    return searchHistory != null ? JSON.parse(searchHistory) : null;
  } catch (error) {
    console.log(error.message);
  }
};

export const updateSearchHistory = async (
  searchHistoryItem,
  updateSearchHistoryState
) => {
  try {
    let currentSearchHistory = (await getSearchHistory()) || [];

    currentSearchHistory = currentSearchHistory.filter(
      (currentSearchHistoryItem) =>
        currentSearchHistoryItem.query !== searchHistoryItem.query
    );

    const updatedSearchHistory =
      currentSearchHistory.length === 0
        ? [searchHistoryItem]
        : currentSearchHistory.length + 1 > maxSearchHistoryAmount
        ? [searchHistoryItem, ...currentSearchHistory].slice(0, -1)
        : [searchHistoryItem, ...currentSearchHistory];

    console.log(updatedSearchHistory, ' 2');

    await AsyncStorage.setItem(
      searchHistoryKey,
      JSON.stringify(updatedSearchHistory)
    );

    if (updateSearchHistoryState) updateSearchHistoryState();
  } catch (error) {
    console.log(error.message);
  }
};

export const clearSearchHistory = async () => {
  try {
    await AsyncStorage.removeItem(searchHistoryKey);
  } catch (error) {
    console.log(error.message);
  }
};

export const setThemeToLocalStorage = async (theme) => {
  try {
    await AsyncStorage.setItem(themeKey, theme);
  } catch (error) {
    console.log(error.message);
  }
};

export const getTheme = async () => {
  try {
    const themeValue = await AsyncStorage.getItem(themeKey);
    return themeValue;
  } catch (error) {
    console.log(error.message);
  }
};
