import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView,  StatusBar, Image, Dimensions,Alert,ProgressViewIOS } from 'react-native';
import SearchBar from 'react-native-search-bar';
import EStyleSheet from 'react-native-extended-stylesheet';
import axios from 'axios';
import Swipeout from 'react-native-swipeout';

let nav = require('../../style/navStyle'),
    menu = require('../../style/menuStyle'),
    styles = require('../../style/listStyle');

import Depense from '../depense/depense';
import Pret from '../pret/pret';
import Home from '../Home';
import addEpargne from './addEpargne';
import updateEpargne from './updateEpargne';
import Details from './details';

let Epargne = React.createClass ({
  goHome(){
    this.props.navigator.pop();
  },
  goDepense(){
    this.props.navigator.push({
      component: Depense,
      title:'Dépense',
      navigationBarHidden:true,
      passProps:{username:this.props.username},
    })
  },
  goPret(){
    this.props.navigator.push({
      component: Pret,
      title:'Prêt',
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
  componentDidMount(){
    axios.get('http://104.131.74.22:8080/epargne?user='+this.props.username)
    .then( response => {
      const epargneObject = response.data['data'];
      const epargneArray = Object.keys(epargneObject).map(key => epargneObject[key]);
      this.setState({ epargneArray });
    })
    .catch(function (error) {
      alert('Erreur:'+ error);
    });
  },
  _handleEdit(id){
    this.props.navigator.push({
      component: updateEpargne,
      title:'Modifier une dépense',
      navigationBarHidden:true,
      passProps:{username:this.state.user,epargne_id:id},
    })
  },
  _handleDelete(id){
    axios.delete('http://104.131.74.22:8080/epargne/'+id)
    .then( response => {
      alert('La dépense à bien été supprimée');
    })
    .catch(function (error) {
      alert('Erreur:'+ error);
    });
  },
  goDetails(id,name){
    this.props.navigator.push({
      component: Details,
      title:name,
      passProps:{epargne_id:id,name:name,username:this.state.user},
      navigationBarHidden:true,
    });
  },
  getInitialState: function() {
    return {
      epargneArray:[[],[]],
      user:this.props.username,
    }
  },
  _renderEpargne(){
  let epargneArray = (this.state.epargneArray).reverse();
  return epargneArray.map( ( oEpargne, i ) => {
      return (
        <Swipeout key={i} autoClose={true} right={[
          {
          component:<TouchableOpacity style={styles.swipeContainer} onPress={ ()=>{this._handleEdit(oEpargne.id)}}><Image style={styles.edit} source={ require('../../img/edit-swipe.png')}
            /></TouchableOpacity>,
          backgroundColor:'#FF9500'
        },
          {
          component:<TouchableOpacity onPress={
            () => Alert.alert(
            oEpargne.name,
            'Voulez-vous vraiment le supprimer?',
            [
              {text: 'Annuler', onPress: () => null},
              {text: 'Supprimer', onPress: () => {this._handleDelete(oEpargne.id)}},
            ]
          )
          } style={styles.swipeContainer}><Image style={styles.delete} source={ require('../../img/delete.png')}
            /></TouchableOpacity>,
          backgroundColor:'#FE3F35'
        }
      ]} backgroundColor={'#FFFFFF'}>
        <TouchableOpacity onPress={ ()=>{this.goDetails(oEpargne.id, oEpargne.name)}}>
        <View style={styles.depenseContainer}>
          <View style={styles.containerInfoCustom}>
            <View>
              <Text style={styles.nameCustom}>{oEpargne.name}</Text>
            </View>
            <View style={styles.secondInfo}>
              <Text style={styles.label}>ACHAT DANS</Text>
              <Text style={styles.date}>{oEpargne.duree}</Text>
            </View>
            <View style={styles.progressContainer}>
              <View style={styles.progressView}>
                <ProgressViewIOS style={styles.progressBar} trackTintColor={'white'} progressTintColor='#538EB6'
                progress={Number(oEpargne.duree)/100}/>
              <Text style={styles.percent}>{oEpargne.duree}%</Text>
              </View>
            </View>
          </View>
        </View>
        </TouchableOpacity>
        </Swipeout>
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
          <TouchableOpacity style={nav.backLink} onPress={this.goHome}>
            <Image style={nav.backIcone} source={ require('../../img/back.png')}
              />
            <Text style={nav.backText}>Retour</Text>
          </TouchableOpacity>
          <Text style={nav.navTitle}>Liste des épargnes</Text>
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
      <View style={styles.quickLinkContainer}>
          <TouchableOpacity style={styles.quickLink} onPress={this.goPret}>
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
      <View style={styles.listCustom}>
        <ScrollView scrollEnabled={true} contentContainerStyle={styles.listCustom}>
          {this._renderEpargne()}
        </ScrollView>
      </View>
      </View>
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

  module.exports = Epargne;