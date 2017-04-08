import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView,  StatusBar, Image,ProgressViewIOS, TextInput} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Form from 'react-native-form';
import axios from 'axios';
import Chart from 'react-native-chart';
let styles = require('../style/homeStyle');

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

let Home = React.createClass ({
  _handlePress(event) {
  let limit=this.state.limit;

  if( limit ==""){
    alert("La limite ne peut pas être vide");
  }
  else {
    return axios.post('http://104.131.74.22:8080/home', {
        maxdepense:limit,
    })
    .then(function (response) {
      const limitdepense = response.data['data']['maxdepense'];
      return limitdepense;
    })
       .catch(function (error) {
         alert('Erreur:'+ error);
       });
  }
},
  render() {
    return (
      <View style={{flex:1,}}>
      <View style={styles.header}>
        <StatusBar barStyle="light-content"
        />
        <View style={styles.limitFirst}>
            <Text style={styles.amount}>1.500€</Text>
            <Text style={styles.label}> {'Dépenses du mois'.toUpperCase() } </Text>
          </View>
          <Form style={styles.limitSecond} ref="limite">
            <View style={styles.limitContainer}>
              <TextInput style={styles.amountLimit}
                ref="limit"
                onChangeText={(text) => {
                  this.setState( {limit:text} );
                }}
                placeholder='2'
                color='#FFFFFF'
                placeholderTextColor='#FFFFFF'/>
                <TouchableOpacity style={styles.button} onPress={this._handlePress}>
                <Image style={styles.buttonImg} source={ require('../img/edit.png')}
                  />
              </TouchableOpacity>
            </View>
            <Text style={styles.label}>{'Limite du mois'.toUpperCase() } </Text>
          </Form>
          <Text>
            {limit}
          </Text>
      </View>
      <View style={styles.progressContainer}>
        <View style={styles.progressView}>
          <ProgressViewIOS style={styles.progressBar} trackTintColor={'#124D73'} progressTintColor='white' progress={1}/>
          <Text style={styles.percent}>50%</Text>
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
        <View style={styles.depenseContainer}>
          <View style={styles.depenseContent}>
            <Text style={styles.price}>10€</Text>
            <Text style={styles.title}>Glace au chocolat de …</Text>
            <View>
              <Text style={styles.date}>{'24 Fev 2017'.toUpperCase() }</Text>
            </View>
          </View>
        </View>
        <View style={styles.depenseContainerCustom}>
          <View style={styles.depenseContent}>
            <Text style={styles.price}>41.5€</Text>
            <Text style={styles.title}>Plein d’essence à 1.1 …</Text>
            <View>
              <Text style={styles.date}>{'24 Fev 2017'.toUpperCase() }</Text>
            </View>
          </View>
        </View>
        <View style={styles.depenseContainer}>
          <View style={styles.depenseContent}>
            <Text style={styles.price}>340€</Text>
            <Text style={styles.title}>Glace au chocolat de …</Text>
            <View>
              <Text style={styles.date}>{'24 Fev 2017'.toUpperCase() }</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.menu}>
          <TouchableOpacity style={styles.menuLink}>
            <Image
              style={styles.icone}
              source={ require('../img/home.png')}
            />
          <Text style={styles.menuLabel}>Accueil</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuLink}>
            <Image
              style={styles.icone}
              source={ require('../img/depense.png')}
            />
          <Text style={styles.menuLabel}>Dépenses</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuLinkAdd}>
            <View style={styles.add}>
              <Image
                style={styles.iconeAdd}
                source={ require('../img/add.png')}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuLink}>
            <Image
              style={styles.iconeEpargne}
              source={ require('../img/epargne.png')}
            />
          <Text style={styles.menuLabel}>Épargne</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuLink}>
            <Image
              style={styles.iconePret}
              source={ require('../img/pret.png')}
            />
          <Text style={styles.menuLabel}>Prêt</Text>
          </TouchableOpacity>
      </View>
      </View>

    )}
  });

  module.exports = Home;
