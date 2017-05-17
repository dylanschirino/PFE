import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, AlertIOS, TextInput, Image,AsyncStorage} from 'react-native';
import Form from 'react-native-form';
import axios from 'axios';
import sha256 from 'sha256';
import EStyleSheet from 'react-native-extended-stylesheet';


let styles = require('../../style/SubscribeStyle');
import Subscribe from './Subscription';
import Home from '../Home';

let Login = React.createClass ({

  goSubscription() {
    this.props.navigator.push({
      component: Subscribe,
      title:'Subscribe',
      navigationBarHidden:true,
    });
  },
  getInitialState: function() {
    return {
      email:'',
      password:'',
    }
  },
  _handlePress(event) {
    let email=this.state.email.toLowerCase(),
        password=this.state.password,
        that = this;

      if( password =="" || email==""){
        alert("Un ou plusieurs champs est vide");
      }
      else{
        axios.post('http://104.131.74.22:8080/login', {
            email:email,
            password:sha256(password),
        })
        .then( response => {
         var tokenID = response.data['data']['token'];
         return Promise.resolve(tokenID);
        })
        .then(function(response) {
          AsyncStorage.multiSet([["tokenID", response],['username',email]]);
          that.props.navigator.push({
          component: Home,
          title:'Home',
          navigationBarHidden:true,
          passProps:{username:email,token:response},
          });
        })
        .catch(function (error) {
           alert('Erreur:'+ error);
        });
      }
  },
  render() {
    return (
        <View style={styles.body}>
          <View style={styles.titleLoginContainer}>
          <Text style={styles.title}>
          { 'Connexion'.toUpperCase() }
          </Text>
        </View>
        <View style={styles.logoContainer}>
          <Image style={styles.logo}
            source={ require('../../img/logo.jpg') }
          />
        </View>
        <Form style={styles.inputContainer} ref="login">

          <Text style={styles.label}>
            <Image style={styles.icon}
              source={ require('../../img/email.png')}
            />
          { 'Email :'.toUpperCase() }
          </Text>

          <View style={styles.inputBox}>
          <TextInput style={styles.input}
            ref="email"
            onChangeText={(text) => {
              this.setState( {email:text} );
            }}
            placeholder='email@me.be'
            placeholderTextColor='#B6CBE1'
          />
          </View>

          <Text style={styles.label}>
            <Image style={{height:17.86, width:30,marginRight:5,}}
              source={ require('../../img/password.png')}
            />
          { 'Mot de passe :'.toUpperCase() }
          </Text>
          <View style={styles.inputBox}>
          <TextInput style={styles.input}
            secureTextEntry={true}
            onChangeText={(text) => {
              this.setState( {password:text} );
            }}
            placeholder='••••••••••••••••'
            placeholderTextColor='#B6CBE1'
          />
          </View>
          <TouchableOpacity style={styles.linkContainer} onPress={this.goSubscription}>
          <Text style={styles.link}>Pas encore inscrit ? Vers l’inscription !</Text>
          </TouchableOpacity>
            <TouchableOpacity style={styles.buttonConnexion} onPress={this._handlePress}>
            <Text style={styles.buttonText}>
            { `Connexion`.toUpperCase() }
            </Text>
          </TouchableOpacity>

        </Form>

        <Image style={styles.cercle}
          source={ require('../../img/gif/cercle.gif')}
          />
        </View>
    )
  }
})

export default Login;
