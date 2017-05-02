import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableOpacity,StyleSheet,StatusBar, Image } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

let styles = require('../style/IntroStyle');
import Introduction from './Introduction';
import Introduction2 from './Introduction2';
import Introduction4 from './Introduction4';
import Subscribe from './login/Subscription';

let Introduction3 = React.createClass( {

  goIntroduction() {
    this.props.navigator.push({
      component: Introduction,
      title:'Introduction',
      navigationBarHidden:true,
    });
  },
  goIntroduction2() {
    this.props.navigator.pop();
  },
  goIntroduction4() {
    this.props.navigator.push({
      component: Introduction4,
      title:'Introduction4',
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

  render() {
    return (
      <View style={styles.introContainer}>
        <StatusBar barStyle="dark-content"
        />
      <View style={styles.container}>
      <Image
        style={intro3.img}
        source={ require('../img/Intro3.png')}
      />
      <Text style={styles.titleIntro}>
      Vos prêt à porter de mains.
      </Text>
      <Text style={styles.introText}>
      Ajouter vos prêts avec vos taux d’intêret et voir le remboursement en temps réels.
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

      <TouchableOpacity style={styles.active}>
      <View></View>
      </TouchableOpacity>

      <TouchableOpacity onPress={this.goIntroduction4} style={styles.switcher}>
      <View></View>
      </TouchableOpacity>

      </View>
      <TouchableOpacity style={styles.buttonCustom} onPress={this.goSubscribe}>
      <Text style={styles.buttonText}>
      Passer les introductions !
      </Text>
    </TouchableOpacity>
      </View>
    </View>
    )
  }
});

const intro3 = StyleSheet.create({
  img:{
    width:308,
    height:208,
    marginTop:25,
    marginBottom:35,
  },
});

module.exports = Introduction3;
