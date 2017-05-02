import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView,  StatusBar, Image, Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import SearchBar from 'react-native-search-bar';
import axios from 'axios';

let nav = require('../../style/navStyle'),
    menu = require('../../style/menuStyle'),
    styles = require('../../style/listStyle'),
    details = require('../../style/detailCustom');

import addEpargne from './addEpargne';
import Depense from '../depense/depense';

let Details = React.createClass ({
  componentDidMount(){
    axios.get('http://104.131.74.22:8080/epargne/'+this.props.epargne_id)
    .then( response => {
      const epargneDetails = response.data['data'];
      this.setState({ epargneDetails });
    })
    .catch(function (error) {
      alert('Erreur:'+ error);
    });
  },
  getInitialState: function() {
    return {
      epargneDetails:'',
      user:this.props.username,
    }
  },
  goHome(){
    this.props.navigator.pop();
  },
  goDepense(){
    this.props.navigator.push({
      component: Depense,
      title:'Dépense',
      navigationBarHidden:true,
      passProps:{username:this.state.user},
    })
  },
  addEpargne(){
    this.props.navigator.push({
      component: addEpargne,
      title:'Ajouter épargne',
      navigationBarHidden:true,
      passProps:{username:this.state.user},
    })
  },
  _renderDetails(){

        return (
          <View style={details.contentInfo}>
            <View style={details.container}>
              <View style={details.head}>
                <TouchableOpacity onPress={this.goHome}>
                  <Image style={details.imgAnnuler} source={ require('../../img/annuler.png')}
                    />
                </TouchableOpacity>
                <Text style={details.title}>{this.props.name}</Text>
              </View>
              <View style={details.clockContainer}>
                <View style={details.clockBorder}>
                    <Text style={details.timer}>15 JOURS 2 HEURES 10 MIN</Text>
                </View>
              </View>
                <View style={details.row}>
                  <View style={details.content}>
                    <Text style={details.label}>Montant</Text>
                    <Text style={details.response}>{this.state.epargneDetails.montant} €</Text>
                  </View>
                  <View style={details.content}>
                    <Text style={details.label}>Mensualité</Text>
                    <Text style={details.response}>{this.state.epargneDetails.mensualite} €</Text>
                  </View>
                </View>
                <View style={details.row}>
                  <View style={details.content}>
                    <Text style={details.label}>Début de l'épargne</Text>
                    <Text style={details.response}>{this.state.epargneDetails.depart}</Text>
                  </View>
                  <View style={details.content}>
                    <Text style={details.label}>Jour de l'achat</Text>
                    <Text style={details.response}>15 Novembre 2017</Text>
                  </View>
                </View>
            </View>
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
          <TouchableOpacity style={nav.backLink} onPress={this.goHome}>
            <Image style={nav.backIcone} source={ require('../../img/back.png')}
              />
            <Text style={nav.backText}>Épargne</Text>
          </TouchableOpacity>
          <Text style={nav.navTitle}>{this.props.name}</Text>
          <TouchableOpacity style={nav.add} onPress={this.addEpargne}>
            <Image style={nav.addIcone} source={ require('../../img/addMenu.png')}
              />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.container}>
        <SearchBar
          ref='searchBar'
          placeholder='Recherche'
          />
        <View style={details.quickLinkContainerCustom}>
          <TouchableOpacity style={styles.quickLink}>
            <View style={styles.quickLinkContent}>
              <Text style={styles.quickLinkText}>Prêt</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.quickLink}>
            <View style={styles.quickLinkContentActive}>
              <Text style={styles.quickLinkTextActive}>Épargne</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      {this._renderDetails()}
      <View style={menu.menu}>
          <TouchableOpacity style={menu.menuLink} onPress={this.goHome}>
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
          <TouchableOpacity style={menu.menuLink} onPress={this.goHome}>
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
