import React, { Component } from 'react';
import { View, Text, TouchableHighlight, StyleSheet, ScrollView,  StatusBar, Image, Dimensions } from 'react-native';

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
        </View>
    )
  }
  goIntroduction2() {
    this.props.navigator.push({ screen: 'Introduction2' });
  }
}
const styles = StyleSheet.create({
  container: {
    alignItems:'center',
  },
  img:{
    width:257,
    height:251,
    marginTop:25,
    marginBottom:35,
  },
  titleIntro:{
    fontSize:20,
    color:'#235182',
    marginBottom:20,
  },
  introText:{
    fontSize:18,
    textAlign:'center',
    fontWeight:'100',
    lineHeight:24,
    color:'#235182',
  }
});
