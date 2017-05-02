import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableOpacity,StyleSheet,StatusBar, Image } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

let styles = require('../style/IntroStyle');
import Introduction from './Introduction';
import Introduction2 from './Introduction2';
import Introduction3 from './Introduction3';
import Subscribe from './login/Subscription';
let Introduction4 = React.createClass( {

  goIntroduction() {
    this.props.navigator.pop();
  },
  goIntroduction2() {
    this.props.navigator.pop();
  },
  goIntroduction3() {
    this.props.navigator.pop();
  },
  goSubscribe() {
    this.props.navigator.push({
      component: Subscribe,
      title:'Inscription',
      navigationBarHidden:true,
    });
  },
  render() {
    return (
      <View style={styles.introContainer}>
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
      <TouchableOpacity style={styles.buttonCustom2} onPress={this.goSubscribe}>
      <Text style={styles.buttonText}>
      Passer les introductions !
      </Text>
    </TouchableOpacity>
      </View>
    </View>
    )
  }

});

const intro4 = StyleSheet.create({
  img:{
    width:216,
    height:225,
    marginTop:25,
    marginBottom:35,
  },
});

module.exports = Introduction4;
