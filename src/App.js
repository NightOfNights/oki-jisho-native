import * as React from 'react';
import RootNavigation from './tabs/rootNavigation';
import { registerRootComponent } from 'expo';
import { ThemeProvider } from './providers/themeProvider';
import { QueryClient, QueryClientProvider } from 'react-query';
//import { LogBox } from 'react-native';

const queryClient = new QueryClient();

//LogBox.ignoreLogs(['Setting a timer']);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <RootNavigation />
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default registerRootComponent(App);
