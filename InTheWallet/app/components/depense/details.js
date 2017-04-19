import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView,  StatusBar, Image, Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import SearchBar from 'react-native-search-bar';
import axios from 'axios';

let nav = require('../../style/navStyle'),
    styles = require('../../style/detailStyle');

let Details = React.createClass ({
  goDepenseList(){
    this.props.navigator.pop();
  },
  componentDidMount(){
    axios.get('http://104.131.74.22:8080/depense/'+this.props.depense_id)
    .then( response => {
      const depenseObject = response.data['data'];
      const depenseArray = Object.keys(depenseObject).map(key => depenseObject[key]);
      this.setState({ depenseArray });
    })
    .catch(function (error) {
      alert('Erreur:'+ error);
    });
  },
  getInitialState: function() {
    return {
      depenseArray:[[],[]],
    }
  },
  render() {
    return (
      <View style={{flex:1,}}>
        <View style={nav.header}>
          <StatusBar barStyle="light-content"
            />
          <View style={nav.navBar}>
            <TouchableOpacity style={nav.backLink} onPress={this.goDepenseList}>
              <Image style={nav.backIcone} source={ require('../../img/back.png')}
                />
              <Text style={nav.backText}>Dépenses</Text>
            </TouchableOpacity>
            <Text style={nav.navTitle}>{this.props.name}</Text>
            <TouchableOpacity style={nav.add}>
              <Image style={nav.addIcone} source={ require('../../img/addMenu.png')}
                />
            </TouchableOpacity>
          </View>
        </View>
        <SearchBar
          ref='searchBar'
          placeholder='Recherche'
          />
        <View style={styles.headContent}>
          <Image source={require('../../img/arrow-back.png')} style={styles.arrow}
          />
        <Image source={require('../../img/details-photo.png')} style={styles.photo}
          />
        <Text style={styles.title}>Glace au chocolat de chez le glacier</Text>
        </View>
      </View>
    )}
  });

  module.exports = Details;
