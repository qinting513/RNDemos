/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import Tab from './src/components/TabNavigatorView';
// import StackNavigator from './src/components/StackNavigator';
// import StackNavigatorWithParam from './src/components/StackNavigatorWithParams';
// import NavigationOptions from './src/components/NavigationOptions';
import TitleView from './src/components/TitleView';

export default class App extends Component {
  render() {
    return (
    //  <Tab />
    // <StackNavigator />
    // <StackNavigatorWithParam />
    // <NavigationOptions />
     <TitleView /> 
    );
  }
}
