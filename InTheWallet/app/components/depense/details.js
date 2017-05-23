import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView,  StatusBar, Image, Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import SearchBar from 'react-native-search-bar';
import axios from 'axios';
import Display from 'react-native-display';

let nav = require('../../style/navStyle'),
    styles = require('../../style/detailStyle'),
    menu = require('../../style/menuStyle');

    import Depense from '../depense/depense';
    import Pret from '../pret/pret';
    import Home from '../Home';
    import Epargne from '../epargne/epargne';
    import updateDepense from './updateDepense';
    import addPret from "../pret/addPret";
    import addDepense from "../depense/addDepense";
    import addEpargne from "../epargne/addEpargne";

let Details = React.createClass ({
  goHome(){
    this.props.navigator.push({
      component: Home,
      title:'Home',
      navigationBarHidden:true,
      passProps:{username:this.props.username,token:this.props.token},
    })
  },
  goEpargne(){
    this.props.navigator.push({
      component: Epargne,
      title:'Epargne',
      navigationBarHidden:true,
      passProps:{username:this.props.username,token:this.props.token},
    })
  },
  goDepense(){
    this.props.navigator.push({
      component: Depense,
      title:'Dépense',
      navigationBarHidden:true,
      passProps:{username:this.props.username,token:this.props.token},
    })
  },
  goPret(){
    this.props.navigator.push({
      component: Pret,
      title:'Prêt',
      navigationBarHidden:true,
      passProps:{username:this.props.username,token:this.props.token},
    })
  },
  updateDepense(){
    this.props.navigator.push({
      component: updateDepense,
      title:'updateDepense',
      navigationBarHidden:true,
      passProps:{username:this.props.username,token:this.props.token,depense_id:this.props.depense_id},
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
  componentDidMount(){
    var config = {
      'headers': { 'Authorization': 'Bearer ' + this.props.token }
    };
    axios.get('http://104.131.74.22:8080/depense/'+this.props.depense_id,config)
    .then( response => {
      const depenseDetails = response.data['data'];
      const payement = response.data['data']['payement'];
      const categorie = response.data['data']['categorie'];
      this.setState({ depenseDetails });
      this.setState({payement});
      if(categorie == '' ){
        var noCategorie = 'Aucune catégorie';
        this.setState({categorie:noCategorie});
      }
      else{
        this.setState({categorie});
      }
    })
    .catch(function (error) {
      alert('Erreur:'+ error);
    });

        if(this.props.name != null && this.props.name.length >= 15 ){
          var name = this.props.name.substring(0,15)+'...';
          this.setState({name});
        }
        else{
          this.setState({name:this.props.name});
        }

    let monthArray = ['JAN','FÉV','MARS','AVRIL','MAI','JUIN','JUIL','AOÛT','SEP','OCT','NOV','DÉC'];
    let currentDate = new Date(),
    day = currentDate.getDate(),
    monthUpdated = monthArray[currentDate.getMonth()];

    if( day == 1 ){
      axios.patch('http://104.131.74.22:8080/depense/'+this.props.depense_id, {
        payement:this.props.payement,
        month:monthUpdated,
      },config)
      .then(function (response) {
      })
      .catch(function (error) {
        alert('Erreur:'+ error);
      });
    }
  },
  getInitialState: function() {
    return {
      depenseDetails:'',
      payement:'',
      user:this.props.username,
      enable:false,
      categorie:'',
      name:'',
    }
  },
  toggleDisplay() {
    let toggle = !this.state.enable;
    this.setState({enable: toggle});
  },
  _renderDetails(){
        return (
          <View style={styles.contentInfo}>
            <Text style={styles.label}>Montant dépensé</Text>
            <Text style={styles.info}>{this.state.depenseDetails.montant}€</Text>
            <Text style={styles.label}>Jour de la dépense</Text>
            <Text style={styles.info}>{this.state.depenseDetails.created_at}</Text>
            <Text style={styles.label}>La dépense est répété</Text>
            <Text style={styles.info}>{this.state.depenseDetails.repeater}</Text>
            <Text style={styles.label}>Catégories</Text>
            <Text style={styles.info}>{this.state.categorie.toString()}</Text>
            <Text style={styles.label}>Mode de payement</Text>
            <Text style={styles.info}>{this.state.depenseDetails.payement}</Text>
          </View>
        )
  },
  _renderThumb(){
    if(this.state.depenseDetails.picture !=null){
      return(
        <Image source={{uri: this.state.depenseDetails.picture}} style={styles.photo}
          />
      )
    }
    else{
      return(
        <Image source={require('../../img/nophoto.png')} style={styles.photo}
        />
      )
    }
  },
  _renderHead(){
    return(
      <View style={nav.header}>
        <StatusBar barStyle="light-content"
          />
        <View style={nav.navBar}>
          <TouchableOpacity style={nav.backLink} onPress={this.goDepense}>
            <Image style={nav.backIcone} source={ require('../../img/back.png')}
              />
            <Text style={nav.backText}>Dépenses</Text>
          </TouchableOpacity>
          <Text style={nav.navTitle}>{this.state.name}</Text>
          <TouchableOpacity style={nav.add} onPress={this.updateDepense}>
            <Image style={nav.addIcone} source={ require('../../img/edit-details.png')}
              />
          </TouchableOpacity>
        </View>
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
  render() {
    return (
      <View style={{flex:1,}}>
        {this._renderHead()}
        <View style={styles.headContent}>
        {this._renderThumb()}
        </View>
        <View style={styles.content}>
          <View style={styles.contentHead}>
            <TouchableOpacity onPress={this.goDepense} style={styles.link}>
            <Image source={require('../../img/arrow-back.png')} style={styles.arrow}
            />
            </TouchableOpacity>
            <Text style={styles.title}>{this.props.name}</Text>
          </View>
          {this._renderDetails()}
        </View>
        {this._renderDisplay()}
        {this._renderMenu()}
      </View>
    )}
  });

  export default Details;
