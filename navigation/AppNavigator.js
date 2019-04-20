import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import MainTabNavigator from './MainTabNavigator';
import { createStackNavigator} from 'react-navigation';
import AuthScreen from '../screens/AuthScreen';
import HomeScreen from '../screens/HomeScreen';

const AuthStack = createStackNavigator({
  Auth: AuthScreen
});

const HomeStack = createStackNavigator({
  Home: HomeScreen
})

export default createAppContainer(createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  Main: MainTabNavigator,
  Auth: AuthStack,
  Home: HomeStack
},
{
  initialRouteName: "Auth"
}));

