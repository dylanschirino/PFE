import { StyleSheet } from 'react-native';


module.exports = StyleSheet.create({
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
    marginBottom:60,
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
import React, { Component } from 'react';
