import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView,  StatusBar, Image, Dimensions,TextInput,CameraRoll,KeyboardAvoidingView,Alert } from 'react-native';
import axios from 'axios';
import Form from 'react-native-form';
import SimplePicker from 'react-native-simple-picker';
import DatePicker from 'react-native-datepicker';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

let styles = require('../../style/addStyle'),
    nav = require('../../style/navStyle'),
    menu = require('../../style/menuStyle')
    custom = require('../../style/addEpargne');

    import Depense from '../depense/depense';
    import Epargne from '../epargne/epargne';
    import Pret from './pret';
    import Home from '../Home';
    import addEpargne from '../epargne/addEpargne';

let addPret = React.createClass ({
  goHome(){
    this.props.navigator.push({
      component: Home,
      title:'Home',
      navigationBarHidden:true,
      passProps:{username:this.props.username,token:this.props.token},
    });
  },
  goDepense(){
    this.props.navigator.push({
      component: Depense,
      title:'Depense',
      navigationBarHidden:true,
      passProps:{username:this.props.username,token:this.props.token},
    });
  },
  goEpargne(){
    this.props.navigator.push({
      component: Epargne,
      title:'Epargne',
      navigationBarHidden:true,
      passProps:{username:this.props.username,token:this.props.token},
    });
  },
  goPret(){
    this.props.navigator.push({
      component: Pret,
      title:'Pret',
      navigationBarHidden:true,
      passProps:{username:this.props.username,token:this.props.token},
    });
  },
  addEpargne(){
    this.props.navigator.push({
      component: addEpargne,
      title:'addEpargne',
      navigationBarHidden:true,
      passProps:{username:this.props.username,token:this.props.token},
    });
  },
  _handlePress() {
    var config = {
      'headers': { 'Authorization': 'Bearer ' + this.props.token }
    };
    let duree = (this.state.duree || "" );
    let regex = /^[0-9]{2}\-[0-9]{1}\-[0-9]{4}$/,
        test = regex.test(this.state.debut);

        if( this.state.name !='' ){
          var name = this.state.name;
          if ( !isNaN(this.state.montant) && !isNaN(this.state.mensualite)){
            var montant = ( this.state.montant || "" );
            var mensualite = (this.state.mensualite || "" );
            if( !isNaN(this.state.interet) && this.state.interet >= 0 && this.state.interet <=100 ){
              var interet = this.state.interet;
              if ( test === true){
                var that = this;
                var debut = (this.state.debut || "" );
                axios.post('http://104.131.74.22:8080/pret', {
                  name:name,
                  montant:montant,
                  mensualite:mensualite,
                  depart:debut,
                  interet:interet,
                  duree:duree,
                  user:this.props.username,
                },config)
                .then(function (response) {
                  that.props.navigator.push({
                  component: Pret,
                  title:'Pret',
                  navigationBarHidden:true,
                  passProps:{username:that.props.username,token:that.props.token},
                  });
                })
                .catch(function (error) {
                  alert('Erreur:'+ error);
                });
              }
              else{
                Alert.alert(
                `Date incorrect`,
                `Le format doit être : 12-1-2017`,
                )
              }
            }
            else{
              Alert.alert(
              `Taux d'interêt`,
              `Le taux d'interêt doit être un nombre (Ex:2.5)`,
              )
            }
          }
          else{
            Alert.alert(
            `Montant`,
            `Les montants doivent être des nombres !`,
            )
          }
        }
        else{
          Alert.alert(
          `Nom du prêt`,
          `Le nom du prêt ne peut pas être vide`,
          )
        }

  },
  getInitialState: function() {
    return {
      montant:0,
      mensualite:0,
    }
  },
  decrement(montant){
    montant--;
    this.setState({montant:montant});
  },
  increment(montant){
    montant++;
    this.setState({montant:montant});
  },
  Mensualiteincrement(mensualite){
    mensualite++;
    this.setState({mensualite:mensualite});
  },
  Mensualitedecrement(mensualite){
    mensualite--;
    this.setState({mensualite:mensualite});
  },
  _renderHead(){
    return(
      <View style={nav.header}>
        <StatusBar barStyle="light-content"
        />
        <View style={nav.navBar}>
          <TouchableOpacity style={nav.backLink} onPress={this.goPret}>
            <Image style={nav.backIcone} source={ require('../../img/back.png')}
              />
            <Text style={nav.backText}>Prêt</Text>
          </TouchableOpacity>
          <Text style={nav.navTitleCustomPret}>Ajouter un prêt</Text>
        </View>
       </View>
    )
  },
  _renderSwitch(){
    return(
      <View style={custom.quickLinkContainer}>
        <View style={custom.quickLinkBorder}>
        <TouchableOpacity style={custom.quickLinkContentRight} onPress={this.goEpargne}>
            <Text style={custom.quickLinkText}>Épargne</Text>
        </TouchableOpacity>
         <TouchableOpacity style={custom.quickLinkContentActiveLeft} onPress={this.addPret}>
             <Text style={custom.quickLinkTextActive}>Prêt</Text>
         </TouchableOpacity>
       </View>
       </View>

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
              source={ require('../../img/pret-active.png')}
            />
          <Text style={menu.menuLabel}>Prêt</Text>
          </TouchableOpacity>
      </View>
    )
  },

  render() {
    return (
      <View style={styles.mainContent}>
        {this._renderHead()}
        {this._renderSwitch()}
        <Form ref="addEpargne">
          <KeyboardAwareScrollView automaticallyAdjustContentInsets={false}>
            <View style={styles.nameContainerCustom}>
              <Text style={styles.label}>{ 'Nom du prêt'.toUpperCase() }</Text>
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
                    placeholder='Ex : Prêt Hypothécaire'
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
                    keyboardType={'numbers-and-punctuation'}
                    onChangeText={(text) => {
                      this.setState( {montant:text} );
                    }}
                    value={this.state.montant.toString()}
                  />
                <View style={styles.buttonMontant}>
                  <TouchableOpacity onPress={() => {
                        this.decrement(this.state.montant)
                      }} style={styles.buttonLess}>
                      <Image
                        style={styles.decrement}
                        source={ require('../../img/decrement.png')}
                      />
                    </TouchableOpacity>
                    <View style={styles.bar}></View>
                  <TouchableOpacity onPress={() => {this.increment(this.state.montant)}} style={styles.buttonMore}>
                    <Image
                      style={styles.increment}
                      source={ require('../../img/increment.png')}
                    />
                  </TouchableOpacity>
                </View>
                </View>
            </View>
            <View style={styles.mensualiteContainer}>
              <Text style={styles.label}>{ 'Mensualité (€ par mois)'.toUpperCase() }</Text>
                <View style={styles.inputMontantBox}>
                  <Image
                    style={styles.calendarIcone}
                    source={ require('../../img/calendar.png')}
                  />
                <TextInput style={styles.inputMontant}
                    ref="mensualite"
                    keyboardType={'numbers-and-punctuation'}
                    onChangeText={(text) => {
                      this.setState( {mensualite:text} );
                    }}
                    value={this.state.mensualite.toString()}
                  />
                <View style={styles.buttonMontantMensualite}>
                  <TouchableOpacity onPress={() => {
                        this.Mensualitedecrement(this.state.mensualite)
                      }} style={styles.buttonLessMensualite}>
                      <Image
                        style={styles.decrement}
                        source={ require('../../img/decrement-white.png')}
                      />
                    </TouchableOpacity>
                    <View style={styles.barMensualite}></View>
                  <TouchableOpacity onPress={() => {this.Mensualiteincrement(this.state.mensualite)}} style={styles.buttonMoreMensualite}>
                    <Image
                      style={styles.increment}
                      source={ require('../../img/increment-white.png')}
                    />
                  </TouchableOpacity>
                </View>
                </View>
            </View>
            <View style={custom.pretContainer}>
              <View style={custom.pretOption}>
                <Text style={custom.labelBluePret}>{ `Taux d'interêt`.toUpperCase() }</Text>
                  <View style={custom.inputBoxPret}>
                    <TextInput style={custom.inputOption}
                      ref="interet"
                      onChangeText={(text) => {
                        this.setState( {interet:text} );
                      }}
                      placeholder='2.5'
                      placeholderTextColor='#B6CBE1'
                    />
                  <Text style={custom.percent}>%</Text>
                  </View>
              </View>
              <View style={custom.pretOption}>
                <Text style={custom.labelBluePret}>{ `Date de départ`.toUpperCase() }</Text>
                  <View style={custom.inputBoxPret}>
                    <DatePicker
                      style={custom.inputOptionDate}
                      date={this.state.debut}
                      mode="date"
                      placeholder="Choisir une date"
                      format="DD-M-YYYY"
                      minDate="01-1-2017"
                      maxDate="01-1-2018"
                      confirmBtnText="Confirmer"
                      cancelBtnText="Annuler"
                      showIcon={false}
                      customStyles={{
                        dateInput: {
                          borderWidth:0,
                          width:'100%',
                          marginRight:10,
                        },
                        placeholderText:{
                          fontSize:16,
                          paddingBottom:15,
                          fontFamily:'lato-regular',
                          color:'#B6CBE1',
                          textAlign:'center',
                          width:'100%',
                        },
                        dateText:{
                          fontSize:16,
                          paddingBottom:15,
                          fontFamily:'lato-regular',
                        }
                      }}
                      onDateChange={(text) => {this.setState({debut: text})}}
                    />
                  </View>
              </View>
            </View>
          </KeyboardAwareScrollView>
            <View style={styles.actionContainer}>
              <TouchableOpacity style={styles.cancelContainer} onPress={this.goPret}>
                <Image source={require('../../img/cancel.png')} style={styles.cancelIcon}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.checkContainer} onPress={this._handlePress}>
                <Image source={require('../../img/check.png')} style={styles.checkIcon}
                />
              </TouchableOpacity>
            </View>
        </Form>

        {this._renderMenu()}
      </View>
    )}
  });

  export default addPret;
