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
import Pret from "./pret/pret";

let Limit = React.createClass ({
  getInitialState: function() {
    return {
      limit:'',
      user:this.props.username,
    }
  },
  goDepense(){
    this.props.navigator.push({
      component: Depense,
      title:'Dépense',
      navigationBarHidden:true,
      passProps:{username:this.state.user}
    });
  },
  goEpargne(){
    this.props.navigator.push({
      component: Epargne,
      title:'Épargne',
      navigationBarHidden:true,
      passProps:{username:this.state.user}
    });
  },
  goPret(){
    this.props.navigator.push({
      component: Pret,
      title:'Prêt',
      navigationBarHidden:true,
      passProps:{username:this.state.user}
    });
  },
  render() {
    return (
      <View style={{flex:1,}}>
        <View style={nav.header}>
          <StatusBar barStyle="light-content"
            />
          <View style={nav.navBar}>
            <TouchableOpacity style={nav.backLink} onPress={this.goHome}>
              <Image style={nav.backIcone} source={ require('../img/back.png')}
                />
              <Text style={nav.backText}>Accueil</Text>
            </TouchableOpacity>
            <Text style={nav.navTitleCustomLimit}>Limite du mois</Text>
          </View>
        </View>
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
                value={this.state.limit.toString()}
                color='#333333'
                placeholderTextColor='#ACACAC'/>
              <Text style={limit.euro}>€</Text>
            </View>
          </Form>
        </View>
        <View style={limit.actionContainer}>
          <TouchableOpacity style={limit.cancelContainer} onPress={this.goEpargne}>
            <Image source={require('../img/cancel.png')} style={limit.cancelIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity style={limit.checkContainer} onPress={this._handlePress}>
            <Image source={require('../img/check.png')} style={limit.checkIcon}
            />
          </TouchableOpacity>
        </View>
        <View style={menu.menu}>
            <TouchableOpacity style={menu.menuLink}>
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
      </View>
    )}
  });

export default Limit;
