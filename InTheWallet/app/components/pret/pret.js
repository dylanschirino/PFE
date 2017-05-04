import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView,  StatusBar, Image, Dimensions,Alert,ProgressViewIOS } from 'react-native';
import SearchBar from 'react-native-search-bar';
import EStyleSheet from 'react-native-extended-stylesheet';
import axios from 'axios';
import Swipeout from 'react-native-swipeout';
import Display from 'react-native-display';

let nav = require('../../style/navStyle'),
    menu = require('../../style/menuStyle'),
    styles = require('../../style/listStyle');

import Depense from '../depense/depense';
import Epargne from '../epargne/epargne';
import Home from '../Home';
import addPret from './addPret';
import addDepense from '../depense/addDepense';
import addEpargne from '../epargne/addEpargne';
import updatePret from './updatePret';
import Details from './details';

let Pret = React.createClass ({
  goHome(){
    this.props.navigator.push({
      component: Home,
      title:'Home',
      navigationBarHidden:true,
      passProps:{username:this.props.username},
    })
  },
  goDepense(){
    this.props.navigator.push({
      component: Depense,
      title:'Dépense',
      navigationBarHidden:true,
      passProps:{username:this.props.username},
    })
  },
  goEpargne(){
    this.props.navigator.push({
      component: Epargne,
      title:'Épargne',
      navigationBarHidden:true,
      passProps:{username:this.props.username},
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
  addPret(){
    this.props.navigator.push({
      component: addPret,
      title:'Ajouter prêt',
      navigationBarHidden:true,
      passProps:{username:this.state.user},
    })
  },
  addDepense(){
    this.props.navigator.push({
      component: addDepense,
      title:'Ajouter dépense',
      navigationBarHidden:true,
      passProps:{username:this.state.user},
    })
  },
  componentDidMount(){
    axios.get('http://104.131.74.22:8080/pret?user='+this.props.username)
    .then( response => {
      const pretObject = response.data['data'];
      const pretArray = Object.keys(pretObject).map(key => pretObject[key]);
      this.setState({ pretArray });
    })
    .catch(function (error) {
      alert('Erreur:'+ error);
    });
  },
  _handleEdit(id){
    this.props.navigator.push({
      component: updatePret,
      title:'Modifier un prêt',
      navigationBarHidden:true,
      passProps:{username:this.state.user,pret_id:id},
    })
  },
  _handleDelete(id){
    axios.delete('http://104.131.74.22:8080/pret/'+id)
    .then( response => {
      alert('Le prêt à bien été supprimé');
    })
    .catch(function (error) {
      alert('Erreur:'+ error);
    });
  },
  goDetails(id,name){
    this.props.navigator.push({
      component: Details,
      title:name,
      passProps:{pret_id:id,name:name,username:this.state.user},
      navigationBarHidden:true,
    });
  },
  getInitialState: function() {
    return {
      pretArray:[[],[]],
      user:this.props.username,
      enable:false,
    }
  },
  toggleDisplay() {
  let toggle = !this.state.enable;
  this.setState({enable: toggle});
  },
  _renderEpargne(){
  let pretArray = (this.state.pretArray).reverse();
  return pretArray.map( ( oPret, i ) => {
      return (
        <Swipeout key={i} autoClose={true} right={[
          {
          component:<TouchableOpacity style={styles.swipeContainer} onPress={ ()=>{this._handleEdit(oPret.id)}}><Image style={styles.edit} source={ require('../../img/edit-swipe.png')}
            /></TouchableOpacity>,
          backgroundColor:'#FF9500'
        },
          {
          component:<TouchableOpacity onPress={
            () => Alert.alert(
            oPret.name,
            'Voulez-vous vraiment le supprimer?',
            [
              {text: 'Annuler', onPress: () => null},
              {text: 'Supprimer', onPress: () => {this._handleDelete(oPret.id)}},
            ]
          )
          } style={styles.swipeContainer}><Image style={styles.delete} source={ require('../../img/delete.png')}
            /></TouchableOpacity>,
          backgroundColor:'#FE3F35'
        }
      ]} backgroundColor={'#FFFFFF'}>
        <TouchableOpacity onPress={ ()=>{this.goDetails(oPret.id, oPret.name)}}>
        <View style={styles.depenseContainer}>
          <View style={styles.containerInfoCustom}>
            <View>
              <Text style={styles.nameCustom}>{oPret.name}</Text>
            </View>
            <View style={styles.secondInfo}>
              <Text style={styles.label}>{'Durée restante'.toUpperCase()}</Text>
              <Text style={styles.date}>{oPret.duree}</Text>
            </View>
            <View style={styles.progressContainer}>
              <View style={styles.progressView}>
                <ProgressViewIOS style={styles.progressBar} trackTintColor={'white'} progressTintColor='#538EB6'
                progress={Number(oPret.duree)/100}/>
              <Text style={styles.percent}>{oPret.duree | 0}%</Text>
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
            <Text style={nav.backText}>Accueil</Text>
          </TouchableOpacity>
          <Text style={nav.navTitle}>Liste des prêts</Text>
          <TouchableOpacity style={nav.add} onPress={this.addPret}>
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
          <TouchableOpacity style={styles.quickLink}>
            <View style={styles.quickLinkContentActiveLeft}>
              <Text style={styles.quickLinkTextActive}>Prêt</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.quickLink} onPress={this.goEpargne}>
            <View style={styles.quickLinkContentRight}>
              <Text style={styles.quickLinkText}>Épargne</Text>
            </View>
          </TouchableOpacity>
        </View>
      <View style={styles.listCustom}>
        <ScrollView scrollEnabled={true} contentContainerStyle={styles.listCustom}>
          {this._renderEpargne()}
        </ScrollView>
      </View>
      </View>
      <Display enable={this.state.enable} enterDuration={500} exitDuration={250} exit="fadeOutDown" enter="fadeInUp" style={menu.container}>
          <TouchableOpacity style={menu.buttonBack} onPress={() => {this.toggleDisplay()}}>
            <Image style={menu.imgAnnuler} source={ require('../../img/annuler.png')}
              />
          </TouchableOpacity>
          <TouchableOpacity style={menu.buttonContainerDepense} onPress={this.addDepense}>
            <Image
              style={menu.icone}
              source={ require('../../img/depenseB.png')}
            />
          <Text style={menu.buttonLabel}>{'Dépense'.toUpperCase()}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={menu.buttonContainerPret} onPress={this.addPret}>
            <Image
              style={menu.iconePret}
              source={ require('../../img/pretB.png')}
            />
          <Text style={menu.buttonLabel}>{'Prêt'.toUpperCase()}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={menu.buttonContainerEpargne} onPress={this.addEpargne}>
            <Image
              style={menu.iconeEpargne}
              source={ require('../../img/epargneB.png')}
            />
          <Text style={menu.buttonLabel}>{'Épargne'.toUpperCase()}</Text>
          </TouchableOpacity>
      </Display>
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
          <TouchableOpacity style={menu.menuLinkAdd} onPress={() => {this.toggleDisplay()}}>
            <View style={menu.add}>
              <Image
                style={menu.iconeAdd}
                source={ require('../../img/add.png')}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={menu.menuLink} onPress={this.goEpargne}>
            <Image
              style={menu.iconeEpargne}
              source={ require('../../img/epargne.png')}
            />
          <Text style={menu.menuLabel}>Épargne</Text>
          </TouchableOpacity>
          <TouchableOpacity style={menu.menuLink} onPress={this.goPret}>
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

  export default Pret;
