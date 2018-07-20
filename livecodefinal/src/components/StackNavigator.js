import React from 'react';
import {
  createStackNavigator,
} from 'react-navigation';
import { View, Text } from 'react-native';

import Game from './Game';
import HomeScreen from './HomeScreen';

export default class StackNavigator extends React.Component {
  render() {
    return (
      <Navigator />
    )
  }
}

const Navigator = createStackNavigator({
  HomeScreen: HomeScreen,
  Game: Game,
}, {
  initialRouteName: 'HomeScreen'
});
