import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from '@expo/vector-icons/Ionicons';
import {
  HomeScreen,
  SettingsScreen,
  MapScreen,
  SearchScreen,
  VocabularyScreen,
  SearchResultScreen,
} from '../screens';
import { greenColor } from '../constants/colors';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

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

const SearchNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Find" component={SearchScreen} />
      <Stack.Screen name="Result" component={SearchResultScreen} />
    </Stack.Navigator>
  );
};

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={tabBarOptions}
        screenOptions={screenOptions}
      >
        <Tab.Screen name="Search" component={SearchNavigator} />
        <Tab.Screen name="Vocabulary" component={VocabularyScreen} />
        <Tab.Screen name="Map" component={MapScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
