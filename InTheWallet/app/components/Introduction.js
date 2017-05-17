import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView,  StatusBar, Image, Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

let styles = require('../style/IntroStyle');

import Introduction2 from "./Introduction2";
import Introduction3 from "./Introduction3";
import Introduction4 from "./Introduction4";
import Subscribe from './login/Subscription';

let Introduction = React.createClass ({
  goIntroduction2() {
    this.props.navigator.push({
      component: Introduction2,
      title:'Introduction2',
      navigationBarHidden:true,
    });
  },
  goIntroduction3(){
    this.props.navigator.push({
      component: Introduction3,
      title:'Introduction3',
      navigationBarHidden:true,
    });
  },
  goIntroduction4(){
    this.props.navigator.push({
      component: Introduction4,
      title:'Introduction4',
      navigationBarHidden:true,
    });
  },
  getInitialState: function() {
    return {
      firstLaunch:this.props.firstLaunch
    }
  },
  goSubscribe() {
    this.props.navigator.push({
      component: Subscribe,
      title:'Inscription',
      navigationBarHidden:true,
      passProps:{firstLaunch:false}
    });
  },
  onSwipeLeft() {
    this.props.navigator.push({
      component: Introduction2,
      title:'Introduction2',
      navigationBarHidden:true,
    });
  },
  _renderSwitcher(){
    return(
      <View style={styles.switchContainer}>
        <TouchableOpacity
        style={styles.active}>
        <View></View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.switcher} onPress={this.goIntroduction2}>
        <View></View>

        </TouchableOpacity>
        <TouchableOpacity style={styles.switcher} onPress={this.goIntroduction3}>
        <View></View>

        </TouchableOpacity>
        <TouchableOpacity style={styles.switcher} onPress={this.goIntroduction4}>
        <View></View>
        </TouchableOpacity>
      </View>
    )
  },
  render() {
    const config = {
      velocityThreshold: 0.3,
      directionalOffsetThreshold: 80
    };
    return (
      <GestureRecognizer
        onSwipeLeft={() => {this.onSwipeLeft()}}
        config={config}
        style={styles.introContainer}>
        <View style={styles.container}>
          <Image
            style={styles.img}
            source={ require('../img/gif/intro1.gif')}
          />
          <Text style={styles.titleIntro}>
          Votre nouveau meilleur ami.
          </Text>
          <Text style={styles.introText}>
          In The Wallet vous permets de mieux gérer vos dépenses au quotidien.
          </Text>
          {this._renderSwitcher()}
          <TouchableOpacity style={styles.button} onPress={this.goSubscribe}>
            <Text style={styles.buttonText}>
            Passer les introductions !
            </Text>
          </TouchableOpacity>
      </View>
      </GestureRecognizer>
    )
  }
});

export default Introduction;
