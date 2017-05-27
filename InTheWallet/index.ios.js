
import React, { Component } from 'react';
import {
  AppRegistry,
  AsyncStorage,
  NavigatorIOS,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
var firstTime = require('react-native-catch-first-time');
var DeviceInfo = require('react-native-device-info');

import Introduction from "./app/components/Introduction";
import Login from "./app/components/login/Login";
import Home from './app/components/Home';
export default class InTheWallet extends Component {
  constructor(){
    super();
    this.state = {firstLaunch:null};
  }
  componentWillMount(){
      var that = this;
      AsyncStorage.multiGet(['tokenID','username']).then((userSession) => {
      this.setState({tokenID:userSession[0][1],username:userSession[1][1]})
    })
      firstTime(DeviceInfo.getUniqueID())
      .then(function(response) {
      that.setState({firstLaunch:response});
      return Promise.resolve(response);
      })
      .catch(function(response){
        that.setState({firstLaunch:response});
      })
  }
  render() {
    if (this.state.firstLaunch === 'Running first time') {
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
    else if( this.state.firstLaunch ==='Not running first time')
    {
      return(
        <NavigatorIOS
        initialRoute = {{
          component: Home,
          title:'Home',
          navigationBarHidden:true,
          passProps:{username:this.state.username,token:this.state.tokenID}
        }}
       style={{ flex:1,}}/>
      )
    }
      else{
        return null;
      }
  }
}

AppRegistry.registerComponent('InTheWallet', () => InTheWallet);
