import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView,  StatusBar, Image, Dimensions,Alert } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import SearchBar from 'react-native-search-bar';
import axios from 'axios';
import TimerMixin from 'react-timer-mixin';
import moment from 'moment';
import Display from 'react-native-display';
import LinearGradient from 'react-native-linear-gradient';
let duration = require("moment-duration-format");

let nav = require('../../style/navStyle'),
    menu = require('../../style/menuStyle'),
    styles = require('../../style/listStyle'),
    details = require('../../style/detailCustom');

import updateEpargne from './updateEpargne';
import Depense from '../depense/depense';
import Pret from '../pret/pret';
import Home from '../Home';
import Epargne from '../epargne/epargne';
import addDepense from '../depense/addDepense';
import addPret from "../pret/addPret";

let Details = React.createClass ({
  mixins: [TimerMixin],
  componentDidMount(){
    var config = {
      'headers': { 'Authorization': 'Bearer ' + this.props.token }
    };
    axios.get('http://104.131.74.22:8080/epargne/'+this.props.epargne_id,config)
    .then( response => {
      const epargneDetails = response.data['data'];
      this.setState({ epargneDetails });
    })
    .catch(function (error) {
      alert('Erreur:'+ error);
    });

    if(this.props.name != null && this.props.name.length >= 15 ){
      var name = this.props.name.substring(0,15)+'...';
      this.setState({name});
    }
    else{
      this.setState({name:this.props.name});
    }

    this.setInterval( () => {
      var datecreated = new Date();
      var timeStamp = + new Date();
      var myDate = this.props.end;
      myDate = myDate.split("/");
      var newDate = myDate[1] + '/' + myDate[0] + "/" + myDate[2];
      var timeStampFinal = new Date(newDate).getTime();
      var distance = (timeStampFinal - timeStamp);
      var month = Math.floor( distance / (1000 * 60 * 60 * 24 * 31));
      var days = Math.floor((distance / (1000 * 60 * 60 * 24)));
      if( days <= 0 ){
        var timeS = 'ÉPARGNE CLOTURÉ'
      }
      else{
        var timeS = moment.duration(days, "days").format("Y [ANS] M [MOIS] D [JOURS]");
      }
      this.setState({time:timeS});
      } ,1000);
  },
  getInitialState: function() {
    return {
      epargneDetails:'',
      user:this.props.username,
      time:'',
      enable:false,
      name:''
    }
  },
  toggleDisplay() {
    let toggle = !this.state.enable;
    this.setState({enable: toggle});
  },
  addDepense(){
    this.props.navigator.push({
      component: addDepense,
      title:'addDepense',
      navigationBarHidden:true,
      passProps:{username:this.props.username,token:this.props.token},
    })
  },
  addPret(){
    this.props.navigator.push({
      component: addPret,
      title:'Ajouter prêt',
      navigationBarHidden:true,
      passProps:{username:this.state.user,token:this.props.token},
    })
  },
  _handleDelete(){
    var config = {
      'headers': { 'Authorization': 'Bearer ' + this.props.token }
    };
    var that = this;
    axios.delete('http://104.131.74.22:8080/epargne/'+this.props.epargne_id,config)
    .then( response => {
      this.props.navigator.push({
        component: Epargne,
        title:'Epargne',
        navigationBarHidden:true,
        passProps:{username:this.state.user,token:this.props.token},
      })
    })
    .catch(function (error) {
      alert('Erreur:'+ error);
    });
  },
  goHome(){
    this.props.navigator.push({
      component: Home,
      title:'Home',
      navigationBarHidden:true,
      passProps:{username:this.state.user,token:this.props.token},
    })
  },
  goEpargne(){
    this.props.navigator.push({
      component: Epargne,
      title:'Epargne',
      navigationBarHidden:true,
      passProps:{username:this.state.user,token:this.props.token},
    })
  },
  goDepense(){
    this.props.navigator.push({
      component: Depense,
      title:'Dépense',
      navigationBarHidden:true,
      passProps:{username:this.state.user,token:this.props.token},
    })
  },
  goPret(){
    this.props.navigator.push({
      component: Pret,
      title:'Prêt',
      navigationBarHidden:true,
      passProps:{username:this.state.user,token:this.props.token},
    })
  },
  updateEpargne(){
    this.props.navigator.push({
      component: updateEpargne,
      title:'Modifier épargne',
      navigationBarHidden:true,
      passProps:{username:this.state.user,token:this.props.token,epargne_id:this.props.epargne_id},
    })
  },
  _renderDetails(){
        return (
          <View style={details.contentInfo}>
            <View style={details.container}>
              <View style={details.head}>
                <Text style={details.title}>{this.props.name}</Text>
              </View>
              <View style={details.clockContainer}>
                <View style={details.clockBorder}>
                    <Text style={details.timer}>{this.state.time}</Text>
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
                    <Text style={details.response}>{this.state.epargneDetails.end}</Text>
                  </View>
                </View>
            </View>
          </View>
        )
  },
  _renderHead(){
    return(
      <View style={nav.header}>
        <StatusBar barStyle="light-content"
          />
        <View style={nav.navBar}>
          <TouchableOpacity style={nav.backLink} onPress={this.goEpargne}>
            <Image style={nav.backIcone} source={ require('../../img/back.png')}
              />
            <Text style={nav.backText}>Épargnes</Text>
          </TouchableOpacity>
          <Text style={nav.navTitle}>{this.state.name}</Text>
          <TouchableOpacity style={nav.add} onPress={this.updateEpargne}>
            <Image style={nav.addIcone} source={ require('../../img/edit-details.png')}
              />
          </TouchableOpacity>
          <TouchableOpacity style={nav.addCustom} onPress={
            () => Alert.alert(
            'Supprimer',
            'Souhaitez-vous vraiment supprimer cette épargne ?',
            [
              {text: 'Supprimer', onPress: () => {this._handleDelete()}},
              {text: 'Annuler', onPress: () => null},
            ]
            )
            }>
            <Image style={nav.addIcone} source={ require('../../img/button-delete.png')}
              />
          </TouchableOpacity>
        </View>
      </View>
    )
  },
  _renderDisplay(){
    return(
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
    )
  },
  _renderMenu(){
    return(
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
              source={ require('../../img/epargne-active.png')}
            />
          <Text style={menu.menuLabel}>Épargnes</Text>
          </TouchableOpacity>
          <TouchableOpacity style={menu.menuLink} onPress={this.goPret}>
            <Image
              style={menu.iconePret}
              source={ require('../../img/pret.png')}
            />
          <Text style={menu.menuLabel}>Prêts</Text>
          </TouchableOpacity>
      </View>
    )
  },
  render() {
    return (
      <View style={{flex:1,}}>
      {this._renderHead()}
      <View style={styles.containerCustom}>
        <LinearGradient colors={['#0396FF','#4C85AF']} start={{x: 0.0, y: 0.0}} end={{x: 1.0, y: 1.0}} style={styles.accrocheContainer}>
          <View style={styles.accrocheTextBorder}>
            <Text style={styles.accrocheText}>Un peu de patience ...</Text>
              <Image style={styles.imgCoffreCustom} source={ require('../../img/coffre.png')}
                />
          </View>
      </LinearGradient>
      </View>
      {this._renderDetails()}
      {this._renderDisplay()}
      {this._renderMenu()}
      </View>
    )}
  });

  export default Details;
