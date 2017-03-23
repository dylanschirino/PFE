
import React, { Component } from 'react';
import {
  AppRegistry,
  NavigatorIOS,
  View,
  Text,
  StyleSheet,
} from 'react-native';

import Introduction from "./app/components/Introduction";

export default class InTheWallet extends Component {
  render() {
    return (
      <NavigatorIOS
        initialRoute = {{
          component: Introduction,
          title:'Introduction',
          navigationBarHidden:true,
        }}
       style={{ flex:1,}}/>
    )
  }
}

AppRegistry.registerComponent('InTheWallet', () => InTheWallet);
