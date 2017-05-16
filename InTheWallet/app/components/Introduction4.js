import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableOpacity,StyleSheet,StatusBar, Image } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

let styles = require('../style/IntroStyle');
import Introduction from './Introduction';
import Introduction2 from './Introduction2';
import Introduction3 from './Introduction3';
import Subscribe from './login/Subscription';
let Introduction4 = React.createClass( {

  goIntroduction() {
    this.props.navigator.push({
      component: Introduction,
      title:'Introduction',
      navigationBarHidden:true,
    });
  },
  goIntroduction2() {
    this.props.navigator.push({
      component: Introduction2,
      title:'Introduction2',
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
  goSubscribe() {
    this.props.navigator.push({
      component: Subscribe,
      title:'Inscription',
      navigationBarHidden:true,
    });
  },
  onSwipeLeft() {
    this.props.navigator.push({
      component: Subscribe,
      title:'Subscribe',
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
      <TouchableOpacity style={styles.switcher} onPress={this.goIntroduction2}>
      <View></View>
      </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={this.goIntroduction3} style={styles.switcher}>
      <View></View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.active}>
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
        style={intro4.img}
        source={ require('../img/Intro4.png')}
      />
      <Text style={styles.titleIntro}>
      Épargner pour mieux rebondir.
      </Text>
      <Text style={styles.introText}>
      Dans combien de temps pourrez-vous vous offrir la voiture de vos rêves en mettant 10€ / mois ?
      </Text>
      {this._renderSwitcher()}
      <TouchableOpacity style={styles.buttonCustom2} onPress={this.goSubscribe}>
      <Text style={styles.buttonText}>
      Passer les introductions !
      </Text>
    </TouchableOpacity>
      </View>
    </GestureRecognizer>
    )
  }

});

const intro4 = EStyleSheet.create({
  img:{
    width:216,
    height:225,
    marginTop:25,
    marginBottom:35,
    '@media (max-width: 320px)': {
      marginTop:15,
      marginBottom:20,
    },
    '@media (min-width:380px) and (max-width:768px)':{
      width:316,
      height:325,
    },
  },
});

export default Introduction4;
