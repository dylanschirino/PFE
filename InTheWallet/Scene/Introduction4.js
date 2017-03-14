import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableHighlight,StyleSheet, Image } from 'react-native';

let styles = require('../style/IntroStyle');

export default class Introduction4 extends Component {
  render() {
    return (
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

      <TouchableHighlight onPress={this.goIntroduction.bind(this)}
      style={styles.switcher}>
      <View></View>
      </TouchableHighlight>

      <View>
      <TouchableHighlight style={styles.switcher} onPress={this.goIntroduction2.bind(this)}>
      <View></View>
      </TouchableHighlight>
      </View>

      <TouchableHighlight onPress={this.goIntroduction3.bind(this)} style={styles.switcher}>
      <View></View>
      </TouchableHighlight>

      <TouchableHighlight style={styles.active}>
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

  goIntroduction() {
    this.props.navigator.push({ screen: 'Introduction' });
  }
  goIntroduction2() {
    this.props.navigator.push({ screen: 'Introduction2' });
  }
  goIntroduction3() {
    this.props.navigator.push({ screen: 'Introduction3' });
  }
}

const intro4 = StyleSheet.create({
  img:{
    width:216,
    height:225,
    marginTop:25,
    marginBottom:35,
  },
});
