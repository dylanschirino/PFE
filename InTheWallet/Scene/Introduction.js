import React, { Component } from 'react';
import { View, Text, TouchableHighlight, StyleSheet, ScrollView,  StatusBar, Image, Dimensions } from 'react-native';

let styles = require('../style/IntroStyle');

export default class Introduction extends Component {
  render() {
    return (
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

        <TouchableHighlight
        style={styles.active}>
        <View></View>
        </TouchableHighlight>

        <TouchableHighlight style={styles.switcher} onPress={this.goIntroduction2.bind(this)}>
        <View></View>

        </TouchableHighlight>
        <TouchableHighlight style={styles.switcher} onPress={this.goIntroduction3.bind(this)}>
        <View></View>

        </TouchableHighlight>
        <TouchableHighlight style={styles.switcher} onPress={this.goIntroduction4.bind(this)}>
        <View></View>
        </TouchableHighlight>

        </View>
        <TouchableHighlight style={styles.button}>
        <Text style={styles.buttonText}>
        Passer les introductions !
        </Text>
        </TouchableHighlight>
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
}
