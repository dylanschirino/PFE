import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView,  StatusBar, Image, Dimensions,Alert } from 'react-native';
import SearchBar from 'react-native-search-bar';
import EStyleSheet from 'react-native-extended-stylesheet';
import axios from 'axios';
import Swipeout from 'react-native-swipeout';
import Display from 'react-native-display';

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
    axios.get('http://104.131.74.22:8080/depense?user='+this.props.username)
    .then( response => {
      const depenseObject = response.data['data'];
      const depenseArray = Object.keys(depenseObject).map(key => depenseObject[key]);
      this.setState({ depenseArray });
    })
    .catch(function (error) {
      alert('Erreur:'+ error);
    });
  },
  getInitialState: function() {
    return {
      depenseArray:[[],[]],
      user:this.props.username,
      name:'',
      enable:false,
    }
  },
  toggleDisplay() {
  let toggle = !this.state.enable;
  this.setState({enable: toggle});
  },
  goDetails(id,name){
    let spendArray = this.state.depenseArray;

        this.props.navigator.push({
          component: Details,
          title:name,
          passProps:{depense_id:id,name:name,username:this.state.user},
          navigationBarHidden:true,
        });
  },
  goHome(){
    this.props.navigator.push({
      component: Home,
      title:'Home',
      navigationBarHidden:true,
      passProps:{username:this.state.user},
    });
  },
  goEpargne(){
    this.props.navigator.push({
      component: Epargne,
      title:'Épargne',
      navigationBarHidden:true,
      passProps:{username:this.state.user},
    })
  },
  goPret(){
    this.props.navigator.push({
      component: Pret,
      title:'Prêt',
      navigationBarHidden:true,
      passProps:{username:this.state.user},
    })
  },
  addDepense(){
    this.props.navigator.push({
      component: addDepense,
      title:'Ajouter dépense',
      navigationBarHidden:true,
      passProps:{username:this.state.user},
    })
  },
  addPret(){
    this.props.navigator.push({
      component: addPret,
      title:'Ajouter prêt',
      navigationBarHidden:true,
      passProps:{username:this.state.user},
    })
  },
  addEpargne(){
    this.props.navigator.push({
      component: addEpargne,
      title:'Ajouter épargne',
      navigationBarHidden:true,
      passProps:{username:this.state.user},
    })
  },
  _handleEdit(id){
    this.props.navigator.push({
      component: updateDepense,
      title:'Modifier une dépense',
      navigationBarHidden:true,
      passProps:{username:this.state.user,depense_id:id},
    })
  },

  _handleDelete(id){
    axios.delete('http://104.131.74.22:8080/depense/'+id)
    .then( response => {
      alert('La dépense à bien été supprimée');
    })
    .catch(function (error) {
      alert('Erreur:'+ error);
    });
    axios.get('http://104.131.74.22:8080/depense?user='+this.props.username)
    .then( response => {
      const depenseObject = response.data['data'];
      const depenseArray = Object.keys(depenseObject).map(key => depenseObject[key]);
      this.setState({ depenseArray });
    })
    .catch(function (error) {
      alert('Erreur:'+ error);
    });
  },
  _renderDepense(){
  let spendArray = (this.state.depenseArray).reverse();
  return spendArray.map( ( oDepense, i ) => {
    {
      this.state.name = oDepense.name;
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
        <TouchableOpacity onPress={ ()=>{this.goDetails(oDepense.id, oDepense.name)}}>
        <View style={i % 2 ? styles.depenseContainerOdd:styles.depenseContainer}>
          <View style={styles.smallInfo}>
            <Image style={styles.imgRepeat} source={generateRepeat()}
              />
            <Image style={styles.imgPayement} source={generateImage()}
                />
          </View>
          <View style={styles.thumb}>
            <Image style={styles.img} source={ require('../../img/photo.jpg')}
              />
          </View>
          <View style={styles.containerInfo}>

            <View style={styles.mainInfo}>
              <Text style={styles.price}>{oDepense.montant}€</Text>
              <Text style={styles.name}>{oDepense.name}</Text>
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
},
  render() {
    return (
      <View style={{flex:1,}}>
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
      <View style={styles.container}>
        <ScrollView horizontal={true} scrollEnabled={true} contentContainerStyle={styles.categorie}>
          <Text style={styles.catText}>Général</Text>
          <Text style={styles.catText}>Loisirs</Text>
          <Text style={styles.catText}>Alimentation</Text>
          <Text style={styles.catText}>Maison</Text>
          <Text style={styles.catText}>Santé</Text>
        </ScrollView>
        <SearchBar
          ref='searchBar'
          placeholder='Recherche'
          />
      </View>
      <ScrollView scrollEnabled={true} contentContainerStyle={styles.listCustom}>
        {this._renderDepense()}
      </ScrollView>
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
      </View>
    )}
  });

  export default Depense;
