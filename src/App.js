import * as React from 'react';
import RootNavigation from './tabs/rootNavigation';
import { registerRootComponent } from 'expo';
import { ThemeProvider } from './providers/themeProvider';

const App = () => {
  return (
    <ThemeProvider>
      <RootNavigation />
    </ThemeProvider>
  );
};

export default registerRootComponent(App);
