import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableOpacity,StyleSheet,StatusBar, Image } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
let styles = require('../style/IntroStyle');

export default class Introduction3 extends Component {
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

      <TouchableOpacity onPress={this.goIntroduction.bind(this)}
      style={styles.switcher}>
      <View></View>
      </TouchableOpacity>

      <View>
      <TouchableOpacity style={styles.switcher} onPress={this.goIntroduction2.bind(this)}>
      <View></View>
      </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.active}>
      <View></View>
      </TouchableOpacity>

      <TouchableOpacity onPress={this.goIntroduction4.bind(this)} style={styles.switcher}>
      <View></View>
      </TouchableOpacity>

      </View>
      <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>
      Passer les introductions !
      </Text>
    </TouchableOpacity>
      </View>
    </View>
    )
  }

  goIntroduction() {
    this.props.navigator.push({ screen: 'Introduction' });
  }
  goIntroduction2() {
    this.props.navigator.push({ screen: 'Introduction2' });
  }
  goIntroduction4() {
    this.props.navigator.push({ screen: 'Introduction4' });
  }
}

const intro3 = StyleSheet.create({
  img:{
    width:308,
    height:208,
    marginTop:25,
    marginBottom:35,
  },
});
