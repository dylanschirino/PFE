import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView,  StatusBar, Image, Dimensions,TextInput } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Form from 'react-native-form';
import axios from 'axios';

let nav = require('../style/navStyle'),
    menu = require('../style/menuStyle'),
    limit = require('../style/limitStyle');

import Depense from "./depense/depense";
import Epargne from "./epargne/epargne";
import Home from "./Home";
import Pret from "./pret/pret";

let Limit = React.createClass ({
  componentDidMount() {
    var config = {
      'headers': { 'Authorization': 'Bearer ' + this.props.token }
    };
    axios.get('http://104.131.74.22:8080/home?user='+this.props.username,config)
      .then(response => {
        let dataTab = response.data['data'];
        if(dataTab.length == 0){
          this.setState({limit:0})
        }
        else{
          const limit = dataTab[dataTab.length-1]['maxdepense'];
          this.setState({ limit });
        }
      });
  },
  getInitialState: function() {
    return {
      limit:0,
      user:this.props.username,
    }
  },
  goDepense(){
    this.props.navigator.push({
      component: Depense,
      title:'Dépense',
      navigationBarHidden:true,
      passProps:{username:this.state.user,token:this.props.token}
    });
  },
  goEpargne(){
    this.props.navigator.push({
      component: Epargne,
      title:'Épargne',
      navigationBarHidden:true,
      passProps:{username:this.state.user,token:this.props.token}
    });
  },
  goPret(){
    this.props.navigator.push({
      component: Pret,
      title:'Prêt',
      navigationBarHidden:true,
      passProps:{username:this.state.user,token:this.props.token}
    });
  },
  cancelHome(){
    this.props.navigator.push({
      component: Home,
      title:'Accueil',
      navigationBarHidden:true,
      passProps:{username:this.state.user,token:this.props.token}
    });
  },
  _handlePress(event) {
    var config = {
      'headers': { 'Authorization': 'Bearer ' + this.props.token }
    };
    let limit=this.state.limit;

    if(limit ==""){
      alert("La limite ne peut pas être vide");
    }
    else {
      if( !isNaN(limit) ){
        axios.post('http://104.131.74.22:8080/home', {
            maxdepense:limit,
            user:this.props.username,
        },config)
        .then(function (response) {
          limit = response.data['data']['maxdepense'];
        })
        .catch(function (error) {
          alert('Erreur:'+ error);
        });
        if(!navigator.props){
          this.props.navigator.push({
            component: Home,
            title:'Accueil',
            navigationBarHidden:true,
            passProps:{username:this.state.user,limite:limit,token:this.props.token}
          });
        }
      }
      else{
        alert('La limite doit être un nombre');
      }
    }
  },
  _renderHeader(){
    return(
      <View style={nav.header}>
        <StatusBar barStyle="light-content"
          />
        <View style={nav.navBar}>
          <TouchableOpacity style={nav.backLink} onPress={this.cancelHome}>
            <Image style={nav.backIcone} source={ require('../img/back.png')}
              />
            <Text style={nav.backText}>Accueil</Text>
          </TouchableOpacity>
          <Text style={nav.navTitleCustomLimit}>Limite du mois</Text>
        </View>
      </View>
    )
  },
  _renderInfo(){
    return(
      <View style={limit.content}>
        <View style={limit.contentHead}>
          <Image style={limit.iconTitle} source={ require('../img/question.png')}
            />
          <Text style={limit.title}>{`Qu'est-ce que la limite du mois ?`.toUpperCase()}</Text>
        </View>
        <View style={limit.contentInfo}>
          <Text style={limit.text}>La limite du mois est un montant  que vous vous fixez comme objectif à ne pas dépasser.</Text>
          <Text style={limit.text}>Il est important de vous fixer une limite qui vous corresponds, ne soyez pas trop audacieux tout en essayant de vous mettre au défi.</Text>
        </View>
      </View>
    )
  },
  _renderForm(){
    return(
      <View style={limit.formContainer}>
        <Text style={limit.titleForm}>{'Limite du mois'.toUpperCase()}</Text>
        <Form style={limit.formContent} ref="limite">
          <View style={limit.iconContainer}>
            <Image style={limit.iconForm} source={ require('../img/limit.png')}
              />
          </View>
          <View style={limit.input}>
            <TextInput style={limit.inputText}
              ref="limit"
              onChangeText={(text) => {
                this.setState( {limit:text} );
              }}
              keyboardType={'numbers-and-punctuation'}
              value={this.state.limit.toString()}
              color='#333333'
              placeholderTextColor='#ACACAC'/>
            <Text style={limit.euro}>€</Text>
          </View>
        </Form>
      </View>
    )
  },
  _renderAction(){
    return(
      <View style={limit.actionContainer}>
        <TouchableOpacity style={limit.cancelContainer} onPress={this.cancelHome}>
          <Image source={require('../img/cancel.png')} style={limit.cancelIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={limit.checkContainer} onPress={this._handlePress}>
          <Image source={require('../img/check.png')} style={limit.checkIcon}
          />
        </TouchableOpacity>
      </View>
    )
  },
  _renderMenu(){
    return(
      <View style={menu.menu}>
          <TouchableOpacity style={menu.menuLink} onPress={this.cancelHome}>
            <Image
              style={menu.icone}
              source={ require('../img/home.png')}
            />
          <Text style={menu.menuLabel}>Accueil</Text>
          </TouchableOpacity>
          <TouchableOpacity style={menu.menuLink} onPress={this.goDepense}>
            <Image
              style={menu.icone}
              source={ require('../img/depense.png')}
            />
          <Text style={menu.menuLabel}>Dépenses</Text>
          </TouchableOpacity>
          <TouchableOpacity style={menu.menuLink} onPress={this.goEpargne}>
            <Image
              style={menu.iconeEpargne}
              source={ require('../img/epargne.png')}
            />
          <Text style={menu.menuLabel}>Épargne</Text>
          </TouchableOpacity>
          <TouchableOpacity style={menu.menuLink} onPress={this.goPret}>
            <Image
              style={menu.iconePret}
              source={ require('../img/pret.png')}
            />
          <Text style={menu.menuLabel}>Prêt</Text>
          </TouchableOpacity>
      </View>
    )
  },
  render() {
    return (
      <View style={{flex:1,}}>
        {this._renderHeader()}
        {this._renderInfo()}
        {this._renderForm()}
        {this._renderAction()}
        {this._renderMenu()}
      </View>
    )}
  });

export default Limit;
