import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView,  StatusBar, Image, Dimensions,TextInput,CameraRoll } from 'react-native';
import axios from 'axios';
import Form from 'react-native-form';
import SimplePicker from 'react-native-simple-picker';
import SimpleStepper from 'react-native-simple-stepper';
import DatePicker from 'react-native-datepicker'

let styles = require('../../style/addStyle'),
    nav = require('../../style/navStyle'),
    menu = require('../../style/menuStyle')
    custom = require('../../style/addEpargne');

    const options = ['Jamais', '1', '2'];

    import Depense from '../depense/depense';
    import Epargne from './epargne';
    import Pret from '../pret/pret';
    import addEpargne from './addEpargne';
    import Home from '../Home';

let updateEpargne = React.createClass ({
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
      title:'Ajouter épargne',
      navigationBarHidden:true,
      passProps:{username:this.props.username,token:this.props.token},
    })
  },
  componentDidMount(){
    var config = {
      'headers': { 'Authorization': 'Bearer ' + this.props.token }
    };
    axios.get('http://104.131.74.22:8080/epargne/'+this.props.epargne_id,config)
    .then( response => {
      const epargneDetails = response.data['data'];
      this.setState({ name:epargneDetails.name,
                      montant:epargneDetails.montant,
                      mensualite:epargneDetails.mensualite,
                      depart:epargneDetails.depart,
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

      let regex = /^[0-9]{2}\-[0-9]{1}\-[0-9]{4}$/,
          test = regex.test(this.state.depart);

        if( this.state.name !='' ){
          var name = this.state.name;
          if ( !isNaN(this.state.montant) && !isNaN(this.state.mensualite)){
            var montant = ( this.state.montant || "" );
            var mensualite = (this.state.mensualite || "" );
            if ( test === true){
              var that = this;
              var depart = (this.state.depart || "" );
              axios.patch('http://104.131.74.22:8080/epargne/'+this.props.epargne_id,{
                name:name,
                montant:montant,
                mensualite:mensualite,
                depart:depart,
                user:this.props.username,
              },config)
              .then(function (response) {
                that.props.navigator.push({
                  component: Epargne,
                  title:'Epargne',
                  navigationBarHidden:true,
                  passProps:{username:that.props.username,token:that.props.token},
                });
              })
              .catch(function (error) {
                alert('Erreur:'+ error);
              });
            }
            else{
              var depart = this.state.epargneDetails.depart;
            }
          }
          else{
            alert('Les montants doivent être des nombres !')
          }
        }
        else{
          alert(`Le nom de l'épargne est vide`);
        }

  },
  getInitialState: function() {
    return {
      montant:0,
      mensualite:0,
      name:'',
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
          <TouchableOpacity style={nav.backLink} onPress={this.goEpargne}>
            <Image style={nav.backIcone} source={ require('../../img/back.png')}
              />
            <Text style={nav.backText}>Épargne</Text>
          </TouchableOpacity>
          <Text style={nav.navTitleCustom}>Modifier une épargne</Text>
        </View>
       </View>
    )
  },
  _renderSwitch(){
    return(
      <View style={custom.quickLinkContainer}>
         <TouchableOpacity style={custom.quickLink} onPress={this.goPret}>
           <View style={custom.quickLinkContent}>
             <Text style={custom.quickLinkText}>Prêt</Text>
           </View>
         </TouchableOpacity>
         <TouchableOpacity style={custom.quickLink}>
           <View style={custom.quickLinkContentActive}>
             <Text style={custom.quickLinkTextActive}>Épargne</Text>
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
                keyboardType={'numeric'}
                onChangeText={(text) => {
                  this.setState( {montant:text} );
                }}
                value={this.state.montant.toString()}
              />
            <View style={styles.buttonMontant}>
              <SimpleStepper valueChanged={(montant) => this.valueChanged(montant)} initialValue={Number(this.state.montant)}
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
                keyboardType={'numeric'}
                onChangeText={(text) => {
                  this.setState( {mensualite:text} );
                }}
                value={this.state.mensualite.toString()}
              />
            <View style={styles.buttonMontant}>
              <SimpleStepper valueChanged={(mensualite) => this.mensualiteChanged(mensualite)} initialValue={Number(this.state.mensualite)}
              minimumValue={0}
              maximumValue={100.000}
              stepValue={1}
              tintColor={'#FFFFFF'}
              padding={4}
              />
            </View>
            </View>
        </View>
        <View style={styles.dateContainer}>
          <Text style={custom.labelBlue}>{ `Date de début de l'épargne`.toUpperCase() }</Text>
            <View style={styles.inputBoxEpargne}>
              <DatePicker
                style={styles.inputDate}
                date={this.state.debut}
                mode="date"
                placeholder={this.state.depart}
                format="DD-M-YYYY"
                minDate="01-5-2017"
                maxDate="01-01-2018"
                confirmBtnText="Confirmer"
                cancelBtnText="Annuler"
                customStyles={{
                  dateInput: {
                    borderWidth:0,
                    width:'80%',
                    alignItems:'center',
                  },
                  placeholderText:{
                    fontSize:18,
                    fontFamily:'lato-regular',
                    color:'#333333',
                  },
                  dateIcon: {
                    position: 'absolute',
                    right: 0,
                    top: 4,
                  },
                  dateText:{
                    fontSize:18,
                    fontFamily:'lato-regular',
                  }
                }}
                onDateChange={(text) => {this.setState({depart: text})}}
              />
            </View>
        </View>
        <View style={styles.actionContainer}>
          <TouchableOpacity style={styles.cancelContainer} onPress={this.goEpargne}>
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

  export default updateEpargne;
