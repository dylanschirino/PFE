import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Image} from 'react-native';
import Form from 'react-native-form';
import axios from 'axios';
import sha256 from 'sha256';
import EStyleSheet from 'react-native-extended-stylesheet';


let styles = require('../../style/SubscribeStyle');
import Login from './Login.js';

let Subscribe = React.createClass ({

  goLogin() {
    this.props.navigator.push({
      component: Login,
      title:'Login',
      navigationBarHidden:true,
    });
  },
  getInitialState: function() {
    return {
      email:'',
      password:'',
      password2:'',
    }
  },
  _handlePress(event) {
  let email = ( this.state.email || "" ).toLowerCase(),
      password = this.state.password || "",
      password2 = this.state.password2;

      if( password =="" || email=="" || password2=="" ){
        alert("Un ou plusieurs champs est vide");
      }
      else {

        // Étape de vérifications
        function validateEmail(email) {
          let re = /(.+)@(.+){2,}\.(.+){2,}/;
          return re.test(email);

        }
        if (!validateEmail(email)) {
            alert('Votre adresse email est invalide');
        }
        if( password!=password2 ){
          alert('Vous avez encodez 2 mot de passe différent');
        }

          axios.post('http://104.131.74.22:8080/user', {
            email:email,
            password:sha256(password),
          })
          .then(function (response) {
             })
             .catch(function (error) {
               alert('Erreur:'+ error);
             });
          this.props.navigator.push({
          component: Login,
          title:'Login',
          navigationBarHidden:true,
        });
      }
  },
  render() {

    return (
        <View style={styles.body}>
          <View style={styles.titleContainer}>
          <Text style={styles.title}>
          { 'Inscription'.toUpperCase() }
          </Text>
        </View>
        <Form style={styles.inputContainer} ref="subscribe">

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

          <Text style={styles.label}>
            <Image style={{height:17.86, width:30,marginRight:5,}}
              source={ require('../../img/checkpwd.png')}
            />
          { 'Confirmer Mot de passe :'.toUpperCase() }
          </Text>

          <View style={styles.inputBox}>
          <TextInput style={styles.input}
            secureTextEntry={true}
            onChangeText={(text) => {
              this.setState( {password2:text} );
            }}
            placeholder='••••••••••••••••'
            placeholderTextColor='#B6CBE1'
          />
          </View>
          <TouchableOpacity style={styles.linkContainer} onPress={this.goLogin}>
          <Text style={styles.link}>Déjà inscrit ? Vers la page de connexion!</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={this._handlePress}>
          <Text style={styles.buttonText}>
          { `S'inscrire!`.toUpperCase() }
          </Text>
        </TouchableOpacity>

        </Form>

        <Image style={styles.cercle}
          source={ require('../../img/cercle.png')}
          />
        </View>
    )
  }
})

module.exports = Subscribe;
