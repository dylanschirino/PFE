import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Image} from 'react-native';
import Form from 'react-native-form';
import EStyleSheet from 'react-native-extended-stylesheet';

let styles = require('../../style/SubscribeStyle');

export default class Subscription extends Component {
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
            placeholder='••••••••••••••••'
            placeholderTextColor='#B6CBE1'
          />
          </View>
          <TouchableOpacity style={styles.button}>
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
}
