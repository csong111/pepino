import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import MainTabNavigator from './MainTabNavigator';
import { createStackNavigator} from 'react-navigation';
import AuthScreen from '../screens/AuthScreen';

const AuthStack = createStackNavigator({
    Auth: AuthScreen
});

export default createAppContainer(createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  Main: MainTabNavigator,
  Auth: AuthStack
},
{
  initialRouteName: "Auth"
}));

