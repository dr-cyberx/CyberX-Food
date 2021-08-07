// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SearchScreen from './src/screen/SearchScreen';

const Stack = createStackNavigator();

function App() { 
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="CyberX-Food" component={SearchScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;