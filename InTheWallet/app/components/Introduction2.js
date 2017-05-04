import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableOpacity,StyleSheet,StatusBar, Image } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

let styles = require('../style/IntroStyle');

import Introduction from './Introduction';
import Introduction3 from './Introduction3';
import Introduction4 from './Introduction4';
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
        style={intro2.img}
        source={ require('../img/Intro2.png')}
      />
      <Text style={styles.titleIntro}>
      Gérer vos dépenses facilement.
      </Text>
      <Text style={styles.introText}>
      Vous pouvez ajouter une dépense en un rien de temps ou que vous soyez.
      </Text>

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

      </View>
      <TouchableOpacity style={styles.button} onPress={this.goSubscribe}>
      <Text style={styles.buttonText}>
      Passer les introductions !
      </Text>
    </TouchableOpacity>
      </View>
    </View>
    )
  }
});

const intro2 = StyleSheet.create({
  img:{
    width:256,
    height:252,
    marginTop:25,
    marginBottom:35,
  },
  active:{
    backgroundColor:'#235182',
    borderRadius:2.5,
    width:19.75,
    height:15,
    borderWidth:1,
    borderColor:'#235182',
    borderRadius:2.5,
    marginLeft:26.33,
  }
});

export default Introduction2;
