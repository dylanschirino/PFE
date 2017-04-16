import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView,  StatusBar, Image, Dimensions } from 'react-native';
import SearchBar from 'react-native-search-bar';
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
      <View style={styles.container}>
        <ScrollView horizontal={true} scrollEnabled={true} snapToAlignment='center' contentContainerStyle={styles.categorie}>
          <Text style={styles.catText}>Général</Text>
          <Text style={styles.catText}>Loisirs</Text>
          <Text style={styles.catText}>Alimentation</Text>
          <Text style={styles.catText}>Maison</Text>
          <Text style={styles.catText}>Santé</Text>
        </ScrollView>
        <SearchBar
          ref='searchBar'
          placeholder='Recherche'
          />
      <View style={styles.list}>
        <ScrollView scrollEnabled={true} snapToAlignment='center' contentContainerStyle={styles.list}>
          <View style={styles.depenseContainer}>
            <View style={styles.smallInfo}>
              <Image style={styles.imgRepeat} source={ require('../../img/repeat.png')}
                />
              <Image style={styles.imgPayement} source={ require('../../img/cards.png')}
                  />
            </View>
            <View style={styles.thumb}>
              <Image style={styles.img} source={ require('../../img/photo.jpg')}
                />
            </View>
            <View style={styles.containerInfo}>
              <View style={styles.mainInfo}>
                <Text style={styles.price}>10€</Text>
                <Text style={styles.name}>Glace au chocolat</Text>
              </View>
              <View style={styles.secondInfo}>
                <Text style={styles.label}>DÉPENSÉ LE</Text>
                <Text style={styles.date}>19 Janvier 2016</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
      </View>
      </View>
    )}
  });

  module.exports = Depense;
