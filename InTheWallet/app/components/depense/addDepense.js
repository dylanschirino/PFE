import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView,  StatusBar, Image, Dimensions,TextInput,CameraRoll } from 'react-native';
import axios from 'axios';
import Form from 'react-native-form';
import SimplePicker from 'react-native-simple-picker';
import SimpleStepper from 'react-native-simple-stepper';

let styles = require('../../style/addStyle'),
    menu = require('../../style/menuStyle');

    const options = ['Jamais', '1', '2'];

    import Depense from './depense';

let addDepense = React.createClass ({
  goBack(){
    this.props.navigator.pop()
  },
  _handlePress() {
  let name = ( this.state.name || "" ),
      montant = ( this.state.montant || "" ),
      categorieString = this.state.categorie,
      categorieArray = [],
      payement,
      repeater = this.state.repeater;
      categorieArray = categorieString.split(',');

  axios.post('http://104.131.74.22:8080/depense', {
    name:name,
    montant:montant,
    user:this.props.username,
    categorie:categorieArray,
    payement:this.state.payement,
    repeater:this.state.selectedOption,
  })
  .then(function (response) {
    response.data['data']['categorie'];
  })
  .catch(function (error) {
    alert('Erreur:'+ error);
  });
  },
  getInitialState: function() {
    return {
      payement:'',
      clicked:0,
      selectedOption:'',
      montant:0,
      imageSource:null,
    }
  },
  valueChanged(montant){
    montant = Math.round(montant * 100) / 100;
    this.setState({
      montant:montant,
    })
  },
  pickImage() {
  },
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
              value={this.state.montant.toString()}
            />
          <View style={styles.buttonMontant}>
            <SimpleStepper valueChanged={(montant) => this.valueChanged(montant)} initialValue={this.state.montant}
            minimumValue={0}
            maximumValue={100.000}
            stepValue={1}
            tintColor={'#5999CE'}
            padding={9}
            backgroundColor={'#FFFFFF'}
            />
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
          <TextInput style={styles.inputCategorie}
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
          <View style={styles.picker}>
            <Text style={styles.pickerButton} onPress={() => {this.refs.picker.show();}}>
            La dépense est repeté  : {this.state.selectedOption}
            </Text>
            <SimplePicker
          ref={'picker'}
          options={options}
          onSubmit={(option) => {
            this.setState({
              selectedOption: option,
            });
          }}
        />
          </View>
          </View>
      </View>
      <View style={styles.bigContainer}>
        <View style={styles.pictureContainer}>
          <Text style={styles.labelChoose}>{ 'Mode de payement'.toUpperCase() }</Text>
          <View style={styles.chooseContainer}>
            <TouchableOpacity style={(this.state.clicked == 0 || this.state.clicked == 2)?styles.buttonChoose:styles.buttonChooseActived} onPress={() => this.setState({payement:'carte'})}>
              <TouchableOpacity onPress={() => this.setState({clicked:1})}>
                <Image
                  style={styles.iconCredit}
                  source={ require('../../img/credit-card.png')}
                />
              </TouchableOpacity>
            </TouchableOpacity>
            <TouchableOpacity style={(this.state.clicked == 0 || this.state.clicked == 1)?styles.buttonChoose:styles.buttonChooseActived} onPress={() => this.setState({payement:'cash'})}>
              <TouchableOpacity onPress={() => this.setState({clicked:2})}>
              <Image
                style={styles.iconCash}
                source={ require('../../img/cash-choose.png')}
              />
              </TouchableOpacity>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.pictureContainerTwo}>
          <Text style={styles.labelChoose}>{ 'Photo de la dépense'.toUpperCase() }</Text>
          <View style={styles.chooseContainerPhoto}>
            <TouchableOpacity style={styles.pictureChoose} onPress={this.pickImage()}>
              <Image
                style={styles.iconPhoto}
                source={ require('../../img/photo-camera.png')}
              />
            <Image style={styles.avatar} source={this.state.imageSource} />
          </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.actionContainer}>
        <TouchableOpacity style={styles.cancelContainer} onPress={this.goBack}>
          <Image source={require('../../img/cancel.png')} style={styles.cancelIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.checkContainer} onPress={this._handlePress}>
          <Image source={require('../../img/check.png')} style={styles.checkIcon}
          />
        </TouchableOpacity>
      </View>
    </Form>
    <View style={menu.menu}>
        <TouchableOpacity style={menu.menuLink}>
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

  module.exports = addDepense;
