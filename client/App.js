import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignUpScreen from './src/views/screens/SignUpScreen';
import SignInScreen from './src/views/screens/SignInScreen';
import Drugs from './src/views/screens/Drugs'
const Stack = createStackNavigator();
    const App = () => {
      return (
        <NavigationContainer>
          <Stack.Navigator screenOptions={{header: () => null}}>
            <Stack.Screen name="SignIn" component={SignInScreen} />
            <Stack.Screen name="SignUp" component={SignUpScreen} />
            <Stack.Screen name="Drugs" component={Drugs} />
          </Stack.Navigator>
        </NavigationContainer>
      )
    }
    export default App;
