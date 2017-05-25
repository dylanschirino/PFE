import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView,  StatusBar, Image, Dimensions,TextInput} from 'react-native';
import axios from 'axios';
import Form from 'react-native-form';
import SimplePicker from 'react-native-simple-picker';
var ImagePicker = require('react-native-image-picker');

let styles = require('../../style/addStyle'),
    menu = require('../../style/menuStyle');

    const options = ['Jamais', 'Chaque mois'];

    import Depense from './depense';
    import Epargne from '../epargne/epargne';
    import Pret from '../pret/pret';
    import Home from '../Home';

let updateDepense = React.createClass ({
  pickImage(){
    var options = {
    title:'Choisir une photo',
    takePhotoButtonTitle:'Prendre une photo',
    chooseFromLibraryButtonTitle:'Choisir une photo existante',
      storageOptions: {
        skipBackup:false,
        path: 'image'
      }
    };
    ImagePicker.showImagePicker( options, (response) => {
      if (response.didCancel) {
        this.setState({
            uri: ''
        });
      }
      else if (response.error) {
        this.setState({
          uri: ''
        });
      }
      else{
        this.setState({
          uri: response.origURL
        });
      }
    })
  },
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
  componentDidMount(){
    var config = {
      'headers': { 'Authorization': 'Bearer ' + this.props.token }
    };
    axios.get('http://104.131.74.22:8080/depense/'+this.props.depense_id,config)
    .then( response => {
      const depenseDetails = response.data['data'];
      this.setState({ name:depenseDetails.name,
                      montant:depenseDetails.montant,
                      categorie:depenseDetails.categorie,
                      selectedOption:depenseDetails.repeater,
                      payement:depenseDetails.payement,
                      uri: depenseDetails.picture,
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


        let categorieString = this.state.categorie,
        categorieArray = [],
        payement,
        picture;
        var patt = new RegExp(",");
        var test = patt.test(this.state.categorie);
        if( this.state.name !='' ){
          var name = this.state.name;
          if( !isNaN(this.state.montant) ){
            var montant = this.state.montant;
            if(categorieString != null){
              if( test === true ){
                categorieArray = categorieString.split(',');
              }
              else{
                categorieArray = this.state.categorie;
              }
              if ( this.state.selectedOption !='' ){
                if (this.state.payement !='' ){
                  var that = this;
                  axios.patch('http://104.131.74.22:8080/depense/'+this.props.depense_id, {
                    name:name,
                    montant:montant,
                    user:this.props.username,
                    categorie:categorieArray,
                    payement:this.state.payement,
                    repeater:this.state.selectedOption,
                    picture:this.state.uri,
                  },config)
                  .then(function (response) {
                    that.props.navigator.push({
                      component: Depense,
                      title:'Depense',
                      navigationBarHidden:true,
                      passProps:{username:that.props.username,token:that.props.token},
                    });
                  })
                  .catch(function (error) {
                    alert('Erreur:'+ error);
                  });
                }
                else{
                  alert(`Le moyen de payement n'a pas été choisi`);
                }
              }else {
                alert('La repeteur ne peut pas être vide');
              }
            }
            else{
                categorieArray = [];
            }
          }
          else{
            alert('Le montant doit être un nombre');
          }
        }
        else{
          alert('Le nom ne peut pas être vide');
        }

  },
  getInitialState: function() {
    return {
      payement:'',
      clicked:0,
      selectedOption:'',
      montant:'',
      imageSource:null,
      depenseDetails:'',
      name:'',
      categorie:'',
      uri:''
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
  _renderUpdate(){
    let depenseResult = this.state.depenseArray;
      return(
      <Form ref="updateDepense">
      <View style={styles.nameContainer}>
        <Text style={styles.label}>{'Nom de la dépense'.toUpperCase() }</Text>
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
              placeholderTextColor='#B6CBE1'
            />
          </View>
      </View>
      <View style={styles.montantContainerDepense}>
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
            <TouchableOpacity onPress={() => {this.increment(this.state.montant)}} style={styles.buttonMore}>
              <Image
                style={styles.increment}
                source={ require('../../img/increment.png')}
              />
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
          <TextInput style={styles.inputCategorie}
              ref="categorie"
              onChangeText={(text) => {
                this.setState( {categorie:text} );
              }}
              value={this.state.categorie.toString()}
              placeholder='Ex : Alimentation,Loisirs'
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
            <TouchableOpacity style={(this.state.clicked == 0 || this.state.clicked == 2)?styles.buttonChoose:styles.buttonChooseActived} onPress={() => this.setState({payement:'carte',clicked:1})}>
                <Image
                  style={styles.iconCredit}
                  source={ require('../../img/credit-card.png')}
                />
            </TouchableOpacity>
            <TouchableOpacity style={(this.state.clicked == 0 || this.state.clicked == 1)?styles.buttonChoose:styles.buttonChooseActived} onPress={() => this.setState({payement:'cash',clicked:2})}>
              <Image
                style={styles.iconCash}
                source={ require('../../img/cash-choose.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.pictureContainerTwo}>
          <Text style={styles.labelChoose}>{ 'Photo de la dépense'.toUpperCase() }</Text>
          <View style={styles.chooseContainerPhoto}>
            <TouchableOpacity style={styles.pictureChoose} onPress={() => {this.pickImage()}}>
              {this._renderImage()}
          </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.actionContainer}>
        <TouchableOpacity style={styles.cancelContainer} onPress={this.goDepense}>
          <Image source={require('../../img/cancel.png')} style={styles.cancelIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.checkContainer} onPress={this._handlePress}>
          <Image source={require('../../img/check.png')} style={styles.checkIcon}
          />
        </TouchableOpacity>
      </View>
      </Form>
      )
  },
  _renderImage(){

    if(this.state.uri){
        return(
          <Image
            style={styles.iconPhotoValid}
            source={{uri:this.state.uri}}
          />
      )
    }
    else{
      return(
        <Image
          style={styles.iconPhoto}
          source={require('../../img/photoThumb.png')}
        />
      )
    }

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
            source={ require('../../img/depense-active.png')}
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
      <StatusBar barStyle="dark-content"
      />
      {this._renderUpdate()}
      {this._renderMenu()}
      </View>
    )}
  });

  export default updateDepense;
