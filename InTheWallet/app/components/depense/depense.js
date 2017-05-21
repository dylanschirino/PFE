import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView,  StatusBar, Image, Dimensions,Alert } from 'react-native';
import SearchBar from 'react-native-search-bar';
import EStyleSheet from 'react-native-extended-stylesheet';
import axios from 'axios';
import Swipeout from 'react-native-swipeout';
import Display from 'react-native-display';
import Load from "react-native-loading-gif";
import DeviceInfo from 'react-native-device-info';

let concat = require('unique-concat');

let nav = require('../../style/navStyle'),
    menu = require('../../style/menuStyle'),
    styles = require('../../style/listStyle');

    import Home from '../Home';
    import Details from "./details";
    import Epargne from "../epargne/epargne";
    import Pret from '../pret/pret';
    import addDepense from "./addDepense";
    import addPret from "../pret/addPret";
    import addEpargne from "../epargne/addEpargne";
    import updateDepense from "./updateDepense";

let Depense = React.createClass ({
  componentDidMount(){
    var config = {
      'headers': { 'Authorization': 'Bearer ' + this.props.token }
    };
    axios.get('http://104.131.74.22:8080/depense?user='+this.props.username , config)
    .then( response => {
      const depenseObject = response.data['data'];
      const depenseArray = Object.keys(depenseObject).map(key => depenseObject[key]);
      this.setState({ depenseArray });
    })
    .catch(function (error) {
      alert('Erreur:'+ error);
    });


    this.refs.Load.setTimeClose(1500);
  },
  getInitialState: function() {
    return {
      depenseArray:[[],[]],
      user:this.props.username,
      name:'',
      enable:false,
      result:[],
      arrayCategorie:[],
      tokenID:this.props.token,
      repeater:null,
    }
  },
  toggleDisplay() {
    let toggle = !this.state.enable;
    this.setState({enable: toggle});
  },
  goDetails(id,name,payement){
        this.props.navigator.push({
          component: Details,
          title:name,
          passProps:{depense_id:id,name:name,username:this.state.user,token:this.props.token,payement:payement},
          navigationBarHidden:true,
        });
  },
  goHome(){
    this.props.navigator.push({
      component: Home,
      title:'Home',
      navigationBarHidden:true,
      passProps:{username:this.state.user,token:this.props.token},
    });
  },
  goEpargne(){
    this.props.navigator.push({
      component: Epargne,
      title:'Épargne',
      navigationBarHidden:true,
      passProps:{username:this.state.user,token:this.props.token},
    })
  },
  goPret(){
    this.props.navigator.push({
      component: Pret,
      title:'Prêt',
      navigationBarHidden:true,
      passProps:{username:this.state.user,token:this.props.token},
    })
  },
  addDepense(){
    this.props.navigator.push({
      component: addDepense,
      title:'Ajouter dépense',
      navigationBarHidden:true,
      passProps:{username:this.state.user,token:this.props.token},
    })
  },
  addPret(){
    this.props.navigator.push({
      component: addPret,
      title:'Ajouter prêt',
      navigationBarHidden:true,
      passProps:{username:this.state.user,token:this.props.token},
    })
  },
  addEpargne(){
    this.props.navigator.push({
      component: addEpargne,
      title:'Ajouter épargne',
      navigationBarHidden:true,
      passProps:{username:this.state.user,token:this.props.token},
    })
  },
  _handleEdit(id){
    this.props.navigator.push({
      component: updateDepense,
      title:'Modifier une dépense',
      navigationBarHidden:true,
      passProps:{username:this.state.user,depense_id:id,token:this.props.token},
    })
  },
  _handleDelete(id){
    var config = {
      'headers': { 'Authorization': 'Bearer ' + this.props.token }
    };
    var that = this;
    axios.delete('http://104.131.74.22:8080/depense/'+id,config)
    .then( response => {
      alert('La dépense à bien été supprimée');
      axios.get('http://104.131.74.22:8080/depense?user='+this.props.username,config)
      .then( response => {
        const depenseObject = response.data['data'];
        const depenseArray = Object.keys(depenseObject).map(key => depenseObject[key]);
        that.setState({ depenseArray });
      })
      .catch(function (error) {
        alert('Erreur:'+ error);
      });
    })
    .catch(function (error) {
      alert('Erreur:'+ error);
    });
  },
  _renderDepense(){
    let spendArray = (this.state.depenseArray).reverse();
    if( spendArray.length === 0 ){
      return (
        <View>
          <View style={styles.noContent}>
            <Text style={styles.noContentTitle}>Aucune dépense trouvée</Text>
          </View>
          <View style={styles.noContentButton}>
            <TouchableOpacity onPress={this.addDepense}>
              <Text style={styles.noContentButtonTitle}>Ajouter votre première dépense</Text>
            </TouchableOpacity>
          </View>
        </View>
      )
    }
    else{
      if(this.state.search){
        let searchArray = this.state.search;
        return searchArray.map( ( oDepense, i ) => {
          var payement = oDepense.payement;
          var repeater = oDepense.repeater;
          var id = oDepense.id;
          var name = oDepense.name;
          var generateName = function(){
            if(DeviceInfo.isTablet() == true){
              return oDepense.name;
            }
            else{
              if(name != null && name.length >= 15 ){
                return oDepense.name.substring(0,15)+'...';
              }
              else{
                return oDepense.name;
              }
            }
          }
            var generateImageSearch =function(){
            if( payement == 'carte'){
              return require('../../img/carte.png');
            }
            else if ( payement == 'cash'){
              return require('../../img/cash.png');
            }
          }
          var generateRepeatSearch = function(){
              if ( repeater == 'Jamais' || repeater == false ){
                return null;
              }
              else{
                return require('../../img/repeat.png');
              }
            }
            var _renderThumb = function(){
              if(oDepense.picture !=null){
                return(
                  <View style={styles.thumb}>
                    <Image style={styles.img} source={{uri: oDepense.picture}}
                    />
                  </View>
                )
              }
              else{
                return(
                  <View style={styles.thumb}>
                    <Image style={styles.imgThumb} source={ require('../../img/photo-camera.png')}
                    />
                  </View>
                )
              }
            }
              return (
                <Swipeout key={i} autoClose={true} right={[
                  {
                  component:<TouchableOpacity style={styles.swipeContainer} onPress={ ()=>{this._handleEdit(oDepense.id)}}><Image style={styles.edit} source={ require('../../img/edit-swipe.png')}
                    /></TouchableOpacity>,
                  backgroundColor:'#FF9500'
                },
                  {
                  component:<TouchableOpacity onPress={
                    () => Alert.alert(
                    oDepense.name,
                    'Voulez-vous vraiment le supprimer?',
                    [
                      {text: 'Annuler', onPress: () => null},
                      {text: 'Supprimer', onPress: () => {this._handleDelete(oDepense.id)}},
                    ]
                  )
                  } style={styles.swipeContainer}><Image style={styles.delete} source={ require('../../img/delete.png')}
                    /></TouchableOpacity>,
                  backgroundColor:'#FE3F35'
                }
              ]} backgroundColor={'#FFFFFF'}>
                <TouchableOpacity onPress={ ()=>{this.goDetails(oDepense.id, oDepense.name,oDepense.payement)}}>
                <View style={styles.depenseContainer}>
                  <View style={styles.smallInfo}>
                    <Image style={styles.imgRepeat} source={generateRepeatSearch()}
                      />
                    <Image style={styles.imgPayement} source={generateImageSearch()}
                        />
                  </View>
                  {_renderThumb()}
                  <View style={styles.containerInfo}>
                    <View style={styles.mainInfo}>
                      <Text style={styles.price}>{oDepense.montant}€</Text>
                      <Text style={styles.name}>{generateName()}</Text>
                    </View>
                    <View style={styles.secondInfo}>
                      <Text style={styles.label}>DÉPENSÉ LE</Text>
                      <Text style={styles.date}>{oDepense.created_at}</Text>
                    </View>
                  </View>
                </View>
                </TouchableOpacity>
                </Swipeout>
              )
        });
      }
      if(this.state.search == null ){
        return spendArray.map( ( oDepense, i ) => {
          {
            var name = oDepense.name;
            var generateName = function(){
              if(DeviceInfo.isTablet() == true){
                return oDepense.name;
              }
              else{
                if(name != null && name.length >= 15 ){
                  return oDepense.name.substring(0,15)+'...';
                }
                else{
                  return oDepense.name;
                }
              }
            }
            var generateImage = function(){
              if( oDepense.payement == 'carte'){
                return (require('../../img/carte.png'));
              }
              else if ( oDepense.payement == 'cash'){
                return (require('../../img/cash.png'));
              }
            }
            var generateRepeat = function(){
              if ( oDepense.repeater == 'Jamais' || oDepense.repeater == false ){
                return null;
              }
              else{
                return (require('../../img/repeat.png'));
              }
            }
            var _renderThumb = function(){
              if(oDepense.picture !=null){
                return(
                  <View style={styles.thumb}>
                    <Image style={styles.img} source={{uri: oDepense.picture}}
                    />
                  </View>
                )
              }
              else{
                return(
                  <View style={styles.thumb}>
                    <Image style={styles.imgThumb} source={ require('../../img/photo-camera.png')}
                    />
                  </View>
                )
              }
            }

          }
            return (
              <Swipeout key={i} autoClose={true} right={[
                {
                component:<TouchableOpacity style={styles.swipeContainer} onPress={ ()=>{this._handleEdit(oDepense.id)}}><Image style={styles.edit} source={ require('../../img/edit-swipe.png')}
                  /></TouchableOpacity>,
                backgroundColor:'#FF9500'
              },
                {
                component:<TouchableOpacity onPress={
                  () => Alert.alert(
                  oDepense.name,
                  'Voulez-vous vraiment le supprimer?',
                  [
                    {text: 'Annuler', onPress: () => null},
                    {text: 'Supprimer', onPress: () => {this._handleDelete(oDepense.id)}},
                  ]
                )
                } style={styles.swipeContainer}><Image style={styles.delete} source={ require('../../img/delete.png')}
                  /></TouchableOpacity>,
                backgroundColor:'#FE3F35'
              }
            ]} backgroundColor={'#FFFFFF'}>
              <TouchableOpacity onPress={ ()=>{this.goDetails(oDepense.id, oDepense.name,oDepense.payement)}}>
              <View style={i % 2 ? styles.depenseContainerOdd:styles.depenseContainer}>
                <View style={styles.smallInfo}>
                  <Image style={styles.imgRepeat} source={generateRepeat()}
                    />
                  <Image style={styles.imgPayement} source={generateImage()}
                      />
                </View>
                  {_renderThumb()}
                <View style={styles.containerInfo}>
                  <View style={styles.mainInfo}>
                    <Text style={styles.price}>{oDepense.montant}€</Text>
                    <Text style={styles.name}>{generateName()}</Text>
                  </View>
                  <View style={styles.secondInfo}>
                    <Text style={styles.label}>DÉPENSÉ LE</Text>
                    <Text style={styles.date}>{oDepense.created_at}</Text>
                  </View>
                </View>
              </View>
              </TouchableOpacity>
              </Swipeout>
            )
        } );
      }
    }
  },
  _renderCategorie(){
    let spendArray = (this.state.depenseArray);
    if(spendArray.length === 0 ){
      return(
        <Text style={styles.noCatText}>Aucun filtre trouvé</Text>
      )
    }
    else{
      {
        var array = [];
        for( var i in spendArray ){
          array = array.concat(spendArray[i]['categorie']);
        }
        var unique = array.filter( function( item, index, inputArray ) {
           return inputArray.indexOf(item) == index;
         });
      }
      return unique.map( ( Categorie, i ) => {
        return(
          <TouchableOpacity key={i} onPress={() => {this._renderSearchCategorie(Categorie)}}>
            <Text style={styles.catText}>{Categorie}</Text>
            </TouchableOpacity>
        )
      });
    }
  },
  _renderSearch(text){
    let spendArray = (this.state.depenseArray);
    var stringSearch = text;
    var match = function(depense){
      var depenseName = depense.name;
      var pattern = new RegExp( stringSearch );
      if(pattern.test(depenseName) == true){
        return true;
      }
    }
    var result = spendArray.filter(match);
    this.setState({search: result});

  },
  _renderSearchCategorie(categorie){
    let spendArray = (this.state.depenseArray);
    var stringSearch = categorie;
    var match = function(categorieArray){
      for( var i = 0; i<=categorieArray.categorie.length; i++ ){
          if( categorieArray.categorie[i] == stringSearch ){
            return true;
          }
      }
      }
    var result = spendArray.filter(match);
    this.setState({search: result});
  },
  _renderHeader(){
    return(
      <View style={nav.header}>
        <StatusBar barStyle="light-content"
          />
        <View style={nav.navBar}>
          <TouchableOpacity style={nav.backLink} onPress={this.goHome}>
            <Image style={nav.backIcone} source={ require('../../img/back.png')}
              />
            <Text style={nav.backText}>Accueil</Text>
          </TouchableOpacity>
          <Text style={nav.navTitle}>Dépenses</Text>
          <TouchableOpacity style={nav.add} onPress={this.addDepense}>
            <Image style={nav.addIcone} source={ require('../../img/addMenu.png')}
              />
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
              source={ require('../../img/depense-active.png')}
            />
          <Text style={menu.menuLabel}>Dépenses</Text>
          </TouchableOpacity>
          <TouchableOpacity style={menu.menuLinkAdd} onPress={() => {this.toggleDisplay()}}>
            <View style={menu.add}>
              <Image
                style={menu.iconeAdd}
                source={ require('../../img/add.png')}
              />
            </View>
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
  _renderDisplay(){
    return(
      <Display enable={this.state.enable} enterDuration={500} exitDuration={250} exit="fadeOutDown" enter="fadeInUp" style={menu.container}>
        <TouchableOpacity style={menu.buttonBack} onPress={() => {this.toggleDisplay()}}>
          <Image style={menu.imgAnnuler} source={ require('../../img/annuler.png')}
            />
        </TouchableOpacity>
          <TouchableOpacity style={menu.buttonContainerDepense} onPress={this.addDepense}>
            <Image
              style={menu.icone}
              source={ require('../../img/depenseB.png')}
            />
          <Text style={menu.buttonLabel}>{'Dépense'.toUpperCase()}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={menu.buttonContainerPret} onPress={this.addPret}>
            <Image
              style={menu.iconePret}
              source={ require('../../img/pretB.png')}
            />
          <Text style={menu.buttonLabel}>{'Prêt'.toUpperCase()}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={menu.buttonContainerEpargne} onPress={this.addEpargne}>
            <Image
              style={menu.iconeEpargne}
              source={ require('../../img/epargneB.png')}
            />
          <Text style={menu.buttonLabel}>{'Épargne'.toUpperCase()}</Text>
          </TouchableOpacity>
      </Display>
    )
  },
  render() {
    return (
      <View style={{flex:1,}}>
       <Load ref="Load"></Load>
      {this._renderHeader()}
      <View style={styles.container}>
        <ScrollView horizontal={true} scrollEnabled={true} contentContainerStyle={styles.categorie}>
          {this._renderCategorie()}
        </ScrollView>
        <SearchBar
          ref='searchBar'
          placeholder='Recherche'
          onChangeText={(text) => {this._renderSearch(text)}}
          />
      </View>
      <ScrollView scrollEnabled={true} contentContainerStyle={styles.listCustom}>
        {this._renderDepense()}
      </ScrollView>
      {this._renderDisplay()}
      {this._renderMenu()}
      </View>
    )}
  });

  export default Depense;
