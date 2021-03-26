import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import {
  HomeScreen,
  SettingsScreen,
  MapScreen,
  SearchScreen,
  VocabularyScreen,
} from '../screens';
import { greenColor } from '../constants/colors';

const Tab = createBottomTabNavigator();

const tabBarOptions = {
  activeTintColor: greenColor,
};

const screenOptions = ({ route }) => ({
  tabBarIcon: ({ focused, color, size }) => {
    let iconName;

    switch (route.name) {
      case 'Search':
        iconName = focused ? 'search' : 'search-outline';
        break;
      case 'Settings':
        iconName = focused ? 'settings' : 'settings-outline';
        break;
      case 'Map':
        iconName = focused ? 'location' : 'location-outline';
        break;
      case 'Vocabulary':
        iconName = focused ? 'copy' : 'copy-outline';
    }

    return <Ionicons name={iconName} size={size} color={color} />;
  },
});

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={tabBarOptions}
        screenOptions={screenOptions}
      >
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="Vocabulary" component={VocabularyScreen} />
        <Tab.Screen name="Map" component={MapScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
