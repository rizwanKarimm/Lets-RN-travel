import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './src/welcome/WelcomeScreen'; 
import NavigationBox from './src/navigation/NavigationBox'; 

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="mytab" component={NavigationBox} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;