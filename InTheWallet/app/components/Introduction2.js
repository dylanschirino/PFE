import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableOpacity,StyleSheet,StatusBar, Image } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

let styles = require('../style/IntroStyle');

import Introduction from './Introduction';
import Introduction3 from './Introduction3';
import Introduction4 from './Introduction4';
import Introduction5 from "./Introduction5";
import Subscribe from './login/Subscription';
var Introduction2 = React.createClass ( {

  goIntroduction() {
    this.props.navigator.push({
      component: Introduction,
      title:'Introduction',
      navigationBarHidden:true,
    });
  },
  goIntroduction3() {
    this.props.navigator.push({
      component: Introduction3,
      title:'Introduction3',
      navigationBarHidden:true,
    });
  },
  goIntroduction4() {
    this.props.navigator.push({
      component: Introduction4,
      title:'Introduction4',
      navigationBarHidden:true,
    });
  },
  goIntroduction5(){
    this.props.navigator.push({
      component: Introduction5,
      title:'Introduction5',
      navigationBarHidden:true,
    });
  },
  goSubscribe() {
    this.props.navigator.push({
      component: Subscribe,
      title:'Inscription',
      navigationBarHidden:true,
    });
  },
  onSwipeLeft() {
    this.props.navigator.push({
      component: Introduction3,
      title:'Introduction3',
      navigationBarHidden:true,
    });
  },
  onSwipeRight() {
    this.props.navigator.pop();
  },
  _renderSwitcher(){
    return(
      <View style={styles.switchContainer}>

      <TouchableOpacity onPress={this.goIntroduction}
      style={styles.switcher}>
      <View></View>
      </TouchableOpacity>

      <View>
      <TouchableOpacity style={styles.active}>
      <View></View>
      </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={this.goIntroduction3} style={styles.switcher}>
      <View></View>

      </TouchableOpacity>

      <TouchableOpacity onPress={this.goIntroduction4} style={styles.switcher}>
      <View></View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.switcher} onPress={this.goIntroduction5}>
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
        onSwipeRight={()=>{this.onSwipeRight()}}
        config={config}
        style={styles.introContainer}>
        <StatusBar barStyle="dark-content"
        />
      <View style={styles.container}>
        <Image
          style={intro2.img}
          source={ require('../img/gif/intro2.gif')}
        />
        <Text style={styles.titleIntro}>
        Gérer vos dépenses facilement
        </Text>
        <Text style={styles.introText}>
        Vous pouvez ajouter une dépense en un rien de temps où que vous soyez.
        </Text>
        {this._renderSwitcher()}
        <TouchableOpacity style={styles.button} onPress={this.goIntroduction3}>
          <Text style={styles.buttonText}>
          Suivant
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.linkContainer} onPress={this.goSubscribe}>
        <Text style={styles.link}>Passer les introductions</Text>
        </TouchableOpacity>
      </View>
    </GestureRecognizer>
    )
  }
});

const intro2 = EStyleSheet.create({
  img:{
    width:256,
    height:252,
    marginTop:25,
    marginBottom:35,
    '@media (max-width: 320px)': {
      marginTop:15,
      marginBottom:20,
    },
    '@media (min-width:768px)':{
      width:356,
      height:352,
    },
  },
  active:{
    backgroundColor:'#235182',
    borderRadius:2.5,
    width:29.75,
    height:25,
    borderWidth:1,
    borderColor:'#235182',
    borderRadius:2.5,
    marginLeft:26.33,
  }
});

export default Introduction2;
