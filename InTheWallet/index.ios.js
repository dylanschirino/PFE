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
  StatusBar,
  Text,
  View
} from 'react-native';

import Introduction from "./Scene/Introduction";
import Introduction2 from "./Scene/Introduction2";
import Introduction3 from './Scene/Introduction3';
import Introduction4 from './Scene/Introduction4';
import Subscription from './Scene/login/Subscription';

export default class InTheWallet extends Component {
  render() {
    return (
      <View style={styles.svg}>
      <StatusBar barStyle="dark-content"
      />
      <Navigator
        initialRoute={{screen: 'Introduction'}}
        renderScene={(route, nav) => {return this.renderScene(route, nav)}}
      />
      </View>
    )
  }
    // Where everything is happening, the renderScene
    renderScene(route,nav) {
    switch (route.screen) {
      case "Introduction":
        return <Introduction navigator={nav} />
      case "Introduction2":
        return <Introduction2 navigator={nav} />
      case "Introduction3":
        return <Introduction3 navigator={nav} />
      case "Introduction4":
        return <Introduction4 navigator={nav} />
      case "Subscription":
        return <Subscription navigator={nav} />
      }
  }
}

const styles = StyleSheet.create({
  svg: {
    borderWidth:1,
    borderColor:'#235182',
    borderRadius:5,
    marginTop:35,// 15px on arrive a la StatusBar + 20px de margin
    margin:20,
    flex:1,
  },
});

AppRegistry.registerComponent('InTheWallet', () => InTheWallet);
