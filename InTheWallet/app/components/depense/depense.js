import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView,  StatusBar, Image, Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

let nav = require('../../style/navStyle'),
    styles = require('../../style/listStyle');

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
      <ScrollView horizontal={true} scrollEnabled={true} snapToAlignment='center' contentContainerStyle={styles.categorie}>
        <Text style={styles.catText}>Général</Text>
        <Text style={styles.catText}>Loisirs</Text>
        <Text style={styles.catText}>Alimentation</Text>
        <Text style={styles.catText}>Maison</Text>
        <Text style={styles.catText}>Santé</Text>
      </ScrollView>
      </View>
    )}
  });

  module.exports = Depense;
