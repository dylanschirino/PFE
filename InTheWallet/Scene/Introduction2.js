import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableOpacity,StyleSheet,StatusBar, Image } from 'react-native';

let styles = require('../style/IntroStyle');

export default class Introduction2 extends Component {
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

      <TouchableOpacity onPress={this.goIntroduction.bind(this)}
      style={styles.switcher}>
      <View></View>
      </TouchableOpacity>

      <View>
      <TouchableOpacity style={styles.active}>
      <View></View>
      </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={this.goIntroduction3.bind(this)} style={styles.switcher}>
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
  goIntroduction3() {
    this.props.navigator.push({ screen: 'Introduction3' });
  }
  goIntroduction4() {
    this.props.navigator.push({ screen: 'Introduction4' });
  }
}

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
