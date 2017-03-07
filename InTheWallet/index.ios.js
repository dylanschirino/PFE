/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Introduction from "./Scene/Introduction";
import Introduction2 from "./Scene/Introduction2";

export default class InTheWallet extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{screen: 'Introduction'}}
        renderScene={(route, nav) => {return this.renderScene(route, nav)}}
      />
    )
  }
    // Where everything is happening, the renderScene
    renderScene(route,nav) {
    switch (route.screen) {
      case "Introduction":
        return <Introduction navigator={nav} />
      case "Introduction2":
        return <Introduction2 navigator={nav} />
      }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('InTheWallet', () => InTheWallet);
