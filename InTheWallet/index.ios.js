
import React, { Component } from 'react';
import {
  AppRegistry,
  NavigatorIOS,
  AsyncStorage,
  View,
  Text,
  StyleSheet,
} from 'react-native';

import Introduction from "./app/components/Introduction";
import Login from "./app/components/login/Login";

export default class InTheWallet extends Component {
  constructor(){
    super();
    this.state = {firstLaunch: null};
  }
  componentDidMount(){
    AsyncStorage.getItem("alreadyLaunched").then(value => {
      if(value == null){
        AsyncStorage.setItem('key','alreadyLaunched', false);
        this.setState({firstLaunch: true});
      }
      else{
        this.setState({firstLaunch: false});
      }
    })
  }
  render() {
       if(this.state.firstLaunch == true){
         return (
           <NavigatorIOS
           initialRoute = {{
             component: Login,
             title:'Login',
             navigationBarHidden:true,
           }}
          style={{ flex:1,}}/>
         )
      }
      else{
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
}

AppRegistry.registerComponent('InTheWallet', () => InTheWallet);
