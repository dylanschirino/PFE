import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView,  StatusBar, Image, Dimensions } from 'react-native';
import SearchBar from 'react-native-search-bar';
import EStyleSheet from 'react-native-extended-stylesheet';
import axios from 'axios';

let nav = require('../../style/navStyle'),
    styles = require('../../style/listStyle');

    import Details from "./details";

let Depense = React.createClass ({
  componentDidMount(){
    axios.get('http://104.131.74.22:8080/depense?user=dylan@schirino.be')
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
  goDetails(){
    let spendArray = this.state.depenseArray;

    return spendArray.map( ( oDepense, i ) => {
        this.props.navigator.push({
          component: Details,
          title:oDepense.id,
          passProps:{id:oDepense.id},
        });
    } );
  },
  _renderDepense(){
  let spendArray = this.state.depenseArray;

  return spendArray.map( ( oDepense, i ) => {
    {
      var generateImage = function(){
      if( oDepense.payement == 'carte'){
        return (require('../../img/carte.png'));
      }
      else if ( oDepense.payement == 'cash'){
        return (require('../../img/cash.png'));
      }
    }
    }
      return (
        <TouchableOpacity key={i} onPress={this.goDetails}>
        <View style={styles.depenseContainer}>
          <View style={styles.smallInfo}>
            <Image style={styles.imgRepeat} source={ require('../../img/repeat.png')}
              />
            <Image style={styles.imgPayement} source={generateImage()}
                />
          </View>
          <View style={styles.thumb}>
            <Image style={styles.img} source={ require('../../img/photo.jpg')}
              />
          </View>
          <View style={styles.containerInfo}>
            <View style={styles.mainInfo}>
              <Text style={styles.price}>{oDepense.montant}€</Text>
              <Text style={styles.name}>{oDepense.name}</Text>
            </View>
            <View style={styles.secondInfo}>
              <Text style={styles.label}>DÉPENSÉ LE</Text>
              <Text style={styles.date}>19 Janvier 2016</Text>
            </View>
          </View>
        </View>
        </TouchableOpacity>
      )
  } );
},
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
          {this._renderDepense()}
        </ScrollView>
      </View>
      </View>
      </View>
    )}
  });

  module.exports = Depense;
