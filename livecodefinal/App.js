import React, { Component } from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import store from './src/redux/store';
import StackNavigator from './src/components/StackNavigator';
import HomeScreen from './src/components/HomeScreen';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <StackNavigator />
      </Provider>
    );
  }
}
