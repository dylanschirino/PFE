import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView,  StatusBar, Image,ProgressViewIOS, TextInput} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Form from 'react-native-form';
import axios from 'axios';
import Chart from 'react-native-chart';
let styles = require('../style/homeStyle'),
    menu = require('../style/menuStyle');

const data = [
  ['Janv', 330],
  ['Févr', 300],
  ['Mars', 400],
  ['Avril', 900],
  ['Mai', 500],
  ['Juin', 100],
  ['Juil', 200],
  ['Août', 100],
  ['Sept', 1200],
  ['Oct', 300],
  ['Nov', 900],
  ['Déc', 900],
];

import Depense from "./depense/depense";

let Home = React.createClass ({
  componentDidMount() {
  axios.get('http://104.131.74.22:8080/home?user='+this.props.username)
    .then(response => {
      let dataTab = response.data['data'];
      const limit = dataTab[dataTab.length-1]['maxdepense'];
      this.setState({ limit });
    });
  axios.get('http://104.131.74.22:8080/depense?user='+this.props.username)
  .then( response => {
    const depenseObject = response.data['data'];
    const depenseArray = Object.keys(depenseObject).map(key => depenseObject[key]);
    console.log('Myarray:'+depenseArray[0]['name']);
    this.setState({ depenseArray });
  })
  .catch(function (error) {
    alert('Erreur:'+ error);
  });

  axios.get('http://104.131.74.22:8080/depense_sum/'+this.props.username)
  .then( response => {
    const total = response.data['data']['total'];
    this.setState({ total });
  })
  .catch(function (error) {
    alert('Erreur:'+ error);
  });
},
  getInitialState: function() {
    return {
      limit:'',
      name:'',
      total:'',
      depenseArray:[[],[]],
      user:this.props.username,
    }
  },
  goDepense(){
    this.props.navigator.push({
      component: Depense,
      title:'Dépense',
      navigationBarHidden:true,
      passProps:{username:this.state.user}
    });
  },
  _handlePress(event) {
  let limit=this.state.limit;

  if( limit ==""){
    alert("La limite ne peut pas être vide");
  }
  else {
    axios.post('http://104.131.74.22:8080/home', {
        maxdepense:limit,
        user:'dylan@schirino.be'
    })
    .then(function (response) {
      limit = response.data['data']['maxdepense'];
    })
       .catch(function (error) {
         alert('Erreur:'+ error);
       });
  }
},
_renderDepense(){
  let length = this.state.depenseArray.length;
  let threeLast = this.state.depenseArray.slice(Math.max(length - 3, 0));
  return threeLast.map( ( oDepense, i ) => {
      return (
        <View style={styles.depenseContainer} key={i}>
          <View style={styles.depenseContent}>
            <Text style={styles.price}>{oDepense.montant}€</Text>
            <Text style={styles.title}>{oDepense.name}</Text>
            <View>
              <Text style={styles.date}>{'24 Fev 2017'.toUpperCase() }</Text>
            </View>
          </View>
        </View>
      )
  } );
},
  render() {
    return (
      <View style={{flex:1,}}>
      <View style={styles.header}>
        <StatusBar barStyle="light-content"
        />
        <View style={styles.limitFirst}>
            <Text style={styles.amount}>{this.state.total}€</Text>
            <Text style={styles.label}> {'Dépenses du mois'.toUpperCase() } </Text>
          </View>
          <Form style={styles.limitSecond} ref="limite">
            <View style={styles.limitContainer}>
              <TextInput style={styles.amountLimit}
                ref="limit"
                onChangeText={(text) => {
                  this.setState( {limit:text} );
                }}
                value={this.state.limit.toString()}
                color='#FFFFFF'
                placeholderTextColor='#FFFFFF'/>
                <TouchableOpacity style={styles.button} onPress={this._handlePress}>
                <Image style={styles.buttonImg} source={ require('../img/edit.png')}
                  />
              </TouchableOpacity>
            </View>
            <Text style={styles.label}>{'Limite du mois'.toUpperCase() } </Text>
          </Form>
      </View>
      <View style={styles.progressContainer}>
        <View style={styles.progressView}>
          <ProgressViewIOS style={styles.progressBar} trackTintColor={'#124D73'} progressTintColor='white' progress={this.state.total/this.state.limit}/>
          <Text style={styles.percent}>{(Math.floor(this.state.total)/Math.floor(this.state.limit))*100}%</Text>
        </View>
      </View>
      <View style={styles.chartContainer}>
        <View>
          <Chart
  					style={styles.chart}
  					data={data}
  					type="bar"
  					showDataPoint={true}
            verticalGridStep={5}
            color={'#A1C1D6'}
            axisColor={'#EDF7FF'}
            gridColor={'#EDF7FF'}
            yAxisWidth={35}
            axisLabelColor={'#3769A0'}
            cornerRadius={8}
  				 />
        </View>
      </View>
      <View style={styles.lastDepenseContainer}>
        <View style={styles.depenseHeader}>
          <Text style={styles.depenseHeaderTitle}>DERNIÈRES DÉPENSES</Text>
        </View>
        <View style={styles.depenseContainerCustom}>
          {this._renderDepense()}
        </View>
      </View>
      <View style={menu.menu}>
          <TouchableOpacity style={menu.menuLink}>
            <Image
              style={menu.icone}
              source={ require('../img/home.png')}
            />
          <Text style={menu.menuLabel}>Accueil</Text>
          </TouchableOpacity>
          <TouchableOpacity style={menu.menuLink} onPress={this.goDepense}>
            <Image
              style={menu.icone}
              source={ require('../img/depense.png')}
            />
          <Text style={menu.menuLabel}>Dépenses</Text>
          </TouchableOpacity>
          <TouchableOpacity style={menu.menuLinkAdd}>
            <View style={menu.add}>
              <Image
                style={menu.iconeAdd}
                source={ require('../img/add.png')}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={menu.menuLink}>
            <Image
              style={menu.iconeEpargne}
              source={ require('../img/epargne.png')}
            />
          <Text style={menu.menuLabel}>Épargne</Text>
          </TouchableOpacity>
          <TouchableOpacity style={menu.menuLink}>
            <Image
              style={menu.iconePret}
              source={ require('../img/pret.png')}
            />
          <Text style={menu.menuLabel}>Prêt</Text>
          </TouchableOpacity>
      </View>
      </View>

    )}
  });

  module.exports = Home;
