import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView,  StatusBar, Image,ProgressViewIOS} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
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
          <View style={styles.limitSecond}>
            <Text style={styles.amount}>2.200€</Text>
            <Text style={styles.label}>{'Limite du mois'.toUpperCase() } </Text>
          </View>
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
        <View>

        </View>
      </View>
      </View>

    )}
  });

  module.exports = Home;
