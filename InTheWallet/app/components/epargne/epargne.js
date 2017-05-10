import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView,  StatusBar, Image, Dimensions,Alert,ProgressViewIOS } from 'react-native';
import SearchBar from 'react-native-search-bar';
import EStyleSheet from 'react-native-extended-stylesheet';
import axios from 'axios';
import Swipeout from 'react-native-swipeout';
import Display from 'react-native-display';
import moment from 'moment';
let concat = require('unique-concat');

let nav = require('../../style/navStyle'),
    menu = require('../../style/menuStyle'),
    styles = require('../../style/listStyle');

import Home from '../Home';
import Depense from '../depense/depense';
import Pret from '../pret/pret';
import addEpargne from './addEpargne';
import addDepense from '../depense/addDepense';
import addPret from '../pret/addPret';
import updateEpargne from './updateEpargne';
import Details from './details';

let Epargne = React.createClass ({
  goHome(){
    this.props.navigator.push({
      component:Home,
      title:'Home',
      navigationBarHidden:true,
      passProps:{username:this.state.user,token:this.props.token},
    });
  },
  goDepense(){
    this.props.navigator.push({
      component:Depense,
      title:'Depense',
      navigationBarHidden:true,
      passProps:{username:this.state.user,token:this.props.token},
    });
  },
  goPret(){
    this.props.navigator.push({
      component: Pret,
      title:'Prêt',
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
  addPret(){
    this.props.navigator.push({
      component: addPret,
      title:'Ajouter prêt',
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
  getInitialState: function() {
    return {
      epargneArray:[[],[]],
      user:this.props.username,
      enable:false,
      result:[],
    }
  },
  componentDidMount(){
    var config = {
      'headers': { 'Authorization': 'Bearer ' + this.props.token }
    };
    axios.get('http://104.131.74.22:8080/epargne?user='+this.props.username,config)
    .then( response => {
      const epargneObject = response.data['data'];
      const epargneArray = Object.keys(epargneObject).map(key => epargneObject[key]);
      this.setState({ epargneArray });
    })
    .catch(function (error) {
      alert('Erreur:'+ error);
    });
  },
  _handleEdit(id){
    this.props.navigator.push({
      component: updateEpargne,
      title:'Modifier une dépense',
      navigationBarHidden:true,
      passProps:{username:this.state.user,epargne_id:id,token:this.props.token},
    })
  },
  _handleDelete(id){
    var config = {
      'headers': { 'Authorization': 'Bearer ' + this.props.token }
    };
    axios.delete('http://104.131.74.22:8080/epargne/'+id,config)
    .then( response => {
      alert('La dépense à bien été supprimée');
    })
    .catch(function (error) {
      alert('Erreur:'+ error);
    });
    axios.get('http://104.131.74.22:8080/epargne?user='+this.props.username,config)
    .then( response => {
      const epargneObject = response.data['data'];
      const epargneArray = Object.keys(epargneObject).map(key => epargneObject[key]);
      this.setState({ epargneArray });
    })
    .catch(function (error) {
      alert('Erreur:'+ error);
    });
  },
  goDetails(id,name,end){
    this.props.navigator.push({
      component: Details,
      title:name,
      passProps:{epargne_id:id,name:name,username:this.state.user,end:end,token:this.props.token},
      navigationBarHidden:true,
    });
  },
  toggleDisplay() {
  let toggle = !this.state.enable;
  this.setState({enable: toggle});
  },
  _renderSearch(text){
    let spendArray = (this.state.epargneArray);
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
  _renderEpargne(){
    if(this.state.search){
      let epargneArray = (this.state.search);
      return epargneArray.map( ( oEpargne, i ) => {
        {
          var start = moment(oEpargne.start)*1000;
          var end = moment(oEpargne.end,'DD-MM-YYYY')*1000;
          var now = + new Date();
          var percent = Math.round(( ( now - start ) / ( end - start ) ) * 100)/10000;
        }
      return (
        <Swipeout key={i} autoClose={true} right={[
          {
          component:<TouchableOpacity style={styles.swipeContainer} onPress={ ()=>{this._handleEdit(oEpargne.id)}}><Image style={styles.edit} source={ require('../../img/edit-swipe.png')}
            /></TouchableOpacity>,
          backgroundColor:'#FF9500'
        },
          {
          component:<TouchableOpacity onPress={
            () => Alert.alert(
            oEpargne.name,
            'Voulez-vous vraiment le supprimer?',
            [
              {text: 'Annuler', onPress: () => null},
              {text: 'Supprimer', onPress: () => {this._handleDelete(oEpargne.id)}},
            ]
          )
          } style={styles.swipeContainer}><Image style={styles.delete} source={ require('../../img/delete.png')}
            /></TouchableOpacity>,
          backgroundColor:'#FE3F35'
        }
      ]} backgroundColor={'#FFFFFF'}>
        <TouchableOpacity onPress={ ()=>{this.goDetails(oEpargne.id, oEpargne.name,oEpargne.end)}}>
        <View style={i % 2 ? styles.depenseContainerOdd:styles.depenseContainer}>
          <View style={styles.containerInfoCustom}>
            <View>
              <Text style={styles.nameCustom}>{oEpargne.name}</Text>
            </View>
            <View style={styles.secondInfo}>
              <Text style={styles.label}>DATE DE FIN</Text>
              <Text style={styles.date}>{oEpargne.end}</Text>
            </View>
            <View style={styles.progressContainer}>
              <View style={styles.progressView}>
                <ProgressViewIOS style={styles.progressBar} trackTintColor={'white'} progressTintColor='#538EB6'
                progress={Math.abs(percent)/100}/>
              <Text style={styles.percent}>{Math.abs(percent).toFixed(2)}%</Text>
              </View>
            </View>
          </View>
        </View>
        </TouchableOpacity>
        </Swipeout>
      )
    });
    }
    if(this.state.search == null ){
      let epargneArray = (this.state.epargneArray);
      return epargneArray.map( ( oEpargne, i ) => {
        {
          var start = moment(oEpargne.start)*1000;
          var end = moment(oEpargne.end,'DD-MM-YYYY')*1000;
          var now = + new Date();
          var percent = Math.round(( ( now - start ) / ( end - start ) ) * 100)/10000;
        }
      return (
        <Swipeout key={i} autoClose={true} right={[
          {
          component:<TouchableOpacity style={styles.swipeContainer} onPress={ ()=>{this._handleEdit(oEpargne.id)}}><Image style={styles.edit} source={ require('../../img/edit-swipe.png')}
            /></TouchableOpacity>,
          backgroundColor:'#FF9500'
        },
          {
          component:<TouchableOpacity onPress={
            () => Alert.alert(
            oEpargne.name,
            'Voulez-vous vraiment le supprimer?',
            [
              {text: 'Annuler', onPress: () => null},
              {text: 'Supprimer', onPress: () => {this._handleDelete(oEpargne.id)}},
            ]
          )
          } style={styles.swipeContainer}><Image style={styles.delete} source={ require('../../img/delete.png')}
            /></TouchableOpacity>,
          backgroundColor:'#FE3F35'
        }
      ]} backgroundColor={'#FFFFFF'}>
        <TouchableOpacity onPress={ ()=>{this.goDetails(oEpargne.id, oEpargne.name,oEpargne.end)}}>
        <View style={i % 2 ? styles.depenseContainerOdd:styles.depenseContainer}>
          <View style={styles.containerInfoCustom}>
            <View>
              <Text style={styles.nameCustom}>{oEpargne.name}</Text>
            </View>
            <View style={styles.secondInfo}>
              <Text style={styles.label}>DATE DE FIN</Text>
              <Text style={styles.date}>{oEpargne.end}</Text>
            </View>
            <View style={styles.progressContainer}>
              <View style={styles.progressView}>
                <ProgressViewIOS style={styles.progressBar} trackTintColor={'white'} progressTintColor='#538EB6'
                progress={Math.abs(percent)/100}/>
              <Text style={styles.percent}>{Math.abs(percent).toFixed(2)}%</Text>
              </View>
            </View>
          </View>
        </View>
        </TouchableOpacity>
        </Swipeout>
      )
    });
  }
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
          <Text style={nav.navTitle}>Liste des épargnes</Text>
          <TouchableOpacity style={nav.add} onPress={this.addEpargne}>
            <Image style={nav.addIcone} source={ require('../../img/addMenu.png')}
              />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.container}>
        <SearchBar
          ref='searchBar'
          placeholder='Recherche'
          onChangeText={(text) => {this._renderSearch(text)}}
          />
      <View style={styles.quickLinkContainer}>
          <TouchableOpacity style={styles.quickLink} onPress={this.goPret}>
            <View style={styles.quickLinkContent}>
              <Text style={styles.quickLinkText}>Prêt</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.quickLink}>
            <View style={styles.quickLinkContentActive}>
              <Text style={styles.quickLinkTextActive}>Épargne</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView scrollEnabled={true} automaticallyAdjustContentInsets={false} contentContainerStyle={styles.listCustom}>
        {this._renderEpargne()}
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
          <TouchableOpacity style={menu.menuLink}>
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

  export default Epargne;
