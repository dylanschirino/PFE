
import React, { Component } from 'react';
import {
  AppRegistry,
  NavigatorIOS,
  AsyncStorage,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
var firstTime = require('react-native-catch-first-time');
var DeviceInfo = require('react-native-device-info');

import Introduction from "./app/components/Introduction";
import Login from "./app/components/login/Login";
export default class InTheWallet extends Component {
  constructor(){
    super();
    this.state = {firstLaunch: null};
  }
  componentWillMount(){
    var that = this;
    firstTime(DeviceInfo.getUniqueID())
    .catch(function(response) {
      that.setState({firstLaunch:true})
    })
  }
  render() {
    if (this.state.firstLaunch == null) {
      return(
        <NavigatorIOS
        initialRoute = {{
          component: Login,
          title:'Login',
          navigationBarHidden:true,
        }}
       style={{ flex:1,}}/>
      )
    }
    else if ( this.state.firstLaunch == 1 ){
      return(
        <NavigatorIOS
        initialRoute = {{
          component: Introduction,
          title:'Introduction',
          navigationBarHidden:true,
        }}
       style={{ flex:1,}}/>
      )
    }
      else{
        return(
          <NavigatorIOS
          initialRoute = {{
            component: Login,
            title:'Login',
            navigationBarHidden:true,
          }}
         style={{ flex:1,}}/>
        )
      }
  }
}

AppRegistry.registerComponent('InTheWallet', () => InTheWallet);
