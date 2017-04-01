import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Image} from 'react-native';
import Form from 'react-native-form';
import axios from 'axios';
import sha256 from 'sha256';
import EStyleSheet from 'react-native-extended-stylesheet';


let styles = require('../../../style/SubscribeStyle');

let Login = React.createClass ({

  _handlePress(event) {
  let email=this.state.email.toLowerCase(),
      password=this.state.password;

      if( password =="" || email==""){
        alert("Un ou plusieurs champs est vide");
      }
      else{
        axios.post('http://104.131.74.22:8080/login', {
            email:email,
            password:sha256(password),
        })
        .then(function (response) {
          alert('Bienvenue dans InTheWallet');
           })
           .catch(function (error) {
             alert('Erreur:'+ error);
           });
      }
  },
  render() {

    return (
        <View style={styles.body}>
          <View style={styles.titleContainer}>
          <Text style={styles.title}>
          { 'Connexion'.toUpperCase() }
          </Text>
        </View>
        <Form style={styles.inputContainer} ref="login">

          <Text style={styles.label}>
            <Image style={styles.icon}
              source={ require('../../../img/email.png')}
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
              source={ require('../../../img/password.png')}
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


          <TouchableOpacity style={styles.button} onPress={this._handlePress}>
          <Text style={styles.buttonText}>
          { `Connexion`.toUpperCase() }
          </Text>
        </TouchableOpacity>

        </Form>

        <Image style={styles.cercle}
          source={ require('../../../img/cercle.png')}
          />
        </View>
    )
  }
})

module.exports = Login;
