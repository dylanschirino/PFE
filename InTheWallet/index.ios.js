
import React, { Component } from 'react';
import {
  AppRegistry,
  AsyncStorage,
  NavigatorIOS,
  View,
  Text,
  TouchableOpacity,
  NetInfo,
  PushNotificationIOS,
  StyleSheet,
} from 'react-native';

var PushNotification = require('react-native-push-notification');
var firstTime = require('react-native-catch-first-time');
var DeviceInfo = require('react-native-device-info');

import Introduction from "./app/components/Introduction";
import Login from "./app/components/login/Login";
import Home from './app/components/Home';
import noConnection from './app/components/noConnection';


export default class InTheWallet extends Component {
  constructor(){
    super();
    this.state = {firstLaunch:null,isConnected:null};
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
  componentDidMount(){
    NetInfo.isConnected.addEventListener(
        'change',
        this._handleConnectivityChange
    );
    NetInfo.isConnected.fetch().done(
        (isConnected) => { this.setState({isConnected}); }
    );
  }
  _handleConnectivityChange = (isConnected) => {
    this.setState({
      isConnected,
    });
  };
  componentWillUnmount() {
   NetInfo.isConnected.removeEventListener(
       'change',
       this._handleConnectivityChange
   );
 }
  render() {
    if (this.state.firstLaunch === 'Running first time' ) {
      if(this.state.isConnected == null || this.state.isConnected == false){
        return (
          <NavigatorIOS
          initialRoute = {{
            component: noConnection,
            title:'noConnection',
            navigationBarHidden:true,
          }}
         style={{ flex:1,}}/>
        )
      }
      else{
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
    }
    else if( this.state.firstLaunch ==='Not running first time')
    {
      if(this.state.isConnected == null || this.state.isConnected == false){
        return (
          <NavigatorIOS
          initialRoute = {{
            component: noConnection,
            title:'noConnection',
            navigationBarHidden:true,
          }}
         style={{ flex:1,}}/>
        )
      }
      else{
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
    }
      else{
        return null;
      }
  }
}

AppRegistry.registerComponent('InTheWallet', () => InTheWallet);
