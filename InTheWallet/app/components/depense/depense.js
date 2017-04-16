import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView,  StatusBar, Image, Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

let nav = require('../../style/navStyle');

let Depense = React.createClass ({
  render() {
    return (
      <View style={{flex:1,}}>
      <View style={nav.header}>
      <StatusBar barStyle="light-content"
      />
    <View style={nav.navBar}>
      <TouchableOpacity style={nav.backLink}>
        <Image style={nav.backIcone} source={ require('../../img/back.png')}
          />
        <Text style={nav.backText}>Accueil</Text>
      </TouchableOpacity>
      <Text style={nav.navTitle}>Dépenses</Text>
      <TouchableOpacity style={nav.add}>
        <Image style={nav.addIcone} source={ require('../../img/addMenu.png')}
          />
      </TouchableOpacity>
    </View>
      </View>
      </View>
    )}
  });

  module.exports = Depense;
