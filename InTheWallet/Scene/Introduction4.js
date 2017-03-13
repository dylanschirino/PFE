import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableHighlight,StyleSheet, Image } from 'react-native';

export default class Introduction4 extends Component {
  render() {
    return (
      <View style={styles.container}>
      <Image
        style={styles.img}
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
      style={styles.switcherOne}>
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

      <TouchableHighlight style={styles.switcher}>
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

const styles = StyleSheet.create({
  container: {
    alignItems:'center',
  },
  img:{
    width:216,
    height:225,
    marginTop:25,
    marginBottom:35,
  },
  titleIntro:{
    fontSize:20,
    color:'#235182',
    marginBottom:20,
    fontFamily:'droidsans',
  },
  introText:{
    fontSize:18,
    textAlign:'center',
    fontWeight:'100',
    lineHeight:24,
    color:'#235182',
    paddingLeft:30,
    paddingRight:30,
    paddingBottom:40,
    fontFamily:'lato-light',
  },
  switchContainer:{
    flexDirection:'row',
    marginBottom:75,
  },
  switcherOne:{
    width:19.75,
    height:15,
    borderWidth:1,
    borderColor:'#235182',
    borderRadius:2.5,
  },
  switcher:{
    width:19.75,
    height:15,
    borderWidth:1,
    borderColor:'#235182',
    borderRadius:2.5,
    marginLeft:26.33,
  },
  button:{
    backgroundColor:'#235182',
    paddingTop:15,
    paddingBottom:15,
    borderRadius:8,
    alignItems:'center',
    alignSelf:'stretch',
    marginLeft:26,
    marginRight:26,
  },
  buttonText:{
    color:'#FFFFFF',
    fontFamily:'droidsans'
  },
  active:{
    borderRadius:2.5,
  }
});
