import * as React from 'react';
import RootNavigation from './tabs/rootNavigation';
import { registerRootComponent } from 'expo';
import { ThemeProvider } from './providers/themeProvider';
import { QueryClient, QueryClientProvider } from 'react-query';
import { LogBox } from 'react-native';
import { createVocabularyTable } from './storage/sqlite';

const queryClient = new QueryClient();

try {
  LogBox.ignoreLogs(['Setting a timer']);
} catch (e) {
  console.log(e.message);
}

const App = () => {
  React.useEffect(() => {
    createVocabularyTable();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <RootNavigation />
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default registerRootComponent(App);
