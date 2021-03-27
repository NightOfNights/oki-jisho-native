import * as React from 'react';
import RootNavigation from './tabs/rootNavigation';
import { registerRootComponent } from 'expo';

const App = () => {
  return <RootNavigation />;
};

export default registerRootComponent(App);
