import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView,  StatusBar, Image, Dimensions,TextInput,CameraRoll } from 'react-native';
import axios from 'axios';
import Form from 'react-native-form';
import SimplePicker from 'react-native-simple-picker';
import SimpleStepper from 'react-native-simple-stepper';

let styles = require('../../style/addStyle'),
    nav = require('../../style/navStyle'),
    menu = require('../../style/menuStyle')
    custom = require('../../style/addEpargne');

    import Depense from '../depense/depense';
    import Epargne from '../epargne/epargne';
    import Pret from './pret';
    import Home from '../Home';
    import addEpargne from '../epargne/addEpargne';
    import addPret from './addPret';

let updatePret = React.createClass ({
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
  addPret(){
    this.props.navigator.push({
      component: addPret,
      title:'addPret',
      navigationBarHidden:true,
      passProps:{username:this.props.username,token:this.props.token},
    });
  },
  componentDidMount(){
    var config = {
      'headers': { 'Authorization': 'Bearer ' + this.props.token }
    };
    axios.get('http://104.131.74.22:8080/pret/'+this.props.pret_id,config)
    .then( response => {
      const pretDetails = response.data['data'];
      this.setState({ name:pretDetails.name,
                      montant:pretDetails.montant,
                      mensualite:pretDetails.mensualite,
                      interet:pretDetails.interet*100,
                      duree:pretDetails.duree,
                      depart:pretDetails.depart,
       });
    })
    .catch(function (error) {
      alert('Erreur:'+ error);
    });
  },
  _handlePress() {
    var config = {
      'headers': { 'Authorization': 'Bearer ' + this.props.token }
    };
    let name = ( this.state.name || "" ),
        montant = ( this.state.montant || "" ),
        mensualite = (this.state.mensualite || "" ),
        interet = (this.state.interet || "" ),
        depart = (this.state.depart || "" );

    axios.patch('http://104.131.74.22:8080/pret/'+this.props.pret_id,{
      name:name,
      montant:montant,
      mensualite:mensualite,
      interet:interet,
      depart:depart,
      user:this.props.username,
    },config)
    .then(function (response) {
    })
    .catch(function (error) {
      alert('Erreur:'+ error);
    });
    if(!navigator.props){
      this.props.navigator.push({
        component: Pret,
        title:'Pret',
        navigationBarHidden:true,
        passProps:{username:this.props.username,token:this.props.token},
      });
    }
  },
  getInitialState: function() {
    return {
      montant:0,
      mensualite:0,
      name:'',
      interet:'',
      depart:'',
    }
  },
  valueChanged(montant){
    montant = Math.round(montant * 100) / 100;
    this.setState({
      montant:montant,
    })
  },
  mensualiteChanged(mensualite){
    mensualite = Math.round(mensualite * 100) / 100;
    this.setState({
      mensualite:mensualite,
    })
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
          <Text style={nav.navTitle}>Modifier un prêt</Text>
          <TouchableOpacity style={nav.add} onPress={this.addPret}>
            <Image style={nav.addIcone} source={ require('../../img/addMenu.png')}
              />
          </TouchableOpacity>
        </View>
       </View>
    )
  },
  _renderSwitch(){
    return(
      <View style={custom.quickLinkContainer}>
         <TouchableOpacity style={custom.quickLink}>
           <View style={custom.quickLinkContentActiveLeft}>
             <Text style={custom.quickLinkTextActive}>Prêt</Text>
           </View>
         </TouchableOpacity>
         <TouchableOpacity style={custom.quickLink} onPress={this.addEpargne}>
           <View style={custom.quickLinkContentRight}>
             <Text style={custom.quickLinkText}>Épargne</Text>
           </View>
         </TouchableOpacity>
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
              source={ require('../../img/pret.png')}
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
        <View style={styles.nameContainerCustom}>
          <Text style={styles.label}>{ `Nom de l'épargne`.toUpperCase() }</Text>
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
                value={this.state.name}
                placeholder='Ex : Économie pour un iphone'
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
        <View style={styles.mensualiteContainer}>
          <Text style={styles.label}>{ 'Mensualité (€ par mois)'.toUpperCase() }</Text>
            <View style={styles.inputMontantBox}>
              <Image
                style={styles.calendarIcone}
                source={ require('../../img/calendar.png')}
              />
            <TextInput style={styles.inputMontant}
                ref="mensualite"
                onChangeText={(text) => {
                  this.setState( {mensualite:text} );
                }}
                value={this.state.mensualite.toString()}
              />
            <View style={styles.buttonMontant}>
              <SimpleStepper valueChanged={(mensualite) => this.mensualiteChanged(mensualite)} initialValue={this.state.mensualite}
              minimumValue={0}
              maximumValue={100.000}
              stepValue={1}
              tintColor={'#FFFFFF'}
              padding={4}
              />
            </View>
            </View>
        </View>
        <View style={custom.pretContainer}>
          <View style={custom.pretOption}>
            <Text style={custom.labelBlue}>{ `Taux d'interêt`.toUpperCase() }</Text>
              <View style={custom.inputBoxPret}>
                <TextInput style={custom.inputOption}
                  ref="interet"
                  onChangeText={(text) => {
                    this.setState( {interet:text} );
                  }}
                  placeholder='15%'
                  value={(this.state.interet).toString()}
                  placeholderTextColor='#B6CBE1'
                />
              </View>
          </View>
          <View style={custom.pretOption}>
            <Text style={custom.labelBlue}>{ `Date de départ`.toUpperCase() }</Text>
              <View style={custom.inputBoxPret}>
                <TextInput style={custom.inputOption}
                  ref="interet"
                  onChangeText={(text) => {
                    this.setState( {depart:text} );
                  }}
                  value={this.state.depart}
                  placeholder='21 Juillet 2017'
                  placeholderTextColor='#B6CBE1'
                />
              </View>
          </View>
        </View>
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

  export default updatePret;
