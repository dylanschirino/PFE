import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView,  StatusBar, Image, Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import SearchBar from 'react-native-search-bar';
import axios from 'axios';

let nav = require('../../style/navStyle'),
    styles = require('../../style/detailStyle'),
    menu = require('../../style/menuStyle');

let Details = React.createClass ({
  goDepenseList(){
    this.props.navigator.pop();
  },
  componentDidMount(){
    axios.get('http://104.131.74.22:8080/depense/'+this.props.depense_id)
    .then( response => {
      const depenseDetails = response.data['data'];
      this.setState({ depenseDetails });
    })
    .catch(function (error) {
      alert('Erreur:'+ error);
    });
  },
  getInitialState: function() {
    return {
      depenseDetails:'',
    }
  },
  _renderDetails(){

        return (
          <View style={styles.contentInfo}>
            <Text style={styles.label}>Montant dépensé</Text>
            <Text style={styles.info}>{this.state.depenseDetails.montant}€</Text>
            <Text style={styles.label}>Jour de la dépense</Text>
            <Text style={styles.info}>{this.state.depenseDetails.created_at}</Text>
            <Text style={styles.label}>La dépense est répété le </Text>
            <Text style={styles.info}>14 du mois</Text>
            <Text style={styles.label}>Catégories</Text>
            <Text style={styles.info}>{this.state.depenseDetails.categorie}</Text>
            <Text style={styles.label}>Mode de payement</Text>
            <Text style={styles.info}>{this.state.depenseDetails.payement}</Text>
          </View>
        )
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
          <TouchableOpacity onPress={this.goDepenseList} style={styles.link}>
          <Image source={require('../../img/arrow-back.png')} style={styles.arrow}
          />
          </TouchableOpacity>
        <Image source={require('../../img/details-photo.png')} style={styles.photo}
          />
        <Text style={styles.title}>{this.props.name}</Text>
        </View>
        <View style={styles.content}>
          {this._renderDetails()}
        </View>
        <View style={menu.menu}>
            <TouchableOpacity style={menu.menuLink}>
              <Image
                style={menu.icone}
                source={ require('../../img/home.png')}
              />
            <Text style={menu.menuLabel}>Accueil</Text>
            </TouchableOpacity>
            <TouchableOpacity style={menu.menuLink} onPress={this.goDepense}>
              <Image
                style={menu.icone}
                source={ require('../../img/depense.png')}
              />
            <Text style={menu.menuLabel}>Dépenses</Text>
            </TouchableOpacity>
            <TouchableOpacity style={menu.menuLinkAdd}>
              <View style={menu.add}>
                <Image
                  style={menu.iconeAdd}
                  source={ require('../../img/add.png')}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={menu.menuLink}>
              <Image
                style={menu.iconeEpargne}
                source={ require('../../img/epargne.png')}
              />
            <Text style={menu.menuLabel}>Épargne</Text>
            </TouchableOpacity>
            <TouchableOpacity style={menu.menuLink}>
              <Image
                style={menu.iconePret}
                source={ require('../../img/pret.png')}
              />
            <Text style={menu.menuLabel}>Prêt</Text>
            </TouchableOpacity>
        </View>
      </View>
    )}
  });

  module.exports = Details;
