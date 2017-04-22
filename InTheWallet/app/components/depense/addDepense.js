import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView,  StatusBar, Image, Dimensions,TextInput } from 'react-native';

import Form from 'react-native-form';

let styles = require('../../style/addStyle');

let addDepense = React.createClass ({
  render() {
    return (
      <View style={styles.mainContent}>
      <StatusBar barStyle="dark-content"
      />
    <Form ref="addDepense">
      <View style={styles.nameContainer}>
        <Text style={styles.label}>{ 'Nom de la dépense'.toUpperCase() }</Text>
          <View style={styles.inputBox}>
            <Image
              style={styles.icone}
              source={ require('../../img/add-edit.png')}
            />
            <TextInput style={styles.input}
              ref="name"
              onChangeText={(text) => {
                this.setState( {name:text} );
              }}
              placeholder='Ex : Glace au chocolat'
              placeholderTextColor='#B6CBE1'
            />
          </View>
      </View>
      <View style={styles.montantContainer}>
        <Text style={styles.label}>{ 'Montant total'.toUpperCase() }</Text>
          <View style={styles.inputMontantBox}>
            <Image
              style={styles.euroIcone}
              source={ require('../../img/euro.png')}
            />
          <TextInput style={styles.inputMontant}
              ref="montant"
              onChangeText={(text) => {
                this.setState( {montant:text} );
              }}
              placeholder='10.000'
              placeholderTextColor='#FFFFFF'
            />
          <View style={styles.buttonMontant}>
            <TouchableOpacity style={styles.buttonMoreLessOne}>
              <Text style={styles.buttonLabel}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonMoreLess}>
              <Text style={styles.buttonLabelLess}>¯</Text>
            </TouchableOpacity>
          </View>
          </View>
      </View>
      <View style={styles.optionContainer}>
        <Text style={styles.labelOptions}>{ 'Catégories'.toUpperCase() }</Text>
          <View style={styles.inputOptionBox}>
            <Image
              style={styles.icone}
              source={ require('../../img/add-edit-blue.png')}
            />
            <TextInput style={styles.input}
              ref="categorie"
              onChangeText={(text) => {
                this.setState( {categorie:text} );
              }}
              placeholder='Ex : Alimentation'
              placeholderTextColor='#B6CBE1'
            />
          </View>
      </View>
      <View style={styles.optionContainer}>
        <Text style={styles.labelOptions}>{ 'Répéter la dépense'.toUpperCase() }</Text>
          <View style={styles.inputOptionBox}>
            <Image
              style={styles.refreshIcone}
              source={ require('../../img/refresh.png')}
            />
            <TextInput style={styles.input}
              ref="categorie"
              onChangeText={(text) => {
                this.setState( {categorie:text} );
              }}
              placeholder='Jamais'
              placeholderTextColor='#B6CBE1'
            />
          </View>
      </View>
      <View style={styles.bigContainer}>
        <View style={styles.pictureContainer}>
          <Text style={styles.labelChoose}>{ 'Mode de payement'.toUpperCase() }</Text>
          <View style={styles.chooseContainer}>
            <TouchableOpacity style={styles.buttonChoose}>
              <Image
                style={styles.iconCredit}
                source={ require('../../img/credit-card.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonChoose}>
              <Image
                style={styles.iconCash}
                source={ require('../../img/cash-choose.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.pictureContainerTwo}>
          <Text style={styles.labelChoose}>{ 'Photo de la dépense'.toUpperCase() }</Text>
          <View style={styles.chooseContainer}>
            <View style={styles.pictureChoose}>
              <Image
                style={styles.iconPhoto}
                source={ require('../../img/photo-camera.png')}
              />
          </View>
          </View>
        </View>
      </View>
    </Form>
      </View>
    )}
  });

  module.exports = addDepense;
