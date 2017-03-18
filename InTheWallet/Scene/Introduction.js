import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView,  StatusBar, Image, Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

let styles = require('../style/IntroStyle');

export default class Introduction extends Component {
  render() {
    return (
      <View style={styles.introContainer}>
        <StatusBar barStyle="dark-content"
        />
        <View style={styles.container}>
        <Image
          style={styles.img}
          source={ require('../img/Intro1.png')}
        />
        <Text style={styles.titleIntro}>
        Votre nouveau meilleur ami.
        </Text>
        <Text style={styles.introText}>
        In The Wallet vous permets de mieux gérer vos dépenses au quotidien.
        </Text>
        <View style={styles.switchContainer}>

        <TouchableOpacity
        style={styles.active}>
        <View></View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.switcher} onPress={this.goIntroduction2.bind(this)}>
        <View></View>

        </TouchableOpacity>
        <TouchableOpacity style={styles.switcher} onPress={this.goIntroduction3.bind(this)}>
        <View></View>

        </TouchableOpacity>
        <TouchableOpacity style={styles.switcher} onPress={this.goIntroduction4.bind(this)}>
        <View></View>
        </TouchableOpacity>

        </View>
        <TouchableOpacity style={styles.button} onPress={this.goSubscribe.bind(this)}>
        <Text style={styles.buttonText}>
        Passer les introductions !
        </Text>
      </TouchableOpacity>
        </View>
      </View>
    )
  }
  goIntroduction2() {
    this.props.navigator.push({ screen: 'Introduction2' });
  }
  goIntroduction3(){
    this.props.navigator.push({ screen: 'Introduction3' });
  }
  goIntroduction4(){
    this.props.navigator.push({ screen: 'Introduction4' });
  }
  goSubscribe() {
    this.props.navigator.push({ screen: 'Subscription' });
  }
}
